---
layout: post
status: publish
title: 'Hide system tray in C#'
slug: Hide-system-tray-in-C-
---
# Hide system tray in C#
## 

In most of our customer-oriented kiosk applications it is necessary to hide the system task bar so that in case of a crash the end user won't be able to muck around with the computer. Yes, we restrict the user's account via registry edits but the task is still available to them if the application exits.<!--more-->

Or is it?

Enter our nifty little code solution:
<pre>using System;
using System.Runtime.InteropServices;
class TaskBarController
{
    [DllImport("user32.dll")]
    private static extern int FindWindow(string className,
    string windowText);

    [DllImport("user32.dll")]
    private static extern int ShowWindow(int hwnd, int command);

    public static void HideTaskbar()
    {
        int hwnd = FindWindow("Shell_TrayWnd","");
        ShowWindow( hwnd, 0 );
    }
    public static void ShowTaskbar()
    {
        int hwnd = FindWindow("Shell_TrayWnd","");
        ShowWindow( hwnd, 5 );
    }
}</pre>
And there you have it. Enjoy!