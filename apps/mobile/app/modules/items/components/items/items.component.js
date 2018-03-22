Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const item_service_1 = require("../../services/item.service");
let ItemsComponent = class ItemsComponent {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s CoreModule.
    // Providing it via the CoreModule ensures it's a singleton across the entire app
    constructor(itemService) {
        this.itemService = itemService;
    }
    ngOnInit() {
        this.items = this.itemService.getItems();
    }
};
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'ns-items',
        moduleId: module.id,
        templateUrl: './items.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3Q0FBa0Q7QUFHbEQsOERBQTBEO0FBTzFELElBQWEsY0FBYyxHQUEzQjtJQUdFLDRJQUE0STtJQUM1SSxvRkFBb0Y7SUFDcEYsaUZBQWlGO0lBQ2pGLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBWFksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEMsQ0FBQztxQ0FPaUMsMEJBQVc7R0FOakMsY0FBYyxDQVcxQjtBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2l0ZW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWl0ZW1zJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW1zLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBDb3JlTW9kdWxlLlxuICAvLyBQcm92aWRpbmcgaXQgdmlhIHRoZSBDb3JlTW9kdWxlIGVuc3VyZXMgaXQncyBhIHNpbmdsZXRvbiBhY3Jvc3MgdGhlIGVudGlyZSBhcHBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgfVxufVxuIl19