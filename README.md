This is a script that is largely a rewrite of https://github.com/soolar/accountval.ash

This script uses JavaScript (Written in TypeScript) instead of ash, and offers three major performance enhancements.

1. Speed.
2. Caching, subsequent runs are now faster.
3. You can provide a parameter to show only your tradeable goods.

To install this script, use

```text
svn checkout https://github.com/libraryaddict/KolAccountVal/branches/release/
```

To run, just use

```text
accountval
```

If you want to see only the tradeable stuff, use

```text
accountval true
```

If you have accountval.ash installed, use

```text
accountval.js
```
