import { Injectable } from '@nestjs/common';
import * as v8 from 'v8';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Shoptrack Drive';
  }

  getMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    return {
      rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
      heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
      heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
      external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
    };
  }

  getHeapStatistics() {
    const stats = v8.getHeapStatistics();
    return {
      totalHeapSize: `${(stats.total_heap_size / 1024 / 1024).toFixed(2)} MB`,
      totalHeapSizeExecutable: `${(stats.total_heap_size_executable / 1024 / 1024).toFixed(2)} MB`,
      totalPhysicalSize: `${(stats.total_physical_size / 1024 / 1024).toFixed(2)} MB`,
      usedHeapSize: `${(stats.used_heap_size / 1024 / 1024).toFixed(2)} MB`,
      heapSizeLimit: `${(stats.heap_size_limit / 1024 / 1024).toFixed(2)} MB`,
    };
  }
}
