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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("./usuario.entity/usuario.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async findAll() {
        return await this.usuarioRepository.find();
    }
    async findOne(id) {
        const usuario = await this.usuarioRepository.findOne({ where: { id }, relations: ["artworks", "exhibitions"] });
        if (!usuario)
            throw new business_errors_1.BusinessLogicException("The usuario with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return usuario;
    }
    async create(usuario) {
        return await this.usuarioRepository.save(usuario);
    }
    async update(id, usuario) {
        const persistedMuseum = await this.usuarioRepository.findOne({ where: { id } });
        if (!persistedMuseum)
            throw new business_errors_1.BusinessLogicException("The usuario with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return await this.usuarioRepository.save({ ...persistedMuseum, ...usuario });
    }
    async delete(id) {
        const usuario = await this.usuarioRepository.findOne({ where: { id } });
        if (!usuario)
            throw new business_errors_1.BusinessLogicException("The usuario with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        await this.usuarioRepository.remove(usuario);
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map