"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterUserDto = void 0;
const class_validator_1 = require("class-validator");
class FilterUserDto {
    ;
    ;
    ;
    ;
}
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], FilterUserDto.prototype, "names", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], FilterUserDto.prototype, "surnames", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], FilterUserDto.prototype, "emails", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], FilterUserDto.prototype, "tcnos", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], FilterUserDto.prototype, "isDeleted", void 0);
exports.FilterUserDto = FilterUserDto;
//# sourceMappingURL=filter-user.dto.js.map