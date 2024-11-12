sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    function (AppComponent) {
        "use strict";
                return AppComponent.extend("orgactionsassmnt.Component", {
                metadata: {
                manifest: "json"
            },

    
            modifyText: function () {
                var element = document.getElementById("orgactionsassmnt::sap.suite.ui.generic.template.ListReport.view.ListReport::Org_AssessmentSet--template::IconTabFilter-ActionVar-text");
                
                if (element) {
 
                    element.innerText = "Actions (30)";
                    console.log("Text changed to: Actions (30)");
                } else {
                    console.log("Target element not found.");
                }
            }
        });
    }
);
