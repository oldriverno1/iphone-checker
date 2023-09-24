import {IHttpClient, HttpClient} from './http-client';
import {IResponseParser, ResponseParser} from './response-parser';
import {IEmailNotifier, EmailNotifier} from './email-notifier';
import {QueryResponse} from './interface';

export class AppController {
  private httpClient: IHttpClient;
  private responseParser: IResponseParser;
  private emailNotifier: IEmailNotifier;

  constructor(
    httpClient: IHttpClient = new HttpClient(),
    responseParser: IResponseParser = new ResponseParser(),
    emailNotifier: IEmailNotifier = new EmailNotifier()
  ) {
    this.httpClient = httpClient;
    this.responseParser = responseParser;
    this.emailNotifier = emailNotifier;
  }

  async checkAndNotify(url: string, email: string): Promise<void> {
    const data = await this.httpClient.get<QueryResponse>(url);
    if (this.responseParser.isIphoneAvailable(data)) {
      await this.emailNotifier.sendNotification(
        email,
        `iPhone is available near your store!,

         please check the link:
         https://www.apple.com/tw/shop/buy-iphone/iphone-15-pro/6.7-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-256gb-%E5%8E%9F%E8%89%B2%E9%88%A6%E9%87%91%E5%B1%AC`
      );
    }
  }
}
