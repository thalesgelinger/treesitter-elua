module.exports = grammar({
    name: 'elua',

    rules: {
        // The entry point of the grammar
        source_file: $ => repeat(choice(
            $.html_content,
            $.lua_block
        )),

        // Rule for HTML content (everything outside <@ @>)
        html_content: $ => /[^<@]+/, // Match everything until <@

        // Rule for Lua blocks
        lua_block: $ => seq(
            '<@',        // Start of Lua block
            optional($.lua_code), // Lua code inside the block
            '@>'         // End of Lua block
        ),

        // Rule for Lua code (parsed by the Lua parser)
        lua_code: $ => /[^@]+/, // Content inside <@ @>
    },
});

