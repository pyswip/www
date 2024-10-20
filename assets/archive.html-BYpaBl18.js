import{_ as i,c as l,a as o,o as r}from"./app-DofeonCF.js";const a={};function t(n,e){return r(),l("div",null,e[0]||(e[0]=[o('<h1 id="archived-versions" tabindex="-1"><a class="header-anchor" href="#archived-versions"><span>Archived Versions</span></a></h1><h2 id="v0-2-10" tabindex="-1"><a class="header-anchor" href="#v0-2-10"><span>v0.2.10</span></a></h2><ul><li>Synchronized type constants with SWI-Prolog.h update for broken compatibility changes in SWI-Prolog.h up to 0.8.3.</li><li>Fix incorrect REP_* constants.</li><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/92" target="_blank" rel="noopener noreferrer">#92</a> (C assert)</li><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/90" target="_blank" rel="noopener noreferrer">#90</a> (quoted string)</li><li>Fixed Variables in foreign functions not unifiable. Contributed by Michael Kasch.</li><li>Added support multibyte strings and atoms. Contributed by Nikolai Merinov.</li><li>Updated core.py and easy.py for unifying strings properly. Contributed by rohanshekhar.</li><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/71" target="_blank" rel="noopener noreferrer">#71</a>. Contributed by prologrules.</li><li>Fixed compatibility with SWI-Prolog 8.2.0. Contributed by Stuart Reynolds.</li><li>Fixed compatibility with MacOS. Contributed by prologrules and Dylan Lukes.</li></ul><h2 id="v0-2-9" tabindex="-1"><a class="header-anchor" href="#v0-2-9"><span>v0.2.9</span></a></h2><ul><li>Added non deterministic foreign function support. Contributed by rmanhaeve.</li><li>Fixed issue <a href="https://github.com/yuce/pyswip/pull/67" target="_blank" rel="noopener noreferrer">#67</a>. Contributed by Galileo Sartor.</li></ul><h2 id="v0-2-8" tabindex="-1"><a class="header-anchor" href="#v0-2-8"><span>v0.2.8</span></a></h2><ul><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/35" target="_blank" rel="noopener noreferrer">#35</a>. Contributed by Robert Simione.</li></ul><h2 id="v0-2-7" tabindex="-1"><a class="header-anchor" href="#v0-2-7"><span>v0.2.7</span></a></h2><ul><li>Works on FreeBSD.</li></ul><h2 id="v0-2-6" tabindex="-1"><a class="header-anchor" href="#v0-2-6"><span>v0.2.6</span></a></h2><ul><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/9" target="_blank" rel="noopener noreferrer">#9</a>.</li><li>Fixed issue <a href="https://github.com/yuce/pyswip/issues/10" target="_blank" rel="noopener noreferrer">#10</a>.</li></ul><h2 id="v0-2-5" tabindex="-1"><a class="header-anchor" href="#v0-2-5"><span>v0.2.5</span></a></h2><ul><li>Project cleanup</li><li>Updated the examples for Python 3.</li></ul><h2 id="v0-2-4" tabindex="-1"><a class="header-anchor" href="#v0-2-4"><span>v0.2.4</span></a></h2><ul><li>Maintenance release of PySwip</li><li>Added an error to avoid opening nested queries using PySwip (SWI-Prolog does not allow that). The error is NestedQueryError.</li><li>Added Tomasz Gryszkiewicz&#39;s patch for better finding the SWI-Prolog lib in Darwin</li><li>Solved issue 4 &quot;Patch for a dynamic method&quot;</li><li>Solved issue 5 &quot;Patch: hash and eq methods for Atom class&quot;</li><li>Solved issue 3: &quot;Problem with variables in lists&quot;</li><li>Solved issue 17: &quot;Can&#39;t find SWI-Prolog library in Homebrew&#39;s /usr/local&quot;</li></ul><h2 id="v0-2-3" tabindex="-1"><a class="header-anchor" href="#v0-2-3"><span>v0.2.3</span></a></h2><ul><li>Maintenance release of PySwip</li><li>Solved issue &quot;Segmentation fault when assertz-ing&quot; (thanks to jpthompson23)</li><li>Solved issue &quot;pyswip doesn&#39;t work on cygwin&quot;</li><li>Solved issue &quot;Callbacks can cause segv&#39;s&quot; (thanks to jpthompson23)</li><li>Solved issue &quot;Improve library loading&quot;</li><li>Solved issue &quot;sys.exit does not work when importing pyswip&quot;</li></ul><h2 id="v0-2-2" tabindex="-1"><a class="header-anchor" href="#v0-2-2"><span>v0.2.2</span></a></h2><ul><li>PySwip won&#39;t rely on the (id of the) functor handle of <code>=/2</code>.</li><li>Sebastian Höhn&#39;s patch to enable PySwip to work on MAC OS-X is incorporated.</li></ul><h2 id="v0-2-1" tabindex="-1"><a class="header-anchor" href="#v0-2-1"><span>v0.2.1</span></a></h2><ul><li>Importing <code>pyswip</code> automatically initializes SWI-Prolog.</li><li>Fixed a bug with querying lists with the new interface.</li></ul><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0"><span>v0.2.0</span></a></h2><ul><li>All names are included with <code>from pyswip import ...</code></li><li>New <em>Pythonic</em> interface</li><li>Prolog.query returns real Python datatypes</li><li>Markus Triska&#39;s Sudoku Solver</li><li>Prolog module support</li><li>Foreign functions retrieve Python datatypes.</li></ul><h2 id="v0-1-3" tabindex="-1"><a class="header-anchor" href="#v0-1-3"><span>v0.1.3</span></a></h2><ul><li>Renamed <code>pyswip/util.py</code> to <code>pyswip/prolog.py</code>.</li><li>New module <code>pyswip.easy</code>.</li><li>Now it is possible to register a Python function as a Prolog predicate through SWI-Prolog&#39;s Foreign Function Interface.</li><li>Additions to the core library.</li><li>Added example, <em>register foreign</em> which shows how to register a Python function as an SWI-Prolog predicate.</li><li>Added example, <em>Towers of Hanoi</em></li></ul><h2 id="v0-1-2" tabindex="-1"><a class="header-anchor" href="#v0-1-2"><span>v0.1.2</span></a></h2><ul><li>Renamed <code>PrologRunner</code> to <code>Prolog</code>.</li><li>Removed <code>query</code> method of <code>Prolog</code>, <code>queryGenerator</code> is renamed as <code>query</code>.</li><li>Added <code>asserta</code>, <code>assertz</code> and <code>consult</code> methods to <code>Prolog</code>.</li><li>The necessary cleanup is done even if the <code>query</code> generator doesn&#39;t run to the end.</li><li>Errors during the execution of <code>query</code> is caught and <code>PrologError</code> is raised.</li><li>Many new additions to the core library.</li><li>Added <code>examples</code> directory.</li><li>Added examples, <em>coins</em> and <em>draughts</em>.</li></ul><h2 id="v0-1-1" tabindex="-1"><a class="header-anchor" href="#v0-1-1"><span>v0.1.1</span></a></h2><ul><li>Added <code>queryGenerator</code> to PrologRunner, <code>query</code> calls <code>queryGenerator</code>.</li><li>Added example <code>send more money</code>.</li></ul>',29)]))}const d=i(a,[["render",t],["__file","archive.html.vue"]]),c=JSON.parse('{"path":"/whats-new/archive.html","title":"Archived Versions","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"v0.2.10","slug":"v0-2-10","link":"#v0-2-10","children":[]},{"level":2,"title":"v0.2.9","slug":"v0-2-9","link":"#v0-2-9","children":[]},{"level":2,"title":"v0.2.8","slug":"v0-2-8","link":"#v0-2-8","children":[]},{"level":2,"title":"v0.2.7","slug":"v0-2-7","link":"#v0-2-7","children":[]},{"level":2,"title":"v0.2.6","slug":"v0-2-6","link":"#v0-2-6","children":[]},{"level":2,"title":"v0.2.5","slug":"v0-2-5","link":"#v0-2-5","children":[]},{"level":2,"title":"v0.2.4","slug":"v0-2-4","link":"#v0-2-4","children":[]},{"level":2,"title":"v0.2.3","slug":"v0-2-3","link":"#v0-2-3","children":[]},{"level":2,"title":"v0.2.2","slug":"v0-2-2","link":"#v0-2-2","children":[]},{"level":2,"title":"v0.2.1","slug":"v0-2-1","link":"#v0-2-1","children":[]},{"level":2,"title":"v0.2.0","slug":"v0-2-0","link":"#v0-2-0","children":[]},{"level":2,"title":"v0.1.3","slug":"v0-1-3","link":"#v0-1-3","children":[]},{"level":2,"title":"v0.1.2","slug":"v0-1-2","link":"#v0-1-2","children":[]},{"level":2,"title":"v0.1.1","slug":"v0-1-1","link":"#v0-1-1","children":[]}],"git":{"updatedTime":1729414057000,"contributors":[{"name":"Yuce Tekol","email":"yucetekol@gmail.com","commits":2}]},"filePathRelative":"whats-new/archive.md"}');export{d as comp,c as data};
