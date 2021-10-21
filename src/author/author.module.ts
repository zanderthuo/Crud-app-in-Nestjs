import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { BookService } from 'src/book/book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/book/book.entity';
import { Author, AuthorSchema } from './author.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ])
  ],
  providers: [AuthorService, AuthorResolver, BookService]
})
export class AuthorModule {}
