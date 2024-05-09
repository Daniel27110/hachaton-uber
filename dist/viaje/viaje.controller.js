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
exports.ViajeController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const viaje_dto_1 = require("./viaje.dto/viaje.dto");
const viaje_entity_1 = require("./viaje.entity/viaje.entity");
const viaje_service_1 = require("./viaje.service");
let ViajeController = class ViajeController {
    constructor(viajeService) {
        this.viajeService = viajeService;
    }
    async findAll() {
        return await this.viajeService.findAll();
    }
    async findOne(viajeId) {
        return await this.viajeService.findOne(viajeId);
    }
    async create(viajeDto) {
        const viaje = (0, class_transformer_1.plainToInstance)(viaje_entity_1.ViajeEntity, viajeDto);
        return await this.viajeService.create(viaje);
    }
    async update(viajeId, viajeDto) {
        const viaje = (0, class_transformer_1.plainToInstance)(viaje_entity_1.ViajeEntity, viajeDto);
        return await this.viajeService.update(viajeId, viaje);
    }
    async delete(viajeId) {
        return await this.viajeService.delete(viajeId);
    }
};
exports.ViajeController = ViajeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ViajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':viajeId'),
    __param(0, (0, common_1.Param)('viajeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viaje_dto_1.ViajeDto]),
    __metadata("design:returntype", Promise)
], ViajeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':viajeId'),
    __param(0, (0, common_1.Param)('viajeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, viaje_dto_1.ViajeDto]),
    __metadata("design:returntype", Promise)
], ViajeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':viajeId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('viajeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViajeController.prototype, "delete", null);
exports.ViajeController = ViajeController = __decorate([
    (0, common_1.Controller)('viaje'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [viaje_service_1.ViajeService])
], ViajeController);
//# sourceMappingURL=viaje.controller.js.map