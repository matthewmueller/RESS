
// memory_fill.wast:5
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc1\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8f\x80\x80\x80\x00\x00\x41\x80\xfe\x03\x41\xd5\x00\x41\x80\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:21
run(() => call($1, "test", []));

// memory_fill.wast:23
assert_return(() => call($1, "checkRange", [0, 65_280, 0]), -1);

// memory_fill.wast:25
assert_return(() => call($1, "checkRange", [65_280, 65_536, 85]), -1);

// memory_fill.wast:27
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc1\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8f\x80\x80\x80\x00\x00\x41\x80\xfe\x03\x41\xd5\x00\x41\x81\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:43
assert_trap(() => call($2, "test", []));

// memory_fill.wast:45
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc0\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8e\x80\x80\x80\x00\x00\x41\x80\x7e\x41\xd5\x00\x41\x81\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:61
assert_trap(() => call($3, "test", []));

// memory_fill.wast:63
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xbe\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8c\x80\x80\x80\x00\x00\x41\x12\x41\xd5\x00\x41\x00\xfc\x0b\x00\x0b");

// memory_fill.wast:79
run(() => call($4, "test", []));

// memory_fill.wast:81
assert_return(() => call($4, "checkRange", [0, 65_536, 0]), -1);

// memory_fill.wast:83
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc0\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8e\x80\x80\x80\x00\x00\x41\x80\x80\x04\x41\xd5\x00\x41\x00\xfc\x0b\x00\x0b");

// memory_fill.wast:99
run(() => call($5, "test", []));

// memory_fill.wast:101
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc0\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8e\x80\x80\x80\x00\x00\x41\x80\x80\x08\x41\xd5\x00\x41\x00\xfc\x0b\x00\x0b");

// memory_fill.wast:117
run(() => call($6, "test", []));

// memory_fill.wast:119
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc0\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8e\x80\x80\x80\x00\x00\x41\x01\x41\xaa\x01\x41\xfe\xff\x03\xfc\x0b\x00\x0b");

// memory_fill.wast:135
run(() => call($7, "test", []));

// memory_fill.wast:137
assert_return(() => call($7, "checkRange", [0, 1, 0]), -1);

// memory_fill.wast:139
assert_return(() => call($7, "checkRange", [1, 65_535, 170]), -1);

// memory_fill.wast:141
assert_return(() => call($7, "checkRange", [65_535, 65_536, 0]), -1);

// memory_fill.wast:144
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x95\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x04\x74\x65\x73\x74\x00\x01\x0a\xc8\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x96\x80\x80\x80\x00\x00\x41\x12\x41\xd5\x00\x41\x0a\xfc\x0b\x00\x41\x15\x41\xaa\x01\x41\x04\xfc\x0b\x00\x0b");

// memory_fill.wast:161
run(() => call($8, "test", []));

// memory_fill.wast:163
assert_return(() => call($8, "checkRange", [0, 18, 0]), -1);

// memory_fill.wast:165
assert_return(() => call($8, "checkRange", [18, 21, 85]), -1);

// memory_fill.wast:167
assert_return(() => call($8, "checkRange", [21, 25, 170]), -1);

// memory_fill.wast:169
assert_return(() => call($8, "checkRange", [25, 28, 85]), -1);

// memory_fill.wast:171
assert_return(() => call($8, "checkRange", [28, 65_536, 0]), -1);

// memory_fill.wast:173
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x0a\x41\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:179
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x0a\x41\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:186
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x0a\x41\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:193
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x41\x0a\x41\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:200
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x0a\x43\x00\x00\xa0\x41\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:207
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x41\x0a\x43\x00\x00\xa0\x41\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:214
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x0a\x43\x00\x00\xa0\x41\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:221
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x41\x0a\x43\x00\x00\xa0\x41\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:228
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x0a\x42\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:235
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x0a\x42\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:242
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x0a\x42\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:249
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x41\x0a\x42\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:256
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x41\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:263
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x41\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:270
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x41\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:277
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x41\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:284
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x41\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:291
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x41\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:298
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x41\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:305
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x41\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:312
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x43\x00\x00\xa0\x41\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:319
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x43\x00\x00\xa0\x41\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:326
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x43\x00\x00\xa0\x41\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:333
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x43\x00\x00\xa0\x41\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:340
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x42\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:347
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x42\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:354
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x42\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:361
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x42\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:368
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x44\x00\x00\x00\x00\x00\x00\x34\x40\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:375
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x44\x00\x00\x00\x00\x00\x00\x34\x40\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:382
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x44\x00\x00\x00\x00\x00\x00\x34\x40\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:389
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x43\x00\x00\x20\x41\x44\x00\x00\x00\x00\x00\x00\x34\x40\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:396
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x42\x0a\x41\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:403
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x42\x0a\x41\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:410
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x42\x0a\x41\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:417
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x42\x0a\x41\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:424
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x42\x0a\x43\x00\x00\xa0\x41\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:431
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x42\x0a\x43\x00\x00\xa0\x41\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:438
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x42\x0a\x43\x00\x00\xa0\x41\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:445
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x42\x0a\x43\x00\x00\xa0\x41\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:452
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x42\x0a\x42\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:459
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x42\x0a\x42\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:466
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x42\x0a\x42\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:473
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x42\x0a\x42\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:480
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x42\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:487
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x42\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:494
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x42\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:501
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x42\x0a\x44\x00\x00\x00\x00\x00\x00\x34\x40\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:508
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x41\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:515
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x41\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:522
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x41\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:529
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x41\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:536
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x43\x00\x00\xa0\x41\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:543
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x43\x00\x00\xa0\x41\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:550
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x43\x00\x00\xa0\x41\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:557
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x43\x00\x00\xa0\x41\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:564
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x42\x14\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:571
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x42\x14\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:578
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x42\x14\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:585
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x42\x14\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:592
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x44\x00\x00\x00\x00\x00\x00\x34\x40\x41\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:599
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x44\x00\x00\x00\x00\x00\x00\x34\x40\x43\x00\x00\xf0\x41\xfc\x0b\x00\x0b");

// memory_fill.wast:606
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x44\x00\x00\x00\x00\x00\x00\x34\x40\x42\x1e\xfc\x0b\x00\x0b");

// memory_fill.wast:613
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8a\x80\x80\x80\x00\x01\x06\x74\x65\x73\x74\x66\x6e\x00\x00\x0a\xa6\x80\x80\x80\x00\x01\xa0\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x24\x40\x44\x00\x00\x00\x00\x00\x00\x34\x40\x44\x00\x00\x00\x00\x00\x00\x3e\x40\xfc\x0b\x00\x0b");

// memory_fill.wast:620
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8e\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x03\x7f\x7f\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x94\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x03\x72\x75\x6e\x00\x01\x0a\xbd\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:637
assert_trap(() => call($9, "run", [65_280, 37, 512]));

// memory_fill.wast:640
assert_return(() => call($9, "checkRange", [0, 1, 0]), -1);

// memory_fill.wast:642
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8e\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x03\x7f\x7f\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x94\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x03\x72\x75\x6e\x00\x01\x0a\xbd\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:659
assert_trap(() => call($10, "run", [65_279, 37, 514]));

// memory_fill.wast:662
assert_return(() => call($10, "checkRange", [0, 1, 0]), -1);

// memory_fill.wast:664
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8e\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x03\x7f\x7f\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x94\x80\x80\x80\x00\x02\x0a\x63\x68\x65\x63\x6b\x52\x61\x6e\x67\x65\x00\x00\x03\x72\x75\x6e\x00\x01\x0a\xbd\x80\x80\x80\x00\x02\xa7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x01\x46\x04\x40\x41\x7f\x0f\x0b\x20\x00\x2d\x00\x00\x20\x02\x46\x04\x40\x20\x00\x41\x01\x6a\x21\x00\x0c\x01\x0b\x0b\x20\x00\x0f\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xfc\x0b\x00\x0b");

// memory_fill.wast:681
assert_trap(() => call($11, "run", [65_279, 37, -1]));

// memory_fill.wast:684
assert_return(() => call($11, "checkRange", [0, 1, 0]), -1);
