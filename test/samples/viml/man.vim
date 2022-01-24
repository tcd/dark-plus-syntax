" ==============================================================================
" Maintainer: Clay Dunston <dunstontc@gmail.com>
" Previous Maintainer: Anmol Sethi <anmol@aubble.com>
" Previous Maintainer: SungHyun Nam <goweol@gmail.com>
" LICENSE: Vim License
" ==============================================================================
scriptencoding utf-8

if exists('b:current_syntax')
  finish
endif


" syn case  ignore

syn match manReference		display '[^()[:space:]]\+([0-9nx][a-z]*)'
syn match manSectionHeading	display '^\S.*$'
syn match manTitle		display '^\%1l.*$'
syn match manSubHeading		display '^ \{3\}\S.*$'
" syn match manOptionDesc	display '^\s\+\%(+\|-\)\S\+'
syn match manOption		display '\v(\(|\s)(\+|-)+[a-zA-Z0-9-]+'
syn match manOption		display '\v\s(\+|-)+[a-zA-Z0-9-]+'
syn match manVariable		'\(=\)\@<=\S\+'
syn match manEquals		'='
syn match manCaps		'\s[A-Z_]\+\(\s\|$\)'
syn region manVariable		start='\[' end='\]' contains=manEquals,manOption
syn region manString		start=/\s"/ end=/"/
syn region manString		start=/\s`/ end=/'/
syn region manString		start=/\s'/ end=/'/
" syn region manString		start=/</ end=/>/

syn match manParens		contained "[()]" containedin=ALL

hi default link manTitle		Title
hi default link manParens		Normal
hi default link manSectionHeading	Statement
hi default link manOptionDesc		Constant
hi default link manOption		Constant
hi default link manCaps			Constant
hi default link manEquals		Constant
hi default link manString		String
hi default link manVariable		Identifier
hi default link manReference		PreProc
hi default link manSubHeading		Function

if &filetype !=? 'man'
  " May have been included by some other filetype.
  finish
endif

if !exists('b:man_sect')
  call man#init_pager()
endif
if b:man_sect =~# '^[23]'
  syn include @c $VIMRUNTIME/syntax/c.vim
  syn match	manCFuncDefinition display '\<\h\w*\>\ze\(\s\|\n\)*(' contained
  syn region 	manSynopsis start='^\%(
        \SYNOPSIS\|
        \SYNTAX\|
        \SINTASSI\|
        \SKŁADNIA\|
        \СИНТАКСИС\|
        \書式\)$' end='^\%(\S.*\)\=\S$' keepend contains=manSectionHeading,@c,manCFuncDefinition
  hi default link manCFuncDefinition Function
endif

" Prevent everything else from matching the last line
execute 'syntax match manFooter display "^\%'.line('$').'l.*$"'

let b:current_syntax = 'man'

" vim:filetype=vim:tabstop=8:noexpandtab:
