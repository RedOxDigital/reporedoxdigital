# Text Us Widget - Troubleshooting Guide

## Issue: "Failed to send. Please try again."

This error occurs when the webhook request fails. Here's how to fix it:

## ✅ What I've Already Fixed

1. **Updated webhook URL** from `/webhook-test/` to `/webhook/`
2. **Added better error logging** to help diagnose the issue
3. **Created proper n8n workflow** configuration file

## 🔧 Steps to Fix the Webhook

### Step 1: Check Your n8n Workflow

1. Open your n8n instance at: `https://n8n-boringwork-u57538.vm.elestio.app`
2. Make sure you have a workflow for the Text Us widget
3. **Import the new workflow:**
   - Go to n8n
   - Click "Add Workflow" 
   - Click the "..." menu → "Import from File"
   - Select `n8n-text-us-workflow.json` from this project
   - Or click "Import from URL" and paste the workflow JSON

### Step 2: Configure the Webhook Node

The webhook node must have these settings:

**HTTP Method:** `POST`
**Path:** `60de8bbc-63ba-41ef-88f6-b9c1543c78b4`
**Allowed Origins:** `*` (or specifically `https://www.redoxmedia.com.au`)
**Response Mode:** `Using 'Respond to Webhook' Node`

### Step 3: Enable CORS Headers

In your n8n webhook, you MUST add CORS headers. This is done in the "Respond to Webhook" node:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### Step 4: Configure Email Notifications

1. In the "Send Email Notification" node, connect your Gmail account
2. Set up these variables in n8n:
   - `SENDER_EMAIL`: The email that sends notifications
   - `NOTIFICATION_EMAIL`: Where you want to receive form submissions

### Step 5: Activate the Workflow

1. Make sure the workflow is **ACTIVE** (toggle at the top)
2. Test the webhook directly first:

```bash
curl -X POST https://n8n-boringwork-u57538.vm.elestio.app/webhook/60de8bbc-63ba-41ef-88f6-b9c1543c78b4 \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","number":"0400000000","message":"Test message"}'
```

### Step 6: Test from Your Website

1. Open your website in the browser
2. Open Developer Tools (F12)
3. Go to the Console tab
4. Fill out the Text Us form and submit
5. Check the console for detailed error messages

## 🐛 Common Issues and Solutions

### Issue 1: CORS Error
**Error in Console:** `Access to fetch blocked by CORS policy`

**Solution:**
- Add `Access-Control-Allow-Origin: *` header in n8n webhook
- Make sure "Respond to Webhook" node has CORS headers

### Issue 2: 404 Not Found
**Error in Console:** `Response status: 404`

**Solution:**
- Check the webhook path is correct: `/webhook/60de8bbc-63ba-41ef-88f6-b9c1543c78b4`
- Make sure the workflow is active in n8n

### Issue 3: 500 Internal Server Error
**Error in Console:** `Response status: 500`

**Solution:**
- Check n8n workflow execution logs
- Make sure all nodes are properly configured
- Check Gmail credentials are working

### Issue 4: Network Error
**Error in Console:** `TypeError: Failed to fetch`

**Solution:**
- Check if n8n instance is accessible: `https://n8n-boringwork-u57538.vm.elestio.app`
- Check your internet connection
- Try accessing the n8n URL directly in browser

### Issue 5: Timeout
**Error in Console:** Request takes too long

**Solution:**
- Increase timeout in n8n workflow
- Check if Gmail is properly authenticated
- Simplify the workflow (remove email temporarily to test)

## 🔍 Debugging Steps

1. **Check Browser Console:**
   ```
   F12 → Console tab
   Look for red error messages
   ```

2. **Check n8n Execution Logs:**
   - Go to your n8n instance
   - Click "Executions" in the left sidebar
   - Check failed executions

3. **Test Webhook Directly:**
   Use Postman or curl to test the webhook URL directly

4. **Check Network Tab:**
   - F12 → Network tab
   - Submit the form
   - Click the failed request
   - Look at Response headers and body

## 📧 Alternative: Using Make.com or Zapier

If n8n continues to have issues, you can use alternative services:

### Option A: Make.com
1. Create a new scenario
2. Add a "Webhook" trigger
3. Copy the webhook URL
4. Update `TextUsWidget.jsx` with the new URL

### Option B: Zapier
1. Create a new Zap
2. Use "Webhooks by Zapier" as trigger
3. Choose "Catch Hook"
4. Copy the webhook URL
5. Update `TextUsWidget.jsx` with the new URL

## 📝 Current Configuration

**Webhook URL:** 
```
https://n8n-boringwork-u57538.vm.elestio.app/webhook/60de8bbc-63ba-41ef-88f6-b9c1543c78b4
```

**Expected Payload:**
```json
{
  "name": "John Doe",
  "number": "0400 000 000",
  "message": "I'm interested in your services"
}
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

## 🆘 Still Not Working?

If you've tried everything above and it's still not working:

1. **Check the console** after submitting - there should be detailed error logs now
2. **Share the console output** - the new logging will show exactly what's failing
3. **Test the webhook URL directly** in Postman or your browser
4. **Check n8n execution logs** for any error details

## ✅ Success Checklist

- [ ] n8n workflow is active
- [ ] Webhook URL is correct in TextUsWidget.jsx
- [ ] CORS headers are configured in n8n
- [ ] Gmail credentials are connected (if using email)
- [ ] Tested webhook with curl/Postman successfully
- [ ] No CORS errors in browser console
- [ ] Form submits successfully from website

---

**Last Updated:** October 17, 2025
**Version:** 1.0


