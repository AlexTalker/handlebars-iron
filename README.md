handlebars-iron
===============

[Handlebars](https://github.com/sunng87/handlebars-rust) middleware
for the [Iron web framework](http://ironframework.io).

[![Build
Status](https://travis-ci.org/sunng87/handlebars-iron.svg)](https://travis-ci.org/sunng87/handlebars-iron)

## Usage

Add HandlebarsEngine to your Iron middleware chain as an "after"
middleware.

```rust
  /// HandlebarsEngine will look up all files with "./examples/templates/**/*.hbs"
  chain.link_after(HandlebarsEngine::new("./examples/templates/", ".hbs"));
```

In your handler, set `Template` to response. As required by
Handlebars-rust, your data should impl `serialize::json::ToJson`.

```rust
/// render data with "index" template
/// that is "./examples/templates/index.hbs"
fn hello_world(_: &mut Request) -> IronResult<Response> {
    let resp = Response::new();

    let data = ...
    Ok(resp.set(Template::new("index", data)))
}
```

Since this is simple library, you may run this
[example](https://github.com/sunng87/handlebars-iron/blob/master/examples/server.rs)
with `cargo run --example server`
first, and  [documentation](https://sunng.info/handlebars-iron/)
then.

Since Rust and its ecosystem are still in early stage, this
project might been broken for various reasons. I will try my best to
keep this library compiles with latest Rust nightly before the 1.0
final release. If you find anything bad, pull requests and issue reporting
are always welcomed.

## License

MIT, of course.
