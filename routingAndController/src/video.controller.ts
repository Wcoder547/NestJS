import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
interface videoParams {
  id: number;
  video: string;
}

@Controller('/videos')
export class VideoController {
  @Get('/first/:id/:name')
  getFirstVideo(@Param() param: videoParams) {
    //     console.log(param);
    //     console.log(param); //12
    console.log(param); //{ id: '12', name: 'waseem' }
    return 'hello first video';
  }
  @Get('/second')
  //http://localhost:3000/videos/second?name=waseem&age=266
  getSecondVideo(@Query() query: Record<string, any>) {
    console.log(query); //{ name: 'waseem', age: '266' }
    return 'hello second video';
  }
  @Get('/third')
  getThirdVideo(@Headers() Headers: Record<string, any>) {
    console.log(Headers);

    //   'user-agent': 'PostmanRuntime/7.44.0',
    //   accept: '*/*',
    //   'postman-token': 'bddb3110-5d88-46ed-8a72-88b5f7e15d3a',
    //   host: 'localhost:3000',
    //   'accept-encoding': 'gzip, deflate, br',
    //   connection: 'keep-alive'
    // }

    return 'hello third video';
  }
}
