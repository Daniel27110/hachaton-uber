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
exports.ViajeEntity = void 0;
const lugar_entity_1 = require("../../lugar/lugar.entity/lugar.entity");
const usuario_entity_1 = require("../../usuario/usuario.entity/usuario.entity");
const typeorm_1 = require("typeorm");
let ViajeEntity = class ViajeEntity {
};
exports.ViajeEntity = ViajeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ViajeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lugar_entity_1.LugarEntity, lugar => lugar.puntosDestino),
    __metadata("design:type", lugar_entity_1.LugarEntity)
], ViajeEntity.prototype, "destino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lugar_entity_1.LugarEntity, lugar => lugar.puntosOrigen),
    __metadata("design:type", lugar_entity_1.LugarEntity)
], ViajeEntity.prototype, "origen", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_entity_1.UsuarioEntity, usuario => usuario.viajesPasajero),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], ViajeEntity.prototype, "pasajero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity, usuario => usuario.viajesConductor),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], ViajeEntity.prototype, "conductor", void 0);
exports.ViajeEntity = ViajeEntity = __decorate([
    (0, typeorm_1.Entity)()
], ViajeEntity);
//# sourceMappingURL=viaje.entity.js.map