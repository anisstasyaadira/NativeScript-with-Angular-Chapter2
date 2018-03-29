"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = /** @class */ (function () {
    function GroceryListService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
    }
    GroceryListService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data._id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery._id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    GroceryListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFFL0Isb0NBQW1DO0FBQ25DLHFDQUFvQztBQUdwQztJQUdFLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixZQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFFbkMsQ0FBQztJQUVsQyxnQ0FBRyxHQUFILFVBQUksSUFBWTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDO2FBQ0EsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsTUFBTSxDQUFDLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFJLEdBQUo7UUFDRSwwR0FBMEc7UUFDMUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDbkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoRFUsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBSWUsV0FBSTtPQUhuQixrQkFBa0IsQ0FpRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RTZXJ2aWNlIHtcclxuICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9Hcm9jZXJpZXNcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBhZGQobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIHRoaXMuYmFzZVVybCxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLFxyXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEdyb2NlcnkoZGF0YS5faWQsIG5hbWUpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgLy8gS2ludmV5LXNwZWNpZmljIHN5bnRheCB0byBzb3J0IHRoZSBncm9jZXJpZXMgYnkgbGFzdCBtb2RpZmllZCB0aW1lLiBEb27igJl0IHdvcnJ5IGFib3V0IHRoZSBkZXRhaWxzIGhlcmUuXHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgcGFyYW1zLmFwcGVuZChcInNvcnRcIiwgXCJ7XFxcIl9rbWQubG10XFxcIjogMX1cIik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxyXG4gICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuICAgICAgZGF0YS5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XHJcbiAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5Ll9pZCwgZ3JvY2VyeS5OYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJLaW52ZXkgXCIgKyBDb25maWcudG9rZW4pO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn0iXX0=