# Homeo-status (work in progress)

> **homeostasis:** physiological process by which living organisms maintain a stable internal environment despite changes in their external environment

### Homeo-status is a game that will help users overcome social anxiety and practice setting boundaries in a low-stakes gaming platform. The game will mimic scenarios in real life in which the user will have to engage or avoid friends, associates, or strangers.

The game uses Teachable Machine to recognize the user’s real-time movements from the computer camera as the user’s “moves” in the game. One being "engage", and the other being "avoid".

Examples of potential moves:
| Engage  | Avoid |
| ------------- | ------------- |
| open palm facing the camera  | open palm facing away from camera  |
| thumbs up  | thumbs down  |
| making an "O"  | making an "X"  |

Various “opponents” will show up one at a time, and the user will be able to either “engage” or “avoid” them. Engaging will cause the user to either gain ***or*** lose energy, while avoiding will result in ***no change*** in energy (however avoidances are limited).

There are 3 “status” types: friends, associates, and strangers.
- **Friends:** +1 energy 75% of the time, -1 energy 25% of the time
- **Associates:** +2 energy 50% of the time, -2 energy 50% of the time
- **Strangers:** +3 energy 25% of the time, -3 energy 75% of the time

The opponents could either be generated by the creator or uploaded by the user to mimic real people in their life.

The goal of the game is to get through all of the people in each level without losing too much energy.

**Good luck!**

## Features to add:
Personalization features:
- allowing users to upload their own opponents
- allowing Teachable Machine model link to be inputted by the user
