#### Seed figma plugin 
#### This is a work in progress figma plugin
A one click generator plugin for figma to cerate a system design for your app.


* [x] Init
* [ ] Colors palette
* [ ] Typography 
* [ ] Buttons
* [ ] Inputs 
* [ ] Charts (including [lines charts](http://line.380squares.xyz)) 
* [ ] Icons
* [ ] Patterns 

If you will use or copy the template for your plugin, make sure to replace the `manifest.json` with the figma new manfiest json (generate by figma).
  
#### Install dependencies
  `npm install`
  
### Build 

The plugin use webpack to bundle the code source, run `npm run build` to create dist files.

#### manifest.json
The `manifest.json` file defines the plugin name and the code (js/css) locations. so, here, we specify the main js file and the ui file. 

```
{
  "name": "YOU_PLUGIN_NAME",
  "id": "plugin_id_generated_by",
  "api": "1.0.0",
  "main": "dist/code.js",
  "ui": "dist/ui.html"
}
```

### Inline code in html 
I tried to build this plugin following the webpack tutorial from figma, but the inline plugin used to put css in the html didn't work. So I copied the [inline plugin ](webpack/inline.plugin.js) from facebook [react-inline-plugin-tool](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/InlineChunkHtmlPlugin.js), i just copied the code to avoid installing all the package.
  

### Bundling with webpack 
I used parcel before switching to webpack but it was complicated to add all necessary plugins to parcel which is supposed to work in mode 'out-of-the-box' 
