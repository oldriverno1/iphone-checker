# iPhone Availability Notifier (`iphone-checker`)

This application checks the availability of iPhones near a specific store and notifies the user via email if an iPhone is available.

## Purpose

The primary goal of this application is to automate the process of checking iPhone availability and to notify the user without manual intervention. This is especially useful during high-demand periods when the iPhone is newly released and hard to find in stock.

## Prerequisites

- Node.js installed on your machine.
- A Gmail account for sending notifications.
- Receiver's email address to send the notification to.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/oldriverno1/iphone-checker.git
   cd iphone-checker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Create a `.env` file in the root directory of the project with the following format:

   ```
   EMAIL_USER=userNameWithoutGmailDomain
   EMAIL_PASS=get it from https://support.google.com/accounts/answer/185833
   RECEIVER=receiver's email
   ```

   - `EMAIL_USER`: Your Gmail username without "@gmail.com".
   - `EMAIL_PASS`: Use an [App Password](https://support.google.com/accounts/answer/185833) generated from your Google Account for better security.
   - `RECEIVER`: The email address where you want to receive the notifications.

   **Note**: Ensure that `.env` is added to your `.gitignore` file to prevent it from being committed to your repository.

4. **Compile the TypeScript code**:

   ```bash
   npm run compile
   ```

5. **Execute the program**:
   ```bash
   node build/src/index.js
   ```

## Usage

Once everything is set up, simply run the execute command mentioned above. The application will check the iPhone availability and send an email notification to the specified receiver if an iPhone is available near the store.
