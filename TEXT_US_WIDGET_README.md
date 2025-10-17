# Text Us Widget Documentation

## Overview
The Text Us Widget is a floating contact form that appears in the bottom-right corner of your website. Users can click the phone icon to open a form and send messages directly to your n8n webhook.

## Features
- **Floating Button**: A prominent phone icon button fixed to the bottom-right corner
- **Animated Form**: Smooth slide-up animation when opened
- **Form Fields**:
  - Name (required)
  - Phone Number (required)
  - Message (required)
- **Webhook Integration**: Sends data directly to your n8n instance
- **User Feedback**: Shows success/error messages after submission
- **Auto-close**: Form automatically closes 2 seconds after successful submission
- **Responsive Design**: Works perfectly on mobile and desktop devices

## Installation
The widget has been added to your project:
- Component file: `/src/components/ui/TextUsWidget.jsx`
- Integrated into: `/src/App.jsx`

## Webhook Configuration
The webhook URL is configured in the component:
```javascript
https://n8n-boringwork-u57538.vm.elestio.app/webhook/60de8bbc-63ba-41ef-88f6-b9c1543c78b4
```

### Webhook Payload Format
When a user submits the form, the following JSON data is sent:
```json
{
  "name": "John Doe",
  "number": "0400 000 000",
  "message": "I'm interested in your services"
}
```

## Customization

### Changing Colors
The widget uses Tailwind CSS with your custom primary colors. To change colors:
- **Button color**: Modify `bg-primary-600` class
- **Header color**: Modify `bg-primary-600` class
- **Focus rings**: Modify `focus:ring-primary-500` classes

### Changing Position
To move the widget to a different corner:
- Bottom-left: Change `right-6` to `left-6`
- Top-right: Change `bottom-6` to `top-6`
- Top-left: Change both `right-6` to `left-6` and `bottom-6` to `top-6`

### Changing the Icon
The component uses `MessageCircle` from lucide-react. To use a phone icon instead:
```jsx
import { Phone, X, Send } from 'lucide-react';
// Replace MessageCircle with Phone in the button
<Phone className="w-6 h-6 text-white" />
```

### Modifying Form Fields
To add or remove fields, edit the `formData` state and add corresponding input fields in the form.

## Usage
The widget is automatically available on all pages since it's added to the main App component. No additional setup required!

## Browser Compatibility
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Accessibility Features
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Required field indicators
- Clear visual feedback

## Testing the Widget
1. Start your development server: `npm run dev`
2. Look for the floating button in the bottom-right corner
3. Click to open the form
4. Fill out the fields and submit
5. Check your n8n workflow for the received data

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify the webhook URL is accessible
- Ensure n8n workflow is active

### Styling issues?
- Make sure Tailwind CSS is properly configured
- Check that the build process includes the component file

### Form not appearing?
- Verify the component is imported in App.jsx
- Check for JavaScript errors in the browser console

