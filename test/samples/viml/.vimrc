"   ___      ___ ___  _____ ______   ________  ________
"  |\  \    /  /|\  \|\   _ \  _   \|\   __  \|\   ____\
"  \ \  \  /  / | \  \ \  \\\__\ \  \ \  \|\  \ \  \___|
"   \ \  \/  / / \ \  \ \  \\|__| \  \ \   _  _\ \  \
"    \ \    / /   \ \  \ \  \    \ \  \ \  \\  \\ \  \____
"     \ \__/ /     \ \__\ \__\    \ \__\ \__\\ _\\ \_______\
"      \|__|/       \|__|\|__|     \|__|\|__|\|__|\|_______|
"
" if has('win32')
"   let $VIMHOME = expand('~\vimfiles')
" else
"   let $VIMHOME = expand('~/.vim')
" endif

" =============================================================================
"  Plugins
" =============================================================================
" TODO: ~/.vim --> $VIMHOME
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif


call plug#begin('~/.vim/plugged')
" Useful Things
Plug 'tpope/vim-rsi'                 " Better insert-mode experience
Plug 'tpope/vim-repeat'              " Repeat plugin actions with '.'
Plug 'tpope/vim-surround'            " Alter surrounding punctuation
Plug 'tpope/vim-fugitive'            " Git interface
Plug 'tomtom/tcomment_vim'           " Comments
Plug 'raimondi/delimitmate'          " Automatically close delimiters
Plug 'junegunn/vim-peekaboo'         " Visual interface for registers
Plug 'junegunn/vim-easy-align'       " Easily align all of the things
" Syntactic Things
Plug 'kana/vim-textobj-user'         " Define new textobjects
Plug 'kana/vim-textobj-line'
Plug 'kana/vim-textobj-entire'
Plug 'kana/vim-textobj-indent'
Plug 'glts/vim-textobj-comment'
Plug 'Julian/vim-textobj-brace'
Plug 'Julian/vim-textobj-variable-segment'
Plug 'haya14busa/vim-edgemotion'
" Pretty Things
Plug 'itchyny/vim-cursorword'        " Hilight all occurances of the word under the cursor
Plug 'jszakmeister/vim-togglecursor' " Switch between block & horizontal line
Plug 'vim-airline/vim-airline'
Plug 'dunstontc/vim-vscode-theme'
" Utilities
Plug 'pbrisbin/vim-mkdir'             " Make new directories along with new files
Plug 'sgur/vim-editorconfig'          " .editorconfig support
Plug 'ciaranm/securemodelines'        " Better safe than sorry
Plug 'dietsche/vim-lastplace'         " Persist cursor position
Plug 'christoomey/vim-tmux-navigator' " Move smoothly between vim & tmux
" Enhancements
Plug 'roxma/nvim-yarp'                " Make deoplete play nice with Vim8
Plug 'roxma/vim-hug-neovim-rpc'       " Make deoplete play nice with Vim8
Plug 'Shougo/deoplete.nvim'           " Async Completion
Plug 'Shougo/neosnippet'
Plug 'Shougo/neosnippet-snippets'
Plug 'Shougo/neco-syntax'             " ???
Plug 'Shougo/neco-vim'                " Completions for Viml
Plug 'wellle/tmux-complete.vim'       " Completions for adjascent tmux panes
call plug#end()


" =============================================================================
"  Config
" =============================================================================
syntax on
filetype plugin indent on
set encoding=utf-8 nobomb
" set nocompatible               " Not compatible with vi
set modeline                   " Respect modeline in files
set modelines=5                " Well, in the first 5 lines of files
set shell=/bin/bash
if has('mouse')
  set mouse=a                " Enable mouse in all modes
endif
if has('mouse_sgr')            " Way better mouse support
  set ttymouse=sgr
endif
set noerrorbells               " Disable error bells
set novisualbell                 " ☝


" === Backups, Swapfiles, & Undo ===
set noswapfile                 " No thanks
set backupdir=~/.vim/backupdir
set undofile                   " Persistent Undo though
set undodir=~/.vim/undodir



" =============================================================================
"  Styles
" =============================================================================
" ==== General ====
set notitle                    " Show the filename in the window titlebar
set nowrap                     " Do not wrap lines
set ruler                      " Show the cursor line
set number                     " Enable line numbers
set relativenumber             " Enable relative line numbers
set cursorline                 " Highlight current line
set scrolloff=5                " Start scrolling x lines before horizontal border of window
set sidescrolloff=5            " Start scrolling x columns before vertical border of window
set sidescroll=5
set splitright                 " New split placed right
set splitbelow                 " New split placed below
set winminheight=0             " Allow splits to be reduced to a single line
if exists('+showmatch')
  set showmatch                  " Highlight matching braces
endif
if exists('+showmode')
  set noshowmode               " Show the current mode
endif
if exists('+showcmd')
  set noshowcmd                " Show the (partial) command as it’s being typed
endif


" ==== Theming ====
if &term =~# '(^screen|^tmux)'
  let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
  let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"
endif

" set t_Co=256
if has('nvim-0.1.5')        " True color in neovim wasn't added until 0.1.5
  set termguicolors
endif

colorscheme dark_plus
set background=dark
highlight! Comment gui=italic cterm=italic

" ==== Formatting Characters ====
if exists('listchars')
  set listchars+=tab:→\
  set listchars+=eol:¬
  set listchars+=trail:·
  set listchars+=nbsp:·
  set listchars+=extends:❯
  set listchars+=precedes:❮
  set showbreak=↪
  set nolist
endif

" For conceal markers.
if has('conceal')
  set conceallevel=2 concealcursor=niv
endif


" =============================================================================
"  Preferences
" =============================================================================
" ==== General ====
if has('unnamedplus')
  set clipboard=unnamedplus
else
  set clipboard+=unnamed
endif
set laststatus=2               " Always show status line
set nopaste

" ==== Input ====
set backspace=indent,eol,start " Set backspace in insert mode
set esckeys                    " Allow cursor keys in insert mode
set nostartofline              " Don’t reset cursor to start of line when moving around.
if has('virtualedit')          " Allow cursor to move where there is no text in visual block mode
  set virtualedit=block
endif

" ==== Tabs & Spaces ====
set autoindent                 " Autoidentation on
set copyindent                 " Copy indent from the previous line
set expandtab                  " Expand Tabs (pressing Tab inserts spaces)
set smartindent                " Smart Indentation on
set smarttab                   " Tab respects 'tabstop', 'shiftwidth', and 'softtabstop'
set nojoinspaces               " Don't autoinsert two spaces after '.', '?', '!' for join command


" ==== Search ====
set ignorecase                 " Ignore case of searches
set smartcase                  " Ignore 'ignorecase' if search p
set hlsearch                   " Highlight matches
set incsearch                  " Search as characters are entered
set magic                      " Enable extended regexes
set gdefault                   " By default add g flag to search/replace. Add g to toggle


" ==== Command Completion ====
set wildmenu                   " Visual autocomplete for command menu
set wildignore+=*.pyc          " Stuff to ignore when tab completing
set wildignore+=.git/*
set wildignore+=.hg/*
set wildignore+=.svn/*
set wildignore+=*.DS_Store
set wildignore+=CVS/*
set wildignore+=*/tmp/*
set wildignore+=*.so
set wildignore+=*.swp
set wildignore+=*.zip
set wildignorecase
set wildmode=list:longest,full


" ==== Folding ====
if has('folding')
  set foldenable               " Enable folding
  set foldmethod=indent        " Syntax isn't fast
  set foldlevelstart=5         " Default folding level when buffer is opened
  set foldnestmax=10           " Maximum nested fold
endif



" =============================================================================
"  Commands
" =============================================================================
" Open help in vertical splits
command -nargs=* -complete=help H vertical belowright help <args>

" copy path of the active buffer
command -nargs=0 GetRelPath :let @+ = expand("%")
command -nargs=0 GetFullPath :let @+ = expand("%:p")
command -nargs=0 GetName :let @+ = expand("%:t")


" =============================================================================
"  Keymaps
" =============================================================================

" Remap : to ;
nnoremap ; :
vnoremap ; :

" Better searching
" nnoremap / /\v
" vnoremap / /\v

" Use ctrl-q instead of ⎋ , stay on the home row
inoremap <C-Q> <C-c>
nnoremap <C-Q> <nop>
vnoremap <C-Q> <C-c>
cnoremap <C-Q> <C-c>


" Small edits in Normal mode
nnoremap <BS> i<DEL><esc><right>
nnoremap ,, i<space><esc>

" q to Quit
nnoremap q :q<CR>
" Q to replay q macro
noremap Q @q
" Clear highlights & commands
nnoremap <silent>\ :noh<CR>:echo<CR>
" gtfo
nnoremap fj :x<CR>
inoremap fj <esc>:x<CR>

noremap <S-H> 0
noremap <S-L> $

" Yank into the void
noremap d "_d
noremap D "_D
noremap dd "_dd
noremap c "_c
noremap C "_C

" Yank Better
nnoremap <S-y> y$
nnoremap yy Vy


" =============================================================================
" ==== Leader Maps ====
" =============================================================================
set timeoutlen=1000

let g:mapleader="\<Space>"

nnoremap <leader><leader> <esc>


" ==== e -- Edit ====
nnoremap <silent><leader>ev :vsplit $MYVIMRC<CR>
nnoremap <silent><leader>e<S-V> :edit $MYVIMRC<CR>


" ==== p -- Plug ====
nnoremap <leader>pi :PlugInstall<CR>
nnoremap <leader>ps :PlugStatus<CR>
nnoremap <leader>pc :PlugClean<CR>


" ==== r -- Reload ====
nnoremap <silent> <leader><S-s> :source $MYVIMRC<CR>


" ==== u -- Redo (un-undo...)
nnoremap <leader>u :redo<CR>


" ==== t -- Toggle ====
" Toggle Comments
" nnoremap <leader>tc :TComment<CR>
" Toggle Folding
nnoremap <leader>tf :normal! zi<CR>
" Toggle GitGutter
nnoremap <leader>tg :call gitgutter#toggle()<CR>
" Toggle Search Highlight
nnoremap <leader>th :set nohlsearch<CR>
" Toggle Line Wrapping
nnoremap <leader>tl :set wrap!<CR>
" Toggle TableMode
nnoremap <leader>tm :tablemode#Toggle()<CR>
" Toggle Paste
nnoremap <leader>tp :set nopaste<CR>
" Toggle the Quickfix List
nnoremap <leader>tq :copen<CR>
" Toggle Relative Line Numbers
nnoremap <leader>tr :set rnu!<CR>
" Toggle GundoTree
nnoremap <leader>tu :GundoToggle<CR>
" Toggle Tagbar
nnoremap <leader>tt :TagbarToggle<CR>
" Toggle Invisible Characters (whitespace)
nnoremap <LEADER>tw :set list!<cr>


" =============================================================================
"  Plugins Settings
" =============================================================================


" ==== deoplete ====
" let g:deoplete#enable_at_startup = 1
" let g:deoplete#auto_completion_start_length = 1
" let g:deoplete#enable_smart_case = 1
" let g:deoplete#file#enable_buffer_path=1

" call deoplete#custom#set('vim',           'mark', 'V ')
" call deoplete#custom#set('omni',          'mark', '⌾ ')
" call deoplete#custom#set('file',          'mark', ' ')
" call deoplete#custom#set('jedi',          'mark', ' ')
" call deoplete#custom#set('around',        'mark', '↻ ')
" call deoplete#custom#set('buffer',        'mark', ' ')
" call deoplete#custom#set('member',        'mark', 'mb')
" call deoplete#custom#set('necovim',       'mark', 'nv')
" call deoplete#custom#set('ultisnips',     'mark', '<>')
" call deoplete#custom#set('neosnippet',    'mark', '<>')
" call deoplete#custom#set('necosyntax',    'mark', 'ns')
" call deoplete#custom#set('tmux-complete', 'mark', '⧉ ')

" call deoplete#custom#set('jedi', 'matchers', ['matcher_fuzzy'])
" call deoplete#custom#set('necovim', 'matchers', ['matcher_fuzzy'])
" call deoplete#custom#set('ultisnips', 'matchers', ['matcher_fuzzy'])
" call deoplete#custom#set('necosyntax', 'matchers', ['matcher_fuzzy'])
" call deoplete#custom#set('tmux-complete', 'matchers', ['matcher_fuzzy'])


" ==== Neosnippet ====
" let g:neosnippet#disable_runtime_snippets = 1
" let g:neosnippet#enable_snipmate_compatibility = 1
" let g:neosnippet#snippets_directory='~/.vim/plugged/vim-snippets/snippets'

" imap <C-k>     <Plug>(neosnippet_expand_or_jump)
" smap <C-k>     <Plug>(neosnippet_expand_or_jump)
" xmap <C-k>     <Plug>(neosnippet_expand_target)
" imap <expr><TAB>
"   \ pumvisible() ? "\<C-n>" :
"   \   neosnippet#expandable_or_jumpable() ?
"   \     "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"
" smap <expr><TAB> neosnippet#expandable_or_jumpable() ?
"   \ "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"


" ==== easy-align ====
xmap ga <Plug>(EasyAlign)
nmap ga <Plug>(EasyAlign)


" ==== TComment ====
let g:tcommentMaps=0
let g:tcommentMapLeader1=''
let g:tcommentMapLeader2=''
let g:tcommentMapLeaderCommentAnyway=''
let g:tcommentTextObjectInlineComment=''


" ==== vim-togglecursor ====
let g:togglecursor_default = 'block'
let g:togglecursor_insert = 'line'
let g:togglecursor_leave = 'block'
let g:togglecursor_replace = 'underline'
let g:togglecursor_disable_tmux = 0
let g:togglecursor_disable_default_init = 1


" ==== vim-airline ====
let g:airline_powerline_fonts = 0
let g:airline_theme='dark_plus'

