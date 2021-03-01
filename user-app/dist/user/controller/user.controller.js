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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../service/user/user.service");
const user_dto_1 = require("../dto/user.dto");
const filter_user_dto_1 = require("../dto/filter-user.dto");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(res, user) {
        let userCount = await this.usersService.getByTcNo(user.tcno);
        if (userCount > 0)
            throw new common_1.ConflictException({
                status: common_1.HttpStatus.CONFLICT,
                message: "Tc no kayıtlı."
            });
        userCount = await this.usersService.getByEmail(user.email);
        if (userCount > 0)
            throw new common_1.ConflictException({
                status: common_1.HttpStatus.CONFLICT,
                message: "Email kayıtlı."
            });
        return this.usersService.create(user);
    }
    findAll() {
        return this.usersService.getAll();
    }
    findOne(id) {
        return this.usersService.getById(id);
    }
    filterAll(userFilter) {
        var obj = new filter_user_dto_1.FilterUserDto();
        obj.emails = userFilter.emails.split(',');
        obj.names = userFilter.names.split(',');
        obj.surnames = userFilter.surnames.split(',');
        obj.tcnos = userFilter.tcnos.split(',');
        return this.usersService.filterAll(obj);
    }
    update(id, userDto) {
        return this.usersService.update(id, userDto);
    }
    delete(id) {
        return this.usersService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Get('/filter/:names/:surnames/:emails/:tcnos'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "filterAll", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
UserController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map