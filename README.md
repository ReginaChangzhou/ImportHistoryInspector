# ImportHistoryInspector
ImportHistoryInspector is a front end extension that allows the user to keep track on what libraries they have imported.
It also allows the user to move all import lines to a new cell on top of the notebook by clicking one button.
In order to install the extension, you need to first download the import_extension.js file then run the following code:

-----------------------------------------------------------------------------------------

import notebook.nbextensions
notebook.nbextensions.install_nbextension("YOUR_DIRECTORY/import_extension.js", user=True)

%%javascript

Jupyter.utils.load_extensions('import_extension')

notebook.nbextensions

-----------------------------------------------------------------------------------------

After that, a small square button will appear on the tool bar on the top, and that is the button for this extension.

![tool bar pic](https://github.com/activityhistory/ImportHistoryInspector/blob/master/Screen%20Shot%202017-06-14%20at%204.42.10%20AM.png)

Hope it helps!

Author: Ruijia Cheng

