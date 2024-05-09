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
exports.LugarController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const lugar_dto_1 = require("./lugar.dto/lugar.dto");
const lugar_entity_1 = require("./lugar.entity/lugar.entity");
const lugar_service_1 = require("./lugar.service");
let LugarController = class LugarController {
    constructor(lugarService) {
        this.lugarService = lugarService;
    }
    async findAll() {
        return await this.lugarService.findAll();
    }
    async findOne(lugarId) {
        return await this.lugarService.findOne(lugarId);
    }
    async create(lugarDto) {
        const lugar = (0, class_transformer_1.plainToInstance)(lugar_entity_1.LugarEntity, lugarDto);
        return await this.lugarService.create(lugar);
    }
    async update(lugarId, lugarDto) {
        const lugar = (0, class_transformer_1.plainToInstance)(lugar_entity_1.LugarEntity, lugarDto);
        return await this.lugarService.update(lugarId, lugar);
    }
    async delete(lugarId) {
        return await this.lugarService.delete(lugarId);
    }
};
exports.LugarController = LugarController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':lugarId'),
    __param(0, (0, common_1.Param)('lugarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lugar_dto_1.LugarDto]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':lugarId'),
    __param(0, (0, common_1.Param)('lugarId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lugar_dto_1.LugarDto]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':lugarId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('lugarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "delete", null);
exports.LugarController = LugarController = __decorate([
    (0, common_1.Controller)('lugar'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [lugar_service_1.LugarService])
], LugarController);
//# sourceMappingURL=lugar.controller.js.map