#jQuery.ChromeInsertFix
v. 0.1.1 29-06-2014
 - [Repo: github.com/UndeadBaneGitHub/jquery.chromeinsertfix](https://github.com/UndeadBaneGitHub/jquery.chromeinsertfix)

Hi there!

This really-really tiny plugin serves for only one, but quite important purpose: fix the stupid Google Chrome but, when you paste content into *contenteditable="true"* DOM element. Bad-bad chrome wraps it into quite weird tag structures.
What this plugin does is just unwrapping to plain text, replacing bad hazardous stuff in the process.

## DEPENDENCIES
It is a jquery plugin, meaning you really need to include it as well before the plugin itself. However there are no special version restrictions (and I'm pretty sure it will work with most of them), it would be safe to use jQuery version 1.8.x and on, unless you really-really need older one.


* INSTALLATION
Put loading script tag after jquery script tag and loading the zoom image in the same folder of the script:

<script src="jquery.chromeinsertfix.js"></script>


* HOW TO USE

```javascript

  1. Attach the plugin to the document itself (may cause some performance issues on loading):
  $(document).ready(
    function() {  
      $(document).chromeinsertfix();
    }
  );

  2. Attach the plugin to a certain element, containing (or being itself) contenteditables:
  $(document).ready(
    function() { 
      $("#editable-div-1").chromeinsertfix();
      }
  );
  
  3. Use regexp to modify the contents of processed elements (say, replace all newline symbols with spaces):
  $(document).ready(
    function() {  
      $("#editable-div-1").chromeinsertfix(/(\r\n|\n|\r)/gm, " ");
    }
  );
```

Use and enjoy! 

##LICENSE

### Copyright 2014 UndeadBane

######Licensed under the MIT License, http://www.opensource.org/licenses/mit-license.php
