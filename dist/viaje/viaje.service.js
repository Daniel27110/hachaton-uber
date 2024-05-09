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
exports.ViajeService = void 0;
const common_1 = require("@nestjs/common");
const viaje_entity_1 = require("./viaje.entity/viaje.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
let ViajeService = class ViajeService {
    constructor(viajeRepository) {
        this.viajeRepository = viajeRepository;
    }
    async findAll() {
        return await this.viajeRepository.find();
    }
    async findOne(id) {
        const viaje = await this.viajeRepository.findOne({ where: { id }, relations: ["artworks", "exhibitions"] });
        if (!viaje)
            throw new business_errors_1.BusinessLogicException("The viaje with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return viaje;
    }
    async create(viaje) {
        return await this.viajeRepository.save(viaje);
    }
    async update(id, viaje) {
        const persistedMuseum = await this.viajeRepository.findOne({ where: { id } });
        if (!persistedMuseum)
            throw new business_errors_1.BusinessLogicException("The viaje with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return await this.viajeRepository.save({ ...persistedMuseum, ...viaje });
    }
    async delete(id) {
        const viaje = await this.viajeRepository.findOne({ where: { id } });
        if (!viaje)
            throw new business_errors_1.BusinessLogicException("The viaje with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        await this.viajeRepository.remove(viaje);
    }
};
exports.ViajeService = ViajeService;
exports.ViajeService = ViajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(viaje_entity_1.ViajeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ViajeService);
//# sourceMappingURL=viaje.service.js.map