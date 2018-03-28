"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <StackLayout>\n    <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n      autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n    <Button text=\"Sign in\" class=\"submit-button\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n  </StackLayout>\n  ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFmeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxzY0FVVDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTdGFja0xheW91dD5cbiAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gdXAgZm9yIEdyb2Nlcmllc1wiPjwvQnV0dG9uPlxuICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9Il19