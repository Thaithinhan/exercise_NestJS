import { Module } from '@nestjs/common';
import { Overview } from './Overview/Overview.module';
import { Products } from './Product/Products.module';
import { PageNotFound } from './Pagenotfound/Pagenotfound.module';
import { User } from './user/user.module';

@Module({
  imports: [Overview, Products, User, PageNotFound],
})
export class AppModule {}
