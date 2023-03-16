# Rick and Morty

A React application to visualize characters from the Rick and Morty TV show.

API used: https://rickandmortyapi.com/

Main tech used: *React, React Query, Ant Design, Cypress*.

## Quickstart

- to install the needed dependencies use `npm install`
- to run local development environment use `npm run dev`
- to build the project to the output directory use `npm run build`
- to preview the applciation from the output directory use `npm run preview`
- to preview the application without the need to manually build use `npm run show`
- to open the cypress test environment run `npm run cypress:open`

## Possible next steps (time dependant)

- Evaluate to include infinite scrolling with [react-infinite-scroll](https://github.com/ankeetmaini/react-infinite-scroll-component) instead of the 'Load More' button
- Evaluate if it would make sense to just keep minium info in the cards and move most of the data to a separate profile page -> add routing via [react-router](https://reactrouter.com/)
- If the point above stands, evaluate to extend "profiles" to locations and episodes
- Aim for more test coverage + test the not so happy path / corner cases
- Remove as much as possible from render by creating other / more atomic importable and resuable components
