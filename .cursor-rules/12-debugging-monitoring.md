# 12 - Debugging & Monitoring

## DEBUGGING & MONITORING MANDATE

**CRITICAL RULE**: All components MUST include comprehensive debugging, error handling, and performance monitoring for production-ready applications.

## CONSOLE LOGGING REQUIREMENTS

### Mandatory Logging Standards
Every component MUST include strategic console logging for:
- **Component lifecycle** events (mount, unmount, updates)
- **State changes** and data flow
- **User interactions** and event handling
- **Error conditions** and edge cases
- **Performance metrics** and optimization opportunities

### Logging Implementation
```tsx
// ✅ REQUIRED - Comprehensive logging
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Component lifecycle logging
  useEffect(() => {
    console.log('UserProfile: Component mounted', { userId });
    
    return () => {
      console.log('UserProfile: Component unmounting', { userId });
    };
  }, [userId]);

  // State change logging
  useEffect(() => {
    console.log('UserProfile: User state changed', { 
      userId, 
      user: user ? 'loaded' : 'null',
      loading,
      error: error ? error.message : 'none'
    });
  }, [user, loading, error, userId]);

  // User interaction logging
  const handleEditProfile = useCallback((field, value) => {
    console.log('UserProfile: Edit profile action', { 
      userId, 
      field, 
      value,
      timestamp: new Date().toISOString()
    });
    
    // Handle edit logic...
  }, [userId]);

  // Error logging
  const handleError = useCallback((error) => {
    console.error('UserProfile: Error occurred', {
      userId,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    setError(error);
  }, [userId]);

  // Performance logging
  useEffect(() => {
    const startTime = performance.now();
    
    const loadUser = async () => {
      try {
        setLoading(true);
        console.log('UserProfile: Starting user fetch', { userId });
        
        const userData = await fetchUser(userId);
        setUser(userData);
        
        const endTime = performance.now();
        console.log('UserProfile: User fetch completed', {
          userId,
          duration: `${endTime - startTime}ms`,
          dataSize: JSON.stringify(userData).length
        });
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId, handleError]);

  return (
    <div className="user-profile">
      {/* Component JSX */}
    </div>
  );
};
```

### Logging Categories

#### 1. Component Lifecycle
```tsx
// Mount/Unmount logging
useEffect(() => {
  console.log('ComponentName: Mounted', { props });
  return () => console.log('ComponentName: Unmounting', { props });
}, []);

// Update logging
useEffect(() => {
  console.log('ComponentName: Updated', { 
    prevProps: prevPropsRef.current, 
    currentProps: props 
  });
  prevPropsRef.current = props;
}, [props]);
```

#### 2. State Management
```tsx
// State change logging
useEffect(() => {
  console.log('ComponentName: State changed', {
    stateName: 'user',
    previousValue: prevUserRef.current,
    newValue: user,
    timestamp: new Date().toISOString()
  });
  prevUserRef.current = user;
}, [user]);
```

#### 3. User Interactions
```tsx
// Event logging
const handleClick = useCallback((event) => {
  console.log('ComponentName: User interaction', {
    action: 'click',
    target: event.target.tagName,
    coordinates: { x: event.clientX, y: event.clientY },
    timestamp: new Date().toISOString()
  });
  
  // Handle click logic...
}, []);
```

#### 4. Performance Monitoring
```tsx
// Performance logging
const measurePerformance = useCallback((operation, fn) => {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  
  console.log('ComponentName: Performance metric', {
    operation,
    duration: `${endTime - startTime}ms`,
    timestamp: new Date().toISOString()
  });
  
  return result;
}, []);
```

## ERROR HANDLING REQUIREMENTS

### Error Boundary Implementation
```tsx
// ✅ REQUIRED - Error boundary for all components
class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary: Component error caught', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary: Error details', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>We're working to fix this issue.</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Async Error Handling
```tsx
// ✅ REQUIRED - Comprehensive async error handling
const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('DataComponent: Starting data fetch');
      
      const response = await fetch('/api/data');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
      
      console.log('DataComponent: Data fetch successful', {
        dataSize: JSON.stringify(result).length,
        recordCount: Array.isArray(result) ? result.length : 1
      });
      
    } catch (err) {
      console.error('DataComponent: Fetch error', {
        error: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
      });
      
      setError({
        message: err.message,
        timestamp: new Date().toISOString(),
        retryable: true
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // Retry mechanism
  const handleRetry = useCallback(() => {
    console.log('DataComponent: Retry requested');
    fetchData();
  }, [fetchData]);

  return (
    <ComponentErrorBoundary>
      {error ? (
        <ErrorDisplay error={error} onRetry={handleRetry} />
      ) : (
        <DataDisplay data={data} loading={loading} />
      )}
    </ComponentErrorBoundary>
  );
};
```

## TOAST NOTIFICATION SYSTEM

### Toast Implementation Requirements
```tsx
// ✅ REQUIRED - Toast notification system
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now().toString();
    const toast = { id, message, type, duration };
    
    console.log('Toast: Adding notification', { id, type, message });
    
    setToasts(prev => [...prev, toast]);
    
    setTimeout(() => {
      console.log('Toast: Auto-removing notification', { id });
      removeToast(id);
    }, duration);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    console.log('Toast: Removing notification', { id });
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

// Toast component
const Toast = ({ toast, onRemove }) => {
  useEffect(() => {
    console.log('Toast: Rendering notification', { 
      id: toast.id, 
      type: toast.type 
    });
  }, [toast]);

  return (
    <div className={`toast toast-${toast.type}`}>
      <span>{toast.message}</span>
      <button onClick={() => onRemove(toast.id)}>×</button>
    </div>
  );
};
```

### Toast Usage Examples
```tsx
// Success notifications
const handleSave = async () => {
  try {
    await saveData();
    addToast('Data saved successfully!', 'success');
    console.log('Save: Operation completed successfully');
  } catch (error) {
    addToast('Failed to save data', 'error');
    console.error('Save: Operation failed', error);
  }
};

// Error notifications
const handleError = (error) => {
  addToast(`Error: ${error.message}`, 'error', 8000);
  console.error('Error: User notification sent', error);
};

// Info notifications
const handleInfo = (message) => {
  addToast(message, 'info');
  console.log('Info: User notification sent', { message });
};
```

## PERFORMANCE MONITORING

### Performance Tracking Requirements
```tsx
// ✅ REQUIRED - Performance monitoring
const usePerformanceMonitor = (componentName) => {
  const [metrics, setMetrics] = useState({});

  const trackRender = useCallback(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      console.log('Performance: Component render', {
        component: componentName,
        renderTime: `${renderTime}ms`,
        timestamp: new Date().toISOString()
      });
      
      setMetrics(prev => ({
        ...prev,
        renderTime,
        renderCount: (prev.renderCount || 0) + 1
      }));
    };
  }, [componentName]);

  const trackAsyncOperation = useCallback((operationName, operation) => {
    const startTime = performance.now();
    
    console.log('Performance: Starting async operation', {
      component: componentName,
      operation: operationName,
      timestamp: new Date().toISOString()
    });
    
    return operation().finally(() => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      console.log('Performance: Async operation completed', {
        component: componentName,
        operation: operationName,
        duration: `${duration}ms`,
        timestamp: new Date().toISOString()
      });
    });
  }, [componentName]);

  return { trackRender, trackAsyncOperation, metrics };
};
```

### Performance Usage
```tsx
const OptimizedComponent = () => {
  const { trackRender, trackAsyncOperation } = usePerformanceMonitor('OptimizedComponent');
  
  useEffect(trackRender);
  
  const handleAsyncAction = useCallback(async () => {
    await trackAsyncOperation('data-fetch', async () => {
      const response = await fetch('/api/data');
      return response.json();
    });
  }, [trackAsyncOperation]);
  
  return <div>Component content</div>;
};
```

## INPUT VALIDATION & SECURITY

### Validation Requirements
```tsx
// ✅ REQUIRED - Input validation
const useInputValidation = (validationRules) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const validate = useCallback((field, value) => {
    const rules = validationRules[field];
    if (!rules) return null;

    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        console.log('Validation: Field validation failed', {
          field,
          value: typeof value === 'string' ? value.substring(0, 50) : value,
          error,
          timestamp: new Date().toISOString()
        });
        return error;
      }
    }
    
    return null;
  }, [validationRules]);

  const setValue = useCallback((field, value) => {
    console.log('Validation: Setting field value', { field, hasValue: !!value });
    
    setValues(prev => ({ ...prev, [field]: value }));
    
    const error = validate(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  }, [validate]);

  return { values, errors, setValue, validate };
};
```

## ENFORCEMENT CHECKLIST

### Before Component Development:
- [ ] Plan logging strategy for component lifecycle
- [ ] Design error handling approach
- [ ] Plan toast notification usage
- [ ] Identify performance monitoring needs
- [ ] Plan input validation requirements

### During Development:
- [ ] Add comprehensive console logging
- [ ] Implement error boundaries
- [ ] Add toast notifications for user feedback
- [ ] Include performance monitoring
- [ ] Implement input validation

### Quality Assurance:
- [ ] All console logs provide useful debugging info
- [ ] Error handling covers all edge cases
- [ ] Toast notifications work correctly
- [ ] Performance metrics are tracked
- [ ] Input validation prevents security issues

## VIOLATION CONSEQUENCES

**IMMEDIATE ACTION REQUIRED** for violations:
1. **Add missing logging** for component lifecycle and interactions
2. **Implement error boundaries** for all components
3. **Add toast notifications** for user feedback
4. **Include performance monitoring** for critical operations
5. **Implement input validation** for all user inputs

**ZERO TOLERANCE** for:
- Components without console logging
- Missing error handling
- No user feedback mechanisms
- Unmonitored performance issues
- Unvalidated user inputs

This development workflow system ensures production-ready applications with comprehensive debugging, error handling, and user experience features while maintaining the creative variety and professional standards established in the existing design system.
