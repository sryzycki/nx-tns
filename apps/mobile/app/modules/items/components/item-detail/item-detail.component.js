Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
// always import decorated Injectable service from direct path (not index barrel)
const item_service_1 = require("../../services/item.service");
let ItemDetailComponent = class ItemDetailComponent {
    constructor(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.item = this.itemService.getItem(id);
    }
};
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'ns-details',
        moduleId: module.id,
        templateUrl: './item-detail.component.html'
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService, router_1.ActivatedRoute])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3Q0FBa0Q7QUFDbEQsNENBQWlEO0FBSWpELGlGQUFpRjtBQUNqRiw4REFBMEQ7QUFPMUQsSUFBYSxtQkFBbUIsR0FBaEM7SUFHRSxZQUFvQixXQUF3QixFQUFVLEtBQXFCO1FBQXZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBRyxDQUFDO0lBRS9FLFFBQVE7UUFDTixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBVFksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtLQUM1QyxDQUFDO3FDQUlpQywwQkFBVyxFQUFpQix1QkFBYztHQUhoRSxtQkFBbUIsQ0FTL0I7QUFUWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuLy8gYWx3YXlzIGltcG9ydCBkZWNvcmF0ZWQgSW5qZWN0YWJsZSBzZXJ2aWNlIGZyb20gZGlyZWN0IHBhdGggKG5vdCBpbmRleCBiYXJyZWwpXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2l0ZW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRldGFpbHMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtOiBJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICB9XG59XG4iXX0=