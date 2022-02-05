echo "🏃 .bash_profile"
[ -n "$PS1" ] && source ~ /.bashrc;

for file in ~/.{path,bash_prompt,exports,aliases,functions,extra}; do
	[ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;
