
## Grid

### Evolution path

1. Fixed row length - 1 year as 52 weeks
  [x] lanes are fixed
  [ ] can rely on css grid and nth-child?
  - But customizing generic grid elems only by means of css is smelly / not react-y
  - have GridRow component ?
    - w/ length coming from Grid resolution state
    - giving up css flexibility ? 
    - how keep alignment if we use GridRow instead of css grid or table?
  - a Table ?

2. Flex weeks
  - but how markers will move?
    - cannot use same week component all over the grid
  - can we still rely on css grid and style markers w/ nth-child()?
    - then we resort to some generic grid elem component and put content only via css
    - cannot have specific content in html
  - changing grid-row length / num of components in response to viewport ?
  - how? 
    - on viewport change events?
  - or have GridRow?


3. Edit (state) of selected (weeks) in bulk
- edit classification 
4. Range select - with shift-click

5. change resolution level of the grid
  Week | Day | Month | Year
  


States:
Grid:
grid resolution: week | month | year
 Weeks in a grid:
   week id / sequential number
   week highlights:
     milestones:
       milestone A of X
       milestone B of Y
     belonging/category:
       is in t1
       is in t2
     baselines:
       is current: this week
       this matches to/ align with: week N of X = week M of Y

Week:
  selected
  classification / disposition:
    enjoying | improving future | none - fail


