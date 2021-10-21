import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from 'src/author/author.entity';
import { Book, CreateBookInput, FindBookInput } from './book.entity';
import { BookService } from './book.service';
import { AuthorService } from '../author/author.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  @Query(() => [Book]) // <-- what will the query return?
  async books /* <-- Query name */() {
    return this.bookService.findMany(); // Resolve the query
  }

  @Query(() => Book)
  async book(@Args('input') { id }: FindBookInput) {
    return this.bookService.findById(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
