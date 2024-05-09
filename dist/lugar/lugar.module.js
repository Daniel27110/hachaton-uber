"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugarModule = void 0;
const common_1 = require("@nestjs/common");
const lugar_service_1 = require("./lugar.service");
const typeorm_1 = require("@nestjs/typeorm");
const lugar_entity_1 = require("./lugar.entity/lugar.entity");
const lugar_controller_1 = require("./lugar.controller");
let LugarModule = class LugarModule {
};
exports.LugarModule = LugarModule;
exports.LugarModule = LugarModule = __decorate([
    (0, common_1.Module)({
        providers: [lugar_service_1.LugarService],
        imports: [typeorm_1.TypeOrmModule.forFeature([lugar_entity_1.LugarEntity])],
        controllers: [lugar_controller_1.LugarController],
    })
], LugarModule);
//# sourceMappingURL=lugar.module.js.map