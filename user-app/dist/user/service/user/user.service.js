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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_dto_1 = require("../../dto/user.dto");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./../../entity/user.entity");
const filter_user_dto_1 = require("../../dto/filter-user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(user) {
        return this.userRepository.save(user);
    }
    getAll() {
        return this.userRepository.find();
    }
    filterAll(user) {
        console.log(user);
        var result = this.userRepository.find({
            where: [
                { name: typeorm_2.Raw(alias => `${alias} IN (:...name)`, { name: user.names }) },
                { surname: typeorm_2.Raw(alias => `${alias} IN (:...surname)`, { surname: user.surnames }) },
                { email: typeorm_2.Raw(alias => `${alias} IN (:...email)`, { email: user.emails }) },
                { tcno: typeorm_2.Raw(alias => `${alias} IN (:...tcno)`, { tcno: user.tcnos }) }
            ]
        });
        console.log(result);
        return result;
    }
    getById(id) {
        return this.userRepository.findOne({ id });
    }
    update(id, user) {
        return this.userRepository.update(id, user);
    }
    delete(id) {
        return this.userRepository.update(id, { isDeleted: true });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map