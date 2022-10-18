# graph-p2
## a graphical portal 2 modding framework

### saving and loading workspaces
you can save your current workspace by pressing the save button. The program will create a file named with the workspace name and the current time (highest number = newest) and save it to the workspaces folder at the program's location.
Loading a workspace will overwrite the current workspace.

### generating the mod
By pressing the button in the top right corner you can compile your mod to a spplice package. You can run the mod by using the import feature of spplice (p2r3.com/spplice)
It is currently not possible to specify other meta information than the mod name.

### coding a mod
You can code your mods relatively intuitively by putting together blocks from the right side. Please note that your code most likely won't work if it is not inside one of the blocks from the event section.

### known bugs and limitations
- you can't get direct access to generated source code
- search last in String won't work
- current list implementation has little real use
-  some valid block constellations cause the generated code not to work (feel free to create an issue containing the workspace file)

### Contributing
To contribute add contents of the [Blockly repository](https://github.com/google/blockly/tree/master) to `ressources/blockly` install neutralino and `neu run`  the project.

### Planed features
- improving the list functionality
- implementing Tables
- more export options
- allow adding more information to package export
- rework GUI
- adding plugin support
