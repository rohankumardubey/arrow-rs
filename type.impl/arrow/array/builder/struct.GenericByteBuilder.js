(function() {
    var type_impls = Object.fromEntries([["arrow",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteBuilder%3CT%3E\" class=\"impl\"><a href=\"#impl-ArrayBuilder-for-GenericByteBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"arrow/array/builder/trait.ArrayBuilder.html\" title=\"trait arrow::array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of binary slots in the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow::array::builder::BinaryBuilder","arrow::array::builder::LargeBinaryBuilder","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder","arrow::array::builder::GenericBinaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteBuilder%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-GenericByteBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::array::builder::BinaryBuilder","arrow::array::builder::LargeBinaryBuilder","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder","arrow::array::builder::GenericBinaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteBuilder%3CT%3E\" class=\"impl\"><a href=\"#impl-Default-for-GenericByteBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow::array::builder::BinaryBuilder","arrow::array::builder::LargeBinaryBuilder","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder","arrow::array::builder::GenericBinaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericByteBuilder%3CT%3E\" class=\"impl\"><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericByteBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;I&gt;(&amp;mut self, iter: I)<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#454\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#462\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow::array::builder::BinaryBuilder","arrow::array::builder::LargeBinaryBuilder","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder","arrow::array::builder::GenericBinaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteBuilder%3CT%3E\" class=\"impl\"><a href=\"#impl-GenericByteBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\"><code>GenericByteBuilder</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(\n    item_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    data_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\"><code>GenericByteBuilder</code></a>.</p>\n<ul>\n<li><code>item_capacity</code> is the number of items to pre-allocate.\nThe size of the preallocated buffer of offsets is the number of items plus one.</li>\n<li><code>data_capacity</code> is the total number of bytes of data to pre-allocate\n(for all items, not per item).</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_from_buffer\" class=\"method\"><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.new_from_buffer\" class=\"fn\">new_from_buffer</a>(\n    offsets_buffer: <a class=\"struct\" href=\"arrow/buffer/struct.MutableBuffer.html\" title=\"struct arrow::buffer::MutableBuffer\">MutableBuffer</a>,\n    value_buffer: <a class=\"struct\" href=\"arrow/buffer/struct.MutableBuffer.html\" title=\"struct arrow::buffer::MutableBuffer\">MutableBuffer</a>,\n    null_buffer: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"arrow/buffer/struct.MutableBuffer.html\" title=\"struct arrow::buffer::MutableBuffer\">MutableBuffer</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new  <a href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\"><code>GenericByteBuilder</code></a> from buffers.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>This doesn’t verify buffer contents as it assumes the buffers are from\nexisting and valid <a href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\"><code>GenericByteArray</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(&amp;mut self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends a value into the builder.</p>\n<p>See the <a href=\"arrow/array/builder/type.GenericStringBuilder.html\" title=\"type arrow::array::builder::GenericStringBuilder\">GenericStringBuilder</a> documentation for examples of\nincrementally building string values with multiple <code>write!</code> calls.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the resulting length of <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#method.values_slice\" title=\"method arrow::array::builder::GenericByteBuilder::values_slice\"><code>Self::values_slice</code></a> would exceed\n<code>T::Offset::MAX</code> bytes.</p>\n<p>For example, this can happen with <a href=\"arrow/array/type.StringArray.html\" title=\"type arrow::array::StringArray\"><code>StringArray</code></a> or <a href=\"arrow/array/type.BinaryArray.html\" title=\"type arrow::array::BinaryArray\"><code>BinaryArray</code></a>\nwhere the total length of all values exceeds 2GB</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(\n    &amp;mut self,\n    value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;&gt;,\n)</h4></section></summary><div class=\"docblock\"><p>Append an <code>Option</code> value into the builder.</p>\n<ul>\n<li>A <code>None</code> value will append a null value.</li>\n<li>A <code>Some</code> value will append the value.</li>\n</ul>\n<p>See <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#method.append_value\" title=\"method arrow::array::builder::GenericByteBuilder::append_value\"><code>Self::append_value</code></a> for more panic information.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Append a null value into the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\"><code>GenericByteArray</code></a> and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\"><code>GenericByteArray</code></a> without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.values_slice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.values_slice\" class=\"fn\">values_slice</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns the current values buffer as a slice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offsets_slice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.offsets_slice\" class=\"fn\">offsets_slice</a>(&amp;self) -&gt; &amp;[&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Offset\" title=\"type arrow::datatypes::ByteArrayType::Offset\">Offset</a>]</h4></section></summary><div class=\"docblock\"><p>Returns the current offsets buffer as a slice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validity_slice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.validity_slice\" class=\"fn\">validity_slice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the current null buffer as a slice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validity_slice_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteBuilder.html#tymethod.validity_slice_mut\" class=\"fn\">validity_slice_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the current null buffer as a mutable slice</p>\n</div></details></div></details>",0,"arrow::array::builder::BinaryBuilder","arrow::array::builder::LargeBinaryBuilder","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder","arrow::array::builder::GenericBinaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Write-for-GenericByteBuilder%3CGenericStringType%3CO%3E%3E\" class=\"impl\"><a href=\"#impl-Write-for-GenericByteBuilder%3CGenericStringType%3CO%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html\" title=\"trait core::fmt::Write\">Write</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteBuilder.html\" title=\"struct arrow::array::builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;<a class=\"struct\" href=\"arrow/datatypes/struct.GenericStringType.html\" title=\"struct arrow::datatypes::GenericStringType\">GenericStringType</a>&lt;O&gt;&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_str\" class=\"method trait-impl\"><a href=\"#method.write_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#tymethod.write_str\" class=\"fn\">write_str</a>(&amp;mut self, s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a string slice into this writer, returning whether the write\nsucceeded. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#tymethod.write_str\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_char\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.1.0\">1.1.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/fmt/mod.rs.html#174\">source</a></span><a href=\"#method.write_char\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_char\" class=\"fn\">write_char</a>(&amp;mut self, c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a <a href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\" title=\"primitive char\"><code>char</code></a> into this writer, returning whether the write succeeded. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_char\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_fmt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/fmt/mod.rs.html#202\">source</a></span><a href=\"#method.write_fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_fmt\" class=\"fn\">write_fmt</a>(&amp;mut self, args: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Arguments.html\" title=\"struct core::fmt::Arguments\">Arguments</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Glue for usage of the <a href=\"https://doc.rust-lang.org/nightly/core/macro.write.html\" title=\"macro core::write\"><code>write!</code></a> macro with implementors of this trait. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_fmt\">Read more</a></div></details></div></details>","Write","arrow::array::builder::StringBuilder","arrow::array::builder::LargeStringBuilder","arrow::array::builder::GenericStringBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[31128]}