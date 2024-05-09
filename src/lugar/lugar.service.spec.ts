import { Test, TestingModule } from '@nestjs/testing';
import { LugarService } from './lugar.service';

describe('LugarService', () => {
  let service: LugarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LugarService],
    }).compile();

    service = module.get<LugarService>(LugarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
