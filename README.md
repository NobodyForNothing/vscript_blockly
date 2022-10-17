# graph-p2
## a graphical portal 2 modding framework

### saving and loading workspaces
you can save your current workspace by pressing the save button. The program will create a file named with the workspace name and the current time (highest number = newest) and save it to the workspaces folderat the programms location.
Loading a workspace will overwrite the current workspace.

### generating the mod
By pressing the button on the top right corner you can you can compile your mod to a spplice package. You can run the mod by using the import feature of spplice (p2r3.com/spplice)
It is currently not possible to specify other meta information than the mod anme.

### coding a mod
You can code your mods relativly intuitivly by putting together blocks from the right side. Please note that your code most likely wont work if it is not inside on of the blocks from the event section.

### known bugs and limitations
- you can not get direct access to generated source code
- search last in String wont work
- current list implementation has litle real use
-  some valid block constelations cause the generated code not to work (feel free to create an issue containing the workspace file)

### Expanding the featureset
As of now the amount of blocks to interact with portal 2 is verry limited. In case you don't want to wait you can expand it yourself by adding block information to the customBlocks.js file and a compiler for the block to the index.js file.
