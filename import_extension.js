// Add help panel at right side of notebook window
"using strict";

var help_panel_extension = (function() {

    var platform = IPython.utils.platform;





    toggleHelpPanel = function () {

        /* check if help panel is already there */
        var a = $("#helpPanel").html();
        if ( a == undefined ) {
            /* reduce notebook width */
            $("#notebook_panel").css({"float": "left","overflow-x": "hidden","height": "100%","width": "70%","font-size": "9pt"});
            /* add panel to the right of notebook */
            var helppanel = '<div id="helpPanel"></div>';
            $("#ipython-main-app").append(helppanel);
            $('#helpPanel').css({"font-size":"11pt"});
            $('#helpPanel').append("You have imported following libraries:"+"<br/>");
            $('#helpPanel').append("-------------------------------------"+"<br/>");


            
            var cell0 = Jupyter.notebook.get_cell(0);
            var code0 = cell0.get_text().split("\n")[0];
            var substring = "import ";
            var ind = 0;
            var history = []
            

            while (cell0 !== null){//check each existing cell
                
                cell0 = Jupyter.notebook.get_cell(ind);

                if (cell0 == null){
                    break;
                }
                else{}

                code0 = cell0.get_text().split("\n")
                console.log(Jupyter.notebook.get_cell(0))
                var row = code0.length
                for (i = 0; i < row; i++){//check each line of code
                    code0 = cell0.get_text().split("\n")[i]
                    if (code0.indexOf(substring) !== -1) {
                        if (history.indexOf(code0) !== -1) {
                            //check if already imported
                        }
                        else{
                        $('#helpPanel').append(code0+"<br/>");
                        history.push(code0)
                        
                        }
                    }
                    else{
                        
                    }
                }
                ind++; 
            }

            //clean and move to top button
            var btn = '<button id = "buttonClean">Clean imports and move to top</button>';
            $('#helpPanel').append(btn+"<br/>");
            $( "#buttonClean" ).click(function() {
              var newCell = Jupyter.notebook.insert_cell_above(0);
              var his = history.join("\n")//make text in rows 
              newCell.set_text(his.toString())

            ind = 1
            cell0 = Jupyter.notebook.get_cell(ind)

            while (cell0 !== null){//check each cell

                var content = []
                cell0 = Jupyter.notebook.get_cell(ind);

                if (cell0 == null){
                    break;
                }
                else{}

                code0 = cell0.get_text().split("\n")
                var row = code0.length
                for (i = 0; i < row; i++){//check if each line has the import
                    code0 = cell0.get_text().split("\n")[i]
                    if (history.indexOf(code0) !== -1) {
                    }//remove the import line 
                    else{
                     content.push(code0)  
                    }
                }
                ind++; 
                var cnt = content.join("\n")//made text in rows
                cell0.set_text(cnt.toString())//show the removed text
            }


            });
            
       }
        else {
            $("#notebook_panel").css({"width": "100%"});
            $('#helpPanel').remove();

        }
    };


        IPython.toolbar.add_buttons_group([
            {
                id : 'help_panel',
                label : 'Show import list',
                icon : 'icon-book',
                //button_text : 'import list',
                callback : toggleHelpPanel
            }
      ]);

    var scripts = document.getElementsByTagName("script");
    var scriptLocation = scripts[scripts.length - 1].src;
    $("head").append($("<link rel='stylesheet' href='/static/custom/help_panel/help_panel.css' type='text/css'  />"));
})();