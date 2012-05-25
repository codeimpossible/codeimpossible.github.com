---
layout: post
status: publish
title: 'Enumerate windows users  groups'
slug: "Enumerate-windows-users-groups"
---
The code below will enumerate which groups a domain /  local user belongs to.

	    private static string GetUserGroups(string strUser)
	    {
	        string groups = "";
	        DirectoryEntry de = null;
	        try
	        {
	
	            string entryName = String.Format("WinNT://{0},user",
	                strUser.Replace("\\", "/"));
	
	            de = new DirectoryEntry(entryName);
	
	            object oGroups = de.Invoke("Groups");
	            foreach (object o in (IEnumerable)oGroups)
	            {
	                DirectoryEntry group = new DirectoryEntry(oGroups);
	                groups += group.Name + ",";
	            }
	        }
	        catch (Exception)
	        {
	            throw;
	        }
	        return groups;
	    }

