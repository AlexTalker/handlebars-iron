(function() {var implementors = {};
implementors['openssl'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='openssl/bio/struct.MemBio.html' title='openssl::bio::MemBio'>MemBio</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='openssl/crypto/hash/struct.Hasher.html' title='openssl::crypto::hash::Hasher'>Hasher</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='openssl/crypto/hmac/struct.HMAC.html' title='openssl::crypto::hmac::HMAC'>HMAC</a>","<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='openssl/ssl/struct.SslStream.html' title='openssl::ssl::SslStream'>SslStream</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='enum' href='openssl/ssl/enum.MaybeSslStream.html' title='openssl::ssl::MaybeSslStream'>MaybeSslStream</a>&lt;S&gt;",];implementors['hyper'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/client/pool/struct.PooledStream.html' title='hyper::client::pool::PooledStream'>PooledStream</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;<a class='enum' href='hyper/net/enum.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;W: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='enum' href='hyper/http/enum.HttpWriter.html' title='hyper::http::HttpWriter'>HttpWriter</a>&lt;W&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='enum' href='hyper/net/enum.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/server/response/struct.Response.html' title='hyper::server::response::Response'>Response</a>&lt;'a, <a class='enum' href='hyper/net/enum.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;",];implementors['iron'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/client/pool/struct.PooledStream.html' title='hyper::client::pool::PooledStream'>PooledStream</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;<a class='enum' href='hyper/net/enum.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='enum' href='hyper/http/enum.HttpWriter.html' title='hyper::http::HttpWriter'>HttpWriter</a>&lt;W&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='hyper/net/struct.CloneTcpStream.html' title='hyper::net::CloneTcpStream'>CloneTcpStream</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='enum' href='hyper/net/enum.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='iron/response/struct.HttpResponse.html' title='iron::response::HttpResponse'>Response</a>&lt;'a, <a class='enum' href='hyper/net/enum.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
