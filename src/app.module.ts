import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb+srv://zander:popskull@user.llrg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthorModule, 
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
