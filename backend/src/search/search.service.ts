import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async search(q: string) {
    const results = [];

    const body = await this.esService.search({
      index: 'product',
      body: {
        size: 12,
        query: {
          match: {
            'title.complete': {
              query: q,
            },
          },
        },
      },
    });
    const hits = body.hits.hits;
    hits.map((item) => {
      results.push(item._source);
    });

    return { results, total: body.hits.total.valueOf };
  }
}
