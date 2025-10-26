# TextUs Widget - Fix Summary

## ✅ Fixed Issues

### 1. **Data Format Mismatch** (CRITICAL)
**Problem:** The widget was sending `{ name, number, message }` but n8n expected `{ query: { name, mobile, message } }`

**Solution:** Updated the widget to format data correctly:
```javascript
const payload = {
  query: {
    name: formData.name,
    mobile: formData.number,  // Changed from 'number' to 'mobile'
    message: formData.message
  }
};
```

### 2. **White Text Issue** (UI)
**Problem:** Input fields had white text on white background

**Solution:** Added `text-gray-900` class to all input fields:
- Name input
- Phone number input  
- Message textarea

### 3. **CORS Configuration** (CRITICAL)
**Problem:** n8n workflow had CORS set to `https://www.boringwork.com.au` only

**Solution:** Updated CORS headers to allow all origins:
```json
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
}
```

## 🔧 What You Need to Do in n8n

### Step 1: Import Updated Workflow
1. Go to your n8n instance: `https://n8n-boringwork-u57538.vm.elestio.app`
2. Find the existing "Red Ox Digital Sms Agent" workflow
3. **Option A:** Delete the old one and import `Red Ox Digital Sms Agent - UPDATED.json`
4. **Option B:** Edit the existing workflow manually (see Step 2)

### Step 2: Manual Update (if not importing)

If you prefer to manually update the existing workflow:

#### In the "Respond to Webhook" node:
Change the CORS header from:
```
Access-Control-Allow-Origin: https://www.boringwork.com.au
```
To:
```
Access-Control-Allow-Origin: *
```

#### Verify the data paths are correct:
The workflow should be reading:
- `{{ $json.query.name }}`
- `{{ $json.query.mobile }}`
- `{{ $json.query.message }}`

### Step 3: Verify Workflow Status
- Make sure the workflow is **ACTIVE** (toggle at the top should be ON)
- Test it by clicking "Test Workflow" in n8n

### Step 4: Test the Form
1. Visit your website
2. Open the Text Us widget
3. Fill in the form:
   - Name: Test User
   - Phone: 0400000000
   - Message: Testing the fixed widget
4. Submit and check:
   - ✅ You should see "Message sent successfully!"
   - ✅ You should receive an SMS
   - ✅ You should receive an email notification

## 📋 Expected Data Flow

```
Website Form
    ↓
{
  "query": {
    "name": "Ryan Cox",
    "mobile": "0478048146",
    "message": "Your message here"
  }
}
    ↓
n8n Webhook Receives
    ↓
SMS Sent to Customer
    ↓
Email Sent to You
    ↓
Success Response Back to Website
```

## 🐛 Troubleshooting

### If you still get "Failed to send":

1. **Check Browser Console** (F12):
   - Look for CORS errors
   - Check the exact error message
   - Verify the payload being sent

2. **Check n8n Executions**:
   - Go to n8n → Executions
   - Look for failed executions
   - Check the error details

3. **Test Webhook Directly**:
```bash
curl -X POST https://n8n-boringwork-u57538.vm.elestio.app/webhook/60de8bbc-63ba-41ef-88f6-b9c1543c78b4 \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "name": "Test User",
      "mobile": "0400000000",
      "message": "Test message"
    }
  }'
```

### Common Issues:

#### ❌ CORS Error
**Console says:** "Access to fetch blocked by CORS policy"
**Fix:** Update CORS headers in n8n to `*`

#### ❌ 404 Not Found
**Console says:** "Response status: 404"
**Fix:** 
- Check workflow is ACTIVE in n8n
- Verify webhook path is correct

#### ❌ 500 Internal Server Error
**Console says:** "Response status: 500"  
**Fix:**
- Check n8n execution logs
- Verify Gmail credentials are connected
- Check SMS credentials are correct

## 📝 Changed Files

1. ✅ **TextUsWidget.jsx** - Fixed data format and text color
2. ✅ **Red Ox Digital Sms Agent - UPDATED.json** - Updated CORS settings

## 🎯 Next Steps

1. [ ] Import updated workflow to n8n
2. [ ] Activate the workflow
3. [ ] Test the form on your website
4. [ ] Verify SMS is sent correctly
5. [ ] Verify email notification is received

---

**Last Updated:** October 17, 2025  
**Status:** Ready to Deploy


