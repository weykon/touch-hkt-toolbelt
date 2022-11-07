import $, { Combinator, $$, Conditional, Cast, String, List, Function, Kind } from 'hkt-toolbelt';
type FilterNum = List.Filter<Conditional.Extends<number>>

type nums = $<FilterNum, [1,2,3,"2"]>


