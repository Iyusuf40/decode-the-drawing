const treeVideoData = [
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 529, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 529, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 529, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 529, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 347, maxX: 584, maxY: 559 },
    right: { minX: 680, minY: 347, maxX: 893, maxY: 556 },
    top: { minX: 528, minY: 73, maxX: 738, maxY: 290 },
  },
  {
    left: { minX: 366, minY: 347, maxX: 583, maxY: 559 },
    right: { minX: 680, minY: 348, maxX: 892, maxY: 557 },
    top: { minX: 529, minY: 73, maxX: 738, maxY: 291 },
  },
  {
    left: { minX: 366, minY: 348, maxX: 583, maxY: 559 },
    right: { minX: 679, minY: 349, maxX: 892, maxY: 557 },
    top: { minX: 528, minY: 75, maxX: 738, maxY: 291 },
  },
  {
    left: { minX: 366, minY: 349, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 349, maxX: 891, maxY: 557 },
    top: { minX: 528, minY: 76, maxX: 738, maxY: 292 },
  },
  {
    left: { minX: 367, minY: 349, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 349, maxX: 891, maxY: 557 },
    top: { minX: 529, minY: 77, maxX: 738, maxY: 293 },
  },
  {
    left: { minX: 367, minY: 350, maxX: 583, maxY: 561 },
    right: { minX: 679, minY: 350, maxX: 890, maxY: 557 },
    top: { minX: 528, minY: 78, maxX: 736, maxY: 293 },
  },
  {
    left: { minX: 368, minY: 351, maxX: 584, maxY: 561 },
    right: { minX: 679, minY: 351, maxX: 890, maxY: 558 },
    top: { minX: 529, minY: 79, maxX: 737, maxY: 295 },
  },
  {
    left: { minX: 370, minY: 352, maxX: 585, maxY: 562 },
    right: { minX: 680, minY: 353, maxX: 891, maxY: 559 },
    top: { minX: 531, minY: 82, maxX: 738, maxY: 296 },
  },
  {
    left: { minX: 371, minY: 352, maxX: 586, maxY: 562 },
    right: { minX: 681, minY: 354, maxX: 891, maxY: 560 },
    top: { minX: 532, minY: 84, maxX: 739, maxY: 297 },
  },
  {
    left: { minX: 371, minY: 353, maxX: 586, maxY: 562 },
    right: { minX: 681, minY: 354, maxX: 891, maxY: 560 },
    top: { minX: 533, minY: 84, maxX: 739, maxY: 297 },
  },
  {
    left: { minX: 371, minY: 351, maxX: 586, maxY: 561 },
    right: { minX: 681, minY: 353, maxX: 891, maxY: 559 },
    top: { minX: 533, minY: 82, maxX: 740, maxY: 296 },
  },
  {
    left: { minX: 368, minY: 350, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 352, maxX: 889, maxY: 558 },
    top: { minX: 530, minY: 81, maxX: 737, maxY: 295 },
  },
  {
    left: { minX: 368, minY: 351, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 352, maxX: 889, maxY: 558 },
    top: { minX: 530, minY: 81, maxX: 737, maxY: 295 },
  },
  {
    left: { minX: 367, minY: 350, maxX: 582, maxY: 560 },
    right: { minX: 677, minY: 351, maxX: 887, maxY: 557 },
    top: { minX: 528, minY: 81, maxX: 735, maxY: 295 },
  },
  {
    left: { minX: 366, minY: 349, maxX: 581, maxY: 559 },
    right: { minX: 676, minY: 350, maxX: 886, maxY: 556 },
    top: { minX: 527, minY: 80, maxX: 734, maxY: 293 },
  },
  {
    left: { minX: 366, minY: 349, maxX: 581, maxY: 559 },
    right: { minX: 677, minY: 350, maxX: 886, maxY: 556 },
    top: { minX: 527, minY: 79, maxX: 734, maxY: 293 },
  },
  {
    left: { minX: 367, minY: 349, maxX: 582, maxY: 559 },
    right: { minX: 677, minY: 351, maxX: 886, maxY: 557 },
    top: { minX: 529, minY: 81, maxX: 735, maxY: 294 },
  },
  {
    left: { minX: 367, minY: 350, maxX: 582, maxY: 560 },
    right: { minX: 677, minY: 352, maxX: 886, maxY: 557 },
    top: { minX: 529, minY: 82, maxX: 735, maxY: 295 },
  },
  {
    left: { minX: 368, minY: 351, maxX: 582, maxY: 561 },
    right: { minX: 677, minY: 353, maxX: 885, maxY: 558 },
    top: { minX: 529, minY: 84, maxX: 735, maxY: 297 },
  },
  {
    left: { minX: 367, minY: 352, maxX: 581, maxY: 561 },
    right: { minX: 676, minY: 354, maxX: 884, maxY: 559 },
    top: { minX: 529, minY: 85, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 366, minY: 353, maxX: 580, maxY: 562 },
    right: { minX: 675, minY: 354, maxX: 883, maxY: 559 },
    top: { minX: 527, minY: 85, maxX: 732, maxY: 297 },
  },
  {
    left: { minX: 364, minY: 353, maxX: 579, maxY: 562 },
    right: { minX: 674, minY: 353, maxX: 882, maxY: 558 },
    top: { minX: 525, minY: 85, maxX: 731, maxY: 297 },
  },
  {
    left: { minX: 363, minY: 353, maxX: 578, maxY: 562 },
    right: { minX: 673, minY: 354, maxX: 881, maxY: 558 },
    top: { minX: 525, minY: 86, maxX: 730, maxY: 298 },
  },
  {
    left: { minX: 363, minY: 354, maxX: 578, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 880, maxY: 559 },
    top: { minX: 525, minY: 87, maxX: 730, maxY: 299 },
  },
  {
    left: { minX: 364, minY: 354, maxX: 578, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 880, maxY: 559 },
    top: { minX: 525, minY: 88, maxX: 730, maxY: 299 },
  },
  {
    left: { minX: 363, minY: 355, maxX: 578, maxY: 563 },
    right: { minX: 672, minY: 356, maxX: 879, maxY: 560 },
    top: { minX: 525, minY: 89, maxX: 729, maxY: 300 },
  },
  {
    left: { minX: 363, minY: 354, maxX: 577, maxY: 563 },
    right: { minX: 672, minY: 355, maxX: 879, maxY: 559 },
    top: { minX: 524, minY: 88, maxX: 729, maxY: 299 },
  },
  {
    left: { minX: 359, minY: 354, maxX: 574, maxY: 563 },
    right: { minX: 669, minY: 354, maxX: 876, maxY: 558 },
    top: { minX: 520, minY: 87, maxX: 726, maxY: 299 },
  },
  {
    left: { minX: 360, minY: 354, maxX: 575, maxY: 563 },
    right: { minX: 670, minY: 354, maxX: 877, maxY: 558 },
    top: { minX: 521, minY: 87, maxX: 726, maxY: 298 },
  },
  {
    left: { minX: 360, minY: 354, maxX: 575, maxY: 563 },
    right: { minX: 670, minY: 355, maxX: 876, maxY: 559 },
    top: { minX: 521, minY: 87, maxX: 726, maxY: 299 },
  },
  {
    left: { minX: 361, minY: 355, maxX: 576, maxY: 564 },
    right: { minX: 670, minY: 355, maxX: 877, maxY: 559 },
    top: { minX: 522, minY: 88, maxX: 727, maxY: 299 },
  },
  {
    left: { minX: 362, minY: 355, maxX: 576, maxY: 563 },
    right: { minX: 671, minY: 355, maxX: 878, maxY: 559 },
    top: { minX: 522, minY: 89, maxX: 727, maxY: 300 },
  },
  {
    left: { minX: 363, minY: 355, maxX: 577, maxY: 563 },
    right: { minX: 671, minY: 355, maxX: 878, maxY: 559 },
    top: { minX: 523, minY: 88, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 362, minY: 354, maxX: 577, maxY: 563 },
    right: { minX: 671, minY: 354, maxX: 878, maxY: 558 },
    top: { minX: 523, minY: 87, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 363, minY: 353, maxX: 577, maxY: 562 },
    right: { minX: 672, minY: 353, maxX: 879, maxY: 557 },
    top: { minX: 523, minY: 85, maxX: 729, maxY: 297 },
  },
  {
    left: { minX: 363, minY: 353, maxX: 577, maxY: 562 },
    right: { minX: 672, minY: 353, maxX: 879, maxY: 557 },
    top: { minX: 523, minY: 86, maxX: 729, maxY: 297 },
  },
  {
    left: { minX: 364, minY: 353, maxX: 578, maxY: 562 },
    right: { minX: 673, minY: 354, maxX: 880, maxY: 558 },
    top: { minX: 525, minY: 87, maxX: 730, maxY: 298 },
  },
  {
    left: { minX: 365, minY: 354, maxX: 578, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 879, maxY: 559 },
    top: { minX: 525, minY: 89, maxX: 729, maxY: 299 },
  },
  {
    left: { minX: 365, minY: 355, maxX: 579, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 880, maxY: 559 },
    top: { minX: 525, minY: 89, maxX: 730, maxY: 299 },
  },
  {
    left: { minX: 366, minY: 355, maxX: 579, maxY: 563 },
    right: { minX: 673, minY: 356, maxX: 880, maxY: 559 },
    top: { minX: 526, minY: 90, maxX: 730, maxY: 300 },
  },
  {
    left: { minX: 367, minY: 355, maxX: 579, maxY: 563 },
    right: { minX: 674, minY: 357, maxX: 880, maxY: 559 },
    top: { minX: 527, minY: 91, maxX: 730, maxY: 301 },
  },
  {
    left: { minX: 367, minY: 356, maxX: 580, maxY: 563 },
    right: { minX: 674, minY: 357, maxX: 880, maxY: 560 },
    top: { minX: 527, minY: 91, maxX: 731, maxY: 301 },
  },
  {
    left: { minX: 367, minY: 355, maxX: 580, maxY: 563 },
    right: { minX: 674, minY: 357, maxX: 880, maxY: 560 },
    top: { minX: 527, minY: 91, maxX: 730, maxY: 301 },
  },
  {
    left: { minX: 367, minY: 351, maxX: 580, maxY: 559 },
    right: { minX: 674, minY: 352, maxX: 880, maxY: 555 },
    top: { minX: 527, minY: 85, maxX: 731, maxY: 297 },
  },
  {
    left: { minX: 368, minY: 348, maxX: 581, maxY: 556 },
    right: { minX: 675, minY: 349, maxX: 882, maxY: 552 },
    top: { minX: 527, minY: 81, maxX: 732, maxY: 293 },
  },
  {
    left: { minX: 368, minY: 349, maxX: 581, maxY: 556 },
    right: { minX: 676, minY: 350, maxX: 882, maxY: 553 },
    top: { minX: 529, minY: 83, maxX: 733, maxY: 294 },
  },
  {
    left: { minX: 369, minY: 349, maxX: 582, maxY: 556 },
    right: { minX: 676, minY: 350, maxX: 883, maxY: 553 },
    top: { minX: 529, minY: 83, maxX: 734, maxY: 294 },
  },
  {
    left: { minX: 370, minY: 350, maxX: 582, maxY: 557 },
    right: { minX: 676, minY: 351, maxX: 883, maxY: 554 },
    top: { minX: 529, minY: 84, maxX: 734, maxY: 295 },
  },
  {
    left: { minX: 370, minY: 351, maxX: 582, maxY: 558 },
    right: { minX: 676, minY: 352, maxX: 882, maxY: 554 },
    top: { minX: 529, minY: 86, maxX: 734, maxY: 296 },
  },
  {
    left: { minX: 371, minY: 352, maxX: 582, maxY: 558 },
    right: { minX: 676, minY: 353, maxX: 882, maxY: 555 },
    top: { minX: 530, minY: 87, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 372, minY: 352, maxX: 584, maxY: 559 },
    right: { minX: 677, minY: 354, maxX: 882, maxY: 556 },
    top: { minX: 531, minY: 89, maxX: 734, maxY: 298 },
  },
  {
    left: { minX: 374, minY: 353, maxX: 585, maxY: 559 },
    right: { minX: 678, minY: 355, maxX: 883, maxY: 557 },
    top: { minX: 533, minY: 91, maxX: 735, maxY: 299 },
  },
  {
    left: { minX: 375, minY: 354, maxX: 585, maxY: 559 },
    right: { minX: 679, minY: 356, maxX: 883, maxY: 557 },
    top: { minX: 534, minY: 93, maxX: 736, maxY: 300 },
  },
  {
    left: { minX: 375, minY: 352, maxX: 585, maxY: 557 },
    right: { minX: 678, minY: 354, maxX: 883, maxY: 555 },
    top: { minX: 534, minY: 89, maxX: 736, maxY: 298 },
  },
  {
    left: { minX: 376, minY: 350, maxX: 586, maxY: 555 },
    right: { minX: 679, minY: 352, maxX: 883, maxY: 552 },
    top: { minX: 534, minY: 87, maxX: 736, maxY: 296 },
  },
  {
    left: { minX: 376, minY: 351, maxX: 586, maxY: 556 },
    right: { minX: 679, minY: 353, maxX: 883, maxY: 553 },
    top: { minX: 535, minY: 89, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 586, maxY: 557 },
    right: { minX: 679, minY: 355, maxX: 882, maxY: 555 },
    top: { minX: 535, minY: 92, maxX: 736, maxY: 299 },
  },
  {
    left: { minX: 378, minY: 353, maxX: 587, maxY: 557 },
    right: { minX: 679, minY: 355, maxX: 882, maxY: 555 },
    top: { minX: 536, minY: 93, maxX: 736, maxY: 300 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 586, maxY: 557 },
    right: { minX: 679, minY: 355, maxX: 882, maxY: 555 },
    top: { minX: 535, minY: 93, maxX: 736, maxY: 300 },
  },
  {
    left: { minX: 376, minY: 352, maxX: 585, maxY: 556 },
    right: { minX: 678, minY: 354, maxX: 881, maxY: 554 },
    top: { minX: 534, minY: 92, maxX: 735, maxY: 299 },
  },
  {
    left: { minX: 375, minY: 352, maxX: 584, maxY: 556 },
    right: { minX: 677, minY: 354, maxX: 880, maxY: 553 },
    top: { minX: 533, minY: 91, maxX: 734, maxY: 298 },
  },
  {
    left: { minX: 374, minY: 352, maxX: 583, maxY: 556 },
    right: { minX: 676, minY: 354, maxX: 878, maxY: 553 },
    top: { minX: 532, minY: 92, maxX: 732, maxY: 299 },
  },
  {
    left: { minX: 375, minY: 349, maxX: 585, maxY: 552 },
    right: { minX: 677, minY: 350, maxX: 880, maxY: 549 },
    top: { minX: 532, minY: 87, maxX: 734, maxY: 295 },
  },
  {
    left: { minX: 378, minY: 350, maxX: 586, maxY: 553 },
    right: { minX: 678, minY: 352, maxX: 880, maxY: 550 },
    top: { minX: 534, minY: 91, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 379, minY: 350, maxX: 587, maxY: 553 },
    right: { minX: 679, minY: 352, maxX: 881, maxY: 550 },
    top: { minX: 535, minY: 91, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 380, minY: 349, maxX: 587, maxY: 552 },
    right: { minX: 679, minY: 351, maxX: 881, maxY: 549 },
    top: { minX: 535, minY: 90, maxX: 736, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 348, maxX: 587, maxY: 551 },
    right: { minX: 679, minY: 350, maxX: 880, maxY: 547 },
    top: { minX: 535, minY: 88, maxX: 735, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 348, maxX: 586, maxY: 551 },
    right: { minX: 678, minY: 349, maxX: 879, maxY: 547 },
    top: { minX: 534, minY: 88, maxX: 734, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 349, maxX: 587, maxY: 551 },
    right: { minX: 678, minY: 350, maxX: 879, maxY: 547 },
    top: { minX: 535, minY: 90, maxX: 734, maxY: 296 },
  },
  {
    left: { minX: 380, minY: 351, maxX: 587, maxY: 552 },
    right: { minX: 678, minY: 351, maxX: 879, maxY: 548 },
    top: { minX: 535, minY: 92, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 381, minY: 351, maxX: 587, maxY: 553 },
    right: { minX: 679, minY: 352, maxX: 879, maxY: 549 },
    top: { minX: 535, minY: 93, maxX: 734, maxY: 298 },
  },
  {
    left: { minX: 381, minY: 352, maxX: 587, maxY: 553 },
    right: { minX: 678, minY: 353, maxX: 878, maxY: 549 },
    top: { minX: 536, minY: 95, maxX: 734, maxY: 299 },
  },
  {
    left: { minX: 382, minY: 351, maxX: 588, maxY: 552 },
    right: { minX: 679, minY: 352, maxX: 879, maxY: 549 },
    top: { minX: 537, minY: 93, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 382, minY: 350, maxX: 588, maxY: 551 },
    right: { minX: 679, minY: 351, maxX: 879, maxY: 547 },
    top: { minX: 537, minY: 92, maxX: 735, maxY: 297 },
  },
  {
    left: { minX: 384, minY: 349, maxX: 589, maxY: 550 },
    right: { minX: 680, minY: 351, maxX: 879, maxY: 547 },
    top: { minX: 537, minY: 93, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 350, maxX: 590, maxY: 551 },
    right: { minX: 681, minY: 351, maxX: 880, maxY: 547 },
    top: { minX: 539, minY: 93, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 386, minY: 350, maxX: 591, maxY: 550 },
    right: { minX: 682, minY: 352, maxX: 880, maxY: 547 },
    top: { minX: 540, minY: 94, maxX: 738, maxY: 297 },
  },
  {
    left: { minX: 387, minY: 350, maxX: 591, maxY: 550 },
    right: { minX: 682, minY: 352, maxX: 881, maxY: 547 },
    top: { minX: 541, minY: 95, maxX: 738, maxY: 297 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 592, maxY: 550 },
    right: { minX: 682, minY: 352, maxX: 881, maxY: 547 },
    top: { minX: 541, minY: 95, maxX: 738, maxY: 297 },
  },
  {
    left: { minX: 388, minY: 351, maxX: 591, maxY: 550 },
    right: { minX: 682, minY: 352, maxX: 880, maxY: 547 },
    top: { minX: 541, minY: 96, maxX: 738, maxY: 298 },
  },
  {
    left: { minX: 389, minY: 351, maxX: 592, maxY: 551 },
    right: { minX: 683, minY: 353, maxX: 881, maxY: 547 },
    top: { minX: 542, minY: 97, maxX: 738, maxY: 299 },
  },
  {
    left: { minX: 390, minY: 351, maxX: 593, maxY: 550 },
    right: { minX: 683, minY: 353, maxX: 881, maxY: 547 },
    top: { minX: 543, minY: 97, maxX: 739, maxY: 299 },
  },
  {
    left: { minX: 391, minY: 351, maxX: 593, maxY: 550 },
    right: { minX: 684, minY: 353, maxX: 881, maxY: 547 },
    top: { minX: 543, minY: 98, maxX: 739, maxY: 299 },
  },
  {
    left: { minX: 392, minY: 351, maxX: 594, maxY: 550 },
    right: { minX: 684, minY: 353, maxX: 882, maxY: 547 },
    top: { minX: 545, minY: 98, maxX: 740, maxY: 299 },
  },
  {
    left: { minX: 393, minY: 350, maxX: 595, maxY: 549 },
    right: { minX: 685, minY: 353, maxX: 883, maxY: 547 },
    top: { minX: 545, minY: 97, maxX: 741, maxY: 299 },
  },
  {
    left: { minX: 392, minY: 350, maxX: 595, maxY: 549 },
    right: { minX: 685, minY: 352, maxX: 883, maxY: 546 },
    top: { minX: 545, minY: 96, maxX: 741, maxY: 298 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 595, maxY: 548 },
    right: { minX: 685, minY: 352, maxX: 883, maxY: 545 },
    top: { minX: 546, minY: 96, maxX: 742, maxY: 297 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 595, maxY: 548 },
    right: { minX: 685, minY: 352, maxX: 882, maxY: 545 },
    top: { minX: 545, minY: 97, maxX: 742, maxY: 298 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 596, maxY: 547 },
    right: { minX: 686, minY: 351, maxX: 883, maxY: 545 },
    top: { minX: 547, minY: 96, maxX: 742, maxY: 297 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 595, maxY: 547 },
    right: { minX: 685, minY: 351, maxX: 882, maxY: 544 },
    top: { minX: 546, minY: 95, maxX: 742, maxY: 297 },
  },
  {
    left: { minX: 394, minY: 348, maxX: 596, maxY: 546 },
    right: { minX: 686, minY: 350, maxX: 883, maxY: 543 },
    top: { minX: 547, minY: 95, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 396, minY: 348, maxX: 597, maxY: 545 },
    right: { minX: 687, minY: 350, maxX: 884, maxY: 543 },
    top: { minX: 547, minY: 95, maxX: 743, maxY: 296 },
  },
  {
    left: { minX: 396, minY: 347, maxX: 598, maxY: 545 },
    right: { minX: 687, minY: 349, maxX: 884, maxY: 542 },
    top: { minX: 548, minY: 95, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 398, minY: 347, maxX: 599, maxY: 544 },
    right: { minX: 689, minY: 349, maxX: 885, maxY: 541 },
    top: { minX: 550, minY: 95, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 400, minY: 346, maxX: 601, maxY: 543 },
    right: { minX: 690, minY: 348, maxX: 887, maxY: 541 },
    top: { minX: 551, minY: 93, maxX: 746, maxY: 294 },
  },
  {
    left: { minX: 401, minY: 345, maxX: 602, maxY: 542 },
    right: { minX: 691, minY: 348, maxX: 888, maxY: 540 },
    top: { minX: 553, minY: 93, maxX: 748, maxY: 293 },
  },
  {
    left: { minX: 402, minY: 344, maxX: 603, maxY: 541 },
    right: { minX: 692, minY: 347, maxX: 889, maxY: 539 },
    top: { minX: 554, minY: 92, maxX: 749, maxY: 293 },
  },
  {
    left: { minX: 403, minY: 344, maxX: 603, maxY: 541 },
    right: { minX: 692, minY: 347, maxX: 889, maxY: 539 },
    top: { minX: 555, minY: 91, maxX: 750, maxY: 293 },
  },
  {
    left: { minX: 404, minY: 343, maxX: 604, maxY: 539 },
    right: { minX: 693, minY: 346, maxX: 890, maxY: 538 },
    top: { minX: 556, minY: 91, maxX: 751, maxY: 292 },
  },
  {
    left: { minX: 405, minY: 343, maxX: 605, maxY: 540 },
    right: { minX: 694, minY: 347, maxX: 890, maxY: 539 },
    top: { minX: 557, minY: 92, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 606, maxY: 540 },
    right: { minX: 695, minY: 348, maxX: 891, maxY: 539 },
    top: { minX: 558, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 540 },
    right: { minX: 694, minY: 348, maxX: 890, maxY: 539 },
    top: { minX: 558, minY: 94, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 407, minY: 345, maxX: 606, maxY: 541 },
    right: { minX: 694, minY: 349, maxX: 890, maxY: 539 },
    top: { minX: 558, minY: 95, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 605, maxY: 541 },
    right: { minX: 694, minY: 349, maxX: 890, maxY: 539 },
    top: { minX: 558, minY: 95, maxX: 751, maxY: 295 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 540 },
    right: { minX: 694, minY: 348, maxX: 890, maxY: 539 },
    top: { minX: 558, minY: 94, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 540 },
    right: { minX: 694, minY: 348, maxX: 890, maxY: 539 },
    top: { minX: 558, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 343, maxX: 605, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 890, maxY: 538 },
    top: { minX: 558, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 889, maxY: 538 },
    top: { minX: 557, minY: 93, maxX: 751, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 889, maxY: 538 },
    top: { minX: 558, minY: 94, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 693, minY: 347, maxX: 888, maxY: 538 },
    top: { minX: 557, minY: 94, maxX: 751, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 604, maxY: 540 },
    right: { minX: 693, minY: 348, maxX: 888, maxY: 538 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 605, maxY: 540 },
    right: { minX: 693, minY: 348, maxX: 888, maxY: 538 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 604, maxY: 540 },
    right: { minX: 693, minY: 348, maxX: 887, maxY: 538 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 693, minY: 347, maxX: 888, maxY: 537 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 293 },
  },
  {
    left: { minX: 407, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 693, minY: 347, maxX: 888, maxY: 537 },
    top: { minX: 557, minY: 94, maxX: 750, maxY: 293 },
  },
  {
    left: { minX: 408, minY: 344, maxX: 606, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 888, maxY: 537 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 409, minY: 345, maxX: 607, maxY: 539 },
    right: { minX: 695, minY: 348, maxX: 889, maxY: 537 },
    top: { minX: 559, minY: 96, maxX: 751, maxY: 294 },
  },
  {
    left: { minX: 411, minY: 344, maxX: 608, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 537 },
    top: { minX: 560, minY: 96, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 411, minY: 344, maxX: 608, maxY: 538 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 95, maxX: 753, maxY: 293 },
  },
  {
    left: { minX: 413, minY: 344, maxX: 609, maxY: 537 },
    right: { minX: 697, minY: 347, maxX: 891, maxY: 535 },
    top: { minX: 561, minY: 95, maxX: 754, maxY: 293 },
  },
  {
    left: { minX: 414, minY: 344, maxX: 610, maxY: 538 },
    right: { minX: 698, minY: 347, maxX: 892, maxY: 535 },
    top: { minX: 563, minY: 96, maxX: 754, maxY: 294 },
  },
  {
    left: { minX: 415, minY: 345, maxX: 611, maxY: 538 },
    right: { minX: 699, minY: 348, maxX: 892, maxY: 537 },
    top: { minX: 564, minY: 97, maxX: 755, maxY: 294 },
  },
  {
    left: { minX: 415, minY: 345, maxX: 611, maxY: 538 },
    right: { minX: 699, minY: 348, maxX: 892, maxY: 537 },
    top: { minX: 564, minY: 98, maxX: 755, maxY: 295 },
  },
  {
    left: { minX: 415, minY: 345, maxX: 611, maxY: 538 },
    right: { minX: 698, minY: 348, maxX: 892, maxY: 536 },
    top: { minX: 563, minY: 98, maxX: 755, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 539 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 537 },
    top: { minX: 563, minY: 98, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 538 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 536 },
    top: { minX: 563, minY: 97, maxX: 754, maxY: 294 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 538 },
    right: { minX: 698, minY: 347, maxX: 891, maxY: 536 },
    top: { minX: 562, minY: 97, maxX: 754, maxY: 294 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 538 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 536 },
    top: { minX: 562, minY: 97, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 348, maxX: 890, maxY: 537 },
    top: { minX: 563, minY: 98, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 698, minY: 349, maxX: 891, maxY: 537 },
    top: { minX: 563, minY: 99, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 349, maxX: 890, maxY: 537 },
    top: { minX: 562, minY: 99, maxX: 753, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 349, maxX: 890, maxY: 537 },
    top: { minX: 562, minY: 99, maxX: 753, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 537 },
    top: { minX: 562, minY: 98, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 536 },
    top: { minX: 562, minY: 98, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 348, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 98, maxX: 753, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 539 },
    right: { minX: 698, minY: 348, maxX: 891, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 753, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 346, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 538 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 538 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 535 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 294 },
  },
  {
    left: { minX: 413, minY: 346, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 348, maxX: 890, maxY: 537 },
    top: { minX: 561, minY: 98, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 346, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 348, maxX: 890, maxY: 537 },
    top: { minX: 561, minY: 98, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 412, minY: 347, maxX: 608, maxY: 539 },
    right: { minX: 696, minY: 349, maxX: 889, maxY: 537 },
    top: { minX: 559, minY: 99, maxX: 751, maxY: 296 },
  },
  {
    left: { minX: 411, minY: 347, maxX: 607, maxY: 540 },
    right: { minX: 694, minY: 349, maxX: 888, maxY: 538 },
    top: { minX: 559, minY: 99, maxX: 750, maxY: 297 },
  },
  {
    left: { minX: 409, minY: 348, maxX: 605, maxY: 541 },
    right: { minX: 693, minY: 350, maxX: 886, maxY: 539 },
    top: { minX: 557, minY: 100, maxX: 748, maxY: 297 },
  },
  {
    left: { minX: 408, minY: 348, maxX: 604, maxY: 541 },
    right: { minX: 692, minY: 350, maxX: 885, maxY: 539 },
    top: { minX: 555, minY: 100, maxX: 747, maxY: 297 },
  },
  {
    left: { minX: 405, minY: 348, maxX: 602, maxY: 541 },
    right: { minX: 690, minY: 350, maxX: 884, maxY: 539 },
    top: { minX: 554, minY: 100, maxX: 746, maxY: 297 },
  },
  {
    left: { minX: 404, minY: 348, maxX: 601, maxY: 542 },
    right: { minX: 689, minY: 350, maxX: 882, maxY: 539 },
    top: { minX: 552, minY: 100, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 403, minY: 347, maxX: 600, maxY: 541 },
    right: { minX: 688, minY: 349, maxX: 882, maxY: 539 },
    top: { minX: 551, minY: 99, maxX: 743, maxY: 296 },
  },
  {
    left: { minX: 401, minY: 347, maxX: 599, maxY: 541 },
    right: { minX: 687, minY: 349, maxX: 881, maxY: 539 },
    top: { minX: 549, minY: 98, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 400, minY: 347, maxX: 598, maxY: 541 },
    right: { minX: 687, minY: 349, maxX: 881, maxY: 539 },
    top: { minX: 549, minY: 98, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 399, minY: 347, maxX: 597, maxY: 542 },
    right: { minX: 686, minY: 349, maxX: 880, maxY: 539 },
    top: { minX: 548, minY: 98, maxX: 740, maxY: 296 },
  },
  {
    left: { minX: 398, minY: 348, maxX: 596, maxY: 543 },
    right: { minX: 684, minY: 350, maxX: 878, maxY: 541 },
    top: { minX: 547, minY: 99, maxX: 739, maxY: 297 },
  },
  {
    left: { minX: 396, minY: 349, maxX: 595, maxY: 544 },
    right: { minX: 683, minY: 351, maxX: 877, maxY: 541 },
    top: { minX: 546, minY: 100, maxX: 738, maxY: 298 },
  },
  {
    left: { minX: 395, minY: 349, maxX: 594, maxY: 544 },
    right: { minX: 682, minY: 351, maxX: 877, maxY: 541 },
    top: { minX: 545, minY: 99, maxX: 737, maxY: 298 },
  },
  {
    left: { minX: 392, minY: 349, maxX: 592, maxY: 544 },
    right: { minX: 680, minY: 351, maxX: 874, maxY: 541 },
    top: { minX: 542, minY: 99, maxX: 735, maxY: 298 },
  },
  {
    left: { minX: 391, minY: 349, maxX: 590, maxY: 544 },
    right: { minX: 679, minY: 350, maxX: 873, maxY: 541 },
    top: { minX: 541, minY: 98, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 388, minY: 348, maxX: 588, maxY: 544 },
    right: { minX: 678, minY: 349, maxX: 872, maxY: 541 },
    top: { minX: 539, minY: 97, maxX: 732, maxY: 297 },
  },
  {
    left: { minX: 387, minY: 348, maxX: 587, maxY: 544 },
    right: { minX: 676, minY: 350, maxX: 871, maxY: 541 },
    top: { minX: 537, minY: 97, maxX: 732, maxY: 297 },
  },
  {
    left: { minX: 386, minY: 348, maxX: 587, maxY: 544 },
    right: { minX: 676, minY: 350, maxX: 871, maxY: 542 },
    top: { minX: 537, minY: 97, maxX: 731, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 347, maxX: 585, maxY: 544 },
    right: { minX: 675, minY: 350, maxX: 869, maxY: 541 },
    top: { minX: 537, minY: 96, maxX: 730, maxY: 296 },
  },
  {
    left: { minX: 383, minY: 346, maxX: 584, maxY: 543 },
    right: { minX: 673, minY: 349, maxX: 868, maxY: 541 },
    top: { minX: 535, minY: 95, maxX: 730, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 346, maxX: 581, maxY: 543 },
    right: { minX: 670, minY: 349, maxX: 865, maxY: 541 },
    top: { minX: 531, minY: 95, maxX: 726, maxY: 295 },
  },
  {
    left: { minX: 377, minY: 346, maxX: 579, maxY: 543 },
    right: { minX: 669, minY: 348, maxX: 864, maxY: 540 },
    top: { minX: 529, minY: 93, maxX: 724, maxY: 294 },
  },
  {
    left: { minX: 377, minY: 347, maxX: 579, maxY: 543 },
    right: { minX: 669, minY: 348, maxX: 864, maxY: 541 },
    top: { minX: 529, minY: 94, maxX: 724, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 347, maxX: 580, maxY: 544 },
    right: { minX: 669, minY: 350, maxX: 864, maxY: 541 },
    top: { minX: 531, minY: 96, maxX: 724, maxY: 296 },
  },
  {
    left: { minX: 380, minY: 349, maxX: 581, maxY: 545 },
    right: { minX: 671, minY: 351, maxX: 865, maxY: 543 },
    top: { minX: 532, minY: 98, maxX: 726, maxY: 297 },
  },
  {
    left: { minX: 382, minY: 350, maxX: 582, maxY: 545 },
    right: { minX: 672, minY: 352, maxX: 866, maxY: 544 },
    top: { minX: 533, minY: 100, maxX: 727, maxY: 299 },
  },
  {
    left: { minX: 382, minY: 350, maxX: 583, maxY: 546 },
    right: { minX: 672, minY: 353, maxX: 866, maxY: 544 },
    top: { minX: 534, minY: 101, maxX: 727, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 352, maxX: 583, maxY: 547 },
    right: { minX: 672, minY: 354, maxX: 866, maxY: 545 },
    top: { minX: 534, minY: 103, maxX: 727, maxY: 301 },
  },
  {
    left: { minX: 384, minY: 352, maxX: 584, maxY: 547 },
    right: { minX: 673, minY: 355, maxX: 867, maxY: 545 },
    top: { minX: 535, minY: 103, maxX: 728, maxY: 301 },
  },
  {
    left: { minX: 384, minY: 352, maxX: 584, maxY: 547 },
    right: { minX: 673, minY: 354, maxX: 867, maxY: 546 },
    top: { minX: 535, minY: 103, maxX: 728, maxY: 301 },
  },
  {
    left: { minX: 384, minY: 352, maxX: 584, maxY: 547 },
    right: { minX: 673, minY: 354, maxX: 867, maxY: 545 },
    top: { minX: 535, minY: 102, maxX: 728, maxY: 301 },
  },
  {
    left: { minX: 383, minY: 351, maxX: 583, maxY: 546 },
    right: { minX: 673, minY: 353, maxX: 867, maxY: 545 },
    top: { minX: 535, minY: 101, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 583, maxY: 546 },
    right: { minX: 673, minY: 352, maxX: 867, maxY: 544 },
    top: { minX: 535, minY: 100, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 583, maxY: 546 },
    right: { minX: 672, minY: 352, maxX: 867, maxY: 543 },
    top: { minX: 534, minY: 99, maxX: 728, maxY: 298 },
  },
  {
    left: { minX: 383, minY: 349, maxX: 584, maxY: 545 },
    right: { minX: 673, minY: 352, maxX: 868, maxY: 543 },
    top: { minX: 534, minY: 99, maxX: 728, maxY: 298 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 584, maxY: 546 },
    right: { minX: 673, minY: 352, maxX: 868, maxY: 543 },
    top: { minX: 535, minY: 99, maxX: 728, maxY: 298 },
  },
  {
    left: { minX: 384, minY: 350, maxX: 584, maxY: 546 },
    right: { minX: 673, minY: 352, maxX: 868, maxY: 544 },
    top: { minX: 535, minY: 100, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 384, minY: 351, maxX: 584, maxY: 547 },
    right: { minX: 673, minY: 353, maxX: 867, maxY: 544 },
    top: { minX: 535, minY: 101, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 384, minY: 351, maxX: 583, maxY: 547 },
    right: { minX: 673, minY: 354, maxX: 867, maxY: 545 },
    top: { minX: 535, minY: 102, maxX: 727, maxY: 300 },
  },
  {
    left: { minX: 383, minY: 352, maxX: 583, maxY: 547 },
    right: { minX: 672, minY: 354, maxX: 866, maxY: 545 },
    top: { minX: 534, minY: 103, maxX: 726, maxY: 301 },
  },
  {
    left: { minX: 384, minY: 352, maxX: 583, maxY: 548 },
    right: { minX: 672, minY: 355, maxX: 866, maxY: 545 },
    top: { minX: 535, minY: 104, maxX: 727, maxY: 301 },
  },
  {
    left: { minX: 385, minY: 355, maxX: 584, maxY: 549 },
    right: { minX: 673, minY: 357, maxX: 866, maxY: 547 },
    top: { minX: 536, minY: 107, maxX: 728, maxY: 304 },
  },
  {
    left: { minX: 386, minY: 355, maxX: 585, maxY: 550 },
    right: { minX: 673, minY: 358, maxX: 866, maxY: 548 },
    top: { minX: 537, minY: 108, maxX: 728, maxY: 305 },
  },
  {
    left: { minX: 386, minY: 356, maxX: 585, maxY: 550 },
    right: { minX: 673, minY: 359, maxX: 866, maxY: 549 },
    top: { minX: 537, minY: 110, maxX: 728, maxY: 306 },
  },
  {
    left: { minX: 386, minY: 356, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 359, maxX: 865, maxY: 549 },
    top: { minX: 536, minY: 111, maxX: 727, maxY: 306 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 549 },
    top: { minX: 536, minY: 111, maxX: 726, maxY: 306 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 536, minY: 112, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 537, minY: 112, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 537, minY: 111, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 537, minY: 112, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 672, minY: 361, maxX: 863, maxY: 550 },
    top: { minX: 537, minY: 112, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 358, maxX: 583, maxY: 552 },
    right: { minX: 672, minY: 361, maxX: 863, maxY: 551 },
    top: { minX: 537, minY: 113, maxX: 726, maxY: 308 },
  },
  {
    left: { minX: 386, minY: 358, maxX: 583, maxY: 552 },
    right: { minX: 672, minY: 362, maxX: 863, maxY: 551 },
    top: { minX: 537, minY: 115, maxX: 726, maxY: 309 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 671, minY: 360, maxX: 862, maxY: 549 },
    top: { minX: 536, minY: 113, maxX: 726, maxY: 307 },
  },
  {
    left: { minX: 386, minY: 356, maxX: 583, maxY: 550 },
    right: { minX: 671, minY: 359, maxX: 863, maxY: 548 },
    top: { minX: 536, minY: 112, maxX: 726, maxY: 306 },
  },
  {
    left: { minX: 388, minY: 357, maxX: 585, maxY: 550 },
    right: { minX: 673, minY: 361, maxX: 864, maxY: 549 },
    top: { minX: 539, minY: 114, maxX: 728, maxY: 308 },
  },
  {
    left: { minX: 389, minY: 357, maxX: 586, maxY: 550 },
    right: { minX: 674, minY: 361, maxX: 864, maxY: 549 },
    top: { minX: 539, minY: 113, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 389, minY: 356, maxX: 586, maxY: 549 },
    right: { minX: 674, minY: 360, maxX: 865, maxY: 549 },
    top: { minX: 540, minY: 113, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 586, maxY: 549 },
    right: { minX: 674, minY: 360, maxX: 865, maxY: 548 },
    top: { minX: 540, minY: 112, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 390, minY: 355, maxX: 587, maxY: 548 },
    right: { minX: 674, minY: 359, maxX: 865, maxY: 547 },
    top: { minX: 541, minY: 112, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 587, maxY: 548 },
    right: { minX: 675, minY: 360, maxX: 866, maxY: 547 },
    top: { minX: 541, minY: 113, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 588, maxY: 548 },
    right: { minX: 675, minY: 360, maxX: 865, maxY: 547 },
    top: { minX: 542, minY: 113, maxX: 730, maxY: 307 },
  },
  {
    left: { minX: 392, minY: 356, maxX: 588, maxY: 548 },
    right: { minX: 675, minY: 360, maxX: 865, maxY: 547 },
    top: { minX: 542, minY: 113, maxX: 731, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 588, maxY: 547 },
    right: { minX: 675, minY: 359, maxX: 865, maxY: 547 },
    top: { minX: 541, minY: 113, maxX: 731, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 675, minY: 359, maxX: 864, maxY: 546 },
    top: { minX: 541, minY: 113, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 359, maxX: 864, maxY: 546 },
    top: { minX: 541, minY: 113, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 586, maxY: 548 },
    right: { minX: 674, minY: 360, maxX: 863, maxY: 547 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 586, maxY: 548 },
    right: { minX: 673, minY: 361, maxX: 862, maxY: 547 },
    top: { minX: 541, minY: 115, maxX: 728, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 360, maxX: 863, maxY: 547 },
    top: { minX: 541, minY: 114, maxX: 730, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 673, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 586, maxY: 546 },
    right: { minX: 673, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 546 },
    right: { minX: 674, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 542, minY: 114, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 586, maxY: 547 },
    right: { minX: 673, minY: 360, maxX: 861, maxY: 547 },
    top: { minX: 541, minY: 115, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 586, maxY: 547 },
    right: { minX: 673, minY: 361, maxX: 861, maxY: 546 },
    top: { minX: 541, minY: 116, maxX: 728, maxY: 308 },
  },
  {
    left: { minX: 390, minY: 355, maxX: 585, maxY: 546 },
    right: { minX: 672, minY: 359, maxX: 859, maxY: 545 },
    top: { minX: 540, minY: 115, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 354, maxX: 586, maxY: 544 },
    right: { minX: 672, minY: 358, maxX: 860, maxY: 543 },
    top: { minX: 540, minY: 113, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 391, minY: 353, maxX: 586, maxY: 544 },
    right: { minX: 672, minY: 357, maxX: 859, maxY: 542 },
    top: { minX: 540, minY: 113, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 392, minY: 353, maxX: 586, maxY: 543 },
    right: { minX: 672, minY: 358, maxX: 859, maxY: 542 },
    top: { minX: 541, minY: 114, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 393, minY: 355, maxX: 586, maxY: 544 },
    right: { minX: 672, minY: 359, maxX: 858, maxY: 543 },
    top: { minX: 542, minY: 116, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 392, minY: 355, maxX: 585, maxY: 545 },
    right: { minX: 671, minY: 361, maxX: 856, maxY: 544 },
    top: { minX: 541, minY: 118, maxX: 726, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 584, maxY: 545 },
    right: { minX: 670, minY: 361, maxX: 855, maxY: 544 },
    top: { minX: 540, minY: 118, maxX: 725, maxY: 308 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 584, maxY: 545 },
    right: { minX: 670, minY: 361, maxX: 854, maxY: 543 },
    top: { minX: 539, minY: 119, maxX: 724, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 584, maxY: 545 },
    right: { minX: 669, minY: 360, maxX: 854, maxY: 543 },
    top: { minX: 539, minY: 119, maxX: 724, maxY: 308 },
  },
  {
    left: { minX: 390, minY: 355, maxX: 583, maxY: 544 },
    right: { minX: 669, minY: 360, maxX: 853, maxY: 543 },
    top: { minX: 539, minY: 119, maxX: 723, maxY: 308 },
  },
  {
    left: { minX: 392, minY: 356, maxX: 584, maxY: 545 },
    right: { minX: 669, minY: 361, maxX: 854, maxY: 543 },
    top: { minX: 541, minY: 121, maxX: 724, maxY: 309 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 584, maxY: 543 },
    right: { minX: 669, minY: 361, maxX: 853, maxY: 542 },
    top: { minX: 540, minY: 119, maxX: 724, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 354, maxX: 583, maxY: 542 },
    right: { minX: 669, minY: 359, maxX: 852, maxY: 541 },
    top: { minX: 540, minY: 118, maxX: 724, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 354, maxX: 583, maxY: 542 },
    right: { minX: 669, minY: 359, maxX: 852, maxY: 541 },
    top: { minX: 539, minY: 119, maxX: 724, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 583, maxY: 542 },
    right: { minX: 668, minY: 360, maxX: 851, maxY: 541 },
    top: { minX: 539, minY: 120, maxX: 723, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 354, maxX: 583, maxY: 542 },
    right: { minX: 668, minY: 360, maxX: 850, maxY: 541 },
    top: { minX: 539, minY: 120, maxX: 722, maxY: 307 },
  },
  {
    left: { minX: 390, minY: 353, maxX: 582, maxY: 541 },
    right: { minX: 667, minY: 359, maxX: 850, maxY: 539 },
    top: { minX: 539, minY: 119, maxX: 722, maxY: 306 },
  },
  {
    left: { minX: 390, minY: 353, maxX: 582, maxY: 541 },
    right: { minX: 667, minY: 359, maxX: 850, maxY: 539 },
    top: { minX: 539, minY: 119, maxX: 722, maxY: 306 },
  },
  {
    left: { minX: 390, minY: 354, maxX: 581, maxY: 541 },
    right: { minX: 666, minY: 360, maxX: 848, maxY: 540 },
    top: { minX: 538, minY: 120, maxX: 721, maxY: 307 },
  },
  {
    left: { minX: 389, minY: 354, maxX: 580, maxY: 542 },
    right: { minX: 665, minY: 360, maxX: 846, maxY: 539 },
    top: { minX: 537, minY: 121, maxX: 720, maxY: 307 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 580, maxY: 542 },
    right: { minX: 665, minY: 360, maxX: 846, maxY: 539 },
    top: { minX: 537, minY: 121, maxX: 719, maxY: 308 },
  },
  {
    left: { minX: 388, minY: 355, maxX: 579, maxY: 542 },
    right: { minX: 664, minY: 360, maxX: 844, maxY: 540 },
    top: { minX: 536, minY: 122, maxX: 718, maxY: 308 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 580, maxY: 542 },
    right: { minX: 664, minY: 360, maxX: 844, maxY: 539 },
    top: { minX: 536, minY: 122, maxX: 718, maxY: 308 },
  },
  {
    left: { minX: 388, minY: 355, maxX: 578, maxY: 541 },
    right: { minX: 663, minY: 359, maxX: 843, maxY: 538 },
    top: { minX: 535, minY: 122, maxX: 716, maxY: 308 },
  },
  {
    left: { minX: 388, minY: 355, maxX: 578, maxY: 542 },
    right: { minX: 663, minY: 359, maxX: 843, maxY: 538 },
    top: { minX: 535, minY: 122, maxX: 716, maxY: 308 },
  },
  {
    left: { minX: 388, minY: 356, maxX: 578, maxY: 542 },
    right: { minX: 662, minY: 360, maxX: 842, maxY: 539 },
    top: { minX: 534, minY: 125, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 389, minY: 356, maxX: 579, maxY: 542 },
    right: { minX: 662, minY: 360, maxX: 842, maxY: 538 },
    top: { minX: 535, minY: 125, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 579, maxY: 541 },
    right: { minX: 662, minY: 359, maxX: 842, maxY: 536 },
    top: { minX: 535, minY: 123, maxX: 715, maxY: 308 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 579, maxY: 541 },
    right: { minX: 662, minY: 360, maxX: 841, maxY: 537 },
    top: { minX: 535, minY: 125, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 580, maxY: 541 },
    right: { minX: 663, minY: 360, maxX: 841, maxY: 537 },
    top: { minX: 535, minY: 126, maxX: 715, maxY: 310 },
  },
  {
    left: { minX: 392, minY: 357, maxX: 580, maxY: 541 },
    right: { minX: 663, minY: 361, maxX: 841, maxY: 538 },
    top: { minX: 536, minY: 127, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 580, maxY: 542 },
    right: { minX: 663, minY: 361, maxX: 841, maxY: 538 },
    top: { minX: 536, minY: 127, maxX: 716, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 580, maxY: 542 },
    right: { minX: 662, minY: 362, maxX: 840, maxY: 539 },
    top: { minX: 536, minY: 129, maxX: 715, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 542 },
    right: { minX: 662, minY: 362, maxX: 840, maxY: 538 },
    top: { minX: 535, minY: 129, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 359, maxX: 578, maxY: 542 },
    right: { minX: 661, minY: 362, maxX: 838, maxY: 538 },
    top: { minX: 535, minY: 129, maxX: 713, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 542 },
    right: { minX: 662, minY: 362, maxX: 838, maxY: 537 },
    top: { minX: 535, minY: 130, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 541 },
    right: { minX: 661, minY: 361, maxX: 838, maxY: 537 },
    top: { minX: 535, minY: 129, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 540 },
    right: { minX: 661, minY: 361, maxX: 837, maxY: 536 },
    top: { minX: 535, minY: 129, maxX: 713, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 578, maxY: 541 },
    right: { minX: 661, minY: 361, maxX: 837, maxY: 536 },
    top: { minX: 535, minY: 130, maxX: 712, maxY: 311 },
  },
  {
    left: { minX: 392, minY: 358, maxX: 578, maxY: 541 },
    right: { minX: 660, minY: 362, maxX: 836, maxY: 536 },
    top: { minX: 535, minY: 131, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 393, minY: 358, maxX: 579, maxY: 540 },
    right: { minX: 661, minY: 362, maxX: 836, maxY: 536 },
    top: { minX: 535, minY: 131, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 393, minY: 358, maxX: 579, maxY: 540 },
    right: { minX: 661, minY: 362, maxX: 836, maxY: 536 },
    top: { minX: 535, minY: 132, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 393, minY: 359, maxX: 579, maxY: 540 },
    right: { minX: 661, minY: 362, maxX: 836, maxY: 536 },
    top: { minX: 536, minY: 132, maxX: 712, maxY: 313 },
  },
  {
    left: { minX: 394, minY: 360, maxX: 579, maxY: 541 },
    right: { minX: 661, minY: 363, maxX: 836, maxY: 537 },
    top: { minX: 536, minY: 134, maxX: 712, maxY: 313 },
  },
  {
    left: { minX: 395, minY: 359, maxX: 580, maxY: 540 },
    right: { minX: 662, minY: 363, maxX: 837, maxY: 536 },
    top: { minX: 537, minY: 133, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 396, minY: 358, maxX: 580, maxY: 540 },
    right: { minX: 662, minY: 362, maxX: 837, maxY: 535 },
    top: { minX: 537, minY: 133, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 397, minY: 358, maxX: 581, maxY: 539 },
    right: { minX: 663, minY: 362, maxX: 837, maxY: 535 },
    top: { minX: 539, minY: 133, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 398, minY: 358, maxX: 583, maxY: 539 },
    right: { minX: 664, minY: 362, maxX: 838, maxY: 535 },
    top: { minX: 539, minY: 133, maxX: 716, maxY: 313 },
  },
  {
    left: { minX: 401, minY: 357, maxX: 584, maxY: 538 },
    right: { minX: 666, minY: 361, maxX: 840, maxY: 533 },
    top: { minX: 541, minY: 133, maxX: 717, maxY: 312 },
  },
  {
    left: { minX: 402, minY: 357, maxX: 586, maxY: 537 },
    right: { minX: 667, minY: 361, maxX: 841, maxY: 533 },
    top: { minX: 543, minY: 132, maxX: 718, maxY: 311 },
  },
  {
    left: { minX: 403, minY: 357, maxX: 586, maxY: 536 },
    right: { minX: 667, minY: 361, maxX: 841, maxY: 533 },
    top: { minX: 544, minY: 133, maxX: 719, maxY: 311 },
  },
  {
    left: { minX: 406, minY: 357, maxX: 588, maxY: 536 },
    right: { minX: 668, minY: 361, maxX: 842, maxY: 532 },
    top: { minX: 545, minY: 133, maxX: 720, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 357, maxX: 588, maxY: 536 },
    right: { minX: 669, minY: 361, maxX: 842, maxY: 532 },
    top: { minX: 546, minY: 134, maxX: 720, maxY: 312 },
  },
  {
    left: { minX: 408, minY: 357, maxX: 589, maxY: 536 },
    right: { minX: 669, minY: 361, maxX: 842, maxY: 532 },
    top: { minX: 547, minY: 135, maxX: 720, maxY: 312 },
  },
  {
    left: { minX: 408, minY: 358, maxX: 590, maxY: 536 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 547, minY: 136, maxX: 720, maxY: 312 },
  },
  {
    left: { minX: 409, minY: 357, maxX: 590, maxY: 535 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 547, minY: 135, maxX: 721, maxY: 312 },
  },
  {
    left: { minX: 409, minY: 357, maxX: 590, maxY: 535 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 547, minY: 135, maxX: 720, maxY: 312 },
  },
  {
    left: { minX: 410, minY: 357, maxX: 591, maxY: 535 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 548, minY: 135, maxX: 722, maxY: 312 },
  },
  {
    left: { minX: 411, minY: 357, maxX: 591, maxY: 534 },
    right: { minX: 671, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 549, minY: 135, maxX: 722, maxY: 312 },
  },
  {
    left: { minX: 411, minY: 356, maxX: 592, maxY: 534 },
    right: { minX: 671, minY: 361, maxX: 842, maxY: 530 },
    top: { minX: 550, minY: 135, maxX: 722, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 356, maxX: 592, maxY: 533 },
    right: { minX: 672, minY: 361, maxX: 842, maxY: 530 },
    top: { minX: 551, minY: 136, maxX: 723, maxY: 312 },
  },
  {
    left: { minX: 411, minY: 356, maxX: 591, maxY: 533 },
    right: { minX: 670, minY: 361, maxX: 841, maxY: 529 },
    top: { minX: 549, minY: 135, maxX: 722, maxY: 311 },
  },
  {
    left: { minX: 410, minY: 356, maxX: 590, maxY: 533 },
    right: { minX: 669, minY: 360, maxX: 840, maxY: 529 },
    top: { minX: 549, minY: 135, maxX: 721, maxY: 311 },
  },
  {
    left: { minX: 409, minY: 356, maxX: 589, maxY: 533 },
    right: { minX: 668, minY: 360, maxX: 839, maxY: 529 },
    top: { minX: 547, minY: 135, maxX: 720, maxY: 311 },
  },
  {
    left: { minX: 409, minY: 355, maxX: 589, maxY: 532 },
    right: { minX: 668, minY: 360, maxX: 838, maxY: 528 },
    top: { minX: 547, minY: 135, maxX: 720, maxY: 311 },
  },
  {
    left: { minX: 409, minY: 356, maxX: 589, maxY: 533 },
    right: { minX: 668, minY: 360, maxX: 838, maxY: 528 },
    top: { minX: 547, minY: 136, maxX: 719, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 587, maxY: 533 },
    right: { minX: 666, minY: 360, maxX: 836, maxY: 527 },
    top: { minX: 545, minY: 136, maxX: 717, maxY: 311 },
  },
  {
    left: { minX: 408, minY: 355, maxX: 588, maxY: 532 },
    right: { minX: 667, minY: 359, maxX: 836, maxY: 527 },
    top: { minX: 545, minY: 135, maxX: 718, maxY: 311 },
  },
  {
    left: { minX: 408, minY: 356, maxX: 587, maxY: 532 },
    right: { minX: 666, minY: 359, maxX: 836, maxY: 527 },
    top: { minX: 545, minY: 136, maxX: 717, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 587, maxY: 531 },
    right: { minX: 666, minY: 359, maxX: 835, maxY: 526 },
    top: { minX: 545, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 408, minY: 355, maxX: 587, maxY: 531 },
    right: { minX: 666, minY: 358, maxX: 836, maxY: 526 },
    top: { minX: 545, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 587, maxY: 531 },
    right: { minX: 666, minY: 358, maxX: 835, maxY: 525 },
    top: { minX: 545, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 408, minY: 354, maxX: 587, maxY: 530 },
    right: { minX: 666, minY: 357, maxX: 836, maxY: 525 },
    top: { minX: 545, minY: 134, maxX: 717, maxY: 309 },
  },
  {
    left: { minX: 408, minY: 355, maxX: 587, maxY: 531 },
    right: { minX: 666, minY: 358, maxX: 834, maxY: 525 },
    top: { minX: 545, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 586, maxY: 532 },
    right: { minX: 665, minY: 359, maxX: 834, maxY: 525 },
    top: { minX: 544, minY: 137, maxX: 715, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 357, maxX: 586, maxY: 532 },
    right: { minX: 664, minY: 360, maxX: 832, maxY: 526 },
    top: { minX: 543, minY: 138, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 357, maxX: 586, maxY: 532 },
    right: { minX: 664, minY: 360, maxX: 832, maxY: 526 },
    top: { minX: 544, minY: 139, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 357, maxX: 585, maxY: 532 },
    right: { minX: 664, minY: 360, maxX: 832, maxY: 526 },
    top: { minX: 543, minY: 139, maxX: 713, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 585, maxY: 532 },
    right: { minX: 664, minY: 359, maxX: 831, maxY: 525 },
    top: { minX: 543, minY: 138, maxX: 713, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 586, maxY: 532 },
    right: { minX: 664, minY: 359, maxX: 831, maxY: 525 },
    top: { minX: 543, minY: 137, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 586, maxY: 531 },
    right: { minX: 664, minY: 359, maxX: 832, maxY: 525 },
    top: { minX: 543, minY: 137, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 586, maxY: 530 },
    right: { minX: 664, minY: 358, maxX: 832, maxY: 524 },
    top: { minX: 544, minY: 136, maxX: 714, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 354, maxX: 586, maxY: 529 },
    right: { minX: 664, minY: 357, maxX: 832, maxY: 523 },
    top: { minX: 543, minY: 135, maxX: 714, maxY: 309 },
  },
  {
    left: { minX: 407, minY: 353, maxX: 586, maxY: 528 },
    right: { minX: 664, minY: 355, maxX: 832, maxY: 521 },
    top: { minX: 543, minY: 133, maxX: 714, maxY: 308 },
  },
  {
    left: { minX: 409, minY: 351, maxX: 587, maxY: 526 },
    right: { minX: 665, minY: 353, maxX: 833, maxY: 519 },
    top: { minX: 544, minY: 131, maxX: 714, maxY: 305 },
  },
  {
    left: { minX: 409, minY: 351, maxX: 588, maxY: 526 },
    right: { minX: 666, minY: 353, maxX: 833, maxY: 519 },
    top: { minX: 545, minY: 131, maxX: 715, maxY: 306 },
  },
  {
    left: { minX: 409, minY: 351, maxX: 587, maxY: 526 },
    right: { minX: 666, minY: 353, maxX: 833, maxY: 519 },
    top: { minX: 544, minY: 131, maxX: 715, maxY: 306 },
  },
  {
    left: { minX: 410, minY: 352, maxX: 588, maxY: 526 },
    right: { minX: 665, minY: 354, maxX: 832, maxY: 519 },
    top: { minX: 545, minY: 133, maxX: 714, maxY: 307 },
  },
  {
    left: { minX: 411, minY: 353, maxX: 588, maxY: 527 },
    right: { minX: 666, minY: 355, maxX: 832, maxY: 520 },
    top: { minX: 545, minY: 135, maxX: 714, maxY: 308 },
  },
  {
    left: { minX: 412, minY: 353, maxX: 589, maxY: 527 },
    right: { minX: 666, minY: 355, maxX: 832, maxY: 520 },
    top: { minX: 545, minY: 136, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 412, minY: 354, maxX: 589, maxY: 528 },
    right: { minX: 666, minY: 356, maxX: 832, maxY: 520 },
    top: { minX: 545, minY: 136, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 413, minY: 354, maxX: 589, maxY: 528 },
    right: { minX: 667, minY: 356, maxX: 832, maxY: 520 },
    top: { minX: 546, minY: 137, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 414, minY: 354, maxX: 590, maxY: 528 },
    right: { minX: 667, minY: 356, maxX: 833, maxY: 521 },
    top: { minX: 547, minY: 137, maxX: 716, maxY: 309 },
  },
  {
    left: { minX: 415, minY: 353, maxX: 591, maxY: 527 },
    right: { minX: 668, minY: 355, maxX: 834, maxY: 519 },
    top: { minX: 548, minY: 137, maxX: 717, maxY: 309 },
  },
  {
    left: { minX: 416, minY: 352, maxX: 592, maxY: 526 },
    right: { minX: 669, minY: 355, maxX: 835, maxY: 519 },
    top: { minX: 549, minY: 136, maxX: 718, maxY: 308 },
  },
  {
    left: { minX: 418, minY: 352, maxX: 594, maxY: 526 },
    right: { minX: 671, minY: 355, maxX: 836, maxY: 519 },
    top: { minX: 551, minY: 136, maxX: 720, maxY: 308 },
  },
  {
    left: { minX: 420, minY: 353, maxX: 596, maxY: 526 },
    right: { minX: 672, minY: 357, maxX: 838, maxY: 520 },
    top: { minX: 554, minY: 138, maxX: 722, maxY: 309 },
  },
  {
    left: { minX: 422, minY: 353, maxX: 597, maxY: 525 },
    right: { minX: 674, minY: 356, maxX: 839, maxY: 520 },
    top: { minX: 555, minY: 137, maxX: 724, maxY: 309 },
  },
  {
    left: { minX: 422, minY: 353, maxX: 597, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 839, maxY: 520 },
    top: { minX: 555, minY: 138, maxX: 724, maxY: 309 },
  },
  {
    left: { minX: 421, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 673, minY: 357, maxX: 838, maxY: 521 },
    top: { minX: 555, minY: 139, maxX: 722, maxY: 310 },
  },
  {
    left: { minX: 420, minY: 355, maxX: 595, maxY: 528 },
    right: { minX: 672, minY: 358, maxX: 837, maxY: 521 },
    top: { minX: 553, minY: 141, maxX: 722, maxY: 311 },
  },
  {
    left: { minX: 420, minY: 356, maxX: 595, maxY: 528 },
    right: { minX: 671, minY: 359, maxX: 836, maxY: 522 },
    top: { minX: 553, minY: 141, maxX: 721, maxY: 311 },
  },
  {
    left: { minX: 420, minY: 355, maxX: 595, maxY: 528 },
    right: { minX: 672, minY: 359, maxX: 837, maxY: 522 },
    top: { minX: 553, minY: 141, maxX: 721, maxY: 311 },
  },
  {
    left: { minX: 421, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 672, minY: 358, maxX: 837, maxY: 521 },
    top: { minX: 554, minY: 139, maxX: 722, maxY: 311 },
  },
  {
    left: { minX: 422, minY: 354, maxX: 597, maxY: 526 },
    right: { minX: 673, minY: 357, maxX: 839, maxY: 521 },
    top: { minX: 556, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 422, minY: 354, maxX: 597, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 839, maxY: 521 },
    top: { minX: 555, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 423, minY: 354, maxX: 597, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 840, maxY: 520 },
    top: { minX: 556, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 422, minY: 354, maxX: 597, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 839, maxY: 520 },
    top: { minX: 555, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 422, minY: 354, maxX: 597, maxY: 527 },
    right: { minX: 674, minY: 357, maxX: 839, maxY: 520 },
    top: { minX: 555, minY: 139, maxX: 723, maxY: 310 },
  },
  {
    left: { minX: 421, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 672, minY: 357, maxX: 838, maxY: 520 },
    top: { minX: 553, minY: 139, maxX: 722, maxY: 310 },
  },
  {
    left: { minX: 420, minY: 354, maxX: 595, maxY: 526 },
    right: { minX: 672, minY: 356, maxX: 837, maxY: 520 },
    top: { minX: 553, minY: 138, maxX: 721, maxY: 309 },
  },
  {
    left: { minX: 419, minY: 353, maxX: 594, maxY: 526 },
    right: { minX: 671, minY: 356, maxX: 837, maxY: 519 },
    top: { minX: 552, minY: 138, maxX: 720, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 353, maxX: 594, maxY: 526 },
    right: { minX: 671, minY: 355, maxX: 836, maxY: 519 },
    top: { minX: 551, minY: 137, maxX: 720, maxY: 309 },
  },
  {
    left: { minX: 417, minY: 353, maxX: 593, maxY: 526 },
    right: { minX: 670, minY: 355, maxX: 836, maxY: 519 },
    top: { minX: 551, minY: 137, maxX: 719, maxY: 308 },
  },
  {
    left: { minX: 417, minY: 353, maxX: 592, maxY: 526 },
    right: { minX: 669, minY: 355, maxX: 835, maxY: 519 },
    top: { minX: 550, minY: 137, maxX: 718, maxY: 308 },
  },
  {
    left: { minX: 415, minY: 353, maxX: 591, maxY: 526 },
    right: { minX: 668, minY: 355, maxX: 834, maxY: 519 },
    top: { minX: 549, minY: 137, maxX: 717, maxY: 308 },
  },
  {
    left: { minX: 414, minY: 353, maxX: 590, maxY: 526 },
    right: { minX: 667, minY: 355, maxX: 833, maxY: 519 },
    top: { minX: 547, minY: 136, maxX: 716, maxY: 308 },
  },
  {
    left: { minX: 413, minY: 353, maxX: 589, maxY: 526 },
    right: { minX: 667, minY: 355, maxX: 832, maxY: 519 },
    top: { minX: 547, minY: 135, maxX: 716, maxY: 308 },
  },
  {
    left: { minX: 411, minY: 352, maxX: 588, maxY: 525 },
    right: { minX: 666, minY: 355, maxX: 831, maxY: 519 },
    top: { minX: 545, minY: 135, maxX: 714, maxY: 307 },
  },
  {
    left: { minX: 411, minY: 352, maxX: 587, maxY: 526 },
    right: { minX: 665, minY: 355, maxX: 830, maxY: 519 },
    top: { minX: 545, minY: 135, maxX: 714, maxY: 307 },
  },
  {
    left: { minX: 409, minY: 354, maxX: 586, maxY: 527 },
    right: { minX: 664, minY: 356, maxX: 829, maxY: 520 },
    top: { minX: 543, minY: 137, maxX: 712, maxY: 309 },
  },
  {
    left: { minX: 407, minY: 354, maxX: 584, maxY: 527 },
    right: { minX: 662, minY: 356, maxX: 828, maxY: 521 },
    top: { minX: 542, minY: 137, maxX: 711, maxY: 309 },
  },
  {
    left: { minX: 406, minY: 353, maxX: 583, maxY: 527 },
    right: { minX: 661, minY: 356, maxX: 826, maxY: 521 },
    top: { minX: 541, minY: 137, maxX: 710, maxY: 309 },
  },
  {
    left: { minX: 403, minY: 354, maxX: 581, maxY: 528 },
    right: { minX: 658, minY: 357, maxX: 825, maxY: 521 },
    top: { minX: 539, minY: 137, maxX: 708, maxY: 310 },
  },
  {
    left: { minX: 402, minY: 355, maxX: 579, maxY: 529 },
    right: { minX: 657, minY: 358, maxX: 823, maxY: 522 },
    top: { minX: 537, minY: 138, maxX: 706, maxY: 311 },
  },
  {
    left: { minX: 401, minY: 355, maxX: 579, maxY: 529 },
    right: { minX: 657, minY: 358, maxX: 823, maxY: 523 },
    top: { minX: 536, minY: 138, maxX: 705, maxY: 310 },
  },
  {
    left: { minX: 398, minY: 356, maxX: 576, maxY: 530 },
    right: { minX: 655, minY: 358, maxX: 821, maxY: 523 },
    top: { minX: 533, minY: 139, maxX: 702, maxY: 311 },
  },
  {
    left: { minX: 397, minY: 356, maxX: 576, maxY: 531 },
    right: { minX: 654, minY: 359, maxX: 820, maxY: 523 },
    top: { minX: 533, minY: 139, maxX: 702, maxY: 311 },
  },
  {
    left: { minX: 396, minY: 357, maxX: 575, maxY: 532 },
    right: { minX: 653, minY: 359, maxX: 819, maxY: 525 },
    top: { minX: 531, minY: 139, maxX: 700, maxY: 312 },
  },
  {
    left: { minX: 394, minY: 357, maxX: 573, maxY: 532 },
    right: { minX: 652, minY: 359, maxX: 818, maxY: 524 },
    top: { minX: 529, minY: 139, maxX: 699, maxY: 312 },
  },
  {
    left: { minX: 393, minY: 357, maxX: 573, maxY: 532 },
    right: { minX: 651, minY: 359, maxX: 818, maxY: 524 },
    top: { minX: 529, minY: 138, maxX: 699, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 571, maxY: 532 },
    right: { minX: 649, minY: 358, maxX: 816, maxY: 524 },
    top: { minX: 527, minY: 137, maxX: 697, maxY: 311 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 570, maxY: 531 },
    right: { minX: 649, minY: 357, maxX: 816, maxY: 523 },
    top: { minX: 525, minY: 136, maxX: 696, maxY: 310 },
  },
  {
    left: { minX: 389, minY: 356, maxX: 569, maxY: 532 },
    right: { minX: 648, minY: 358, maxX: 815, maxY: 524 },
    top: { minX: 525, minY: 137, maxX: 696, maxY: 311 },
  },
  {
    left: { minX: 387, minY: 357, maxX: 567, maxY: 533 },
    right: { minX: 646, minY: 358, maxX: 814, maxY: 525 },
    top: { minX: 523, minY: 137, maxX: 694, maxY: 311 },
  },
  {
    left: { minX: 386, minY: 357, maxX: 566, maxY: 533 },
    right: { minX: 646, minY: 358, maxX: 813, maxY: 525 },
    top: { minX: 522, minY: 137, maxX: 693, maxY: 311 },
  },
  {
    left: { minX: 384, minY: 358, maxX: 565, maxY: 535 },
    right: { minX: 644, minY: 359, maxX: 812, maxY: 527 },
    top: { minX: 521, minY: 138, maxX: 692, maxY: 312 },
  },
  {
    left: { minX: 383, minY: 359, maxX: 564, maxY: 535 },
    right: { minX: 644, minY: 360, maxX: 812, maxY: 527 },
    top: { minX: 521, minY: 139, maxX: 692, maxY: 313 },
  },
  {
    left: { minX: 381, minY: 359, maxX: 563, maxY: 536 },
    right: { minX: 643, minY: 361, maxX: 811, maxY: 528 },
    top: { minX: 519, minY: 139, maxX: 690, maxY: 313 },
  },
  {
    left: { minX: 381, minY: 360, maxX: 563, maxY: 537 },
    right: { minX: 642, minY: 361, maxX: 810, maxY: 529 },
    top: { minX: 518, minY: 140, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 381, minY: 361, maxX: 562, maxY: 538 },
    right: { minX: 642, minY: 362, maxX: 810, maxY: 529 },
    top: { minX: 519, minY: 141, maxX: 690, maxY: 315 },
  },
  {
    left: { minX: 380, minY: 360, maxX: 562, maxY: 537 },
    right: { minX: 642, minY: 361, maxX: 810, maxY: 529 },
    top: { minX: 518, minY: 139, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 381, minY: 360, maxX: 563, maxY: 537 },
    right: { minX: 643, minY: 361, maxX: 811, maxY: 529 },
    top: { minX: 519, minY: 139, maxX: 690, maxY: 313 },
  },
  {
    left: { minX: 381, minY: 360, maxX: 563, maxY: 537 },
    right: { minX: 643, minY: 362, maxX: 812, maxY: 530 },
    top: { minX: 519, minY: 139, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 382, minY: 361, maxX: 564, maxY: 538 },
    right: { minX: 644, minY: 362, maxX: 812, maxY: 530 },
    top: { minX: 519, minY: 140, maxX: 691, maxY: 315 },
  },
  {
    left: { minX: 385, minY: 362, maxX: 566, maxY: 539 },
    right: { minX: 646, minY: 364, maxX: 815, maxY: 532 },
    top: { minX: 523, minY: 142, maxX: 694, maxY: 317 },
  },
  {
    left: { minX: 386, minY: 363, maxX: 567, maxY: 539 },
    right: { minX: 647, minY: 365, maxX: 816, maxY: 533 },
    top: { minX: 524, minY: 142, maxX: 695, maxY: 317 },
  },
  {
    left: { minX: 386, minY: 363, maxX: 567, maxY: 540 },
    right: { minX: 647, minY: 365, maxX: 817, maxY: 533 },
    top: { minX: 524, minY: 143, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 385, minY: 362, maxX: 567, maxY: 540 },
    right: { minX: 647, minY: 365, maxX: 816, maxY: 533 },
    top: { minX: 523, minY: 142, maxX: 695, maxY: 317 },
  },
  {
    left: { minX: 385, minY: 362, maxX: 567, maxY: 540 },
    right: { minX: 647, minY: 364, maxX: 816, maxY: 533 },
    top: { minX: 523, minY: 142, maxX: 695, maxY: 316 },
  },
  {
    left: { minX: 386, minY: 362, maxX: 568, maxY: 540 },
    right: { minX: 648, minY: 364, maxX: 817, maxY: 533 },
    top: { minX: 524, minY: 141, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 386, minY: 362, maxX: 568, maxY: 540 },
    right: { minX: 648, minY: 365, maxX: 818, maxY: 534 },
    top: { minX: 525, minY: 141, maxX: 697, maxY: 317 },
  },
  {
    left: { minX: 385, minY: 361, maxX: 567, maxY: 539 },
    right: { minX: 647, minY: 363, maxX: 818, maxY: 533 },
    top: { minX: 523, minY: 139, maxX: 696, maxY: 315 },
  },
  {
    left: { minX: 385, minY: 360, maxX: 567, maxY: 538 },
    right: { minX: 648, minY: 363, maxX: 818, maxY: 533 },
    top: { minX: 524, minY: 138, maxX: 697, maxY: 314 },
  },
  {
    left: { minX: 385, minY: 359, maxX: 568, maxY: 537 },
    right: { minX: 648, minY: 361, maxX: 819, maxY: 531 },
    top: { minX: 524, minY: 136, maxX: 697, maxY: 313 },
  },
  {
    left: { minX: 385, minY: 358, maxX: 568, maxY: 537 },
    right: { minX: 649, minY: 361, maxX: 820, maxY: 531 },
    top: { minX: 524, minY: 135, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 387, minY: 357, maxX: 569, maxY: 536 },
    right: { minX: 650, minY: 360, maxX: 822, maxY: 531 },
    top: { minX: 525, minY: 134, maxX: 700, maxY: 311 },
  },
  {
    left: { minX: 389, minY: 357, maxX: 572, maxY: 535 },
    right: { minX: 652, minY: 360, maxX: 824, maxY: 531 },
    top: { minX: 529, minY: 134, maxX: 702, maxY: 311 },
  },
  {
    left: { minX: 390, minY: 357, maxX: 572, maxY: 535 },
    right: { minX: 653, minY: 360, maxX: 825, maxY: 531 },
    top: { minX: 529, minY: 134, maxX: 703, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 573, maxY: 535 },
    right: { minX: 654, minY: 361, maxX: 825, maxY: 531 },
    top: { minX: 530, minY: 135, maxX: 704, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 573, maxY: 536 },
    right: { minX: 654, minY: 361, maxX: 826, maxY: 531 },
    top: { minX: 530, minY: 135, maxX: 704, maxY: 312 },
  },
  {
    left: { minX: 392, minY: 358, maxX: 574, maxY: 536 },
    right: { minX: 655, minY: 362, maxX: 826, maxY: 532 },
    top: { minX: 531, minY: 136, maxX: 704, maxY: 313 },
  },
  {
    left: { minX: 393, minY: 359, maxX: 575, maxY: 536 },
    right: { minX: 656, minY: 362, maxX: 827, maxY: 533 },
    top: { minX: 533, minY: 137, maxX: 705, maxY: 313 },
  },
  {
    left: { minX: 395, minY: 359, maxX: 576, maxY: 537 },
    right: { minX: 657, minY: 363, maxX: 828, maxY: 533 },
    top: { minX: 533, minY: 137, maxX: 706, maxY: 314 },
  },
  {
    left: { minX: 396, minY: 360, maxX: 577, maxY: 537 },
    right: { minX: 657, minY: 363, maxX: 828, maxY: 533 },
    top: { minX: 534, minY: 139, maxX: 707, maxY: 315 },
  },
  {
    left: { minX: 399, minY: 361, maxX: 580, maxY: 538 },
    right: { minX: 660, minY: 364, maxX: 831, maxY: 534 },
    top: { minX: 537, minY: 140, maxX: 710, maxY: 316 },
  },
  {
    left: { minX: 400, minY: 361, maxX: 580, maxY: 538 },
    right: { minX: 660, minY: 364, maxX: 832, maxY: 534 },
    top: { minX: 538, minY: 140, maxX: 710, maxY: 316 },
  },
  {
    left: { minX: 401, minY: 361, maxX: 582, maxY: 537 },
    right: { minX: 662, minY: 364, maxX: 833, maxY: 534 },
    top: { minX: 539, minY: 139, maxX: 711, maxY: 315 },
  },
  {
    left: { minX: 402, minY: 360, maxX: 583, maxY: 536 },
    right: { minX: 662, minY: 363, maxX: 834, maxY: 533 },
    top: { minX: 540, minY: 139, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 359, maxX: 582, maxY: 536 },
    right: { minX: 662, minY: 363, maxX: 834, maxY: 533 },
    top: { minX: 539, minY: 139, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 357, maxX: 582, maxY: 533 },
    right: { minX: 662, minY: 360, maxX: 834, maxY: 530 },
    top: { minX: 539, minY: 136, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 402, minY: 357, maxX: 582, maxY: 533 },
    right: { minX: 662, minY: 360, maxX: 833, maxY: 530 },
    top: { minX: 539, minY: 136, maxX: 711, maxY: 312 },
  },
  {
    left: { minX: 402, minY: 359, maxX: 581, maxY: 534 },
    right: { minX: 661, minY: 361, maxX: 831, maxY: 531 },
    top: { minX: 538, minY: 139, maxX: 710, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 359, maxX: 581, maxY: 534 },
    right: { minX: 660, minY: 362, maxX: 831, maxY: 531 },
    top: { minX: 538, minY: 139, maxX: 710, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 360, maxX: 581, maxY: 535 },
    right: { minX: 660, minY: 363, maxX: 830, maxY: 531 },
    top: { minX: 538, minY: 141, maxX: 709, maxY: 315 },
  },
  {
    left: { minX: 402, minY: 361, maxX: 580, maxY: 535 },
    right: { minX: 660, minY: 363, maxX: 829, maxY: 532 },
    top: { minX: 538, minY: 143, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 402, minY: 361, maxX: 580, maxY: 536 },
    right: { minX: 659, minY: 364, maxX: 828, maxY: 532 },
    top: { minX: 537, minY: 143, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 403, minY: 360, maxX: 581, maxY: 534 },
    right: { minX: 660, minY: 363, maxX: 829, maxY: 530 },
    top: { minX: 539, minY: 142, maxX: 708, maxY: 315 },
  },
  {
    left: { minX: 404, minY: 359, maxX: 581, maxY: 533 },
    right: { minX: 660, minY: 362, maxX: 829, maxY: 529 },
    top: { minX: 539, minY: 141, maxX: 708, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 360, maxX: 583, maxY: 533 },
    right: { minX: 662, minY: 363, maxX: 829, maxY: 529 },
    top: { minX: 541, minY: 143, maxX: 710, maxY: 315 },
  },
  {
    left: { minX: 408, minY: 360, maxX: 584, maxY: 533 },
    right: { minX: 662, minY: 362, maxX: 830, maxY: 529 },
    top: { minX: 541, minY: 143, maxX: 710, maxY: 315 },
  },
  {
    left: { minX: 409, minY: 359, maxX: 585, maxY: 532 },
    right: { minX: 663, minY: 362, maxX: 830, maxY: 528 },
    top: { minX: 543, minY: 143, maxX: 712, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 359, maxX: 586, maxY: 531 },
    right: { minX: 664, minY: 361, maxX: 831, maxY: 527 },
    top: { minX: 544, minY: 143, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 411, minY: 359, maxX: 586, maxY: 530 },
    right: { minX: 664, minY: 362, maxX: 830, maxY: 527 },
    top: { minX: 545, minY: 143, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 411, minY: 359, maxX: 586, maxY: 530 },
    right: { minX: 663, minY: 361, maxX: 830, maxY: 527 },
    top: { minX: 544, minY: 144, maxX: 712, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 360, maxX: 585, maxY: 531 },
    right: { minX: 662, minY: 363, maxX: 828, maxY: 527 },
    top: { minX: 543, minY: 145, maxX: 710, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 361, maxX: 584, maxY: 532 },
    right: { minX: 662, minY: 364, maxX: 827, maxY: 528 },
    top: { minX: 543, minY: 147, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 361, maxX: 585, maxY: 532 },
    right: { minX: 662, minY: 364, maxX: 828, maxY: 528 },
    top: { minX: 544, minY: 148, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 362, maxX: 584, maxY: 533 },
    right: { minX: 662, minY: 365, maxX: 826, maxY: 529 },
    top: { minX: 543, minY: 149, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 412, minY: 363, maxX: 585, maxY: 533 },
    right: { minX: 662, minY: 365, maxX: 826, maxY: 529 },
    top: { minX: 544, minY: 151, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 585, maxY: 533 },
    right: { minX: 662, minY: 365, maxX: 826, maxY: 529 },
    top: { minX: 544, minY: 151, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 413, minY: 362, maxX: 586, maxY: 532 },
    right: { minX: 662, minY: 365, maxX: 826, maxY: 528 },
    top: { minX: 545, minY: 151, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 413, minY: 361, maxX: 586, maxY: 531 },
    right: { minX: 662, minY: 364, maxX: 826, maxY: 527 },
    top: { minX: 545, minY: 150, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 414, minY: 361, maxX: 586, maxY: 530 },
    right: { minX: 663, minY: 363, maxX: 826, maxY: 525 },
    top: { minX: 545, minY: 149, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 415, minY: 360, maxX: 587, maxY: 529 },
    right: { minX: 664, minY: 363, maxX: 827, maxY: 525 },
    top: { minX: 546, minY: 149, maxX: 711, maxY: 317 },
  },
  {
    left: { minX: 416, minY: 360, maxX: 588, maxY: 529 },
    right: { minX: 664, minY: 363, maxX: 828, maxY: 525 },
    top: { minX: 547, minY: 149, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 417, minY: 361, maxX: 589, maxY: 530 },
    right: { minX: 665, minY: 364, maxX: 828, maxY: 525 },
    top: { minX: 548, minY: 151, maxX: 712, maxY: 318 },
  },
  {
    left: { minX: 418, minY: 361, maxX: 589, maxY: 529 },
    right: { minX: 665, minY: 364, maxX: 828, maxY: 525 },
    top: { minX: 549, minY: 151, maxX: 712, maxY: 318 },
  },
  {
    left: { minX: 418, minY: 362, maxX: 589, maxY: 530 },
    right: { minX: 665, minY: 365, maxX: 826, maxY: 526 },
    top: { minX: 548, minY: 153, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 418, minY: 362, maxX: 589, maxY: 529 },
    right: { minX: 664, minY: 365, maxX: 826, maxY: 525 },
    top: { minX: 549, minY: 153, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 419, minY: 362, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 365, maxX: 826, maxY: 525 },
    top: { minX: 549, minY: 153, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 419, minY: 363, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 366, maxX: 825, maxY: 526 },
    top: { minX: 549, minY: 155, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 590, maxY: 529 },
    right: { minX: 665, minY: 365, maxX: 826, maxY: 525 },
    top: { minX: 550, minY: 155, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 420, minY: 363, maxX: 590, maxY: 529 },
    right: { minX: 665, minY: 366, maxX: 825, maxY: 525 },
    top: { minX: 549, minY: 155, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 420, minY: 364, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 367, maxX: 824, maxY: 526 },
    top: { minX: 549, minY: 157, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 420, minY: 364, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 367, maxX: 824, maxY: 525 },
    top: { minX: 549, minY: 157, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 418, minY: 363, maxX: 587, maxY: 530 },
    right: { minX: 662, minY: 365, maxX: 822, maxY: 524 },
    top: { minX: 547, minY: 157, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 417, minY: 364, maxX: 586, maxY: 530 },
    right: { minX: 661, minY: 366, maxX: 820, maxY: 525 },
    top: { minX: 545, minY: 157, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 416, minY: 364, maxX: 585, maxY: 530 },
    right: { minX: 660, minY: 366, maxX: 819, maxY: 525 },
    top: { minX: 544, minY: 158, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 416, minY: 365, maxX: 585, maxY: 530 },
    right: { minX: 660, minY: 366, maxX: 818, maxY: 525 },
    top: { minX: 544, minY: 158, maxX: 705, maxY: 322 },
  },
  {
    left: { minX: 416, minY: 365, maxX: 585, maxY: 531 },
    right: { minX: 659, minY: 367, maxX: 818, maxY: 525 },
    top: { minX: 544, minY: 159, maxX: 705, maxY: 322 },
  },
  {
    left: { minX: 416, minY: 366, maxX: 584, maxY: 532 },
    right: { minX: 659, minY: 368, maxX: 818, maxY: 526 },
    top: { minX: 543, minY: 161, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 534 },
    right: { minX: 658, minY: 370, maxX: 816, maxY: 527 },
    top: { minX: 543, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 817, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 703, maxY: 325 },
  },
  {
    left: { minX: 417, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 369, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 417, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 815, maxY: 527 },
    top: { minX: 544, minY: 164, maxX: 703, maxY: 326 },
  },
  {
    left: { minX: 418, minY: 367, maxX: 585, maxY: 532 },
    right: { minX: 658, minY: 369, maxX: 816, maxY: 525 },
    top: { minX: 545, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 419, minY: 367, maxX: 585, maxY: 531 },
    right: { minX: 659, minY: 369, maxX: 816, maxY: 525 },
    top: { minX: 545, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 420, minY: 367, maxX: 586, maxY: 531 },
    right: { minX: 660, minY: 369, maxX: 817, maxY: 525 },
    top: { minX: 546, minY: 163, maxX: 705, maxY: 324 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 587, maxY: 530 },
    right: { minX: 661, minY: 368, maxX: 818, maxY: 523 },
    top: { minX: 547, minY: 163, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 588, maxY: 529 },
    right: { minX: 661, minY: 368, maxX: 818, maxY: 523 },
    top: { minX: 548, minY: 163, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 424, minY: 366, maxX: 589, maxY: 529 },
    right: { minX: 662, minY: 369, maxX: 818, maxY: 523 },
    top: { minX: 549, minY: 164, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 590, maxY: 530 },
    right: { minX: 663, minY: 370, maxX: 818, maxY: 525 },
    top: { minX: 550, minY: 166, maxX: 708, maxY: 326 },
  },
  {
    left: { minX: 426, minY: 368, maxX: 591, maxY: 531 },
    right: { minX: 663, minY: 371, maxX: 819, maxY: 525 },
    top: { minX: 551, minY: 167, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 427, minY: 368, maxX: 591, maxY: 530 },
    right: { minX: 664, minY: 370, maxX: 819, maxY: 524 },
    top: { minX: 551, minY: 167, maxX: 708, maxY: 326 },
  },
  {
    left: { minX: 427, minY: 368, maxX: 592, maxY: 530 },
    right: { minX: 664, minY: 370, maxX: 819, maxY: 524 },
    top: { minX: 552, minY: 167, maxX: 709, maxY: 326 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 592, maxY: 529 },
    right: { minX: 664, minY: 369, maxX: 819, maxY: 523 },
    top: { minX: 553, minY: 167, maxX: 709, maxY: 326 },
  },
  {
    left: { minX: 429, minY: 366, maxX: 593, maxY: 527 },
    right: { minX: 665, minY: 368, maxX: 820, maxY: 521 },
    top: { minX: 553, minY: 165, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 430, minY: 365, maxX: 594, maxY: 527 },
    right: { minX: 666, minY: 367, maxX: 820, maxY: 521 },
    top: { minX: 553, minY: 165, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 431, minY: 365, maxX: 594, maxY: 526 },
    right: { minX: 666, minY: 367, maxX: 821, maxY: 520 },
    top: { minX: 554, minY: 165, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 433, minY: 364, maxX: 596, maxY: 525 },
    right: { minX: 668, minY: 366, maxX: 823, maxY: 519 },
    top: { minX: 556, minY: 164, maxX: 713, maxY: 322 },
  },
  {
    left: { minX: 434, minY: 364, maxX: 597, maxY: 525 },
    right: { minX: 669, minY: 365, maxX: 823, maxY: 519 },
    top: { minX: 557, minY: 163, maxX: 714, maxY: 322 },
  },
  {
    left: { minX: 435, minY: 364, maxX: 598, maxY: 525 },
    right: { minX: 669, minY: 366, maxX: 823, maxY: 519 },
    top: { minX: 559, minY: 165, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 438, minY: 365, maxX: 599, maxY: 525 },
    right: { minX: 671, minY: 368, maxX: 824, maxY: 520 },
    top: { minX: 561, minY: 166, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 439, minY: 365, maxX: 601, maxY: 525 },
    right: { minX: 672, minY: 367, maxX: 826, maxY: 519 },
    top: { minX: 562, minY: 166, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 440, minY: 364, maxX: 601, maxY: 524 },
    right: { minX: 672, minY: 366, maxX: 826, maxY: 518 },
    top: { minX: 562, minY: 165, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 441, minY: 364, maxX: 602, maxY: 523 },
    right: { minX: 673, minY: 366, maxX: 826, maxY: 518 },
    top: { minX: 563, minY: 165, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 442, minY: 364, maxX: 602, maxY: 523 },
    right: { minX: 673, minY: 367, maxX: 826, maxY: 518 },
    top: { minX: 563, minY: 167, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 442, minY: 364, maxX: 602, maxY: 523 },
    right: { minX: 673, minY: 367, maxX: 826, maxY: 518 },
    top: { minX: 563, minY: 167, maxX: 718, maxY: 324 },
  },
  {
    left: { minX: 443, minY: 365, maxX: 603, maxY: 524 },
    right: { minX: 674, minY: 367, maxX: 826, maxY: 519 },
    top: { minX: 565, minY: 168, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 443, minY: 364, maxX: 604, maxY: 523 },
    right: { minX: 674, minY: 367, maxX: 826, maxY: 518 },
    top: { minX: 565, minY: 168, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 444, minY: 364, maxX: 604, maxY: 523 },
    right: { minX: 674, minY: 367, maxX: 827, maxY: 518 },
    top: { minX: 566, minY: 168, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 445, minY: 365, maxX: 605, maxY: 523 },
    right: { minX: 675, minY: 367, maxX: 827, maxY: 518 },
    top: { minX: 567, minY: 169, maxX: 721, maxY: 324 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 606, maxY: 523 },
    right: { minX: 676, minY: 368, maxX: 828, maxY: 518 },
    top: { minX: 568, minY: 170, maxX: 721, maxY: 325 },
  },
  {
    left: { minX: 447, minY: 366, maxX: 606, maxY: 523 },
    right: { minX: 676, minY: 369, maxX: 827, maxY: 518 },
    top: { minX: 568, minY: 171, maxX: 721, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 608, maxY: 522 },
    right: { minX: 677, minY: 367, maxX: 828, maxY: 517 },
    top: { minX: 569, minY: 170, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 608, maxY: 522 },
    right: { minX: 678, minY: 367, maxX: 829, maxY: 517 },
    top: { minX: 570, minY: 170, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 450, minY: 364, maxX: 608, maxY: 521 },
    right: { minX: 678, minY: 367, maxX: 829, maxY: 517 },
    top: { minX: 571, minY: 169, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 610, maxY: 521 },
    right: { minX: 679, minY: 367, maxX: 830, maxY: 517 },
    top: { minX: 572, minY: 170, maxX: 724, maxY: 324 },
  },
  {
    left: { minX: 452, minY: 363, maxX: 610, maxY: 520 },
    right: { minX: 679, minY: 366, maxX: 830, maxY: 515 },
    top: { minX: 573, minY: 169, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 611, maxY: 519 },
    right: { minX: 680, minY: 366, maxX: 830, maxY: 515 },
    top: { minX: 573, minY: 169, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 611, maxY: 519 },
    right: { minX: 680, minY: 367, maxX: 830, maxY: 515 },
    top: { minX: 574, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 363, maxX: 611, maxY: 519 },
    right: { minX: 680, minY: 366, maxX: 830, maxY: 515 },
    top: { minX: 574, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 611, maxY: 519 },
    right: { minX: 680, minY: 366, maxX: 830, maxY: 514 },
    top: { minX: 575, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 611, maxY: 518 },
    right: { minX: 680, minY: 365, maxX: 830, maxY: 514 },
    top: { minX: 575, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 611, maxY: 518 },
    right: { minX: 680, minY: 366, maxX: 829, maxY: 514 },
    top: { minX: 574, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 611, maxY: 518 },
    right: { minX: 679, minY: 366, maxX: 829, maxY: 514 },
    top: { minX: 574, minY: 170, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 361, maxX: 610, maxY: 517 },
    right: { minX: 679, minY: 365, maxX: 828, maxY: 512 },
    top: { minX: 573, minY: 169, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 454, minY: 359, maxX: 611, maxY: 515 },
    right: { minX: 679, minY: 363, maxX: 828, maxY: 510 },
    top: { minX: 573, minY: 166, maxX: 725, maxY: 320 },
  },
  {
    left: { minX: 454, minY: 360, maxX: 611, maxY: 516 },
    right: { minX: 679, minY: 364, maxX: 828, maxY: 511 },
    top: { minX: 574, minY: 168, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 455, minY: 360, maxX: 611, maxY: 516 },
    right: { minX: 679, minY: 363, maxX: 828, maxY: 511 },
    top: { minX: 574, minY: 169, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 455, minY: 359, maxX: 611, maxY: 514 },
    right: { minX: 679, minY: 363, maxX: 828, maxY: 509 },
    top: { minX: 574, minY: 167, maxX: 725, maxY: 320 },
  },
  {
    left: { minX: 455, minY: 360, maxX: 611, maxY: 515 },
    right: { minX: 679, minY: 364, maxX: 827, maxY: 510 },
    top: { minX: 574, minY: 169, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 456, minY: 361, maxX: 611, maxY: 516 },
    right: { minX: 679, minY: 365, maxX: 827, maxY: 511 },
    top: { minX: 575, minY: 170, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 365, maxX: 827, maxY: 511 },
    top: { minX: 575, minY: 171, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 365, maxX: 827, maxY: 511 },
    top: { minX: 575, minY: 172, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 612, maxY: 516 },
    right: { minX: 680, minY: 365, maxX: 827, maxY: 511 },
    top: { minX: 575, minY: 172, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 612, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 827, maxY: 512 },
    top: { minX: 575, minY: 173, maxX: 725, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 827, maxY: 513 },
    top: { minX: 576, minY: 175, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 827, maxY: 513 },
    top: { minX: 577, minY: 175, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 614, maxY: 517 },
    right: { minX: 681, minY: 366, maxX: 828, maxY: 511 },
    top: { minX: 577, minY: 174, maxX: 726, maxY: 324 },
  },
  {
    left: { minX: 461, minY: 361, maxX: 615, maxY: 514 },
    right: { minX: 682, minY: 364, maxX: 829, maxY: 509 },
    top: { minX: 578, minY: 171, maxX: 727, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 616, maxY: 514 },
    right: { minX: 683, minY: 365, maxX: 830, maxY: 509 },
    top: { minX: 579, minY: 172, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 361, maxX: 617, maxY: 514 },
    right: { minX: 684, minY: 365, maxX: 830, maxY: 509 },
    top: { minX: 580, minY: 172, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 360, maxX: 617, maxY: 513 },
    right: { minX: 683, minY: 364, maxX: 830, maxY: 509 },
    top: { minX: 580, minY: 171, maxX: 729, maxY: 322 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 616, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 828, maxY: 509 },
    top: { minX: 579, minY: 173, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 616, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 828, maxY: 509 },
    top: { minX: 579, minY: 173, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 615, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 828, maxY: 509 },
    top: { minX: 579, minY: 173, maxX: 727, maxY: 323 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 514 },
    right: { minX: 681, minY: 365, maxX: 827, maxY: 509 },
    top: { minX: 578, minY: 173, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 515 },
    right: { minX: 681, minY: 366, maxX: 827, maxY: 509 },
    top: { minX: 577, minY: 174, maxX: 726, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 613, maxY: 516 },
    right: { minX: 680, minY: 367, maxX: 825, maxY: 511 },
    top: { minX: 576, minY: 175, maxX: 724, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 365, maxX: 612, maxY: 517 },
    right: { minX: 679, minY: 368, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 177, maxX: 723, maxY: 326 },
  },
  {
    left: { minX: 458, minY: 365, maxX: 611, maxY: 517 },
    right: { minX: 678, minY: 368, maxX: 823, maxY: 511 },
    top: { minX: 575, minY: 177, maxX: 722, maxY: 327 },
  },
  {
    left: { minX: 458, minY: 365, maxX: 612, maxY: 517 },
    right: { minX: 678, minY: 368, maxX: 823, maxY: 511 },
    top: { minX: 575, minY: 177, maxX: 722, maxY: 326 },
  },
  {
    left: { minX: 458, minY: 365, maxX: 611, maxY: 517 },
    right: { minX: 678, minY: 368, maxX: 823, maxY: 511 },
    top: { minX: 575, minY: 177, maxX: 722, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 825, maxY: 511 },
    top: { minX: 577, minY: 176, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 825, maxY: 511 },
    top: { minX: 576, minY: 176, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 461, minY: 364, maxX: 614, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 826, maxY: 511 },
    top: { minX: 577, minY: 176, maxX: 724, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 364, maxX: 614, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 826, maxY: 511 },
    top: { minX: 577, minY: 177, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 461, minY: 364, maxX: 614, maxY: 516 },
    right: { minX: 681, minY: 367, maxX: 827, maxY: 511 },
    top: { minX: 577, minY: 176, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 363, maxX: 615, maxY: 515 },
    right: { minX: 681, minY: 366, maxX: 827, maxY: 510 },
    top: { minX: 577, minY: 175, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 615, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 827, maxY: 509 },
    top: { minX: 578, minY: 173, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 615, maxY: 514 },
    right: { minX: 681, minY: 365, maxX: 827, maxY: 509 },
    top: { minX: 577, minY: 173, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 514 },
    right: { minX: 681, minY: 365, maxX: 827, maxY: 509 },
    top: { minX: 577, minY: 174, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 460, minY: 363, maxX: 613, maxY: 515 },
    right: { minX: 680, minY: 365, maxX: 826, maxY: 509 },
    top: { minX: 577, minY: 175, maxX: 724, maxY: 324 },
  },
  {
    left: { minX: 460, minY: 363, maxX: 613, maxY: 515 },
    right: { minX: 680, minY: 366, maxX: 825, maxY: 510 },
    top: { minX: 576, minY: 175, maxX: 724, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 612, maxY: 515 },
    right: { minX: 679, minY: 366, maxX: 824, maxY: 510 },
    top: { minX: 575, minY: 175, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 367, maxX: 825, maxY: 510 },
    top: { minX: 575, minY: 176, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 612, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 176, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 176, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 176, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 574, minY: 175, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 175, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 366, maxX: 824, maxY: 510 },
    top: { minX: 574, minY: 175, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 366, maxX: 825, maxY: 511 },
    top: { minX: 575, minY: 175, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 612, maxY: 515 },
    right: { minX: 679, minY: 366, maxX: 826, maxY: 511 },
    top: { minX: 575, minY: 175, maxX: 724, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 825, maxY: 511 },
    top: { minX: 575, minY: 175, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 825, maxY: 512 },
    top: { minX: 575, minY: 174, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 456, minY: 363, maxX: 610, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 825, maxY: 512 },
    top: { minX: 574, minY: 174, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 609, maxY: 516 },
    right: { minX: 677, minY: 367, maxX: 824, maxY: 512 },
    top: { minX: 573, minY: 174, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 364, maxX: 607, maxY: 517 },
    right: { minX: 675, minY: 368, maxX: 822, maxY: 513 },
    top: { minX: 571, minY: 175, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 365, maxX: 607, maxY: 518 },
    right: { minX: 675, minY: 368, maxX: 823, maxY: 514 },
    top: { minX: 571, minY: 175, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 606, maxY: 518 },
    right: { minX: 674, minY: 368, maxX: 822, maxY: 514 },
    top: { minX: 569, minY: 175, maxX: 718, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 606, maxY: 517 },
    right: { minX: 674, minY: 367, maxX: 822, maxY: 513 },
    top: { minX: 569, minY: 173, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 606, maxY: 517 },
    right: { minX: 675, minY: 367, maxX: 823, maxY: 513 },
    top: { minX: 570, minY: 173, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 606, maxY: 516 },
    right: { minX: 674, minY: 366, maxX: 823, maxY: 513 },
    top: { minX: 570, minY: 172, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 605, maxY: 517 },
    right: { minX: 674, minY: 366, maxX: 822, maxY: 513 },
    top: { minX: 569, minY: 173, maxX: 718, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 606, maxY: 517 },
    right: { minX: 674, minY: 367, maxX: 823, maxY: 513 },
    top: { minX: 569, minY: 173, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 450, minY: 364, maxX: 605, maxY: 518 },
    right: { minX: 674, minY: 368, maxX: 822, maxY: 514 },
    top: { minX: 569, minY: 173, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 450, minY: 364, maxX: 605, maxY: 518 },
    right: { minX: 674, minY: 367, maxX: 822, maxY: 514 },
    top: { minX: 569, minY: 173, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 605, maxY: 518 },
    right: { minX: 673, minY: 368, maxX: 822, maxY: 515 },
    top: { minX: 568, minY: 174, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 448, minY: 365, maxX: 603, maxY: 519 },
    right: { minX: 672, minY: 368, maxX: 821, maxY: 515 },
    top: { minX: 566, minY: 174, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 602, maxY: 519 },
    right: { minX: 671, minY: 368, maxX: 820, maxY: 515 },
    top: { minX: 565, minY: 173, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 445, minY: 365, maxX: 601, maxY: 519 },
    right: { minX: 670, minY: 368, maxX: 818, maxY: 515 },
    top: { minX: 564, minY: 173, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 519 },
    right: { minX: 670, minY: 368, maxX: 818, maxY: 515 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 519 },
    right: { minX: 670, minY: 368, maxX: 818, maxY: 516 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 520 },
    right: { minX: 669, minY: 369, maxX: 818, maxY: 517 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 520 },
    right: { minX: 670, minY: 369, maxX: 819, maxY: 517 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 520 },
    right: { minX: 670, minY: 369, maxX: 819, maxY: 517 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 519 },
    right: { minX: 670, minY: 368, maxX: 819, maxY: 516 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 445, minY: 364, maxX: 601, maxY: 519 },
    right: { minX: 671, minY: 367, maxX: 820, maxY: 516 },
    top: { minX: 564, minY: 172, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 445, minY: 364, maxX: 602, maxY: 519 },
    right: { minX: 671, minY: 367, maxX: 821, maxY: 515 },
    top: { minX: 565, minY: 171, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 446, minY: 364, maxX: 602, maxY: 519 },
    right: { minX: 672, minY: 367, maxX: 822, maxY: 516 },
    top: { minX: 565, minY: 171, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 447, minY: 364, maxX: 603, maxY: 519 },
    right: { minX: 673, minY: 367, maxX: 823, maxY: 516 },
    top: { minX: 566, minY: 172, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 448, minY: 365, maxX: 604, maxY: 519 },
    right: { minX: 674, minY: 368, maxX: 824, maxY: 517 },
    top: { minX: 567, minY: 173, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 605, maxY: 520 },
    right: { minX: 674, minY: 368, maxX: 824, maxY: 517 },
    top: { minX: 568, minY: 173, maxX: 718, maxY: 326 },
  },
  {
    left: { minX: 450, minY: 366, maxX: 606, maxY: 521 },
    right: { minX: 675, minY: 369, maxX: 825, maxY: 518 },
    top: { minX: 569, minY: 175, maxX: 720, maxY: 327 },
  },
  {
    left: { minX: 450, minY: 366, maxX: 606, maxY: 521 },
    right: { minX: 675, minY: 369, maxX: 826, maxY: 518 },
    top: { minX: 569, minY: 174, maxX: 719, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 606, maxY: 520 },
    right: { minX: 676, minY: 369, maxX: 826, maxY: 518 },
    top: { minX: 569, minY: 174, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 606, maxY: 520 },
    right: { minX: 676, minY: 369, maxX: 827, maxY: 518 },
    top: { minX: 569, minY: 173, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 365, maxX: 607, maxY: 520 },
    right: { minX: 676, minY: 369, maxX: 827, maxY: 517 },
    top: { minX: 570, minY: 173, maxX: 721, maxY: 326 },
  },
  {
    left: { minX: 452, minY: 366, maxX: 607, maxY: 520 },
    right: { minX: 677, minY: 368, maxX: 827, maxY: 517 },
    top: { minX: 570, minY: 173, maxX: 721, maxY: 326 },
  },
  {
    left: { minX: 453, minY: 366, maxX: 608, maxY: 520 },
    right: { minX: 678, minY: 368, maxX: 829, maxY: 517 },
    top: { minX: 571, minY: 173, maxX: 722, maxY: 326 },
  },
  {
    left: { minX: 453, minY: 365, maxX: 609, maxY: 520 },
    right: { minX: 679, minY: 368, maxX: 830, maxY: 517 },
    top: { minX: 571, minY: 173, maxX: 723, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 364, maxX: 612, maxY: 519 },
    right: { minX: 681, minY: 368, maxX: 832, maxY: 517 },
    top: { minX: 575, minY: 171, maxX: 726, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 613, maxY: 519 },
    right: { minX: 683, minY: 368, maxX: 834, maxY: 517 },
    top: { minX: 577, minY: 172, maxX: 728, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 365, maxX: 616, maxY: 519 },
    right: { minX: 686, minY: 369, maxX: 838, maxY: 518 },
    top: { minX: 580, minY: 173, maxX: 731, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 365, maxX: 617, maxY: 519 },
    right: { minX: 687, minY: 368, maxX: 838, maxY: 518 },
    top: { minX: 581, minY: 172, maxX: 732, maxY: 325 },
  },
  {
    left: { minX: 463, minY: 365, maxX: 618, maxY: 519 },
    right: { minX: 688, minY: 369, maxX: 840, maxY: 518 },
    top: { minX: 582, minY: 173, maxX: 733, maxY: 325 },
  },
  {
    left: { minX: 465, minY: 364, maxX: 620, maxY: 518 },
    right: { minX: 690, minY: 368, maxX: 842, maxY: 518 },
    top: { minX: 584, minY: 172, maxX: 735, maxY: 325 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 620, maxY: 518 },
    right: { minX: 690, minY: 368, maxX: 842, maxY: 517 },
    top: { minX: 584, minY: 171, maxX: 735, maxY: 325 },
  },
  {
    left: { minX: 467, minY: 364, maxX: 622, maxY: 518 },
    right: { minX: 692, minY: 368, maxX: 844, maxY: 517 },
    top: { minX: 585, minY: 171, maxX: 737, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 364, maxX: 623, maxY: 518 },
    right: { minX: 693, minY: 368, maxX: 845, maxY: 517 },
    top: { minX: 587, minY: 172, maxX: 738, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 365, maxX: 626, maxY: 518 },
    right: { minX: 696, minY: 368, maxX: 848, maxY: 517 },
    top: { minX: 589, minY: 172, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 365, maxX: 626, maxY: 518 },
    right: { minX: 696, minY: 368, maxX: 848, maxY: 518 },
    top: { minX: 589, minY: 173, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 473, minY: 365, maxX: 627, maxY: 518 },
    right: { minX: 697, minY: 368, maxX: 850, maxY: 517 },
    top: { minX: 591, minY: 172, maxX: 742, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 365, maxX: 626, maxY: 519 },
    right: { minX: 696, minY: 368, maxX: 848, maxY: 518 },
    top: { minX: 589, minY: 173, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 470, minY: 365, maxX: 624, maxY: 519 },
    right: { minX: 694, minY: 368, maxX: 846, maxY: 517 },
    top: { minX: 587, minY: 173, maxX: 738, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 365, maxX: 623, maxY: 519 },
    right: { minX: 692, minY: 368, maxX: 844, maxY: 517 },
    top: { minX: 585, minY: 173, maxX: 736, maxY: 325 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 621, maxY: 518 },
    right: { minX: 690, minY: 366, maxX: 842, maxY: 515 },
    top: { minX: 583, minY: 171, maxX: 734, maxY: 324 },
  },
  {
    left: { minX: 464, minY: 363, maxX: 619, maxY: 517 },
    right: { minX: 688, minY: 365, maxX: 840, maxY: 514 },
    top: { minX: 581, minY: 170, maxX: 732, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 365, maxX: 617, maxY: 518 },
    right: { minX: 687, minY: 367, maxX: 838, maxY: 515 },
    top: { minX: 579, minY: 172, maxX: 730, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 365, maxX: 616, maxY: 519 },
    right: { minX: 685, minY: 367, maxX: 836, maxY: 516 },
    top: { minX: 578, minY: 173, maxX: 728, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 365, maxX: 616, maxY: 518 },
    right: { minX: 685, minY: 366, maxX: 836, maxY: 515 },
    top: { minX: 577, minY: 173, maxX: 728, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 616, maxY: 517 },
    right: { minX: 686, minY: 365, maxX: 836, maxY: 514 },
    top: { minX: 578, minY: 171, maxX: 729, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 616, maxY: 517 },
    right: { minX: 685, minY: 365, maxX: 836, maxY: 514 },
    top: { minX: 578, minY: 171, maxX: 728, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 363, maxX: 615, maxY: 516 },
    right: { minX: 685, minY: 365, maxX: 835, maxY: 513 },
    top: { minX: 577, minY: 171, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 362, maxX: 616, maxY: 515 },
    right: { minX: 685, minY: 363, maxX: 835, maxY: 511 },
    top: { minX: 577, minY: 169, maxX: 728, maxY: 322 },
  },
  {
    left: { minX: 462, minY: 363, maxX: 615, maxY: 516 },
    right: { minX: 684, minY: 365, maxX: 834, maxY: 513 },
    top: { minX: 577, minY: 172, maxX: 727, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 615, maxY: 516 },
    right: { minX: 684, minY: 366, maxX: 834, maxY: 514 },
    top: { minX: 577, minY: 173, maxX: 727, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 615, maxY: 515 },
    right: { minX: 683, minY: 365, maxX: 832, maxY: 513 },
    top: { minX: 577, minY: 173, maxX: 727, maxY: 324 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 514 },
    right: { minX: 683, minY: 364, maxX: 832, maxY: 511 },
    top: { minX: 577, minY: 171, maxX: 726, maxY: 322 },
  },
  {
    left: { minX: 461, minY: 363, maxX: 614, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 830, maxY: 511 },
    top: { minX: 576, minY: 173, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 460, minY: 363, maxX: 612, maxY: 514 },
    right: { minX: 681, minY: 365, maxX: 829, maxY: 511 },
    top: { minX: 575, minY: 173, maxX: 724, maxY: 324 },
  },
  {
    left: { minX: 460, minY: 362, maxX: 612, maxY: 513 },
    right: { minX: 680, minY: 364, maxX: 828, maxY: 510 },
    top: { minX: 575, minY: 173, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 611, maxY: 514 },
    right: { minX: 679, minY: 365, maxX: 826, maxY: 510 },
    top: { minX: 573, minY: 173, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 611, maxY: 514 },
    right: { minX: 679, minY: 365, maxX: 826, maxY: 510 },
    top: { minX: 573, minY: 174, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 610, maxY: 513 },
    right: { minX: 678, minY: 365, maxX: 826, maxY: 510 },
    top: { minX: 573, minY: 174, maxX: 721, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 362, maxX: 610, maxY: 513 },
    right: { minX: 678, minY: 364, maxX: 825, maxY: 509 },
    top: { minX: 573, minY: 173, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 363, maxX: 824, maxY: 509 },
    top: { minX: 571, minY: 173, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 363, maxX: 824, maxY: 508 },
    top: { minX: 572, minY: 173, maxX: 720, maxY: 322 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 363, maxX: 824, maxY: 508 },
    top: { minX: 572, minY: 173, maxX: 720, maxY: 322 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 364, maxX: 823, maxY: 509 },
    top: { minX: 573, minY: 173, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 362, maxX: 609, maxY: 511 },
    right: { minX: 677, minY: 364, maxX: 823, maxY: 509 },
    top: { minX: 573, minY: 174, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 362, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 364, maxX: 823, maxY: 509 },
    top: { minX: 573, minY: 174, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 608, maxY: 511 },
    right: { minX: 676, minY: 364, maxX: 822, maxY: 508 },
    top: { minX: 572, minY: 175, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 362, maxX: 608, maxY: 511 },
    right: { minX: 676, minY: 365, maxX: 821, maxY: 509 },
    top: { minX: 572, minY: 175, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 607, maxY: 512 },
    right: { minX: 674, minY: 365, maxX: 819, maxY: 509 },
    top: { minX: 571, minY: 177, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 608, maxY: 512 },
    right: { minX: 675, minY: 365, maxX: 819, maxY: 508 },
    top: { minX: 571, minY: 176, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 607, maxY: 512 },
    right: { minX: 674, minY: 365, maxX: 818, maxY: 508 },
    top: { minX: 570, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 607, maxY: 511 },
    right: { minX: 674, minY: 365, maxX: 818, maxY: 508 },
    top: { minX: 570, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 607, maxY: 511 },
    right: { minX: 674, minY: 365, maxX: 818, maxY: 507 },
    top: { minX: 571, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 608, maxY: 510 },
    right: { minX: 674, minY: 364, maxX: 818, maxY: 506 },
    top: { minX: 572, minY: 176, maxX: 717, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 608, maxY: 509 },
    right: { minX: 674, minY: 364, maxX: 818, maxY: 506 },
    top: { minX: 572, minY: 177, maxX: 717, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 607, maxY: 509 },
    right: { minX: 674, minY: 364, maxX: 817, maxY: 507 },
    top: { minX: 572, minY: 177, maxX: 716, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 607, maxY: 509 },
    right: { minX: 673, minY: 364, maxX: 817, maxY: 506 },
    top: { minX: 571, minY: 177, maxX: 716, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 362, maxX: 607, maxY: 509 },
    right: { minX: 673, minY: 365, maxX: 816, maxY: 507 },
    top: { minX: 571, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 456, minY: 363, maxX: 605, maxY: 510 },
    right: { minX: 671, minY: 366, maxX: 814, maxY: 507 },
    top: { minX: 569, minY: 179, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 456, minY: 363, maxX: 605, maxY: 510 },
    right: { minX: 670, minY: 365, maxX: 813, maxY: 507 },
    top: { minX: 569, minY: 179, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 454, minY: 363, maxX: 603, maxY: 510 },
    right: { minX: 669, minY: 366, maxX: 811, maxY: 507 },
    top: { minX: 567, minY: 180, maxX: 711, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 602, maxY: 510 },
    right: { minX: 668, minY: 365, maxX: 809, maxY: 506 },
    top: { minX: 566, minY: 180, maxX: 709, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 362, maxX: 602, maxY: 509 },
    right: { minX: 668, minY: 365, maxX: 809, maxY: 505 },
    top: { minX: 565, minY: 179, maxX: 709, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 361, maxX: 602, maxY: 508 },
    right: { minX: 668, minY: 364, maxX: 809, maxY: 504 },
    top: { minX: 566, minY: 179, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 602, maxY: 509 },
    right: { minX: 668, minY: 365, maxX: 809, maxY: 504 },
    top: { minX: 566, minY: 179, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 602, maxY: 509 },
    right: { minX: 667, minY: 365, maxX: 808, maxY: 504 },
    top: { minX: 566, minY: 180, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 602, maxY: 507 },
    right: { minX: 668, minY: 363, maxX: 808, maxY: 503 },
    top: { minX: 567, minY: 179, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 602, maxY: 507 },
    right: { minX: 667, minY: 364, maxX: 808, maxY: 503 },
    top: { minX: 567, minY: 179, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 602, maxY: 507 },
    right: { minX: 667, minY: 364, maxX: 807, maxY: 503 },
    top: { minX: 567, minY: 180, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 601, maxY: 507 },
    right: { minX: 666, minY: 364, maxX: 806, maxY: 503 },
    top: { minX: 566, minY: 180, maxX: 708, maxY: 324 },
  },
  {
    left: { minX: 453, minY: 362, maxX: 600, maxY: 508 },
    right: { minX: 665, minY: 365, maxX: 805, maxY: 504 },
    top: { minX: 565, minY: 182, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 452, minY: 364, maxX: 599, maxY: 509 },
    right: { minX: 664, minY: 366, maxX: 803, maxY: 505 },
    top: { minX: 563, minY: 183, maxX: 706, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 598, maxY: 509 },
    right: { minX: 663, minY: 366, maxX: 802, maxY: 504 },
    top: { minX: 563, minY: 183, maxX: 705, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 597, maxY: 509 },
    right: { minX: 662, minY: 365, maxX: 801, maxY: 503 },
    top: { minX: 562, minY: 183, maxX: 704, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 598, maxY: 510 },
    right: { minX: 662, minY: 367, maxX: 801, maxY: 505 },
    top: { minX: 562, minY: 185, maxX: 703, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 598, maxY: 509 },
    right: { minX: 662, minY: 366, maxX: 801, maxY: 504 },
    top: { minX: 563, minY: 184, maxX: 704, maxY: 327 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 597, maxY: 508 },
    right: { minX: 662, minY: 365, maxX: 800, maxY: 503 },
    top: { minX: 561, minY: 183, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 362, maxX: 597, maxY: 507 },
    right: { minX: 662, minY: 364, maxX: 800, maxY: 501 },
    top: { minX: 561, minY: 182, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 597, maxY: 507 },
    right: { minX: 662, minY: 365, maxX: 800, maxY: 502 },
    top: { minX: 561, minY: 183, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 451, minY: 362, maxX: 597, maxY: 506 },
    right: { minX: 661, minY: 363, maxX: 799, maxY: 501 },
    top: { minX: 561, minY: 182, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 452, minY: 361, maxX: 598, maxY: 505 },
    right: { minX: 662, minY: 362, maxX: 800, maxY: 499 },
    top: { minX: 562, minY: 181, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 361, maxX: 598, maxY: 505 },
    right: { minX: 662, minY: 363, maxX: 799, maxY: 500 },
    top: { minX: 563, minY: 183, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 599, maxY: 505 },
    right: { minX: 662, minY: 363, maxX: 799, maxY: 499 },
    top: { minX: 563, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 363, maxX: 799, maxY: 498 },
    top: { minX: 563, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 599, maxY: 504 },
    right: { minX: 663, minY: 363, maxX: 799, maxY: 499 },
    top: { minX: 564, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 363, maxX: 799, maxY: 498 },
    top: { minX: 563, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 600, maxY: 503 },
    right: { minX: 663, minY: 363, maxX: 799, maxY: 498 },
    top: { minX: 564, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 363, maxX: 798, maxY: 498 },
    top: { minX: 563, minY: 184, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 362, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 364, maxX: 798, maxY: 499 },
    top: { minX: 563, minY: 185, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 455, minY: 362, maxX: 599, maxY: 505 },
    right: { minX: 662, minY: 364, maxX: 797, maxY: 499 },
    top: { minX: 563, minY: 186, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 364, maxX: 797, maxY: 498 },
    top: { minX: 564, minY: 186, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 599, maxY: 505 },
    right: { minX: 661, minY: 365, maxX: 796, maxY: 499 },
    top: { minX: 563, minY: 187, maxX: 701, maxY: 326 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 598, maxY: 505 },
    right: { minX: 660, minY: 365, maxX: 795, maxY: 499 },
    top: { minX: 563, minY: 187, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 598, maxY: 504 },
    right: { minX: 660, minY: 364, maxX: 795, maxY: 498 },
    top: { minX: 563, minY: 187, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 598, maxY: 504 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 563, minY: 187, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 599, maxY: 504 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 563, minY: 187, maxX: 701, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 599, maxY: 503 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 563, minY: 187, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 600, maxY: 503 },
    right: { minX: 662, minY: 364, maxX: 796, maxY: 497 },
    top: { minX: 565, minY: 187, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 599, maxY: 503 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 565, minY: 188, maxX: 701, maxY: 326 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 599, maxY: 502 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 496 },
    top: { minX: 564, minY: 187, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 599, maxY: 501 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 564, minY: 187, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 360, maxX: 599, maxY: 501 },
    right: { minX: 660, minY: 362, maxX: 794, maxY: 495 },
    top: { minX: 564, minY: 186, maxX: 701, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 360, maxX: 599, maxY: 500 },
    right: { minX: 660, minY: 362, maxX: 794, maxY: 494 },
    top: { minX: 563, minY: 185, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 599, maxY: 501 },
    right: { minX: 660, minY: 363, maxX: 793, maxY: 494 },
    top: { minX: 564, minY: 187, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 361, maxX: 600, maxY: 501 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 565, minY: 188, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 361, maxX: 600, maxY: 501 },
    right: { minX: 662, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 565, minY: 189, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 361, maxX: 600, maxY: 500 },
    right: { minX: 661, minY: 363, maxX: 793, maxY: 493 },
    top: { minX: 565, minY: 188, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 361, maxX: 601, maxY: 500 },
    right: { minX: 662, minY: 363, maxX: 793, maxY: 493 },
    top: { minX: 566, minY: 188, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 360, maxX: 602, maxY: 499 },
    right: { minX: 662, minY: 362, maxX: 794, maxY: 493 },
    top: { minX: 567, minY: 189, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 360, maxX: 602, maxY: 498 },
    right: { minX: 662, minY: 362, maxX: 794, maxY: 493 },
    top: { minX: 567, minY: 188, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 360, maxX: 602, maxY: 499 },
    right: { minX: 662, minY: 362, maxX: 794, maxY: 493 },
    top: { minX: 567, minY: 189, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 361, maxX: 601, maxY: 499 },
    right: { minX: 662, minY: 363, maxX: 792, maxY: 493 },
    top: { minX: 566, minY: 189, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 359, maxX: 602, maxY: 497 },
    right: { minX: 662, minY: 361, maxX: 793, maxY: 491 },
    top: { minX: 567, minY: 187, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 358, maxX: 602, maxY: 496 },
    right: { minX: 663, minY: 360, maxX: 793, maxY: 490 },
    top: { minX: 567, minY: 187, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 359, maxX: 602, maxY: 497 },
    right: { minX: 662, minY: 361, maxX: 793, maxY: 491 },
    top: { minX: 568, minY: 188, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 359, maxX: 602, maxY: 497 },
    right: { minX: 662, minY: 361, maxX: 793, maxY: 491 },
    top: { minX: 568, minY: 188, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 358, maxX: 602, maxY: 496 },
    right: { minX: 662, minY: 361, maxX: 792, maxY: 490 },
    top: { minX: 568, minY: 187, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 358, maxX: 602, maxY: 495 },
    right: { minX: 662, minY: 360, maxX: 793, maxY: 489 },
    top: { minX: 568, minY: 187, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 357, maxX: 601, maxY: 495 },
    right: { minX: 661, minY: 360, maxX: 792, maxY: 489 },
    top: { minX: 567, minY: 187, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 358, maxX: 601, maxY: 496 },
    right: { minX: 661, minY: 361, maxX: 791, maxY: 490 },
    top: { minX: 567, minY: 188, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 359, maxX: 601, maxY: 496 },
    right: { minX: 660, minY: 361, maxX: 790, maxY: 490 },
    top: { minX: 567, minY: 189, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 359, maxX: 601, maxY: 497 },
    right: { minX: 660, minY: 362, maxX: 790, maxY: 491 },
    top: { minX: 567, minY: 190, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 360, maxX: 600, maxY: 497 },
    right: { minX: 660, minY: 363, maxX: 789, maxY: 491 },
    top: { minX: 567, minY: 191, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 360, maxX: 599, maxY: 497 },
    right: { minX: 659, minY: 362, maxX: 788, maxY: 491 },
    top: { minX: 565, minY: 191, maxX: 698, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 359, maxX: 599, maxY: 496 },
    right: { minX: 658, minY: 361, maxX: 788, maxY: 490 },
    top: { minX: 565, minY: 190, maxX: 698, maxY: 324 },
  },
  {
    left: { minX: 461, minY: 358, maxX: 600, maxY: 495 },
    right: { minX: 659, minY: 361, maxX: 788, maxY: 489 },
    top: { minX: 565, minY: 188, maxX: 699, maxY: 323 },
  },
  {
    left: { minX: 460, minY: 356, maxX: 599, maxY: 494 },
    right: { minX: 658, minY: 359, maxX: 788, maxY: 487 },
    top: { minX: 565, minY: 187, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 598, maxY: 493 },
    right: { minX: 658, minY: 358, maxX: 787, maxY: 486 },
    top: { minX: 563, minY: 185, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 598, maxY: 493 },
    right: { minX: 658, minY: 358, maxX: 787, maxY: 486 },
    top: { minX: 563, minY: 185, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 460, minY: 356, maxX: 599, maxY: 493 },
    right: { minX: 658, minY: 358, maxX: 787, maxY: 486 },
    top: { minX: 565, minY: 187, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 355, maxX: 598, maxY: 492 },
    right: { minX: 658, minY: 357, maxX: 786, maxY: 485 },
    top: { minX: 564, minY: 185, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 460, minY: 354, maxX: 599, maxY: 491 },
    right: { minX: 658, minY: 357, maxX: 787, maxY: 485 },
    top: { minX: 565, minY: 185, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 353, maxX: 599, maxY: 490 },
    right: { minX: 658, minY: 356, maxX: 787, maxY: 483 },
    top: { minX: 565, minY: 184, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 462, minY: 353, maxX: 600, maxY: 490 },
    right: { minX: 659, minY: 356, maxX: 788, maxY: 483 },
    top: { minX: 566, minY: 184, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 464, minY: 353, maxX: 602, maxY: 490 },
    right: { minX: 661, minY: 357, maxX: 789, maxY: 484 },
    top: { minX: 568, minY: 185, maxX: 701, maxY: 319 },
  },
  {
    left: { minX: 466, minY: 351, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 354, maxX: 791, maxY: 481 },
    top: { minX: 570, minY: 182, maxX: 703, maxY: 317 },
  },
  {
    left: { minX: 467, minY: 351, maxX: 604, maxY: 487 },
    right: { minX: 663, minY: 354, maxX: 792, maxY: 481 },
    top: { minX: 571, minY: 182, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 468, minY: 351, maxX: 605, maxY: 487 },
    right: { minX: 664, minY: 355, maxX: 792, maxY: 482 },
    top: { minX: 572, minY: 183, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 468, minY: 350, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 354, maxX: 792, maxY: 481 },
    top: { minX: 573, minY: 182, maxX: 705, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 350, maxX: 607, maxY: 486 },
    right: { minX: 665, minY: 353, maxX: 793, maxY: 480 },
    top: { minX: 574, minY: 182, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 469, minY: 350, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 354, maxX: 792, maxY: 481 },
    top: { minX: 573, minY: 183, maxX: 705, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 350, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 353, maxX: 792, maxY: 480 },
    top: { minX: 573, minY: 183, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 469, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 354, maxX: 792, maxY: 480 },
    top: { minX: 573, minY: 183, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 354, maxX: 792, maxY: 481 },
    top: { minX: 573, minY: 183, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 355, maxX: 791, maxY: 480 },
    top: { minX: 573, minY: 184, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 355, maxX: 792, maxY: 480 },
    top: { minX: 573, minY: 185, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 607, maxY: 485 },
    right: { minX: 664, minY: 353, maxX: 792, maxY: 479 },
    top: { minX: 573, minY: 183, maxX: 705, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 349, maxX: 607, maxY: 484 },
    right: { minX: 665, minY: 353, maxX: 792, maxY: 478 },
    top: { minX: 573, minY: 182, maxX: 705, maxY: 315 },
  },
  {
    left: { minX: 472, minY: 348, maxX: 608, maxY: 483 },
    right: { minX: 666, minY: 351, maxX: 793, maxY: 477 },
    top: { minX: 575, minY: 181, maxX: 706, maxY: 314 },
  },
  {
    left: { minX: 473, minY: 348, maxX: 609, maxY: 483 },
    right: { minX: 667, minY: 352, maxX: 793, maxY: 477 },
    top: { minX: 576, minY: 182, maxX: 708, maxY: 315 },
  },
  {
    left: { minX: 475, minY: 347, maxX: 610, maxY: 482 },
    right: { minX: 668, minY: 351, maxX: 794, maxY: 477 },
    top: { minX: 578, minY: 181, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 475, minY: 347, maxX: 610, maxY: 481 },
    right: { minX: 668, minY: 351, maxX: 794, maxY: 477 },
    top: { minX: 578, minY: 181, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 475, minY: 347, maxX: 610, maxY: 481 },
    right: { minX: 667, minY: 351, maxX: 794, maxY: 477 },
    top: { minX: 578, minY: 181, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 474, minY: 348, maxX: 609, maxY: 482 },
    right: { minX: 666, minY: 352, maxX: 792, maxY: 477 },
    top: { minX: 577, minY: 182, maxX: 707, maxY: 314 },
  },
  {
    left: { minX: 474, minY: 348, maxX: 609, maxY: 481 },
    right: { minX: 666, minY: 352, maxX: 792, maxY: 477 },
    top: { minX: 577, minY: 183, maxX: 707, maxY: 314 },
  },
  {
    left: { minX: 473, minY: 349, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 353, maxX: 792, maxY: 478 },
    top: { minX: 577, minY: 184, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 354, maxX: 792, maxY: 479 },
    top: { minX: 577, minY: 185, maxX: 706, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 608, maxY: 484 },
    right: { minX: 665, minY: 355, maxX: 791, maxY: 479 },
    top: { minX: 576, minY: 185, maxX: 706, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 608, maxY: 485 },
    right: { minX: 664, minY: 356, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 187, maxX: 705, maxY: 318 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 607, maxY: 487 },
    right: { minX: 664, minY: 357, maxX: 789, maxY: 481 },
    top: { minX: 575, minY: 189, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 607, maxY: 486 },
    right: { minX: 664, minY: 357, maxX: 789, maxY: 481 },
    top: { minX: 574, minY: 189, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 608, maxY: 487 },
    right: { minX: 665, minY: 357, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 189, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 354, maxX: 609, maxY: 487 },
    right: { minX: 666, minY: 357, maxX: 791, maxY: 481 },
    top: { minX: 576, minY: 189, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 354, maxX: 609, maxY: 487 },
    right: { minX: 665, minY: 357, maxX: 791, maxY: 481 },
    top: { minX: 575, minY: 189, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 608, maxY: 486 },
    right: { minX: 665, minY: 356, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 188, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 608, maxY: 486 },
    right: { minX: 665, minY: 355, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 187, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 352, maxX: 607, maxY: 485 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 479 },
    top: { minX: 574, minY: 187, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 472, minY: 350, maxX: 608, maxY: 484 },
    right: { minX: 664, minY: 353, maxX: 790, maxY: 478 },
    top: { minX: 574, minY: 185, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 607, maxY: 484 },
    right: { minX: 664, minY: 353, maxX: 790, maxY: 478 },
    top: { minX: 574, minY: 185, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 472, minY: 350, maxX: 607, maxY: 484 },
    right: { minX: 664, minY: 353, maxX: 790, maxY: 478 },
    top: { minX: 574, minY: 184, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 479 },
    top: { minX: 574, minY: 185, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 350, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 479 },
    top: { minX: 573, minY: 185, maxX: 703, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 350, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 478 },
    top: { minX: 573, minY: 185, maxX: 703, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 349, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 478 },
    top: { minX: 573, minY: 184, maxX: 703, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 349, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 353, maxX: 790, maxY: 477 },
    top: { minX: 573, minY: 183, maxX: 704, maxY: 315 },
  },
  {
    left: { minX: 471, minY: 349, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 353, maxX: 790, maxY: 478 },
    top: { minX: 573, minY: 183, maxX: 705, maxY: 315 },
  },
  {
    left: { minX: 472, minY: 349, maxX: 608, maxY: 483 },
    right: { minX: 665, minY: 353, maxX: 792, maxY: 478 },
    top: { minX: 575, minY: 184, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 608, maxY: 484 },
    right: { minX: 666, minY: 354, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 185, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 609, maxY: 484 },
    right: { minX: 666, minY: 354, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 185, maxX: 707, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 609, maxY: 484 },
    right: { minX: 667, minY: 353, maxX: 793, maxY: 479 },
    top: { minX: 577, minY: 184, maxX: 707, maxY: 316 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 610, maxY: 483 },
    right: { minX: 667, minY: 353, maxX: 794, maxY: 479 },
    top: { minX: 577, minY: 184, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 611, maxY: 483 },
    right: { minX: 668, minY: 354, maxX: 795, maxY: 479 },
    top: { minX: 578, minY: 184, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 476, minY: 351, maxX: 611, maxY: 484 },
    right: { minX: 668, minY: 355, maxX: 796, maxY: 480 },
    top: { minX: 579, minY: 185, maxX: 709, maxY: 317 },
  },
  {
    left: { minX: 476, minY: 351, maxX: 611, maxY: 485 },
    right: { minX: 668, minY: 356, maxX: 796, maxY: 481 },
    top: { minX: 579, minY: 186, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 476, minY: 352, maxX: 611, maxY: 485 },
    right: { minX: 668, minY: 356, maxX: 796, maxY: 481 },
    top: { minX: 579, minY: 187, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 475, minY: 352, maxX: 610, maxY: 485 },
    right: { minX: 668, minY: 355, maxX: 795, maxY: 481 },
    top: { minX: 578, minY: 187, maxX: 708, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 609, maxY: 486 },
    right: { minX: 667, minY: 356, maxX: 793, maxY: 481 },
    top: { minX: 577, minY: 187, maxX: 707, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 608, maxY: 487 },
    right: { minX: 666, minY: 357, maxX: 793, maxY: 482 },
    top: { minX: 576, minY: 187, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 608, maxY: 486 },
    right: { minX: 665, minY: 356, maxX: 792, maxY: 482 },
    top: { minX: 575, minY: 187, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 607, maxY: 487 },
    right: { minX: 665, minY: 356, maxX: 792, maxY: 482 },
    top: { minX: 575, minY: 187, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 605, maxY: 487 },
    right: { minX: 663, minY: 357, maxX: 790, maxY: 482 },
    top: { minX: 572, minY: 187, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 663, minY: 356, maxX: 790, maxY: 482 },
    top: { minX: 571, minY: 187, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 356, maxX: 790, maxY: 481 },
    top: { minX: 571, minY: 186, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 468, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 356, maxX: 790, maxY: 481 },
    top: { minX: 571, minY: 186, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 468, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 355, maxX: 790, maxY: 481 },
    top: { minX: 570, minY: 186, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 605, maxY: 488 },
    right: { minX: 663, minY: 356, maxX: 790, maxY: 482 },
    top: { minX: 571, minY: 187, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 605, maxY: 488 },
    right: { minX: 663, minY: 356, maxX: 791, maxY: 482 },
    top: { minX: 571, minY: 187, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 605, maxY: 489 },
    right: { minX: 663, minY: 357, maxX: 790, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 605, maxY: 489 },
    right: { minX: 663, minY: 357, maxX: 791, maxY: 483 },
    top: { minX: 571, minY: 188, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 605, maxY: 489 },
    right: { minX: 664, minY: 357, maxX: 792, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 470, minY: 354, maxX: 606, maxY: 489 },
    right: { minX: 664, minY: 357, maxX: 792, maxY: 483 },
    top: { minX: 572, minY: 187, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 605, maxY: 489 },
    right: { minX: 664, minY: 357, maxX: 792, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 606, maxY: 490 },
    right: { minX: 664, minY: 358, maxX: 793, maxY: 485 },
    top: { minX: 573, minY: 187, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 606, maxY: 490 },
    right: { minX: 664, minY: 358, maxX: 793, maxY: 485 },
    top: { minX: 573, minY: 187, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 606, maxY: 491 },
    right: { minX: 665, minY: 358, maxX: 794, maxY: 485 },
    top: { minX: 573, minY: 188, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 471, minY: 356, maxX: 607, maxY: 491 },
    right: { minX: 666, minY: 358, maxX: 795, maxY: 486 },
    top: { minX: 573, minY: 188, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 607, maxY: 490 },
    right: { minX: 666, minY: 358, maxX: 796, maxY: 485 },
    top: { minX: 573, minY: 187, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 608, maxY: 490 },
    right: { minX: 668, minY: 357, maxX: 797, maxY: 485 },
    top: { minX: 575, minY: 187, maxX: 707, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 609, maxY: 490 },
    right: { minX: 668, minY: 357, maxX: 798, maxY: 485 },
    top: { minX: 576, minY: 187, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 354, maxX: 609, maxY: 489 },
    right: { minX: 668, minY: 356, maxX: 798, maxY: 484 },
    top: { minX: 575, minY: 185, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 488 },
    right: { minX: 669, minY: 355, maxX: 799, maxY: 484 },
    top: { minX: 577, minY: 184, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 488 },
    right: { minX: 669, minY: 355, maxX: 799, maxY: 483 },
    top: { minX: 576, minY: 184, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 488 },
    right: { minX: 670, minY: 355, maxX: 800, maxY: 484 },
    top: { minX: 577, minY: 183, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 611, maxY: 488 },
    right: { minX: 671, minY: 355, maxX: 801, maxY: 483 },
    top: { minX: 577, minY: 183, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 611, maxY: 488 },
    right: { minX: 671, minY: 355, maxX: 802, maxY: 483 },
    top: { minX: 578, minY: 182, maxX: 711, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 612, maxY: 488 },
    right: { minX: 671, minY: 355, maxX: 802, maxY: 483 },
    top: { minX: 578, minY: 182, maxX: 711, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 611, maxY: 488 },
    right: { minX: 671, minY: 354, maxX: 802, maxY: 483 },
    top: { minX: 577, minY: 182, maxX: 711, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 611, maxY: 488 },
    right: { minX: 671, minY: 354, maxX: 802, maxY: 483 },
    top: { minX: 578, minY: 181, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 611, maxY: 487 },
    right: { minX: 672, minY: 354, maxX: 802, maxY: 483 },
    top: { minX: 578, minY: 181, maxX: 712, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 611, maxY: 487 },
    right: { minX: 671, minY: 353, maxX: 802, maxY: 483 },
    top: { minX: 577, minY: 181, maxX: 711, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 610, maxY: 488 },
    right: { minX: 671, minY: 354, maxX: 802, maxY: 484 },
    top: { minX: 577, minY: 181, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 610, maxY: 489 },
    right: { minX: 670, minY: 356, maxX: 802, maxY: 485 },
    top: { minX: 576, minY: 183, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 490 },
    right: { minX: 670, minY: 356, maxX: 801, maxY: 485 },
    top: { minX: 575, minY: 183, maxX: 709, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 491 },
    right: { minX: 669, minY: 356, maxX: 800, maxY: 486 },
    top: { minX: 575, minY: 183, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 356, maxX: 801, maxY: 486 },
    top: { minX: 575, minY: 183, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 354, maxX: 610, maxY: 491 },
    right: { minX: 670, minY: 356, maxX: 802, maxY: 486 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 610, maxY: 491 },
    right: { minX: 671, minY: 357, maxX: 802, maxY: 487 },
    top: { minX: 576, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 610, maxY: 491 },
    right: { minX: 671, minY: 357, maxX: 803, maxY: 487 },
    top: { minX: 576, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 354, maxX: 610, maxY: 491 },
    right: { minX: 671, minY: 356, maxX: 803, maxY: 487 },
    top: { minX: 576, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 491 },
    right: { minX: 671, minY: 356, maxX: 803, maxY: 487 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 356, maxX: 802, maxY: 487 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 609, maxY: 492 },
    right: { minX: 670, minY: 357, maxX: 803, maxY: 487 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 470, minY: 354, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 356, maxX: 803, maxY: 487 },
    top: { minX: 575, minY: 181, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 608, maxY: 492 },
    right: { minX: 669, minY: 356, maxX: 802, maxY: 487 },
    top: { minX: 573, minY: 181, maxX: 708, maxY: 318 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 608, maxY: 491 },
    right: { minX: 669, minY: 355, maxX: 802, maxY: 486 },
    top: { minX: 573, minY: 181, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 608, maxY: 491 },
    right: { minX: 670, minY: 354, maxX: 803, maxY: 485 },
    top: { minX: 573, minY: 179, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 354, maxX: 804, maxY: 485 },
    top: { minX: 573, minY: 179, maxX: 709, maxY: 317 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 611, maxY: 490 },
    right: { minX: 672, minY: 354, maxX: 806, maxY: 486 },
    top: { minX: 576, minY: 179, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 612, maxY: 491 },
    right: { minX: 673, minY: 354, maxX: 807, maxY: 486 },
    top: { minX: 577, minY: 179, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 476, minY: 354, maxX: 614, maxY: 492 },
    right: { minX: 676, minY: 356, maxX: 809, maxY: 487 },
    top: { minX: 579, minY: 182, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 355, maxX: 615, maxY: 492 },
    right: { minX: 676, minY: 356, maxX: 810, maxY: 488 },
    top: { minX: 581, minY: 182, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 479, minY: 356, maxX: 617, maxY: 493 },
    right: { minX: 678, minY: 358, maxX: 812, maxY: 489 },
    top: { minX: 583, minY: 183, maxX: 718, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 617, maxY: 494 },
    right: { minX: 678, minY: 359, maxX: 811, maxY: 490 },
    top: { minX: 582, minY: 185, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 481, minY: 358, maxX: 618, maxY: 495 },
    right: { minX: 680, minY: 359, maxX: 813, maxY: 490 },
    top: { minX: 583, minY: 185, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 481, minY: 358, maxX: 618, maxY: 495 },
    right: { minX: 679, minY: 359, maxX: 812, maxY: 491 },
    top: { minX: 583, minY: 186, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 618, maxY: 496 },
    right: { minX: 680, minY: 360, maxX: 812, maxY: 491 },
    top: { minX: 583, minY: 187, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 619, maxY: 495 },
    right: { minX: 680, minY: 360, maxX: 813, maxY: 491 },
    top: { minX: 585, minY: 187, maxX: 719, maxY: 323 },
  },
  {
    left: { minX: 480, minY: 359, maxX: 618, maxY: 496 },
    right: { minX: 679, minY: 360, maxX: 812, maxY: 491 },
    top: { minX: 583, minY: 187, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 618, maxY: 497 },
    right: { minX: 679, minY: 361, maxX: 811, maxY: 492 },
    top: { minX: 583, minY: 189, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 618, maxY: 497 },
    right: { minX: 678, minY: 362, maxX: 811, maxY: 493 },
    top: { minX: 583, minY: 190, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 618, maxY: 498 },
    right: { minX: 678, minY: 363, maxX: 811, maxY: 493 },
    top: { minX: 583, minY: 190, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 362, maxX: 618, maxY: 498 },
    right: { minX: 678, minY: 363, maxX: 811, maxY: 493 },
    top: { minX: 583, minY: 191, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 362, maxX: 617, maxY: 498 },
    right: { minX: 678, minY: 363, maxX: 810, maxY: 494 },
    top: { minX: 583, minY: 191, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 363, maxX: 617, maxY: 499 },
    right: { minX: 678, minY: 364, maxX: 810, maxY: 495 },
    top: { minX: 582, minY: 193, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 480, minY: 365, maxX: 617, maxY: 500 },
    right: { minX: 678, minY: 365, maxX: 810, maxY: 496 },
    top: { minX: 583, minY: 194, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 480, minY: 366, maxX: 617, maxY: 501 },
    right: { minX: 678, minY: 367, maxX: 810, maxY: 497 },
    top: { minX: 583, minY: 195, maxX: 716, maxY: 330 },
  },
  {
    left: { minX: 480, minY: 366, maxX: 617, maxY: 501 },
    right: { minX: 677, minY: 367, maxX: 809, maxY: 497 },
    top: { minX: 582, minY: 196, maxX: 716, maxY: 330 },
  },
  {
    left: { minX: 480, minY: 365, maxX: 617, maxY: 500 },
    right: { minX: 677, minY: 366, maxX: 809, maxY: 496 },
    top: { minX: 583, minY: 195, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 617, maxY: 500 },
    right: { minX: 678, minY: 365, maxX: 809, maxY: 496 },
    top: { minX: 583, minY: 195, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 364, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 365, maxX: 808, maxY: 495 },
    top: { minX: 581, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 365, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 808, maxY: 496 },
    top: { minX: 581, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 365, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 808, maxY: 496 },
    top: { minX: 581, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 365, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 807, maxY: 496 },
    top: { minX: 581, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 364, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 808, maxY: 495 },
    top: { minX: 582, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 616, maxY: 499 },
    right: { minX: 677, minY: 365, maxX: 808, maxY: 495 },
    top: { minX: 583, minY: 194, maxX: 715, maxY: 328 },
  },
  {
    left: { minX: 480, minY: 362, maxX: 617, maxY: 498 },
    right: { minX: 677, minY: 364, maxX: 808, maxY: 494 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 617, maxY: 497 },
    right: { minX: 677, minY: 364, maxX: 808, maxY: 493 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 618, maxY: 496 },
    right: { minX: 678, minY: 363, maxX: 809, maxY: 493 },
    top: { minX: 584, minY: 192, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 617, maxY: 496 },
    right: { minX: 678, minY: 363, maxX: 809, maxY: 493 },
    top: { minX: 584, minY: 192, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 617, maxY: 496 },
    right: { minX: 678, minY: 363, maxX: 808, maxY: 493 },
    top: { minX: 584, minY: 193, maxX: 716, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 617, maxY: 496 },
    right: { minX: 677, minY: 363, maxX: 808, maxY: 493 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 617, maxY: 496 },
    right: { minX: 677, minY: 363, maxX: 807, maxY: 492 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 616, maxY: 496 },
    right: { minX: 676, minY: 363, maxX: 806, maxY: 492 },
    top: { minX: 583, minY: 193, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 616, maxY: 496 },
    right: { minX: 676, minY: 363, maxX: 806, maxY: 492 },
    top: { minX: 582, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 616, maxY: 496 },
    right: { minX: 676, minY: 363, maxX: 806, maxY: 491 },
    top: { minX: 582, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 615, maxY: 495 },
    right: { minX: 675, minY: 363, maxX: 804, maxY: 491 },
    top: { minX: 581, minY: 193, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 615, maxY: 494 },
    right: { minX: 675, minY: 362, maxX: 804, maxY: 490 },
    top: { minX: 581, minY: 193, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 615, maxY: 494 },
    right: { minX: 674, minY: 362, maxX: 804, maxY: 490 },
    top: { minX: 582, minY: 192, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 359, maxX: 615, maxY: 493 },
    right: { minX: 674, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 581, minY: 191, maxX: 713, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 615, maxY: 493 },
    right: { minX: 674, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 582, minY: 192, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 615, maxY: 494 },
    right: { minX: 674, minY: 363, maxX: 804, maxY: 491 },
    top: { minX: 582, minY: 194, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 360, maxX: 616, maxY: 493 },
    right: { minX: 675, minY: 362, maxX: 804, maxY: 489 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 360, maxX: 616, maxY: 493 },
    right: { minX: 675, minY: 363, maxX: 804, maxY: 490 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 675, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 483, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 676, minY: 362, maxX: 804, maxY: 489 },
    top: { minX: 584, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 675, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 584, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 358, maxX: 616, maxY: 491 },
    right: { minX: 675, minY: 361, maxX: 803, maxY: 487 },
    top: { minX: 583, minY: 192, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 357, maxX: 616, maxY: 490 },
    right: { minX: 675, minY: 360, maxX: 803, maxY: 487 },
    top: { minX: 583, minY: 192, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 482, minY: 358, maxX: 616, maxY: 490 },
    right: { minX: 674, minY: 361, maxX: 802, maxY: 487 },
    top: { minX: 583, minY: 192, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 358, maxX: 616, maxY: 490 },
    right: { minX: 674, minY: 360, maxX: 802, maxY: 487 },
    top: { minX: 583, minY: 192, maxX: 713, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 673, minY: 359, maxX: 800, maxY: 485 },
    top: { minX: 581, minY: 191, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 673, minY: 359, maxX: 800, maxY: 485 },
    top: { minX: 581, minY: 191, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 673, minY: 360, maxX: 800, maxY: 485 },
    top: { minX: 582, minY: 193, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 358, maxX: 614, maxY: 489 },
    right: { minX: 672, minY: 360, maxX: 799, maxY: 486 },
    top: { minX: 581, minY: 193, maxX: 711, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 358, maxX: 614, maxY: 489 },
    right: { minX: 672, minY: 360, maxX: 798, maxY: 485 },
    top: { minX: 581, minY: 194, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 672, minY: 360, maxX: 798, maxY: 485 },
    top: { minX: 582, minY: 194, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 488 },
    right: { minX: 672, minY: 360, maxX: 798, maxY: 485 },
    top: { minX: 581, minY: 194, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 613, maxY: 488 },
    right: { minX: 670, minY: 361, maxX: 796, maxY: 485 },
    top: { minX: 581, minY: 195, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 612, maxY: 487 },
    right: { minX: 670, minY: 360, maxX: 796, maxY: 485 },
    top: { minX: 581, minY: 194, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 355, maxX: 612, maxY: 486 },
    right: { minX: 670, minY: 358, maxX: 796, maxY: 482 },
    top: { minX: 581, minY: 192, maxX: 709, maxY: 322 },
  },
  {
    left: { minX: 480, minY: 356, maxX: 612, maxY: 486 },
    right: { minX: 669, minY: 359, maxX: 795, maxY: 483 },
    top: { minX: 580, minY: 193, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 611, maxY: 487 },
    right: { minX: 668, minY: 360, maxX: 794, maxY: 484 },
    top: { minX: 579, minY: 195, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 611, maxY: 487 },
    right: { minX: 668, minY: 360, maxX: 794, maxY: 484 },
    top: { minX: 579, minY: 195, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 610, maxY: 487 },
    right: { minX: 668, minY: 360, maxX: 792, maxY: 483 },
    top: { minX: 578, minY: 195, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 478, minY: 357, maxX: 610, maxY: 487 },
    right: { minX: 667, minY: 360, maxX: 792, maxY: 484 },
    top: { minX: 578, minY: 196, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 478, minY: 357, maxX: 609, maxY: 487 },
    right: { minX: 666, minY: 360, maxX: 791, maxY: 484 },
    top: { minX: 577, minY: 195, maxX: 705, maxY: 324 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 610, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 792, maxY: 481 },
    top: { minX: 579, minY: 193, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 610, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 792, maxY: 481 },
    top: { minX: 579, minY: 193, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 354, maxX: 609, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 791, maxY: 480 },
    top: { minX: 578, minY: 193, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 609, maxY: 483 },
    right: { minX: 667, minY: 356, maxX: 791, maxY: 479 },
    top: { minX: 577, minY: 191, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 609, maxY: 483 },
    right: { minX: 667, minY: 357, maxX: 791, maxY: 479 },
    top: { minX: 578, minY: 192, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 356, maxX: 790, maxY: 479 },
    top: { minX: 577, minY: 192, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 478, minY: 354, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 357, maxX: 789, maxY: 479 },
    top: { minX: 577, minY: 193, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 608, maxY: 482 },
    right: { minX: 665, minY: 356, maxX: 788, maxY: 478 },
    top: { minX: 576, minY: 192, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 608, maxY: 481 },
    right: { minX: 664, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 575, minY: 192, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 608, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 575, minY: 192, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 608, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 576, minY: 193, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 609, maxY: 482 },
    right: { minX: 665, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 609, maxY: 481 },
    right: { minX: 665, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 609, maxY: 481 },
    right: { minX: 665, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 609, maxY: 481 },
    right: { minX: 666, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 609, maxY: 481 },
    right: { minX: 666, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 578, minY: 193, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 354, maxX: 609, maxY: 482 },
    right: { minX: 666, minY: 357, maxX: 788, maxY: 478 },
    top: { minX: 578, minY: 195, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 480, minY: 355, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 358, maxX: 788, maxY: 479 },
    top: { minX: 578, minY: 196, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 480, minY: 356, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 359, maxX: 787, maxY: 479 },
    top: { minX: 577, minY: 197, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 610, maxY: 483 },
    right: { minX: 666, minY: 359, maxX: 788, maxY: 479 },
    top: { minX: 579, minY: 197, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 359, maxX: 787, maxY: 479 },
    top: { minX: 578, minY: 197, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 358, maxX: 787, maxY: 479 },
    top: { minX: 577, minY: 197, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 482, minY: 353, maxX: 611, maxY: 481 },
    right: { minX: 666, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 579, minY: 195, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 612, maxY: 480 },
    right: { minX: 667, minY: 356, maxX: 789, maxY: 476 },
    top: { minX: 581, minY: 195, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 612, maxY: 479 },
    right: { minX: 668, minY: 356, maxX: 789, maxY: 476 },
    top: { minX: 581, minY: 195, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 353, maxX: 612, maxY: 479 },
    right: { minX: 668, minY: 355, maxX: 790, maxY: 475 },
    top: { minX: 581, minY: 195, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 612, maxY: 479 },
    right: { minX: 668, minY: 355, maxX: 789, maxY: 475 },
    top: { minX: 581, minY: 195, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 613, maxY: 480 },
    right: { minX: 668, minY: 357, maxX: 789, maxY: 477 },
    top: { minX: 582, minY: 197, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 613, maxY: 480 },
    right: { minX: 668, minY: 357, maxX: 790, maxY: 476 },
    top: { minX: 582, minY: 196, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 614, maxY: 479 },
    right: { minX: 669, minY: 357, maxX: 790, maxY: 476 },
    top: { minX: 583, minY: 197, maxX: 707, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 614, maxY: 480 },
    right: { minX: 669, minY: 358, maxX: 790, maxY: 477 },
    top: { minX: 583, minY: 198, maxX: 707, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 614, maxY: 480 },
    right: { minX: 670, minY: 357, maxX: 790, maxY: 477 },
    top: { minX: 583, minY: 198, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 615, maxY: 479 },
    right: { minX: 669, minY: 357, maxX: 790, maxY: 476 },
    top: { minX: 583, minY: 197, maxX: 707, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 613, maxY: 480 },
    right: { minX: 668, minY: 358, maxX: 788, maxY: 477 },
    top: { minX: 582, minY: 199, maxX: 705, maxY: 323 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 613, maxY: 480 },
    right: { minX: 667, minY: 358, maxX: 787, maxY: 477 },
    top: { minX: 581, minY: 199, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 581, minY: 198, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 484, minY: 355, maxX: 611, maxY: 480 },
    right: { minX: 665, minY: 357, maxX: 785, maxY: 475 },
    top: { minX: 579, minY: 199, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 611, maxY: 479 },
    right: { minX: 666, minY: 356, maxX: 786, maxY: 475 },
    top: { minX: 580, minY: 198, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 356, maxX: 786, maxY: 474 },
    top: { minX: 580, minY: 198, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 611, maxY: 478 },
    right: { minX: 666, minY: 356, maxX: 785, maxY: 474 },
    top: { minX: 580, minY: 198, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 612, maxY: 478 },
    right: { minX: 666, minY: 355, maxX: 785, maxY: 473 },
    top: { minX: 580, minY: 197, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 612, maxY: 478 },
    right: { minX: 666, minY: 356, maxX: 785, maxY: 474 },
    top: { minX: 581, minY: 198, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 357, maxX: 785, maxY: 475 },
    top: { minX: 581, minY: 200, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 581, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 613, maxY: 479 },
    right: { minX: 667, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 582, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 613, maxY: 479 },
    right: { minX: 667, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 582, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 613, maxY: 478 },
    right: { minX: 667, minY: 357, maxX: 785, maxY: 475 },
    top: { minX: 583, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 614, maxY: 478 },
    right: { minX: 668, minY: 358, maxX: 786, maxY: 475 },
    top: { minX: 583, minY: 200, maxX: 705, maxY: 323 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 667, minY: 357, maxX: 786, maxY: 474 },
    top: { minX: 583, minY: 199, maxX: 705, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 667, minY: 356, maxX: 785, maxY: 473 },
    top: { minX: 583, minY: 199, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 667, minY: 357, maxX: 785, maxY: 473 },
    top: { minX: 583, minY: 199, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 352, maxX: 613, maxY: 476 },
    right: { minX: 667, minY: 356, maxX: 786, maxY: 473 },
    top: { minX: 583, minY: 199, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 614, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 786, maxY: 473 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 614, maxY: 476 },
    right: { minX: 668, minY: 356, maxX: 786, maxY: 473 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 615, maxY: 476 },
    right: { minX: 668, minY: 356, maxX: 786, maxY: 473 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 786, maxY: 473 },
    top: { minX: 585, minY: 200, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 491, minY: 354, maxX: 615, maxY: 477 },
    right: { minX: 668, minY: 358, maxX: 786, maxY: 474 },
    top: { minX: 585, minY: 201, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 785, maxY: 473 },
    top: { minX: 585, minY: 201, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 615, maxY: 475 },
    right: { minX: 668, minY: 355, maxX: 786, maxY: 472 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 491, minY: 351, maxX: 615, maxY: 474 },
    right: { minX: 668, minY: 355, maxX: 786, maxY: 470 },
    top: { minX: 585, minY: 198, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 490, minY: 349, maxX: 615, maxY: 472 },
    right: { minX: 668, minY: 353, maxX: 785, maxY: 469 },
    top: { minX: 585, minY: 197, maxX: 706, maxY: 318 },
  },
  {
    left: { minX: 491, minY: 350, maxX: 615, maxY: 472 },
    right: { minX: 668, minY: 353, maxX: 786, maxY: 469 },
    top: { minX: 585, minY: 197, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 492, minY: 350, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 354, maxX: 786, maxY: 470 },
    top: { minX: 586, minY: 198, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 492, minY: 350, maxX: 616, maxY: 473 },
    right: { minX: 669, minY: 354, maxX: 786, maxY: 470 },
    top: { minX: 587, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 355, maxX: 785, maxY: 470 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 350, maxX: 616, maxY: 472 },
    right: { minX: 668, minY: 354, maxX: 785, maxY: 469 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 355, maxX: 785, maxY: 471 },
    top: { minX: 586, minY: 200, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 616, maxY: 474 },
    right: { minX: 669, minY: 355, maxX: 785, maxY: 471 },
    top: { minX: 587, minY: 201, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 616, maxY: 474 },
    right: { minX: 669, minY: 356, maxX: 784, maxY: 471 },
    top: { minX: 587, minY: 201, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 353, maxX: 616, maxY: 474 },
    right: { minX: 668, minY: 357, maxX: 784, maxY: 471 },
    top: { minX: 586, minY: 202, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 354, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 357, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 617, maxY: 474 },
    right: { minX: 669, minY: 357, maxX: 785, maxY: 471 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 475 },
    right: { minX: 669, minY: 357, maxX: 784, maxY: 471 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 204, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 204, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 617, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 204, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 617, maxY: 474 },
    right: { minX: 669, minY: 357, maxX: 785, maxY: 471 },
    top: { minX: 588, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 618, maxY: 474 },
    right: { minX: 670, minY: 357, maxX: 785, maxY: 471 },
    top: { minX: 589, minY: 203, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 617, maxY: 474 },
    right: { minX: 669, minY: 357, maxX: 784, maxY: 471 },
    top: { minX: 588, minY: 204, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 617, maxY: 475 },
    right: { minX: 669, minY: 358, maxX: 784, maxY: 471 },
    top: { minX: 589, minY: 205, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 496, minY: 354, maxX: 618, maxY: 475 },
    right: { minX: 669, minY: 359, maxX: 784, maxY: 472 },
    top: { minX: 589, minY: 205, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 617, maxY: 475 },
    right: { minX: 669, minY: 359, maxX: 784, maxY: 473 },
    top: { minX: 588, minY: 206, maxX: 706, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 668, minY: 360, maxX: 783, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 706, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 668, minY: 359, maxX: 783, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 706, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 667, minY: 359, maxX: 782, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 704, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 356, maxX: 616, maxY: 476 },
    right: { minX: 668, minY: 360, maxX: 782, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 705, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 355, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 359, maxX: 782, maxY: 472 },
    top: { minX: 587, minY: 206, maxX: 705, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 356, maxX: 783, maxY: 470 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 356, maxX: 783, maxY: 469 },
    top: { minX: 587, minY: 203, maxX: 705, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 617, maxY: 472 },
    right: { minX: 669, minY: 356, maxX: 783, maxY: 469 },
    top: { minX: 588, minY: 203, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 618, maxY: 472 },
    right: { minX: 669, minY: 355, maxX: 784, maxY: 469 },
    top: { minX: 588, minY: 203, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 618, maxY: 472 },
    right: { minX: 669, minY: 356, maxX: 784, maxY: 469 },
    top: { minX: 588, minY: 203, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 497, minY: 351, maxX: 619, maxY: 472 },
    right: { minX: 670, minY: 355, maxX: 784, maxY: 469 },
    top: { minX: 589, minY: 203, maxX: 707, maxY: 322 },
  },
  {
    left: { minX: 498, minY: 354, maxX: 619, maxY: 473 },
    right: { minX: 670, minY: 358, maxX: 785, maxY: 471 },
    top: { minX: 590, minY: 205, maxX: 708, maxY: 324 },
  },
  {
    left: { minX: 498, minY: 356, maxX: 619, maxY: 475 },
    right: { minX: 671, minY: 359, maxX: 785, maxY: 472 },
    top: { minX: 591, minY: 207, maxX: 708, maxY: 326 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 620, maxY: 476 },
    right: { minX: 671, minY: 360, maxX: 785, maxY: 473 },
    top: { minX: 591, minY: 209, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 620, maxY: 476 },
    right: { minX: 671, minY: 361, maxX: 785, maxY: 473 },
    top: { minX: 591, minY: 209, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 620, maxY: 476 },
    right: { minX: 671, minY: 361, maxX: 785, maxY: 473 },
    top: { minX: 591, minY: 209, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 500, minY: 356, maxX: 620, maxY: 476 },
    right: { minX: 672, minY: 360, maxX: 786, maxY: 473 },
    top: { minX: 592, minY: 209, maxX: 709, maxY: 327 },
  },
  {
    left: { minX: 500, minY: 356, maxX: 621, maxY: 476 },
    right: { minX: 672, minY: 361, maxX: 786, maxY: 473 },
    top: { minX: 593, minY: 209, maxX: 709, maxY: 327 },
  },
  {
    left: { minX: 502, minY: 357, maxX: 622, maxY: 476 },
    right: { minX: 674, minY: 361, maxX: 788, maxY: 474 },
    top: { minX: 594, minY: 209, maxX: 711, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 623, maxY: 476 },
    right: { minX: 674, minY: 361, maxX: 788, maxY: 474 },
    top: { minX: 595, minY: 209, maxX: 712, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 624, maxY: 476 },
    right: { minX: 675, minY: 361, maxX: 789, maxY: 474 },
    top: { minX: 595, minY: 209, maxX: 712, maxY: 327 },
  },
  {
    left: { minX: 504, minY: 357, maxX: 624, maxY: 476 },
    right: { minX: 676, minY: 361, maxX: 790, maxY: 474 },
    top: { minX: 596, minY: 209, maxX: 713, maxY: 327 },
  },
  {
    left: { minX: 505, minY: 356, maxX: 625, maxY: 476 },
    right: { minX: 676, minY: 361, maxX: 790, maxY: 474 },
    top: { minX: 597, minY: 209, maxX: 714, maxY: 327 },
  },
  {
    left: { minX: 506, minY: 355, maxX: 627, maxY: 475 },
    right: { minX: 678, minY: 360, maxX: 793, maxY: 473 },
    top: { minX: 599, minY: 207, maxX: 716, maxY: 326 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 627, maxY: 474 },
    right: { minX: 678, minY: 360, maxX: 793, maxY: 473 },
    top: { minX: 599, minY: 207, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 680, minY: 359, maxX: 794, maxY: 473 },
    top: { minX: 601, minY: 207, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 509, minY: 354, maxX: 630, maxY: 474 },
    right: { minX: 681, minY: 359, maxX: 795, maxY: 473 },
    top: { minX: 602, minY: 207, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 510, minY: 355, maxX: 630, maxY: 474 },
    right: { minX: 682, minY: 360, maxX: 796, maxY: 473 },
    top: { minX: 603, minY: 207, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 510, minY: 355, maxX: 630, maxY: 474 },
    right: { minX: 681, minY: 360, maxX: 796, maxY: 473 },
    top: { minX: 602, minY: 207, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 509, minY: 354, maxX: 630, maxY: 474 },
    right: { minX: 681, minY: 359, maxX: 796, maxY: 473 },
    top: { minX: 601, minY: 207, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 509, minY: 354, maxX: 630, maxY: 473 },
    right: { minX: 681, minY: 359, maxX: 796, maxY: 472 },
    top: { minX: 601, minY: 206, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 473 },
    right: { minX: 680, minY: 359, maxX: 795, maxY: 472 },
    top: { minX: 600, minY: 206, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 679, minY: 359, maxX: 794, maxY: 472 },
    top: { minX: 599, minY: 207, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 679, minY: 359, maxX: 794, maxY: 472 },
    top: { minX: 600, minY: 207, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 627, maxY: 474 },
    right: { minX: 678, minY: 359, maxX: 793, maxY: 472 },
    top: { minX: 599, minY: 207, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 506, minY: 354, maxX: 627, maxY: 473 },
    right: { minX: 678, minY: 358, maxX: 793, maxY: 471 },
    top: { minX: 599, minY: 206, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 625, maxY: 473 },
    right: { minX: 677, minY: 358, maxX: 792, maxY: 471 },
    top: { minX: 597, minY: 205, maxX: 715, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 353, maxX: 625, maxY: 473 },
    right: { minX: 676, minY: 358, maxX: 791, maxY: 471 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 352, maxX: 625, maxY: 472 },
    right: { minX: 676, minY: 357, maxX: 791, maxY: 470 },
    top: { minX: 597, minY: 203, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 624, maxY: 472 },
    right: { minX: 675, minY: 357, maxX: 790, maxY: 470 },
    top: { minX: 595, minY: 204, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 624, maxY: 473 },
    right: { minX: 675, minY: 357, maxX: 790, maxY: 470 },
    top: { minX: 595, minY: 205, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 354, maxX: 624, maxY: 473 },
    right: { minX: 676, minY: 357, maxX: 790, maxY: 471 },
    top: { minX: 595, minY: 205, maxX: 713, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 354, maxX: 625, maxY: 474 },
    right: { minX: 676, minY: 358, maxX: 791, maxY: 471 },
    top: { minX: 596, minY: 206, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 355, maxX: 625, maxY: 474 },
    right: { minX: 676, minY: 359, maxX: 791, maxY: 472 },
    top: { minX: 596, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 626, maxY: 474 },
    right: { minX: 677, minY: 359, maxX: 792, maxY: 472 },
    top: { minX: 597, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 626, maxY: 474 },
    right: { minX: 678, minY: 359, maxX: 792, maxY: 472 },
    top: { minX: 597, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 625, maxY: 475 },
    right: { minX: 677, minY: 359, maxX: 792, maxY: 472 },
    top: { minX: 596, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 356, maxX: 625, maxY: 475 },
    right: { minX: 676, minY: 359, maxX: 791, maxY: 472 },
    top: { minX: 595, minY: 207, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 504, minY: 356, maxX: 624, maxY: 475 },
    right: { minX: 676, minY: 359, maxX: 790, maxY: 472 },
    top: { minX: 595, minY: 207, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 624, maxY: 475 },
    right: { minX: 675, minY: 359, maxX: 790, maxY: 472 },
    top: { minX: 595, minY: 207, maxX: 712, maxY: 326 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 622, maxY: 475 },
    right: { minX: 673, minY: 359, maxX: 788, maxY: 472 },
    top: { minX: 593, minY: 207, maxX: 710, maxY: 325 },
  },
  {
    left: { minX: 500, minY: 355, maxX: 621, maxY: 475 },
    right: { minX: 673, minY: 359, maxX: 788, maxY: 472 },
    top: { minX: 592, minY: 206, maxX: 710, maxY: 325 },
  },
  {
    left: { minX: 498, minY: 355, maxX: 620, maxY: 475 },
    right: { minX: 672, minY: 359, maxX: 786, maxY: 472 },
    top: { minX: 591, minY: 207, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 497, minY: 355, maxX: 618, maxY: 475 },
    right: { minX: 670, minY: 359, maxX: 785, maxY: 472 },
    top: { minX: 589, minY: 206, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 496, minY: 355, maxX: 617, maxY: 475 },
    right: { minX: 670, minY: 359, maxX: 784, maxY: 472 },
    top: { minX: 588, minY: 206, maxX: 706, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 205, maxX: 705, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 205, maxX: 705, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 474 },
    right: { minX: 668, minY: 357, maxX: 783, maxY: 471 },
    top: { minX: 586, minY: 204, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 356, maxX: 784, maxY: 470 },
    top: { minX: 586, minY: 203, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 356, maxX: 784, maxY: 470 },
    top: { minX: 586, minY: 203, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 615, maxY: 473 },
    right: { minX: 668, minY: 356, maxX: 784, maxY: 470 },
    top: { minX: 585, minY: 202, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 615, maxY: 473 },
    right: { minX: 668, minY: 355, maxX: 784, maxY: 469 },
    top: { minX: 585, minY: 201, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 351, maxX: 615, maxY: 471 },
    right: { minX: 668, minY: 353, maxX: 784, maxY: 468 },
    top: { minX: 585, minY: 200, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 667, minY: 353, maxX: 783, maxY: 468 },
    top: { minX: 585, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 667, minY: 353, maxX: 783, maxY: 468 },
    top: { minX: 585, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 667, minY: 354, maxX: 783, maxY: 469 },
    top: { minX: 585, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 667, minY: 354, maxX: 783, maxY: 469 },
    top: { minX: 585, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 668, minY: 354, maxX: 784, maxY: 469 },
    top: { minX: 585, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 614, maxY: 473 },
    right: { minX: 667, minY: 354, maxX: 783, maxY: 469 },
    top: { minX: 584, minY: 201, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 614, maxY: 473 },
    right: { minX: 667, minY: 355, maxX: 783, maxY: 470 },
    top: { minX: 583, minY: 201, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 614, maxY: 473 },
    right: { minX: 666, minY: 355, maxX: 783, maxY: 470 },
    top: { minX: 583, minY: 201, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 490, minY: 352, maxX: 612, maxY: 474 },
    right: { minX: 666, minY: 355, maxX: 782, maxY: 470 },
    top: { minX: 583, minY: 201, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 612, maxY: 474 },
    right: { minX: 665, minY: 355, maxX: 782, maxY: 471 },
    top: { minX: 582, minY: 201, maxX: 702, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 611, maxY: 474 },
    right: { minX: 664, minY: 356, maxX: 781, maxY: 471 },
    top: { minX: 581, minY: 201, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 475 },
    right: { minX: 663, minY: 356, maxX: 780, maxY: 471 },
    top: { minX: 580, minY: 201, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 609, maxY: 475 },
    right: { minX: 662, minY: 356, maxX: 779, maxY: 471 },
    top: { minX: 579, minY: 201, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 608, maxY: 475 },
    right: { minX: 662, minY: 355, maxX: 779, maxY: 471 },
    top: { minX: 578, minY: 201, maxX: 698, maxY: 322 },
  },
  {
    left: { minX: 484, minY: 352, maxX: 608, maxY: 474 },
    right: { minX: 662, minY: 354, maxX: 778, maxY: 471 },
    top: { minX: 577, minY: 199, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 484, minY: 351, maxX: 608, maxY: 473 },
    right: { minX: 662, minY: 353, maxX: 778, maxY: 470 },
    top: { minX: 577, minY: 199, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 483, minY: 351, maxX: 606, maxY: 473 },
    right: { minX: 660, minY: 354, maxX: 778, maxY: 470 },
    top: { minX: 576, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 483, minY: 351, maxX: 606, maxY: 473 },
    right: { minX: 661, minY: 353, maxX: 778, maxY: 470 },
    top: { minX: 576, minY: 198, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 482, minY: 351, maxX: 606, maxY: 474 },
    right: { minX: 660, minY: 354, maxX: 777, maxY: 471 },
    top: { minX: 575, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 481, minY: 351, maxX: 605, maxY: 474 },
    right: { minX: 660, minY: 354, maxX: 777, maxY: 471 },
    top: { minX: 575, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 482, minY: 351, maxX: 606, maxY: 474 },
    right: { minX: 660, minY: 355, maxX: 778, maxY: 471 },
    top: { minX: 576, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 481, minY: 352, maxX: 606, maxY: 474 },
    right: { minX: 660, minY: 355, maxX: 778, maxY: 471 },
    top: { minX: 575, minY: 198, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 351, maxX: 604, maxY: 474 },
    right: { minX: 659, minY: 354, maxX: 777, maxY: 471 },
    top: { minX: 574, minY: 198, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 351, maxX: 604, maxY: 474 },
    right: { minX: 659, minY: 354, maxX: 777, maxY: 471 },
    top: { minX: 575, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 351, maxX: 605, maxY: 474 },
    right: { minX: 659, minY: 353, maxX: 777, maxY: 470 },
    top: { minX: 574, minY: 197, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 603, maxY: 474 },
    right: { minX: 658, minY: 354, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 352, maxX: 603, maxY: 475 },
    right: { minX: 658, minY: 354, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 352, maxX: 603, maxY: 475 },
    right: { minX: 658, minY: 354, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 352, maxX: 603, maxY: 475 },
    right: { minX: 658, minY: 354, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 352, maxX: 604, maxY: 475 },
    right: { minX: 659, minY: 355, maxX: 777, maxY: 472 },
    top: { minX: 574, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 604, maxY: 476 },
    right: { minX: 658, minY: 355, maxX: 777, maxY: 472 },
    top: { minX: 573, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 604, maxY: 476 },
    right: { minX: 659, minY: 356, maxX: 777, maxY: 473 },
    top: { minX: 573, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 481, minY: 353, maxX: 605, maxY: 476 },
    right: { minX: 660, minY: 356, maxX: 778, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 604, maxY: 477 },
    right: { minX: 658, minY: 357, maxX: 776, maxY: 474 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 603, maxY: 477 },
    right: { minX: 658, minY: 356, maxX: 776, maxY: 473 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 478, minY: 354, maxX: 603, maxY: 477 },
    right: { minX: 657, minY: 357, maxX: 776, maxY: 475 },
    top: { minX: 573, minY: 201, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 478, minY: 354, maxX: 603, maxY: 477 },
    right: { minX: 658, minY: 357, maxX: 776, maxY: 474 },
    top: { minX: 573, minY: 201, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 477, minY: 355, maxX: 602, maxY: 478 },
    right: { minX: 657, minY: 357, maxX: 775, maxY: 475 },
    top: { minX: 571, minY: 201, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 475, minY: 355, maxX: 600, maxY: 478 },
    right: { minX: 655, minY: 358, maxX: 773, maxY: 475 },
    top: { minX: 570, minY: 201, maxX: 691, maxY: 323 },
  },
  {
    left: { minX: 475, minY: 355, maxX: 600, maxY: 478 },
    right: { minX: 655, minY: 357, maxX: 773, maxY: 475 },
    top: { minX: 569, minY: 201, maxX: 691, maxY: 323 },
  },
  {
    left: { minX: 474, minY: 355, maxX: 599, maxY: 478 },
    right: { minX: 654, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 569, minY: 200, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 598, maxY: 478 },
    right: { minX: 653, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 567, minY: 200, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 598, maxY: 478 },
    right: { minX: 653, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 567, minY: 200, maxX: 689, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 597, maxY: 479 },
    right: { minX: 652, minY: 357, maxX: 771, maxY: 476 },
    top: { minX: 567, minY: 201, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 597, maxY: 479 },
    right: { minX: 652, minY: 358, maxX: 771, maxY: 476 },
    top: { minX: 567, minY: 201, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 652, minY: 358, maxX: 771, maxY: 476 },
    top: { minX: 566, minY: 201, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 651, minY: 358, maxX: 770, maxY: 476 },
    top: { minX: 565, minY: 200, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 652, minY: 358, maxX: 771, maxY: 477 },
    top: { minX: 566, minY: 200, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 651, minY: 358, maxX: 770, maxY: 476 },
    top: { minX: 565, minY: 199, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 595, maxY: 479 },
    right: { minX: 651, minY: 358, maxX: 771, maxY: 477 },
    top: { minX: 565, minY: 200, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 356, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 359, maxX: 771, maxY: 478 },
    top: { minX: 566, minY: 202, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 357, maxX: 595, maxY: 481 },
    right: { minX: 651, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 202, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 651, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 566, minY: 203, maxX: 688, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 772, maxY: 479 },
    top: { minX: 566, minY: 202, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 361, maxX: 772, maxY: 479 },
    top: { minX: 566, minY: 202, maxX: 688, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 482 },
    right: { minX: 652, minY: 361, maxX: 772, maxY: 480 },
    top: { minX: 566, minY: 203, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 482 },
    right: { minX: 652, minY: 361, maxX: 772, maxY: 480 },
    top: { minX: 567, minY: 203, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 357, maxX: 596, maxY: 482 },
    right: { minX: 652, minY: 361, maxX: 772, maxY: 479 },
    top: { minX: 566, minY: 202, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 470, minY: 356, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 773, maxY: 479 },
    top: { minX: 567, minY: 201, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 772, maxY: 479 },
    top: { minX: 566, minY: 201, maxX: 689, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 773, maxY: 480 },
    top: { minX: 567, minY: 201, maxX: 689, maxY: 325 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 773, maxY: 480 },
    top: { minX: 567, minY: 201, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 356, maxX: 595, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 772, maxY: 480 },
    top: { minX: 565, minY: 200, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 356, maxX: 595, maxY: 481 },
    right: { minX: 652, minY: 359, maxX: 772, maxY: 479 },
    top: { minX: 565, minY: 199, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 594, maxY: 480 },
    right: { minX: 651, minY: 358, maxX: 772, maxY: 478 },
    top: { minX: 564, minY: 198, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 354, maxX: 594, maxY: 479 },
    right: { minX: 651, minY: 357, maxX: 771, maxY: 477 },
    top: { minX: 563, minY: 197, maxX: 687, maxY: 322 },
  },
  {
    left: { minX: 468, minY: 354, maxX: 595, maxY: 479 },
    right: { minX: 651, minY: 357, maxX: 772, maxY: 477 },
    top: { minX: 564, minY: 197, maxX: 688, maxY: 321 },
  },
  {
    left: { minX: 468, minY: 354, maxX: 595, maxY: 479 },
    right: { minX: 652, minY: 357, maxX: 773, maxY: 477 },
    top: { minX: 565, minY: 197, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 596, maxY: 479 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 477 },
    top: { minX: 566, minY: 197, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 596, maxY: 479 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 477 },
    top: { minX: 566, minY: 197, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 470, minY: 354, maxX: 597, maxY: 480 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 477 },
    top: { minX: 567, minY: 198, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 597, maxY: 480 },
    right: { minX: 653, minY: 358, maxX: 774, maxY: 478 },
    top: { minX: 567, minY: 198, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 598, maxY: 479 },
    right: { minX: 654, minY: 358, maxX: 775, maxY: 478 },
    top: { minX: 567, minY: 198, maxX: 691, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 598, maxY: 479 },
    right: { minX: 654, minY: 357, maxX: 776, maxY: 477 },
    top: { minX: 568, minY: 197, maxX: 692, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 598, maxY: 479 },
    right: { minX: 655, minY: 358, maxX: 776, maxY: 477 },
    top: { minX: 568, minY: 197, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 480 },
    right: { minX: 655, minY: 358, maxX: 776, maxY: 478 },
    top: { minX: 569, minY: 199, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 598, maxY: 480 },
    right: { minX: 655, minY: 359, maxX: 776, maxY: 479 },
    top: { minX: 569, minY: 199, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 480 },
    right: { minX: 655, minY: 359, maxX: 776, maxY: 479 },
    top: { minX: 568, minY: 199, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 472, minY: 356, maxX: 599, maxY: 481 },
    right: { minX: 655, minY: 359, maxX: 776, maxY: 479 },
    top: { minX: 569, minY: 200, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 472, minY: 357, maxX: 599, maxY: 482 },
    right: { minX: 655, minY: 360, maxX: 776, maxY: 480 },
    top: { minX: 568, minY: 201, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 473, minY: 357, maxX: 599, maxY: 482 },
    right: { minX: 655, minY: 360, maxX: 776, maxY: 480 },
    top: { minX: 569, minY: 201, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 358, maxX: 598, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 775, maxY: 480 },
    top: { minX: 568, minY: 202, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 473, minY: 358, maxX: 599, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 776, maxY: 481 },
    top: { minX: 568, minY: 203, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 472, minY: 359, maxX: 599, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 776, maxY: 481 },
    top: { minX: 569, minY: 203, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 472, minY: 359, maxX: 598, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 775, maxY: 481 },
    top: { minX: 568, minY: 203, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 472, minY: 359, maxX: 598, maxY: 484 },
    right: { minX: 655, minY: 361, maxX: 775, maxY: 481 },
    top: { minX: 568, minY: 203, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 597, maxY: 484 },
    right: { minX: 654, minY: 361, maxX: 774, maxY: 481 },
    top: { minX: 567, minY: 203, maxX: 689, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 360, maxX: 596, maxY: 485 },
    right: { minX: 652, minY: 362, maxX: 773, maxY: 482 },
    top: { minX: 565, minY: 204, maxX: 688, maxY: 328 },
  },
  {
    left: { minX: 470, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 652, minY: 363, maxX: 772, maxY: 482 },
    top: { minX: 565, minY: 205, maxX: 688, maxY: 329 },
  },
  {
    left: { minX: 470, minY: 362, maxX: 596, maxY: 486 },
    right: { minX: 652, minY: 363, maxX: 772, maxY: 483 },
    top: { minX: 564, minY: 206, maxX: 687, maxY: 329 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 595, maxY: 487 },
    right: { minX: 651, minY: 364, maxX: 771, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 487 },
    right: { minX: 650, minY: 364, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 486 },
    right: { minX: 650, minY: 363, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 206, maxX: 685, maxY: 329 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 486 },
    right: { minX: 650, minY: 364, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 487 },
    right: { minX: 650, minY: 364, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 363, maxX: 594, maxY: 487 },
    right: { minX: 650, minY: 365, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 363, maxX: 594, maxY: 487 },
    right: { minX: 650, minY: 365, maxX: 770, maxY: 484 },
    top: { minX: 563, minY: 208, maxX: 685, maxY: 331 },
  },
  {
    left: { minX: 468, minY: 363, maxX: 594, maxY: 488 },
    right: { minX: 650, minY: 365, maxX: 770, maxY: 484 },
    top: { minX: 563, minY: 209, maxX: 685, maxY: 331 },
  },
  {
    left: { minX: 468, minY: 364, maxX: 593, maxY: 488 },
    right: { minX: 650, minY: 365, maxX: 769, maxY: 485 },
    top: { minX: 563, minY: 209, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 467, minY: 364, maxX: 593, maxY: 488 },
    right: { minX: 649, minY: 366, maxX: 769, maxY: 485 },
    top: { minX: 563, minY: 209, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 467, minY: 363, maxX: 593, maxY: 487 },
    right: { minX: 649, minY: 365, maxX: 768, maxY: 484 },
    top: { minX: 562, minY: 209, maxX: 684, maxY: 331 },
  },
  {
    left: { minX: 466, minY: 361, maxX: 592, maxY: 486 },
    right: { minX: 648, minY: 364, maxX: 767, maxY: 483 },
    top: { minX: 561, minY: 207, maxX: 683, maxY: 329 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 592, maxY: 484 },
    right: { minX: 648, minY: 362, maxX: 767, maxY: 481 },
    top: { minX: 561, minY: 205, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 592, maxY: 484 },
    right: { minX: 648, minY: 362, maxX: 767, maxY: 481 },
    top: { minX: 561, minY: 205, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 466, minY: 361, maxX: 592, maxY: 484 },
    right: { minX: 648, minY: 363, maxX: 767, maxY: 481 },
    top: { minX: 561, minY: 206, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 465, minY: 361, maxX: 591, maxY: 485 },
    right: { minX: 647, minY: 363, maxX: 766, maxY: 482 },
    top: { minX: 561, minY: 207, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 591, maxY: 484 },
    right: { minX: 647, minY: 363, maxX: 766, maxY: 481 },
    top: { minX: 561, minY: 205, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 592, maxY: 484 },
    right: { minX: 647, minY: 363, maxX: 766, maxY: 481 },
    top: { minX: 561, minY: 206, maxX: 683, maxY: 329 },
  },
  {
    left: { minX: 468, minY: 360, maxX: 593, maxY: 483 },
    right: { minX: 648, minY: 363, maxX: 767, maxY: 481 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 329 },
  },
  {
    left: { minX: 468, minY: 360, maxX: 593, maxY: 483 },
    right: { minX: 648, minY: 363, maxX: 767, maxY: 480 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 593, maxY: 482 },
    right: { minX: 649, minY: 361, maxX: 767, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 361, maxX: 768, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 362, maxX: 768, maxY: 480 },
    top: { minX: 564, minY: 206, maxX: 685, maxY: 328 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 362, maxX: 767, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 361, maxX: 768, maxY: 479 },
    top: { minX: 564, minY: 205, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 363, maxX: 767, maxY: 480 },
    top: { minX: 563, minY: 207, maxX: 684, maxY: 328 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 593, maxY: 482 },
    right: { minX: 648, minY: 362, maxX: 766, maxY: 479 },
    top: { minX: 563, minY: 207, maxX: 684, maxY: 328 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 593, maxY: 481 },
    right: { minX: 648, minY: 361, maxX: 766, maxY: 479 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 481 },
    right: { minX: 648, minY: 361, maxX: 766, maxY: 479 },
    top: { minX: 562, minY: 206, maxX: 683, maxY: 327 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 647, minY: 362, maxX: 765, maxY: 479 },
    top: { minX: 562, minY: 206, maxX: 682, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 647, minY: 362, maxX: 765, maxY: 479 },
    top: { minX: 563, minY: 207, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 481 },
    right: { minX: 647, minY: 361, maxX: 765, maxY: 479 },
    top: { minX: 563, minY: 206, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 358, maxX: 592, maxY: 481 },
    right: { minX: 647, minY: 361, maxX: 765, maxY: 478 },
    top: { minX: 562, minY: 205, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 481 },
    right: { minX: 647, minY: 361, maxX: 765, maxY: 478 },
    top: { minX: 562, minY: 206, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 648, minY: 362, maxX: 765, maxY: 479 },
    top: { minX: 563, minY: 207, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 480 },
    right: { minX: 648, minY: 361, maxX: 766, maxY: 477 },
    top: { minX: 563, minY: 205, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 594, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 564, minY: 205, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 594, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 594, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 594, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 595, maxY: 479 },
    right: { minX: 650, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 595, maxY: 479 },
    right: { minX: 650, minY: 361, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 472, minY: 357, maxX: 595, maxY: 479 },
    right: { minX: 650, minY: 360, maxX: 767, maxY: 476 },
    top: { minX: 566, minY: 205, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 473, minY: 356, maxX: 596, maxY: 478 },
    right: { minX: 651, minY: 359, maxX: 768, maxY: 475 },
    top: { minX: 567, minY: 205, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 473, minY: 356, maxX: 596, maxY: 477 },
    right: { minX: 651, minY: 359, maxX: 768, maxY: 475 },
    top: { minX: 567, minY: 204, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 597, maxY: 477 },
    right: { minX: 651, minY: 359, maxX: 768, maxY: 475 },
    top: { minX: 567, minY: 204, maxX: 687, maxY: 325 },
  },
  {
    left: { minX: 474, minY: 355, maxX: 597, maxY: 477 },
    right: { minX: 652, minY: 359, maxX: 768, maxY: 475 },
    top: { minX: 567, minY: 204, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 476, minY: 353, maxX: 599, maxY: 474 },
    right: { minX: 653, minY: 357, maxX: 770, maxY: 472 },
    top: { minX: 570, minY: 201, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 476, minY: 353, maxX: 599, maxY: 474 },
    right: { minX: 653, minY: 357, maxX: 770, maxY: 472 },
    top: { minX: 570, minY: 202, maxX: 689, maxY: 323 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 599, maxY: 474 },
    right: { minX: 654, minY: 356, maxX: 770, maxY: 471 },
    top: { minX: 570, minY: 201, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 352, maxX: 601, maxY: 473 },
    right: { minX: 655, minY: 355, maxX: 771, maxY: 471 },
    top: { minX: 571, minY: 201, maxX: 691, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 352, maxX: 601, maxY: 473 },
    right: { minX: 655, minY: 356, maxX: 771, maxY: 471 },
    top: { minX: 572, minY: 201, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 600, maxY: 473 },
    right: { minX: 654, minY: 356, maxX: 770, maxY: 471 },
    top: { minX: 571, minY: 202, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 355, maxX: 600, maxY: 475 },
    right: { minX: 654, minY: 358, maxX: 770, maxY: 473 },
    top: { minX: 571, minY: 205, maxX: 690, maxY: 324 },
  },
  {
    left: { minX: 479, minY: 356, maxX: 600, maxY: 476 },
    right: { minX: 654, minY: 359, maxX: 770, maxY: 474 },
    top: { minX: 572, minY: 206, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 479, minY: 356, maxX: 600, maxY: 477 },
    right: { minX: 654, minY: 360, maxX: 770, maxY: 474 },
    top: { minX: 571, minY: 207, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 600, maxY: 477 },
    right: { minX: 654, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 571, minY: 207, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 478, minY: 356, maxX: 600, maxY: 476 },
    right: { minX: 654, minY: 359, maxX: 769, maxY: 473 },
    top: { minX: 571, minY: 205, maxX: 689, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 356, maxX: 601, maxY: 476 },
    right: { minX: 655, minY: 359, maxX: 770, maxY: 474 },
    top: { minX: 572, minY: 207, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 476 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 474 },
    top: { minX: 573, minY: 207, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 603, maxY: 476 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 474 },
    top: { minX: 573, minY: 207, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 355, maxX: 603, maxY: 475 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 473 },
    top: { minX: 574, minY: 206, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 603, maxY: 476 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 474 },
    top: { minX: 574, minY: 207, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 207, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 655, minY: 361, maxX: 770, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 358, maxX: 601, maxY: 478 },
    right: { minX: 655, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 571, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 601, maxY: 477 },
    right: { minX: 655, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 572, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 601, maxY: 477 },
    right: { minX: 655, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 572, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 358, maxX: 601, maxY: 477 },
    right: { minX: 655, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 572, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 361, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 603, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 603, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 358, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 361, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 207, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 602, maxY: 476 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 474 },
    top: { minX: 573, minY: 207, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 602, maxY: 475 },
    right: { minX: 656, minY: 358, maxX: 772, maxY: 473 },
    top: { minX: 573, minY: 205, maxX: 691, maxY: 325 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 602, maxY: 475 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 205, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 354, maxX: 602, maxY: 474 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 602, maxY: 475 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 355, maxX: 603, maxY: 475 },
    right: { minX: 657, minY: 357, maxX: 773, maxY: 473 },
    top: { minX: 574, minY: 205, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 355, maxX: 604, maxY: 475 },
    right: { minX: 658, minY: 357, maxX: 774, maxY: 473 },
    top: { minX: 575, minY: 205, maxX: 693, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 604, maxY: 475 },
    right: { minX: 658, minY: 357, maxX: 774, maxY: 472 },
    top: { minX: 575, minY: 204, maxX: 693, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 604, maxY: 474 },
    right: { minX: 658, minY: 357, maxX: 774, maxY: 471 },
    top: { minX: 575, minY: 203, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 604, maxY: 473 },
    right: { minX: 658, minY: 356, maxX: 774, maxY: 471 },
    top: { minX: 575, minY: 203, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 604, maxY: 473 },
    right: { minX: 658, minY: 356, maxX: 774, maxY: 471 },
    top: { minX: 575, minY: 203, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 482, minY: 353, maxX: 603, maxY: 473 },
    right: { minX: 657, minY: 357, maxX: 773, maxY: 472 },
    top: { minX: 574, minY: 203, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 354, maxX: 603, maxY: 474 },
    right: { minX: 657, minY: 357, maxX: 773, maxY: 472 },
    top: { minX: 574, minY: 204, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 480, minY: 354, maxX: 602, maxY: 474 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 601, maxY: 473 },
    right: { minX: 654, minY: 357, maxX: 771, maxY: 472 },
    top: { minX: 572, minY: 203, maxX: 691, maxY: 323 },
  },
  {
    left: { minX: 476, minY: 353, maxX: 598, maxY: 473 },
    right: { minX: 652, minY: 356, maxX: 769, maxY: 471 },
    top: { minX: 569, minY: 203, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 475, minY: 352, maxX: 598, maxY: 473 },
    right: { minX: 652, minY: 356, maxX: 768, maxY: 471 },
    top: { minX: 569, minY: 202, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 474, minY: 353, maxX: 596, maxY: 473 },
    right: { minX: 651, minY: 356, maxX: 767, maxY: 471 },
    top: { minX: 567, minY: 202, maxX: 686, maxY: 322 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 595, maxY: 474 },
    right: { minX: 650, minY: 356, maxX: 766, maxY: 472 },
    top: { minX: 566, minY: 203, maxX: 685, maxY: 322 },
  },
  {
    left: { minX: 472, minY: 354, maxX: 594, maxY: 475 },
    right: { minX: 649, minY: 357, maxX: 765, maxY: 473 },
    top: { minX: 565, minY: 203, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 593, maxY: 475 },
    right: { minX: 648, minY: 357, maxX: 764, maxY: 473 },
    top: { minX: 564, minY: 203, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 592, maxY: 474 },
    right: { minX: 647, minY: 356, maxX: 764, maxY: 472 },
    top: { minX: 563, minY: 202, maxX: 682, maxY: 322 },
  },
  {
    left: { minX: 467, minY: 353, maxX: 590, maxY: 475 },
    right: { minX: 645, minY: 357, maxX: 762, maxY: 473 },
    top: { minX: 561, minY: 202, maxX: 680, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 353, maxX: 590, maxY: 475 },
    right: { minX: 645, minY: 357, maxX: 761, maxY: 472 },
    top: { minX: 560, minY: 201, maxX: 680, maxY: 323 },
  },
  {
    left: { minX: 466, minY: 353, maxX: 589, maxY: 474 },
    right: { minX: 644, minY: 356, maxX: 761, maxY: 473 },
    top: { minX: 560, minY: 201, maxX: 680, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 353, maxX: 589, maxY: 474 },
    right: { minX: 644, minY: 356, maxX: 760, maxY: 472 },
    top: { minX: 559, minY: 201, maxX: 679, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 353, maxX: 588, maxY: 474 },
    right: { minX: 643, minY: 356, maxX: 760, maxY: 472 },
    top: { minX: 559, minY: 201, maxX: 679, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 353, maxX: 589, maxY: 475 },
    right: { minX: 644, minY: 357, maxX: 762, maxY: 473 },
    top: { minX: 560, minY: 201, maxX: 680, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 354, maxX: 590, maxY: 475 },
    right: { minX: 645, minY: 357, maxX: 763, maxY: 474 },
    top: { minX: 561, minY: 202, maxX: 682, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 592, maxY: 475 },
    right: { minX: 647, minY: 357, maxX: 765, maxY: 474 },
    top: { minX: 563, minY: 202, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 594, maxY: 475 },
    right: { minX: 649, minY: 357, maxX: 767, maxY: 473 },
    top: { minX: 565, minY: 201, maxX: 686, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 596, maxY: 475 },
    right: { minX: 651, minY: 357, maxX: 768, maxY: 474 },
    top: { minX: 567, minY: 201, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 597, maxY: 475 },
    right: { minX: 652, minY: 358, maxX: 769, maxY: 475 },
    top: { minX: 568, minY: 202, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 597, maxY: 475 },
    right: { minX: 652, minY: 357, maxX: 770, maxY: 474 },
    top: { minX: 568, minY: 201, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 474, minY: 354, maxX: 597, maxY: 475 },
    right: { minX: 652, minY: 358, maxX: 770, maxY: 475 },
    top: { minX: 569, minY: 202, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 596, maxY: 476 },
    right: { minX: 651, minY: 359, maxX: 769, maxY: 476 },
    top: { minX: 568, minY: 203, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 596, maxY: 476 },
    right: { minX: 651, minY: 359, maxX: 770, maxY: 476 },
    top: { minX: 568, minY: 203, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 595, maxY: 477 },
    right: { minX: 650, minY: 359, maxX: 768, maxY: 476 },
    top: { minX: 567, minY: 203, maxX: 687, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 594, maxY: 477 },
    right: { minX: 650, minY: 359, maxX: 768, maxY: 477 },
    top: { minX: 566, minY: 203, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 594, maxY: 477 },
    right: { minX: 650, minY: 359, maxX: 768, maxY: 477 },
    top: { minX: 566, minY: 203, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 595, maxY: 477 },
    right: { minX: 650, minY: 359, maxX: 769, maxY: 477 },
    top: { minX: 567, minY: 203, maxX: 687, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 593, maxY: 477 },
    right: { minX: 649, minY: 359, maxX: 767, maxY: 477 },
    top: { minX: 565, minY: 203, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 593, maxY: 477 },
    right: { minX: 648, minY: 359, maxX: 767, maxY: 477 },
    top: { minX: 563, minY: 203, maxX: 685, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 592, maxY: 478 },
    right: { minX: 648, minY: 360, maxX: 767, maxY: 477 },
    top: { minX: 563, minY: 203, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 592, maxY: 477 },
    right: { minX: 648, minY: 359, maxX: 767, maxY: 477 },
    top: { minX: 563, minY: 201, maxX: 684, maxY: 324 },
  },
  {
    left: { minX: 468, minY: 354, maxX: 592, maxY: 476 },
    right: { minX: 648, minY: 358, maxX: 767, maxY: 475 },
    top: { minX: 563, minY: 200, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 594, maxY: 476 },
    right: { minX: 650, minY: 356, maxX: 769, maxY: 474 },
    top: { minX: 564, minY: 199, maxX: 685, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 593, maxY: 476 },
    right: { minX: 650, minY: 356, maxX: 769, maxY: 474 },
    top: { minX: 564, minY: 199, maxX: 685, maxY: 321 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 594, maxY: 475 },
    right: { minX: 650, minY: 355, maxX: 769, maxY: 474 },
    top: { minX: 563, minY: 199, maxX: 685, maxY: 321 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 595, maxY: 475 },
    right: { minX: 651, minY: 355, maxX: 770, maxY: 474 },
    top: { minX: 565, minY: 199, maxX: 687, maxY: 321 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 595, maxY: 477 },
    right: { minX: 651, minY: 357, maxX: 770, maxY: 475 },
    top: { minX: 565, minY: 201, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 357, maxX: 596, maxY: 479 },
    right: { minX: 652, minY: 359, maxX: 771, maxY: 478 },
    top: { minX: 565, minY: 203, maxX: 687, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 358, maxX: 596, maxY: 480 },
    right: { minX: 652, minY: 360, maxX: 771, maxY: 478 },
    top: { minX: 565, minY: 204, maxX: 687, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 595, maxY: 481 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 205, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 563, minY: 204, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 359, maxX: 770, maxY: 478 },
    top: { minX: 563, minY: 203, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 563, minY: 203, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 649, minY: 360, maxX: 769, maxY: 479 },
    top: { minX: 563, minY: 203, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 358, maxX: 593, maxY: 481 },
    right: { minX: 649, minY: 360, maxX: 769, maxY: 479 },
    top: { minX: 562, minY: 203, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 648, minY: 360, maxX: 768, maxY: 479 },
    top: { minX: 561, minY: 203, maxX: 682, maxY: 326 },
  },
  {
    left: { minX: 467, minY: 358, maxX: 592, maxY: 481 },
    right: { minX: 648, minY: 360, maxX: 768, maxY: 479 },
    top: { minX: 561, minY: 203, maxX: 682, maxY: 326 },
  },
  {
    left: { minX: 467, minY: 358, maxX: 591, maxY: 481 },
    right: { minX: 648, minY: 359, maxX: 768, maxY: 478 },
    top: { minX: 560, minY: 203, maxX: 682, maxY: 325 },
  },
  {
    left: { minX: 465, minY: 358, maxX: 591, maxY: 481 },
    right: { minX: 647, minY: 359, maxX: 767, maxY: 478 },
    top: { minX: 559, minY: 202, maxX: 681, maxY: 325 },
  },
  {
    left: { minX: 464, minY: 357, maxX: 589, maxY: 481 },
    right: { minX: 646, minY: 359, maxX: 766, maxY: 478 },
    top: { minX: 558, minY: 201, maxX: 680, maxY: 325 },
  },
  {
    left: { minX: 463, minY: 357, maxX: 589, maxY: 481 },
    right: { minX: 645, minY: 359, maxX: 766, maxY: 478 },
    top: { minX: 557, minY: 201, maxX: 680, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 358, maxX: 588, maxY: 482 },
    right: { minX: 644, minY: 359, maxX: 765, maxY: 479 },
    top: { minX: 556, minY: 202, maxX: 679, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 357, maxX: 587, maxY: 481 },
    right: { minX: 644, minY: 359, maxX: 764, maxY: 479 },
    top: { minX: 555, minY: 201, maxX: 678, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 357, maxX: 586, maxY: 481 },
    right: { minX: 643, minY: 359, maxX: 764, maxY: 478 },
    top: { minX: 555, minY: 201, maxX: 678, maxY: 324 },
  },
  {
    left: { minX: 460, minY: 357, maxX: 586, maxY: 481 },
    right: { minX: 643, minY: 359, maxX: 764, maxY: 479 },
    top: { minX: 555, minY: 200, maxX: 678, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 357, maxX: 585, maxY: 481 },
    right: { minX: 642, minY: 359, maxX: 763, maxY: 479 },
    top: { minX: 554, minY: 200, maxX: 677, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 357, maxX: 585, maxY: 481 },
    right: { minX: 642, minY: 358, maxX: 763, maxY: 479 },
    top: { minX: 553, minY: 200, maxX: 677, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 357, maxX: 584, maxY: 481 },
    right: { minX: 642, minY: 358, maxX: 762, maxY: 478 },
    top: { minX: 553, minY: 199, maxX: 676, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 356, maxX: 584, maxY: 481 },
    right: { minX: 641, minY: 357, maxX: 762, maxY: 478 },
    top: { minX: 552, minY: 199, maxX: 676, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 585, maxY: 480 },
    right: { minX: 642, minY: 357, maxX: 763, maxY: 477 },
    top: { minX: 553, minY: 198, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 585, maxY: 479 },
    right: { minX: 642, minY: 357, maxX: 764, maxY: 477 },
    top: { minX: 553, minY: 197, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 585, maxY: 479 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 477 },
    top: { minX: 553, minY: 197, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 460, minY: 355, maxX: 586, maxY: 480 },
    right: { minX: 644, minY: 357, maxX: 765, maxY: 478 },
    top: { minX: 555, minY: 197, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 586, maxY: 480 },
    right: { minX: 643, minY: 357, maxX: 765, maxY: 478 },
    top: { minX: 554, minY: 198, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 586, maxY: 480 },
    right: { minX: 644, minY: 357, maxX: 765, maxY: 478 },
    top: { minX: 554, minY: 197, maxX: 679, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 586, maxY: 480 },
    right: { minX: 644, minY: 357, maxX: 765, maxY: 479 },
    top: { minX: 555, minY: 198, maxX: 679, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 356, maxX: 585, maxY: 481 },
    right: { minX: 643, minY: 358, maxX: 765, maxY: 479 },
    top: { minX: 554, minY: 198, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 356, maxX: 585, maxY: 481 },
    right: { minX: 643, minY: 357, maxX: 764, maxY: 479 },
    top: { minX: 553, minY: 197, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 356, maxX: 584, maxY: 481 },
    right: { minX: 642, minY: 357, maxX: 764, maxY: 478 },
    top: { minX: 553, minY: 197, maxX: 677, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 355, maxX: 584, maxY: 480 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 478 },
    top: { minX: 552, minY: 197, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 457, minY: 355, maxX: 585, maxY: 480 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 478 },
    top: { minX: 553, minY: 196, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 457, minY: 354, maxX: 584, maxY: 480 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 478 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 456, minY: 353, maxX: 584, maxY: 479 },
    right: { minX: 642, minY: 355, maxX: 764, maxY: 477 },
    top: { minX: 552, minY: 195, maxX: 677, maxY: 321 },
  },
  {
    left: { minX: 456, minY: 353, maxX: 584, maxY: 479 },
    right: { minX: 642, minY: 355, maxX: 765, maxY: 477 },
    top: { minX: 553, minY: 193, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 456, minY: 352, maxX: 584, maxY: 478 },
    right: { minX: 642, minY: 354, maxX: 765, maxY: 476 },
    top: { minX: 553, minY: 193, maxX: 678, maxY: 319 },
  },
  {
    left: { minX: 456, minY: 352, maxX: 584, maxY: 477 },
    right: { minX: 642, minY: 353, maxX: 765, maxY: 476 },
    top: { minX: 552, minY: 192, maxX: 678, maxY: 319 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 584, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 475 },
    top: { minX: 551, minY: 191, maxX: 677, maxY: 318 },
  },
  {
    left: { minX: 454, minY: 351, maxX: 583, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 475 },
    top: { minX: 551, minY: 191, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 455, minY: 352, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 354, maxX: 764, maxY: 476 },
    top: { minX: 551, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 354, maxX: 764, maxY: 476 },
    top: { minX: 551, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 354, maxX: 764, maxY: 476 },
    top: { minX: 551, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 193, maxX: 677, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 582, maxY: 479 },
    right: { minX: 640, minY: 355, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 193, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 582, maxY: 479 },
    right: { minX: 640, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 193, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 352, maxX: 581, maxY: 479 },
    right: { minX: 639, minY: 354, maxX: 763, maxY: 477 },
    top: { minX: 549, minY: 193, maxX: 675, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 352, maxX: 581, maxY: 478 },
    right: { minX: 640, minY: 354, maxX: 763, maxY: 477 },
    top: { minX: 549, minY: 191, maxX: 675, maxY: 319 },
  },
  {
    left: { minX: 452, minY: 352, maxX: 581, maxY: 478 },
    right: { minX: 640, minY: 354, maxX: 763, maxY: 477 },
    top: { minX: 549, minY: 192, maxX: 675, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 352, maxX: 582, maxY: 478 },
    right: { minX: 640, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 550, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 582, maxY: 478 },
    right: { minX: 640, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 351, maxX: 583, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 476 },
    top: { minX: 551, minY: 191, maxX: 677, maxY: 318 },
  },
  {
    left: { minX: 454, minY: 351, maxX: 583, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 765, maxY: 476 },
    top: { minX: 551, minY: 191, maxX: 677, maxY: 318 },
  },
  {
    left: { minX: 454, minY: 350, maxX: 583, maxY: 476 },
    right: { minX: 641, minY: 352, maxX: 765, maxY: 475 },
    top: { minX: 551, minY: 189, maxX: 677, maxY: 317 },
  },
  {
    left: { minX: 453, minY: 350, maxX: 582, maxY: 477 },
    right: { minX: 640, minY: 352, maxX: 764, maxY: 475 },
    top: { minX: 550, minY: 189, maxX: 676, maxY: 317 },
  },
  {
    left: { minX: 453, minY: 351, maxX: 582, maxY: 478 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 476 },
    top: { minX: 550, minY: 191, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 452, minY: 353, maxX: 581, maxY: 479 },
    right: { minX: 639, minY: 355, maxX: 763, maxY: 477 },
    top: { minX: 549, minY: 193, maxX: 675, maxY: 319 },
  },
  {
    left: { minX: 452, minY: 354, maxX: 581, maxY: 480 },
    right: { minX: 639, minY: 356, maxX: 763, maxY: 479 },
    top: { minX: 549, minY: 193, maxX: 675, maxY: 321 },
  },
  {
    left: { minX: 451, minY: 354, maxX: 579, maxY: 481 },
    right: { minX: 638, minY: 356, maxX: 762, maxY: 479 },
    top: { minX: 547, minY: 193, maxX: 674, maxY: 321 },
  },
  {
    left: { minX: 450, minY: 354, maxX: 579, maxY: 481 },
    right: { minX: 638, minY: 356, maxX: 761, maxY: 479 },
    top: { minX: 547, minY: 193, maxX: 673, maxY: 321 },
  },
  {
    left: { minX: 449, minY: 354, maxX: 579, maxY: 481 },
    right: { minX: 637, minY: 355, maxX: 761, maxY: 479 },
    top: { minX: 547, minY: 193, maxX: 673, maxY: 321 },
  },
  {
    left: { minX: 449, minY: 354, maxX: 578, maxY: 481 },
    right: { minX: 637, minY: 356, maxX: 761, maxY: 479 },
    top: { minX: 546, minY: 193, maxX: 672, maxY: 321 },
  },
  {
    left: { minX: 448, minY: 354, maxX: 577, maxY: 481 },
    right: { minX: 636, minY: 356, maxX: 760, maxY: 479 },
    top: { minX: 545, minY: 193, maxX: 672, maxY: 321 },
  },
  {
    left: { minX: 447, minY: 355, maxX: 577, maxY: 482 },
    right: { minX: 636, minY: 356, maxX: 760, maxY: 479 },
    top: { minX: 545, minY: 193, maxX: 671, maxY: 321 },
  },
  {
    left: { minX: 446, minY: 355, maxX: 576, maxY: 482 },
    right: { minX: 635, minY: 356, maxX: 759, maxY: 479 },
    top: { minX: 543, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 447, minY: 354, maxX: 576, maxY: 481 },
    right: { minX: 635, minY: 356, maxX: 759, maxY: 479 },
    top: { minX: 544, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 446, minY: 354, maxX: 576, maxY: 481 },
    right: { minX: 635, minY: 355, maxX: 759, maxY: 479 },
    top: { minX: 543, minY: 192, maxX: 670, maxY: 320 },
  },
  {
    left: { minX: 446, minY: 354, maxX: 576, maxY: 482 },
    right: { minX: 635, minY: 356, maxX: 759, maxY: 479 },
    top: { minX: 543, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 446, minY: 355, maxX: 576, maxY: 483 },
    right: { minX: 635, minY: 356, maxX: 759, maxY: 480 },
    top: { minX: 543, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 445, minY: 354, maxX: 576, maxY: 482 },
    right: { minX: 634, minY: 356, maxX: 759, maxY: 480 },
    top: { minX: 543, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 444, minY: 354, maxX: 575, maxY: 482 },
    right: { minX: 634, minY: 355, maxX: 758, maxY: 479 },
    top: { minX: 541, minY: 192, maxX: 669, maxY: 320 },
  },
  {
    left: { minX: 445, minY: 353, maxX: 576, maxY: 481 },
    right: { minX: 635, minY: 354, maxX: 760, maxY: 479 },
    top: { minX: 542, minY: 191, maxX: 670, maxY: 319 },
  },
  {
    left: { minX: 446, minY: 353, maxX: 577, maxY: 480 },
    right: { minX: 636, minY: 353, maxX: 760, maxY: 477 },
    top: { minX: 543, minY: 189, maxX: 670, maxY: 319 },
  },
  {
    left: { minX: 447, minY: 353, maxX: 577, maxY: 480 },
    right: { minX: 636, minY: 353, maxX: 761, maxY: 478 },
    top: { minX: 543, minY: 189, maxX: 671, maxY: 318 },
  },
  {
    left: { minX: 449, minY: 353, maxX: 579, maxY: 481 },
    right: { minX: 638, minY: 354, maxX: 763, maxY: 479 },
    top: { minX: 545, minY: 191, maxX: 674, maxY: 319 },
  },
  {
    left: { minX: 452, minY: 354, maxX: 582, maxY: 482 },
    right: { minX: 641, minY: 355, maxX: 765, maxY: 480 },
    top: { minX: 549, minY: 192, maxX: 676, maxY: 321 },
  },
  {
    left: { minX: 455, minY: 355, maxX: 585, maxY: 482 },
    right: { minX: 643, minY: 356, maxX: 768, maxY: 481 },
    top: { minX: 552, minY: 193, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 589, maxY: 482 },
    right: { minX: 647, minY: 356, maxX: 772, maxY: 481 },
    top: { minX: 555, minY: 193, maxX: 683, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 355, maxX: 589, maxY: 482 },
    right: { minX: 648, minY: 356, maxX: 774, maxY: 481 },
    top: { minX: 557, minY: 193, maxX: 684, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 590, maxY: 482 },
    right: { minX: 648, minY: 356, maxX: 774, maxY: 480 },
    top: { minX: 557, minY: 193, maxX: 684, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 355, maxX: 589, maxY: 482 },
    right: { minX: 648, minY: 355, maxX: 773, maxY: 479 },
    top: { minX: 556, minY: 193, maxX: 683, maxY: 320 },
  },
  {
    left: { minX: 460, minY: 355, maxX: 589, maxY: 482 },
    right: { minX: 648, minY: 355, maxX: 773, maxY: 480 },
    top: { minX: 555, minY: 193, maxX: 682, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 647, minY: 356, maxX: 772, maxY: 480 },
    top: { minX: 555, minY: 193, maxX: 682, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 647, minY: 356, maxX: 772, maxY: 480 },
    top: { minX: 554, minY: 193, maxX: 681, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 646, minY: 355, maxX: 772, maxY: 479 },
    top: { minX: 553, minY: 193, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 646, minY: 356, maxX: 772, maxY: 480 },
    top: { minX: 553, minY: 193, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 458, minY: 356, maxX: 587, maxY: 483 },
    right: { minX: 646, minY: 355, maxX: 771, maxY: 480 },
    top: { minX: 553, minY: 193, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 587, maxY: 482 },
    right: { minX: 646, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 192, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 354, maxX: 589, maxY: 481 },
    right: { minX: 647, minY: 354, maxX: 773, maxY: 478 },
    top: { minX: 555, minY: 191, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 354, maxX: 589, maxY: 481 },
    right: { minX: 647, minY: 353, maxX: 773, maxY: 478 },
    top: { minX: 555, minY: 191, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 354, maxX: 589, maxY: 481 },
    right: { minX: 648, minY: 354, maxX: 773, maxY: 478 },
    top: { minX: 555, minY: 191, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 353, maxX: 589, maxY: 480 },
    right: { minX: 648, minY: 353, maxX: 774, maxY: 477 },
    top: { minX: 555, minY: 190, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 590, maxY: 479 },
    right: { minX: 649, minY: 351, maxX: 774, maxY: 476 },
    top: { minX: 555, minY: 188, maxX: 683, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 350, maxX: 590, maxY: 477 },
    right: { minX: 649, minY: 350, maxX: 774, maxY: 475 },
    top: { minX: 555, minY: 187, maxX: 683, maxY: 316 },
  },
  {
    left: { minX: 460, minY: 348, maxX: 590, maxY: 476 },
    right: { minX: 649, minY: 348, maxX: 775, maxY: 473 },
    top: { minX: 555, minY: 184, maxX: 683, maxY: 313 },
  },
  {
    left: { minX: 460, minY: 346, maxX: 590, maxY: 474 },
    right: { minX: 649, minY: 346, maxX: 775, maxY: 471 },
    top: { minX: 555, minY: 181, maxX: 684, maxY: 311 },
  },
  {
    left: { minX: 460, minY: 346, maxX: 590, maxY: 474 },
    right: { minX: 649, minY: 346, maxX: 775, maxY: 471 },
    top: { minX: 555, minY: 181, maxX: 683, maxY: 311 },
  },
  {
    left: { minX: 459, minY: 346, maxX: 589, maxY: 474 },
    right: { minX: 648, minY: 346, maxX: 774, maxY: 471 },
    top: { minX: 555, minY: 181, maxX: 683, maxY: 312 },
  },
  {
    left: { minX: 459, minY: 347, maxX: 589, maxY: 475 },
    right: { minX: 648, minY: 347, maxX: 774, maxY: 471 },
    top: { minX: 554, minY: 182, maxX: 682, maxY: 312 },
  },
  {
    left: { minX: 458, minY: 347, maxX: 588, maxY: 475 },
    right: { minX: 647, minY: 346, maxX: 773, maxY: 471 },
    top: { minX: 553, minY: 182, maxX: 681, maxY: 312 },
  },
  {
    left: { minX: 459, minY: 345, maxX: 589, maxY: 473 },
    right: { minX: 648, minY: 344, maxX: 775, maxY: 469 },
    top: { minX: 555, minY: 179, maxX: 683, maxY: 310 },
  },
  {
    left: { minX: 459, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 775, maxY: 469 },
    top: { minX: 555, minY: 177, maxX: 683, maxY: 308 },
  },
  {
    left: { minX: 460, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 776, maxY: 468 },
    top: { minX: 555, minY: 177, maxX: 684, maxY: 308 },
  },
  {
    left: { minX: 460, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 555, minY: 177, maxX: 684, maxY: 308 },
  },
  {
    left: { minX: 460, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 650, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 556, minY: 177, maxX: 684, maxY: 308 },
  },
  {
    left: { minX: 461, minY: 343, maxX: 591, maxY: 471 },
    right: { minX: 650, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 556, minY: 178, maxX: 684, maxY: 309 },
  },
  {
    left: { minX: 461, minY: 342, maxX: 591, maxY: 470 },
    right: { minX: 650, minY: 342, maxX: 776, maxY: 467 },
    top: { minX: 556, minY: 176, maxX: 684, maxY: 307 },
  },
  {
    left: { minX: 460, minY: 339, maxX: 590, maxY: 467 },
    right: { minX: 650, minY: 339, maxX: 776, maxY: 464 },
    top: { minX: 555, minY: 172, maxX: 684, maxY: 304 },
  },
  {
    left: { minX: 459, minY: 336, maxX: 590, maxY: 465 },
    right: { minX: 649, minY: 336, maxX: 776, maxY: 462 },
    top: { minX: 555, minY: 170, maxX: 684, maxY: 301 },
  },
  {
    left: { minX: 460, minY: 335, maxX: 591, maxY: 464 },
    right: { minX: 650, minY: 335, maxX: 777, maxY: 461 },
    top: { minX: 556, minY: 168, maxX: 685, maxY: 300 },
  },
  {
    left: { minX: 460, minY: 336, maxX: 590, maxY: 464 },
    right: { minX: 650, minY: 336, maxX: 776, maxY: 461 },
    top: { minX: 555, minY: 169, maxX: 684, maxY: 301 },
  },
  {
    left: { minX: 460, minY: 338, maxX: 590, maxY: 466 },
    right: { minX: 650, minY: 337, maxX: 776, maxY: 463 },
    top: { minX: 555, minY: 171, maxX: 684, maxY: 302 },
  },
  {
    left: { minX: 460, minY: 338, maxX: 590, maxY: 467 },
    right: { minX: 649, minY: 338, maxX: 776, maxY: 464 },
    top: { minX: 555, minY: 172, maxX: 684, maxY: 303 },
  },
  {
    left: { minX: 459, minY: 340, maxX: 590, maxY: 468 },
    right: { minX: 649, minY: 339, maxX: 776, maxY: 465 },
    top: { minX: 555, minY: 173, maxX: 684, maxY: 304 },
  },
  {
    left: { minX: 459, minY: 341, maxX: 590, maxY: 469 },
    right: { minX: 649, minY: 340, maxX: 776, maxY: 466 },
    top: { minX: 553, minY: 174, maxX: 683, maxY: 306 },
  },
  {
    left: { minX: 459, minY: 344, maxX: 589, maxY: 473 },
    right: { minX: 648, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 553, minY: 177, maxX: 682, maxY: 309 },
  },
  {
    left: { minX: 458, minY: 353, maxX: 588, maxY: 481 },
    right: { minX: 647, minY: 351, maxX: 774, maxY: 477 },
    top: { minX: 553, minY: 187, maxX: 682, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 352, maxX: 589, maxY: 480 },
    right: { minX: 648, minY: 349, maxX: 775, maxY: 476 },
    top: { minX: 553, minY: 185, maxX: 682, maxY: 316 },
  },
  {
    left: { minX: 458, minY: 351, maxX: 589, maxY: 479 },
    right: { minX: 648, minY: 348, maxX: 774, maxY: 474 },
    top: { minX: 552, minY: 183, maxX: 681, maxY: 314 },
  },
  {
    left: { minX: 459, minY: 349, maxX: 589, maxY: 477 },
    right: { minX: 649, minY: 347, maxX: 775, maxY: 473 },
    top: { minX: 552, minY: 182, maxX: 682, maxY: 313 },
  },
  {
    left: { minX: 459, minY: 349, maxX: 590, maxY: 477 },
    right: { minX: 649, minY: 347, maxX: 776, maxY: 472 },
    top: { minX: 553, minY: 181, maxX: 682, maxY: 312 },
  },
  {
    left: { minX: 459, minY: 349, maxX: 590, maxY: 477 },
    right: { minX: 649, minY: 347, maxX: 775, maxY: 472 },
    top: { minX: 553, minY: 181, maxX: 682, maxY: 313 },
  },
  {
    left: { minX: 461, minY: 349, maxX: 591, maxY: 477 },
    right: { minX: 650, minY: 347, maxX: 776, maxY: 473 },
    top: { minX: 554, minY: 183, maxX: 684, maxY: 313 },
  },
  {
    left: { minX: 462, minY: 348, maxX: 592, maxY: 476 },
    right: { minX: 651, minY: 347, maxX: 778, maxY: 472 },
    top: { minX: 555, minY: 181, maxX: 685, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 347, maxX: 593, maxY: 475 },
    right: { minX: 652, minY: 345, maxX: 778, maxY: 471 },
    top: { minX: 556, minY: 180, maxX: 685, maxY: 311 },
  },
  {
    left: { minX: 465, minY: 346, maxX: 594, maxY: 474 },
    right: { minX: 654, minY: 344, maxX: 780, maxY: 470 },
    top: { minX: 558, minY: 179, maxX: 687, maxY: 310 },
  },
  {
    left: { minX: 468, minY: 344, maxX: 598, maxY: 472 },
    right: { minX: 657, minY: 342, maxX: 785, maxY: 468 },
    top: { minX: 561, minY: 176, maxX: 691, maxY: 308 },
  },
  {
    left: { minX: 470, minY: 343, maxX: 600, maxY: 471 },
    right: { minX: 659, minY: 341, maxX: 787, maxY: 468 },
    top: { minX: 563, minY: 175, maxX: 694, maxY: 307 },
  },
  {
    left: { minX: 472, minY: 345, maxX: 602, maxY: 473 },
    right: { minX: 661, minY: 343, maxX: 789, maxY: 469 },
    top: { minX: 565, minY: 176, maxX: 696, maxY: 309 },
  },
  {
    left: { minX: 472, minY: 345, maxX: 602, maxY: 474 },
    right: { minX: 662, minY: 344, maxX: 790, maxY: 470 },
    top: { minX: 566, minY: 177, maxX: 696, maxY: 309 },
  },
  {
    left: { minX: 474, minY: 346, maxX: 604, maxY: 474 },
    right: { minX: 663, minY: 344, maxX: 792, maxY: 471 },
    top: { minX: 567, minY: 177, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 476, minY: 344, maxX: 606, maxY: 473 },
    right: { minX: 666, minY: 342, maxX: 795, maxY: 469 },
    top: { minX: 569, minY: 174, maxX: 701, maxY: 308 },
  },
  {
    left: { minX: 476, minY: 344, maxX: 606, maxY: 473 },
    right: { minX: 666, minY: 342, maxX: 796, maxY: 470 },
    top: { minX: 569, minY: 174, maxX: 701, maxY: 308 },
  },
  {
    left: { minX: 475, minY: 347, maxX: 606, maxY: 476 },
    right: { minX: 666, minY: 345, maxX: 796, maxY: 473 },
    top: { minX: 569, minY: 176, maxX: 701, maxY: 310 },
  },
  {
    left: { minX: 476, minY: 348, maxX: 608, maxY: 477 },
    right: { minX: 667, minY: 346, maxX: 797, maxY: 474 },
    top: { minX: 570, minY: 177, maxX: 702, maxY: 311 },
  },
  {
    left: { minX: 478, minY: 348, maxX: 609, maxY: 479 },
    right: { minX: 670, minY: 346, maxX: 800, maxY: 475 },
    top: { minX: 571, minY: 177, maxX: 704, maxY: 311 },
  },
  {
    left: { minX: 478, minY: 349, maxX: 609, maxY: 480 },
    right: { minX: 670, minY: 347, maxX: 800, maxY: 476 },
    top: { minX: 572, minY: 177, maxX: 705, maxY: 312 },
  },
  {
    left: { minX: 477, minY: 352, maxX: 609, maxY: 483 },
    right: { minX: 669, minY: 349, maxX: 800, maxY: 479 },
    top: { minX: 571, minY: 179, maxX: 704, maxY: 315 },
  },
  {
    left: { minX: 476, minY: 354, maxX: 609, maxY: 485 },
    right: { minX: 670, minY: 352, maxX: 801, maxY: 481 },
    top: { minX: 571, minY: 181, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 478, minY: 356, maxX: 611, maxY: 487 },
    right: { minX: 671, minY: 353, maxX: 804, maxY: 484 },
    top: { minX: 573, minY: 183, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 479, minY: 358, maxX: 612, maxY: 490 },
    right: { minX: 673, minY: 355, maxX: 805, maxY: 486 },
    top: { minX: 574, minY: 185, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 613, maxY: 491 },
    right: { minX: 674, minY: 357, maxX: 807, maxY: 488 },
    top: { minX: 575, minY: 185, maxX: 709, maxY: 322 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 613, maxY: 493 },
    right: { minX: 674, minY: 358, maxX: 808, maxY: 489 },
    top: { minX: 575, minY: 186, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 360, maxX: 615, maxY: 492 },
    right: { minX: 676, minY: 357, maxX: 810, maxY: 489 },
    top: { minX: 577, minY: 184, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 678, minY: 357, maxX: 813, maxY: 490 },
    top: { minX: 579, minY: 183, maxX: 715, maxY: 321 },
  },
  {
    left: { minX: 481, minY: 360, maxX: 616, maxY: 493 },
    right: { minX: 677, minY: 358, maxX: 812, maxY: 491 },
    top: { minX: 577, minY: 183, maxX: 714, maxY: 322 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 616, maxY: 493 },
    right: { minX: 678, minY: 358, maxX: 814, maxY: 492 },
    top: { minX: 578, minY: 183, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 359, maxX: 615, maxY: 494 },
    right: { minX: 677, minY: 359, maxX: 813, maxY: 493 },
    top: { minX: 577, minY: 183, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 477, minY: 361, maxX: 613, maxY: 495 },
    right: { minX: 676, minY: 359, maxX: 812, maxY: 494 },
    top: { minX: 575, minY: 183, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 474, minY: 361, maxX: 611, maxY: 496 },
    right: { minX: 674, minY: 360, maxX: 811, maxY: 495 },
    top: { minX: 573, minY: 182, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 360, maxX: 610, maxY: 497 },
    right: { minX: 673, minY: 359, maxX: 810, maxY: 495 },
    top: { minX: 571, minY: 181, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 360, maxX: 608, maxY: 498 },
    right: { minX: 672, minY: 359, maxX: 810, maxY: 497 },
    top: { minX: 569, minY: 180, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 361, maxX: 608, maxY: 498 },
    right: { minX: 672, minY: 360, maxX: 810, maxY: 497 },
    top: { minX: 569, minY: 179, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 468, minY: 360, maxX: 607, maxY: 498 },
    right: { minX: 672, minY: 359, maxX: 811, maxY: 498 },
    top: { minX: 569, minY: 178, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 468, minY: 360, maxX: 608, maxY: 499 },
    right: { minX: 672, minY: 360, maxX: 812, maxY: 499 },
    top: { minX: 569, minY: 177, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 361, maxX: 607, maxY: 500 },
    right: { minX: 671, minY: 361, maxX: 812, maxY: 500 },
    top: { minX: 568, minY: 178, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 465, minY: 362, maxX: 606, maxY: 502 },
    right: { minX: 671, minY: 361, maxX: 813, maxY: 501 },
    top: { minX: 567, minY: 177, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 362, maxX: 606, maxY: 502 },
    right: { minX: 671, minY: 361, maxX: 813, maxY: 502 },
    top: { minX: 566, minY: 177, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 362, maxX: 606, maxY: 503 },
    right: { minX: 672, minY: 361, maxX: 815, maxY: 503 },
    top: { minX: 566, minY: 175, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 464, minY: 363, maxX: 608, maxY: 505 },
    right: { minX: 674, minY: 363, maxX: 818, maxY: 505 },
    top: { minX: 567, minY: 176, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 463, minY: 364, maxX: 608, maxY: 507 },
    right: { minX: 673, minY: 363, maxX: 819, maxY: 507 },
    top: { minX: 567, minY: 175, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 365, maxX: 607, maxY: 509 },
    right: { minX: 674, minY: 365, maxX: 820, maxY: 509 },
    top: { minX: 567, minY: 176, maxX: 715, maxY: 326 },
  },
  {
    left: { minX: 461, minY: 367, maxX: 607, maxY: 511 },
    right: { minX: 674, minY: 367, maxX: 819, maxY: 511 },
    top: { minX: 567, minY: 177, maxX: 714, maxY: 327 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 605, maxY: 515 },
    right: { minX: 673, minY: 369, maxX: 819, maxY: 515 },
    top: { minX: 565, minY: 179, maxX: 713, maxY: 330 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 605, maxY: 518 },
    right: { minX: 672, minY: 372, maxX: 819, maxY: 518 },
    top: { minX: 563, minY: 181, maxX: 712, maxY: 332 },
  },
  {
    left: { minX: 455, minY: 377, maxX: 603, maxY: 523 },
    right: { minX: 670, minY: 376, maxX: 819, maxY: 523 },
    top: { minX: 561, minY: 185, maxX: 711, maxY: 336 },
  },
  {
    left: { minX: 453, minY: 378, maxX: 602, maxY: 525 },
    right: { minX: 670, minY: 377, maxX: 818, maxY: 525 },
    top: { minX: 560, minY: 185, maxX: 710, maxY: 337 },
  },
  {
    left: { minX: 452, minY: 380, maxX: 601, maxY: 528 },
    right: { minX: 669, minY: 379, maxX: 819, maxY: 528 },
    top: { minX: 559, minY: 187, maxX: 710, maxY: 339 },
  },
  {
    left: { minX: 451, minY: 381, maxX: 601, maxY: 529 },
    right: { minX: 669, minY: 380, maxX: 820, maxY: 529 },
    top: { minX: 559, minY: 187, maxX: 710, maxY: 340 },
  },
  {
    left: { minX: 451, minY: 380, maxX: 601, maxY: 530 },
    right: { minX: 670, minY: 380, maxX: 822, maxY: 530 },
    top: { minX: 559, minY: 185, maxX: 712, maxY: 339 },
  },
  {
    left: { minX: 451, minY: 381, maxX: 603, maxY: 531 },
    right: { minX: 672, minY: 380, maxX: 824, maxY: 532 },
    top: { minX: 561, minY: 185, maxX: 714, maxY: 339 },
  },
  {
    left: { minX: 452, minY: 381, maxX: 604, maxY: 531 },
    right: { minX: 674, minY: 381, maxX: 827, maxY: 533 },
    top: { minX: 562, minY: 184, maxX: 716, maxY: 339 },
  },
  {
    left: { minX: 453, minY: 381, maxX: 606, maxY: 532 },
    right: { minX: 676, minY: 381, maxX: 829, maxY: 534 },
    top: { minX: 564, minY: 184, maxX: 718, maxY: 339 },
  },
  {
    left: { minX: 454, minY: 382, maxX: 607, maxY: 534 },
    right: { minX: 677, minY: 382, maxX: 832, maxY: 535 },
    top: { minX: 565, minY: 184, maxX: 720, maxY: 340 },
  },
  {
    left: { minX: 455, minY: 382, maxX: 609, maxY: 534 },
    right: { minX: 679, minY: 382, maxX: 834, maxY: 536 },
    top: { minX: 567, minY: 184, maxX: 722, maxY: 340 },
  },
  {
    left: { minX: 458, minY: 381, maxX: 612, maxY: 534 },
    right: { minX: 683, minY: 382, maxX: 839, maxY: 537 },
    top: { minX: 570, minY: 182, maxX: 726, maxY: 340 },
  },
  {
    left: { minX: 460, minY: 381, maxX: 615, maxY: 536 },
    right: { minX: 686, minY: 382, maxX: 844, maxY: 538 },
    top: { minX: 573, minY: 181, maxX: 730, maxY: 340 },
  },
  {
    left: { minX: 464, minY: 382, maxX: 620, maxY: 538 },
    right: { minX: 692, minY: 384, maxX: 851, maxY: 541 },
    top: { minX: 578, minY: 181, maxX: 736, maxY: 341 },
  },
  {
    left: { minX: 466, minY: 383, maxX: 622, maxY: 539 },
    right: { minX: 695, minY: 384, maxX: 855, maxY: 543 },
    top: { minX: 581, minY: 181, maxX: 740, maxY: 341 },
  },
  {
    left: { minX: 467, minY: 384, maxX: 624, maxY: 541 },
    right: { minX: 697, minY: 385, maxX: 858, maxY: 545 },
    top: { minX: 582, minY: 180, maxX: 742, maxY: 342 },
  },
  {
    left: { minX: 466, minY: 386, maxX: 624, maxY: 544 },
    right: { minX: 697, minY: 387, maxX: 860, maxY: 547 },
    top: { minX: 581, minY: 181, maxX: 742, maxY: 343 },
  },
  {
    left: { minX: 465, minY: 387, maxX: 624, maxY: 546 },
    right: { minX: 698, minY: 388, maxX: 861, maxY: 549 },
    top: { minX: 581, minY: 181, maxX: 743, maxY: 343 },
  },
  {
    left: { minX: 463, minY: 388, maxX: 623, maxY: 548 },
    right: { minX: 697, minY: 388, maxX: 861, maxY: 551 },
    top: { minX: 579, minY: 180, maxX: 742, maxY: 344 },
  },
  {
    left: { minX: 459, minY: 389, maxX: 620, maxY: 550 },
    right: { minX: 694, minY: 389, maxX: 859, maxY: 552 },
    top: { minX: 577, minY: 180, maxX: 740, maxY: 345 },
  },
  {
    left: { minX: 452, minY: 388, maxX: 616, maxY: 551 },
    right: { minX: 691, minY: 389, maxX: 857, maxY: 553 },
    top: { minX: 571, minY: 177, maxX: 738, maxY: 344 },
  },
  {
    left: { minX: 450, minY: 388, maxX: 614, maxY: 552 },
    right: { minX: 689, minY: 389, maxX: 856, maxY: 554 },
    top: { minX: 569, minY: 177, maxX: 736, maxY: 344 },
  },
  {
    left: { minX: 442, minY: 391, maxX: 608, maxY: 556 },
    right: { minX: 684, minY: 391, maxX: 852, maxY: 558 },
    top: { minX: 563, minY: 177, maxX: 730, maxY: 346 },
  },
  {
    left: { minX: 439, minY: 392, maxX: 606, maxY: 558 },
    right: { minX: 683, minY: 392, maxX: 851, maxY: 560 },
    top: { minX: 561, minY: 177, maxX: 729, maxY: 347 },
  },
  {
    left: { minX: 437, minY: 393, maxX: 605, maxY: 560 },
    right: { minX: 682, minY: 393, maxX: 852, maxY: 562 },
    top: { minX: 560, minY: 177, maxX: 728, maxY: 348 },
  },
  {
    left: { minX: 434, minY: 394, maxX: 603, maxY: 562 },
    right: { minX: 681, minY: 394, maxX: 851, maxY: 564 },
    top: { minX: 558, minY: 177, maxX: 727, maxY: 348 },
  },
  {
    left: { minX: 432, minY: 394, maxX: 602, maxY: 563 },
    right: { minX: 680, minY: 395, maxX: 851, maxY: 565 },
    top: { minX: 557, minY: 176, maxX: 727, maxY: 348 },
  },
  {
    left: { minX: 430, minY: 397, maxX: 601, maxY: 567 },
    right: { minX: 679, minY: 397, maxX: 852, maxY: 569 },
    top: { minX: 555, minY: 178, maxX: 726, maxY: 351 },
  },
  {
    left: { minX: 428, minY: 398, maxX: 600, maxY: 570 },
    right: { minX: 678, minY: 399, maxX: 852, maxY: 571 },
    top: { minX: 553, minY: 179, maxX: 726, maxY: 352 },
  },
  {
    left: { minX: 426, minY: 399, maxX: 599, maxY: 571 },
    right: { minX: 677, minY: 400, maxX: 851, maxY: 573 },
    top: { minX: 552, minY: 179, maxX: 724, maxY: 353 },
  },
  {
    left: { minX: 423, minY: 400, maxX: 597, maxY: 574 },
    right: { minX: 676, minY: 401, maxX: 851, maxY: 575 },
    top: { minX: 550, minY: 179, maxX: 723, maxY: 353 },
  },
  {
    left: { minX: 423, minY: 400, maxX: 597, maxY: 574 },
    right: { minX: 677, minY: 400, maxX: 851, maxY: 575 },
    top: { minX: 550, minY: 178, maxX: 724, maxY: 353 },
  },
  {
    left: { minX: 421, minY: 399, maxX: 596, maxY: 573 },
    right: { minX: 676, minY: 399, maxX: 852, maxY: 575 },
    top: { minX: 549, minY: 175, maxX: 724, maxY: 352 },
  },
  {
    left: { minX: 420, minY: 396, maxX: 597, maxY: 572 },
    right: { minX: 677, minY: 396, maxX: 854, maxY: 573 },
    top: { minX: 549, minY: 171, maxX: 725, maxY: 349 },
  },
  {
    left: { minX: 418, minY: 396, maxX: 595, maxY: 572 },
    right: { minX: 676, minY: 395, maxX: 854, maxY: 573 },
    top: { minX: 547, minY: 169, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 417, minY: 396, maxX: 595, maxY: 573 },
    right: { minX: 676, minY: 396, maxX: 854, maxY: 573 },
    top: { minX: 546, minY: 169, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 417, minY: 396, maxX: 595, maxY: 573 },
    right: { minX: 676, minY: 396, maxX: 855, maxY: 574 },
    top: { minX: 546, minY: 169, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 415, minY: 397, maxX: 594, maxY: 575 },
    right: { minX: 675, minY: 397, maxX: 855, maxY: 576 },
    top: { minX: 545, minY: 168, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 414, minY: 397, maxX: 593, maxY: 576 },
    right: { minX: 675, minY: 397, maxX: 855, maxY: 576 },
    top: { minX: 544, minY: 167, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 413, minY: 397, maxX: 593, maxY: 576 },
    right: { minX: 675, minY: 396, maxX: 856, maxY: 577 },
    top: { minX: 544, minY: 166, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 413, minY: 396, maxX: 594, maxY: 576 },
    right: { minX: 676, minY: 395, maxX: 858, maxY: 576 },
    top: { minX: 544, minY: 165, maxX: 724, maxY: 347 },
  },
  {
    left: { minX: 414, minY: 397, maxX: 595, maxY: 578 },
    right: { minX: 678, minY: 396, maxX: 860, maxY: 579 },
    top: { minX: 545, minY: 165, maxX: 726, maxY: 347 },
  },
  {
    left: { minX: 413, minY: 397, maxX: 595, maxY: 578 },
    right: { minX: 678, minY: 396, maxX: 861, maxY: 579 },
    top: { minX: 545, minY: 164, maxX: 727, maxY: 347 },
  },
  {
    left: { minX: 413, minY: 397, maxX: 595, maxY: 578 },
    right: { minX: 679, minY: 396, maxX: 862, maxY: 579 },
    top: { minX: 545, minY: 163, maxX: 727, maxY: 347 },
  },
  {
    left: { minX: 413, minY: 398, maxX: 595, maxY: 580 },
    right: { minX: 679, minY: 397, maxX: 863, maxY: 581 },
    top: { minX: 545, minY: 164, maxX: 728, maxY: 348 },
  },
  {
    left: { minX: 412, minY: 398, maxX: 596, maxY: 581 },
    right: { minX: 679, minY: 397, maxX: 864, maxY: 582 },
    top: { minX: 545, minY: 164, maxX: 728, maxY: 349 },
  },
  {
    left: { minX: 412, minY: 397, maxX: 596, maxY: 580 },
    right: { minX: 680, minY: 396, maxX: 865, maxY: 581 },
    top: { minX: 546, minY: 161, maxX: 730, maxY: 347 },
  },
  {
    left: { minX: 411, minY: 398, maxX: 595, maxY: 581 },
    right: { minX: 679, minY: 397, maxX: 865, maxY: 582 },
    top: { minX: 545, minY: 161, maxX: 729, maxY: 348 },
  },
  {
    left: { minX: 410, minY: 397, maxX: 595, maxY: 581 },
    right: { minX: 680, minY: 396, maxX: 866, maxY: 581 },
    top: { minX: 545, minY: 160, maxX: 730, maxY: 347 },
  },
  {
    left: { minX: 411, minY: 394, maxX: 597, maxY: 578 },
    right: { minX: 681, minY: 393, maxX: 868, maxY: 579 },
    top: { minX: 546, minY: 156, maxX: 731, maxY: 343 },
  },
  {
    left: { minX: 411, minY: 393, maxX: 597, maxY: 578 },
    right: { minX: 681, minY: 393, maxX: 869, maxY: 579 },
    top: { minX: 547, minY: 155, maxX: 732, maxY: 343 },
  },
  {
    left: { minX: 411, minY: 391, maxX: 597, maxY: 577 },
    right: { minX: 682, minY: 391, maxX: 870, maxY: 577 },
    top: { minX: 547, minY: 152, maxX: 732, maxY: 341 },
  },
  {
    left: { minX: 410, minY: 388, maxX: 598, maxY: 574 },
    right: { minX: 682, minY: 388, maxX: 871, maxY: 575 },
    top: { minX: 547, minY: 148, maxX: 733, maxY: 338 },
  },
  {
    left: { minX: 410, minY: 388, maxX: 598, maxY: 574 },
    right: { minX: 683, minY: 387, maxX: 872, maxY: 575 },
    top: { minX: 547, minY: 147, maxX: 734, maxY: 337 },
  },
  {
    left: { minX: 410, minY: 387, maxX: 598, maxY: 573 },
    right: { minX: 683, minY: 387, maxX: 873, maxY: 575 },
    top: { minX: 547, minY: 145, maxX: 735, maxY: 336 },
  },
  {
    left: { minX: 410, minY: 383, maxX: 599, maxY: 571 },
    right: { minX: 685, minY: 383, maxX: 876, maxY: 572 },
    top: { minX: 548, minY: 139, maxX: 736, maxY: 332 },
  },
  {
    left: { minX: 408, minY: 382, maxX: 598, maxY: 570 },
    right: { minX: 685, minY: 382, maxX: 876, maxY: 572 },
    top: { minX: 547, minY: 137, maxX: 737, maxY: 331 },
  },
  {
    left: { minX: 407, minY: 382, maxX: 598, maxY: 571 },
    right: { minX: 685, minY: 381, maxX: 878, maxY: 572 },
    top: { minX: 547, minY: 136, maxX: 737, maxY: 330 },
  },
  {
    left: { minX: 406, minY: 381, maxX: 597, maxY: 572 },
    right: { minX: 685, minY: 381, maxX: 878, maxY: 573 },
    top: { minX: 546, minY: 135, maxX: 737, maxY: 330 },
  },
  {
    left: { minX: 404, minY: 383, maxX: 597, maxY: 574 },
    right: { minX: 684, minY: 382, maxX: 879, maxY: 574 },
    top: { minX: 545, minY: 135, maxX: 737, maxY: 331 },
  },
  {
    left: { minX: 402, minY: 384, maxX: 596, maxY: 576 },
    right: { minX: 683, minY: 384, maxX: 878, maxY: 577 },
    top: { minX: 544, minY: 136, maxX: 736, maxY: 332 },
  },
  {
    left: { minX: 400, minY: 385, maxX: 595, maxY: 578 },
    right: { minX: 683, minY: 384, maxX: 878, maxY: 578 },
    top: { minX: 542, minY: 136, maxX: 736, maxY: 332 },
  },
  {
    left: { minX: 400, minY: 387, maxX: 595, maxY: 580 },
    right: { minX: 683, minY: 386, maxX: 879, maxY: 580 },
    top: { minX: 542, minY: 137, maxX: 736, maxY: 334 },
  },
  {
    left: { minX: 398, minY: 388, maxX: 594, maxY: 582 },
    right: { minX: 682, minY: 387, maxX: 878, maxY: 582 },
    top: { minX: 541, minY: 139, maxX: 735, maxY: 335 },
  },
  {
    left: { minX: 397, minY: 388, maxX: 594, maxY: 583 },
    right: { minX: 682, minY: 387, maxX: 879, maxY: 582 },
    top: { minX: 541, minY: 137, maxX: 735, maxY: 335 },
  },
  {
    left: { minX: 395, minY: 388, maxX: 593, maxY: 583 },
    right: { minX: 682, minY: 386, maxX: 879, maxY: 582 },
    top: { minX: 539, minY: 136, maxX: 734, maxY: 334 },
  },
  {
    left: { minX: 395, minY: 387, maxX: 593, maxY: 582 },
    right: { minX: 682, minY: 385, maxX: 880, maxY: 581 },
    top: { minX: 539, minY: 134, maxX: 734, maxY: 333 },
  },
  {
    left: { minX: 395, minY: 386, maxX: 593, maxY: 582 },
    right: { minX: 683, minY: 384, maxX: 881, maxY: 581 },
    top: { minX: 539, minY: 133, maxX: 735, maxY: 332 },
  },
  {
    left: { minX: 394, minY: 387, maxX: 593, maxY: 584 },
    right: { minX: 683, minY: 385, maxX: 882, maxY: 582 },
    top: { minX: 539, minY: 134, maxX: 735, maxY: 333 },
  },
  {
    left: { minX: 393, minY: 389, maxX: 593, maxY: 587 },
    right: { minX: 683, minY: 387, maxX: 882, maxY: 585 },
    top: { minX: 539, minY: 135, maxX: 736, maxY: 334 },
  },
  {
    left: { minX: 393, minY: 390, maxX: 593, maxY: 588 },
    right: { minX: 684, minY: 388, maxX: 884, maxY: 587 },
    top: { minX: 539, minY: 135, maxX: 736, maxY: 335 },
  },
  {
    left: { minX: 392, minY: 390, maxX: 593, maxY: 589 },
    right: { minX: 683, minY: 388, maxX: 884, maxY: 587 },
    top: { minX: 539, minY: 135, maxX: 736, maxY: 335 },
  },
  {
    left: { minX: 392, minY: 390, maxX: 594, maxY: 590 },
    right: { minX: 685, minY: 388, maxX: 887, maxY: 589 },
    top: { minX: 540, minY: 133, maxX: 738, maxY: 335 },
  },
  {
    left: { minX: 391, minY: 390, maxX: 594, maxY: 591 },
    right: { minX: 685, minY: 389, maxX: 888, maxY: 589 },
    top: { minX: 540, minY: 133, maxX: 739, maxY: 335 },
  },
  {
    left: { minX: 392, minY: 392, maxX: 595, maxY: 593 },
    right: { minX: 686, minY: 390, maxX: 890, maxY: 592 },
    top: { minX: 541, minY: 134, maxX: 740, maxY: 337 },
  },
  {
    left: { minX: 390, minY: 394, maxX: 594, maxY: 596 },
    right: { minX: 686, minY: 392, maxX: 890, maxY: 595 },
    top: { minX: 539, minY: 135, maxX: 740, maxY: 339 },
  },
  {
    left: { minX: 389, minY: 395, maxX: 593, maxY: 598 },
    right: { minX: 685, minY: 394, maxX: 890, maxY: 597 },
    top: { minX: 539, minY: 137, maxX: 739, maxY: 340 },
  },
  {
    left: { minX: 387, minY: 396, maxX: 593, maxY: 599 },
    right: { minX: 685, minY: 394, maxX: 890, maxY: 597 },
    top: { minX: 538, minY: 137, maxX: 738, maxY: 340 },
  },
  {
    left: { minX: 386, minY: 395, maxX: 592, maxY: 600 },
    right: { minX: 685, minY: 394, maxX: 891, maxY: 598 },
    top: { minX: 538, minY: 136, maxX: 739, maxY: 340 },
  },
  {
    left: { minX: 384, minY: 395, maxX: 591, maxY: 600 },
    right: { minX: 684, minY: 393, maxX: 891, maxY: 597 },
    top: { minX: 537, minY: 134, maxX: 738, maxY: 339 },
  },
  {
    left: { minX: 383, minY: 389, maxX: 591, maxY: 595 },
    right: { minX: 685, minY: 387, maxX: 893, maxY: 593 },
    top: { minX: 536, minY: 127, maxX: 739, maxY: 333 },
  },
  {
    left: { minX: 381, minY: 387, maxX: 590, maxY: 594 },
    right: { minX: 684, minY: 385, maxX: 892, maxY: 591 },
    top: { minX: 535, minY: 123, maxX: 738, maxY: 331 },
  },
  {
    left: { minX: 379, minY: 385, maxX: 589, maxY: 592 },
    right: { minX: 683, minY: 383, maxX: 892, maxY: 589 },
    top: { minX: 533, minY: 119, maxX: 738, maxY: 328 },
  },
  {
    left: { minX: 377, minY: 384, maxX: 588, maxY: 592 },
    right: { minX: 682, minY: 381, maxX: 892, maxY: 589 },
    top: { minX: 531, minY: 118, maxX: 737, maxY: 327 },
  },
  {
    left: { minX: 376, minY: 383, maxX: 587, maxY: 591 },
    right: { minX: 681, minY: 381, maxX: 892, maxY: 589 },
    top: { minX: 531, minY: 116, maxX: 736, maxY: 325 },
  },
  {
    left: { minX: 373, minY: 381, maxX: 586, maxY: 591 },
    right: { minX: 680, minY: 379, maxX: 891, maxY: 587 },
    top: { minX: 529, minY: 113, maxX: 735, maxY: 324 },
  },
  {
    left: { minX: 373, minY: 380, maxX: 585, maxY: 590 },
    right: { minX: 681, minY: 379, maxX: 892, maxY: 588 },
    top: { minX: 529, minY: 112, maxX: 736, maxY: 323 },
  },
  {
    left: { minX: 371, minY: 378, maxX: 585, maxY: 589 },
    right: { minX: 680, minY: 377, maxX: 892, maxY: 586 },
    top: { minX: 528, minY: 109, maxX: 736, maxY: 321 },
  },
  {
    left: { minX: 370, minY: 378, maxX: 584, maxY: 588 },
    right: { minX: 679, minY: 375, maxX: 892, maxY: 585 },
    top: { minX: 527, minY: 107, maxX: 735, maxY: 320 },
  },
  {
    left: { minX: 369, minY: 379, maxX: 584, maxY: 590 },
    right: { minX: 679, minY: 377, maxX: 891, maxY: 587 },
    top: { minX: 527, minY: 109, maxX: 734, maxY: 321 },
  },
  {
    left: { minX: 369, minY: 380, maxX: 584, maxY: 591 },
    right: { minX: 679, minY: 378, maxX: 892, maxY: 588 },
    top: { minX: 527, minY: 109, maxX: 734, maxY: 322 },
  },
  {
    left: { minX: 368, minY: 381, maxX: 583, maxY: 592 },
    right: { minX: 679, minY: 379, maxX: 892, maxY: 589 },
    top: { minX: 526, minY: 111, maxX: 734, maxY: 323 },
  },
  {
    left: { minX: 369, minY: 381, maxX: 583, maxY: 593 },
    right: { minX: 679, minY: 379, maxX: 892, maxY: 589 },
    top: { minX: 526, minY: 111, maxX: 734, maxY: 323 },
  },
  {
    left: { minX: 369, minY: 380, maxX: 584, maxY: 592 },
    right: { minX: 680, minY: 378, maxX: 893, maxY: 588 },
    top: { minX: 527, minY: 109, maxX: 734, maxY: 322 },
  },
  {
    left: { minX: 370, minY: 378, maxX: 585, maxY: 590 },
    right: { minX: 681, minY: 376, maxX: 895, maxY: 586 },
    top: { minX: 527, minY: 107, maxX: 736, maxY: 320 },
  },
  {
    left: { minX: 371, minY: 377, maxX: 585, maxY: 589 },
    right: { minX: 682, minY: 374, maxX: 895, maxY: 585 },
    top: { minX: 528, minY: 106, maxX: 736, maxY: 319 },
  },
  {
    left: { minX: 371, minY: 377, maxX: 586, maxY: 588 },
    right: { minX: 682, minY: 374, maxX: 895, maxY: 585 },
    top: { minX: 529, minY: 107, maxX: 736, maxY: 319 },
  },
  {
    left: { minX: 374, minY: 375, maxX: 588, maxY: 586 },
    right: { minX: 684, minY: 373, maxX: 897, maxY: 583 },
    top: { minX: 531, minY: 105, maxX: 738, maxY: 317 },
  },
  {
    left: { minX: 374, minY: 374, maxX: 588, maxY: 585 },
    right: { minX: 684, minY: 371, maxX: 898, maxY: 582 },
    top: { minX: 531, minY: 104, maxX: 739, maxY: 316 },
  },
  {
    left: { minX: 374, minY: 373, maxX: 589, maxY: 584 },
    right: { minX: 685, minY: 371, maxX: 898, maxY: 581 },
    top: { minX: 531, minY: 103, maxX: 739, maxY: 315 },
  },
  {
    left: { minX: 375, minY: 372, maxX: 589, maxY: 583 },
    right: { minX: 686, minY: 369, maxX: 899, maxY: 579 },
    top: { minX: 532, minY: 101, maxX: 740, maxY: 314 },
  },
  {
    left: { minX: 375, minY: 373, maxX: 589, maxY: 584 },
    right: { minX: 686, minY: 370, maxX: 899, maxY: 580 },
    top: { minX: 532, minY: 102, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 377, minY: 372, maxX: 591, maxY: 583 },
    right: { minX: 687, minY: 368, maxX: 901, maxY: 578 },
    top: { minX: 533, minY: 101, maxX: 741, maxY: 313 },
  },
  {
    left: { minX: 378, minY: 370, maxX: 593, maxY: 581 },
    right: { minX: 689, minY: 366, maxX: 903, maxY: 577 },
    top: { minX: 535, minY: 98, maxX: 743, maxY: 311 },
  },
  {
    left: { minX: 379, minY: 368, maxX: 593, maxY: 579 },
    right: { minX: 690, minY: 365, maxX: 904, maxY: 575 },
    top: { minX: 535, minY: 96, maxX: 744, maxY: 310 },
  },
  {
    left: { minX: 379, minY: 366, maxX: 594, maxY: 577 },
    right: { minX: 690, minY: 363, maxX: 905, maxY: 574 },
    top: { minX: 536, minY: 93, maxX: 744, maxY: 308 },
  },
  {
    left: { minX: 379, minY: 366, maxX: 594, maxY: 577 },
    right: { minX: 690, minY: 363, maxX: 905, maxY: 573 },
    top: { minX: 536, minY: 93, maxX: 744, maxY: 307 },
  },
  {
    left: { minX: 379, minY: 365, maxX: 594, maxY: 576 },
    right: { minX: 690, minY: 362, maxX: 905, maxY: 573 },
    top: { minX: 536, minY: 92, maxX: 745, maxY: 306 },
  },
  {
    left: { minX: 378, minY: 364, maxX: 593, maxY: 575 },
    right: { minX: 689, minY: 361, maxX: 904, maxY: 572 },
    top: { minX: 535, minY: 91, maxX: 744, maxY: 306 },
  },
  {
    left: { minX: 378, minY: 362, maxX: 593, maxY: 573 },
    right: { minX: 689, minY: 359, maxX: 904, maxY: 570 },
    top: { minX: 535, minY: 89, maxX: 744, maxY: 304 },
  },
  {
    left: { minX: 379, minY: 362, maxX: 593, maxY: 573 },
    right: { minX: 689, minY: 359, maxX: 904, maxY: 569 },
    top: { minX: 536, minY: 89, maxX: 744, maxY: 304 },
  },
  {
    left: { minX: 378, minY: 362, maxX: 593, maxY: 573 },
    right: { minX: 689, minY: 359, maxX: 904, maxY: 569 },
    top: { minX: 535, minY: 89, maxX: 744, maxY: 303 },
  },
  {
    left: { minX: 379, minY: 361, maxX: 593, maxY: 571 },
    right: { minX: 689, minY: 357, maxX: 904, maxY: 568 },
    top: { minX: 535, minY: 87, maxX: 744, maxY: 302 },
  },
  {
    left: { minX: 379, minY: 359, maxX: 594, maxY: 569 },
    right: { minX: 690, minY: 356, maxX: 905, maxY: 567 },
    top: { minX: 537, minY: 85, maxX: 746, maxY: 301 },
  },
  {
    left: { minX: 379, minY: 358, maxX: 594, maxY: 568 },
    right: { minX: 690, minY: 355, maxX: 906, maxY: 565 },
    top: { minX: 536, minY: 83, maxX: 746, maxY: 299 },
  },
  {
    left: { minX: 379, minY: 357, maxX: 594, maxY: 568 },
    right: { minX: 690, minY: 354, maxX: 906, maxY: 565 },
    top: { minX: 536, minY: 83, maxX: 746, maxY: 299 },
  },
  {
    left: { minX: 379, minY: 357, maxX: 594, maxY: 567 },
    right: { minX: 691, minY: 354, maxX: 906, maxY: 564 },
    top: { minX: 537, minY: 83, maxX: 746, maxY: 299 },
  },
  {
    left: { minX: 380, minY: 356, maxX: 595, maxY: 567 },
    right: { minX: 692, minY: 353, maxX: 907, maxY: 564 },
    top: { minX: 537, minY: 82, maxX: 746, maxY: 298 },
  },
  {
    left: { minX: 381, minY: 355, maxX: 596, maxY: 566 },
    right: { minX: 693, minY: 352, maxX: 908, maxY: 563 },
    top: { minX: 538, minY: 81, maxX: 748, maxY: 297 },
  },
  {
    left: { minX: 381, minY: 355, maxX: 596, maxY: 566 },
    right: { minX: 693, minY: 351, maxX: 909, maxY: 562 },
    top: { minX: 538, minY: 80, maxX: 748, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 354, maxX: 596, maxY: 565 },
    right: { minX: 693, minY: 351, maxX: 909, maxY: 562 },
    top: { minX: 539, minY: 79, maxX: 748, maxY: 296 },
  },
  {
    left: { minX: 382, minY: 354, maxX: 597, maxY: 565 },
    right: { minX: 693, minY: 351, maxX: 909, maxY: 562 },
    top: { minX: 539, minY: 79, maxX: 748, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 355, maxX: 596, maxY: 566 },
    right: { minX: 693, minY: 352, maxX: 908, maxY: 562 },
    top: { minX: 537, minY: 80, maxX: 748, maxY: 297 },
  },
  {
    left: { minX: 380, minY: 355, maxX: 595, maxY: 566 },
    right: { minX: 692, minY: 351, maxX: 908, maxY: 562 },
    top: { minX: 537, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 355, maxX: 594, maxY: 566 },
    right: { minX: 691, minY: 351, maxX: 907, maxY: 561 },
    top: { minX: 536, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 691, minY: 350, maxX: 907, maxY: 561 },
    top: { minX: 536, minY: 78, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 594, maxY: 565 },
    right: { minX: 691, minY: 350, maxX: 907, maxY: 561 },
    top: { minX: 536, minY: 79, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 692, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 536, minY: 78, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 692, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 537, minY: 78, maxX: 747, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 692, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 536, minY: 77, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 594, maxY: 566 },
    right: { minX: 690, minY: 350, maxX: 906, maxY: 561 },
    top: { minX: 535, minY: 79, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 355, maxX: 595, maxY: 565 },
    right: { minX: 691, minY: 351, maxX: 907, maxY: 561 },
    top: { minX: 535, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 355, maxX: 594, maxY: 566 },
    right: { minX: 690, minY: 351, maxX: 906, maxY: 561 },
    top: { minX: 535, minY: 80, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 379, minY: 356, maxX: 593, maxY: 566 },
    right: { minX: 690, minY: 352, maxX: 905, maxY: 562 },
    top: { minX: 535, minY: 81, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 380, minY: 355, maxX: 594, maxY: 565 },
    right: { minX: 691, minY: 351, maxX: 906, maxY: 561 },
    top: { minX: 536, minY: 80, maxX: 745, maxY: 296 },
  },
  {
    left: { minX: 380, minY: 354, maxX: 594, maxY: 564 },
    right: { minX: 691, minY: 351, maxX: 906, maxY: 561 },
    top: { minX: 536, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 378, minY: 354, maxX: 592, maxY: 564 },
    right: { minX: 689, minY: 350, maxX: 903, maxY: 561 },
    top: { minX: 535, minY: 80, maxX: 743, maxY: 296 },
  },
  {
    left: { minX: 378, minY: 353, maxX: 592, maxY: 563 },
    right: { minX: 688, minY: 350, maxX: 903, maxY: 560 },
    top: { minX: 534, minY: 79, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 376, minY: 353, maxX: 590, maxY: 563 },
    right: { minX: 686, minY: 349, maxX: 901, maxY: 559 },
    top: { minX: 532, minY: 79, maxX: 741, maxY: 295 },
  },
  {
    left: { minX: 375, minY: 353, maxX: 589, maxY: 563 },
    right: { minX: 686, minY: 349, maxX: 900, maxY: 559 },
    top: { minX: 531, minY: 79, maxX: 740, maxY: 295 },
  },
  {
    left: { minX: 376, minY: 353, maxX: 590, maxY: 563 },
    right: { minX: 686, minY: 350, maxX: 900, maxY: 559 },
    top: { minX: 532, minY: 79, maxX: 741, maxY: 295 },
  },
  {
    left: { minX: 376, minY: 353, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 350, maxX: 901, maxY: 559 },
    top: { minX: 533, minY: 80, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 351, maxX: 901, maxY: 560 },
    top: { minX: 534, minY: 81, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 351, maxX: 900, maxY: 560 },
    top: { minX: 534, minY: 81, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 354, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 351, maxX: 900, maxY: 559 },
    top: { minX: 534, minY: 81, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 591, maxY: 562 },
    right: { minX: 687, minY: 350, maxX: 900, maxY: 559 },
    top: { minX: 534, minY: 81, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 378, minY: 353, maxX: 591, maxY: 562 },
    right: { minX: 687, minY: 350, maxX: 900, maxY: 559 },
    top: { minX: 534, minY: 80, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 378, minY: 352, maxX: 591, maxY: 561 },
    right: { minX: 687, minY: 350, maxX: 900, maxY: 558 },
    top: { minX: 534, minY: 80, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 352, maxX: 593, maxY: 561 },
    right: { minX: 688, minY: 350, maxX: 901, maxY: 558 },
    top: { minX: 537, minY: 81, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 381, minY: 352, maxX: 593, maxY: 560 },
    right: { minX: 689, minY: 350, maxX: 901, maxY: 558 },
    top: { minX: 537, minY: 81, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 381, minY: 353, maxX: 593, maxY: 560 },
    right: { minX: 688, minY: 351, maxX: 900, maxY: 558 },
    top: { minX: 537, minY: 82, maxX: 743, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 353, maxX: 593, maxY: 560 },
    right: { minX: 688, minY: 351, maxX: 900, maxY: 558 },
    top: { minX: 537, minY: 82, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 381, minY: 351, maxX: 593, maxY: 559 },
    right: { minX: 688, minY: 349, maxX: 900, maxY: 557 },
    top: { minX: 536, minY: 80, maxX: 743, maxY: 294 },
  },
  {
    left: { minX: 380, minY: 351, maxX: 591, maxY: 559 },
    right: { minX: 686, minY: 349, maxX: 898, maxY: 556 },
    top: { minX: 535, minY: 81, maxX: 742, maxY: 294 },
  },
  {
    left: { minX: 380, minY: 351, maxX: 592, maxY: 559 },
    right: { minX: 687, minY: 349, maxX: 898, maxY: 556 },
    top: { minX: 535, minY: 81, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 381, minY: 353, maxX: 592, maxY: 559 },
    right: { minX: 687, minY: 351, maxX: 897, maxY: 557 },
    top: { minX: 536, minY: 84, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 382, minY: 353, maxX: 592, maxY: 559 },
    right: { minX: 687, minY: 351, maxX: 897, maxY: 557 },
    top: { minX: 536, minY: 85, maxX: 742, maxY: 297 },
  },
  {
    left: { minX: 382, minY: 353, maxX: 592, maxY: 559 },
    right: { minX: 686, minY: 351, maxX: 896, maxY: 557 },
    top: { minX: 536, minY: 85, maxX: 741, maxY: 297 },
  },
  {
    left: { minX: 384, minY: 354, maxX: 593, maxY: 559 },
    right: { minX: 688, minY: 352, maxX: 898, maxY: 557 },
    top: { minX: 538, minY: 86, maxX: 743, maxY: 297 },
  },
  {
    left: { minX: 384, minY: 353, maxX: 594, maxY: 558 },
    right: { minX: 688, minY: 352, maxX: 898, maxY: 557 },
    top: { minX: 539, minY: 85, maxX: 743, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 352, maxX: 595, maxY: 558 },
    right: { minX: 689, minY: 351, maxX: 900, maxY: 557 },
    top: { minX: 540, minY: 85, maxX: 745, maxY: 296 },
  },
  {
    left: { minX: 385, minY: 351, maxX: 595, maxY: 557 },
    right: { minX: 689, minY: 351, maxX: 900, maxY: 556 },
    top: { minX: 540, minY: 84, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 387, minY: 350, maxX: 595, maxY: 556 },
    right: { minX: 690, minY: 350, maxX: 900, maxY: 555 },
    top: { minX: 541, minY: 83, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 386, minY: 351, maxX: 594, maxY: 556 },
    right: { minX: 688, minY: 350, maxX: 898, maxY: 555 },
    top: { minX: 540, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 387, minY: 351, maxX: 596, maxY: 555 },
    right: { minX: 689, minY: 350, maxX: 899, maxY: 555 },
    top: { minX: 541, minY: 85, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 386, minY: 351, maxX: 595, maxY: 555 },
    right: { minX: 688, minY: 350, maxX: 898, maxY: 555 },
    top: { minX: 540, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 387, minY: 350, maxX: 595, maxY: 554 },
    right: { minX: 689, minY: 350, maxX: 898, maxY: 554 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 387, minY: 350, maxX: 595, maxY: 554 },
    right: { minX: 689, minY: 350, maxX: 897, maxY: 554 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 595, maxY: 553 },
    right: { minX: 688, minY: 349, maxX: 896, maxY: 553 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 595, maxY: 553 },
    right: { minX: 688, minY: 349, maxX: 896, maxY: 553 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 351, maxX: 595, maxY: 553 },
    right: { minX: 688, minY: 350, maxX: 896, maxY: 553 },
    top: { minX: 541, minY: 87, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 595, maxY: 553 },
    right: { minX: 688, minY: 350, maxX: 895, maxY: 553 },
    top: { minX: 541, minY: 86, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 389, minY: 350, maxX: 595, maxY: 552 },
    right: { minX: 688, minY: 350, maxX: 895, maxY: 553 },
    top: { minX: 542, minY: 87, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 390, minY: 351, maxX: 596, maxY: 552 },
    right: { minX: 688, minY: 351, maxX: 895, maxY: 553 },
    top: { minX: 542, minY: 88, maxX: 744, maxY: 296 },
  },
  {
    left: { minX: 390, minY: 350, maxX: 595, maxY: 552 },
    right: { minX: 688, minY: 350, maxX: 895, maxY: 552 },
    top: { minX: 542, minY: 87, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 391, minY: 350, maxX: 596, maxY: 551 },
    right: { minX: 689, minY: 350, maxX: 895, maxY: 552 },
    top: { minX: 543, minY: 88, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 391, minY: 350, maxX: 596, maxY: 551 },
    right: { minX: 688, minY: 350, maxX: 895, maxY: 552 },
    top: { minX: 543, minY: 89, maxX: 744, maxY: 296 },
  },
  {
    left: { minX: 393, minY: 351, maxX: 597, maxY: 551 },
    right: { minX: 689, minY: 351, maxX: 894, maxY: 552 },
    top: { minX: 544, minY: 91, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 393, minY: 351, maxX: 596, maxY: 551 },
    right: { minX: 688, minY: 352, maxX: 894, maxY: 552 },
    top: { minX: 544, minY: 92, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 394, minY: 351, maxX: 597, maxY: 550 },
    right: { minX: 689, minY: 352, maxX: 894, maxY: 552 },
    top: { minX: 545, minY: 93, maxX: 744, maxY: 298 },
  },
  {
    left: { minX: 395, minY: 353, maxX: 597, maxY: 551 },
    right: { minX: 688, minY: 353, maxX: 892, maxY: 553 },
    top: { minX: 545, minY: 95, maxX: 744, maxY: 299 },
  },
  {
    left: { minX: 395, minY: 353, maxX: 597, maxY: 551 },
    right: { minX: 689, minY: 353, maxX: 892, maxY: 553 },
    top: { minX: 545, minY: 95, maxX: 744, maxY: 299 },
  },
  {
    left: { minX: 397, minY: 353, maxX: 598, maxY: 551 },
    right: { minX: 689, minY: 353, maxX: 892, maxY: 552 },
    top: { minX: 546, minY: 96, maxX: 744, maxY: 300 },
  },
  {
    left: { minX: 397, minY: 353, maxX: 598, maxY: 551 },
    right: { minX: 689, minY: 353, maxX: 892, maxY: 552 },
    top: { minX: 546, minY: 97, maxX: 744, maxY: 300 },
  },
  {
    left: { minX: 399, minY: 352, maxX: 600, maxY: 549 },
    right: { minX: 690, minY: 352, maxX: 894, maxY: 551 },
    top: { minX: 548, minY: 95, maxX: 746, maxY: 299 },
  },
  {
    left: { minX: 401, minY: 351, maxX: 601, maxY: 548 },
    right: { minX: 691, minY: 352, maxX: 895, maxY: 551 },
    top: { minX: 549, minY: 95, maxX: 747, maxY: 298 },
  },
  {
    left: { minX: 403, minY: 351, maxX: 602, maxY: 548 },
    right: { minX: 693, minY: 352, maxX: 896, maxY: 551 },
    top: { minX: 551, minY: 96, maxX: 748, maxY: 299 },
  },
  {
    left: { minX: 404, minY: 352, maxX: 603, maxY: 548 },
    right: { minX: 693, minY: 353, maxX: 896, maxY: 551 },
    top: { minX: 552, minY: 97, maxX: 749, maxY: 299 },
  },
  {
    left: { minX: 405, minY: 354, maxX: 603, maxY: 549 },
    right: { minX: 693, minY: 355, maxX: 895, maxY: 552 },
    top: { minX: 552, minY: 100, maxX: 748, maxY: 301 },
  },
  {
    left: { minX: 405, minY: 355, maxX: 603, maxY: 550 },
    right: { minX: 693, minY: 355, maxX: 894, maxY: 553 },
    top: { minX: 552, minY: 102, maxX: 747, maxY: 302 },
  },
  {
    left: { minX: 406, minY: 356, maxX: 603, maxY: 550 },
    right: { minX: 693, minY: 356, maxX: 895, maxY: 553 },
    top: { minX: 552, minY: 103, maxX: 747, maxY: 303 },
  },
  {
    left: { minX: 408, minY: 355, maxX: 604, maxY: 549 },
    right: { minX: 694, minY: 356, maxX: 896, maxY: 552 },
    top: { minX: 554, minY: 103, maxX: 748, maxY: 302 },
  },
  {
    left: { minX: 409, minY: 354, maxX: 605, maxY: 548 },
    right: { minX: 695, minY: 355, maxX: 896, maxY: 551 },
    top: { minX: 555, minY: 102, maxX: 749, maxY: 302 },
  },
  {
    left: { minX: 410, minY: 354, maxX: 606, maxY: 547 },
    right: { minX: 695, minY: 355, maxX: 896, maxY: 551 },
    top: { minX: 555, minY: 103, maxX: 750, maxY: 302 },
  },
  {
    left: { minX: 411, minY: 355, maxX: 606, maxY: 548 },
    right: { minX: 695, minY: 355, maxX: 896, maxY: 551 },
    top: { minX: 556, minY: 104, maxX: 749, maxY: 303 },
  },
  {
    left: { minX: 410, minY: 355, maxX: 605, maxY: 548 },
    right: { minX: 695, minY: 356, maxX: 895, maxY: 551 },
    top: { minX: 555, minY: 105, maxX: 748, maxY: 303 },
  },
  {
    left: { minX: 411, minY: 354, maxX: 606, maxY: 546 },
    right: { minX: 695, minY: 355, maxX: 895, maxY: 550 },
    top: { minX: 555, minY: 103, maxX: 748, maxY: 302 },
  },
  {
    left: { minX: 412, minY: 354, maxX: 607, maxY: 546 },
    right: { minX: 696, minY: 354, maxX: 896, maxY: 550 },
    top: { minX: 556, minY: 103, maxX: 749, maxY: 302 },
  },
  {
    left: { minX: 414, minY: 355, maxX: 608, maxY: 546 },
    right: { minX: 696, minY: 355, maxX: 896, maxY: 550 },
    top: { minX: 557, minY: 105, maxX: 750, maxY: 303 },
  },
  {
    left: { minX: 415, minY: 356, maxX: 609, maxY: 547 },
    right: { minX: 697, minY: 356, maxX: 896, maxY: 551 },
    top: { minX: 559, minY: 107, maxX: 751, maxY: 304 },
  },
  {
    left: { minX: 417, minY: 356, maxX: 610, maxY: 547 },
    right: { minX: 698, minY: 357, maxX: 897, maxY: 551 },
    top: { minX: 561, minY: 108, maxX: 752, maxY: 305 },
  },
  {
    left: { minX: 418, minY: 357, maxX: 610, maxY: 547 },
    right: { minX: 699, minY: 358, maxX: 898, maxY: 552 },
    top: { minX: 561, minY: 109, maxX: 753, maxY: 305 },
  },
  {
    left: { minX: 418, minY: 359, maxX: 610, maxY: 549 },
    right: { minX: 698, minY: 360, maxX: 896, maxY: 554 },
    top: { minX: 561, minY: 113, maxX: 752, maxY: 308 },
  },
  {
    left: { minX: 419, minY: 359, maxX: 611, maxY: 549 },
    right: { minX: 699, minY: 361, maxX: 896, maxY: 554 },
    top: { minX: 562, minY: 114, maxX: 752, maxY: 309 },
  },
  {
    left: { minX: 419, minY: 360, maxX: 611, maxY: 549 },
    right: { minX: 698, minY: 361, maxX: 896, maxY: 554 },
    top: { minX: 562, minY: 115, maxX: 752, maxY: 309 },
  },
  {
    left: { minX: 419, minY: 360, maxX: 610, maxY: 549 },
    right: { minX: 698, minY: 361, maxX: 895, maxY: 554 },
    top: { minX: 561, minY: 115, maxX: 751, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 359, maxX: 610, maxY: 548 },
    right: { minX: 697, minY: 360, maxX: 895, maxY: 553 },
    top: { minX: 561, minY: 114, maxX: 750, maxY: 308 },
  },
  {
    left: { minX: 418, minY: 358, maxX: 609, maxY: 547 },
    right: { minX: 697, minY: 359, maxX: 894, maxY: 552 },
    top: { minX: 560, minY: 113, maxX: 750, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 358, maxX: 609, maxY: 547 },
    right: { minX: 696, minY: 359, maxX: 894, maxY: 552 },
    top: { minX: 559, minY: 113, maxX: 750, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 358, maxX: 608, maxY: 547 },
    right: { minX: 696, minY: 359, maxX: 893, maxY: 552 },
    top: { minX: 559, minY: 113, maxX: 748, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 359, maxX: 608, maxY: 547 },
    right: { minX: 695, minY: 359, maxX: 892, maxY: 552 },
    top: { minX: 558, minY: 113, maxX: 748, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 359, maxX: 608, maxY: 547 },
    right: { minX: 695, minY: 359, maxX: 892, maxY: 552 },
    top: { minX: 558, minY: 114, maxX: 748, maxY: 308 },
  },
  {
    left: { minX: 417, minY: 360, maxX: 608, maxY: 548 },
    right: { minX: 695, minY: 361, maxX: 892, maxY: 553 },
    top: { minX: 559, minY: 115, maxX: 747, maxY: 309 },
  },
  {
    left: { minX: 417, minY: 361, maxX: 608, maxY: 549 },
    right: { minX: 695, minY: 361, maxX: 891, maxY: 553 },
    top: { minX: 559, minY: 117, maxX: 747, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 360, maxX: 608, maxY: 547 },
    right: { minX: 696, minY: 361, maxX: 892, maxY: 552 },
    top: { minX: 559, minY: 116, maxX: 748, maxY: 309 },
  },
  {
    left: { minX: 417, minY: 358, maxX: 607, maxY: 546 },
    right: { minX: 695, minY: 359, maxX: 890, maxY: 551 },
    top: { minX: 559, minY: 115, maxX: 748, maxY: 308 },
  },
  {
    left: { minX: 417, minY: 356, maxX: 607, maxY: 544 },
    right: { minX: 694, minY: 357, maxX: 890, maxY: 549 },
    top: { minX: 559, minY: 112, maxX: 747, maxY: 305 },
  },
  {
    left: { minX: 416, minY: 356, maxX: 606, maxY: 543 },
    right: { minX: 693, minY: 356, maxX: 889, maxY: 548 },
    top: { minX: 557, minY: 111, maxX: 746, maxY: 305 },
  },
  {
    left: { minX: 416, minY: 354, maxX: 606, maxY: 541 },
    right: { minX: 693, minY: 355, maxX: 889, maxY: 547 },
    top: { minX: 557, minY: 109, maxX: 746, maxY: 303 },
  },
  {
    left: { minX: 417, minY: 353, maxX: 607, maxY: 540 },
    right: { minX: 694, minY: 354, maxX: 890, maxY: 545 },
    top: { minX: 558, minY: 108, maxX: 747, maxY: 302 },
  },
  {
    left: { minX: 417, minY: 354, maxX: 607, maxY: 541 },
    right: { minX: 694, minY: 355, maxX: 889, maxY: 547 },
    top: { minX: 558, minY: 110, maxX: 746, maxY: 304 },
  },
  {
    left: { minX: 418, minY: 356, maxX: 607, maxY: 542 },
    right: { minX: 694, minY: 357, maxX: 889, maxY: 548 },
    top: { minX: 559, minY: 113, maxX: 746, maxY: 305 },
  },
  {
    left: { minX: 419, minY: 358, maxX: 607, maxY: 544 },
    right: { minX: 694, minY: 359, maxX: 888, maxY: 550 },
    top: { minX: 559, minY: 116, maxX: 746, maxY: 308 },
  },
  {
    left: { minX: 420, minY: 360, maxX: 608, maxY: 545 },
    right: { minX: 694, minY: 361, maxX: 888, maxY: 551 },
    top: { minX: 560, minY: 119, maxX: 746, maxY: 310 },
  },
  {
    left: { minX: 421, minY: 361, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 552 },
    top: { minX: 561, minY: 121, maxX: 746, maxY: 311 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 609, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 561, minY: 123, maxX: 747, maxY: 312 },
  },
  {
    left: { minX: 422, minY: 363, maxX: 609, maxY: 548 },
    right: { minX: 695, minY: 365, maxX: 888, maxY: 554 },
    top: { minX: 561, minY: 124, maxX: 747, maxY: 313 },
  },
  {
    left: { minX: 422, minY: 363, maxX: 609, maxY: 548 },
    right: { minX: 694, minY: 365, maxX: 888, maxY: 555 },
    top: { minX: 561, minY: 125, maxX: 746, maxY: 314 },
  },
  {
    left: { minX: 423, minY: 363, maxX: 609, maxY: 548 },
    right: { minX: 695, minY: 364, maxX: 888, maxY: 554 },
    top: { minX: 561, minY: 124, maxX: 747, maxY: 313 },
  },
  {
    left: { minX: 421, minY: 363, maxX: 608, maxY: 548 },
    right: { minX: 694, minY: 364, maxX: 887, maxY: 553 },
    top: { minX: 560, minY: 124, maxX: 746, maxY: 313 },
  },
  {
    left: { minX: 420, minY: 362, maxX: 607, maxY: 548 },
    right: { minX: 693, minY: 363, maxX: 886, maxY: 553 },
    top: { minX: 559, minY: 123, maxX: 744, maxY: 312 },
  },
  {
    left: { minX: 419, minY: 362, maxX: 607, maxY: 547 },
    right: { minX: 693, minY: 363, maxX: 886, maxY: 552 },
    top: { minX: 559, minY: 122, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 419, minY: 362, maxX: 607, maxY: 547 },
    right: { minX: 693, minY: 362, maxX: 886, maxY: 552 },
    top: { minX: 559, minY: 122, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 887, maxY: 553 },
    top: { minX: 560, minY: 122, maxX: 746, maxY: 312 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 561, minY: 123, maxX: 746, maxY: 312 },
  },
  {
    left: { minX: 422, minY: 362, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 364, maxX: 888, maxY: 553 },
    top: { minX: 561, minY: 123, maxX: 747, maxY: 313 },
  },
  {
    left: { minX: 422, minY: 362, maxX: 609, maxY: 547 },
    right: { minX: 695, minY: 364, maxX: 889, maxY: 553 },
    top: { minX: 562, minY: 123, maxX: 748, maxY: 313 },
  },
  {
    left: { minX: 422, minY: 362, maxX: 609, maxY: 547 },
    right: { minX: 695, minY: 364, maxX: 888, maxY: 553 },
    top: { minX: 562, minY: 123, maxX: 748, maxY: 313 },
  },
  {
    left: { minX: 421, minY: 361, maxX: 609, maxY: 547 },
    right: { minX: 695, minY: 364, maxX: 888, maxY: 553 },
    top: { minX: 562, minY: 122, maxX: 748, maxY: 312 },
  },
  {
    left: { minX: 421, minY: 360, maxX: 608, maxY: 545 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 562, minY: 121, maxX: 748, maxY: 311 },
  },
  {
    left: { minX: 421, minY: 360, maxX: 608, maxY: 545 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 552 },
    top: { minX: 562, minY: 120, maxX: 748, maxY: 311 },
  },
  {
    left: { minX: 417, minY: 360, maxX: 605, maxY: 546 },
    right: { minX: 691, minY: 363, maxX: 885, maxY: 553 },
    top: { minX: 559, minY: 121, maxX: 745, maxY: 311 },
  },
  {
    left: { minX: 416, minY: 361, maxX: 605, maxY: 547 },
    right: { minX: 691, minY: 363, maxX: 884, maxY: 552 },
    top: { minX: 558, minY: 121, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 416, minY: 361, maxX: 604, maxY: 547 },
    right: { minX: 690, minY: 363, maxX: 883, maxY: 553 },
    top: { minX: 557, minY: 121, maxX: 743, maxY: 311 },
  },
  {
    left: { minX: 416, minY: 362, maxX: 604, maxY: 547 },
    right: { minX: 690, minY: 364, maxX: 883, maxY: 553 },
    top: { minX: 557, minY: 123, maxX: 743, maxY: 312 },
  },
  {
    left: { minX: 416, minY: 362, maxX: 604, maxY: 548 },
    right: { minX: 690, minY: 365, maxX: 882, maxY: 553 },
    top: { minX: 557, minY: 123, maxX: 743, maxY: 313 },
  },
  {
    left: { minX: 416, minY: 363, maxX: 604, maxY: 548 },
    right: { minX: 690, minY: 365, maxX: 883, maxY: 554 },
    top: { minX: 557, minY: 123, maxX: 743, maxY: 313 },
  },
  {
    left: { minX: 416, minY: 363, maxX: 604, maxY: 548 },
    right: { minX: 690, minY: 365, maxX: 882, maxY: 554 },
    top: { minX: 557, minY: 124, maxX: 743, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 603, maxY: 548 },
    right: { minX: 689, minY: 365, maxX: 882, maxY: 554 },
    top: { minX: 557, minY: 123, maxX: 742, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 362, maxX: 603, maxY: 548 },
    right: { minX: 689, minY: 364, maxX: 882, maxY: 553 },
    top: { minX: 557, minY: 123, maxX: 742, maxY: 313 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 603, maxY: 548 },
    right: { minX: 689, minY: 364, maxX: 882, maxY: 553 },
    top: { minX: 556, minY: 122, maxX: 742, maxY: 312 },
  },
  {
    left: { minX: 414, minY: 361, maxX: 602, maxY: 548 },
    right: { minX: 689, minY: 363, maxX: 882, maxY: 553 },
    top: { minX: 555, minY: 122, maxX: 742, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 602, maxY: 549 },
    right: { minX: 688, minY: 364, maxX: 880, maxY: 553 },
    top: { minX: 554, minY: 122, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 413, minY: 362, maxX: 602, maxY: 548 },
    right: { minX: 688, minY: 364, maxX: 881, maxY: 553 },
    top: { minX: 555, minY: 122, maxX: 741, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 601, maxY: 548 },
    right: { minX: 688, minY: 363, maxX: 880, maxY: 553 },
    top: { minX: 554, minY: 122, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 601, maxY: 549 },
    right: { minX: 688, minY: 363, maxX: 880, maxY: 553 },
    top: { minX: 554, minY: 121, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 602, maxY: 549 },
    right: { minX: 688, minY: 363, maxX: 881, maxY: 553 },
    top: { minX: 553, minY: 121, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 363, maxX: 602, maxY: 549 },
    right: { minX: 688, minY: 363, maxX: 881, maxY: 553 },
    top: { minX: 553, minY: 121, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 603, maxY: 549 },
    right: { minX: 690, minY: 363, maxX: 884, maxY: 553 },
    top: { minX: 555, minY: 120, maxX: 742, maxY: 311 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 604, maxY: 550 },
    right: { minX: 690, minY: 363, maxX: 884, maxY: 553 },
    top: { minX: 555, minY: 120, maxX: 742, maxY: 311 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 604, maxY: 550 },
    right: { minX: 690, minY: 362, maxX: 885, maxY: 552 },
    top: { minX: 555, minY: 119, maxX: 742, maxY: 311 },
  },
  {
    left: { minX: 415, minY: 361, maxX: 605, maxY: 549 },
    right: { minX: 692, minY: 362, maxX: 886, maxY: 552 },
    top: { minX: 556, minY: 119, maxX: 743, maxY: 311 },
  },
  {
    left: { minX: 415, minY: 361, maxX: 605, maxY: 549 },
    right: { minX: 692, minY: 362, maxX: 887, maxY: 552 },
    top: { minX: 557, minY: 119, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 605, maxY: 550 },
    right: { minX: 692, minY: 363, maxX: 886, maxY: 553 },
    top: { minX: 556, minY: 120, maxX: 744, maxY: 312 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 605, maxY: 551 },
    right: { minX: 692, minY: 364, maxX: 886, maxY: 554 },
    top: { minX: 557, minY: 121, maxX: 744, maxY: 312 },
  },
  {
    left: { minX: 415, minY: 364, maxX: 605, maxY: 552 },
    right: { minX: 692, minY: 364, maxX: 886, maxY: 554 },
    top: { minX: 557, minY: 122, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 416, minY: 364, maxX: 606, maxY: 551 },
    right: { minX: 693, minY: 364, maxX: 887, maxY: 555 },
    top: { minX: 557, minY: 122, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 606, maxY: 551 },
    right: { minX: 693, minY: 364, maxX: 887, maxY: 555 },
    top: { minX: 557, minY: 121, maxX: 745, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 364, maxX: 605, maxY: 552 },
    right: { minX: 693, minY: 364, maxX: 887, maxY: 555 },
    top: { minX: 557, minY: 121, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 365, maxX: 606, maxY: 553 },
    right: { minX: 693, minY: 365, maxX: 888, maxY: 555 },
    top: { minX: 557, minY: 122, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 417, minY: 365, maxX: 608, maxY: 554 },
    right: { minX: 695, minY: 365, maxX: 890, maxY: 556 },
    top: { minX: 559, minY: 122, maxX: 746, maxY: 314 },
  },
  {
    left: { minX: 417, minY: 366, maxX: 608, maxY: 555 },
    right: { minX: 695, minY: 366, maxX: 890, maxY: 557 },
    top: { minX: 559, minY: 123, maxX: 746, maxY: 315 },
  },
  {
    left: { minX: 418, minY: 366, maxX: 609, maxY: 555 },
    right: { minX: 696, minY: 366, maxX: 892, maxY: 557 },
    top: { minX: 560, minY: 123, maxX: 748, maxY: 315 },
  },
  {
    left: { minX: 418, minY: 367, maxX: 610, maxY: 556 },
    right: { minX: 697, minY: 367, maxX: 893, maxY: 558 },
    top: { minX: 561, minY: 123, maxX: 748, maxY: 316 },
  },
  {
    left: { minX: 419, minY: 368, maxX: 610, maxY: 558 },
    right: { minX: 698, minY: 368, maxX: 894, maxY: 560 },
    top: { minX: 561, minY: 125, maxX: 749, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 369, maxX: 611, maxY: 559 },
    right: { minX: 698, minY: 368, maxX: 894, maxY: 560 },
    top: { minX: 561, minY: 126, maxX: 749, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 368, maxX: 611, maxY: 559 },
    right: { minX: 698, minY: 368, maxX: 895, maxY: 560 },
    top: { minX: 561, minY: 125, maxX: 750, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 367, maxX: 611, maxY: 557 },
    right: { minX: 699, minY: 366, maxX: 895, maxY: 559 },
    top: { minX: 561, minY: 122, maxX: 750, maxY: 315 },
  },
  {
    left: { minX: 418, minY: 367, maxX: 610, maxY: 557 },
    right: { minX: 698, minY: 366, maxX: 895, maxY: 559 },
    top: { minX: 561, minY: 122, maxX: 750, maxY: 315 },
  },
  {
    left: { minX: 417, minY: 367, maxX: 609, maxY: 558 },
    right: { minX: 697, minY: 366, maxX: 894, maxY: 559 },
    top: { minX: 559, minY: 122, maxX: 748, maxY: 315 },
  },
  {
    left: { minX: 416, minY: 367, maxX: 608, maxY: 558 },
    right: { minX: 696, minY: 366, maxX: 893, maxY: 558 },
    top: { minX: 558, minY: 122, maxX: 748, maxY: 315 },
  },
  {
    left: { minX: 413, minY: 368, maxX: 607, maxY: 559 },
    right: { minX: 695, minY: 366, maxX: 892, maxY: 559 },
    top: { minX: 555, minY: 121, maxX: 745, maxY: 315 },
  },
  {
    left: { minX: 413, minY: 369, maxX: 606, maxY: 560 },
    right: { minX: 694, minY: 367, maxX: 891, maxY: 559 },
    top: { minX: 555, minY: 123, maxX: 744, maxY: 317 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 607, maxY: 563 },
    right: { minX: 695, minY: 369, maxX: 891, maxY: 561 },
    top: { minX: 555, minY: 127, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 608, maxY: 563 },
    right: { minX: 695, minY: 369, maxX: 892, maxY: 561 },
    top: { minX: 556, minY: 127, maxX: 745, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 608, maxY: 562 },
    right: { minX: 696, minY: 369, maxX: 892, maxY: 561 },
    top: { minX: 557, minY: 126, maxX: 746, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 608, maxY: 562 },
    right: { minX: 696, minY: 369, maxX: 892, maxY: 562 },
    top: { minX: 557, minY: 126, maxX: 745, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 607, maxY: 563 },
    right: { minX: 695, minY: 370, maxX: 891, maxY: 562 },
    top: { minX: 556, minY: 128, maxX: 744, maxY: 320 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 606, maxY: 563 },
    right: { minX: 694, minY: 370, maxX: 890, maxY: 562 },
    top: { minX: 555, minY: 128, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 607, maxY: 562 },
    right: { minX: 695, minY: 369, maxX: 891, maxY: 562 },
    top: { minX: 555, minY: 127, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 371, maxX: 607, maxY: 562 },
    right: { minX: 694, minY: 369, maxX: 890, maxY: 561 },
    top: { minX: 555, minY: 126, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 413, minY: 370, maxX: 606, maxY: 562 },
    right: { minX: 694, minY: 368, maxX: 890, maxY: 561 },
    top: { minX: 555, minY: 125, maxX: 744, maxY: 318 },
  },
  {
    left: { minX: 413, minY: 369, maxX: 606, maxY: 561 },
    right: { minX: 694, minY: 368, maxX: 890, maxY: 560 },
    top: { minX: 555, minY: 124, maxX: 744, maxY: 317 },
  },
  {
    left: { minX: 413, minY: 369, maxX: 607, maxY: 561 },
    right: { minX: 695, minY: 367, maxX: 891, maxY: 560 },
    top: { minX: 555, minY: 123, maxX: 745, maxY: 317 },
  },
  {
    left: { minX: 413, minY: 370, maxX: 607, maxY: 561 },
    right: { minX: 695, minY: 368, maxX: 891, maxY: 560 },
    top: { minX: 556, minY: 125, maxX: 745, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 370, maxX: 605, maxY: 561 },
    right: { minX: 693, minY: 368, maxX: 889, maxY: 561 },
    top: { minX: 554, minY: 125, maxX: 743, maxY: 318 },
  },
  {
    left: { minX: 413, minY: 371, maxX: 606, maxY: 562 },
    right: { minX: 693, minY: 369, maxX: 890, maxY: 561 },
    top: { minX: 555, minY: 126, maxX: 744, maxY: 318 },
  },
  {
    left: { minX: 412, minY: 371, maxX: 605, maxY: 562 },
    right: { minX: 693, minY: 369, maxX: 889, maxY: 561 },
    top: { minX: 554, minY: 127, maxX: 743, maxY: 319 },
  },
  {
    left: { minX: 412, minY: 371, maxX: 605, maxY: 562 },
    right: { minX: 693, minY: 369, maxX: 888, maxY: 562 },
    top: { minX: 554, minY: 127, maxX: 742, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 371, maxX: 604, maxY: 562 },
    right: { minX: 692, minY: 370, maxX: 887, maxY: 562 },
    top: { minX: 553, minY: 127, maxX: 742, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 371, maxX: 604, maxY: 562 },
    right: { minX: 692, minY: 369, maxX: 887, maxY: 561 },
    top: { minX: 553, minY: 127, maxX: 742, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 371, maxX: 604, maxY: 561 },
    right: { minX: 692, minY: 369, maxX: 887, maxY: 561 },
    top: { minX: 554, minY: 127, maxX: 742, maxY: 318 },
  },
  {
    left: { minX: 411, minY: 370, maxX: 604, maxY: 561 },
    right: { minX: 692, minY: 369, maxX: 887, maxY: 561 },
    top: { minX: 554, minY: 126, maxX: 742, maxY: 318 },
  },
  {
    left: { minX: 411, minY: 367, maxX: 604, maxY: 558 },
    right: { minX: 692, minY: 366, maxX: 887, maxY: 558 },
    top: { minX: 554, minY: 122, maxX: 743, maxY: 315 },
  },
  {
    left: { minX: 412, minY: 364, maxX: 605, maxY: 555 },
    right: { minX: 693, minY: 364, maxX: 889, maxY: 556 },
    top: { minX: 555, minY: 119, maxX: 745, maxY: 313 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 604, maxY: 557 },
    right: { minX: 692, minY: 366, maxX: 886, maxY: 557 },
    top: { minX: 554, minY: 121, maxX: 743, maxY: 314 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 604, maxY: 557 },
    right: { minX: 692, minY: 366, maxX: 887, maxY: 557 },
    top: { minX: 555, minY: 123, maxX: 743, maxY: 315 },
  },
  {
    left: { minX: 412, minY: 366, maxX: 604, maxY: 556 },
    right: { minX: 692, minY: 366, maxX: 887, maxY: 557 },
    top: { minX: 555, minY: 122, maxX: 744, maxY: 315 },
  },
  {
    left: { minX: 412, minY: 367, maxX: 604, maxY: 557 },
    right: { minX: 692, minY: 367, maxX: 886, maxY: 558 },
    top: { minX: 555, minY: 124, maxX: 744, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 368, maxX: 603, maxY: 558 },
    right: { minX: 690, minY: 368, maxX: 884, maxY: 558 },
    top: { minX: 554, minY: 126, maxX: 741, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 367, maxX: 603, maxY: 556 },
    right: { minX: 690, minY: 367, maxX: 884, maxY: 557 },
    top: { minX: 553, minY: 124, maxX: 741, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 602, maxY: 555 },
    right: { minX: 689, minY: 366, maxX: 883, maxY: 556 },
    top: { minX: 553, minY: 123, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 601, maxY: 555 },
    right: { minX: 688, minY: 366, maxX: 882, maxY: 556 },
    top: { minX: 552, minY: 124, maxX: 739, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 602, maxY: 555 },
    right: { minX: 688, minY: 366, maxX: 882, maxY: 555 },
    top: { minX: 553, minY: 124, maxX: 739, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 602, maxY: 554 },
    right: { minX: 688, minY: 366, maxX: 881, maxY: 555 },
    top: { minX: 553, minY: 124, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 365, maxX: 601, maxY: 553 },
    right: { minX: 688, minY: 365, maxX: 881, maxY: 555 },
    top: { minX: 553, minY: 124, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 409, minY: 365, maxX: 599, maxY: 553 },
    right: { minX: 685, minY: 365, maxX: 877, maxY: 553 },
    top: { minX: 550, minY: 124, maxX: 736, maxY: 314 },
  },
  {
    left: { minX: 409, minY: 365, maxX: 599, maxY: 552 },
    right: { minX: 685, minY: 364, maxX: 876, maxY: 552 },
    top: { minX: 549, minY: 124, maxX: 736, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 365, maxX: 597, maxY: 552 },
    right: { minX: 683, minY: 365, maxX: 874, maxY: 553 },
    top: { minX: 547, minY: 125, maxX: 734, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 365, maxX: 597, maxY: 551 },
    right: { minX: 683, minY: 364, maxX: 873, maxY: 551 },
    top: { minX: 547, minY: 125, maxX: 732, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 366, maxX: 595, maxY: 552 },
    right: { minX: 681, minY: 365, maxX: 871, maxY: 552 },
    top: { minX: 546, minY: 127, maxX: 731, maxY: 315 },
  },
  {
    left: { minX: 406, minY: 366, maxX: 595, maxY: 552 },
    right: { minX: 681, minY: 365, maxX: 870, maxY: 552 },
    top: { minX: 545, minY: 127, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 406, minY: 366, maxX: 595, maxY: 552 },
    right: { minX: 680, minY: 365, maxX: 870, maxY: 552 },
    top: { minX: 545, minY: 127, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 407, minY: 367, maxX: 595, maxY: 552 },
    right: { minX: 681, minY: 365, maxX: 870, maxY: 552 },
    top: { minX: 545, minY: 128, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 408, minY: 367, maxX: 596, maxY: 552 },
    right: { minX: 681, minY: 365, maxX: 871, maxY: 552 },
    top: { minX: 547, minY: 128, maxX: 731, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 597, maxY: 552 },
    right: { minX: 683, minY: 366, maxX: 872, maxY: 553 },
    top: { minX: 548, minY: 129, maxX: 732, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 598, maxY: 552 },
    right: { minX: 683, minY: 366, maxX: 872, maxY: 553 },
    top: { minX: 549, minY: 129, maxX: 733, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 365, maxX: 599, maxY: 551 },
    right: { minX: 685, minY: 366, maxX: 874, maxY: 552 },
    top: { minX: 551, minY: 128, maxX: 735, maxY: 315 },
  },
  {
    left: { minX: 412, minY: 365, maxX: 599, maxY: 550 },
    right: { minX: 684, minY: 365, maxX: 873, maxY: 552 },
    top: { minX: 551, minY: 129, maxX: 734, maxY: 315 },
  },
  {
    left: { minX: 412, minY: 365, maxX: 599, maxY: 549 },
    right: { minX: 683, minY: 365, maxX: 872, maxY: 551 },
    top: { minX: 551, minY: 129, maxX: 734, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 365, maxX: 597, maxY: 549 },
    right: { minX: 682, minY: 365, maxX: 870, maxY: 551 },
    top: { minX: 549, minY: 129, maxX: 732, maxY: 316 },
  },
  {
    left: { minX: 409, minY: 365, maxX: 596, maxY: 549 },
    right: { minX: 680, minY: 365, maxX: 868, maxY: 550 },
    top: { minX: 548, minY: 129, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 365, maxX: 596, maxY: 548 },
    right: { minX: 680, minY: 365, maxX: 868, maxY: 549 },
    top: { minX: 547, minY: 129, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 595, maxY: 549 },
    right: { minX: 679, minY: 366, maxX: 866, maxY: 550 },
    top: { minX: 547, minY: 132, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 596, maxY: 549 },
    right: { minX: 680, minY: 366, maxX: 866, maxY: 550 },
    top: { minX: 548, minY: 132, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 366, maxX: 597, maxY: 548 },
    right: { minX: 680, minY: 366, maxX: 867, maxY: 550 },
    top: { minX: 549, minY: 132, maxX: 730, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 367, maxX: 597, maxY: 549 },
    right: { minX: 680, minY: 367, maxX: 866, maxY: 550 },
    top: { minX: 549, minY: 133, maxX: 730, maxY: 317 },
  },
  {
    left: { minX: 413, minY: 367, maxX: 597, maxY: 548 },
    right: { minX: 681, minY: 367, maxX: 867, maxY: 550 },
    top: { minX: 549, minY: 133, maxX: 730, maxY: 317 },
  },
  {
    left: { minX: 414, minY: 368, maxX: 598, maxY: 549 },
    right: { minX: 681, minY: 368, maxX: 867, maxY: 551 },
    top: { minX: 551, minY: 135, maxX: 730, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 598, maxY: 548 },
    right: { minX: 682, minY: 367, maxX: 867, maxY: 551 },
    top: { minX: 551, minY: 135, maxX: 731, maxY: 318 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 599, maxY: 548 },
    right: { minX: 682, minY: 368, maxX: 867, maxY: 551 },
    top: { minX: 551, minY: 136, maxX: 731, maxY: 319 },
  },
  {
    left: { minX: 416, minY: 367, maxX: 599, maxY: 548 },
    right: { minX: 682, minY: 368, maxX: 867, maxY: 550 },
    top: { minX: 551, minY: 136, maxX: 731, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 598, maxY: 547 },
    right: { minX: 681, minY: 367, maxX: 866, maxY: 550 },
    top: { minX: 551, minY: 136, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 416, minY: 367, maxX: 598, maxY: 547 },
    right: { minX: 681, minY: 366, maxX: 866, maxY: 549 },
    top: { minX: 551, minY: 135, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 597, maxY: 546 },
    right: { minX: 680, minY: 366, maxX: 865, maxY: 548 },
    top: { minX: 550, minY: 135, maxX: 728, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 597, maxY: 546 },
    right: { minX: 680, minY: 365, maxX: 864, maxY: 547 },
    top: { minX: 549, minY: 135, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 415, minY: 366, maxX: 596, maxY: 545 },
    right: { minX: 679, minY: 365, maxX: 864, maxY: 547 },
    top: { minX: 548, minY: 135, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 415, minY: 366, maxX: 597, maxY: 545 },
    right: { minX: 679, minY: 365, maxX: 863, maxY: 547 },
    top: { minX: 548, minY: 135, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 416, minY: 365, maxX: 597, maxY: 544 },
    right: { minX: 679, minY: 365, maxX: 863, maxY: 546 },
    top: { minX: 549, minY: 135, maxX: 727, maxY: 316 },
  },
  {
    left: { minX: 416, minY: 366, maxX: 597, maxY: 544 },
    right: { minX: 679, minY: 365, maxX: 863, maxY: 546 },
    top: { minX: 549, minY: 136, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 417, minY: 366, maxX: 597, maxY: 543 },
    right: { minX: 679, minY: 365, maxX: 862, maxY: 546 },
    top: { minX: 549, minY: 136, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 366, maxX: 597, maxY: 543 },
    right: { minX: 679, minY: 365, maxX: 862, maxY: 545 },
    top: { minX: 550, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 365, maxX: 597, maxY: 543 },
    right: { minX: 679, minY: 365, maxX: 862, maxY: 545 },
    top: { minX: 550, minY: 136, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 365, maxX: 597, maxY: 542 },
    right: { minX: 679, minY: 365, maxX: 861, maxY: 544 },
    top: { minX: 550, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 365, maxX: 597, maxY: 542 },
    right: { minX: 679, minY: 365, maxX: 861, maxY: 544 },
    top: { minX: 550, minY: 137, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 365, maxX: 598, maxY: 541 },
    right: { minX: 679, minY: 364, maxX: 861, maxY: 544 },
    top: { minX: 551, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 420, minY: 365, maxX: 598, maxY: 540 },
    right: { minX: 679, minY: 364, maxX: 861, maxY: 543 },
    top: { minX: 551, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 420, minY: 365, maxX: 598, maxY: 541 },
    right: { minX: 680, minY: 365, maxX: 861, maxY: 543 },
    top: { minX: 551, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 599, maxY: 541 },
    right: { minX: 680, minY: 365, maxX: 861, maxY: 544 },
    top: { minX: 552, minY: 139, maxX: 727, maxY: 318 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 598, maxY: 542 },
    right: { minX: 679, minY: 366, maxX: 860, maxY: 544 },
    top: { minX: 551, minY: 140, maxX: 727, maxY: 318 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 599, maxY: 541 },
    right: { minX: 680, minY: 365, maxX: 861, maxY: 543 },
    top: { minX: 553, minY: 139, maxX: 727, maxY: 318 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 599, maxY: 541 },
    right: { minX: 680, minY: 365, maxX: 860, maxY: 544 },
    top: { minX: 553, minY: 141, maxX: 728, maxY: 318 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 598, maxY: 541 },
    right: { minX: 679, minY: 365, maxX: 859, maxY: 543 },
    top: { minX: 551, minY: 141, maxX: 726, maxY: 318 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 598, maxY: 540 },
    right: { minX: 678, minY: 365, maxX: 858, maxY: 543 },
    top: { minX: 551, minY: 141, maxX: 725, maxY: 318 },
  },
  {
    left: { minX: 421, minY: 367, maxX: 597, maxY: 540 },
    right: { minX: 677, minY: 365, maxX: 857, maxY: 542 },
    top: { minX: 549, minY: 141, maxX: 723, maxY: 318 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 597, maxY: 539 },
    right: { minX: 677, minY: 364, maxX: 857, maxY: 541 },
    top: { minX: 549, minY: 140, maxX: 724, maxY: 317 },
  },
  {
    left: { minX: 421, minY: 365, maxX: 597, maxY: 538 },
    right: { minX: 677, minY: 363, maxX: 857, maxY: 541 },
    top: { minX: 549, minY: 139, maxX: 723, maxY: 317 },
  },
  {
    left: { minX: 422, minY: 365, maxX: 597, maxY: 538 },
    right: { minX: 678, minY: 363, maxX: 858, maxY: 540 },
    top: { minX: 549, minY: 139, maxX: 724, maxY: 316 },
  },
  {
    left: { minX: 422, minY: 365, maxX: 598, maxY: 538 },
    right: { minX: 678, minY: 363, maxX: 857, maxY: 540 },
    top: { minX: 550, minY: 139, maxX: 724, maxY: 316 },
  },
  {
    left: { minX: 424, minY: 364, maxX: 599, maxY: 537 },
    right: { minX: 679, minY: 363, maxX: 858, maxY: 539 },
    top: { minX: 551, minY: 139, maxX: 725, maxY: 316 },
  },
  {
    left: { minX: 425, minY: 364, maxX: 600, maxY: 536 },
    right: { minX: 679, minY: 363, maxX: 859, maxY: 539 },
    top: { minX: 553, minY: 139, maxX: 726, maxY: 316 },
  },
  {
    left: { minX: 425, minY: 364, maxX: 600, maxY: 536 },
    right: { minX: 679, minY: 363, maxX: 858, maxY: 540 },
    top: { minX: 553, minY: 140, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 426, minY: 365, maxX: 599, maxY: 537 },
    right: { minX: 679, minY: 363, maxX: 857, maxY: 540 },
    top: { minX: 553, minY: 141, maxX: 725, maxY: 317 },
  },
  {
    left: { minX: 426, minY: 365, maxX: 600, maxY: 537 },
    right: { minX: 679, minY: 364, maxX: 857, maxY: 540 },
    top: { minX: 553, minY: 142, maxX: 725, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 364, maxX: 599, maxY: 535 },
    right: { minX: 678, minY: 363, maxX: 856, maxY: 539 },
    top: { minX: 552, minY: 141, maxX: 724, maxY: 316 },
  },
  {
    left: { minX: 423, minY: 363, maxX: 597, maxY: 534 },
    right: { minX: 676, minY: 361, maxX: 854, maxY: 537 },
    top: { minX: 550, minY: 139, maxX: 723, maxY: 315 },
  },
  {
    left: { minX: 423, minY: 362, maxX: 597, maxY: 533 },
    right: { minX: 676, minY: 361, maxX: 854, maxY: 537 },
    top: { minX: 550, minY: 139, maxX: 722, maxY: 315 },
  },
  {
    left: { minX: 422, minY: 361, maxX: 595, maxY: 532 },
    right: { minX: 674, minY: 360, maxX: 851, maxY: 535 },
    top: { minX: 548, minY: 139, maxX: 720, maxY: 314 },
  },
  {
    left: { minX: 421, minY: 363, maxX: 594, maxY: 533 },
    right: { minX: 673, minY: 361, maxX: 850, maxY: 536 },
    top: { minX: 547, minY: 141, maxX: 719, maxY: 315 },
  },
  {
    left: { minX: 420, minY: 361, maxX: 593, maxY: 532 },
    right: { minX: 672, minY: 361, maxX: 848, maxY: 535 },
    top: { minX: 547, minY: 139, maxX: 718, maxY: 314 },
  },
  {
    left: { minX: 420, minY: 361, maxX: 593, maxY: 531 },
    right: { minX: 671, minY: 360, maxX: 847, maxY: 534 },
    top: { minX: 546, minY: 139, maxX: 718, maxY: 314 },
  },
  {
    left: { minX: 419, minY: 361, maxX: 591, maxY: 531 },
    right: { minX: 669, minY: 360, maxX: 845, maxY: 534 },
    top: { minX: 544, minY: 140, maxX: 716, maxY: 314 },
  },
  {
    left: { minX: 418, minY: 361, maxX: 590, maxY: 530 },
    right: { minX: 668, minY: 359, maxX: 844, maxY: 533 },
    top: { minX: 543, minY: 139, maxX: 714, maxY: 314 },
  },
  {
    left: { minX: 418, minY: 362, maxX: 590, maxY: 531 },
    right: { minX: 668, minY: 360, maxX: 842, maxY: 533 },
    top: { minX: 542, minY: 141, maxX: 713, maxY: 315 },
  },
  {
    left: { minX: 418, minY: 363, maxX: 589, maxY: 531 },
    right: { minX: 667, minY: 361, maxX: 841, maxY: 534 },
    top: { minX: 542, minY: 142, maxX: 712, maxY: 315 },
  },
  {
    left: { minX: 419, minY: 363, maxX: 590, maxY: 531 },
    right: { minX: 668, minY: 361, maxX: 842, maxY: 534 },
    top: { minX: 543, minY: 143, maxX: 713, maxY: 316 },
  },
  {
    left: { minX: 420, minY: 365, maxX: 590, maxY: 533 },
    right: { minX: 668, minY: 363, maxX: 842, maxY: 536 },
    top: { minX: 543, minY: 147, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 592, maxY: 534 },
    right: { minX: 669, minY: 364, maxX: 844, maxY: 537 },
    top: { minX: 545, minY: 147, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 423, minY: 366, maxX: 593, maxY: 533 },
    right: { minX: 671, minY: 364, maxX: 845, maxY: 537 },
    top: { minX: 546, minY: 147, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 425, minY: 366, maxX: 595, maxY: 533 },
    right: { minX: 672, minY: 364, maxX: 846, maxY: 536 },
    top: { minX: 547, minY: 147, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 426, minY: 366, maxX: 595, maxY: 534 },
    right: { minX: 672, minY: 364, maxX: 846, maxY: 536 },
    top: { minX: 547, minY: 148, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 596, maxY: 534 },
    right: { minX: 672, minY: 365, maxX: 846, maxY: 537 },
    top: { minX: 549, minY: 149, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 427, minY: 368, maxX: 596, maxY: 534 },
    right: { minX: 673, minY: 365, maxX: 847, maxY: 537 },
    top: { minX: 549, minY: 150, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 596, maxY: 535 },
    right: { minX: 673, minY: 365, maxX: 847, maxY: 537 },
    top: { minX: 549, minY: 150, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 597, maxY: 534 },
    right: { minX: 673, minY: 365, maxX: 847, maxY: 537 },
    top: { minX: 549, minY: 150, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 597, maxY: 535 },
    right: { minX: 674, minY: 366, maxX: 847, maxY: 537 },
    top: { minX: 550, minY: 151, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 369, maxX: 597, maxY: 535 },
    right: { minX: 673, minY: 366, maxX: 847, maxY: 538 },
    top: { minX: 549, minY: 151, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 597, maxY: 535 },
    right: { minX: 674, minY: 366, maxX: 847, maxY: 537 },
    top: { minX: 549, minY: 151, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 597, maxY: 533 },
    right: { minX: 673, minY: 365, maxX: 847, maxY: 536 },
    top: { minX: 549, minY: 149, maxX: 718, maxY: 320 },
  },
  {
    left: { minX: 430, minY: 366, maxX: 597, maxY: 532 },
    right: { minX: 674, minY: 364, maxX: 848, maxY: 536 },
    top: { minX: 551, minY: 149, maxX: 718, maxY: 320 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 596, maxY: 533 },
    right: { minX: 673, minY: 365, maxX: 846, maxY: 536 },
    top: { minX: 549, minY: 151, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 596, maxY: 532 },
    right: { minX: 672, minY: 365, maxX: 845, maxY: 536 },
    top: { minX: 549, minY: 150, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 428, minY: 366, maxX: 595, maxY: 531 },
    right: { minX: 671, minY: 363, maxX: 845, maxY: 535 },
    top: { minX: 548, minY: 149, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 427, minY: 366, maxX: 595, maxY: 531 },
    right: { minX: 671, minY: 363, maxX: 844, maxY: 534 },
    top: { minX: 547, minY: 149, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 594, maxY: 532 },
    right: { minX: 670, minY: 363, maxX: 843, maxY: 535 },
    top: { minX: 546, minY: 149, maxX: 713, maxY: 319 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 593, maxY: 532 },
    right: { minX: 669, minY: 364, maxX: 842, maxY: 535 },
    top: { minX: 545, minY: 150, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 593, maxY: 532 },
    right: { minX: 669, minY: 364, maxX: 841, maxY: 535 },
    top: { minX: 545, minY: 151, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 592, maxY: 533 },
    right: { minX: 668, minY: 365, maxX: 840, maxY: 535 },
    top: { minX: 545, minY: 152, maxX: 711, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 592, maxY: 533 },
    right: { minX: 667, minY: 365, maxX: 839, maxY: 535 },
    top: { minX: 544, minY: 153, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 426, minY: 368, maxX: 592, maxY: 533 },
    right: { minX: 668, minY: 365, maxX: 840, maxY: 535 },
    top: { minX: 545, minY: 152, maxX: 711, maxY: 321 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 593, maxY: 532 },
    right: { minX: 668, minY: 364, maxX: 840, maxY: 535 },
    top: { minX: 545, minY: 151, maxX: 711, maxY: 320 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 593, maxY: 532 },
    right: { minX: 669, minY: 364, maxX: 841, maxY: 534 },
    top: { minX: 545, minY: 151, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 594, maxY: 532 },
    right: { minX: 669, minY: 364, maxX: 841, maxY: 535 },
    top: { minX: 546, minY: 151, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 594, maxY: 532 },
    right: { minX: 669, minY: 365, maxX: 841, maxY: 535 },
    top: { minX: 546, minY: 152, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 594, maxY: 532 },
    right: { minX: 670, minY: 365, maxX: 842, maxY: 535 },
    top: { minX: 547, minY: 152, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 427, minY: 368, maxX: 594, maxY: 532 },
    right: { minX: 669, minY: 365, maxX: 841, maxY: 535 },
    top: { minX: 546, minY: 152, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 426, minY: 369, maxX: 593, maxY: 533 },
    right: { minX: 668, minY: 365, maxX: 840, maxY: 535 },
    top: { minX: 545, minY: 153, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 592, maxY: 533 },
    right: { minX: 667, minY: 365, maxX: 838, maxY: 535 },
    top: { minX: 543, minY: 153, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 424, minY: 369, maxX: 591, maxY: 533 },
    right: { minX: 666, minY: 365, maxX: 837, maxY: 535 },
    top: { minX: 543, minY: 154, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 424, minY: 369, maxX: 591, maxY: 533 },
    right: { minX: 665, minY: 365, maxX: 837, maxY: 535 },
    top: { minX: 543, minY: 154, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 591, maxY: 532 },
    right: { minX: 666, minY: 364, maxX: 837, maxY: 534 },
    top: { minX: 543, minY: 153, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 591, maxY: 531 },
    right: { minX: 666, minY: 365, maxX: 837, maxY: 534 },
    top: { minX: 543, minY: 153, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 591, maxY: 532 },
    right: { minX: 666, minY: 365, maxX: 836, maxY: 535 },
    top: { minX: 543, minY: 155, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 590, maxY: 531 },
    right: { minX: 665, minY: 365, maxX: 836, maxY: 533 },
    top: { minX: 543, minY: 154, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 591, maxY: 531 },
    right: { minX: 665, minY: 365, maxX: 835, maxY: 534 },
    top: { minX: 543, minY: 155, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 589, maxY: 533 },
    right: { minX: 664, minY: 367, maxX: 834, maxY: 535 },
    top: { minX: 542, minY: 157, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 590, maxY: 534 },
    right: { minX: 665, minY: 368, maxX: 835, maxY: 536 },
    top: { minX: 543, minY: 159, maxX: 706, maxY: 325 },
  },
  {
    left: { minX: 426, minY: 372, maxX: 591, maxY: 534 },
    right: { minX: 665, minY: 369, maxX: 835, maxY: 537 },
    top: { minX: 543, minY: 159, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 426, minY: 372, maxX: 590, maxY: 534 },
    right: { minX: 665, minY: 369, maxX: 834, maxY: 537 },
    top: { minX: 543, minY: 159, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 590, maxY: 533 },
    right: { minX: 665, minY: 368, maxX: 835, maxY: 536 },
    top: { minX: 543, minY: 158, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 590, maxY: 532 },
    right: { minX: 665, minY: 367, maxX: 835, maxY: 535 },
    top: { minX: 544, minY: 157, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 591, maxY: 532 },
    right: { minX: 666, minY: 366, maxX: 835, maxY: 535 },
    top: { minX: 544, minY: 155, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 590, maxY: 531 },
    right: { minX: 665, minY: 366, maxX: 835, maxY: 535 },
    top: { minX: 544, minY: 155, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 424, minY: 368, maxX: 590, maxY: 531 },
    right: { minX: 664, minY: 366, maxX: 834, maxY: 535 },
    top: { minX: 543, minY: 155, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 423, minY: 367, maxX: 589, maxY: 531 },
    right: { minX: 664, minY: 366, maxX: 834, maxY: 535 },
    top: { minX: 543, minY: 155, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 422, minY: 367, maxX: 588, maxY: 530 },
    right: { minX: 664, minY: 365, maxX: 833, maxY: 534 },
    top: { minX: 543, minY: 153, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 421, minY: 365, maxX: 587, maxY: 529 },
    right: { minX: 662, minY: 364, maxX: 832, maxY: 533 },
    top: { minX: 542, minY: 152, maxX: 707, maxY: 320 },
  },
  {
    left: { minX: 419, minY: 365, maxX: 586, maxY: 529 },
    right: { minX: 661, minY: 364, maxX: 831, maxY: 533 },
    top: { minX: 541, minY: 152, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 418, minY: 365, maxX: 585, maxY: 529 },
    right: { minX: 660, minY: 365, maxX: 830, maxY: 533 },
    top: { minX: 540, minY: 152, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 417, minY: 365, maxX: 584, maxY: 529 },
    right: { minX: 659, minY: 365, maxX: 829, maxY: 533 },
    top: { minX: 539, minY: 152, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 415, minY: 366, maxX: 582, maxY: 530 },
    right: { minX: 657, minY: 365, maxX: 826, maxY: 534 },
    top: { minX: 537, minY: 153, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 415, minY: 366, maxX: 581, maxY: 530 },
    right: { minX: 657, minY: 365, maxX: 826, maxY: 534 },
    top: { minX: 537, minY: 153, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 367, maxX: 580, maxY: 531 },
    right: { minX: 656, minY: 366, maxX: 824, maxY: 534 },
    top: { minX: 535, minY: 154, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 413, minY: 367, maxX: 580, maxY: 531 },
    right: { minX: 655, minY: 367, maxX: 824, maxY: 535 },
    top: { minX: 535, minY: 155, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 412, minY: 367, maxX: 579, maxY: 531 },
    right: { minX: 654, minY: 366, maxX: 823, maxY: 534 },
    top: { minX: 534, minY: 155, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 579, maxY: 530 },
    right: { minX: 654, minY: 365, maxX: 823, maxY: 534 },
    top: { minX: 533, minY: 153, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 578, maxY: 531 },
    right: { minX: 653, minY: 365, maxX: 822, maxY: 533 },
    top: { minX: 533, minY: 153, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 578, maxY: 531 },
    right: { minX: 654, minY: 365, maxX: 822, maxY: 534 },
    top: { minX: 533, minY: 153, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 412, minY: 366, maxX: 579, maxY: 530 },
    right: { minX: 654, minY: 365, maxX: 823, maxY: 533 },
    top: { minX: 534, minY: 153, maxX: 699, maxY: 321 },
  },
  {
    left: { minX: 411, minY: 365, maxX: 578, maxY: 530 },
    right: { minX: 654, minY: 365, maxX: 823, maxY: 533 },
    top: { minX: 533, minY: 153, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 410, minY: 364, maxX: 578, maxY: 529 },
    right: { minX: 654, minY: 364, maxX: 822, maxY: 533 },
    top: { minX: 533, minY: 151, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 409, minY: 364, maxX: 577, maxY: 528 },
    right: { minX: 653, minY: 363, maxX: 822, maxY: 532 },
    top: { minX: 533, minY: 150, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 408, minY: 363, maxX: 577, maxY: 528 },
    right: { minX: 653, minY: 363, maxX: 822, maxY: 531 },
    top: { minX: 532, minY: 149, maxX: 698, maxY: 317 },
  },
  {
    left: { minX: 406, minY: 361, maxX: 575, maxY: 527 },
    right: { minX: 651, minY: 361, maxX: 821, maxY: 530 },
    top: { minX: 531, minY: 147, maxX: 697, maxY: 316 },
  },
  {
    left: { minX: 407, minY: 361, maxX: 576, maxY: 526 },
    right: { minX: 652, minY: 361, maxX: 821, maxY: 530 },
    top: { minX: 531, minY: 147, maxX: 697, maxY: 316 },
  },
  {
    left: { minX: 407, minY: 362, maxX: 575, maxY: 528 },
    right: { minX: 651, minY: 363, maxX: 820, maxY: 531 },
    top: { minX: 531, minY: 149, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 407, minY: 363, maxX: 576, maxY: 528 },
    right: { minX: 652, minY: 364, maxX: 820, maxY: 532 },
    top: { minX: 531, minY: 150, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 408, minY: 363, maxX: 576, maxY: 529 },
    right: { minX: 652, minY: 364, maxX: 822, maxY: 533 },
    top: { minX: 532, minY: 150, maxX: 698, maxY: 318 },
  },
  {
    left: { minX: 408, minY: 365, maxX: 577, maxY: 530 },
    right: { minX: 652, minY: 365, maxX: 821, maxY: 533 },
    top: { minX: 532, minY: 151, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 408, minY: 365, maxX: 576, maxY: 530 },
    right: { minX: 653, minY: 365, maxX: 822, maxY: 533 },
    top: { minX: 532, minY: 151, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 578, maxY: 531 },
    right: { minX: 654, minY: 366, maxX: 824, maxY: 534 },
    top: { minX: 533, minY: 152, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 579, maxY: 531 },
    right: { minX: 655, minY: 366, maxX: 824, maxY: 534 },
    top: { minX: 535, minY: 153, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 366, maxX: 582, maxY: 531 },
    right: { minX: 658, minY: 367, maxX: 827, maxY: 535 },
    top: { minX: 538, minY: 153, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 414, minY: 366, maxX: 582, maxY: 532 },
    right: { minX: 658, minY: 367, maxX: 828, maxY: 535 },
    top: { minX: 538, minY: 153, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 366, maxX: 582, maxY: 531 },
    right: { minX: 659, minY: 366, maxX: 828, maxY: 535 },
    top: { minX: 538, minY: 152, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 365, maxX: 582, maxY: 531 },
    right: { minX: 659, minY: 365, maxX: 829, maxY: 534 },
    top: { minX: 538, minY: 151, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 411, minY: 364, maxX: 581, maxY: 530 },
    right: { minX: 658, minY: 364, maxX: 828, maxY: 533 },
    top: { minX: 537, minY: 149, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 410, minY: 364, maxX: 580, maxY: 531 },
    right: { minX: 657, minY: 364, maxX: 827, maxY: 533 },
    top: { minX: 536, minY: 149, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 410, minY: 364, maxX: 580, maxY: 531 },
    right: { minX: 657, minY: 364, maxX: 827, maxY: 533 },
    top: { minX: 535, minY: 149, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 409, minY: 364, maxX: 580, maxY: 531 },
    right: { minX: 657, minY: 364, maxX: 827, maxY: 533 },
    top: { minX: 535, minY: 149, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 407, minY: 364, maxX: 578, maxY: 531 },
    right: { minX: 655, minY: 364, maxX: 825, maxY: 534 },
    top: { minX: 533, minY: 149, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 407, minY: 363, maxX: 578, maxY: 531 },
    right: { minX: 655, minY: 363, maxX: 826, maxY: 533 },
    top: { minX: 534, minY: 147, maxX: 701, maxY: 318 },
  },
  {
    left: { minX: 407, minY: 363, maxX: 578, maxY: 531 },
    right: { minX: 655, minY: 363, maxX: 826, maxY: 533 },
    top: { minX: 533, minY: 147, maxX: 702, maxY: 318 },
  },
  {
    left: { minX: 407, minY: 364, maxX: 579, maxY: 532 },
    right: { minX: 656, minY: 364, maxX: 827, maxY: 533 },
    top: { minX: 534, minY: 148, maxX: 702, maxY: 318 },
  },
  {
    left: { minX: 409, minY: 364, maxX: 580, maxY: 533 },
    right: { minX: 658, minY: 365, maxX: 828, maxY: 534 },
    top: { minX: 535, minY: 148, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 410, minY: 365, maxX: 581, maxY: 533 },
    right: { minX: 658, minY: 365, maxX: 829, maxY: 535 },
    top: { minX: 536, minY: 149, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 409, minY: 366, maxX: 581, maxY: 534 },
    right: { minX: 658, minY: 366, maxX: 829, maxY: 535 },
    top: { minX: 536, minY: 150, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 581, maxY: 536 },
    right: { minX: 658, minY: 367, maxX: 829, maxY: 537 },
    top: { minX: 536, minY: 151, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 410, minY: 368, maxX: 582, maxY: 536 },
    right: { minX: 659, minY: 367, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 151, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 410, minY: 368, maxX: 582, maxY: 536 },
    right: { minX: 659, minY: 368, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 152, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 581, maxY: 538 },
    right: { minX: 658, minY: 369, maxX: 829, maxY: 538 },
    top: { minX: 535, minY: 153, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 407, minY: 369, maxX: 580, maxY: 538 },
    right: { minX: 658, minY: 368, maxX: 828, maxY: 538 },
    top: { minX: 535, minY: 153, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 407, minY: 369, maxX: 580, maxY: 538 },
    right: { minX: 658, minY: 368, maxX: 828, maxY: 538 },
    top: { minX: 535, minY: 153, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 579, maxY: 539 },
    right: { minX: 657, minY: 368, maxX: 827, maxY: 538 },
    top: { minX: 533, minY: 152, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 578, maxY: 539 },
    right: { minX: 657, minY: 368, maxX: 827, maxY: 538 },
    top: { minX: 533, minY: 152, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 404, minY: 369, maxX: 578, maxY: 539 },
    right: { minX: 656, minY: 368, maxX: 827, maxY: 538 },
    top: { minX: 531, minY: 151, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 404, minY: 369, maxX: 578, maxY: 539 },
    right: { minX: 656, minY: 368, maxX: 827, maxY: 538 },
    top: { minX: 531, minY: 151, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 404, minY: 370, maxX: 577, maxY: 540 },
    right: { minX: 656, minY: 368, maxX: 827, maxY: 539 },
    top: { minX: 531, minY: 151, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 404, minY: 371, maxX: 578, maxY: 542 },
    right: { minX: 657, minY: 369, maxX: 828, maxY: 539 },
    top: { minX: 531, minY: 153, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 404, minY: 371, maxX: 578, maxY: 542 },
    right: { minX: 657, minY: 369, maxX: 828, maxY: 539 },
    top: { minX: 531, minY: 152, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 403, minY: 371, maxX: 577, maxY: 542 },
    right: { minX: 656, minY: 369, maxX: 828, maxY: 540 },
    top: { minX: 531, minY: 152, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 401, minY: 370, maxX: 576, maxY: 542 },
    right: { minX: 655, minY: 368, maxX: 827, maxY: 539 },
    top: { minX: 529, minY: 151, maxX: 699, maxY: 323 },
  },
  {
    left: { minX: 399, minY: 369, maxX: 575, maxY: 541 },
    right: { minX: 654, minY: 367, maxX: 826, maxY: 538 },
    top: { minX: 528, minY: 149, maxX: 698, maxY: 322 },
  },
  {
    left: { minX: 397, minY: 369, maxX: 573, maxY: 542 },
    right: { minX: 652, minY: 367, maxX: 824, maxY: 539 },
    top: { minX: 526, minY: 149, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 395, minY: 369, maxX: 572, maxY: 542 },
    right: { minX: 651, minY: 367, maxX: 823, maxY: 538 },
    top: { minX: 525, minY: 149, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 395, minY: 368, maxX: 572, maxY: 541 },
    right: { minX: 651, minY: 366, maxX: 824, maxY: 537 },
    top: { minX: 524, minY: 147, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 823, maxY: 537 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 822, maxY: 537 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 823, maxY: 537 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 822, maxY: 537 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 651, minY: 365, maxX: 823, maxY: 537 },
    top: { minX: 523, minY: 146, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 822, maxY: 537 },
    top: { minX: 523, minY: 146, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 393, minY: 369, maxX: 570, maxY: 543 },
    right: { minX: 650, minY: 367, maxX: 822, maxY: 538 },
    top: { minX: 523, minY: 148, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 394, minY: 371, maxX: 572, maxY: 544 },
    right: { minX: 651, minY: 368, maxX: 823, maxY: 539 },
    top: { minX: 523, minY: 149, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 395, minY: 371, maxX: 572, maxY: 544 },
    right: { minX: 652, minY: 368, maxX: 824, maxY: 539 },
    top: { minX: 524, minY: 149, maxX: 695, maxY: 323 },
  },
  {
    left: { minX: 396, minY: 370, maxX: 573, maxY: 543 },
    right: { minX: 653, minY: 367, maxX: 825, maxY: 539 },
    top: { minX: 525, minY: 148, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 396, minY: 369, maxX: 574, maxY: 543 },
    right: { minX: 654, minY: 367, maxX: 826, maxY: 539 },
    top: { minX: 526, minY: 147, maxX: 697, maxY: 321 },
  },
  {
    left: { minX: 397, minY: 368, maxX: 575, maxY: 542 },
    right: { minX: 655, minY: 366, maxX: 828, maxY: 538 },
    top: { minX: 527, minY: 145, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 397, minY: 367, maxX: 575, maxY: 541 },
    right: { minX: 655, minY: 365, maxX: 828, maxY: 538 },
    top: { minX: 528, minY: 145, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 397, minY: 367, maxX: 575, maxY: 541 },
    right: { minX: 655, minY: 365, maxX: 829, maxY: 538 },
    top: { minX: 529, minY: 144, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 396, minY: 366, maxX: 575, maxY: 541 },
    right: { minX: 655, minY: 365, maxX: 828, maxY: 537 },
    top: { minX: 528, minY: 143, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 395, minY: 366, maxX: 573, maxY: 540 },
    right: { minX: 654, minY: 365, maxX: 827, maxY: 537 },
    top: { minX: 527, minY: 143, maxX: 699, maxY: 318 },
  },
  {
    left: { minX: 394, minY: 366, maxX: 573, maxY: 540 },
    right: { minX: 653, minY: 364, maxX: 826, maxY: 537 },
    top: { minX: 525, minY: 143, maxX: 698, maxY: 318 },
  },
  {
    left: { minX: 394, minY: 367, maxX: 572, maxY: 541 },
    right: { minX: 652, minY: 365, maxX: 825, maxY: 537 },
    top: { minX: 525, minY: 144, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 395, minY: 367, maxX: 573, maxY: 541 },
    right: { minX: 653, minY: 366, maxX: 826, maxY: 538 },
    top: { minX: 526, minY: 145, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 395, minY: 367, maxX: 574, maxY: 541 },
    right: { minX: 654, minY: 366, maxX: 826, maxY: 538 },
    top: { minX: 527, minY: 145, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 395, minY: 367, maxX: 573, maxY: 541 },
    right: { minX: 653, minY: 366, maxX: 826, maxY: 539 },
    top: { minX: 527, minY: 145, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 395, minY: 367, maxX: 573, maxY: 541 },
    right: { minX: 653, minY: 366, maxX: 826, maxY: 538 },
    top: { minX: 527, minY: 145, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 394, minY: 367, maxX: 572, maxY: 541 },
    right: { minX: 652, minY: 366, maxX: 824, maxY: 538 },
    top: { minX: 525, minY: 145, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 392, minY: 368, maxX: 571, maxY: 542 },
    right: { minX: 651, minY: 366, maxX: 823, maxY: 538 },
    top: { minX: 524, minY: 146, maxX: 696, maxY: 321 },
  },
  {
    left: { minX: 392, minY: 369, maxX: 570, maxY: 543 },
    right: { minX: 650, minY: 367, maxX: 822, maxY: 539 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 393, minY: 370, maxX: 571, maxY: 543 },
    right: { minX: 650, minY: 368, maxX: 822, maxY: 539 },
    top: { minX: 523, minY: 148, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 392, minY: 371, maxX: 569, maxY: 544 },
    right: { minX: 649, minY: 368, maxX: 821, maxY: 540 },
    top: { minX: 522, minY: 150, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 391, minY: 371, maxX: 569, maxY: 545 },
    right: { minX: 648, minY: 369, maxX: 820, maxY: 540 },
    top: { minX: 522, minY: 150, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 390, minY: 371, maxX: 567, maxY: 545 },
    right: { minX: 647, minY: 369, maxX: 818, maxY: 540 },
    top: { minX: 520, minY: 151, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 390, minY: 371, maxX: 568, maxY: 545 },
    right: { minX: 647, minY: 369, maxX: 818, maxY: 540 },
    top: { minX: 520, minY: 151, maxX: 691, maxY: 323 },
  },
  {
    left: { minX: 390, minY: 372, maxX: 568, maxY: 545 },
    right: { minX: 647, minY: 369, maxX: 819, maxY: 541 },
    top: { minX: 520, minY: 151, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 390, minY: 372, maxX: 568, maxY: 545 },
    right: { minX: 647, minY: 369, maxX: 819, maxY: 540 },
    top: { minX: 521, minY: 151, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 391, minY: 371, maxX: 568, maxY: 545 },
    right: { minX: 648, minY: 369, maxX: 820, maxY: 540 },
    top: { minX: 521, minY: 151, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 393, minY: 371, maxX: 570, maxY: 545 },
    right: { minX: 650, minY: 369, maxX: 822, maxY: 540 },
    top: { minX: 523, minY: 151, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 394, minY: 371, maxX: 571, maxY: 544 },
    right: { minX: 651, minY: 369, maxX: 822, maxY: 540 },
    top: { minX: 525, minY: 151, maxX: 695, maxY: 324 },
  },
  {
    left: { minX: 396, minY: 370, maxX: 572, maxY: 543 },
    right: { minX: 652, minY: 368, maxX: 823, maxY: 539 },
    top: { minX: 526, minY: 150, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 398, minY: 370, maxX: 574, maxY: 542 },
    right: { minX: 654, minY: 368, maxX: 825, maxY: 539 },
    top: { minX: 528, minY: 150, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 399, minY: 371, maxX: 575, maxY: 543 },
    right: { minX: 654, minY: 369, maxX: 825, maxY: 540 },
    top: { minX: 529, minY: 152, maxX: 698, maxY: 324 },
  },
  {
    left: { minX: 401, minY: 371, maxX: 576, maxY: 543 },
    right: { minX: 655, minY: 369, maxX: 826, maxY: 540 },
    top: { minX: 530, minY: 152, maxX: 699, maxY: 324 },
  },
  {
    left: { minX: 401, minY: 371, maxX: 577, maxY: 543 },
    right: { minX: 656, minY: 369, maxX: 826, maxY: 539 },
    top: { minX: 530, minY: 152, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 402, minY: 370, maxX: 577, maxY: 542 },
    right: { minX: 656, minY: 369, maxX: 827, maxY: 539 },
    top: { minX: 531, minY: 151, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 403, minY: 370, maxX: 578, maxY: 542 },
    right: { minX: 657, minY: 369, maxX: 828, maxY: 539 },
    top: { minX: 531, minY: 151, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 405, minY: 370, maxX: 579, maxY: 542 },
    right: { minX: 658, minY: 369, maxX: 829, maxY: 539 },
    top: { minX: 533, minY: 152, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 405, minY: 370, maxX: 580, maxY: 541 },
    right: { minX: 658, minY: 369, maxX: 829, maxY: 539 },
    top: { minX: 534, minY: 151, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 582, maxY: 540 },
    right: { minX: 661, minY: 368, maxX: 832, maxY: 538 },
    top: { minX: 537, minY: 151, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 409, minY: 370, maxX: 583, maxY: 540 },
    right: { minX: 661, minY: 369, maxX: 831, maxY: 538 },
    top: { minX: 537, minY: 153, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 582, maxY: 539 },
    right: { minX: 660, minY: 369, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 153, maxX: 705, maxY: 323 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 582, maxY: 539 },
    right: { minX: 660, minY: 368, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 153, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 579, maxY: 539 },
    right: { minX: 657, minY: 368, maxX: 826, maxY: 536 },
    top: { minX: 533, minY: 153, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 578, maxY: 538 },
    right: { minX: 656, minY: 367, maxX: 825, maxY: 535 },
    top: { minX: 532, minY: 153, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 578, maxY: 538 },
    right: { minX: 656, minY: 367, maxX: 824, maxY: 535 },
    top: { minX: 531, minY: 153, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 408, minY: 370, maxX: 579, maxY: 538 },
    right: { minX: 656, minY: 367, maxX: 825, maxY: 535 },
    top: { minX: 533, minY: 154, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 410, minY: 370, maxX: 581, maxY: 538 },
    right: { minX: 658, minY: 368, maxX: 826, maxY: 535 },
    top: { minX: 535, minY: 155, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 411, minY: 369, maxX: 581, maxY: 536 },
    right: { minX: 658, minY: 367, maxX: 826, maxY: 534 },
    top: { minX: 535, minY: 154, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 413, minY: 367, maxX: 583, maxY: 534 },
    right: { minX: 660, minY: 364, maxX: 829, maxY: 531 },
    top: { minX: 537, minY: 151, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 414, minY: 367, maxX: 584, maxY: 533 },
    right: { minX: 661, minY: 365, maxX: 829, maxY: 531 },
    top: { minX: 538, minY: 152, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 585, maxY: 534 },
    right: { minX: 661, minY: 366, maxX: 829, maxY: 532 },
    top: { minX: 539, minY: 154, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 417, minY: 368, maxX: 585, maxY: 534 },
    right: { minX: 661, minY: 366, maxX: 829, maxY: 532 },
    top: { minX: 540, minY: 155, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 661, minY: 366, maxX: 827, maxY: 531 },
    top: { minX: 539, minY: 155, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 533 },
    right: { minX: 660, minY: 366, maxX: 826, maxY: 531 },
    top: { minX: 539, minY: 155, maxX: 702, maxY: 322 },
  },
  {
    left: { minX: 417, minY: 366, maxX: 584, maxY: 531 },
    right: { minX: 660, minY: 364, maxX: 827, maxY: 529 },
    top: { minX: 539, minY: 153, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 418, minY: 365, maxX: 585, maxY: 530 },
    right: { minX: 661, minY: 363, maxX: 828, maxY: 528 },
    top: { minX: 540, minY: 153, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 418, minY: 366, maxX: 585, maxY: 530 },
    right: { minX: 661, minY: 364, maxX: 827, maxY: 529 },
    top: { minX: 540, minY: 154, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 419, minY: 365, maxX: 586, maxY: 529 },
    right: { minX: 661, minY: 363, maxX: 828, maxY: 528 },
    top: { minX: 541, minY: 153, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 422, minY: 367, maxX: 588, maxY: 530 },
    right: { minX: 663, minY: 365, maxX: 828, maxY: 529 },
    top: { minX: 543, minY: 157, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 424, minY: 368, maxX: 589, maxY: 530 },
    right: { minX: 663, minY: 366, maxX: 828, maxY: 530 },
    top: { minX: 544, minY: 159, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 367, maxX: 828, maxY: 530 },
    top: { minX: 545, minY: 160, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 589, maxY: 529 },
    right: { minX: 664, minY: 366, maxX: 828, maxY: 529 },
    top: { minX: 545, minY: 160, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 589, maxY: 529 },
    right: { minX: 664, minY: 365, maxX: 828, maxY: 528 },
    top: { minX: 545, minY: 159, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 589, maxY: 527 },
    right: { minX: 664, minY: 365, maxX: 827, maxY: 527 },
    top: { minX: 545, minY: 158, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 589, maxY: 528 },
    right: { minX: 663, minY: 365, maxX: 827, maxY: 527 },
    top: { minX: 545, minY: 159, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 590, maxY: 527 },
    right: { minX: 664, minY: 365, maxX: 827, maxY: 527 },
    top: { minX: 545, minY: 159, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 429, minY: 367, maxX: 591, maxY: 527 },
    right: { minX: 665, minY: 365, maxX: 828, maxY: 527 },
    top: { minX: 547, minY: 160, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 431, minY: 367, maxX: 592, maxY: 527 },
    right: { minX: 666, minY: 365, maxX: 829, maxY: 527 },
    top: { minX: 548, minY: 161, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 432, minY: 368, maxX: 594, maxY: 527 },
    right: { minX: 667, minY: 365, maxX: 830, maxY: 527 },
    top: { minX: 549, minY: 162, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 434, minY: 367, maxX: 595, maxY: 527 },
    right: { minX: 669, minY: 365, maxX: 832, maxY: 527 },
    top: { minX: 551, minY: 162, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 434, minY: 367, maxX: 596, maxY: 526 },
    right: { minX: 669, minY: 365, maxX: 832, maxY: 526 },
    top: { minX: 551, minY: 161, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 435, minY: 367, maxX: 595, maxY: 525 },
    right: { minX: 669, minY: 365, maxX: 831, maxY: 526 },
    top: { minX: 552, minY: 161, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 435, minY: 367, maxX: 596, maxY: 526 },
    right: { minX: 669, minY: 365, maxX: 831, maxY: 526 },
    top: { minX: 552, minY: 162, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 436, minY: 368, maxX: 596, maxY: 526 },
    right: { minX: 669, minY: 365, maxX: 831, maxY: 526 },
    top: { minX: 553, minY: 163, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 436, minY: 367, maxX: 595, maxY: 525 },
    right: { minX: 668, minY: 366, maxX: 830, maxY: 525 },
    top: { minX: 552, minY: 163, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 437, minY: 366, maxX: 596, maxY: 524 },
    right: { minX: 669, minY: 365, maxX: 831, maxY: 525 },
    top: { minX: 553, minY: 162, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 437, minY: 368, maxX: 596, maxY: 525 },
    right: { minX: 669, minY: 366, maxX: 830, maxY: 526 },
    top: { minX: 553, minY: 163, maxX: 711, maxY: 324 },
  },
  {
    left: { minX: 440, minY: 370, maxX: 598, maxY: 527 },
    right: { minX: 671, minY: 368, maxX: 832, maxY: 527 },
    top: { minX: 555, minY: 167, maxX: 712, maxY: 326 },
  },
  {
    left: { minX: 442, minY: 370, maxX: 600, maxY: 526 },
    right: { minX: 673, minY: 368, maxX: 833, maxY: 527 },
    top: { minX: 557, minY: 167, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 445, minY: 371, maxX: 602, maxY: 527 },
    right: { minX: 675, minY: 370, maxX: 835, maxY: 529 },
    top: { minX: 559, minY: 169, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 447, minY: 371, maxX: 604, maxY: 527 },
    right: { minX: 676, minY: 370, maxX: 836, maxY: 529 },
    top: { minX: 561, minY: 170, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 370, maxX: 837, maxY: 529 },
    top: { minX: 562, minY: 171, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 447, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 370, maxX: 836, maxY: 529 },
    top: { minX: 561, minY: 170, maxX: 717, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 369, maxX: 836, maxY: 528 },
    top: { minX: 562, minY: 170, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 369, maxX: 836, maxY: 528 },
    top: { minX: 562, minY: 171, maxX: 717, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 370, maxX: 836, maxY: 528 },
    top: { minX: 562, minY: 171, maxX: 717, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 372, maxX: 604, maxY: 527 },
    right: { minX: 675, minY: 371, maxX: 835, maxY: 529 },
    top: { minX: 561, minY: 172, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 448, minY: 372, maxX: 604, maxY: 527 },
    right: { minX: 675, minY: 370, maxX: 835, maxY: 528 },
    top: { minX: 561, minY: 173, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 449, minY: 372, maxX: 605, maxY: 526 },
    right: { minX: 676, minY: 370, maxX: 835, maxY: 527 },
    top: { minX: 562, minY: 172, maxX: 717, maxY: 329 },
  },
  {
    left: { minX: 450, minY: 372, maxX: 605, maxY: 526 },
    right: { minX: 676, minY: 370, maxX: 836, maxY: 528 },
    top: { minX: 563, minY: 173, maxX: 717, maxY: 329 },
  },
  {
    left: { minX: 451, minY: 373, maxX: 606, maxY: 527 },
    right: { minX: 677, minY: 371, maxX: 836, maxY: 529 },
    top: { minX: 563, minY: 175, maxX: 717, maxY: 330 },
  },
  {
    left: { minX: 451, minY: 374, maxX: 605, maxY: 527 },
    right: { minX: 676, minY: 372, maxX: 834, maxY: 529 },
    top: { minX: 563, minY: 175, maxX: 716, maxY: 331 },
  },
  {
    left: { minX: 450, minY: 373, maxX: 604, maxY: 526 },
    right: { minX: 675, minY: 370, maxX: 833, maxY: 527 },
    top: { minX: 561, minY: 174, maxX: 715, maxY: 329 },
  },
  {
    left: { minX: 450, minY: 372, maxX: 604, maxY: 525 },
    right: { minX: 675, minY: 369, maxX: 833, maxY: 527 },
    top: { minX: 561, minY: 174, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 450, minY: 372, maxX: 604, maxY: 525 },
    right: { minX: 674, minY: 369, maxX: 832, maxY: 526 },
    top: { minX: 560, minY: 173, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 449, minY: 370, maxX: 603, maxY: 522 },
    right: { minX: 673, minY: 367, maxX: 832, maxY: 524 },
    top: { minX: 559, minY: 171, maxX: 713, maxY: 327 },
  },
  {
    left: { minX: 449, minY: 369, maxX: 603, maxY: 522 },
    right: { minX: 673, minY: 367, maxX: 831, maxY: 523 },
    top: { minX: 559, minY: 171, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 450, minY: 370, maxX: 603, maxY: 522 },
    right: { minX: 673, minY: 367, maxX: 831, maxY: 523 },
    top: { minX: 560, minY: 172, maxX: 713, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 371, maxX: 604, maxY: 523 },
    right: { minX: 674, minY: 369, maxX: 831, maxY: 525 },
    top: { minX: 561, minY: 173, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 453, minY: 373, maxX: 605, maxY: 523 },
    right: { minX: 674, minY: 370, maxX: 831, maxY: 526 },
    top: { minX: 562, minY: 177, maxX: 714, maxY: 330 },
  },
  {
    left: { minX: 453, minY: 373, maxX: 605, maxY: 523 },
    right: { minX: 674, minY: 370, maxX: 831, maxY: 525 },
    top: { minX: 562, minY: 177, maxX: 714, maxY: 330 },
  },
  {
    left: { minX: 454, minY: 374, maxX: 606, maxY: 524 },
    right: { minX: 675, minY: 371, maxX: 831, maxY: 526 },
    top: { minX: 563, minY: 178, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 454, minY: 374, maxX: 606, maxY: 524 },
    right: { minX: 675, minY: 371, maxX: 831, maxY: 526 },
    top: { minX: 563, minY: 178, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 455, minY: 373, maxX: 606, maxY: 523 },
    right: { minX: 675, minY: 370, maxX: 831, maxY: 525 },
    top: { minX: 563, minY: 177, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 456, minY: 373, maxX: 607, maxY: 523 },
    right: { minX: 676, minY: 369, maxX: 833, maxY: 525 },
    top: { minX: 564, minY: 177, maxX: 715, maxY: 330 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 609, maxY: 522 },
    right: { minX: 677, minY: 370, maxX: 834, maxY: 525 },
    top: { minX: 565, minY: 177, maxX: 716, maxY: 330 },
  },
  {
    left: { minX: 460, minY: 373, maxX: 610, maxY: 523 },
    right: { minX: 679, minY: 370, maxX: 835, maxY: 525 },
    top: { minX: 567, minY: 179, maxX: 718, maxY: 331 },
  },
  {
    left: { minX: 463, minY: 374, maxX: 613, maxY: 523 },
    right: { minX: 681, minY: 371, maxX: 837, maxY: 525 },
    top: { minX: 570, minY: 179, maxX: 720, maxY: 331 },
  },
  {
    left: { minX: 464, minY: 374, maxX: 614, maxY: 523 },
    right: { minX: 682, minY: 371, maxX: 838, maxY: 525 },
    top: { minX: 571, minY: 179, maxX: 721, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 374, maxX: 614, maxY: 522 },
    right: { minX: 682, minY: 371, maxX: 838, maxY: 525 },
    top: { minX: 571, minY: 180, maxX: 721, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 374, maxX: 614, maxY: 522 },
    right: { minX: 683, minY: 371, maxX: 839, maxY: 525 },
    top: { minX: 571, minY: 179, maxX: 722, maxY: 331 },
  },
  {
    left: { minX: 466, minY: 373, maxX: 615, maxY: 521 },
    right: { minX: 683, minY: 369, maxX: 839, maxY: 524 },
    top: { minX: 571, minY: 179, maxX: 722, maxY: 330 },
  },
  {
    left: { minX: 466, minY: 372, maxX: 615, maxY: 520 },
    right: { minX: 683, minY: 369, maxX: 840, maxY: 523 },
    top: { minX: 572, minY: 178, maxX: 722, maxY: 330 },
  },
  {
    left: { minX: 467, minY: 374, maxX: 615, maxY: 522 },
    right: { minX: 684, minY: 371, maxX: 839, maxY: 525 },
    top: { minX: 573, minY: 181, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 468, minY: 375, maxX: 617, maxY: 522 },
    right: { minX: 685, minY: 372, maxX: 840, maxY: 525 },
    top: { minX: 574, minY: 182, maxX: 724, maxY: 332 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 618, maxY: 522 },
    right: { minX: 686, minY: 372, maxX: 842, maxY: 525 },
    top: { minX: 575, minY: 182, maxX: 724, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 619, maxY: 521 },
    right: { minX: 686, minY: 371, maxX: 842, maxY: 525 },
    top: { minX: 576, minY: 181, maxX: 726, maxY: 332 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 619, maxY: 520 },
    right: { minX: 687, minY: 371, maxX: 843, maxY: 524 },
    top: { minX: 577, minY: 180, maxX: 726, maxY: 331 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 619, maxY: 520 },
    right: { minX: 687, minY: 371, maxX: 843, maxY: 525 },
    top: { minX: 577, minY: 181, maxX: 726, maxY: 331 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 620, maxY: 520 },
    right: { minX: 688, minY: 370, maxX: 843, maxY: 524 },
    top: { minX: 577, minY: 181, maxX: 727, maxY: 331 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 620, maxY: 519 },
    right: { minX: 688, minY: 370, maxX: 844, maxY: 523 },
    top: { minX: 578, minY: 180, maxX: 727, maxY: 331 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 618, maxY: 519 },
    right: { minX: 686, minY: 370, maxX: 841, maxY: 523 },
    top: { minX: 576, minY: 181, maxX: 725, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 617, maxY: 519 },
    right: { minX: 684, minY: 370, maxX: 839, maxY: 523 },
    top: { minX: 575, minY: 181, maxX: 723, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 372, maxX: 617, maxY: 517 },
    right: { minX: 684, minY: 369, maxX: 839, maxY: 522 },
    top: { minX: 575, minY: 180, maxX: 723, maxY: 330 },
  },
  {
    left: { minX: 469, minY: 372, maxX: 616, maxY: 517 },
    right: { minX: 682, minY: 369, maxX: 837, maxY: 521 },
    top: { minX: 573, minY: 180, maxX: 722, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 372, maxX: 614, maxY: 517 },
    right: { minX: 681, minY: 369, maxX: 835, maxY: 521 },
    top: { minX: 571, minY: 181, maxX: 719, maxY: 330 },
  },
  {
    left: { minX: 467, minY: 370, maxX: 613, maxY: 516 },
    right: { minX: 680, minY: 367, maxX: 834, maxY: 519 },
    top: { minX: 571, minY: 179, maxX: 719, maxY: 329 },
  },
  {
    left: { minX: 467, minY: 372, maxX: 613, maxY: 517 },
    right: { minX: 679, minY: 369, maxX: 833, maxY: 520 },
    top: { minX: 570, minY: 181, maxX: 718, maxY: 330 },
  },
  {
    left: { minX: 467, minY: 372, maxX: 613, maxY: 517 },
    right: { minX: 679, minY: 369, maxX: 833, maxY: 521 },
    top: { minX: 570, minY: 182, maxX: 717, maxY: 330 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 614, maxY: 516 },
    right: { minX: 680, minY: 368, maxX: 834, maxY: 520 },
    top: { minX: 571, minY: 181, maxX: 719, maxY: 330 },
  },
  {
    left: { minX: 470, minY: 372, maxX: 615, maxY: 517 },
    right: { minX: 681, minY: 369, maxX: 834, maxY: 521 },
    top: { minX: 572, minY: 182, maxX: 720, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 615, maxY: 518 },
    right: { minX: 681, minY: 370, maxX: 834, maxY: 522 },
    top: { minX: 573, minY: 184, maxX: 719, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 616, maxY: 518 },
    right: { minX: 682, minY: 371, maxX: 835, maxY: 523 },
    top: { minX: 573, minY: 185, maxX: 720, maxY: 333 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 372, maxX: 836, maxY: 523 },
    top: { minX: 575, minY: 186, maxX: 721, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 835, maxY: 523 },
    top: { minX: 575, minY: 187, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 617, maxY: 520 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 523 },
    top: { minX: 574, minY: 187, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 372, maxX: 835, maxY: 523 },
    top: { minX: 574, minY: 186, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 682, minY: 371, maxX: 835, maxY: 522 },
    top: { minX: 574, minY: 186, maxX: 720, maxY: 333 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 372, maxX: 835, maxY: 523 },
    top: { minX: 574, minY: 187, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 473, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 835, maxY: 523 },
    top: { minX: 575, minY: 188, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 618, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 524 },
    top: { minX: 576, minY: 189, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 618, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 523 },
    top: { minX: 577, minY: 188, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 618, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 524 },
    top: { minX: 577, minY: 189, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 374, maxX: 835, maxY: 524 },
    top: { minX: 576, minY: 189, maxX: 721, maxY: 335 },
  },
  {
    left: { minX: 473, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 682, minY: 373, maxX: 834, maxY: 523 },
    top: { minX: 575, minY: 189, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 616, maxY: 519 },
    right: { minX: 681, minY: 373, maxX: 833, maxY: 523 },
    top: { minX: 574, minY: 189, maxX: 719, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 375, maxX: 614, maxY: 517 },
    right: { minX: 680, minY: 372, maxX: 831, maxY: 522 },
    top: { minX: 573, minY: 187, maxX: 718, maxY: 334 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 614, maxY: 516 },
    right: { minX: 679, minY: 371, maxX: 831, maxY: 521 },
    top: { minX: 573, minY: 187, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 613, maxY: 515 },
    right: { minX: 678, minY: 371, maxX: 829, maxY: 520 },
    top: { minX: 572, minY: 186, maxX: 717, maxY: 333 },
  },
  {
    left: { minX: 471, minY: 372, maxX: 614, maxY: 514 },
    right: { minX: 679, minY: 369, maxX: 830, maxY: 519 },
    top: { minX: 573, minY: 185, maxX: 718, maxY: 331 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 615, maxY: 515 },
    right: { minX: 679, minY: 371, maxX: 831, maxY: 520 },
    top: { minX: 573, minY: 187, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 613, maxY: 517 },
    right: { minX: 678, minY: 373, maxX: 828, maxY: 522 },
    top: { minX: 571, minY: 189, maxX: 716, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 614, maxY: 518 },
    right: { minX: 679, minY: 373, maxX: 829, maxY: 523 },
    top: { minX: 572, minY: 191, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 614, maxY: 518 },
    right: { minX: 678, minY: 373, maxX: 829, maxY: 522 },
    top: { minX: 572, minY: 190, maxX: 716, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 614, maxY: 517 },
    right: { minX: 678, minY: 373, maxX: 829, maxY: 522 },
    top: { minX: 572, minY: 190, maxX: 716, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 613, maxY: 518 },
    right: { minX: 678, minY: 373, maxX: 828, maxY: 523 },
    top: { minX: 571, minY: 191, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 377, maxX: 613, maxY: 518 },
    right: { minX: 678, minY: 374, maxX: 828, maxY: 523 },
    top: { minX: 572, minY: 191, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 614, maxY: 518 },
    right: { minX: 678, minY: 374, maxX: 829, maxY: 523 },
    top: { minX: 572, minY: 191, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 614, maxY: 518 },
    right: { minX: 679, minY: 374, maxX: 830, maxY: 523 },
    top: { minX: 573, minY: 190, maxX: 717, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 615, maxY: 517 },
    right: { minX: 679, minY: 373, maxX: 830, maxY: 522 },
    top: { minX: 573, minY: 190, maxX: 717, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 375, maxX: 617, maxY: 517 },
    right: { minX: 681, minY: 373, maxX: 832, maxY: 522 },
    top: { minX: 575, minY: 189, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 475, minY: 375, maxX: 618, maxY: 517 },
    right: { minX: 682, minY: 373, maxX: 833, maxY: 522 },
    top: { minX: 577, minY: 189, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 375, maxX: 618, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 375, maxX: 619, maxY: 516 },
    right: { minX: 684, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 375, maxX: 619, maxY: 516 },
    right: { minX: 684, minY: 373, maxX: 835, maxY: 522 },
    top: { minX: 578, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 477, minY: 374, maxX: 619, maxY: 516 },
    right: { minX: 684, minY: 372, maxX: 835, maxY: 522 },
    top: { minX: 578, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 374, maxX: 618, maxY: 515 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 521 },
    top: { minX: 578, minY: 188, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 373, maxX: 618, maxY: 515 },
    right: { minX: 683, minY: 372, maxX: 834, maxY: 521 },
    top: { minX: 578, minY: 187, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 373, maxX: 618, maxY: 515 },
    right: { minX: 683, minY: 372, maxX: 834, maxY: 521 },
    top: { minX: 578, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 475, minY: 373, maxX: 618, maxY: 515 },
    right: { minX: 683, minY: 372, maxX: 834, maxY: 521 },
    top: { minX: 578, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 617, maxY: 514 },
    right: { minX: 682, minY: 372, maxX: 833, maxY: 521 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 616, maxY: 515 },
    right: { minX: 681, minY: 372, maxX: 832, maxY: 521 },
    top: { minX: 576, minY: 187, maxX: 720, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 616, maxY: 514 },
    right: { minX: 681, minY: 371, maxX: 832, maxY: 520 },
    top: { minX: 576, minY: 186, maxX: 720, maxY: 332 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 616, maxY: 514 },
    right: { minX: 681, minY: 371, maxX: 832, maxY: 520 },
    top: { minX: 575, minY: 186, maxX: 720, maxY: 332 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 616, maxY: 514 },
    right: { minX: 681, minY: 371, maxX: 832, maxY: 520 },
    top: { minX: 576, minY: 185, maxX: 720, maxY: 332 },
  },
  {
    left: { minX: 474, minY: 372, maxX: 617, maxY: 514 },
    right: { minX: 682, minY: 371, maxX: 833, maxY: 520 },
    top: { minX: 577, minY: 186, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 474, minY: 372, maxX: 617, maxY: 514 },
    right: { minX: 683, minY: 371, maxX: 834, maxY: 520 },
    top: { minX: 578, minY: 185, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 475, minY: 372, maxX: 618, maxY: 514 },
    right: { minX: 683, minY: 371, maxX: 834, maxY: 520 },
    top: { minX: 578, minY: 185, maxX: 723, maxY: 332 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 617, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 617, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 617, maxY: 516 },
    right: { minX: 682, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 616, maxY: 515 },
    right: { minX: 682, minY: 372, maxX: 833, maxY: 521 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 472, minY: 371, maxX: 616, maxY: 515 },
    right: { minX: 681, minY: 371, maxX: 832, maxY: 520 },
    top: { minX: 576, minY: 185, maxX: 721, maxY: 331 },
  },
  {
    left: { minX: 471, minY: 371, maxX: 615, maxY: 514 },
    right: { minX: 681, minY: 370, maxX: 832, maxY: 519 },
    top: { minX: 576, minY: 183, maxX: 721, maxY: 330 },
  },
  {
    left: { minX: 471, minY: 370, maxX: 615, maxY: 513 },
    right: { minX: 681, minY: 370, maxX: 832, maxY: 519 },
    top: { minX: 576, minY: 183, maxX: 721, maxY: 330 },
  },
  {
    left: { minX: 470, minY: 370, maxX: 614, maxY: 513 },
    right: { minX: 680, minY: 370, maxX: 831, maxY: 519 },
    top: { minX: 575, minY: 183, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 469, minY: 370, maxX: 614, maxY: 513 },
    right: { minX: 680, minY: 370, maxX: 831, maxY: 519 },
    top: { minX: 575, minY: 183, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 469, minY: 370, maxX: 613, maxY: 514 },
    right: { minX: 679, minY: 370, maxX: 830, maxY: 520 },
    top: { minX: 574, minY: 183, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 370, maxX: 613, maxY: 513 },
    right: { minX: 679, minY: 370, maxX: 830, maxY: 519 },
    top: { minX: 574, minY: 182, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 463, minY: 369, maxX: 609, maxY: 513 },
    right: { minX: 675, minY: 369, maxX: 826, maxY: 518 },
    top: { minX: 569, minY: 181, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 463, minY: 369, maxX: 609, maxY: 513 },
    right: { minX: 675, minY: 368, maxX: 827, maxY: 518 },
    top: { minX: 569, minY: 180, maxX: 715, maxY: 328 },
  },
  {
    left: { minX: 462, minY: 369, maxX: 608, maxY: 514 },
    right: { minX: 674, minY: 368, maxX: 826, maxY: 518 },
    top: { minX: 567, minY: 181, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 462, minY: 370, maxX: 608, maxY: 515 },
    right: { minX: 674, minY: 369, maxX: 826, maxY: 519 },
    top: { minX: 567, minY: 181, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 607, maxY: 515 },
    right: { minX: 674, minY: 369, maxX: 826, maxY: 519 },
    top: { minX: 567, minY: 182, maxX: 714, maxY: 330 },
  },
  {
    left: { minX: 461, minY: 372, maxX: 607, maxY: 517 },
    right: { minX: 674, minY: 370, maxX: 825, maxY: 520 },
    top: { minX: 566, minY: 183, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 460, minY: 372, maxX: 606, maxY: 517 },
    right: { minX: 673, minY: 370, maxX: 825, maxY: 521 },
    top: { minX: 565, minY: 183, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 605, maxY: 517 },
    right: { minX: 672, minY: 370, maxX: 824, maxY: 521 },
    top: { minX: 565, minY: 183, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 457, minY: 372, maxX: 603, maxY: 517 },
    right: { minX: 670, minY: 370, maxX: 822, maxY: 521 },
    top: { minX: 563, minY: 183, maxX: 710, maxY: 331 },
  },
  {
    left: { minX: 456, minY: 372, maxX: 603, maxY: 518 },
    right: { minX: 670, minY: 370, maxX: 822, maxY: 521 },
    top: { minX: 562, minY: 183, maxX: 709, maxY: 331 },
  },
  {
    left: { minX: 455, minY: 372, maxX: 603, maxY: 518 },
    right: { minX: 670, minY: 370, maxX: 821, maxY: 521 },
    top: { minX: 562, minY: 183, maxX: 709, maxY: 331 },
  },
  {
    left: { minX: 453, minY: 371, maxX: 601, maxY: 517 },
    right: { minX: 668, minY: 370, maxX: 820, maxY: 520 },
    top: { minX: 560, minY: 181, maxX: 708, maxY: 330 },
  },
  {
    left: { minX: 452, minY: 371, maxX: 600, maxY: 517 },
    right: { minX: 667, minY: 369, maxX: 819, maxY: 519 },
    top: { minX: 559, minY: 180, maxX: 706, maxY: 330 },
  },
  {
    left: { minX: 451, minY: 369, maxX: 599, maxY: 515 },
    right: { minX: 667, minY: 367, maxX: 818, maxY: 518 },
    top: { minX: 558, minY: 178, maxX: 706, maxY: 327 },
  },
  {
    left: { minX: 449, minY: 368, maxX: 598, maxY: 515 },
    right: { minX: 666, minY: 366, maxX: 818, maxY: 517 },
    top: { minX: 557, minY: 177, maxX: 705, maxY: 326 },
  },
  {
    left: { minX: 447, minY: 368, maxX: 596, maxY: 515 },
    right: { minX: 664, minY: 366, maxX: 816, maxY: 517 },
    top: { minX: 555, minY: 177, maxX: 704, maxY: 327 },
  },
  {
    left: { minX: 447, minY: 368, maxX: 596, maxY: 515 },
    right: { minX: 663, minY: 366, maxX: 815, maxY: 517 },
    top: { minX: 555, minY: 177, maxX: 703, maxY: 327 },
  },
  {
    left: { minX: 446, minY: 368, maxX: 595, maxY: 516 },
    right: { minX: 662, minY: 367, maxX: 814, maxY: 517 },
    top: { minX: 553, minY: 177, maxX: 702, maxY: 327 },
  },
  {
    left: { minX: 443, minY: 369, maxX: 593, maxY: 516 },
    right: { minX: 661, minY: 367, maxX: 812, maxY: 518 },
    top: { minX: 551, minY: 177, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 443, minY: 369, maxX: 593, maxY: 516 },
    right: { minX: 661, minY: 367, maxX: 813, maxY: 517 },
    top: { minX: 551, minY: 177, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 441, minY: 370, maxX: 591, maxY: 518 },
    right: { minX: 659, minY: 368, maxX: 811, maxY: 519 },
    top: { minX: 549, minY: 178, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 442, minY: 371, maxX: 592, maxY: 519 },
    right: { minX: 659, minY: 368, maxX: 811, maxY: 519 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 442, minY: 371, maxX: 592, maxY: 519 },
    right: { minX: 660, minY: 368, maxX: 812, maxY: 519 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 442, minY: 371, maxX: 592, maxY: 519 },
    right: { minX: 660, minY: 369, maxX: 812, maxY: 519 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 440, minY: 371, maxX: 591, maxY: 519 },
    right: { minX: 659, minY: 369, maxX: 811, maxY: 519 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 441, minY: 371, maxX: 592, maxY: 520 },
    right: { minX: 660, minY: 369, maxX: 812, maxY: 520 },
    top: { minX: 550, minY: 179, maxX: 699, maxY: 330 },
  },
  {
    left: { minX: 441, minY: 372, maxX: 591, maxY: 521 },
    right: { minX: 660, minY: 370, maxX: 812, maxY: 521 },
    top: { minX: 549, minY: 180, maxX: 699, maxY: 331 },
  },
  {
    left: { minX: 440, minY: 372, maxX: 591, maxY: 521 },
    right: { minX: 659, minY: 370, maxX: 811, maxY: 521 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 331 },
  },
  {
    left: { minX: 440, minY: 371, maxX: 591, maxY: 521 },
    right: { minX: 660, minY: 369, maxX: 812, maxY: 521 },
    top: { minX: 550, minY: 179, maxX: 699, maxY: 330 },
  },
  {
    left: { minX: 439, minY: 372, maxX: 591, maxY: 521 },
    right: { minX: 660, minY: 369, maxX: 812, maxY: 521 },
    top: { minX: 549, minY: 179, maxX: 699, maxY: 330 },
  },
  {
    left: { minX: 440, minY: 372, maxX: 592, maxY: 522 },
    right: { minX: 661, minY: 370, maxX: 813, maxY: 521 },
    top: { minX: 550, minY: 179, maxX: 699, maxY: 330 },
  },
  {
    left: { minX: 441, minY: 373, maxX: 592, maxY: 523 },
    right: { minX: 662, minY: 371, maxX: 814, maxY: 522 },
    top: { minX: 551, minY: 179, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 441, minY: 373, maxX: 593, maxY: 523 },
    right: { minX: 662, minY: 371, maxX: 814, maxY: 523 },
    top: { minX: 551, minY: 179, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 441, minY: 373, maxX: 593, maxY: 523 },
    right: { minX: 662, minY: 371, maxX: 815, maxY: 523 },
    top: { minX: 551, minY: 179, maxX: 701, maxY: 331 },
  },
  {
    left: { minX: 440, minY: 373, maxX: 592, maxY: 524 },
    right: { minX: 661, minY: 371, maxX: 814, maxY: 523 },
    top: { minX: 550, minY: 180, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 439, minY: 373, maxX: 591, maxY: 524 },
    right: { minX: 661, minY: 371, maxX: 814, maxY: 523 },
    top: { minX: 549, minY: 179, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 439, minY: 372, maxX: 592, maxY: 523 },
    right: { minX: 661, minY: 370, maxX: 814, maxY: 522 },
    top: { minX: 550, minY: 178, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 438, minY: 372, maxX: 591, maxY: 523 },
    right: { minX: 660, minY: 370, maxX: 814, maxY: 522 },
    top: { minX: 549, minY: 177, maxX: 699, maxY: 329 },
  },
  {
    left: { minX: 437, minY: 372, maxX: 591, maxY: 523 },
    right: { minX: 660, minY: 369, maxX: 814, maxY: 522 },
    top: { minX: 549, minY: 177, maxX: 699, maxY: 329 },
  },
  {
    left: { minX: 436, minY: 370, maxX: 590, maxY: 521 },
    right: { minX: 660, minY: 368, maxX: 814, maxY: 521 },
    top: { minX: 549, minY: 174, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 436, minY: 369, maxX: 590, maxY: 521 },
    right: { minX: 660, minY: 368, maxX: 814, maxY: 520 },
    top: { minX: 549, minY: 174, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 436, minY: 368, maxX: 590, maxY: 520 },
    right: { minX: 660, minY: 367, maxX: 814, maxY: 520 },
    top: { minX: 549, minY: 173, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 434, minY: 367, maxX: 588, maxY: 519 },
    right: { minX: 658, minY: 367, maxX: 812, maxY: 519 },
    top: { minX: 547, minY: 172, maxX: 699, maxY: 326 },
  },
  {
    left: { minX: 432, minY: 367, maxX: 587, maxY: 519 },
    right: { minX: 657, minY: 366, maxX: 811, maxY: 519 },
    top: { minX: 545, minY: 172, maxX: 697, maxY: 325 },
  },
  {
    left: { minX: 430, minY: 368, maxX: 585, maxY: 519 },
    right: { minX: 655, minY: 366, maxX: 809, maxY: 519 },
    top: { minX: 543, minY: 171, maxX: 695, maxY: 325 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 583, maxY: 520 },
    right: { minX: 653, minY: 366, maxX: 806, maxY: 519 },
    top: { minX: 540, minY: 172, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 427, minY: 369, maxX: 582, maxY: 521 },
    right: { minX: 652, minY: 367, maxX: 806, maxY: 519 },
    top: { minX: 539, minY: 173, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 427, minY: 370, maxX: 581, maxY: 522 },
    right: { minX: 652, minY: 367, maxX: 805, maxY: 520 },
    top: { minX: 539, minY: 174, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 428, minY: 370, maxX: 582, maxY: 522 },
    right: { minX: 652, minY: 368, maxX: 806, maxY: 520 },
    top: { minX: 540, minY: 175, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 428, minY: 370, maxX: 583, maxY: 522 },
    right: { minX: 653, minY: 368, maxX: 806, maxY: 520 },
    top: { minX: 541, minY: 175, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 429, minY: 370, maxX: 583, maxY: 522 },
    right: { minX: 653, minY: 368, maxX: 806, maxY: 521 },
    top: { minX: 541, minY: 175, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 429, minY: 371, maxX: 583, maxY: 523 },
    right: { minX: 653, minY: 369, maxX: 806, maxY: 521 },
    top: { minX: 542, minY: 176, maxX: 693, maxY: 329 },
  },
  {
    left: { minX: 430, minY: 372, maxX: 583, maxY: 524 },
    right: { minX: 653, minY: 370, maxX: 806, maxY: 522 },
    top: { minX: 542, minY: 177, maxX: 693, maxY: 330 },
  },
  {
    left: { minX: 431, minY: 372, maxX: 584, maxY: 524 },
    right: { minX: 654, minY: 371, maxX: 807, maxY: 523 },
    top: { minX: 543, minY: 178, maxX: 694, maxY: 331 },
  },
  {
    left: { minX: 431, minY: 373, maxX: 585, maxY: 524 },
    right: { minX: 655, minY: 372, maxX: 808, maxY: 524 },
    top: { minX: 544, minY: 179, maxX: 694, maxY: 331 },
  },
  {
    left: { minX: 432, minY: 373, maxX: 585, maxY: 524 },
    right: { minX: 655, minY: 372, maxX: 808, maxY: 524 },
    top: { minX: 545, minY: 180, maxX: 695, maxY: 331 },
  },
  {
    left: { minX: 433, minY: 373, maxX: 587, maxY: 525 },
    right: { minX: 656, minY: 373, maxX: 809, maxY: 525 },
    top: { minX: 546, minY: 180, maxX: 696, maxY: 332 },
  },
  {
    left: { minX: 434, minY: 374, maxX: 588, maxY: 525 },
    right: { minX: 657, minY: 374, maxX: 810, maxY: 525 },
    top: { minX: 547, minY: 181, maxX: 698, maxY: 333 },
  },
  {
    left: { minX: 435, minY: 375, maxX: 588, maxY: 526 },
    right: { minX: 658, minY: 375, maxX: 810, maxY: 526 },
    top: { minX: 549, minY: 182, maxX: 698, maxY: 334 },
  },
  {
    left: { minX: 436, minY: 375, maxX: 589, maxY: 526 },
    right: { minX: 658, minY: 375, maxX: 811, maxY: 527 },
    top: { minX: 549, minY: 183, maxX: 699, maxY: 334 },
  },
  {
    left: { minX: 437, minY: 376, maxX: 589, maxY: 527 },
    right: { minX: 659, minY: 376, maxX: 811, maxY: 528 },
    top: { minX: 550, minY: 184, maxX: 700, maxY: 335 },
  },
  {
    left: { minX: 439, minY: 376, maxX: 591, maxY: 527 },
    right: { minX: 660, minY: 377, maxX: 813, maxY: 528 },
    top: { minX: 552, minY: 185, maxX: 701, maxY: 335 },
  },
  {
    left: { minX: 439, minY: 376, maxX: 592, maxY: 526 },
    right: { minX: 661, minY: 377, maxX: 813, maxY: 528 },
    top: { minX: 553, minY: 185, maxX: 702, maxY: 335 },
  },
  {
    left: { minX: 438, minY: 375, maxX: 591, maxY: 525 },
    right: { minX: 660, minY: 375, maxX: 813, maxY: 527 },
    top: { minX: 552, minY: 183, maxX: 702, maxY: 334 },
  },
  {
    left: { minX: 440, minY: 372, maxX: 593, maxY: 522 },
    right: { minX: 662, minY: 372, maxX: 815, maxY: 523 },
    top: { minX: 553, minY: 179, maxX: 703, maxY: 331 },
  },
  {
    left: { minX: 441, minY: 374, maxX: 593, maxY: 524 },
    right: { minX: 663, minY: 375, maxX: 815, maxY: 526 },
    top: { minX: 555, minY: 183, maxX: 704, maxY: 334 },
  },
  {
    left: { minX: 443, minY: 375, maxX: 594, maxY: 526 },
    right: { minX: 664, minY: 376, maxX: 815, maxY: 527 },
    top: { minX: 555, minY: 185, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 443, minY: 376, maxX: 595, maxY: 525 },
    right: { minX: 664, minY: 377, maxX: 816, maxY: 527 },
    top: { minX: 556, minY: 185, maxX: 705, maxY: 335 },
  },
  {
    left: { minX: 444, minY: 373, maxX: 595, maxY: 523 },
    right: { minX: 664, minY: 374, maxX: 816, maxY: 525 },
    top: { minX: 556, minY: 182, maxX: 706, maxY: 333 },
  },
  {
    left: { minX: 444, minY: 374, maxX: 595, maxY: 524 },
    right: { minX: 664, minY: 375, maxX: 815, maxY: 526 },
    top: { minX: 556, minY: 184, maxX: 705, maxY: 334 },
  },
  {
    left: { minX: 445, minY: 376, maxX: 596, maxY: 525 },
    right: { minX: 665, minY: 377, maxX: 816, maxY: 527 },
    top: { minX: 558, minY: 185, maxX: 706, maxY: 336 },
  },
  {
    left: { minX: 447, minY: 376, maxX: 597, maxY: 525 },
    right: { minX: 666, minY: 377, maxX: 818, maxY: 527 },
    top: { minX: 559, minY: 186, maxX: 708, maxY: 336 },
  },
  {
    left: { minX: 447, minY: 376, maxX: 598, maxY: 525 },
    right: { minX: 666, minY: 377, maxX: 817, maxY: 527 },
    top: { minX: 560, minY: 187, maxX: 708, maxY: 336 },
  },
  {
    left: { minX: 448, minY: 377, maxX: 597, maxY: 526 },
    right: { minX: 666, minY: 378, maxX: 817, maxY: 528 },
    top: { minX: 560, minY: 188, maxX: 708, maxY: 337 },
  },
  {
    left: { minX: 447, minY: 377, maxX: 598, maxY: 525 },
    right: { minX: 666, minY: 378, maxX: 817, maxY: 528 },
    top: { minX: 560, minY: 188, maxX: 708, maxY: 337 },
  },
  {
    left: { minX: 447, minY: 377, maxX: 597, maxY: 525 },
    right: { minX: 665, minY: 378, maxX: 816, maxY: 528 },
    top: { minX: 559, minY: 189, maxX: 706, maxY: 337 },
  },
  {
    left: { minX: 446, minY: 376, maxX: 596, maxY: 524 },
    right: { minX: 664, minY: 378, maxX: 815, maxY: 527 },
    top: { minX: 559, minY: 189, maxX: 706, maxY: 337 },
  },
  {
    left: { minX: 446, minY: 376, maxX: 595, maxY: 524 },
    right: { minX: 663, minY: 378, maxX: 813, maxY: 527 },
    top: { minX: 557, minY: 189, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 445, minY: 377, maxX: 594, maxY: 525 },
    right: { minX: 662, minY: 377, maxX: 812, maxY: 527 },
    top: { minX: 557, minY: 189, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 444, minY: 376, maxX: 593, maxY: 524 },
    right: { minX: 661, minY: 377, maxX: 811, maxY: 526 },
    top: { minX: 556, minY: 189, maxX: 702, maxY: 337 },
  },
  {
    left: { minX: 445, minY: 376, maxX: 594, maxY: 523 },
    right: { minX: 662, minY: 377, maxX: 811, maxY: 525 },
    top: { minX: 557, minY: 189, maxX: 703, maxY: 336 },
  },
  {
    left: { minX: 446, minY: 376, maxX: 595, maxY: 523 },
    right: { minX: 662, minY: 377, maxX: 811, maxY: 525 },
    top: { minX: 557, minY: 189, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 448, minY: 376, maxX: 596, maxY: 522 },
    right: { minX: 664, minY: 377, maxX: 812, maxY: 525 },
    top: { minX: 559, minY: 190, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 448, minY: 376, maxX: 595, maxY: 522 },
    right: { minX: 663, minY: 377, maxX: 811, maxY: 525 },
    top: { minX: 557, minY: 190, maxX: 703, maxY: 337 },
  },
  {
    left: { minX: 449, minY: 375, maxX: 596, maxY: 521 },
    right: { minX: 663, minY: 376, maxX: 811, maxY: 523 },
    top: { minX: 558, minY: 189, maxX: 704, maxY: 336 },
  },
  {
    left: { minX: 449, minY: 375, maxX: 596, maxY: 520 },
    right: { minX: 663, minY: 375, maxX: 811, maxY: 523 },
    top: { minX: 558, minY: 189, maxX: 703, maxY: 335 },
  },
  {
    left: { minX: 450, minY: 375, maxX: 596, maxY: 519 },
    right: { minX: 663, minY: 375, maxX: 811, maxY: 522 },
    top: { minX: 558, minY: 189, maxX: 703, maxY: 335 },
  },
  {
    left: { minX: 450, minY: 375, maxX: 595, maxY: 519 },
    right: { minX: 662, minY: 375, maxX: 810, maxY: 521 },
    top: { minX: 557, minY: 189, maxX: 702, maxY: 335 },
  },
  {
    left: { minX: 450, minY: 376, maxX: 595, maxY: 520 },
    right: { minX: 662, minY: 375, maxX: 809, maxY: 521 },
    top: { minX: 557, minY: 191, maxX: 701, maxY: 336 },
  },
  {
    left: { minX: 451, minY: 375, maxX: 596, maxY: 519 },
    right: { minX: 663, minY: 374, maxX: 810, maxY: 520 },
    top: { minX: 557, minY: 190, maxX: 702, maxY: 335 },
  },
  {
    left: { minX: 451, minY: 376, maxX: 596, maxY: 519 },
    right: { minX: 663, minY: 375, maxX: 809, maxY: 521 },
    top: { minX: 557, minY: 191, maxX: 701, maxY: 336 },
  },
  {
    left: { minX: 453, minY: 376, maxX: 597, maxY: 519 },
    right: { minX: 663, minY: 375, maxX: 810, maxY: 521 },
    top: { minX: 559, minY: 192, maxX: 702, maxY: 336 },
  },
  {
    left: { minX: 454, minY: 376, maxX: 598, maxY: 519 },
    right: { minX: 664, minY: 375, maxX: 810, maxY: 521 },
    top: { minX: 559, minY: 193, maxX: 702, maxY: 337 },
  },
  {
    left: { minX: 454, minY: 377, maxX: 598, maxY: 520 },
    right: { minX: 664, minY: 376, maxX: 810, maxY: 521 },
    top: { minX: 559, minY: 193, maxX: 702, maxY: 338 },
  },
  {
    left: { minX: 455, minY: 377, maxX: 598, maxY: 519 },
    right: { minX: 664, minY: 375, maxX: 810, maxY: 520 },
    top: { minX: 559, minY: 193, maxX: 702, maxY: 337 },
  },
  {
    left: { minX: 456, minY: 376, maxX: 599, maxY: 518 },
    right: { minX: 665, minY: 375, maxX: 810, maxY: 520 },
    top: { minX: 560, minY: 193, maxX: 703, maxY: 337 },
  },
  {
    left: { minX: 457, minY: 377, maxX: 600, maxY: 519 },
    right: { minX: 665, minY: 375, maxX: 811, maxY: 520 },
    top: { minX: 561, minY: 194, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 458, minY: 378, maxX: 600, maxY: 519 },
    right: { minX: 665, minY: 377, maxX: 811, maxY: 521 },
    top: { minX: 561, minY: 196, maxX: 703, maxY: 339 },
  },
  {
    left: { minX: 458, minY: 378, maxX: 601, maxY: 520 },
    right: { minX: 666, minY: 377, maxX: 811, maxY: 521 },
    top: { minX: 561, minY: 196, maxX: 703, maxY: 339 },
  },
  {
    left: { minX: 459, minY: 377, maxX: 601, maxY: 518 },
    right: { minX: 666, minY: 375, maxX: 812, maxY: 519 },
    top: { minX: 562, minY: 194, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 459, minY: 375, maxX: 602, maxY: 516 },
    right: { minX: 667, minY: 373, maxX: 812, maxY: 518 },
    top: { minX: 563, minY: 193, maxX: 704, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 374, maxX: 602, maxY: 515 },
    right: { minX: 667, minY: 372, maxX: 812, maxY: 517 },
    top: { minX: 562, minY: 191, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 374, maxX: 603, maxY: 514 },
    right: { minX: 668, minY: 372, maxX: 813, maxY: 516 },
    top: { minX: 563, minY: 191, maxX: 705, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 604, maxY: 513 },
    right: { minX: 668, minY: 372, maxX: 813, maxY: 516 },
    top: { minX: 565, minY: 192, maxX: 706, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 603, maxY: 511 },
    right: { minX: 668, minY: 371, maxX: 812, maxY: 514 },
    top: { minX: 565, minY: 190, maxX: 706, maxY: 333 },
  },
  {
    left: { minX: 462, minY: 372, maxX: 603, maxY: 511 },
    right: { minX: 667, minY: 371, maxX: 812, maxY: 514 },
    top: { minX: 565, minY: 191, maxX: 706, maxY: 333 },
  },
  {
    left: { minX: 462, minY: 372, maxX: 603, maxY: 512 },
    right: { minX: 667, minY: 371, maxX: 811, maxY: 514 },
    top: { minX: 565, minY: 192, maxX: 705, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 602, maxY: 512 },
    right: { minX: 666, minY: 372, maxX: 810, maxY: 515 },
    top: { minX: 564, minY: 193, maxX: 704, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 602, maxY: 513 },
    right: { minX: 666, minY: 373, maxX: 810, maxY: 515 },
    top: { minX: 564, minY: 193, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 463, minY: 375, maxX: 603, maxY: 513 },
    right: { minX: 667, minY: 373, maxX: 810, maxY: 515 },
    top: { minX: 564, minY: 195, maxX: 704, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 376, maxX: 604, maxY: 515 },
    right: { minX: 668, minY: 374, maxX: 811, maxY: 517 },
    top: { minX: 565, minY: 197, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 466, minY: 377, maxX: 606, maxY: 515 },
    right: { minX: 669, minY: 376, maxX: 812, maxY: 518 },
    top: { minX: 567, minY: 199, maxX: 706, maxY: 338 },
  },
  {
    left: { minX: 468, minY: 379, maxX: 607, maxY: 517 },
    right: { minX: 671, minY: 377, maxX: 814, maxY: 519 },
    top: { minX: 568, minY: 200, maxX: 707, maxY: 340 },
  },
  {
    left: { minX: 469, minY: 379, maxX: 608, maxY: 517 },
    right: { minX: 671, minY: 377, maxX: 814, maxY: 519 },
    top: { minX: 569, minY: 201, maxX: 708, maxY: 341 },
  },
  {
    left: { minX: 471, minY: 380, maxX: 609, maxY: 517 },
    right: { minX: 673, minY: 378, maxX: 816, maxY: 520 },
    top: { minX: 571, minY: 201, maxX: 710, maxY: 341 },
  },
  {
    left: { minX: 471, minY: 379, maxX: 610, maxY: 517 },
    right: { minX: 673, minY: 377, maxX: 816, maxY: 519 },
    top: { minX: 571, minY: 201, maxX: 710, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 610, maxY: 516 },
    right: { minX: 673, minY: 377, maxX: 817, maxY: 519 },
    top: { minX: 571, minY: 201, maxX: 710, maxY: 340 },
  },
  {
    left: { minX: 471, minY: 378, maxX: 609, maxY: 515 },
    right: { minX: 672, minY: 376, maxX: 815, maxY: 517 },
    top: { minX: 571, minY: 199, maxX: 709, maxY: 339 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 609, maxY: 512 },
    right: { minX: 672, minY: 373, maxX: 815, maxY: 515 },
    top: { minX: 570, minY: 197, maxX: 709, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 608, maxY: 512 },
    right: { minX: 671, minY: 373, maxX: 814, maxY: 514 },
    top: { minX: 569, minY: 197, maxX: 708, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 608, maxY: 512 },
    right: { minX: 670, minY: 373, maxX: 813, maxY: 515 },
    top: { minX: 569, minY: 197, maxX: 707, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 608, maxY: 512 },
    right: { minX: 671, minY: 373, maxX: 813, maxY: 514 },
    top: { minX: 569, minY: 197, maxX: 707, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 608, maxY: 512 },
    right: { minX: 671, minY: 373, maxX: 813, maxY: 515 },
    top: { minX: 569, minY: 197, maxX: 707, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 608, maxY: 512 },
    right: { minX: 671, minY: 373, maxX: 813, maxY: 514 },
    top: { minX: 569, minY: 198, maxX: 707, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 609, maxY: 513 },
    right: { minX: 671, minY: 375, maxX: 813, maxY: 515 },
    top: { minX: 570, minY: 199, maxX: 707, maxY: 338 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 609, maxY: 513 },
    right: { minX: 671, minY: 375, maxX: 813, maxY: 515 },
    top: { minX: 570, minY: 200, maxX: 708, maxY: 338 },
  },
  {
    left: { minX: 473, minY: 378, maxX: 609, maxY: 513 },
    right: { minX: 672, minY: 376, maxX: 813, maxY: 516 },
    top: { minX: 571, minY: 201, maxX: 708, maxY: 339 },
  },
  {
    left: { minX: 473, minY: 380, maxX: 609, maxY: 515 },
    right: { minX: 671, minY: 377, maxX: 812, maxY: 517 },
    top: { minX: 571, minY: 204, maxX: 707, maxY: 341 },
  },
  {
    left: { minX: 473, minY: 379, maxX: 609, maxY: 514 },
    right: { minX: 671, minY: 377, maxX: 812, maxY: 517 },
    top: { minX: 571, minY: 203, maxX: 707, maxY: 341 },
  },
  {
    left: { minX: 473, minY: 379, maxX: 609, maxY: 514 },
    right: { minX: 670, minY: 377, maxX: 811, maxY: 517 },
    top: { minX: 571, minY: 203, maxX: 706, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 380, maxX: 608, maxY: 514 },
    right: { minX: 669, minY: 377, maxX: 810, maxY: 517 },
    top: { minX: 569, minY: 205, maxX: 706, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 608, maxY: 513 },
    right: { minX: 670, minY: 377, maxX: 810, maxY: 516 },
    top: { minX: 569, minY: 203, maxX: 706, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 380, maxX: 607, maxY: 514 },
    right: { minX: 669, minY: 377, maxX: 809, maxY: 517 },
    top: { minX: 569, minY: 205, maxX: 705, maxY: 342 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 607, maxY: 514 },
    right: { minX: 669, minY: 377, maxX: 809, maxY: 516 },
    top: { minX: 569, minY: 205, maxX: 704, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 607, maxY: 512 },
    right: { minX: 669, minY: 376, maxX: 809, maxY: 515 },
    top: { minX: 569, minY: 203, maxX: 704, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 607, maxY: 512 },
    right: { minX: 668, minY: 376, maxX: 808, maxY: 515 },
    top: { minX: 569, minY: 203, maxX: 704, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 607, maxY: 512 },
    right: { minX: 668, minY: 376, maxX: 808, maxY: 514 },
    top: { minX: 568, minY: 203, maxX: 704, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 606, maxY: 511 },
    right: { minX: 667, minY: 375, maxX: 807, maxY: 514 },
    top: { minX: 568, minY: 203, maxX: 703, maxY: 339 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 607, maxY: 511 },
    right: { minX: 667, minY: 375, maxX: 807, maxY: 513 },
    top: { minX: 568, minY: 203, maxX: 703, maxY: 339 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 606, maxY: 511 },
    right: { minX: 667, minY: 375, maxX: 806, maxY: 513 },
    top: { minX: 567, minY: 204, maxX: 702, maxY: 340 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 605, maxY: 511 },
    right: { minX: 665, minY: 375, maxX: 805, maxY: 513 },
    top: { minX: 565, minY: 203, maxX: 700, maxY: 339 },
  },
  {
    left: { minX: 470, minY: 376, maxX: 604, maxY: 509 },
    right: { minX: 665, minY: 373, maxX: 804, maxY: 511 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 604, maxY: 508 },
    right: { minX: 665, minY: 371, maxX: 804, maxY: 510 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 604, maxY: 507 },
    right: { minX: 664, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 200, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 604, maxY: 507 },
    right: { minX: 664, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 201, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 604, maxY: 507 },
    right: { minX: 664, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 200, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 604, maxY: 506 },
    right: { minX: 665, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 604, maxY: 506 },
    right: { minX: 664, minY: 371, maxX: 802, maxY: 509 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 604, maxY: 505 },
    right: { minX: 664, minY: 371, maxX: 802, maxY: 508 },
    top: { minX: 565, minY: 201, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 603, maxY: 506 },
    right: { minX: 663, minY: 371, maxX: 800, maxY: 509 },
    top: { minX: 564, minY: 202, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 603, maxY: 506 },
    right: { minX: 662, minY: 372, maxX: 800, maxY: 509 },
    top: { minX: 563, minY: 203, maxX: 697, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 603, maxY: 506 },
    right: { minX: 663, minY: 371, maxX: 800, maxY: 509 },
    top: { minX: 564, minY: 203, maxX: 697, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 603, maxY: 505 },
    right: { minX: 663, minY: 371, maxX: 800, maxY: 507 },
    top: { minX: 564, minY: 201, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 373, maxX: 604, maxY: 505 },
    right: { minX: 663, minY: 371, maxX: 801, maxY: 507 },
    top: { minX: 565, minY: 201, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 604, maxY: 505 },
    right: { minX: 664, minY: 372, maxX: 801, maxY: 508 },
    top: { minX: 566, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 604, maxY: 505 },
    right: { minX: 664, minY: 372, maxX: 801, maxY: 508 },
    top: { minX: 565, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 374, maxX: 604, maxY: 505 },
    right: { minX: 663, minY: 372, maxX: 801, maxY: 507 },
    top: { minX: 565, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 374, maxX: 604, maxY: 505 },
    right: { minX: 663, minY: 371, maxX: 801, maxY: 507 },
    top: { minX: 565, minY: 203, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 604, maxY: 503 },
    right: { minX: 664, minY: 370, maxX: 801, maxY: 506 },
    top: { minX: 566, minY: 201, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 605, maxY: 503 },
    right: { minX: 664, minY: 370, maxX: 801, maxY: 506 },
    top: { minX: 566, minY: 201, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 605, maxY: 504 },
    right: { minX: 664, minY: 370, maxX: 801, maxY: 506 },
    top: { minX: 566, minY: 202, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 374, maxX: 605, maxY: 504 },
    right: { minX: 664, minY: 371, maxX: 801, maxY: 506 },
    top: { minX: 566, minY: 203, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 605, maxY: 503 },
    right: { minX: 664, minY: 370, maxX: 801, maxY: 506 },
    top: { minX: 567, minY: 203, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 374, maxX: 605, maxY: 504 },
    right: { minX: 665, minY: 371, maxX: 801, maxY: 506 },
    top: { minX: 567, minY: 203, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 605, maxY: 503 },
    right: { minX: 664, minY: 370, maxX: 800, maxY: 505 },
    top: { minX: 566, minY: 203, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 605, maxY: 502 },
    right: { minX: 664, minY: 369, maxX: 800, maxY: 505 },
    top: { minX: 566, minY: 202, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 475, minY: 372, maxX: 606, maxY: 502 },
    right: { minX: 665, minY: 369, maxX: 800, maxY: 504 },
    top: { minX: 567, minY: 201, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 606, maxY: 500 },
    right: { minX: 665, minY: 368, maxX: 801, maxY: 503 },
    top: { minX: 567, minY: 201, maxX: 699, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 371, maxX: 606, maxY: 500 },
    right: { minX: 664, minY: 368, maxX: 801, maxY: 503 },
    top: { minX: 567, minY: 201, maxX: 699, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 606, maxY: 500 },
    right: { minX: 664, minY: 368, maxX: 800, maxY: 503 },
    top: { minX: 567, minY: 200, maxX: 699, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 370, maxX: 606, maxY: 499 },
    right: { minX: 664, minY: 368, maxX: 800, maxY: 503 },
    top: { minX: 567, minY: 201, maxX: 699, maxY: 333 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 605, maxY: 500 },
    right: { minX: 663, minY: 369, maxX: 799, maxY: 503 },
    top: { minX: 567, minY: 201, maxX: 698, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 372, maxX: 605, maxY: 500 },
    right: { minX: 663, minY: 369, maxX: 798, maxY: 504 },
    top: { minX: 567, minY: 203, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 373, maxX: 606, maxY: 502 },
    right: { minX: 664, minY: 371, maxX: 799, maxY: 505 },
    top: { minX: 567, minY: 205, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 477, minY: 374, maxX: 607, maxY: 502 },
    right: { minX: 664, minY: 372, maxX: 799, maxY: 506 },
    top: { minX: 568, minY: 205, maxX: 699, maxY: 337 },
  },
  {
    left: { minX: 479, minY: 375, maxX: 608, maxY: 503 },
    right: { minX: 666, minY: 373, maxX: 801, maxY: 506 },
    top: { minX: 569, minY: 207, maxX: 700, maxY: 338 },
  },
  {
    left: { minX: 480, minY: 375, maxX: 609, maxY: 503 },
    right: { minX: 667, minY: 373, maxX: 801, maxY: 507 },
    top: { minX: 571, minY: 207, maxX: 702, maxY: 338 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 611, maxY: 502 },
    right: { minX: 669, minY: 374, maxX: 804, maxY: 507 },
    top: { minX: 575, minY: 207, maxX: 704, maxY: 339 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 374, maxX: 804, maxY: 508 },
    top: { minX: 575, minY: 208, maxX: 705, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 374, maxX: 613, maxY: 502 },
    right: { minX: 670, minY: 374, maxX: 805, maxY: 507 },
    top: { minX: 576, minY: 208, maxX: 706, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 374, maxX: 613, maxY: 502 },
    right: { minX: 670, minY: 374, maxX: 805, maxY: 507 },
    top: { minX: 577, minY: 208, maxX: 706, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 374, maxX: 612, maxY: 501 },
    right: { minX: 669, minY: 374, maxX: 804, maxY: 507 },
    top: { minX: 576, minY: 207, maxX: 706, maxY: 338 },
  },
  {
    left: { minX: 484, minY: 374, maxX: 612, maxY: 501 },
    right: { minX: 669, minY: 374, maxX: 804, maxY: 507 },
    top: { minX: 576, minY: 208, maxX: 706, maxY: 338 },
  },
  {
    left: { minX: 483, minY: 374, maxX: 611, maxY: 501 },
    right: { minX: 669, minY: 373, maxX: 803, maxY: 507 },
    top: { minX: 575, minY: 208, maxX: 705, maxY: 339 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 611, maxY: 501 },
    right: { minX: 668, minY: 374, maxX: 802, maxY: 507 },
    top: { minX: 575, minY: 208, maxX: 704, maxY: 339 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 611, maxY: 502 },
    right: { minX: 668, minY: 375, maxX: 802, maxY: 508 },
    top: { minX: 575, minY: 209, maxX: 704, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 375, maxX: 611, maxY: 501 },
    right: { minX: 669, minY: 375, maxX: 803, maxY: 508 },
    top: { minX: 576, minY: 209, maxX: 705, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 376, maxX: 611, maxY: 503 },
    right: { minX: 668, minY: 375, maxX: 802, maxY: 509 },
    top: { minX: 575, minY: 210, maxX: 704, maxY: 341 },
  },
  {
    left: { minX: 484, minY: 377, maxX: 611, maxY: 503 },
    right: { minX: 668, minY: 376, maxX: 802, maxY: 509 },
    top: { minX: 575, minY: 211, maxX: 704, maxY: 341 },
  },
  {
    left: { minX: 484, minY: 377, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 377, maxX: 803, maxY: 509 },
    top: { minX: 576, minY: 211, maxX: 704, maxY: 342 },
  },
  {
    left: { minX: 485, minY: 377, maxX: 612, maxY: 504 },
    right: { minX: 669, minY: 377, maxX: 803, maxY: 510 },
    top: { minX: 577, minY: 213, maxX: 705, maxY: 342 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 613, maxY: 505 },
    right: { minX: 669, minY: 378, maxX: 803, maxY: 511 },
    top: { minX: 577, minY: 214, maxX: 706, maxY: 343 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 613, maxY: 506 },
    right: { minX: 669, minY: 379, maxX: 803, maxY: 512 },
    top: { minX: 577, minY: 215, maxX: 706, maxY: 345 },
  },
  {
    left: { minX: 486, minY: 381, maxX: 613, maxY: 507 },
    right: { minX: 670, minY: 380, maxX: 803, maxY: 513 },
    top: { minX: 577, minY: 217, maxX: 706, maxY: 346 },
  },
  {
    left: { minX: 486, minY: 382, maxX: 613, maxY: 508 },
    right: { minX: 669, minY: 381, maxX: 803, maxY: 513 },
    top: { minX: 577, minY: 218, maxX: 705, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 382, maxX: 613, maxY: 508 },
    right: { minX: 670, minY: 381, maxX: 803, maxY: 514 },
    top: { minX: 578, minY: 219, maxX: 706, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 382, maxX: 613, maxY: 507 },
    right: { minX: 670, minY: 381, maxX: 803, maxY: 514 },
    top: { minX: 578, minY: 219, maxX: 706, maxY: 347 },
  },
  {
    left: { minX: 488, minY: 381, maxX: 614, maxY: 507 },
    right: { minX: 671, minY: 381, maxX: 803, maxY: 513 },
    top: { minX: 578, minY: 218, maxX: 706, maxY: 346 },
  },
  {
    left: { minX: 487, minY: 380, maxX: 613, maxY: 506 },
    right: { minX: 670, minY: 380, maxX: 803, maxY: 512 },
    top: { minX: 578, minY: 217, maxX: 706, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 380, maxX: 613, maxY: 506 },
    right: { minX: 670, minY: 380, maxX: 802, maxY: 512 },
    top: { minX: 578, minY: 217, maxX: 706, maxY: 345 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 612, maxY: 506 },
    right: { minX: 668, minY: 380, maxX: 801, maxY: 512 },
    top: { minX: 577, minY: 217, maxX: 704, maxY: 345 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 611, maxY: 505 },
    right: { minX: 667, minY: 380, maxX: 800, maxY: 511 },
    top: { minX: 576, minY: 217, maxX: 703, maxY: 345 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 611, maxY: 505 },
    right: { minX: 667, minY: 380, maxX: 799, maxY: 511 },
    top: { minX: 575, minY: 217, maxX: 703, maxY: 345 },
  },
  {
    left: { minX: 484, minY: 380, maxX: 610, maxY: 505 },
    right: { minX: 666, minY: 380, maxX: 799, maxY: 511 },
    top: { minX: 575, minY: 217, maxX: 702, maxY: 345 },
  },
  {
    left: { minX: 484, minY: 381, maxX: 609, maxY: 506 },
    right: { minX: 665, minY: 380, maxX: 798, maxY: 512 },
    top: { minX: 574, minY: 218, maxX: 701, maxY: 346 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 609, maxY: 506 },
    right: { minX: 665, minY: 380, maxX: 797, maxY: 511 },
    top: { minX: 573, minY: 218, maxX: 700, maxY: 346 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 609, maxY: 506 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 512 },
    top: { minX: 573, minY: 219, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 382, maxX: 609, maxY: 507 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 513 },
    top: { minX: 573, minY: 220, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 484, minY: 382, maxX: 610, maxY: 507 },
    right: { minX: 665, minY: 381, maxX: 798, maxY: 513 },
    top: { minX: 574, minY: 219, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 485, minY: 382, maxX: 610, maxY: 507 },
    right: { minX: 666, minY: 381, maxX: 798, maxY: 513 },
    top: { minX: 575, minY: 219, maxX: 701, maxY: 347 },
  },
  {
    left: { minX: 486, minY: 382, maxX: 611, maxY: 506 },
    right: { minX: 667, minY: 382, maxX: 799, maxY: 513 },
    top: { minX: 577, minY: 220, maxX: 703, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 612, maxY: 506 },
    right: { minX: 668, minY: 381, maxX: 800, maxY: 513 },
    top: { minX: 577, minY: 219, maxX: 704, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 612, maxY: 506 },
    right: { minX: 668, minY: 382, maxX: 800, maxY: 513 },
    top: { minX: 578, minY: 219, maxX: 704, maxY: 347 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 611, maxY: 505 },
    right: { minX: 667, minY: 381, maxX: 799, maxY: 512 },
    top: { minX: 577, minY: 219, maxX: 704, maxY: 346 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 611, maxY: 503 },
    right: { minX: 667, minY: 379, maxX: 798, maxY: 511 },
    top: { minX: 577, minY: 217, maxX: 704, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 379, maxX: 610, maxY: 503 },
    right: { minX: 665, minY: 379, maxX: 797, maxY: 511 },
    top: { minX: 575, minY: 217, maxX: 702, maxY: 345 },
  },
  {
    left: { minX: 483, minY: 382, maxX: 608, maxY: 505 },
    right: { minX: 663, minY: 381, maxX: 794, maxY: 512 },
    top: { minX: 573, minY: 221, maxX: 699, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 382, maxX: 608, maxY: 506 },
    right: { minX: 663, minY: 382, maxX: 794, maxY: 512 },
    top: { minX: 573, minY: 221, maxX: 698, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 382, maxX: 608, maxY: 506 },
    right: { minX: 663, minY: 382, maxX: 794, maxY: 512 },
    top: { minX: 573, minY: 221, maxX: 698, maxY: 348 },
  },
  {
    left: { minX: 483, minY: 383, maxX: 608, maxY: 507 },
    right: { minX: 663, minY: 383, maxX: 794, maxY: 513 },
    top: { minX: 573, minY: 221, maxX: 699, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 383, maxX: 609, maxY: 507 },
    right: { minX: 665, minY: 383, maxX: 796, maxY: 513 },
    top: { minX: 574, minY: 222, maxX: 700, maxY: 349 },
  },
  {
    left: { minX: 485, minY: 383, maxX: 610, maxY: 506 },
    right: { minX: 665, minY: 383, maxX: 797, maxY: 513 },
    top: { minX: 575, minY: 221, maxX: 701, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 382, maxX: 610, maxY: 505 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 512 },
    top: { minX: 575, minY: 221, maxX: 701, maxY: 347 },
  },
  {
    left: { minX: 485, minY: 381, maxX: 610, maxY: 505 },
    right: { minX: 665, minY: 381, maxX: 796, maxY: 512 },
    top: { minX: 575, minY: 219, maxX: 701, maxY: 346 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 610, maxY: 504 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 511 },
    top: { minX: 575, minY: 219, maxX: 701, maxY: 346 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 665, minY: 380, maxX: 796, maxY: 511 },
    top: { minX: 575, minY: 218, maxX: 701, maxY: 345 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 664, minY: 380, maxX: 796, maxY: 510 },
    top: { minX: 575, minY: 217, maxX: 701, maxY: 345 },
  },
  {
    left: { minX: 483, minY: 379, maxX: 608, maxY: 503 },
    right: { minX: 663, minY: 379, maxX: 795, maxY: 510 },
    top: { minX: 573, minY: 217, maxX: 700, maxY: 345 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 664, minY: 379, maxX: 796, maxY: 510 },
    top: { minX: 574, minY: 217, maxX: 700, maxY: 344 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 664, minY: 380, maxX: 796, maxY: 511 },
    top: { minX: 574, minY: 218, maxX: 700, maxY: 345 },
  },
  {
    left: { minX: 484, minY: 380, maxX: 610, maxY: 504 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 511 },
    top: { minX: 575, minY: 219, maxX: 702, maxY: 346 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 610, maxY: 504 },
    right: { minX: 666, minY: 381, maxX: 797, maxY: 512 },
    top: { minX: 577, minY: 219, maxX: 703, maxY: 346 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 611, maxY: 504 },
    right: { minX: 667, minY: 381, maxX: 798, maxY: 512 },
    top: { minX: 577, minY: 219, maxX: 703, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 382, maxX: 611, maxY: 506 },
    right: { minX: 667, minY: 383, maxX: 798, maxY: 514 },
    top: { minX: 577, minY: 221, maxX: 704, maxY: 348 },
  },
  {
    left: { minX: 487, minY: 382, maxX: 611, maxY: 505 },
    right: { minX: 667, minY: 383, maxX: 798, maxY: 514 },
    top: { minX: 578, minY: 221, maxX: 704, maxY: 348 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 611, maxY: 505 },
    right: { minX: 667, minY: 383, maxX: 798, maxY: 513 },
    top: { minX: 578, minY: 221, maxX: 704, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 381, maxX: 610, maxY: 505 },
    right: { minX: 666, minY: 383, maxX: 797, maxY: 513 },
    top: { minX: 577, minY: 221, maxX: 703, maxY: 347 },
  },
  {
    left: { minX: 484, minY: 381, maxX: 609, maxY: 505 },
    right: { minX: 664, minY: 383, maxX: 795, maxY: 513 },
    top: { minX: 575, minY: 221, maxX: 702, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 608, maxY: 505 },
    right: { minX: 663, minY: 383, maxX: 795, maxY: 513 },
    top: { minX: 575, minY: 221, maxX: 701, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 608, maxY: 505 },
    right: { minX: 664, minY: 383, maxX: 795, maxY: 513 },
    top: { minX: 575, minY: 220, maxX: 701, maxY: 347 },
  },
  {
    left: { minX: 482, minY: 381, maxX: 608, maxY: 505 },
    right: { minX: 663, minY: 382, maxX: 794, maxY: 513 },
    top: { minX: 574, minY: 220, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 482, minY: 380, maxX: 607, maxY: 505 },
    right: { minX: 663, minY: 382, maxX: 794, maxY: 512 },
    top: { minX: 573, minY: 220, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 504 },
    right: { minX: 665, minY: 381, maxX: 796, maxY: 511 },
    top: { minX: 576, minY: 219, maxX: 702, maxY: 346 },
  },
  {
    left: { minX: 485, minY: 379, maxX: 610, maxY: 503 },
    right: { minX: 666, minY: 381, maxX: 798, maxY: 511 },
    top: { minX: 577, minY: 218, maxX: 703, maxY: 345 },
  },
  {
    left: { minX: 485, minY: 379, maxX: 610, maxY: 503 },
    right: { minX: 667, minY: 380, maxX: 798, maxY: 511 },
    top: { minX: 577, minY: 217, maxX: 704, maxY: 345 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 612, maxY: 503 },
    right: { minX: 668, minY: 380, maxX: 800, maxY: 511 },
    top: { minX: 578, minY: 217, maxX: 705, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 379, maxX: 613, maxY: 503 },
    right: { minX: 669, minY: 380, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 217, maxX: 706, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 378, maxX: 613, maxY: 503 },
    right: { minX: 669, minY: 380, maxX: 801, maxY: 511 },
    top: { minX: 580, minY: 217, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 487, minY: 378, maxX: 613, maxY: 503 },
    right: { minX: 670, minY: 380, maxX: 802, maxY: 511 },
    top: { minX: 581, minY: 217, maxX: 708, maxY: 344 },
  },
  {
    left: { minX: 487, minY: 378, maxX: 614, maxY: 503 },
    right: { minX: 670, minY: 380, maxX: 802, maxY: 511 },
    top: { minX: 581, minY: 216, maxX: 708, maxY: 344 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 380, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 216, maxX: 707, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 216, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 377, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 215, maxX: 706, maxY: 343 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 611, maxY: 504 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 578, minY: 215, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 612, maxY: 504 },
    right: { minX: 669, minY: 380, maxX: 802, maxY: 511 },
    top: { minX: 579, minY: 215, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 612, maxY: 504 },
    right: { minX: 669, minY: 380, maxX: 802, maxY: 511 },
    top: { minX: 579, minY: 216, maxX: 707, maxY: 345 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 612, maxY: 504 },
    right: { minX: 669, minY: 380, maxX: 801, maxY: 511 },
    top: { minX: 578, minY: 215, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 483, minY: 378, maxX: 610, maxY: 505 },
    right: { minX: 668, minY: 379, maxX: 800, maxY: 511 },
    top: { minX: 576, minY: 215, maxX: 704, maxY: 344 },
  },
  {
    left: { minX: 480, minY: 376, maxX: 608, maxY: 503 },
    right: { minX: 665, minY: 377, maxX: 798, maxY: 509 },
    top: { minX: 573, minY: 213, maxX: 702, maxY: 342 },
  },
  {
    left: { minX: 478, minY: 375, maxX: 606, maxY: 502 },
    right: { minX: 664, minY: 375, maxX: 797, maxY: 507 },
    top: { minX: 572, minY: 210, maxX: 701, maxY: 340 },
  },
  {
    left: { minX: 477, minY: 375, maxX: 605, maxY: 502 },
    right: { minX: 663, minY: 376, maxX: 796, maxY: 508 },
    top: { minX: 571, minY: 211, maxX: 700, maxY: 340 },
  },
  {
    left: { minX: 476, minY: 376, maxX: 605, maxY: 503 },
    right: { minX: 663, minY: 377, maxX: 795, maxY: 509 },
    top: { minX: 570, minY: 211, maxX: 699, maxY: 341 },
  },
  {
    left: { minX: 476, minY: 376, maxX: 605, maxY: 503 },
    right: { minX: 662, minY: 377, maxX: 796, maxY: 509 },
    top: { minX: 570, minY: 211, maxX: 698, maxY: 341 },
  },
  {
    left: { minX: 476, minY: 376, maxX: 604, maxY: 503 },
    right: { minX: 662, minY: 377, maxX: 795, maxY: 509 },
    top: { minX: 570, minY: 211, maxX: 699, maxY: 341 },
  },
  {
    left: { minX: 473, minY: 377, maxX: 602, maxY: 504 },
    right: { minX: 660, minY: 377, maxX: 793, maxY: 509 },
    top: { minX: 567, minY: 212, maxX: 696, maxY: 342 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 601, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 509 },
    top: { minX: 566, minY: 212, maxX: 695, maxY: 342 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 601, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 509 },
    top: { minX: 566, minY: 212, maxX: 695, maxY: 342 },
  },
  {
    left: { minX: 471, minY: 378, maxX: 600, maxY: 505 },
    right: { minX: 658, minY: 377, maxX: 791, maxY: 510 },
    top: { minX: 565, minY: 213, maxX: 694, maxY: 342 },
  },
  {
    left: { minX: 470, minY: 378, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 378, maxX: 790, maxY: 511 },
    top: { minX: 564, minY: 213, maxX: 694, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 379, maxX: 600, maxY: 507 },
    right: { minX: 658, minY: 379, maxX: 791, maxY: 511 },
    top: { minX: 564, minY: 213, maxX: 694, maxY: 344 },
  },
  {
    left: { minX: 470, minY: 378, maxX: 600, maxY: 507 },
    right: { minX: 658, minY: 378, maxX: 791, maxY: 511 },
    top: { minX: 565, minY: 213, maxX: 694, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 506 },
    right: { minX: 658, minY: 378, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 212, maxX: 694, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 506 },
    right: { minX: 659, minY: 378, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 211, maxX: 695, maxY: 342 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 566, minY: 211, maxX: 696, maxY: 342 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 506 },
    right: { minX: 659, minY: 377, maxX: 793, maxY: 510 },
    top: { minX: 565, minY: 211, maxX: 696, maxY: 341 },
  },
  {
    left: { minX: 469, minY: 376, maxX: 600, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 210, maxX: 696, maxY: 341 },
  },
  {
    left: { minX: 469, minY: 376, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 210, maxX: 695, maxY: 341 },
  },
  {
    left: { minX: 469, minY: 376, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 209, maxX: 695, maxY: 341 },
  },
  {
    left: { minX: 468, minY: 376, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 376, maxX: 792, maxY: 509 },
    top: { minX: 564, minY: 209, maxX: 694, maxY: 340 },
  },
  {
    left: { minX: 467, minY: 376, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 376, maxX: 792, maxY: 509 },
    top: { minX: 563, minY: 209, maxX: 694, maxY: 340 },
  },
  {
    left: { minX: 466, minY: 375, maxX: 597, maxY: 506 },
    right: { minX: 657, minY: 376, maxX: 791, maxY: 509 },
    top: { minX: 562, minY: 207, maxX: 693, maxY: 340 },
  },
  {
    left: { minX: 465, minY: 375, maxX: 597, maxY: 506 },
    right: { minX: 656, minY: 375, maxX: 790, maxY: 509 },
    top: { minX: 561, minY: 208, maxX: 692, maxY: 340 },
  },
  {
    left: { minX: 465, minY: 376, maxX: 597, maxY: 507 },
    right: { minX: 657, minY: 376, maxX: 791, maxY: 509 },
    top: { minX: 561, minY: 208, maxX: 693, maxY: 340 },
  },
  {
    left: { minX: 466, minY: 377, maxX: 598, maxY: 507 },
    right: { minX: 658, minY: 376, maxX: 792, maxY: 510 },
    top: { minX: 562, minY: 209, maxX: 694, maxY: 341 },
  },
  {
    left: { minX: 466, minY: 377, maxX: 598, maxY: 508 },
    right: { minX: 658, minY: 377, maxX: 793, maxY: 511 },
    top: { minX: 563, minY: 209, maxX: 694, maxY: 341 },
  },
  {
    left: { minX: 466, minY: 377, maxX: 599, maxY: 508 },
    right: { minX: 659, minY: 377, maxX: 793, maxY: 511 },
    top: { minX: 563, minY: 209, maxX: 694, maxY: 341 },
  },
  {
    left: { minX: 466, minY: 376, maxX: 599, maxY: 507 },
    right: { minX: 659, minY: 376, maxX: 794, maxY: 511 },
    top: { minX: 563, minY: 207, maxX: 696, maxY: 340 },
  },
  {
    left: { minX: 466, minY: 375, maxX: 599, maxY: 507 },
    right: { minX: 660, minY: 375, maxX: 794, maxY: 509 },
    top: { minX: 564, minY: 206, maxX: 696, maxY: 339 },
  },
  {
    left: { minX: 466, minY: 374, maxX: 599, maxY: 506 },
    right: { minX: 659, minY: 374, maxX: 794, maxY: 509 },
    top: { minX: 563, minY: 205, maxX: 696, maxY: 338 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 598, maxY: 505 },
    right: { minX: 659, minY: 373, maxX: 794, maxY: 507 },
    top: { minX: 563, minY: 203, maxX: 696, maxY: 337 },
  },
  {
    left: { minX: 464, minY: 372, maxX: 598, maxY: 504 },
    right: { minX: 658, minY: 372, maxX: 794, maxY: 507 },
    top: { minX: 562, minY: 202, maxX: 695, maxY: 336 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 596, maxY: 504 },
    right: { minX: 657, minY: 371, maxX: 792, maxY: 506 },
    top: { minX: 560, minY: 201, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 595, maxY: 504 },
    right: { minX: 656, minY: 371, maxX: 792, maxY: 506 },
    top: { minX: 559, minY: 201, maxX: 692, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 595, maxY: 504 },
    right: { minX: 656, minY: 371, maxX: 792, maxY: 506 },
    top: { minX: 559, minY: 201, maxX: 692, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 370, maxX: 595, maxY: 503 },
    right: { minX: 656, minY: 370, maxX: 792, maxY: 505 },
    top: { minX: 559, minY: 199, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 595, maxY: 503 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 559, minY: 199, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 369, maxX: 595, maxY: 502 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 559, minY: 198, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 369, maxX: 595, maxY: 502 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 559, minY: 198, maxX: 693, maxY: 333 },
  },
  {
    left: { minX: 461, minY: 369, maxX: 595, maxY: 502 },
    right: { minX: 656, minY: 370, maxX: 792, maxY: 505 },
    top: { minX: 560, minY: 198, maxX: 694, maxY: 333 },
  },
  {
    left: { minX: 461, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 657, minY: 369, maxX: 793, maxY: 505 },
    top: { minX: 561, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 461, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 657, minY: 369, maxX: 793, maxY: 504 },
    top: { minX: 561, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 460, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 560, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 460, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 504 },
    top: { minX: 559, minY: 197, maxX: 693, maxY: 332 },
  },
  {
    left: { minX: 459, minY: 368, maxX: 594, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 791, maxY: 503 },
    top: { minX: 559, minY: 197, maxX: 693, maxY: 332 },
  },
  {
    left: { minX: 459, minY: 367, maxX: 594, maxY: 500 },
    right: { minX: 656, minY: 368, maxX: 792, maxY: 503 },
    top: { minX: 559, minY: 197, maxX: 693, maxY: 332 },
  },
  {
    left: { minX: 460, minY: 368, maxX: 595, maxY: 500 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 504 },
    top: { minX: 560, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 460, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 504 },
    top: { minX: 560, minY: 197, maxX: 694, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 369, maxX: 595, maxY: 501 },
    right: { minX: 656, minY: 370, maxX: 791, maxY: 505 },
    top: { minX: 560, minY: 198, maxX: 694, maxY: 333 },
  },
  {
    left: { minX: 459, minY: 369, maxX: 594, maxY: 502 },
    right: { minX: 655, minY: 370, maxX: 790, maxY: 505 },
    top: { minX: 559, minY: 198, maxX: 693, maxY: 333 },
  },
  {
    left: { minX: 458, minY: 369, maxX: 593, maxY: 502 },
    right: { minX: 654, minY: 370, maxX: 790, maxY: 505 },
    top: { minX: 558, minY: 199, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 458, minY: 369, maxX: 593, maxY: 501 },
    right: { minX: 654, minY: 370, maxX: 790, maxY: 505 },
    top: { minX: 558, minY: 198, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 458, minY: 368, maxX: 593, maxY: 501 },
    right: { minX: 654, minY: 369, maxX: 790, maxY: 505 },
    top: { minX: 557, minY: 197, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 458, minY: 368, maxX: 592, maxY: 501 },
    right: { minX: 653, minY: 369, maxX: 789, maxY: 504 },
    top: { minX: 557, minY: 197, maxX: 691, maxY: 332 },
  },
  {
    left: { minX: 458, minY: 368, maxX: 592, maxY: 501 },
    right: { minX: 654, minY: 369, maxX: 789, maxY: 504 },
    top: { minX: 557, minY: 197, maxX: 691, maxY: 332 },
  },
  {
    left: { minX: 456, minY: 369, maxX: 591, maxY: 502 },
    right: { minX: 652, minY: 370, maxX: 787, maxY: 505 },
    top: { minX: 555, minY: 198, maxX: 690, maxY: 333 },
  },
  {
    left: { minX: 455, minY: 370, maxX: 590, maxY: 503 },
    right: { minX: 651, minY: 371, maxX: 786, maxY: 505 },
    top: { minX: 555, minY: 199, maxX: 688, maxY: 334 },
  },
  {
    left: { minX: 455, minY: 370, maxX: 590, maxY: 503 },
    right: { minX: 651, minY: 371, maxX: 786, maxY: 506 },
    top: { minX: 555, minY: 200, maxX: 688, maxY: 334 },
  },
  {
    left: { minX: 454, minY: 371, maxX: 589, maxY: 504 },
    right: { minX: 650, minY: 372, maxX: 785, maxY: 507 },
    top: { minX: 554, minY: 201, maxX: 687, maxY: 335 },
  },
  {
    left: { minX: 455, minY: 371, maxX: 589, maxY: 504 },
    right: { minX: 651, minY: 372, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 201, maxX: 688, maxY: 335 },
  },
  {
    left: { minX: 455, minY: 371, maxX: 589, maxY: 504 },
    right: { minX: 650, minY: 372, maxX: 785, maxY: 507 },
    top: { minX: 555, minY: 201, maxX: 688, maxY: 335 },
  },
  {
    left: { minX: 454, minY: 372, maxX: 589, maxY: 504 },
    right: { minX: 650, minY: 373, maxX: 785, maxY: 507 },
    top: { minX: 555, minY: 202, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 456, minY: 372, maxX: 590, maxY: 505 },
    right: { minX: 651, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 201, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 456, minY: 372, maxX: 590, maxY: 505 },
    right: { minX: 651, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 202, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 456, minY: 372, maxX: 590, maxY: 505 },
    right: { minX: 651, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 202, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 455, minY: 373, maxX: 589, maxY: 505 },
    right: { minX: 651, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 203, maxX: 688, maxY: 337 },
  },
  {
    left: { minX: 455, minY: 374, maxX: 589, maxY: 507 },
    right: { minX: 650, minY: 374, maxX: 785, maxY: 509 },
    top: { minX: 554, minY: 204, maxX: 687, maxY: 338 },
  },
  {
    left: { minX: 456, minY: 375, maxX: 590, maxY: 507 },
    right: { minX: 651, minY: 375, maxX: 786, maxY: 509 },
    top: { minX: 554, minY: 205, maxX: 687, maxY: 339 },
  },
  {
    left: { minX: 457, minY: 377, maxX: 591, maxY: 509 },
    right: { minX: 651, minY: 376, maxX: 786, maxY: 511 },
    top: { minX: 555, minY: 207, maxX: 687, maxY: 340 },
  },
  {
    left: { minX: 457, minY: 379, maxX: 591, maxY: 511 },
    right: { minX: 651, minY: 378, maxX: 785, maxY: 512 },
    top: { minX: 555, minY: 209, maxX: 687, maxY: 342 },
  },
  {
    left: { minX: 456, minY: 381, maxX: 590, maxY: 513 },
    right: { minX: 650, minY: 380, maxX: 785, maxY: 513 },
    top: { minX: 553, minY: 212, maxX: 686, maxY: 344 },
  },
  {
    left: { minX: 457, minY: 381, maxX: 590, maxY: 513 },
    right: { minX: 650, minY: 380, maxX: 784, maxY: 514 },
    top: { minX: 553, minY: 213, maxX: 685, maxY: 345 },
  },
  {
    left: { minX: 456, minY: 382, maxX: 589, maxY: 514 },
    right: { minX: 650, minY: 380, maxX: 784, maxY: 514 },
    top: { minX: 553, minY: 213, maxX: 685, maxY: 345 },
  },
  {
    left: { minX: 456, minY: 382, maxX: 589, maxY: 514 },
    right: { minX: 650, minY: 381, maxX: 784, maxY: 514 },
    top: { minX: 553, minY: 213, maxX: 684, maxY: 346 },
  },
  {
    left: { minX: 457, minY: 383, maxX: 590, maxY: 515 },
    right: { minX: 650, minY: 381, maxX: 784, maxY: 515 },
    top: { minX: 553, minY: 214, maxX: 684, maxY: 347 },
  },
  {
    left: { minX: 457, minY: 384, maxX: 590, maxY: 516 },
    right: { minX: 651, minY: 382, maxX: 784, maxY: 516 },
    top: { minX: 553, minY: 215, maxX: 685, maxY: 347 },
  },
  {
    left: { minX: 458, minY: 385, maxX: 591, maxY: 516 },
    right: { minX: 651, minY: 383, maxX: 785, maxY: 516 },
    top: { minX: 554, minY: 216, maxX: 686, maxY: 348 },
  },
  {
    left: { minX: 458, minY: 385, maxX: 591, maxY: 517 },
    right: { minX: 651, minY: 383, maxX: 785, maxY: 517 },
    top: { minX: 554, minY: 216, maxX: 685, maxY: 348 },
  },
  {
    left: { minX: 459, minY: 385, maxX: 592, maxY: 516 },
    right: { minX: 651, minY: 383, maxX: 786, maxY: 517 },
    top: { minX: 555, minY: 216, maxX: 686, maxY: 348 },
  },
  {
    left: { minX: 459, minY: 385, maxX: 592, maxY: 516 },
    right: { minX: 652, minY: 383, maxX: 786, maxY: 517 },
    top: { minX: 555, minY: 216, maxX: 686, maxY: 348 },
  },
  {
    left: { minX: 460, minY: 384, maxX: 592, maxY: 516 },
    right: { minX: 653, minY: 383, maxX: 786, maxY: 517 },
    top: { minX: 555, minY: 216, maxX: 687, maxY: 348 },
  },
  {
    left: { minX: 460, minY: 383, maxX: 592, maxY: 514 },
    right: { minX: 653, minY: 381, maxX: 787, maxY: 515 },
    top: { minX: 556, minY: 214, maxX: 688, maxY: 346 },
  },
  {
    left: { minX: 460, minY: 380, maxX: 593, maxY: 511 },
    right: { minX: 653, minY: 379, maxX: 788, maxY: 512 },
    top: { minX: 557, minY: 211, maxX: 688, maxY: 344 },
  },
  {
    left: { minX: 460, minY: 381, maxX: 593, maxY: 513 },
    right: { minX: 653, minY: 380, maxX: 787, maxY: 513 },
    top: { minX: 556, minY: 213, maxX: 687, maxY: 345 },
  },
  {
    left: { minX: 460, minY: 383, maxX: 592, maxY: 514 },
    right: { minX: 652, minY: 381, maxX: 786, maxY: 514 },
    top: { minX: 555, minY: 214, maxX: 687, maxY: 346 },
  },
  {
    left: { minX: 460, minY: 383, maxX: 592, maxY: 514 },
    right: { minX: 652, minY: 381, maxX: 786, maxY: 514 },
    top: { minX: 555, minY: 214, maxX: 686, maxY: 346 },
  },
  {
    left: { minX: 459, minY: 382, maxX: 592, maxY: 513 },
    right: { minX: 652, minY: 380, maxX: 786, maxY: 513 },
    top: { minX: 555, minY: 213, maxX: 686, maxY: 345 },
  },
  {
    left: { minX: 459, minY: 380, maxX: 592, maxY: 511 },
    right: { minX: 652, minY: 378, maxX: 786, maxY: 512 },
    top: { minX: 555, minY: 212, maxX: 686, maxY: 343 },
  },
  {
    left: { minX: 460, minY: 379, maxX: 592, maxY: 510 },
    right: { minX: 652, minY: 377, maxX: 786, maxY: 511 },
    top: { minX: 555, minY: 210, maxX: 686, maxY: 342 },
  },
  {
    left: { minX: 460, minY: 378, maxX: 592, maxY: 509 },
    right: { minX: 652, minY: 376, maxX: 786, maxY: 510 },
    top: { minX: 555, minY: 209, maxX: 686, maxY: 341 },
  },
  {
    left: { minX: 459, minY: 377, maxX: 592, maxY: 508 },
    right: { minX: 652, minY: 375, maxX: 785, maxY: 509 },
    top: { minX: 555, minY: 209, maxX: 686, maxY: 340 },
  },
  {
    left: { minX: 459, minY: 377, maxX: 591, maxY: 507 },
    right: { minX: 651, minY: 375, maxX: 784, maxY: 508 },
    top: { minX: 555, minY: 208, maxX: 686, maxY: 340 },
  },
  {
    left: { minX: 459, minY: 376, maxX: 591, maxY: 506 },
    right: { minX: 651, minY: 375, maxX: 783, maxY: 507 },
    top: { minX: 554, minY: 208, maxX: 685, maxY: 340 },
  },
  {
    left: { minX: 459, minY: 375, maxX: 591, maxY: 505 },
    right: { minX: 650, minY: 373, maxX: 783, maxY: 506 },
    top: { minX: 554, minY: 207, maxX: 685, maxY: 338 },
  },
  {
    left: { minX: 458, minY: 374, maxX: 590, maxY: 504 },
    right: { minX: 650, minY: 372, maxX: 782, maxY: 505 },
    top: { minX: 553, minY: 206, maxX: 684, maxY: 337 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 590, maxY: 503 },
    right: { minX: 649, minY: 371, maxX: 782, maxY: 504 },
    top: { minX: 553, minY: 205, maxX: 684, maxY: 337 },
  },
  {
    left: { minX: 458, minY: 372, maxX: 590, maxY: 501 },
    right: { minX: 649, minY: 371, maxX: 781, maxY: 502 },
    top: { minX: 553, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 590, maxY: 501 },
    right: { minX: 649, minY: 371, maxX: 781, maxY: 502 },
    top: { minX: 553, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 590, maxY: 501 },
    right: { minX: 650, minY: 371, maxX: 782, maxY: 502 },
    top: { minX: 554, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 590, maxY: 501 },
    right: { minX: 649, minY: 371, maxX: 781, maxY: 502 },
    top: { minX: 553, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 590, maxY: 499 },
    right: { minX: 649, minY: 369, maxX: 781, maxY: 501 },
    top: { minX: 555, minY: 205, maxX: 684, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 590, maxY: 499 },
    right: { minX: 649, minY: 369, maxX: 780, maxY: 501 },
    top: { minX: 554, minY: 205, maxX: 684, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 590, maxY: 499 },
    right: { minX: 648, minY: 370, maxX: 780, maxY: 501 },
    top: { minX: 553, minY: 205, maxX: 683, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 590, maxY: 498 },
    right: { minX: 649, minY: 369, maxX: 779, maxY: 499 },
    top: { minX: 553, minY: 205, maxX: 683, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 590, maxY: 498 },
    right: { minX: 648, minY: 369, maxX: 780, maxY: 499 },
    top: { minX: 554, minY: 205, maxX: 683, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 590, maxY: 498 },
    right: { minX: 648, minY: 369, maxX: 779, maxY: 500 },
    top: { minX: 554, minY: 205, maxX: 682, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 589, maxY: 498 },
    right: { minX: 647, minY: 369, maxX: 778, maxY: 499 },
    top: { minX: 553, minY: 205, maxX: 682, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 589, maxY: 498 },
    right: { minX: 647, minY: 369, maxX: 777, maxY: 499 },
    top: { minX: 553, minY: 206, maxX: 681, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 588, maxY: 497 },
    right: { minX: 646, minY: 369, maxX: 776, maxY: 498 },
    top: { minX: 552, minY: 206, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 588, maxY: 497 },
    right: { minX: 646, minY: 368, maxX: 776, maxY: 497 },
    top: { minX: 551, minY: 205, maxX: 680, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 369, maxX: 588, maxY: 496 },
    right: { minX: 645, minY: 368, maxX: 776, maxY: 497 },
    top: { minX: 551, minY: 205, maxX: 680, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 368, maxX: 587, maxY: 495 },
    right: { minX: 645, minY: 366, maxX: 775, maxY: 495 },
    top: { minX: 551, minY: 203, maxX: 679, maxY: 333 },
  },
  {
    left: { minX: 459, minY: 369, maxX: 587, maxY: 496 },
    right: { minX: 645, minY: 367, maxX: 774, maxY: 496 },
    top: { minX: 551, minY: 205, maxX: 679, maxY: 333 },
  },
  {
    left: { minX: 459, minY: 369, maxX: 587, maxY: 495 },
    right: { minX: 645, minY: 367, maxX: 774, maxY: 496 },
    top: { minX: 551, minY: 205, maxX: 678, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 587, maxY: 495 },
    right: { minX: 645, minY: 368, maxX: 774, maxY: 497 },
    top: { minX: 551, minY: 205, maxX: 678, maxY: 334 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 587, maxY: 496 },
    right: { minX: 645, minY: 369, maxX: 774, maxY: 497 },
    top: { minX: 551, minY: 207, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 587, maxY: 496 },
    right: { minX: 645, minY: 369, maxX: 774, maxY: 497 },
    top: { minX: 551, minY: 207, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 587, maxY: 497 },
    right: { minX: 645, minY: 369, maxX: 773, maxY: 498 },
    top: { minX: 551, minY: 209, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 372, maxX: 587, maxY: 497 },
    right: { minX: 644, minY: 370, maxX: 773, maxY: 498 },
    top: { minX: 551, minY: 209, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 460, minY: 372, maxX: 587, maxY: 497 },
    right: { minX: 644, minY: 370, maxX: 773, maxY: 498 },
    top: { minX: 551, minY: 209, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 587, maxY: 496 },
    right: { minX: 644, minY: 369, maxX: 772, maxY: 497 },
    top: { minX: 551, minY: 209, maxX: 677, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 586, maxY: 495 },
    right: { minX: 643, minY: 368, maxX: 771, maxY: 496 },
    top: { minX: 550, minY: 207, maxX: 676, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 586, maxY: 495 },
    right: { minX: 643, minY: 369, maxX: 771, maxY: 496 },
    top: { minX: 550, minY: 208, maxX: 676, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 586, maxY: 495 },
    right: { minX: 643, minY: 369, maxX: 771, maxY: 496 },
    top: { minX: 550, minY: 209, maxX: 676, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 371, maxX: 586, maxY: 496 },
    right: { minX: 642, minY: 369, maxX: 770, maxY: 496 },
    top: { minX: 549, minY: 209, maxX: 676, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 586, maxY: 495 },
    right: { minX: 643, minY: 369, maxX: 770, maxY: 495 },
    top: { minX: 550, minY: 209, maxX: 676, maxY: 335 },
  },
  {
    left: { minX: 462, minY: 370, maxX: 588, maxY: 494 },
    right: { minX: 644, minY: 368, maxX: 772, maxY: 495 },
    top: { minX: 552, minY: 209, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 463, minY: 370, maxX: 589, maxY: 493 },
    right: { minX: 645, minY: 368, maxX: 773, maxY: 495 },
    top: { minX: 553, minY: 208, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 464, minY: 371, maxX: 589, maxY: 495 },
    right: { minX: 646, minY: 369, maxX: 773, maxY: 495 },
    top: { minX: 553, minY: 210, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 373, maxX: 589, maxY: 496 },
    right: { minX: 646, minY: 370, maxX: 773, maxY: 496 },
    top: { minX: 553, minY: 211, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 589, maxY: 496 },
    right: { minX: 646, minY: 370, maxX: 773, maxY: 497 },
    top: { minX: 553, minY: 212, maxX: 678, maxY: 338 },
  },
  {
    left: { minX: 466, minY: 373, maxX: 591, maxY: 496 },
    right: { minX: 647, minY: 370, maxX: 774, maxY: 497 },
    top: { minX: 554, minY: 212, maxX: 679, maxY: 338 },
  },
  {
    left: { minX: 467, minY: 373, maxX: 591, maxY: 496 },
    right: { minX: 647, minY: 370, maxX: 774, maxY: 497 },
    top: { minX: 555, minY: 212, maxX: 680, maxY: 337 },
  },
  {
    left: { minX: 468, minY: 372, maxX: 593, maxY: 495 },
    right: { minX: 649, minY: 370, maxX: 776, maxY: 496 },
    top: { minX: 557, minY: 212, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 469, minY: 373, maxX: 593, maxY: 495 },
    right: { minX: 649, minY: 371, maxX: 776, maxY: 497 },
    top: { minX: 557, minY: 213, maxX: 682, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 594, maxY: 495 },
    right: { minX: 650, minY: 371, maxX: 776, maxY: 497 },
    top: { minX: 557, minY: 213, maxX: 682, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 594, maxY: 495 },
    right: { minX: 649, minY: 371, maxX: 776, maxY: 497 },
    top: { minX: 558, minY: 213, maxX: 682, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 593, maxY: 495 },
    right: { minX: 649, minY: 371, maxX: 775, maxY: 496 },
    top: { minX: 557, minY: 213, maxX: 682, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 593, maxY: 495 },
    right: { minX: 649, minY: 371, maxX: 775, maxY: 496 },
    top: { minX: 557, minY: 214, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 593, maxY: 494 },
    right: { minX: 649, minY: 370, maxX: 774, maxY: 495 },
    top: { minX: 557, minY: 213, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 593, maxY: 494 },
    right: { minX: 648, minY: 370, maxX: 774, maxY: 495 },
    top: { minX: 557, minY: 214, maxX: 680, maxY: 338 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 592, maxY: 493 },
    right: { minX: 647, minY: 369, maxX: 773, maxY: 493 },
    top: { minX: 557, minY: 213, maxX: 680, maxY: 337 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 592, maxY: 492 },
    right: { minX: 647, minY: 368, maxX: 772, maxY: 493 },
    top: { minX: 555, minY: 212, maxX: 679, maxY: 336 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 592, maxY: 492 },
    right: { minX: 647, minY: 369, maxX: 772, maxY: 493 },
    top: { minX: 555, minY: 213, maxX: 679, maxY: 336 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 592, maxY: 492 },
    right: { minX: 647, minY: 368, maxX: 772, maxY: 493 },
    top: { minX: 555, minY: 213, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 370, maxX: 592, maxY: 491 },
    right: { minX: 647, minY: 368, maxX: 772, maxY: 492 },
    top: { minX: 556, minY: 212, maxX: 679, maxY: 335 },
  },
  {
    left: { minX: 470, minY: 369, maxX: 593, maxY: 490 },
    right: { minX: 647, minY: 367, maxX: 772, maxY: 491 },
    top: { minX: 557, minY: 211, maxX: 679, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 369, maxX: 593, maxY: 490 },
    right: { minX: 648, minY: 367, maxX: 773, maxY: 491 },
    top: { minX: 558, minY: 211, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 370, maxX: 594, maxY: 490 },
    right: { minX: 648, minY: 368, maxX: 773, maxY: 492 },
    top: { minX: 558, minY: 213, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 473, minY: 369, maxX: 595, maxY: 489 },
    right: { minX: 649, minY: 368, maxX: 773, maxY: 491 },
    top: { minX: 559, minY: 212, maxX: 682, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 371, maxX: 594, maxY: 491 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 493 },
    top: { minX: 558, minY: 214, maxX: 680, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 371, maxX: 593, maxY: 490 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 492 },
    top: { minX: 558, minY: 214, maxX: 680, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 370, maxX: 593, maxY: 489 },
    right: { minX: 647, minY: 368, maxX: 772, maxY: 491 },
    top: { minX: 558, minY: 213, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 370, maxX: 592, maxY: 490 },
    right: { minX: 646, minY: 368, maxX: 770, maxY: 491 },
    top: { minX: 557, minY: 214, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 369, maxX: 592, maxY: 488 },
    right: { minX: 646, minY: 367, maxX: 770, maxY: 490 },
    top: { minX: 557, minY: 213, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 369, maxX: 592, maxY: 488 },
    right: { minX: 645, minY: 367, maxX: 769, maxY: 490 },
    top: { minX: 556, minY: 213, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 369, maxX: 591, maxY: 488 },
    right: { minX: 645, minY: 367, maxX: 769, maxY: 489 },
    top: { minX: 556, minY: 213, maxX: 677, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 369, maxX: 591, maxY: 487 },
    right: { minX: 645, minY: 366, maxX: 768, maxY: 489 },
    top: { minX: 556, minY: 213, maxX: 677, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 366, maxX: 591, maxY: 485 },
    right: { minX: 645, minY: 363, maxX: 768, maxY: 486 },
    top: { minX: 555, minY: 209, maxX: 677, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 365, maxX: 591, maxY: 484 },
    right: { minX: 645, minY: 363, maxX: 768, maxY: 485 },
    top: { minX: 555, minY: 209, maxX: 676, maxY: 331 },
  },
  {
    left: { minX: 471, minY: 365, maxX: 591, maxY: 484 },
    right: { minX: 644, minY: 363, maxX: 767, maxY: 485 },
    top: { minX: 555, minY: 209, maxX: 676, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 366, maxX: 590, maxY: 484 },
    right: { minX: 643, minY: 363, maxX: 766, maxY: 485 },
    top: { minX: 553, minY: 209, maxX: 674, maxY: 332 },
  },
  {
    left: { minX: 470, minY: 366, maxX: 589, maxY: 485 },
    right: { minX: 642, minY: 363, maxX: 765, maxY: 485 },
    top: { minX: 553, minY: 211, maxX: 674, maxY: 332 },
  },
  {
    left: { minX: 469, minY: 366, maxX: 589, maxY: 484 },
    right: { minX: 642, minY: 363, maxX: 765, maxY: 485 },
    top: { minX: 553, minY: 211, maxX: 674, maxY: 332 },
  },
  {
    left: { minX: 469, minY: 366, maxX: 589, maxY: 485 },
    right: { minX: 642, minY: 363, maxX: 765, maxY: 485 },
    top: { minX: 553, minY: 211, maxX: 674, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 367, maxX: 590, maxY: 485 },
    right: { minX: 643, minY: 364, maxX: 766, maxY: 485 },
    top: { minX: 554, minY: 211, maxX: 674, maxY: 333 },
  },
  {
    left: { minX: 472, minY: 367, maxX: 591, maxY: 485 },
    right: { minX: 644, minY: 364, maxX: 766, maxY: 486 },
    top: { minX: 555, minY: 212, maxX: 675, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 367, maxX: 593, maxY: 484 },
    right: { minX: 645, minY: 364, maxX: 768, maxY: 485 },
    top: { minX: 557, minY: 212, maxX: 676, maxY: 333 },
  },
  {
    left: { minX: 475, minY: 368, maxX: 594, maxY: 485 },
    right: { minX: 647, minY: 365, maxX: 769, maxY: 486 },
    top: { minX: 558, minY: 213, maxX: 678, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 368, maxX: 595, maxY: 485 },
    right: { minX: 647, minY: 365, maxX: 770, maxY: 486 },
    top: { minX: 559, minY: 213, maxX: 679, maxY: 334 },
  },
  {
    left: { minX: 478, minY: 367, maxX: 597, maxY: 484 },
    right: { minX: 649, minY: 364, maxX: 771, maxY: 485 },
    top: { minX: 561, minY: 212, maxX: 680, maxY: 333 },
  },
  {
    left: { minX: 478, minY: 366, maxX: 597, maxY: 483 },
    right: { minX: 649, minY: 363, maxX: 772, maxY: 484 },
    top: { minX: 561, minY: 211, maxX: 680, maxY: 332 },
  },
  {
    left: { minX: 479, minY: 365, maxX: 597, maxY: 482 },
    right: { minX: 650, minY: 362, maxX: 772, maxY: 483 },
    top: { minX: 561, minY: 210, maxX: 681, maxY: 331 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 598, maxY: 480 },
    right: { minX: 651, minY: 361, maxX: 773, maxY: 483 },
    top: { minX: 563, minY: 209, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 599, maxY: 481 },
    right: { minX: 651, minY: 361, maxX: 773, maxY: 483 },
    top: { minX: 563, minY: 209, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 482, minY: 366, maxX: 601, maxY: 482 },
    right: { minX: 653, minY: 363, maxX: 775, maxY: 484 },
    top: { minX: 565, minY: 211, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 483, minY: 366, maxX: 601, maxY: 482 },
    right: { minX: 653, minY: 363, maxX: 776, maxY: 484 },
    top: { minX: 565, minY: 211, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 484, minY: 366, maxX: 602, maxY: 482 },
    right: { minX: 654, minY: 363, maxX: 776, maxY: 484 },
    top: { minX: 566, minY: 212, maxX: 685, maxY: 332 },
  },
  {
    left: { minX: 486, minY: 366, maxX: 604, maxY: 482 },
    right: { minX: 656, minY: 363, maxX: 778, maxY: 485 },
    top: { minX: 568, minY: 212, maxX: 687, maxY: 332 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 605, maxY: 483 },
    right: { minX: 657, minY: 364, maxX: 780, maxY: 485 },
    top: { minX: 569, minY: 213, maxX: 688, maxY: 333 },
  },
  {
    left: { minX: 489, minY: 368, maxX: 606, maxY: 484 },
    right: { minX: 658, minY: 365, maxX: 780, maxY: 486 },
    top: { minX: 571, minY: 214, maxX: 690, maxY: 334 },
  },
  {
    left: { minX: 490, minY: 368, maxX: 607, maxY: 484 },
    right: { minX: 659, minY: 365, maxX: 781, maxY: 487 },
    top: { minX: 571, minY: 214, maxX: 690, maxY: 334 },
  },
  {
    left: { minX: 490, minY: 367, maxX: 607, maxY: 483 },
    right: { minX: 659, minY: 365, maxX: 781, maxY: 486 },
    top: { minX: 572, minY: 214, maxX: 690, maxY: 334 },
  },
  {
    left: { minX: 490, minY: 368, maxX: 607, maxY: 484 },
    right: { minX: 659, minY: 365, maxX: 781, maxY: 487 },
    top: { minX: 572, minY: 215, maxX: 691, maxY: 335 },
  },
  {
    left: { minX: 490, minY: 368, maxX: 607, maxY: 484 },
    right: { minX: 659, minY: 366, maxX: 780, maxY: 487 },
    top: { minX: 572, minY: 215, maxX: 690, maxY: 335 },
  },
  {
    left: { minX: 490, minY: 369, maxX: 606, maxY: 484 },
    right: { minX: 658, minY: 367, maxX: 780, maxY: 487 },
    top: { minX: 571, minY: 216, maxX: 690, maxY: 336 },
  },
  {
    left: { minX: 489, minY: 369, maxX: 606, maxY: 484 },
    right: { minX: 658, minY: 367, maxX: 779, maxY: 487 },
    top: { minX: 571, minY: 217, maxX: 689, maxY: 336 },
  },
  {
    left: { minX: 489, minY: 369, maxX: 605, maxY: 484 },
    right: { minX: 657, minY: 367, maxX: 779, maxY: 487 },
    top: { minX: 571, minY: 217, maxX: 689, maxY: 336 },
  },
  {
    left: { minX: 489, minY: 369, maxX: 605, maxY: 484 },
    right: { minX: 657, minY: 367, maxX: 778, maxY: 487 },
    top: { minX: 571, minY: 217, maxX: 689, maxY: 335 },
  },
  {
    left: { minX: 489, minY: 368, maxX: 606, maxY: 483 },
    right: { minX: 657, minY: 366, maxX: 779, maxY: 486 },
    top: { minX: 571, minY: 216, maxX: 689, maxY: 335 },
  },
  {
    left: { minX: 489, minY: 369, maxX: 605, maxY: 484 },
    right: { minX: 657, minY: 367, maxX: 778, maxY: 487 },
    top: { minX: 571, minY: 217, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 488, minY: 369, maxX: 605, maxY: 484 },
    right: { minX: 656, minY: 367, maxX: 777, maxY: 487 },
    top: { minX: 569, minY: 217, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 488, minY: 369, maxX: 605, maxY: 484 },
    right: { minX: 656, minY: 366, maxX: 777, maxY: 486 },
    top: { minX: 569, minY: 217, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 488, minY: 368, maxX: 604, maxY: 483 },
    right: { minX: 656, minY: 365, maxX: 776, maxY: 485 },
    top: { minX: 569, minY: 216, maxX: 687, maxY: 335 },
  },
  {
    left: { minX: 488, minY: 368, maxX: 604, maxY: 483 },
    right: { minX: 656, minY: 365, maxX: 776, maxY: 485 },
    top: { minX: 569, minY: 215, maxX: 687, maxY: 334 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 604, maxY: 483 },
    right: { minX: 656, minY: 365, maxX: 776, maxY: 485 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 335 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 603, maxY: 482 },
    right: { minX: 655, minY: 365, maxX: 776, maxY: 485 },
    top: { minX: 568, minY: 215, maxX: 686, maxY: 334 },
  },
  {
    left: { minX: 487, minY: 366, maxX: 603, maxY: 481 },
    right: { minX: 655, minY: 364, maxX: 775, maxY: 483 },
    top: { minX: 568, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 603, maxY: 482 },
    right: { minX: 654, minY: 364, maxX: 775, maxY: 484 },
    top: { minX: 568, minY: 215, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 603, maxY: 481 },
    right: { minX: 654, minY: 364, maxX: 775, maxY: 484 },
    top: { minX: 568, minY: 215, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 363, maxX: 776, maxY: 483 },
    top: { minX: 569, minY: 214, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 489, minY: 364, maxX: 605, maxY: 479 },
    right: { minX: 656, minY: 362, maxX: 776, maxY: 482 },
    top: { minX: 570, minY: 213, maxX: 688, maxY: 331 },
  },
  {
    left: { minX: 489, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 364, maxX: 776, maxY: 483 },
    top: { minX: 569, minY: 214, maxX: 687, maxY: 333 },
  },
  {
    left: { minX: 489, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 364, maxX: 775, maxY: 483 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 489, minY: 365, maxX: 604, maxY: 479 },
    right: { minX: 655, minY: 363, maxX: 775, maxY: 482 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 332 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 363, maxX: 775, maxY: 483 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 603, maxY: 480 },
    right: { minX: 654, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 603, maxY: 480 },
    right: { minX: 654, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 568, minY: 216, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 603, maxY: 481 },
    right: { minX: 654, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 217, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 603, maxY: 480 },
    right: { minX: 654, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 216, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 367, maxX: 604, maxY: 481 },
    right: { minX: 654, minY: 365, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 217, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 367, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 217, maxX: 686, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 365, maxX: 604, maxY: 479 },
    right: { minX: 655, minY: 363, maxX: 774, maxY: 482 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 332 },
  },
  {
    left: { minX: 490, minY: 365, maxX: 605, maxY: 478 },
    right: { minX: 655, minY: 363, maxX: 775, maxY: 481 },
    top: { minX: 570, minY: 215, maxX: 686, maxY: 332 },
  },
  {
    left: { minX: 490, minY: 365, maxX: 605, maxY: 479 },
    right: { minX: 655, minY: 363, maxX: 775, maxY: 482 },
    top: { minX: 571, minY: 216, maxX: 687, maxY: 333 },
  },
  {
    left: { minX: 491, minY: 364, maxX: 606, maxY: 478 },
    right: { minX: 656, minY: 363, maxX: 776, maxY: 481 },
    top: { minX: 572, minY: 215, maxX: 688, maxY: 332 },
  },
  {
    left: { minX: 491, minY: 365, maxX: 606, maxY: 478 },
    right: { minX: 656, minY: 363, maxX: 776, maxY: 481 },
    top: { minX: 572, minY: 215, maxX: 688, maxY: 332 },
  },
  {
    left: { minX: 491, minY: 365, maxX: 606, maxY: 478 },
    right: { minX: 656, minY: 364, maxX: 776, maxY: 482 },
    top: { minX: 571, minY: 216, maxX: 688, maxY: 333 },
  },
  {
    left: { minX: 492, minY: 366, maxX: 606, maxY: 479 },
    right: { minX: 657, minY: 365, maxX: 776, maxY: 483 },
    top: { minX: 572, minY: 217, maxX: 688, maxY: 334 },
  },
  {
    left: { minX: 491, minY: 367, maxX: 605, maxY: 479 },
    right: { minX: 655, minY: 365, maxX: 774, maxY: 483 },
    top: { minX: 571, minY: 217, maxX: 688, maxY: 335 },
  },
  {
    left: { minX: 491, minY: 367, maxX: 605, maxY: 480 },
    right: { minX: 655, minY: 365, maxX: 774, maxY: 483 },
    top: { minX: 571, minY: 218, maxX: 688, maxY: 335 },
  },
  {
    left: { minX: 489, minY: 367, maxX: 603, maxY: 480 },
    right: { minX: 653, minY: 365, maxX: 772, maxY: 483 },
    top: { minX: 569, minY: 218, maxX: 684, maxY: 335 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 603, maxY: 479 },
    right: { minX: 653, minY: 363, maxX: 772, maxY: 481 },
    top: { minX: 568, minY: 216, maxX: 684, maxY: 333 },
  },
  {
    left: { minX: 488, minY: 365, maxX: 603, maxY: 478 },
    right: { minX: 653, minY: 363, maxX: 772, maxY: 481 },
    top: { minX: 568, minY: 215, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 602, maxY: 476 },
    right: { minX: 652, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 567, minY: 213, maxX: 683, maxY: 330 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 602, maxY: 476 },
    right: { minX: 652, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 567, minY: 213, maxX: 684, maxY: 330 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 602, maxY: 476 },
    right: { minX: 652, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 567, minY: 213, maxX: 684, maxY: 330 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 602, maxY: 476 },
    right: { minX: 652, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 567, minY: 213, maxX: 683, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 600, maxY: 476 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 566, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 484, minY: 363, maxX: 599, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 769, maxY: 479 },
    top: { minX: 565, minY: 213, maxX: 681, maxY: 330 },
  },
  {
    left: { minX: 484, minY: 362, maxX: 599, maxY: 476 },
    right: { minX: 649, minY: 360, maxX: 768, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 681, maxY: 330 },
  },
  {
    left: { minX: 484, minY: 362, maxX: 599, maxY: 476 },
    right: { minX: 649, minY: 360, maxX: 769, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 681, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 600, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 769, maxY: 479 },
    top: { minX: 565, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 600, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 601, maxY: 476 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 566, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 601, maxY: 476 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 480 },
    top: { minX: 567, minY: 213, maxX: 683, maxY: 331 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 600, maxY: 476 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 566, minY: 213, maxX: 682, maxY: 331 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 600, maxY: 476 },
    right: { minX: 651, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 566, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 600, maxY: 475 },
    right: { minX: 650, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 484, minY: 362, maxX: 599, maxY: 475 },
    right: { minX: 650, minY: 360, maxX: 769, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 484, minY: 361, maxX: 599, maxY: 475 },
    right: { minX: 649, minY: 360, maxX: 769, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 484, minY: 361, maxX: 599, maxY: 475 },
    right: { minX: 649, minY: 360, maxX: 768, maxY: 479 },
    top: { minX: 565, minY: 211, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 483, minY: 361, maxX: 598, maxY: 474 },
    right: { minX: 649, minY: 359, maxX: 768, maxY: 478 },
    top: { minX: 565, minY: 211, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 483, minY: 361, maxX: 598, maxY: 474 },
    right: { minX: 649, minY: 359, maxX: 768, maxY: 478 },
    top: { minX: 565, minY: 210, maxX: 682, maxY: 328 },
  },
  {
    left: { minX: 484, minY: 360, maxX: 599, maxY: 473 },
    right: { minX: 649, minY: 359, maxX: 769, maxY: 477 },
    top: { minX: 565, minY: 209, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 484, minY: 359, maxX: 600, maxY: 472 },
    right: { minX: 650, minY: 357, maxX: 770, maxY: 476 },
    top: { minX: 566, minY: 208, maxX: 683, maxY: 326 },
  },
  {
    left: { minX: 485, minY: 358, maxX: 600, maxY: 472 },
    right: { minX: 651, minY: 357, maxX: 771, maxY: 476 },
    top: { minX: 566, minY: 207, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 486, minY: 358, maxX: 601, maxY: 472 },
    right: { minX: 652, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 567, minY: 207, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 486, minY: 358, maxX: 602, maxY: 472 },
    right: { minX: 653, minY: 357, maxX: 773, maxY: 475 },
    top: { minX: 567, minY: 207, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 489, minY: 357, maxX: 604, maxY: 471 },
    right: { minX: 655, minY: 357, maxX: 775, maxY: 475 },
    top: { minX: 571, minY: 207, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 490, minY: 357, maxX: 605, maxY: 471 },
    right: { minX: 656, minY: 357, maxX: 776, maxY: 475 },
    top: { minX: 571, minY: 207, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 491, minY: 358, maxX: 606, maxY: 472 },
    right: { minX: 657, minY: 357, maxX: 777, maxY: 476 },
    top: { minX: 573, minY: 207, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 492, minY: 359, maxX: 607, maxY: 473 },
    right: { minX: 658, minY: 358, maxX: 778, maxY: 477 },
    top: { minX: 573, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 493, minY: 359, maxX: 608, maxY: 473 },
    right: { minX: 659, minY: 359, maxX: 780, maxY: 478 },
    top: { minX: 575, minY: 209, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 494, minY: 360, maxX: 609, maxY: 474 },
    right: { minX: 660, minY: 359, maxX: 780, maxY: 478 },
    top: { minX: 576, minY: 209, maxX: 693, maxY: 328 },
  },
  {
    left: { minX: 494, minY: 360, maxX: 609, maxY: 474 },
    right: { minX: 661, minY: 359, maxX: 781, maxY: 478 },
    top: { minX: 576, minY: 209, maxX: 694, maxY: 328 },
  },
  {
    left: { minX: 494, minY: 359, maxX: 610, maxY: 474 },
    right: { minX: 662, minY: 359, maxX: 782, maxY: 478 },
    top: { minX: 577, minY: 209, maxX: 694, maxY: 327 },
  },
  {
    left: { minX: 495, minY: 359, maxX: 610, maxY: 473 },
    right: { minX: 662, minY: 359, maxX: 782, maxY: 478 },
    top: { minX: 577, minY: 208, maxX: 695, maxY: 327 },
  },
  {
    left: { minX: 494, minY: 359, maxX: 610, maxY: 473 },
    right: { minX: 661, minY: 358, maxX: 782, maxY: 477 },
    top: { minX: 577, minY: 207, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 358, maxX: 610, maxY: 473 },
    right: { minX: 661, minY: 358, maxX: 782, maxY: 477 },
    top: { minX: 577, minY: 207, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 492, minY: 357, maxX: 609, maxY: 472 },
    right: { minX: 660, minY: 357, maxX: 781, maxY: 476 },
    top: { minX: 575, minY: 205, maxX: 694, maxY: 325 },
  },
  {
    left: { minX: 492, minY: 356, maxX: 608, maxY: 471 },
    right: { minX: 660, minY: 356, maxX: 781, maxY: 476 },
    top: { minX: 575, minY: 205, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 491, minY: 357, maxX: 608, maxY: 472 },
    right: { minX: 660, minY: 356, maxX: 780, maxY: 476 },
    top: { minX: 575, minY: 205, maxX: 693, maxY: 324 },
  },
  {
    left: { minX: 490, minY: 357, maxX: 607, maxY: 472 },
    right: { minX: 659, minY: 356, maxX: 780, maxY: 476 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 490, minY: 354, maxX: 607, maxY: 469 },
    right: { minX: 659, minY: 353, maxX: 780, maxY: 473 },
    top: { minX: 573, minY: 201, maxX: 692, maxY: 321 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 607, maxY: 469 },
    right: { minX: 659, minY: 353, maxX: 781, maxY: 473 },
    top: { minX: 573, minY: 200, maxX: 692, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 607, maxY: 469 },
    right: { minX: 659, minY: 352, maxX: 781, maxY: 472 },
    top: { minX: 573, minY: 199, maxX: 692, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 606, maxY: 468 },
    right: { minX: 659, minY: 352, maxX: 780, maxY: 472 },
    top: { minX: 572, minY: 199, maxX: 692, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 351, maxX: 609, maxY: 467 },
    right: { minX: 661, minY: 351, maxX: 783, maxY: 471 },
    top: { minX: 575, minY: 197, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 610, maxY: 467 },
    right: { minX: 662, minY: 351, maxX: 784, maxY: 471 },
    top: { minX: 576, minY: 197, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 493, minY: 353, maxX: 611, maxY: 469 },
    right: { minX: 664, minY: 352, maxX: 786, maxY: 473 },
    top: { minX: 577, minY: 199, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 494, minY: 356, maxX: 612, maxY: 472 },
    right: { minX: 665, minY: 355, maxX: 787, maxY: 475 },
    top: { minX: 578, minY: 202, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 496, minY: 358, maxX: 614, maxY: 475 },
    right: { minX: 667, minY: 357, maxX: 788, maxY: 478 },
    top: { minX: 580, minY: 205, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 359, maxX: 613, maxY: 476 },
    right: { minX: 665, minY: 359, maxX: 787, maxY: 479 },
    top: { minX: 579, minY: 206, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 494, minY: 358, maxX: 612, maxY: 475 },
    right: { minX: 665, minY: 357, maxX: 788, maxY: 478 },
    top: { minX: 579, minY: 205, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 493, minY: 357, maxX: 611, maxY: 474 },
    right: { minX: 664, minY: 356, maxX: 787, maxY: 477 },
    top: { minX: 577, minY: 203, maxX: 698, maxY: 324 },
  },
  {
    left: { minX: 491, minY: 356, maxX: 610, maxY: 473 },
    right: { minX: 663, minY: 355, maxX: 785, maxY: 476 },
    top: { minX: 576, minY: 201, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 490, minY: 355, maxX: 609, maxY: 472 },
    right: { minX: 662, minY: 354, maxX: 785, maxY: 475 },
    top: { minX: 575, minY: 200, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 355, maxX: 608, maxY: 472 },
    right: { minX: 661, minY: 354, maxX: 784, maxY: 475 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 607, maxY: 472 },
    right: { minX: 661, minY: 354, maxX: 783, maxY: 475 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 607, maxY: 471 },
    right: { minX: 660, minY: 353, maxX: 783, maxY: 475 },
    top: { minX: 573, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 606, maxY: 471 },
    right: { minX: 659, minY: 353, maxX: 782, maxY: 475 },
    top: { minX: 572, minY: 199, maxX: 693, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 605, maxY: 471 },
    right: { minX: 659, minY: 353, maxX: 782, maxY: 474 },
    top: { minX: 572, minY: 198, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 352, maxX: 604, maxY: 470 },
    right: { minX: 658, minY: 352, maxX: 781, maxY: 473 },
    top: { minX: 570, minY: 197, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 481, minY: 351, maxX: 601, maxY: 470 },
    right: { minX: 656, minY: 351, maxX: 778, maxY: 472 },
    top: { minX: 568, minY: 195, maxX: 689, maxY: 318 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 599, maxY: 470 },
    right: { minX: 654, minY: 351, maxX: 776, maxY: 472 },
    top: { minX: 565, minY: 195, maxX: 687, maxY: 318 },
  },
  {
    left: { minX: 476, minY: 351, maxX: 597, maxY: 470 },
    right: { minX: 652, minY: 350, maxX: 774, maxY: 472 },
    top: { minX: 563, minY: 195, maxX: 684, maxY: 318 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 596, maxY: 469 },
    right: { minX: 650, minY: 350, maxX: 773, maxY: 471 },
    top: { minX: 561, minY: 194, maxX: 683, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 596, maxY: 470 },
    right: { minX: 650, minY: 350, maxX: 773, maxY: 472 },
    top: { minX: 561, minY: 195, maxX: 683, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 595, maxY: 470 },
    right: { minX: 649, minY: 350, maxX: 772, maxY: 471 },
    top: { minX: 560, minY: 194, maxX: 682, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 594, maxY: 469 },
    right: { minX: 649, minY: 349, maxX: 771, maxY: 471 },
    top: { minX: 560, minY: 193, maxX: 682, maxY: 317 },
  },
  {
    left: { minX: 472, minY: 349, maxX: 593, maxY: 469 },
    right: { minX: 648, minY: 349, maxX: 771, maxY: 471 },
    top: { minX: 559, minY: 192, maxX: 681, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 348, maxX: 593, maxY: 468 },
    right: { minX: 647, minY: 347, maxX: 771, maxY: 469 },
    top: { minX: 558, minY: 191, maxX: 680, maxY: 314 },
  },
  {
    left: { minX: 471, minY: 349, maxX: 593, maxY: 468 },
    right: { minX: 647, minY: 347, maxX: 771, maxY: 469 },
    top: { minX: 558, minY: 191, maxX: 680, maxY: 315 },
  },
  {
    left: { minX: 472, minY: 350, maxX: 593, maxY: 469 },
    right: { minX: 648, minY: 348, maxX: 771, maxY: 470 },
    top: { minX: 558, minY: 192, maxX: 681, maxY: 316 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 596, maxY: 470 },
    right: { minX: 651, minY: 349, maxX: 774, maxY: 472 },
    top: { minX: 561, minY: 193, maxX: 684, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 596, maxY: 470 },
    right: { minX: 652, minY: 349, maxX: 775, maxY: 471 },
    top: { minX: 561, minY: 193, maxX: 684, maxY: 317 },
  },
  {
    left: { minX: 476, minY: 350, maxX: 598, maxY: 470 },
    right: { minX: 653, minY: 349, maxX: 776, maxY: 471 },
    top: { minX: 563, minY: 193, maxX: 686, maxY: 316 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 597, maxY: 470 },
    right: { minX: 652, minY: 349, maxX: 776, maxY: 472 },
    top: { minX: 563, minY: 192, maxX: 686, maxY: 316 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 597, maxY: 470 },
    right: { minX: 652, minY: 349, maxX: 776, maxY: 472 },
    top: { minX: 562, minY: 192, maxX: 685, maxY: 316 },
  },
  {
    left: { minX: 472, minY: 350, maxX: 594, maxY: 471 },
    right: { minX: 650, minY: 349, maxX: 774, maxY: 471 },
    top: { minX: 560, minY: 192, maxX: 682, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 351, maxX: 594, maxY: 472 },
    right: { minX: 650, minY: 350, maxX: 773, maxY: 473 },
    top: { minX: 559, minY: 193, maxX: 682, maxY: 317 },
  },
  {
    left: { minX: 471, minY: 352, maxX: 593, maxY: 472 },
    right: { minX: 649, minY: 350, maxX: 772, maxY: 473 },
    top: { minX: 558, minY: 193, maxX: 681, maxY: 318 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 592, maxY: 473 },
    right: { minX: 648, minY: 351, maxX: 771, maxY: 473 },
    top: { minX: 557, minY: 194, maxX: 680, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 592, maxY: 475 },
    right: { minX: 647, minY: 352, maxX: 771, maxY: 475 },
    top: { minX: 556, minY: 195, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 591, maxY: 476 },
    right: { minX: 646, minY: 353, maxX: 770, maxY: 475 },
    top: { minX: 555, minY: 196, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 591, maxY: 476 },
    right: { minX: 647, minY: 352, maxX: 771, maxY: 475 },
    top: { minX: 555, minY: 195, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 592, maxY: 476 },
    right: { minX: 648, minY: 352, maxX: 772, maxY: 475 },
    top: { minX: 556, minY: 195, maxX: 680, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 592, maxY: 477 },
    right: { minX: 648, minY: 353, maxX: 772, maxY: 476 },
    top: { minX: 557, minY: 196, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 593, maxY: 477 },
    right: { minX: 649, minY: 353, maxX: 773, maxY: 476 },
    top: { minX: 557, minY: 196, maxX: 681, maxY: 321 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 593, maxY: 476 },
    right: { minX: 649, minY: 353, maxX: 773, maxY: 476 },
    top: { minX: 557, minY: 195, maxX: 681, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 593, maxY: 476 },
    right: { minX: 649, minY: 353, maxX: 773, maxY: 476 },
    top: { minX: 557, minY: 195, maxX: 681, maxY: 320 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 592, maxY: 477 },
    right: { minX: 648, minY: 353, maxX: 772, maxY: 476 },
    top: { minX: 556, minY: 195, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 591, maxY: 477 },
    right: { minX: 647, minY: 353, maxX: 771, maxY: 476 },
    top: { minX: 555, minY: 195, maxX: 679, maxY: 320 },
  },
  {
    left: { minX: 466, minY: 355, maxX: 590, maxY: 477 },
    right: { minX: 646, minY: 352, maxX: 770, maxY: 476 },
    top: { minX: 554, minY: 195, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 354, maxX: 589, maxY: 477 },
    right: { minX: 646, minY: 352, maxX: 770, maxY: 476 },
    top: { minX: 553, minY: 194, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 464, minY: 355, maxX: 588, maxY: 478 },
    right: { minX: 645, minY: 353, maxX: 770, maxY: 477 },
    top: { minX: 552, minY: 195, maxX: 677, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 355, maxX: 589, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 770, maxY: 477 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 589, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 771, maxY: 477 },
    top: { minX: 554, minY: 195, maxX: 678, maxY: 321 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 589, maxY: 479 },
    right: { minX: 646, minY: 354, maxX: 771, maxY: 478 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 321 },
  },
  {
    left: { minX: 466, minY: 357, maxX: 590, maxY: 479 },
    right: { minX: 647, minY: 355, maxX: 772, maxY: 479 },
    top: { minX: 555, minY: 196, maxX: 679, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 357, maxX: 590, maxY: 480 },
    right: { minX: 647, minY: 355, maxX: 772, maxY: 479 },
    top: { minX: 555, minY: 197, maxX: 679, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 358, maxX: 590, maxY: 481 },
    right: { minX: 647, minY: 356, maxX: 772, maxY: 479 },
    top: { minX: 555, minY: 197, maxX: 679, maxY: 323 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 590, maxY: 480 },
    right: { minX: 647, minY: 355, maxX: 772, maxY: 479 },
    top: { minX: 555, minY: 195, maxX: 680, maxY: 322 },
  },
  {
    left: { minX: 464, minY: 356, maxX: 589, maxY: 479 },
    right: { minX: 646, minY: 355, maxX: 772, maxY: 479 },
    top: { minX: 554, minY: 195, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 357, maxX: 587, maxY: 481 },
    right: { minX: 644, minY: 355, maxX: 769, maxY: 479 },
    top: { minX: 552, minY: 196, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 461, minY: 357, maxX: 587, maxY: 480 },
    right: { minX: 644, minY: 355, maxX: 769, maxY: 480 },
    top: { minX: 551, minY: 196, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 460, minY: 356, maxX: 586, maxY: 480 },
    right: { minX: 644, minY: 355, maxX: 769, maxY: 479 },
    top: { minX: 551, minY: 195, maxX: 677, maxY: 322 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 585, maxY: 479 },
    right: { minX: 643, minY: 354, maxX: 768, maxY: 479 },
    top: { minX: 551, minY: 193, maxX: 676, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 354, maxX: 585, maxY: 479 },
    right: { minX: 643, minY: 353, maxX: 768, maxY: 478 },
    top: { minX: 551, minY: 193, maxX: 676, maxY: 320 },
  },
  {
    left: { minX: 458, minY: 354, maxX: 585, maxY: 479 },
    right: { minX: 643, minY: 353, maxX: 768, maxY: 477 },
    top: { minX: 549, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 458, minY: 353, maxX: 585, maxY: 477 },
    right: { minX: 643, minY: 352, maxX: 769, maxY: 477 },
    top: { minX: 550, minY: 191, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 458, minY: 352, maxX: 585, maxY: 477 },
    right: { minX: 643, minY: 351, maxX: 769, maxY: 476 },
    top: { minX: 550, minY: 190, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 458, minY: 352, maxX: 585, maxY: 477 },
    right: { minX: 643, minY: 351, maxX: 769, maxY: 476 },
    top: { minX: 550, minY: 189, maxX: 677, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 352, maxX: 586, maxY: 476 },
    right: { minX: 644, minY: 351, maxX: 770, maxY: 476 },
    top: { minX: 551, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 352, maxX: 586, maxY: 476 },
    right: { minX: 644, minY: 351, maxX: 770, maxY: 476 },
    top: { minX: 551, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 352, maxX: 586, maxY: 477 },
    right: { minX: 644, minY: 351, maxX: 770, maxY: 476 },
    top: { minX: 551, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 587, maxY: 476 },
    right: { minX: 645, minY: 351, maxX: 771, maxY: 476 },
    top: { minX: 552, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 587, maxY: 476 },
    right: { minX: 645, minY: 351, maxX: 771, maxY: 476 },
    top: { minX: 552, minY: 189, maxX: 679, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 587, maxY: 476 },
    right: { minX: 645, minY: 351, maxX: 771, maxY: 476 },
    top: { minX: 552, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 461, minY: 352, maxX: 588, maxY: 477 },
    right: { minX: 646, minY: 351, maxX: 772, maxY: 477 },
    top: { minX: 553, minY: 190, maxX: 680, maxY: 317 },
  },
  {
    left: { minX: 461, minY: 352, maxX: 588, maxY: 477 },
    right: { minX: 646, minY: 352, maxX: 772, maxY: 477 },
    top: { minX: 554, minY: 191, maxX: 680, maxY: 318 },
  },
  {
    left: { minX: 462, minY: 353, maxX: 589, maxY: 477 },
    right: { minX: 646, minY: 353, maxX: 772, maxY: 477 },
    top: { minX: 555, minY: 191, maxX: 680, maxY: 319 },
  },
  {
    left: { minX: 462, minY: 353, maxX: 588, maxY: 477 },
    right: { minX: 646, minY: 353, maxX: 772, maxY: 478 },
    top: { minX: 554, minY: 192, maxX: 680, maxY: 319 },
  },
  {
    left: { minX: 462, minY: 354, maxX: 588, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 772, maxY: 479 },
    top: { minX: 554, minY: 193, maxX: 680, maxY: 320 },
  },
  {
    left: { minX: 462, minY: 355, maxX: 588, maxY: 479 },
    right: { minX: 646, minY: 354, maxX: 772, maxY: 479 },
    top: { minX: 554, minY: 193, maxX: 680, maxY: 320 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 588, maxY: 479 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 194, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 588, maxY: 479 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 194, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 587, maxY: 479 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 194, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 462, minY: 356, maxX: 588, maxY: 480 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 195, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 464, minY: 357, maxX: 590, maxY: 481 },
    right: { minX: 648, minY: 356, maxX: 773, maxY: 481 },
    top: { minX: 556, minY: 196, maxX: 681, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 357, maxX: 591, maxY: 481 },
    right: { minX: 648, minY: 357, maxX: 774, maxY: 481 },
    top: { minX: 557, minY: 196, maxX: 682, maxY: 323 },
  },
  {
    left: { minX: 465, minY: 358, maxX: 591, maxY: 482 },
    right: { minX: 649, minY: 357, maxX: 774, maxY: 482 },
    top: { minX: 557, minY: 197, maxX: 682, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 650, minY: 358, maxX: 775, maxY: 482 },
    top: { minX: 558, minY: 197, maxX: 683, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 360, maxX: 594, maxY: 483 },
    right: { minX: 651, minY: 359, maxX: 777, maxY: 483 },
    top: { minX: 559, minY: 199, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 471, minY: 362, maxX: 597, maxY: 486 },
    right: { minX: 653, minY: 361, maxX: 779, maxY: 485 },
    top: { minX: 561, minY: 202, maxX: 686, maxY: 328 },
  },
  {
    left: { minX: 474, minY: 363, maxX: 599, maxY: 486 },
    right: { minX: 656, minY: 361, maxX: 781, maxY: 486 },
    top: { minX: 563, minY: 203, maxX: 688, maxY: 328 },
  },
  {
    left: { minX: 475, minY: 364, maxX: 599, maxY: 487 },
    right: { minX: 656, minY: 362, maxX: 782, maxY: 486 },
    top: { minX: 565, minY: 204, maxX: 688, maxY: 329 },
  },
  {
    left: { minX: 476, minY: 364, maxX: 601, maxY: 487 },
    right: { minX: 657, minY: 362, maxX: 782, maxY: 486 },
    top: { minX: 565, minY: 204, maxX: 690, maxY: 329 },
  },
  {
    left: { minX: 477, minY: 364, maxX: 601, maxY: 486 },
    right: { minX: 658, minY: 362, maxX: 783, maxY: 485 },
    top: { minX: 566, minY: 204, maxX: 690, maxY: 329 },
  },
  {
    left: { minX: 477, minY: 364, maxX: 601, maxY: 486 },
    right: { minX: 658, minY: 362, maxX: 783, maxY: 486 },
    top: { minX: 566, minY: 204, maxX: 690, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 363, maxX: 603, maxY: 486 },
    right: { minX: 660, minY: 361, maxX: 785, maxY: 485 },
    top: { minX: 568, minY: 203, maxX: 692, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 362, maxX: 603, maxY: 485 },
    right: { minX: 660, minY: 360, maxX: 785, maxY: 484 },
    top: { minX: 568, minY: 203, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 480, minY: 363, maxX: 604, maxY: 485 },
    right: { minX: 660, minY: 360, maxX: 786, maxY: 484 },
    top: { minX: 568, minY: 203, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 605, maxY: 485 },
    right: { minX: 661, minY: 360, maxX: 786, maxY: 484 },
    top: { minX: 569, minY: 203, maxX: 693, maxY: 328 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 605, maxY: 484 },
    right: { minX: 661, minY: 360, maxX: 786, maxY: 483 },
    top: { minX: 569, minY: 203, maxX: 694, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 361, maxX: 605, maxY: 484 },
    right: { minX: 662, minY: 359, maxX: 787, maxY: 483 },
    top: { minX: 571, minY: 202, maxX: 694, maxY: 327 },
  },
  {
    left: { minX: 483, minY: 361, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 359, maxX: 788, maxY: 483 },
    top: { minX: 571, minY: 201, maxX: 695, maxY: 327 },
  },
  {
    left: { minX: 483, minY: 362, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 360, maxX: 788, maxY: 484 },
    top: { minX: 572, minY: 203, maxX: 695, maxY: 328 },
  },
  {
    left: { minX: 483, minY: 362, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 360, maxX: 788, maxY: 484 },
    top: { minX: 571, minY: 203, maxX: 695, maxY: 327 },
  },
  {
    left: { minX: 483, minY: 361, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 359, maxX: 787, maxY: 483 },
    top: { minX: 571, minY: 202, maxX: 695, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 360, maxX: 605, maxY: 482 },
    right: { minX: 662, minY: 359, maxX: 786, maxY: 482 },
    top: { minX: 571, minY: 202, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 605, maxY: 480 },
    right: { minX: 662, minY: 357, maxX: 786, maxY: 480 },
    top: { minX: 570, minY: 200, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 358, maxX: 606, maxY: 480 },
    right: { minX: 662, minY: 357, maxX: 786, maxY: 479 },
    top: { minX: 571, minY: 199, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 605, maxY: 480 },
    right: { minX: 661, minY: 357, maxX: 785, maxY: 479 },
    top: { minX: 570, minY: 200, maxX: 693, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 356, maxX: 604, maxY: 477 },
    right: { minX: 661, minY: 354, maxX: 785, maxY: 477 },
    top: { minX: 569, minY: 197, maxX: 693, maxY: 321 },
  },
  {
    left: { minX: 482, minY: 354, maxX: 604, maxY: 475 },
    right: { minX: 660, minY: 352, maxX: 784, maxY: 475 },
    top: { minX: 569, minY: 195, maxX: 693, maxY: 319 },
  },
  {
    left: { minX: 481, minY: 354, maxX: 604, maxY: 475 },
    right: { minX: 660, minY: 352, maxX: 784, maxY: 475 },
    top: { minX: 569, minY: 195, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 482, minY: 352, maxX: 605, maxY: 473 },
    right: { minX: 661, minY: 351, maxX: 785, maxY: 473 },
    top: { minX: 570, minY: 194, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 482, minY: 353, maxX: 605, maxY: 474 },
    right: { minX: 661, minY: 351, maxX: 784, maxY: 474 },
    top: { minX: 570, minY: 195, maxX: 693, maxY: 319 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 605, maxY: 473 },
    right: { minX: 661, minY: 351, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 195, maxX: 693, maxY: 319 },
  },
  {
    left: { minX: 483, minY: 351, maxX: 605, maxY: 471 },
    right: { minX: 661, minY: 350, maxX: 784, maxY: 472 },
    top: { minX: 571, minY: 193, maxX: 694, maxY: 317 },
  },
  {
    left: { minX: 484, minY: 351, maxX: 605, maxY: 471 },
    right: { minX: 661, minY: 349, maxX: 784, maxY: 471 },
    top: { minX: 571, minY: 193, maxX: 694, maxY: 317 },
  },
  {
    left: { minX: 484, minY: 353, maxX: 605, maxY: 473 },
    right: { minX: 661, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 195, maxX: 693, maxY: 319 },
  },
  {
    left: { minX: 484, minY: 354, maxX: 605, maxY: 474 },
    right: { minX: 661, minY: 352, maxX: 784, maxY: 474 },
    top: { minX: 571, minY: 197, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 353, maxX: 606, maxY: 473 },
    right: { minX: 661, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 197, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 607, maxY: 473 },
    right: { minX: 662, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 607, maxY: 474 },
    right: { minX: 662, minY: 353, maxX: 784, maxY: 475 },
    top: { minX: 573, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 607, maxY: 472 },
    right: { minX: 662, minY: 352, maxX: 785, maxY: 473 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 351, maxX: 608, maxY: 470 },
    right: { minX: 663, minY: 350, maxX: 786, maxY: 471 },
    top: { minX: 575, minY: 195, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 488, minY: 352, maxX: 608, maxY: 472 },
    right: { minX: 663, minY: 352, maxX: 786, maxY: 473 },
    top: { minX: 575, minY: 197, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 607, maxY: 472 },
    right: { minX: 662, minY: 352, maxX: 785, maxY: 473 },
    top: { minX: 574, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 607, maxY: 472 },
    right: { minX: 662, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 574, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 352, maxX: 607, maxY: 471 },
    right: { minX: 662, minY: 351, maxX: 784, maxY: 472 },
    top: { minX: 574, minY: 197, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 351, maxX: 784, maxY: 472 },
    top: { minX: 575, minY: 197, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 607, maxY: 471 },
    right: { minX: 662, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 574, minY: 198, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 472 },
    right: { minX: 663, minY: 353, maxX: 784, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 608, maxY: 472 },
    right: { minX: 662, minY: 353, maxX: 784, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 784, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 783, maxY: 472 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 783, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 783, maxY: 473 },
    top: { minX: 575, minY: 200, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 784, maxY: 472 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 609, maxY: 470 },
    right: { minX: 663, minY: 352, maxX: 784, maxY: 471 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 353, maxX: 610, maxY: 470 },
    right: { minX: 663, minY: 352, maxX: 785, maxY: 472 },
    top: { minX: 577, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 353, maxX: 610, maxY: 470 },
    right: { minX: 664, minY: 353, maxX: 785, maxY: 472 },
    top: { minX: 577, minY: 199, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 352, maxX: 611, maxY: 469 },
    right: { minX: 665, minY: 352, maxX: 786, maxY: 471 },
    top: { minX: 579, minY: 198, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 612, maxY: 469 },
    right: { minX: 666, minY: 352, maxX: 787, maxY: 471 },
    top: { minX: 579, minY: 198, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 613, maxY: 470 },
    right: { minX: 667, minY: 352, maxX: 788, maxY: 472 },
    top: { minX: 581, minY: 199, maxX: 700, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 614, maxY: 470 },
    right: { minX: 668, minY: 353, maxX: 789, maxY: 473 },
    top: { minX: 582, minY: 200, maxX: 701, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 614, maxY: 471 },
    right: { minX: 668, minY: 353, maxX: 789, maxY: 473 },
    top: { minX: 581, minY: 200, maxX: 701, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 613, maxY: 471 },
    right: { minX: 668, minY: 353, maxX: 789, maxY: 473 },
    top: { minX: 581, minY: 200, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 614, maxY: 471 },
    right: { minX: 668, minY: 353, maxX: 789, maxY: 473 },
    top: { minX: 581, minY: 200, maxX: 701, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 613, maxY: 471 },
    right: { minX: 668, minY: 353, maxX: 788, maxY: 473 },
    top: { minX: 581, minY: 200, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 613, maxY: 471 },
    right: { minX: 667, minY: 353, maxX: 788, maxY: 473 },
    top: { minX: 581, minY: 200, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 614, maxY: 470 },
    right: { minX: 668, minY: 352, maxX: 789, maxY: 472 },
    top: { minX: 581, minY: 199, maxX: 701, maxY: 320 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 614, maxY: 469 },
    right: { minX: 669, minY: 352, maxX: 790, maxY: 472 },
    top: { minX: 582, minY: 199, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 614, maxY: 469 },
    right: { minX: 669, minY: 352, maxX: 790, maxY: 472 },
    top: { minX: 582, minY: 199, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 497, minY: 353, maxX: 615, maxY: 470 },
    right: { minX: 670, minY: 353, maxX: 791, maxY: 473 },
    top: { minX: 583, minY: 199, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 498, minY: 352, maxX: 617, maxY: 469 },
    right: { minX: 671, minY: 353, maxX: 792, maxY: 473 },
    top: { minX: 585, minY: 199, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 617, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 793, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 353, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 793, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 794, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 498, minY: 351, maxX: 617, maxY: 469 },
    right: { minX: 671, minY: 352, maxX: 793, maxY: 472 },
    top: { minX: 585, minY: 198, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 498, minY: 351, maxX: 617, maxY: 468 },
    right: { minX: 671, minY: 352, maxX: 793, maxY: 472 },
    top: { minX: 585, minY: 198, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 499, minY: 351, maxX: 617, maxY: 469 },
    right: { minX: 671, minY: 352, maxX: 793, maxY: 472 },
    top: { minX: 585, minY: 198, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 793, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 617, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 793, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 352, maxX: 793, maxY: 472 },
    top: { minX: 587, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 500, minY: 351, maxX: 618, maxY: 468 },
    right: { minX: 673, minY: 352, maxX: 794, maxY: 472 },
    top: { minX: 587, minY: 197, maxX: 707, maxY: 319 },
  },
  {
    left: { minX: 500, minY: 350, maxX: 618, maxY: 468 },
    right: { minX: 673, minY: 351, maxX: 794, maxY: 471 },
    top: { minX: 587, minY: 197, maxX: 707, maxY: 318 },
  },
  {
    left: { minX: 500, minY: 351, maxX: 619, maxY: 468 },
    right: { minX: 673, minY: 352, maxX: 795, maxY: 472 },
    top: { minX: 588, minY: 197, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 501, minY: 351, maxX: 619, maxY: 468 },
    right: { minX: 674, minY: 353, maxX: 795, maxY: 473 },
    top: { minX: 589, minY: 198, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 501, minY: 352, maxX: 620, maxY: 469 },
    right: { minX: 674, minY: 353, maxX: 796, maxY: 473 },
    top: { minX: 589, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 352, maxX: 619, maxY: 469 },
    right: { minX: 674, minY: 353, maxX: 795, maxY: 473 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 352, maxX: 620, maxY: 469 },
    right: { minX: 674, minY: 353, maxX: 796, maxY: 473 },
    top: { minX: 589, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 621, maxY: 471 },
    right: { minX: 676, minY: 354, maxX: 797, maxY: 474 },
    top: { minX: 590, minY: 199, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 622, maxY: 471 },
    right: { minX: 676, minY: 354, maxX: 798, maxY: 474 },
    top: { minX: 591, minY: 200, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 623, maxY: 470 },
    right: { minX: 678, minY: 353, maxX: 800, maxY: 474 },
    top: { minX: 593, minY: 199, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 354, maxX: 801, maxY: 475 },
    top: { minX: 593, minY: 199, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 355, maxX: 801, maxY: 475 },
    top: { minX: 593, minY: 200, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 354, maxX: 802, maxY: 475 },
    top: { minX: 593, minY: 199, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 625, maxY: 471 },
    right: { minX: 680, minY: 354, maxX: 802, maxY: 474 },
    top: { minX: 594, minY: 199, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 354, maxX: 801, maxY: 474 },
    top: { minX: 593, minY: 199, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 352, maxX: 624, maxY: 470 },
    right: { minX: 679, minY: 353, maxX: 802, maxY: 474 },
    top: { minX: 593, minY: 197, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 352, maxX: 625, maxY: 470 },
    right: { minX: 679, minY: 353, maxX: 802, maxY: 474 },
    top: { minX: 594, minY: 197, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 351, maxX: 624, maxY: 469 },
    right: { minX: 679, minY: 353, maxX: 802, maxY: 473 },
    top: { minX: 593, minY: 197, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 504, minY: 350, maxX: 623, maxY: 469 },
    right: { minX: 679, minY: 352, maxX: 802, maxY: 473 },
    top: { minX: 593, minY: 195, maxX: 714, maxY: 318 },
  },
  {
    left: { minX: 503, minY: 350, maxX: 623, maxY: 469 },
    right: { minX: 679, minY: 352, maxX: 801, maxY: 473 },
    top: { minX: 593, minY: 196, maxX: 714, maxY: 318 },
  },
  {
    left: { minX: 503, minY: 351, maxX: 623, maxY: 470 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 473 },
    top: { minX: 592, minY: 197, maxX: 713, maxY: 319 },
  },
  {
    left: { minX: 503, minY: 352, maxX: 623, maxY: 471 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 474 },
    top: { minX: 592, minY: 197, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 353, maxX: 624, maxY: 472 },
    right: { minX: 679, minY: 354, maxX: 802, maxY: 475 },
    top: { minX: 593, minY: 198, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 353, maxX: 624, maxY: 472 },
    right: { minX: 680, minY: 353, maxX: 803, maxY: 475 },
    top: { minX: 593, minY: 198, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 626, maxY: 472 },
    right: { minX: 681, minY: 353, maxX: 804, maxY: 475 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 627, maxY: 473 },
    right: { minX: 682, minY: 355, maxX: 806, maxY: 476 },
    top: { minX: 595, minY: 199, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 627, maxY: 473 },
    right: { minX: 683, minY: 355, maxX: 806, maxY: 476 },
    top: { minX: 596, minY: 199, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 684, minY: 355, maxX: 807, maxY: 477 },
    top: { minX: 597, minY: 199, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 684, minY: 355, maxX: 807, maxY: 477 },
    top: { minX: 597, minY: 199, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 684, minY: 355, maxX: 807, maxY: 477 },
    top: { minX: 597, minY: 199, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 684, minY: 355, maxX: 808, maxY: 477 },
    top: { minX: 597, minY: 199, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 684, minY: 355, maxX: 808, maxY: 476 },
    top: { minX: 597, minY: 199, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 628, maxY: 473 },
    right: { minX: 684, minY: 355, maxX: 807, maxY: 476 },
    top: { minX: 596, minY: 198, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 628, maxY: 473 },
    right: { minX: 684, minY: 354, maxX: 808, maxY: 476 },
    top: { minX: 597, minY: 197, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 628, maxY: 473 },
    right: { minX: 684, minY: 353, maxX: 808, maxY: 475 },
    top: { minX: 596, minY: 197, maxX: 718, maxY: 320 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 627, maxY: 473 },
    right: { minX: 683, minY: 353, maxX: 806, maxY: 475 },
    top: { minX: 595, minY: 197, maxX: 717, maxY: 320 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 626, maxY: 473 },
    right: { minX: 682, minY: 353, maxX: 806, maxY: 475 },
    top: { minX: 595, minY: 197, maxX: 717, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 626, maxY: 473 },
    right: { minX: 682, minY: 353, maxX: 806, maxY: 475 },
    top: { minX: 595, minY: 197, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 354, maxX: 626, maxY: 474 },
    right: { minX: 683, minY: 353, maxX: 806, maxY: 475 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 354, maxX: 626, maxY: 474 },
    right: { minX: 682, minY: 354, maxX: 806, maxY: 476 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 354, maxX: 626, maxY: 475 },
    right: { minX: 682, minY: 354, maxX: 806, maxY: 476 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 506, minY: 355, maxX: 627, maxY: 475 },
    right: { minX: 683, minY: 354, maxX: 807, maxY: 476 },
    top: { minX: 595, minY: 197, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 628, maxY: 475 },
    right: { minX: 684, minY: 355, maxX: 808, maxY: 477 },
    top: { minX: 595, minY: 198, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 629, maxY: 475 },
    right: { minX: 685, minY: 355, maxX: 809, maxY: 477 },
    top: { minX: 596, minY: 198, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 508, minY: 355, maxX: 629, maxY: 475 },
    right: { minX: 686, minY: 354, maxX: 810, maxY: 476 },
    top: { minX: 597, minY: 197, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 629, maxY: 475 },
    right: { minX: 685, minY: 353, maxX: 810, maxY: 476 },
    top: { minX: 596, minY: 197, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 629, maxY: 475 },
    right: { minX: 686, minY: 353, maxX: 810, maxY: 475 },
    top: { minX: 596, minY: 196, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 629, maxY: 475 },
    right: { minX: 686, minY: 353, maxX: 810, maxY: 475 },
    top: { minX: 596, minY: 196, maxX: 719, maxY: 320 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 629, maxY: 476 },
    right: { minX: 686, minY: 353, maxX: 810, maxY: 476 },
    top: { minX: 596, minY: 197, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 356, maxX: 629, maxY: 477 },
    right: { minX: 686, minY: 354, maxX: 810, maxY: 477 },
    top: { minX: 595, minY: 197, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 507, minY: 356, maxX: 629, maxY: 478 },
    right: { minX: 686, minY: 354, maxX: 810, maxY: 477 },
    top: { minX: 595, minY: 198, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 507, minY: 356, maxX: 629, maxY: 478 },
    right: { minX: 686, minY: 354, maxX: 810, maxY: 477 },
    top: { minX: 595, minY: 197, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 506, minY: 356, maxX: 629, maxY: 477 },
    right: { minX: 685, minY: 354, maxX: 810, maxY: 477 },
    top: { minX: 595, minY: 197, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 356, maxX: 627, maxY: 478 },
    right: { minX: 684, minY: 354, maxX: 809, maxY: 477 },
    top: { minX: 593, minY: 197, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 478 },
    right: { minX: 683, minY: 353, maxX: 808, maxY: 477 },
    top: { minX: 592, minY: 197, maxX: 715, maxY: 321 },
  },
  {
    left: { minX: 502, minY: 356, maxX: 625, maxY: 478 },
    right: { minX: 682, minY: 353, maxX: 807, maxY: 477 },
    top: { minX: 591, minY: 197, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 624, maxY: 477 },
    right: { minX: 681, minY: 353, maxX: 806, maxY: 476 },
    top: { minX: 589, minY: 196, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 500, minY: 355, maxX: 623, maxY: 477 },
    right: { minX: 680, minY: 353, maxX: 805, maxY: 476 },
    top: { minX: 589, minY: 195, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 500, minY: 355, maxX: 623, maxY: 477 },
    right: { minX: 680, minY: 353, maxX: 804, maxY: 476 },
    top: { minX: 589, minY: 195, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 355, maxX: 623, maxY: 477 },
    right: { minX: 680, minY: 353, maxX: 804, maxY: 475 },
    top: { minX: 588, minY: 195, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 354, maxX: 622, maxY: 477 },
    right: { minX: 679, minY: 352, maxX: 804, maxY: 475 },
    top: { minX: 588, minY: 195, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 354, maxX: 622, maxY: 476 },
    right: { minX: 679, minY: 352, maxX: 804, maxY: 475 },
    top: { minX: 588, minY: 195, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 478 },
    right: { minX: 679, minY: 353, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 196, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 478 },
    right: { minX: 679, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 478 },
    right: { minX: 679, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 589, minY: 196, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 623, maxY: 478 },
    right: { minX: 680, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 589, minY: 196, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 479 },
    right: { minX: 679, minY: 355, maxX: 804, maxY: 478 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 500, minY: 358, maxX: 623, maxY: 480 },
    right: { minX: 680, minY: 356, maxX: 804, maxY: 479 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 324 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 479 },
    right: { minX: 679, minY: 355, maxX: 804, maxY: 478 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 479 },
    right: { minX: 680, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 622, maxY: 479 },
    right: { minX: 679, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 480 },
    right: { minX: 680, minY: 355, maxX: 804, maxY: 478 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 500, minY: 357, maxX: 623, maxY: 480 },
    right: { minX: 680, minY: 355, maxX: 805, maxY: 479 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 480 },
    right: { minX: 680, minY: 355, maxX: 805, maxY: 479 },
    top: { minX: 589, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 358, maxX: 623, maxY: 480 },
    right: { minX: 680, minY: 356, maxX: 804, maxY: 479 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 622, maxY: 480 },
    right: { minX: 679, minY: 356, maxX: 804, maxY: 479 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 498, minY: 357, maxX: 622, maxY: 479 },
    right: { minX: 679, minY: 355, maxX: 804, maxY: 479 },
    top: { minX: 587, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 497, minY: 357, maxX: 621, maxY: 480 },
    right: { minX: 678, minY: 355, maxX: 802, maxY: 479 },
    top: { minX: 587, minY: 197, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 496, minY: 357, maxX: 620, maxY: 480 },
    right: { minX: 677, minY: 355, maxX: 802, maxY: 479 },
    top: { minX: 585, minY: 198, maxX: 709, maxY: 323 },
  },
  {
    left: { minX: 496, minY: 357, maxX: 620, maxY: 480 },
    right: { minX: 677, minY: 355, maxX: 802, maxY: 479 },
    top: { minX: 585, minY: 198, maxX: 709, maxY: 323 },
  },
  {
    left: { minX: 496, minY: 357, maxX: 619, maxY: 480 },
    right: { minX: 676, minY: 356, maxX: 801, maxY: 479 },
    top: { minX: 585, minY: 198, maxX: 709, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 357, maxX: 619, maxY: 479 },
    right: { minX: 677, minY: 355, maxX: 801, maxY: 478 },
    top: { minX: 585, minY: 197, maxX: 709, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 355, maxX: 620, maxY: 478 },
    right: { minX: 677, minY: 353, maxX: 802, maxY: 477 },
    top: { minX: 585, minY: 195, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 619, maxY: 478 },
    right: { minX: 676, minY: 353, maxX: 801, maxY: 476 },
    top: { minX: 585, minY: 195, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 619, maxY: 477 },
    right: { minX: 676, minY: 353, maxX: 801, maxY: 476 },
    top: { minX: 585, minY: 194, maxX: 710, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 619, maxY: 478 },
    right: { minX: 676, minY: 353, maxX: 801, maxY: 477 },
    top: { minX: 585, minY: 194, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 619, maxY: 478 },
    right: { minX: 676, minY: 353, maxX: 801, maxY: 477 },
    top: { minX: 585, minY: 195, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 356, maxX: 619, maxY: 479 },
    right: { minX: 677, minY: 354, maxX: 802, maxY: 477 },
    top: { minX: 585, minY: 195, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 361, maxX: 620, maxY: 484 },
    right: { minX: 677, minY: 359, maxX: 802, maxY: 482 },
    top: { minX: 585, minY: 201, maxX: 709, maxY: 327 },
  },
  {
    left: { minX: 497, minY: 363, maxX: 621, maxY: 485 },
    right: { minX: 678, minY: 360, maxX: 803, maxY: 483 },
    top: { minX: 585, minY: 203, maxX: 709, maxY: 328 },
  },
  {
    left: { minX: 498, minY: 360, maxX: 622, maxY: 483 },
    right: { minX: 679, minY: 357, maxX: 805, maxY: 481 },
    top: { minX: 587, minY: 200, maxX: 712, maxY: 325 },
  },
  {
    left: { minX: 499, minY: 360, maxX: 624, maxY: 483 },
    right: { minX: 681, minY: 357, maxX: 806, maxY: 481 },
    top: { minX: 589, minY: 200, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 500, minY: 361, maxX: 625, maxY: 484 },
    right: { minX: 682, minY: 359, maxX: 807, maxY: 482 },
    top: { minX: 590, minY: 201, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 502, minY: 363, maxX: 626, maxY: 486 },
    right: { minX: 684, minY: 361, maxX: 809, maxY: 484 },
    top: { minX: 591, minY: 203, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 503, minY: 362, maxX: 627, maxY: 486 },
    right: { minX: 685, minY: 361, maxX: 811, maxY: 484 },
    top: { minX: 593, minY: 203, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 504, minY: 363, maxX: 628, maxY: 486 },
    right: { minX: 685, minY: 361, maxX: 811, maxY: 485 },
    top: { minX: 593, minY: 203, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 503, minY: 363, maxX: 627, maxY: 487 },
    right: { minX: 685, minY: 361, maxX: 811, maxY: 485 },
    top: { minX: 593, minY: 203, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 502, minY: 362, maxX: 626, maxY: 486 },
    right: { minX: 684, minY: 361, maxX: 810, maxY: 484 },
    top: { minX: 593, minY: 202, maxX: 717, maxY: 327 },
  },
  {
    left: { minX: 501, minY: 362, maxX: 626, maxY: 486 },
    right: { minX: 683, minY: 360, maxX: 809, maxY: 484 },
    top: { minX: 592, minY: 202, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 501, minY: 362, maxX: 626, maxY: 486 },
    right: { minX: 684, minY: 361, maxX: 809, maxY: 484 },
    top: { minX: 592, minY: 202, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 500, minY: 362, maxX: 625, maxY: 486 },
    right: { minX: 682, minY: 361, maxX: 808, maxY: 485 },
    top: { minX: 591, minY: 202, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 499, minY: 363, maxX: 624, maxY: 486 },
    right: { minX: 682, minY: 361, maxX: 807, maxY: 485 },
    top: { minX: 589, minY: 202, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 499, minY: 363, maxX: 624, maxY: 487 },
    right: { minX: 681, minY: 361, maxX: 806, maxY: 485 },
    top: { minX: 589, minY: 203, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 498, minY: 363, maxX: 623, maxY: 487 },
    right: { minX: 681, minY: 361, maxX: 806, maxY: 485 },
    top: { minX: 589, minY: 203, maxX: 713, maxY: 329 },
  },
  {
    left: { minX: 497, minY: 364, maxX: 622, maxY: 488 },
    right: { minX: 679, minY: 362, maxX: 805, maxY: 486 },
    top: { minX: 587, minY: 204, maxX: 712, maxY: 330 },
  },
  {
    left: { minX: 497, minY: 365, maxX: 622, maxY: 489 },
    right: { minX: 679, minY: 363, maxX: 805, maxY: 487 },
    top: { minX: 587, minY: 205, maxX: 712, maxY: 330 },
  },
  {
    left: { minX: 497, minY: 365, maxX: 622, maxY: 489 },
    right: { minX: 680, minY: 363, maxX: 806, maxY: 487 },
    top: { minX: 588, minY: 204, maxX: 712, maxY: 330 },
  },
  {
    left: { minX: 496, minY: 363, maxX: 621, maxY: 487 },
    right: { minX: 679, minY: 361, maxX: 805, maxY: 486 },
    top: { minX: 587, minY: 203, maxX: 712, maxY: 328 },
  },
  {
    left: { minX: 495, minY: 362, maxX: 620, maxY: 487 },
    right: { minX: 678, minY: 361, maxX: 804, maxY: 485 },
    top: { minX: 586, minY: 202, maxX: 712, maxY: 328 },
  },
  {
    left: { minX: 491, minY: 361, maxX: 617, maxY: 486 },
    right: { minX: 675, minY: 360, maxX: 801, maxY: 484 },
    top: { minX: 583, minY: 201, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 489, minY: 361, maxX: 615, maxY: 486 },
    right: { minX: 672, minY: 359, maxX: 798, maxY: 484 },
    top: { minX: 580, minY: 200, maxX: 705, maxY: 326 },
  },
  {
    left: { minX: 487, minY: 361, maxX: 613, maxY: 486 },
    right: { minX: 670, minY: 358, maxX: 796, maxY: 483 },
    top: { minX: 578, minY: 199, maxX: 703, maxY: 325 },
  },
  {
    left: { minX: 484, minY: 360, maxX: 610, maxY: 485 },
    right: { minX: 668, minY: 357, maxX: 794, maxY: 481 },
    top: { minX: 575, minY: 197, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 608, maxY: 484 },
    right: { minX: 666, minY: 356, maxX: 792, maxY: 481 },
    top: { minX: 572, minY: 197, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 479, minY: 358, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 479 },
    top: { minX: 570, minY: 195, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 358, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 479 },
    top: { minX: 570, minY: 195, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 358, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 355, maxX: 789, maxY: 479 },
    top: { minX: 570, minY: 195, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 359, maxX: 604, maxY: 484 },
    right: { minX: 662, minY: 357, maxX: 788, maxY: 480 },
    top: { minX: 569, minY: 197, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 477, minY: 361, maxX: 604, maxY: 486 },
    right: { minX: 662, minY: 358, maxX: 787, maxY: 482 },
    top: { minX: 568, minY: 199, maxX: 693, maxY: 326 },
  },
  {
    left: { minX: 477, minY: 363, maxX: 603, maxY: 488 },
    right: { minX: 661, minY: 360, maxX: 786, maxY: 483 },
    top: { minX: 568, minY: 201, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 477, minY: 363, maxX: 603, maxY: 488 },
    right: { minX: 661, minY: 360, maxX: 786, maxY: 484 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 603, maxY: 488 },
    right: { minX: 660, minY: 360, maxX: 785, maxY: 484 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 602, maxY: 488 },
    right: { minX: 660, minY: 360, maxX: 785, maxY: 484 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 476, minY: 362, maxX: 603, maxY: 487 },
    right: { minX: 660, minY: 359, maxX: 786, maxY: 483 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 476, minY: 362, maxX: 602, maxY: 487 },
    right: { minX: 660, minY: 359, maxX: 785, maxY: 483 },
    top: { minX: 566, minY: 200, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 476, minY: 362, maxX: 602, maxY: 487 },
    right: { minX: 660, minY: 359, maxX: 785, maxY: 483 },
    top: { minX: 566, minY: 200, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 477, minY: 363, maxX: 603, maxY: 487 },
    right: { minX: 661, minY: 359, maxX: 786, maxY: 483 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 603, maxY: 489 },
    right: { minX: 661, minY: 360, maxX: 785, maxY: 483 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 477, minY: 364, maxX: 603, maxY: 489 },
    right: { minX: 661, minY: 361, maxX: 786, maxY: 485 },
    top: { minX: 567, minY: 203, maxX: 692, maxY: 329 },
  },
  {
    left: { minX: 478, minY: 365, maxX: 604, maxY: 489 },
    right: { minX: 662, minY: 361, maxX: 787, maxY: 485 },
    top: { minX: 569, minY: 203, maxX: 694, maxY: 329 },
  },
  {
    left: { minX: 480, minY: 365, maxX: 606, maxY: 489 },
    right: { minX: 664, minY: 362, maxX: 788, maxY: 485 },
    top: { minX: 571, minY: 204, maxX: 695, maxY: 330 },
  },
  {
    left: { minX: 481, minY: 364, maxX: 607, maxY: 488 },
    right: { minX: 665, minY: 361, maxX: 790, maxY: 485 },
    top: { minX: 571, minY: 203, maxX: 697, maxY: 329 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 608, maxY: 486 },
    right: { minX: 666, minY: 360, maxX: 790, maxY: 483 },
    top: { minX: 573, minY: 201, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 361, maxX: 608, maxY: 486 },
    right: { minX: 666, minY: 359, maxX: 791, maxY: 483 },
    top: { minX: 573, minY: 200, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 483, minY: 359, maxX: 610, maxY: 484 },
    right: { minX: 668, minY: 357, maxX: 793, maxY: 481 },
    top: { minX: 575, minY: 197, maxX: 701, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 608, maxY: 484 },
    right: { minX: 666, minY: 357, maxX: 792, maxY: 481 },
    top: { minX: 574, minY: 197, maxX: 699, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 608, maxY: 484 },
    right: { minX: 666, minY: 357, maxX: 791, maxY: 481 },
    top: { minX: 573, minY: 198, maxX: 699, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 608, maxY: 484 },
    right: { minX: 666, minY: 357, maxX: 791, maxY: 481 },
    top: { minX: 573, minY: 198, maxX: 698, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 606, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 789, maxY: 479 },
    top: { minX: 571, minY: 195, maxX: 697, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 606, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 789, maxY: 479 },
    top: { minX: 571, minY: 195, maxX: 697, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 356, maxX: 605, maxY: 481 },
    right: { minX: 663, minY: 354, maxX: 788, maxY: 478 },
    top: { minX: 571, minY: 193, maxX: 696, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 355, maxX: 605, maxY: 480 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 477 },
    top: { minX: 571, minY: 193, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 605, maxY: 478 },
    right: { minX: 663, minY: 351, maxX: 789, maxY: 475 },
    top: { minX: 571, minY: 191, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 606, maxY: 476 },
    right: { minX: 663, minY: 350, maxX: 789, maxY: 475 },
    top: { minX: 571, minY: 189, maxX: 698, maxY: 317 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 606, maxY: 477 },
    right: { minX: 664, minY: 350, maxX: 790, maxY: 475 },
    top: { minX: 571, minY: 189, maxX: 697, maxY: 317 },
  },
  {
    left: { minX: 480, minY: 356, maxX: 607, maxY: 481 },
    right: { minX: 664, minY: 354, maxX: 790, maxY: 479 },
    top: { minX: 572, minY: 193, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 606, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 480 },
    top: { minX: 572, minY: 195, maxX: 697, maxY: 322 },
  },
  {
    left: { minX: 482, minY: 361, maxX: 608, maxY: 486 },
    right: { minX: 666, minY: 359, maxX: 792, maxY: 483 },
    top: { minX: 573, minY: 198, maxX: 699, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 363, maxX: 609, maxY: 488 },
    right: { minX: 667, minY: 361, maxX: 792, maxY: 485 },
    top: { minX: 573, minY: 201, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 482, minY: 364, maxX: 609, maxY: 490 },
    right: { minX: 667, minY: 362, maxX: 792, maxY: 487 },
    top: { minX: 574, minY: 202, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 483, minY: 366, maxX: 609, maxY: 491 },
    right: { minX: 668, minY: 364, maxX: 793, maxY: 488 },
    top: { minX: 575, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 482, minY: 365, maxX: 609, maxY: 491 },
    right: { minX: 666, minY: 363, maxX: 792, maxY: 488 },
    top: { minX: 573, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 482, minY: 366, maxX: 609, maxY: 491 },
    right: { minX: 667, minY: 364, maxX: 792, maxY: 488 },
    top: { minX: 573, minY: 203, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 482, minY: 366, maxX: 608, maxY: 491 },
    right: { minX: 667, minY: 364, maxX: 792, maxY: 489 },
    top: { minX: 574, minY: 203, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 482, minY: 365, maxX: 608, maxY: 491 },
    right: { minX: 666, minY: 363, maxX: 792, maxY: 488 },
    top: { minX: 573, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 482, minY: 365, maxX: 608, maxY: 491 },
    right: { minX: 666, minY: 363, maxX: 792, maxY: 488 },
    top: { minX: 573, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 481, minY: 367, maxX: 608, maxY: 492 },
    right: { minX: 666, minY: 365, maxX: 792, maxY: 489 },
    top: { minX: 573, minY: 205, maxX: 699, maxY: 332 },
  },
  {
    left: { minX: 481, minY: 367, maxX: 607, maxY: 493 },
    right: { minX: 665, minY: 365, maxX: 791, maxY: 490 },
    top: { minX: 572, minY: 205, maxX: 698, maxY: 332 },
  },
  {
    left: { minX: 480, minY: 368, maxX: 607, maxY: 494 },
    right: { minX: 665, minY: 366, maxX: 791, maxY: 491 },
    top: { minX: 571, minY: 205, maxX: 698, maxY: 333 },
  },
  {
    left: { minX: 480, minY: 368, maxX: 607, maxY: 494 },
    right: { minX: 665, minY: 366, maxX: 790, maxY: 491 },
    top: { minX: 571, minY: 206, maxX: 698, maxY: 333 },
  },
  {
    left: { minX: 479, minY: 368, maxX: 606, maxY: 494 },
    right: { minX: 665, minY: 366, maxX: 790, maxY: 490 },
    top: { minX: 571, minY: 206, maxX: 697, maxY: 333 },
  },
  {
    left: { minX: 479, minY: 368, maxX: 606, maxY: 494 },
    right: { minX: 664, minY: 366, maxX: 789, maxY: 490 },
    top: { minX: 570, minY: 206, maxX: 696, maxY: 333 },
  },
  {
    left: { minX: 478, minY: 368, maxX: 605, maxY: 494 },
    right: { minX: 663, minY: 365, maxX: 788, maxY: 490 },
    top: { minX: 569, minY: 206, maxX: 695, maxY: 333 },
  },
  {
    left: { minX: 478, minY: 369, maxX: 605, maxY: 495 },
    right: { minX: 663, minY: 366, maxX: 788, maxY: 490 },
    top: { minX: 569, minY: 206, maxX: 695, maxY: 333 },
  },
  {
    left: { minX: 477, minY: 371, maxX: 604, maxY: 496 },
    right: { minX: 662, minY: 368, maxX: 787, maxY: 492 },
    top: { minX: 568, minY: 208, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 478, minY: 371, maxX: 604, maxY: 496 },
    right: { minX: 662, minY: 368, maxX: 787, maxY: 492 },
    top: { minX: 569, minY: 209, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 477, minY: 371, maxX: 603, maxY: 496 },
    right: { minX: 661, minY: 369, maxX: 786, maxY: 492 },
    top: { minX: 568, minY: 209, maxX: 693, maxY: 336 },
  },
  {
    left: { minX: 477, minY: 371, maxX: 603, maxY: 496 },
    right: { minX: 661, minY: 368, maxX: 786, maxY: 492 },
    top: { minX: 568, minY: 209, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 371, maxX: 602, maxY: 497 },
    right: { minX: 660, minY: 369, maxX: 784, maxY: 493 },
    top: { minX: 567, minY: 209, maxX: 692, maxY: 336 },
  },
  {
    left: { minX: 475, minY: 372, maxX: 602, maxY: 498 },
    right: { minX: 660, minY: 369, maxX: 784, maxY: 493 },
    top: { minX: 566, minY: 211, maxX: 692, maxY: 337 },
  },
  {
    left: { minX: 475, minY: 374, maxX: 602, maxY: 499 },
    right: { minX: 660, minY: 371, maxX: 784, maxY: 495 },
    top: { minX: 566, minY: 212, maxX: 692, maxY: 338 },
  },
  {
    left: { minX: 475, minY: 375, maxX: 602, maxY: 501 },
    right: { minX: 659, minY: 373, maxX: 784, maxY: 496 },
    top: { minX: 566, minY: 214, maxX: 692, maxY: 340 },
  },
  {
    left: { minX: 473, minY: 377, maxX: 600, maxY: 502 },
    right: { minX: 658, minY: 374, maxX: 782, maxY: 497 },
    top: { minX: 565, minY: 215, maxX: 690, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 599, maxY: 502 },
    right: { minX: 657, minY: 374, maxX: 781, maxY: 497 },
    top: { minX: 563, minY: 215, maxX: 689, maxY: 341 },
  },
  {
    left: { minX: 471, minY: 375, maxX: 598, maxY: 501 },
    right: { minX: 656, minY: 373, maxX: 780, maxY: 496 },
    top: { minX: 563, minY: 213, maxX: 688, maxY: 340 },
  },
  {
    left: { minX: 468, minY: 375, maxX: 596, maxY: 501 },
    right: { minX: 653, minY: 373, maxX: 778, maxY: 497 },
    top: { minX: 560, minY: 213, maxX: 686, maxY: 340 },
  },
  {
    left: { minX: 466, minY: 376, maxX: 593, maxY: 502 },
    right: { minX: 652, minY: 374, maxX: 776, maxY: 497 },
    top: { minX: 558, minY: 214, maxX: 684, maxY: 341 },
  },
  {
    left: { minX: 465, minY: 377, maxX: 592, maxY: 503 },
    right: { minX: 650, minY: 374, maxX: 774, maxY: 498 },
    top: { minX: 557, minY: 215, maxX: 682, maxY: 342 },
  },
  {
    left: { minX: 464, minY: 377, maxX: 592, maxY: 503 },
    right: { minX: 650, minY: 374, maxX: 774, maxY: 498 },
    top: { minX: 557, minY: 215, maxX: 682, maxY: 341 },
  },
  {
    left: { minX: 463, minY: 375, maxX: 592, maxY: 501 },
    right: { minX: 650, minY: 372, maxX: 774, maxY: 496 },
    top: { minX: 556, minY: 213, maxX: 682, maxY: 340 },
  },
  {
    left: { minX: 463, minY: 375, maxX: 591, maxY: 502 },
    right: { minX: 649, minY: 373, maxX: 773, maxY: 496 },
    top: { minX: 555, minY: 213, maxX: 681, maxY: 340 },
  },
  {
    left: { minX: 461, minY: 375, maxX: 589, maxY: 502 },
    right: { minX: 647, minY: 373, maxX: 771, maxY: 496 },
    top: { minX: 553, minY: 213, maxX: 680, maxY: 340 },
  },
  {
    left: { minX: 460, minY: 374, maxX: 588, maxY: 501 },
    right: { minX: 647, minY: 372, maxX: 771, maxY: 495 },
    top: { minX: 553, minY: 212, maxX: 679, maxY: 339 },
  },
  {
    left: { minX: 460, minY: 374, maxX: 588, maxY: 501 },
    right: { minX: 647, minY: 372, maxX: 771, maxY: 495 },
    top: { minX: 553, minY: 212, maxX: 679, maxY: 339 },
  },
  {
    left: { minX: 460, minY: 373, maxX: 588, maxY: 500 },
    right: { minX: 646, minY: 371, maxX: 770, maxY: 494 },
    top: { minX: 553, minY: 211, maxX: 678, maxY: 338 },
  },
  {
    left: { minX: 459, minY: 371, maxX: 588, maxY: 498 },
    right: { minX: 646, minY: 369, maxX: 770, maxY: 492 },
    top: { minX: 552, minY: 209, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 587, maxY: 497 },
    right: { minX: 646, minY: 368, maxX: 770, maxY: 492 },
    top: { minX: 552, minY: 208, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 587, maxY: 498 },
    right: { minX: 645, minY: 369, maxX: 769, maxY: 493 },
    top: { minX: 551, minY: 210, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 587, maxY: 498 },
    right: { minX: 645, minY: 370, maxX: 769, maxY: 493 },
    top: { minX: 551, minY: 210, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 460, minY: 372, maxX: 588, maxY: 499 },
    right: { minX: 646, minY: 370, maxX: 770, maxY: 493 },
    top: { minX: 552, minY: 210, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 588, maxY: 498 },
    right: { minX: 646, minY: 369, maxX: 770, maxY: 492 },
    top: { minX: 552, minY: 209, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 589, maxY: 497 },
    right: { minX: 647, minY: 369, maxX: 771, maxY: 492 },
    top: { minX: 553, minY: 208, maxX: 679, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 370, maxX: 589, maxY: 497 },
    right: { minX: 647, minY: 368, maxX: 771, maxY: 491 },
    top: { minX: 553, minY: 208, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 462, minY: 370, maxX: 590, maxY: 496 },
    right: { minX: 648, minY: 367, maxX: 772, maxY: 491 },
    top: { minX: 554, minY: 207, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 492 },
    top: { minX: 554, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 492 },
    top: { minX: 554, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 463, minY: 370, maxX: 590, maxY: 496 },
    right: { minX: 648, minY: 367, maxX: 772, maxY: 491 },
    top: { minX: 555, minY: 207, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 368, maxX: 771, maxY: 491 },
    top: { minX: 554, minY: 209, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 463, minY: 371, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 368, maxX: 771, maxY: 491 },
    top: { minX: 554, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 463, minY: 372, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 492 },
    top: { minX: 555, minY: 210, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 463, minY: 371, maxX: 591, maxY: 497 },
    right: { minX: 649, minY: 369, maxX: 772, maxY: 491 },
    top: { minX: 555, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 371, maxX: 591, maxY: 496 },
    right: { minX: 649, minY: 368, maxX: 772, maxY: 491 },
    top: { minX: 555, minY: 209, maxX: 681, maxY: 335 },
  },
  {
    left: { minX: 464, minY: 371, maxX: 592, maxY: 497 },
    right: { minX: 649, minY: 368, maxX: 773, maxY: 491 },
    top: { minX: 556, minY: 209, maxX: 681, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 371, maxX: 591, maxY: 497 },
    right: { minX: 649, minY: 369, maxX: 773, maxY: 491 },
    top: { minX: 555, minY: 210, maxX: 681, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 372, maxX: 591, maxY: 498 },
    right: { minX: 649, minY: 369, maxX: 773, maxY: 492 },
    top: { minX: 555, minY: 210, maxX: 681, maxY: 337 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 592, maxY: 499 },
    right: { minX: 650, minY: 370, maxX: 773, maxY: 493 },
    top: { minX: 556, minY: 211, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 464, minY: 374, maxX: 591, maxY: 500 },
    right: { minX: 649, minY: 371, maxX: 772, maxY: 494 },
    top: { minX: 555, minY: 213, maxX: 680, maxY: 339 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 592, maxY: 499 },
    right: { minX: 650, minY: 370, maxX: 773, maxY: 493 },
    top: { minX: 556, minY: 211, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 592, maxY: 498 },
    right: { minX: 650, minY: 370, maxX: 773, maxY: 492 },
    top: { minX: 555, minY: 211, maxX: 681, maxY: 337 },
  },
  {
    left: { minX: 465, minY: 372, maxX: 592, maxY: 497 },
    right: { minX: 650, minY: 368, maxX: 773, maxY: 491 },
    top: { minX: 556, minY: 210, maxX: 681, maxY: 336 },
  },
  {
    left: { minX: 466, minY: 370, maxX: 593, maxY: 496 },
    right: { minX: 651, minY: 367, maxX: 774, maxY: 490 },
    top: { minX: 557, minY: 209, maxX: 682, maxY: 335 },
  },
  {
    left: { minX: 466, minY: 369, maxX: 593, maxY: 495 },
    right: { minX: 651, minY: 367, maxX: 774, maxY: 489 },
    top: { minX: 557, minY: 208, maxX: 682, maxY: 334 },
  },
  {
    left: { minX: 466, minY: 369, maxX: 593, maxY: 495 },
    right: { minX: 651, minY: 366, maxX: 774, maxY: 489 },
    top: { minX: 557, minY: 208, maxX: 682, maxY: 334 },
  },
  {
    left: { minX: 466, minY: 368, maxX: 593, maxY: 493 },
    right: { minX: 650, minY: 365, maxX: 774, maxY: 488 },
    top: { minX: 557, minY: 206, maxX: 682, maxY: 332 },
  },
  {
    left: { minX: 466, minY: 367, maxX: 593, maxY: 492 },
    right: { minX: 651, minY: 364, maxX: 774, maxY: 487 },
    top: { minX: 557, minY: 205, maxX: 682, maxY: 332 },
  },
  {
    left: { minX: 466, minY: 366, maxX: 593, maxY: 492 },
    right: { minX: 651, minY: 364, maxX: 774, maxY: 487 },
    top: { minX: 557, minY: 205, maxX: 682, maxY: 331 },
  },
  {
    left: { minX: 466, minY: 365, maxX: 593, maxY: 490 },
    right: { minX: 651, minY: 362, maxX: 774, maxY: 485 },
    top: { minX: 557, minY: 203, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 466, minY: 365, maxX: 593, maxY: 490 },
    right: { minX: 650, minY: 362, maxX: 774, maxY: 485 },
    top: { minX: 557, minY: 203, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 593, maxY: 489 },
    right: { minX: 650, minY: 361, maxX: 774, maxY: 483 },
    top: { minX: 557, minY: 202, maxX: 682, maxY: 328 },
  },
  {
    left: { minX: 466, minY: 362, maxX: 593, maxY: 487 },
    right: { minX: 651, minY: 359, maxX: 774, maxY: 482 },
    top: { minX: 558, minY: 200, maxX: 683, maxY: 327 },
  },
  {
    left: { minX: 467, minY: 361, maxX: 593, maxY: 486 },
    right: { minX: 651, minY: 358, maxX: 775, maxY: 481 },
    top: { minX: 558, minY: 199, maxX: 683, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 360, maxX: 595, maxY: 485 },
    right: { minX: 653, minY: 357, maxX: 776, maxY: 480 },
    top: { minX: 559, minY: 198, maxX: 684, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 360, maxX: 596, maxY: 485 },
    right: { minX: 653, minY: 358, maxX: 777, maxY: 481 },
    top: { minX: 561, minY: 199, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 654, minY: 359, maxX: 777, maxY: 481 },
    top: { minX: 561, minY: 200, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 653, minY: 359, maxX: 777, maxY: 481 },
    top: { minX: 561, minY: 200, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 654, minY: 359, maxX: 778, maxY: 481 },
    top: { minX: 561, minY: 199, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 360, maxX: 596, maxY: 485 },
    right: { minX: 654, minY: 358, maxX: 778, maxY: 481 },
    top: { minX: 561, minY: 199, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 470, minY: 359, maxX: 596, maxY: 485 },
    right: { minX: 654, minY: 357, maxX: 778, maxY: 480 },
    top: { minX: 561, minY: 198, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 596, maxY: 485 },
    right: { minX: 654, minY: 357, maxX: 778, maxY: 480 },
    top: { minX: 561, minY: 198, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 596, maxY: 484 },
    right: { minX: 653, minY: 357, maxX: 778, maxY: 479 },
    top: { minX: 561, minY: 198, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 597, maxY: 483 },
    right: { minX: 655, minY: 356, maxX: 778, maxY: 478 },
    top: { minX: 561, minY: 197, maxX: 686, maxY: 323 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 597, maxY: 483 },
    right: { minX: 655, minY: 355, maxX: 778, maxY: 478 },
    top: { minX: 561, minY: 196, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 597, maxY: 482 },
    right: { minX: 655, minY: 355, maxX: 779, maxY: 477 },
    top: { minX: 562, minY: 195, maxX: 687, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 598, maxY: 481 },
    right: { minX: 655, minY: 353, maxX: 780, maxY: 476 },
    top: { minX: 562, minY: 193, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 598, maxY: 481 },
    right: { minX: 656, minY: 353, maxX: 780, maxY: 476 },
    top: { minX: 563, minY: 194, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 480 },
    right: { minX: 656, minY: 353, maxX: 780, maxY: 475 },
    top: { minX: 563, minY: 193, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 480 },
    right: { minX: 657, minY: 353, maxX: 781, maxY: 475 },
    top: { minX: 564, minY: 193, maxX: 689, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 599, maxY: 479 },
    right: { minX: 657, minY: 351, maxX: 780, maxY: 474 },
    top: { minX: 564, minY: 192, maxX: 689, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 600, maxY: 478 },
    right: { minX: 657, minY: 351, maxX: 781, maxY: 473 },
    top: { minX: 564, minY: 191, maxX: 690, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 600, maxY: 478 },
    right: { minX: 657, minY: 350, maxX: 781, maxY: 473 },
    top: { minX: 564, minY: 191, maxX: 690, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 600, maxY: 477 },
    right: { minX: 658, minY: 350, maxX: 782, maxY: 473 },
    top: { minX: 565, minY: 191, maxX: 690, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 600, maxY: 476 },
    right: { minX: 658, minY: 349, maxX: 782, maxY: 472 },
    top: { minX: 565, minY: 189, maxX: 690, maxY: 316 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 601, maxY: 475 },
    right: { minX: 659, minY: 349, maxX: 783, maxY: 471 },
    top: { minX: 566, minY: 189, maxX: 691, maxY: 315 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 601, maxY: 476 },
    right: { minX: 659, minY: 349, maxX: 783, maxY: 472 },
    top: { minX: 566, minY: 189, maxX: 692, maxY: 316 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 602, maxY: 476 },
    right: { minX: 659, minY: 349, maxX: 784, maxY: 472 },
    top: { minX: 567, minY: 189, maxX: 692, maxY: 316 },
  },
  {
    left: { minX: 476, minY: 351, maxX: 602, maxY: 476 },
    right: { minX: 660, minY: 349, maxX: 784, maxY: 472 },
    top: { minX: 567, minY: 189, maxX: 692, maxY: 316 },
  },
  {
    left: { minX: 476, minY: 350, maxX: 603, maxY: 475 },
    right: { minX: 661, minY: 349, maxX: 785, maxY: 471 },
    top: { minX: 568, minY: 189, maxX: 693, maxY: 315 },
  },
  {
    left: { minX: 478, minY: 350, maxX: 604, maxY: 475 },
    right: { minX: 662, minY: 349, maxX: 786, maxY: 471 },
    top: { minX: 569, minY: 189, maxX: 694, maxY: 315 },
  },
  {
    left: { minX: 478, minY: 351, maxX: 604, maxY: 476 },
    right: { minX: 661, minY: 350, maxX: 786, maxY: 472 },
    top: { minX: 569, minY: 189, maxX: 694, maxY: 316 },
  },
  {
    left: { minX: 478, minY: 352, maxX: 605, maxY: 477 },
    right: { minX: 662, minY: 351, maxX: 786, maxY: 473 },
    top: { minX: 570, minY: 191, maxX: 695, maxY: 317 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 606, maxY: 478 },
    right: { minX: 664, minY: 351, maxX: 788, maxY: 474 },
    top: { minX: 571, minY: 191, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 481, minY: 354, maxX: 607, maxY: 478 },
    right: { minX: 665, minY: 352, maxX: 789, maxY: 475 },
    top: { minX: 573, minY: 193, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 482, minY: 354, maxX: 608, maxY: 479 },
    right: { minX: 665, minY: 353, maxX: 790, maxY: 475 },
    top: { minX: 573, minY: 193, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 609, maxY: 479 },
    right: { minX: 667, minY: 353, maxX: 791, maxY: 475 },
    top: { minX: 575, minY: 193, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 354, maxX: 610, maxY: 479 },
    right: { minX: 667, minY: 353, maxX: 791, maxY: 475 },
    top: { minX: 575, minY: 193, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 484, minY: 354, maxX: 610, maxY: 479 },
    right: { minX: 668, minY: 352, maxX: 792, maxY: 475 },
    top: { minX: 576, minY: 193, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 611, maxY: 479 },
    right: { minX: 668, minY: 353, maxX: 792, maxY: 475 },
    top: { minX: 576, minY: 193, maxX: 701, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 611, maxY: 479 },
    right: { minX: 668, minY: 353, maxX: 792, maxY: 475 },
    top: { minX: 577, minY: 194, maxX: 701, maxY: 320 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 612, maxY: 479 },
    right: { minX: 669, minY: 353, maxX: 794, maxY: 476 },
    top: { minX: 577, minY: 194, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 613, maxY: 478 },
    right: { minX: 670, minY: 352, maxX: 794, maxY: 475 },
    top: { minX: 578, minY: 193, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 612, maxY: 478 },
    right: { minX: 670, minY: 352, maxX: 794, maxY: 475 },
    top: { minX: 578, minY: 193, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 612, maxY: 478 },
    right: { minX: 670, minY: 352, maxX: 794, maxY: 475 },
    top: { minX: 578, minY: 193, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 478 },
    right: { minX: 671, minY: 352, maxX: 795, maxY: 474 },
    top: { minX: 579, minY: 193, maxX: 703, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 671, minY: 351, maxX: 795, maxY: 474 },
    top: { minX: 579, minY: 191, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 614, maxY: 478 },
    right: { minX: 671, minY: 351, maxX: 795, maxY: 474 },
    top: { minX: 579, minY: 192, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 614, maxY: 478 },
    right: { minX: 672, minY: 351, maxX: 796, maxY: 475 },
    top: { minX: 580, minY: 192, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 672, minY: 351, maxX: 797, maxY: 474 },
    top: { minX: 581, minY: 192, maxX: 706, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 672, minY: 351, maxX: 798, maxY: 474 },
    top: { minX: 581, minY: 192, maxX: 706, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 615, maxY: 476 },
    right: { minX: 673, minY: 350, maxX: 797, maxY: 473 },
    top: { minX: 580, minY: 191, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 615, maxY: 477 },
    right: { minX: 672, minY: 350, maxX: 797, maxY: 473 },
    top: { minX: 580, minY: 191, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 614, maxY: 477 },
    right: { minX: 672, minY: 351, maxX: 796, maxY: 474 },
    top: { minX: 579, minY: 192, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 614, maxY: 478 },
    right: { minX: 672, minY: 351, maxX: 796, maxY: 474 },
    top: { minX: 579, minY: 192, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 614, maxY: 478 },
    right: { minX: 672, minY: 352, maxX: 796, maxY: 475 },
    top: { minX: 580, minY: 193, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 614, maxY: 479 },
    right: { minX: 671, minY: 352, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 193, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 614, maxY: 479 },
    right: { minX: 671, minY: 352, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 193, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 614, maxY: 479 },
    right: { minX: 671, minY: 353, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 194, maxX: 703, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 614, maxY: 479 },
    right: { minX: 671, minY: 353, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 193, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 355, maxX: 614, maxY: 479 },
    right: { minX: 672, minY: 353, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 194, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 613, maxY: 480 },
    right: { minX: 671, minY: 353, maxX: 795, maxY: 476 },
    top: { minX: 578, minY: 195, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 613, maxY: 481 },
    right: { minX: 670, minY: 355, maxX: 794, maxY: 477 },
    top: { minX: 578, minY: 197, maxX: 702, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 358, maxX: 613, maxY: 482 },
    right: { minX: 670, minY: 356, maxX: 794, maxY: 478 },
    top: { minX: 577, minY: 198, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 359, maxX: 611, maxY: 483 },
    right: { minX: 668, minY: 357, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 199, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 484, minY: 360, maxX: 610, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 200, maxX: 698, maxY: 325 },
  },
  {
    left: { minX: 484, minY: 360, maxX: 609, maxY: 484 },
    right: { minX: 666, minY: 358, maxX: 790, maxY: 480 },
    top: { minX: 574, minY: 200, maxX: 698, maxY: 325 },
  },
  {
    left: { minX: 484, minY: 361, maxX: 609, maxY: 485 },
    right: { minX: 666, minY: 358, maxX: 790, maxY: 480 },
    top: { minX: 574, minY: 201, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 484, minY: 361, maxX: 610, maxY: 485 },
    right: { minX: 667, minY: 358, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 201, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 485, minY: 361, maxX: 610, maxY: 485 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 201, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 576, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 699, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 485 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 485 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 609, maxY: 486 },
    right: { minX: 666, minY: 360, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 576, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 610, maxY: 486 },
    right: { minX: 668, minY: 360, maxX: 790, maxY: 482 },
    top: { minX: 576, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 611, maxY: 486 },
    right: { minX: 668, minY: 361, maxX: 791, maxY: 482 },
    top: { minX: 576, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 611, maxY: 487 },
    right: { minX: 668, minY: 361, maxX: 791, maxY: 483 },
    top: { minX: 576, minY: 204, maxX: 699, maxY: 329 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 611, maxY: 487 },
    right: { minX: 668, minY: 361, maxX: 791, maxY: 483 },
    top: { minX: 577, minY: 204, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 612, maxY: 487 },
    right: { minX: 668, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 204, maxX: 700, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 611, maxY: 487 },
    right: { minX: 668, minY: 361, maxX: 791, maxY: 483 },
    top: { minX: 577, minY: 204, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 364, maxX: 612, maxY: 487 },
    right: { minX: 669, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 205, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 364, maxX: 612, maxY: 487 },
    right: { minX: 669, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 205, maxX: 701, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 364, maxX: 612, maxY: 487 },
    right: { minX: 669, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 205, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 363, maxX: 612, maxY: 486 },
    right: { minX: 669, minY: 361, maxX: 792, maxY: 482 },
    top: { minX: 577, minY: 204, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 363, maxX: 612, maxY: 486 },
    right: { minX: 669, minY: 360, maxX: 792, maxY: 482 },
    top: { minX: 577, minY: 204, maxX: 700, maxY: 328 },
  },
  {
    left: { minX: 488, minY: 363, maxX: 613, maxY: 486 },
    right: { minX: 670, minY: 360, maxX: 792, maxY: 482 },
    top: { minX: 577, minY: 204, maxX: 700, maxY: 328 },
  },
  {
    left: { minX: 488, minY: 363, maxX: 612, maxY: 486 },
    right: { minX: 669, minY: 360, maxX: 792, maxY: 481 },
    top: { minX: 577, minY: 203, maxX: 700, maxY: 328 },
  },
  {
    left: { minX: 488, minY: 362, maxX: 612, maxY: 485 },
    right: { minX: 669, minY: 359, maxX: 792, maxY: 480 },
    top: { minX: 577, minY: 203, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 487, minY: 361, maxX: 612, maxY: 484 },
    right: { minX: 669, minY: 357, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 201, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 487, minY: 360, maxX: 612, maxY: 484 },
    right: { minX: 669, minY: 357, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 201, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 487, minY: 359, maxX: 612, maxY: 483 },
    right: { minX: 669, minY: 356, maxX: 792, maxY: 478 },
    top: { minX: 576, minY: 199, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 487, minY: 359, maxX: 612, maxY: 482 },
    right: { minX: 669, minY: 355, maxX: 792, maxY: 477 },
    top: { minX: 576, minY: 199, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 487, minY: 358, maxX: 612, maxY: 482 },
    right: { minX: 669, minY: 355, maxX: 793, maxY: 477 },
    top: { minX: 576, minY: 198, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 612, maxY: 481 },
    right: { minX: 669, minY: 353, maxX: 792, maxY: 475 },
    top: { minX: 575, minY: 197, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 611, maxY: 480 },
    right: { minX: 668, minY: 352, maxX: 792, maxY: 474 },
    top: { minX: 574, minY: 195, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 485, minY: 356, maxX: 610, maxY: 480 },
    right: { minX: 667, minY: 351, maxX: 791, maxY: 474 },
    top: { minX: 573, minY: 195, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 356, maxX: 610, maxY: 479 },
    right: { minX: 667, minY: 351, maxX: 791, maxY: 473 },
    top: { minX: 573, minY: 195, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 356, maxX: 610, maxY: 480 },
    right: { minX: 668, minY: 352, maxX: 791, maxY: 474 },
    top: { minX: 573, minY: 195, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 486, minY: 357, maxX: 611, maxY: 480 },
    right: { minX: 668, minY: 352, maxX: 791, maxY: 474 },
    top: { minX: 574, minY: 195, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 611, maxY: 479 },
    right: { minX: 668, minY: 352, maxX: 791, maxY: 474 },
    top: { minX: 574, minY: 195, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 356, maxX: 611, maxY: 479 },
    right: { minX: 668, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 575, minY: 195, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 611, maxY: 478 },
    right: { minX: 668, minY: 351, maxX: 791, maxY: 473 },
    top: { minX: 575, minY: 195, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 611, maxY: 478 },
    right: { minX: 668, minY: 350, maxX: 791, maxY: 472 },
    top: { minX: 575, minY: 194, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 575, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 700, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 477 },
    right: { minX: 669, minY: 351, maxX: 791, maxY: 472 },
    top: { minX: 575, minY: 194, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 791, maxY: 473 },
    top: { minX: 576, minY: 196, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 356, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 196, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 791, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 477 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 472 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 477 },
    right: { minX: 669, minY: 351, maxX: 791, maxY: 471 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 612, maxY: 477 },
    right: { minX: 668, minY: 350, maxX: 791, maxY: 471 },
    top: { minX: 576, minY: 194, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 354, maxX: 612, maxY: 476 },
    right: { minX: 668, minY: 350, maxX: 791, maxY: 471 },
    top: { minX: 575, minY: 194, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 611, maxY: 477 },
    right: { minX: 668, minY: 349, maxX: 791, maxY: 471 },
    top: { minX: 575, minY: 193, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 611, maxY: 476 },
    right: { minX: 668, minY: 349, maxX: 790, maxY: 471 },
    top: { minX: 575, minY: 194, maxX: 698, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 611, maxY: 477 },
    right: { minX: 667, minY: 349, maxX: 790, maxY: 471 },
    top: { minX: 574, minY: 194, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 610, maxY: 477 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 471 },
    top: { minX: 573, minY: 194, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 475 },
    right: { minX: 667, minY: 348, maxX: 789, maxY: 469 },
    top: { minX: 573, minY: 192, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 469 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 574, minY: 194, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 573, minY: 195, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 574, minY: 195, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 475 },
    right: { minX: 667, minY: 348, maxX: 789, maxY: 469 },
    top: { minX: 574, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 610, maxY: 474 },
    right: { minX: 667, minY: 347, maxX: 789, maxY: 468 },
    top: { minX: 574, minY: 192, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 610, maxY: 474 },
    right: { minX: 666, minY: 347, maxX: 788, maxY: 467 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 610, maxY: 474 },
    right: { minX: 666, minY: 347, maxX: 788, maxY: 467 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 475 },
    right: { minX: 666, minY: 348, maxX: 788, maxY: 468 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 609, maxY: 475 },
    right: { minX: 665, minY: 348, maxX: 787, maxY: 469 },
    top: { minX: 572, minY: 193, maxX: 694, maxY: 317 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 608, maxY: 475 },
    right: { minX: 665, minY: 349, maxX: 786, maxY: 469 },
    top: { minX: 571, minY: 194, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 608, maxY: 476 },
    right: { minX: 665, minY: 349, maxX: 786, maxY: 469 },
    top: { minX: 572, minY: 195, maxX: 694, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 609, maxY: 477 },
    right: { minX: 665, minY: 350, maxX: 786, maxY: 470 },
    top: { minX: 572, minY: 196, maxX: 694, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 477 },
    right: { minX: 665, minY: 351, maxX: 786, maxY: 471 },
    top: { minX: 572, minY: 197, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 478 },
    right: { minX: 665, minY: 351, maxX: 786, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 478 },
    right: { minX: 665, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 478 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 357, maxX: 609, maxY: 478 },
    right: { minX: 665, minY: 352, maxX: 786, maxY: 472 },
    top: { minX: 573, minY: 198, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 666, minY: 352, maxX: 787, maxY: 472 },
    top: { minX: 573, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 666, minY: 352, maxX: 787, maxY: 472 },
    top: { minX: 573, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 666, minY: 352, maxX: 788, maxY: 471 },
    top: { minX: 573, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 666, minY: 351, maxX: 788, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 611, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 788, maxY: 470 },
    top: { minX: 574, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 470 },
    top: { minX: 573, minY: 198, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 470 },
    top: { minX: 573, minY: 198, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 610, maxY: 476 },
    right: { minX: 666, minY: 350, maxX: 787, maxY: 469 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 611, maxY: 475 },
    right: { minX: 667, minY: 349, maxX: 788, maxY: 468 },
    top: { minX: 574, minY: 196, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 489, minY: 355, maxX: 611, maxY: 476 },
    right: { minX: 667, minY: 350, maxX: 788, maxY: 469 },
    top: { minX: 575, minY: 197, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 612, maxY: 475 },
    right: { minX: 667, minY: 349, maxX: 788, maxY: 468 },
    top: { minX: 575, minY: 195, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 612, maxY: 473 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 466 },
    top: { minX: 575, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 611, maxY: 473 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 466 },
    top: { minX: 575, minY: 193, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 611, maxY: 473 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 466 },
    top: { minX: 575, minY: 194, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 611, maxY: 472 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 466 },
    top: { minX: 574, minY: 193, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 490, minY: 351, maxX: 611, maxY: 471 },
    right: { minX: 667, minY: 346, maxX: 788, maxY: 465 },
    top: { minX: 575, minY: 193, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 489, minY: 350, maxX: 611, maxY: 470 },
    right: { minX: 667, minY: 345, maxX: 788, maxY: 464 },
    top: { minX: 575, minY: 191, maxX: 696, maxY: 314 },
  },
  {
    left: { minX: 490, minY: 349, maxX: 612, maxY: 469 },
    right: { minX: 667, minY: 344, maxX: 788, maxY: 463 },
    top: { minX: 575, minY: 191, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 490, minY: 349, maxX: 611, maxY: 469 },
    right: { minX: 667, minY: 344, maxX: 788, maxY: 463 },
    top: { minX: 575, minY: 191, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 491, minY: 348, maxX: 613, maxY: 469 },
    right: { minX: 668, minY: 344, maxX: 789, maxY: 463 },
    top: { minX: 577, minY: 190, maxX: 698, maxY: 313 },
  },
  {
    left: { minX: 491, minY: 348, maxX: 613, maxY: 468 },
    right: { minX: 669, minY: 343, maxX: 789, maxY: 462 },
    top: { minX: 577, minY: 190, maxX: 698, maxY: 313 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 612, maxY: 467 },
    right: { minX: 668, minY: 342, maxX: 788, maxY: 461 },
    top: { minX: 577, minY: 189, maxX: 698, maxY: 311 },
  },
  {
    left: { minX: 492, minY: 346, maxX: 613, maxY: 467 },
    right: { minX: 669, minY: 342, maxX: 789, maxY: 461 },
    top: { minX: 577, minY: 189, maxX: 698, maxY: 311 },
  },
  {
    left: { minX: 492, minY: 347, maxX: 613, maxY: 467 },
    right: { minX: 668, minY: 343, maxX: 789, maxY: 461 },
    top: { minX: 577, minY: 189, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 347, maxX: 614, maxY: 467 },
    right: { minX: 669, minY: 343, maxX: 789, maxY: 461 },
    top: { minX: 578, minY: 189, maxX: 699, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 346, maxX: 613, maxY: 466 },
    right: { minX: 669, minY: 343, maxX: 789, maxY: 461 },
    top: { minX: 578, minY: 189, maxX: 699, maxY: 312 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 612, maxY: 467 },
    right: { minX: 668, minY: 343, maxX: 788, maxY: 461 },
    top: { minX: 577, minY: 190, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 490, minY: 347, maxX: 611, maxY: 467 },
    right: { minX: 666, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 576, minY: 190, maxX: 696, maxY: 312 },
  },
  {
    left: { minX: 489, minY: 347, maxX: 610, maxY: 467 },
    right: { minX: 666, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 575, minY: 190, maxX: 696, maxY: 312 },
  },
  {
    left: { minX: 488, minY: 348, maxX: 609, maxY: 467 },
    right: { minX: 665, minY: 343, maxX: 784, maxY: 461 },
    top: { minX: 573, minY: 191, maxX: 694, maxY: 313 },
  },
  {
    left: { minX: 487, minY: 348, maxX: 609, maxY: 467 },
    right: { minX: 664, minY: 344, maxX: 784, maxY: 462 },
    top: { minX: 573, minY: 191, maxX: 694, maxY: 313 },
  },
  {
    left: { minX: 487, minY: 345, maxX: 608, maxY: 465 },
    right: { minX: 664, minY: 341, maxX: 783, maxY: 459 },
    top: { minX: 573, minY: 187, maxX: 693, maxY: 310 },
  },
  {
    left: { minX: 489, minY: 344, maxX: 610, maxY: 464 },
    right: { minX: 665, minY: 340, maxX: 785, maxY: 458 },
    top: { minX: 575, minY: 187, maxX: 695, maxY: 309 },
  },
  {
    left: { minX: 489, minY: 344, maxX: 609, maxY: 464 },
    right: { minX: 665, minY: 341, maxX: 784, maxY: 459 },
    top: { minX: 575, minY: 187, maxX: 695, maxY: 310 },
  },
  {
    left: { minX: 491, minY: 345, maxX: 611, maxY: 465 },
    right: { minX: 667, minY: 342, maxX: 786, maxY: 460 },
    top: { minX: 577, minY: 189, maxX: 697, maxY: 311 },
  },
  {
    left: { minX: 491, minY: 345, maxX: 611, maxY: 465 },
    right: { minX: 667, minY: 342, maxX: 786, maxY: 460 },
    top: { minX: 577, minY: 189, maxX: 697, maxY: 311 },
  },
  {
    left: { minX: 491, minY: 345, maxX: 612, maxY: 465 },
    right: { minX: 667, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 578, minY: 190, maxX: 698, maxY: 311 },
  },
  {
    left: { minX: 491, minY: 346, maxX: 612, maxY: 465 },
    right: { minX: 667, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 578, minY: 191, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 346, maxX: 612, maxY: 465 },
    right: { minX: 667, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 578, minY: 190, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 345, maxX: 613, maxY: 464 },
    right: { minX: 668, minY: 342, maxX: 787, maxY: 459 },
    top: { minX: 579, minY: 189, maxX: 699, maxY: 311 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 613, maxY: 462 },
    right: { minX: 668, minY: 340, maxX: 787, maxY: 457 },
    top: { minX: 579, minY: 187, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 613, maxY: 461 },
    right: { minX: 668, minY: 340, maxX: 787, maxY: 457 },
    top: { minX: 578, minY: 187, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 612, maxY: 462 },
    right: { minX: 667, minY: 340, maxX: 786, maxY: 457 },
    top: { minX: 578, minY: 187, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 612, maxY: 462 },
    right: { minX: 667, minY: 341, maxX: 786, maxY: 457 },
    top: { minX: 578, minY: 188, maxX: 698, maxY: 310 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 612, maxY: 461 },
    right: { minX: 667, minY: 340, maxX: 786, maxY: 457 },
    top: { minX: 578, minY: 187, maxX: 697, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 341, maxX: 613, maxY: 459 },
    right: { minX: 667, minY: 338, maxX: 786, maxY: 455 },
    top: { minX: 578, minY: 185, maxX: 698, maxY: 307 },
  },
  {
    left: { minX: 493, minY: 341, maxX: 613, maxY: 459 },
    right: { minX: 668, minY: 337, maxX: 786, maxY: 455 },
    top: { minX: 579, minY: 185, maxX: 698, maxY: 307 },
  },
  {
    left: { minX: 493, minY: 340, maxX: 613, maxY: 458 },
    right: { minX: 668, minY: 337, maxX: 786, maxY: 454 },
    top: { minX: 579, minY: 185, maxX: 698, maxY: 306 },
  },
  {
    left: { minX: 493, minY: 339, maxX: 613, maxY: 458 },
    right: { minX: 668, minY: 337, maxX: 786, maxY: 453 },
    top: { minX: 579, minY: 184, maxX: 698, maxY: 305 },
  },
  {
    left: { minX: 494, minY: 339, maxX: 613, maxY: 458 },
    right: { minX: 668, minY: 337, maxX: 786, maxY: 453 },
    top: { minX: 579, minY: 184, maxX: 699, maxY: 306 },
  },
  {
    left: { minX: 495, minY: 341, maxX: 614, maxY: 459 },
    right: { minX: 669, minY: 339, maxX: 787, maxY: 455 },
    top: { minX: 581, minY: 187, maxX: 700, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 342, maxX: 614, maxY: 460 },
    right: { minX: 669, minY: 340, maxX: 787, maxY: 456 },
    top: { minX: 581, minY: 188, maxX: 700, maxY: 309 },
  },
  {
    left: { minX: 494, minY: 342, maxX: 614, maxY: 460 },
    right: { minX: 668, minY: 340, maxX: 786, maxY: 456 },
    top: { minX: 581, minY: 188, maxX: 700, maxY: 309 },
  },
  {
    left: { minX: 494, minY: 342, maxX: 614, maxY: 460 },
    right: { minX: 668, minY: 340, maxX: 786, maxY: 456 },
    top: { minX: 580, minY: 188, maxX: 699, maxY: 309 },
  },
  {
    left: { minX: 493, minY: 342, maxX: 613, maxY: 460 },
    right: { minX: 667, minY: 340, maxX: 785, maxY: 456 },
    top: { minX: 579, minY: 188, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 611, maxY: 461 },
    right: { minX: 665, minY: 341, maxX: 783, maxY: 457 },
    top: { minX: 578, minY: 189, maxX: 697, maxY: 309 },
  },
  {
    left: { minX: 491, minY: 342, maxX: 610, maxY: 460 },
    right: { minX: 665, minY: 340, maxX: 782, maxY: 457 },
    top: { minX: 577, minY: 189, maxX: 696, maxY: 309 },
  },
  {
    left: { minX: 490, minY: 342, maxX: 610, maxY: 460 },
    right: { minX: 664, minY: 339, maxX: 782, maxY: 455 },
    top: { minX: 576, minY: 187, maxX: 695, maxY: 308 },
  },
  {
    left: { minX: 489, minY: 340, maxX: 609, maxY: 458 },
    right: { minX: 663, minY: 337, maxX: 781, maxY: 453 },
    top: { minX: 575, minY: 186, maxX: 694, maxY: 306 },
  },
  {
    left: { minX: 490, minY: 341, maxX: 609, maxY: 459 },
    right: { minX: 664, minY: 339, maxX: 781, maxY: 454 },
    top: { minX: 575, minY: 187, maxX: 694, maxY: 307 },
  },
  {
    left: { minX: 489, minY: 342, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 455 },
    top: { minX: 575, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 490, minY: 341, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 455 },
    top: { minX: 576, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 490, minY: 342, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 340, maxX: 780, maxY: 455 },
    top: { minX: 576, minY: 189, maxX: 694, maxY: 309 },
  },
  {
    left: { minX: 490, minY: 342, maxX: 609, maxY: 460 },
    right: { minX: 663, minY: 340, maxX: 780, maxY: 456 },
    top: { minX: 576, minY: 189, maxX: 694, maxY: 309 },
  },
  {
    left: { minX: 490, minY: 341, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 455 },
    top: { minX: 576, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 489, minY: 340, maxX: 608, maxY: 458 },
    right: { minX: 662, minY: 338, maxX: 779, maxY: 453 },
    top: { minX: 575, minY: 187, maxX: 693, maxY: 307 },
  },
  {
    left: { minX: 489, minY: 341, maxX: 608, maxY: 458 },
    right: { minX: 662, minY: 339, maxX: 779, maxY: 454 },
    top: { minX: 575, minY: 188, maxX: 692, maxY: 308 },
  },
  {
    left: { minX: 489, minY: 341, maxX: 608, maxY: 458 },
    right: { minX: 662, minY: 339, maxX: 778, maxY: 454 },
    top: { minX: 574, minY: 189, maxX: 692, maxY: 308 },
  },
  {
    left: { minX: 490, minY: 339, maxX: 609, maxY: 456 },
    right: { minX: 663, minY: 337, maxX: 779, maxY: 452 },
    top: { minX: 575, minY: 186, maxX: 693, maxY: 306 },
  },
  {
    left: { minX: 491, minY: 339, maxX: 609, maxY: 456 },
    right: { minX: 663, minY: 337, maxX: 779, maxY: 452 },
    top: { minX: 576, minY: 187, maxX: 694, maxY: 306 },
  },
  {
    left: { minX: 491, minY: 340, maxX: 610, maxY: 457 },
    right: { minX: 663, minY: 338, maxX: 779, maxY: 453 },
    top: { minX: 576, minY: 187, maxX: 694, maxY: 307 },
  },
  {
    left: { minX: 492, minY: 341, maxX: 610, maxY: 457 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 453 },
    top: { minX: 577, minY: 189, maxX: 695, maxY: 308 },
  },
  {
    left: { minX: 492, minY: 339, maxX: 610, maxY: 456 },
    right: { minX: 664, minY: 337, maxX: 780, maxY: 452 },
    top: { minX: 577, minY: 187, maxX: 695, maxY: 307 },
  },
  {
    left: { minX: 492, minY: 339, maxX: 610, maxY: 456 },
    right: { minX: 663, minY: 338, maxX: 779, maxY: 452 },
    top: { minX: 577, minY: 187, maxX: 694, maxY: 307 },
  },
  {
    left: { minX: 491, minY: 340, maxX: 609, maxY: 457 },
    right: { minX: 663, minY: 338, maxX: 779, maxY: 453 },
    top: { minX: 576, minY: 189, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 492, minY: 341, maxX: 610, maxY: 457 },
    right: { minX: 663, minY: 339, maxX: 779, maxY: 453 },
    top: { minX: 577, minY: 189, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 493, minY: 340, maxX: 611, maxY: 455 },
    right: { minX: 664, minY: 337, maxX: 780, maxY: 451 },
    top: { minX: 577, minY: 188, maxX: 695, maxY: 307 },
  },
  {
    left: { minX: 494, minY: 341, maxX: 611, maxY: 457 },
    right: { minX: 664, minY: 339, maxX: 780, maxY: 453 },
    top: { minX: 579, minY: 190, maxX: 695, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 341, maxX: 612, maxY: 457 },
    right: { minX: 665, minY: 339, maxX: 780, maxY: 453 },
    top: { minX: 579, minY: 190, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 340, maxX: 612, maxY: 456 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 452 },
    top: { minX: 579, minY: 189, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 338, maxX: 612, maxY: 454 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 579, minY: 187, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 495, minY: 338, maxX: 612, maxY: 454 },
    right: { minX: 666, minY: 337, maxX: 781, maxY: 450 },
    top: { minX: 580, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 666, minY: 339, maxX: 781, maxY: 452 },
    top: { minX: 581, minY: 190, maxX: 697, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 339, maxX: 612, maxY: 454 },
    right: { minX: 665, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 579, minY: 189, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 339, maxX: 612, maxY: 454 },
    right: { minX: 665, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 339, maxX: 613, maxY: 454 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 450 },
    top: { minX: 580, minY: 190, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 666, minY: 339, maxX: 780, maxY: 451 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 497, minY: 338, maxX: 614, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 781, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 697, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 612, maxY: 455 },
    right: { minX: 665, minY: 339, maxX: 779, maxY: 451 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 497, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 666, minY: 339, maxX: 779, maxY: 451 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 612, maxY: 455 },
    right: { minX: 665, minY: 339, maxX: 779, maxY: 451 },
    top: { minX: 580, minY: 191, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 497, minY: 339, maxX: 613, maxY: 454 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 339, maxX: 612, maxY: 454 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 190, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 497, minY: 339, maxX: 613, maxY: 454 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 497, minY: 339, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 189, maxX: 697, maxY: 307 },
  },
  {
    left: { minX: 497, minY: 339, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 339, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 449 },
    top: { minX: 579, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 495, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 448 },
    top: { minX: 579, minY: 187, maxX: 695, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 449 },
    top: { minX: 579, minY: 188, maxX: 695, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 449 },
    top: { minX: 579, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 337, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 495, minY: 338, maxX: 611, maxY: 452 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 449 },
    top: { minX: 579, minY: 187, maxX: 695, maxY: 305 },
  },
  {
    left: { minX: 495, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 448 },
    top: { minX: 579, minY: 188, maxX: 695, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 666, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 666, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 665, minY: 335, maxX: 780, maxY: 448 },
    top: { minX: 580, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 336, maxX: 613, maxY: 451 },
    right: { minX: 666, minY: 335, maxX: 780, maxY: 448 },
    top: { minX: 581, minY: 187, maxX: 697, maxY: 304 },
  },
  {
    left: { minX: 497, minY: 336, maxX: 613, maxY: 451 },
    right: { minX: 666, minY: 335, maxX: 780, maxY: 448 },
    top: { minX: 581, minY: 187, maxX: 697, maxY: 304 },
  },
  {
    left: { minX: 497, minY: 337, maxX: 614, maxY: 452 },
    right: { minX: 667, minY: 335, maxX: 781, maxY: 448 },
    top: { minX: 581, minY: 187, maxX: 698, maxY: 305 },
  },
  {
    left: { minX: 498, minY: 337, maxX: 615, maxY: 452 },
    right: { minX: 668, minY: 336, maxX: 782, maxY: 449 },
    top: { minX: 583, minY: 187, maxX: 699, maxY: 305 },
  },
  {
    left: { minX: 499, minY: 337, maxX: 615, maxY: 452 },
    right: { minX: 668, minY: 336, maxX: 783, maxY: 449 },
    top: { minX: 583, minY: 187, maxX: 700, maxY: 305 },
  },
  {
    left: { minX: 499, minY: 337, maxX: 616, maxY: 452 },
    right: { minX: 668, minY: 336, maxX: 783, maxY: 449 },
    top: { minX: 584, minY: 188, maxX: 700, maxY: 306 },
  },
  {
    left: { minX: 499, minY: 339, maxX: 616, maxY: 454 },
    right: { minX: 669, minY: 338, maxX: 784, maxY: 451 },
    top: { minX: 585, minY: 189, maxX: 700, maxY: 307 },
  },
  {
    left: { minX: 500, minY: 342, maxX: 616, maxY: 457 },
    right: { minX: 669, minY: 340, maxX: 784, maxY: 453 },
    top: { minX: 584, minY: 192, maxX: 700, maxY: 310 },
  },
  {
    left: { minX: 500, minY: 345, maxX: 616, maxY: 460 },
    right: { minX: 669, minY: 343, maxX: 784, maxY: 456 },
    top: { minX: 584, minY: 195, maxX: 700, maxY: 313 },
  },
  {
    left: { minX: 500, minY: 345, maxX: 617, maxY: 460 },
    right: { minX: 670, minY: 344, maxX: 784, maxY: 457 },
    top: { minX: 585, minY: 195, maxX: 700, maxY: 313 },
  },
  {
    left: { minX: 500, minY: 347, maxX: 617, maxY: 463 },
    right: { minX: 670, minY: 345, maxX: 784, maxY: 458 },
    top: { minX: 584, minY: 197, maxX: 700, maxY: 315 },
  },
  {
    left: { minX: 501, minY: 348, maxX: 617, maxY: 463 },
    right: { minX: 670, minY: 346, maxX: 784, maxY: 459 },
    top: { minX: 585, minY: 199, maxX: 700, maxY: 316 },
  },
  {
    left: { minX: 501, minY: 349, maxX: 617, maxY: 464 },
    right: { minX: 670, minY: 347, maxX: 784, maxY: 460 },
    top: { minX: 585, minY: 199, maxX: 700, maxY: 317 },
  },
  {
    left: { minX: 501, minY: 351, maxX: 617, maxY: 466 },
    right: { minX: 670, minY: 349, maxX: 784, maxY: 462 },
    top: { minX: 585, minY: 201, maxX: 700, maxY: 318 },
  },
  {
    left: { minX: 502, minY: 351, maxX: 619, maxY: 467 },
    right: { minX: 672, minY: 349, maxX: 786, maxY: 462 },
    top: { minX: 586, minY: 201, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 504, minY: 351, maxX: 620, maxY: 466 },
    right: { minX: 673, minY: 349, maxX: 788, maxY: 463 },
    top: { minX: 587, minY: 201, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 505, minY: 352, maxX: 621, maxY: 467 },
    right: { minX: 674, minY: 350, maxX: 789, maxY: 463 },
    top: { minX: 588, minY: 202, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 623, maxY: 468 },
    right: { minX: 676, minY: 351, maxX: 791, maxY: 464 },
    top: { minX: 590, minY: 203, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 509, minY: 353, maxX: 625, maxY: 468 },
    right: { minX: 678, minY: 351, maxX: 793, maxY: 465 },
    top: { minX: 593, minY: 203, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 513, minY: 354, maxX: 629, maxY: 469 },
    right: { minX: 681, minY: 352, maxX: 797, maxY: 466 },
    top: { minX: 596, minY: 204, maxX: 713, maxY: 322 },
  },
  {
    left: { minX: 516, minY: 355, maxX: 632, maxY: 469 },
    right: { minX: 685, minY: 353, maxX: 801, maxY: 466 },
    top: { minX: 599, minY: 205, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 519, minY: 354, maxX: 634, maxY: 469 },
    right: { minX: 688, minY: 352, maxX: 803, maxY: 465 },
    top: { minX: 601, minY: 203, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 521, minY: 354, maxX: 636, maxY: 469 },
    right: { minX: 690, minY: 352, maxX: 806, maxY: 466 },
    top: { minX: 604, minY: 203, maxX: 721, maxY: 321 },
  },
  {
    left: { minX: 522, minY: 355, maxX: 638, maxY: 470 },
    right: { minX: 692, minY: 353, maxX: 808, maxY: 467 },
    top: { minX: 605, minY: 204, maxX: 723, maxY: 322 },
  },
  {
    left: { minX: 524, minY: 356, maxX: 640, maxY: 471 },
    right: { minX: 694, minY: 353, maxX: 810, maxY: 469 },
    top: { minX: 607, minY: 205, maxX: 725, maxY: 324 },
  },
  {
    left: { minX: 525, minY: 358, maxX: 641, maxY: 474 },
    right: { minX: 695, minY: 357, maxX: 812, maxY: 471 },
    top: { minX: 609, minY: 207, maxX: 726, maxY: 326 },
  },
  {
    left: { minX: 526, minY: 361, maxX: 642, maxY: 476 },
    right: { minX: 695, minY: 359, maxX: 812, maxY: 473 },
    top: { minX: 609, minY: 209, maxX: 727, maxY: 328 },
  },
  {
    left: { minX: 527, minY: 361, maxX: 643, maxY: 477 },
    right: { minX: 697, minY: 359, maxX: 814, maxY: 474 },
    top: { minX: 610, minY: 210, maxX: 728, maxY: 329 },
  },
  {
    left: { minX: 531, minY: 363, maxX: 647, maxY: 478 },
    right: { minX: 701, minY: 361, maxX: 819, maxY: 477 },
    top: { minX: 615, minY: 211, maxX: 733, maxY: 330 },
  },
  {
    left: { minX: 530, minY: 364, maxX: 646, maxY: 479 },
    right: { minX: 700, minY: 362, maxX: 818, maxY: 477 },
    top: { minX: 613, minY: 212, maxX: 732, maxY: 331 },
  },
  {
    left: { minX: 529, minY: 365, maxX: 646, maxY: 481 },
    right: { minX: 700, minY: 363, maxX: 818, maxY: 479 },
    top: { minX: 613, minY: 213, maxX: 732, maxY: 332 },
  },
  {
    left: { minX: 528, minY: 365, maxX: 645, maxY: 480 },
    right: { minX: 699, minY: 363, maxX: 817, maxY: 479 },
    top: { minX: 613, minY: 213, maxX: 731, maxY: 332 },
  },
  {
    left: { minX: 527, minY: 365, maxX: 643, maxY: 482 },
    right: { minX: 698, minY: 364, maxX: 816, maxY: 480 },
    top: { minX: 611, minY: 213, maxX: 730, maxY: 333 },
  },
  {
    left: { minX: 527, minY: 367, maxX: 643, maxY: 483 },
    right: { minX: 698, minY: 365, maxX: 816, maxY: 481 },
    top: { minX: 611, minY: 215, maxX: 730, maxY: 334 },
  },
  {
    left: { minX: 527, minY: 369, maxX: 643, maxY: 485 },
    right: { minX: 698, minY: 367, maxX: 816, maxY: 484 },
    top: { minX: 611, minY: 217, maxX: 730, maxY: 336 },
  },
  {
    left: { minX: 527, minY: 370, maxX: 644, maxY: 487 },
    right: { minX: 699, minY: 369, maxX: 818, maxY: 486 },
    top: { minX: 612, minY: 218, maxX: 731, maxY: 337 },
  },
  {
    left: { minX: 527, minY: 371, maxX: 644, maxY: 488 },
    right: { minX: 699, minY: 370, maxX: 818, maxY: 487 },
    top: { minX: 612, minY: 219, maxX: 731, maxY: 339 },
  },
  {
    left: { minX: 527, minY: 373, maxX: 645, maxY: 491 },
    right: { minX: 699, minY: 372, maxX: 819, maxY: 490 },
    top: { minX: 613, minY: 221, maxX: 732, maxY: 341 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 644, maxY: 492 },
    right: { minX: 699, minY: 374, maxX: 818, maxY: 491 },
    top: { minX: 611, minY: 222, maxX: 731, maxY: 342 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 644, maxY: 492 },
    right: { minX: 699, minY: 374, maxX: 819, maxY: 491 },
    top: { minX: 611, minY: 222, maxX: 731, maxY: 342 },
  },
  {
    left: { minX: 527, minY: 376, maxX: 644, maxY: 493 },
    right: { minX: 700, minY: 375, maxX: 820, maxY: 493 },
    top: { minX: 612, minY: 223, maxX: 732, maxY: 343 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 644, maxY: 493 },
    right: { minX: 699, minY: 375, maxX: 819, maxY: 493 },
    top: { minX: 612, minY: 222, maxX: 732, maxY: 343 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 644, maxY: 493 },
    right: { minX: 699, minY: 374, maxX: 820, maxY: 493 },
    top: { minX: 612, minY: 221, maxX: 732, maxY: 342 },
  },
  {
    left: { minX: 527, minY: 375, maxX: 645, maxY: 494 },
    right: { minX: 700, minY: 375, maxX: 821, maxY: 494 },
    top: { minX: 613, minY: 222, maxX: 733, maxY: 343 },
  },
  {
    left: { minX: 526, minY: 376, maxX: 645, maxY: 494 },
    right: { minX: 700, minY: 375, maxX: 821, maxY: 494 },
    top: { minX: 612, minY: 222, maxX: 733, maxY: 343 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 645, maxY: 493 },
    right: { minX: 700, minY: 374, maxX: 822, maxY: 493 },
    top: { minX: 613, minY: 221, maxX: 734, maxY: 342 },
  },
  {
    left: { minX: 529, minY: 374, maxX: 648, maxY: 493 },
    right: { minX: 704, minY: 373, maxX: 825, maxY: 493 },
    top: { minX: 615, minY: 220, maxX: 737, maxY: 341 },
  },
  {
    left: { minX: 530, minY: 374, maxX: 649, maxY: 493 },
    right: { minX: 705, minY: 374, maxX: 827, maxY: 494 },
    top: { minX: 617, minY: 220, maxX: 738, maxY: 342 },
  },
  {
    left: { minX: 531, minY: 373, maxX: 650, maxY: 492 },
    right: { minX: 706, minY: 373, maxX: 829, maxY: 493 },
    top: { minX: 618, minY: 219, maxX: 740, maxY: 340 },
  },
  {
    left: { minX: 531, minY: 373, maxX: 651, maxY: 493 },
    right: { minX: 707, minY: 373, maxX: 829, maxY: 494 },
    top: { minX: 619, minY: 219, maxX: 740, maxY: 340 },
  },
  {
    left: { minX: 531, minY: 376, maxX: 651, maxY: 496 },
    right: { minX: 707, minY: 375, maxX: 830, maxY: 497 },
    top: { minX: 619, minY: 221, maxX: 740, maxY: 343 },
  },
  {
    left: { minX: 530, minY: 377, maxX: 650, maxY: 497 },
    right: { minX: 706, minY: 377, maxX: 830, maxY: 499 },
    top: { minX: 618, minY: 222, maxX: 740, maxY: 344 },
  },
  {
    left: { minX: 529, minY: 379, maxX: 649, maxY: 499 },
    right: { minX: 705, minY: 378, maxX: 828, maxY: 499 },
    top: { minX: 617, minY: 223, maxX: 738, maxY: 345 },
  },
  {
    left: { minX: 528, minY: 379, maxX: 648, maxY: 500 },
    right: { minX: 704, minY: 379, maxX: 828, maxY: 501 },
    top: { minX: 615, minY: 224, maxX: 738, maxY: 346 },
  },
  {
    left: { minX: 527, minY: 380, maxX: 648, maxY: 500 },
    right: { minX: 704, minY: 380, maxX: 828, maxY: 501 },
    top: { minX: 615, minY: 224, maxX: 738, maxY: 347 },
  },
  {
    left: { minX: 528, minY: 381, maxX: 648, maxY: 501 },
    right: { minX: 705, minY: 381, maxX: 829, maxY: 503 },
    top: { minX: 616, minY: 225, maxX: 738, maxY: 348 },
  },
  {
    left: { minX: 528, minY: 382, maxX: 648, maxY: 502 },
    right: { minX: 705, minY: 381, maxX: 829, maxY: 503 },
    top: { minX: 615, minY: 226, maxX: 738, maxY: 349 },
  },
  {
    left: { minX: 528, minY: 382, maxX: 648, maxY: 503 },
    right: { minX: 705, minY: 382, maxX: 829, maxY: 503 },
    top: { minX: 615, minY: 227, maxX: 738, maxY: 349 },
  },
  {
    left: { minX: 527, minY: 383, maxX: 647, maxY: 503 },
    right: { minX: 704, minY: 382, maxX: 828, maxY: 504 },
    top: { minX: 615, minY: 227, maxX: 737, maxY: 349 },
  },
  {
    left: { minX: 527, minY: 382, maxX: 648, maxY: 502 },
    right: { minX: 704, minY: 381, maxX: 828, maxY: 503 },
    top: { minX: 615, minY: 226, maxX: 737, maxY: 349 },
  },
  {
    left: { minX: 529, minY: 383, maxX: 649, maxY: 503 },
    right: { minX: 706, minY: 382, maxX: 830, maxY: 504 },
    top: { minX: 617, minY: 227, maxX: 739, maxY: 349 },
  },
  {
    left: { minX: 527, minY: 383, maxX: 648, maxY: 504 },
    right: { minX: 704, minY: 382, maxX: 828, maxY: 505 },
    top: { minX: 615, minY: 227, maxX: 737, maxY: 350 },
  },
  {
    left: { minX: 527, minY: 382, maxX: 647, maxY: 503 },
    right: { minX: 704, minY: 381, maxX: 828, maxY: 504 },
    top: { minX: 614, minY: 226, maxX: 736, maxY: 349 },
  },
  {
    left: { minX: 526, minY: 381, maxX: 646, maxY: 502 },
    right: { minX: 703, minY: 381, maxX: 827, maxY: 503 },
    top: { minX: 613, minY: 225, maxX: 736, maxY: 348 },
  },
  {
    left: { minX: 524, minY: 381, maxX: 645, maxY: 501 },
    right: { minX: 701, minY: 380, maxX: 825, maxY: 503 },
    top: { minX: 612, minY: 225, maxX: 734, maxY: 347 },
  },
  {
    left: { minX: 524, minY: 380, maxX: 644, maxY: 501 },
    right: { minX: 701, minY: 379, maxX: 825, maxY: 502 },
    top: { minX: 611, minY: 224, maxX: 734, maxY: 347 },
  },
  {
    left: { minX: 521, minY: 381, maxX: 643, maxY: 502 },
    right: { minX: 699, minY: 380, maxX: 823, maxY: 503 },
    top: { minX: 609, minY: 225, maxX: 732, maxY: 347 },
  },
  {
    left: { minX: 519, minY: 381, maxX: 640, maxY: 502 },
    right: { minX: 696, minY: 380, maxX: 821, maxY: 503 },
    top: { minX: 607, minY: 225, maxX: 730, maxY: 348 },
  },
  {
    left: { minX: 517, minY: 381, maxX: 639, maxY: 502 },
    right: { minX: 695, minY: 380, maxX: 820, maxY: 503 },
    top: { minX: 605, minY: 225, maxX: 728, maxY: 347 },
  },
  {
    left: { minX: 515, minY: 381, maxX: 637, maxY: 503 },
    right: { minX: 694, minY: 380, maxX: 818, maxY: 502 },
    top: { minX: 603, minY: 225, maxX: 726, maxY: 347 },
  },
  {
    left: { minX: 514, minY: 381, maxX: 636, maxY: 502 },
    right: { minX: 693, minY: 379, maxX: 817, maxY: 502 },
    top: { minX: 603, minY: 223, maxX: 725, maxY: 346 },
  },
  {
    left: { minX: 514, minY: 380, maxX: 635, maxY: 501 },
    right: { minX: 692, minY: 379, maxX: 817, maxY: 501 },
    top: { minX: 601, minY: 223, maxX: 725, maxY: 346 },
  },
  {
    left: { minX: 513, minY: 380, maxX: 635, maxY: 501 },
    right: { minX: 692, minY: 378, maxX: 816, maxY: 501 },
    top: { minX: 601, minY: 222, maxX: 724, maxY: 346 },
  },
  {
    left: { minX: 513, minY: 379, maxX: 635, maxY: 501 },
    right: { minX: 691, minY: 377, maxX: 816, maxY: 501 },
    top: { minX: 601, minY: 221, maxX: 724, maxY: 345 },
  },
  {
    left: { minX: 512, minY: 378, maxX: 634, maxY: 500 },
    right: { minX: 691, minY: 377, maxX: 816, maxY: 500 },
    top: { minX: 601, minY: 221, maxX: 724, maxY: 344 },
  },
  {
    left: { minX: 512, minY: 378, maxX: 634, maxY: 500 },
    right: { minX: 691, minY: 377, maxX: 816, maxY: 500 },
    top: { minX: 601, minY: 220, maxX: 724, maxY: 344 },
  },
  {
    left: { minX: 511, minY: 379, maxX: 633, maxY: 501 },
    right: { minX: 690, minY: 377, maxX: 815, maxY: 501 },
    top: { minX: 599, minY: 221, maxX: 722, maxY: 345 },
  },
  {
    left: { minX: 509, minY: 378, maxX: 632, maxY: 500 },
    right: { minX: 689, minY: 376, maxX: 814, maxY: 500 },
    top: { minX: 598, minY: 220, maxX: 721, maxY: 344 },
  },
  {
    left: { minX: 509, minY: 377, maxX: 632, maxY: 500 },
    right: { minX: 689, minY: 376, maxX: 814, maxY: 499 },
    top: { minX: 598, minY: 219, maxX: 721, maxY: 343 },
  },
  {
    left: { minX: 509, minY: 377, maxX: 632, maxY: 499 },
    right: { minX: 688, minY: 375, maxX: 813, maxY: 499 },
    top: { minX: 597, minY: 219, maxX: 721, maxY: 343 },
  },
  {
    left: { minX: 508, minY: 377, maxX: 631, maxY: 499 },
    right: { minX: 688, minY: 375, maxX: 813, maxY: 499 },
    top: { minX: 597, minY: 219, maxX: 720, maxY: 343 },
  },
  {
    left: { minX: 508, minY: 375, maxX: 630, maxY: 497 },
    right: { minX: 687, minY: 373, maxX: 812, maxY: 497 },
    top: { minX: 597, minY: 217, maxX: 720, maxY: 341 },
  },
  {
    left: { minX: 507, minY: 374, maxX: 630, maxY: 497 },
    right: { minX: 687, minY: 372, maxX: 812, maxY: 495 },
    top: { minX: 595, minY: 216, maxX: 719, maxY: 340 },
  },
  {
    left: { minX: 507, minY: 374, maxX: 630, maxY: 496 },
    right: { minX: 687, minY: 371, maxX: 812, maxY: 495 },
    top: { minX: 595, minY: 215, maxX: 719, maxY: 339 },
  },
  {
    left: { minX: 507, minY: 373, maxX: 630, maxY: 495 },
    right: { minX: 687, minY: 371, maxX: 811, maxY: 494 },
    top: { minX: 595, minY: 214, maxX: 718, maxY: 338 },
  },
  {
    left: { minX: 505, minY: 370, maxX: 628, maxY: 492 },
    right: { minX: 685, minY: 367, maxX: 810, maxY: 491 },
    top: { minX: 594, minY: 211, maxX: 717, maxY: 335 },
  },
  {
    left: { minX: 505, minY: 367, maxX: 628, maxY: 490 },
    right: { minX: 685, minY: 365, maxX: 810, maxY: 489 },
    top: { minX: 593, minY: 209, maxX: 717, maxY: 333 },
  },
  {
    left: { minX: 505, minY: 367, maxX: 628, maxY: 489 },
    right: { minX: 685, minY: 365, maxX: 810, maxY: 488 },
    top: { minX: 594, minY: 208, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 506, minY: 367, maxX: 629, maxY: 489 },
    right: { minX: 686, minY: 365, maxX: 810, maxY: 488 },
    top: { minX: 595, minY: 207, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 507, minY: 364, maxX: 630, maxY: 486 },
    right: { minX: 687, minY: 362, maxX: 811, maxY: 485 },
    top: { minX: 595, minY: 205, maxX: 719, maxY: 330 },
  },
  {
    left: { minX: 507, minY: 362, maxX: 629, maxY: 485 },
    right: { minX: 687, minY: 360, maxX: 812, maxY: 484 },
    top: { minX: 595, minY: 203, maxX: 719, maxY: 328 },
  },
  {
    left: { minX: 506, minY: 362, maxX: 629, maxY: 485 },
    right: { minX: 686, minY: 360, maxX: 811, maxY: 483 },
    top: { minX: 595, minY: 203, maxX: 719, maxY: 328 },
  },
  {
    left: { minX: 506, minY: 362, maxX: 629, maxY: 484 },
    right: { minX: 686, minY: 360, maxX: 812, maxY: 483 },
    top: { minX: 595, minY: 203, maxX: 719, maxY: 327 },
  },
  {
    left: { minX: 506, minY: 360, maxX: 629, maxY: 483 },
    right: { minX: 686, minY: 359, maxX: 812, maxY: 482 },
    top: { minX: 595, minY: 201, maxX: 719, maxY: 326 },
  },
  {
    left: { minX: 505, minY: 360, maxX: 628, maxY: 482 },
    right: { minX: 685, minY: 358, maxX: 810, maxY: 481 },
    top: { minX: 594, minY: 201, maxX: 718, maxY: 326 },
  },
  {
    left: { minX: 505, minY: 360, maxX: 628, maxY: 483 },
    right: { minX: 685, minY: 359, maxX: 810, maxY: 482 },
    top: { minX: 594, minY: 201, maxX: 718, maxY: 326 },
  },
  {
    left: { minX: 504, minY: 360, maxX: 627, maxY: 482 },
    right: { minX: 684, minY: 358, maxX: 809, maxY: 481 },
    top: { minX: 593, minY: 200, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 359, maxX: 627, maxY: 482 },
    right: { minX: 684, minY: 357, maxX: 809, maxY: 481 },
    top: { minX: 593, minY: 199, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 360, maxX: 627, maxY: 482 },
    right: { minX: 684, minY: 358, maxX: 809, maxY: 481 },
    top: { minX: 593, minY: 200, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 360, maxX: 627, maxY: 482 },
    right: { minX: 684, minY: 358, maxX: 810, maxY: 481 },
    top: { minX: 593, minY: 200, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 357, maxX: 627, maxY: 479 },
    right: { minX: 684, minY: 355, maxX: 810, maxY: 479 },
    top: { minX: 593, minY: 197, maxX: 717, maxY: 323 },
  },
  {
    left: { minX: 504, minY: 355, maxX: 627, maxY: 477 },
    right: { minX: 684, minY: 353, maxX: 809, maxY: 476 },
    top: { minX: 593, minY: 195, maxX: 717, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 356, maxX: 626, maxY: 479 },
    right: { minX: 683, minY: 354, maxX: 808, maxY: 478 },
    top: { minX: 592, minY: 196, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 479 },
    right: { minX: 683, minY: 354, maxX: 808, maxY: 477 },
    top: { minX: 592, minY: 197, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 478 },
    right: { minX: 684, minY: 353, maxX: 809, maxY: 477 },
    top: { minX: 592, minY: 195, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 502, minY: 356, maxX: 625, maxY: 479 },
    right: { minX: 683, minY: 354, maxX: 807, maxY: 477 },
    top: { minX: 591, minY: 197, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 626, maxY: 477 },
    right: { minX: 683, minY: 352, maxX: 808, maxY: 475 },
    top: { minX: 591, minY: 194, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 353, maxX: 627, maxY: 476 },
    right: { minX: 684, minY: 351, maxX: 810, maxY: 475 },
    top: { minX: 593, minY: 193, maxX: 717, maxY: 319 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 353, maxX: 808, maxY: 476 },
    top: { minX: 591, minY: 195, maxX: 715, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 352, maxX: 807, maxY: 475 },
    top: { minX: 590, minY: 195, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 352, maxX: 807, maxY: 475 },
    top: { minX: 590, minY: 194, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 352, maxX: 807, maxY: 475 },
    top: { minX: 591, minY: 194, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 352, maxX: 807, maxY: 475 },
    top: { minX: 591, minY: 194, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 626, maxY: 477 },
    right: { minX: 683, minY: 353, maxX: 808, maxY: 476 },
    top: { minX: 591, minY: 195, maxX: 715, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 478 },
    right: { minX: 683, minY: 353, maxX: 808, maxY: 477 },
    top: { minX: 591, minY: 196, maxX: 715, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 627, maxY: 479 },
    right: { minX: 684, minY: 354, maxX: 808, maxY: 477 },
    top: { minX: 592, minY: 197, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 627, maxY: 479 },
    right: { minX: 683, minY: 355, maxX: 808, maxY: 478 },
    top: { minX: 592, minY: 197, maxX: 716, maxY: 323 },
  },
  {
    left: { minX: 504, minY: 358, maxX: 627, maxY: 480 },
    right: { minX: 684, minY: 355, maxX: 808, maxY: 479 },
    top: { minX: 593, minY: 199, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 503, minY: 359, maxX: 626, maxY: 481 },
    right: { minX: 683, minY: 357, maxX: 808, maxY: 480 },
    top: { minX: 591, minY: 201, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 503, minY: 361, maxX: 626, maxY: 483 },
    right: { minX: 682, minY: 359, maxX: 807, maxY: 481 },
    top: { minX: 591, minY: 202, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 504, minY: 361, maxX: 626, maxY: 483 },
    right: { minX: 683, minY: 359, maxX: 808, maxY: 481 },
    top: { minX: 592, minY: 203, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 361, maxX: 626, maxY: 483 },
    right: { minX: 683, minY: 359, maxX: 807, maxY: 481 },
    top: { minX: 591, minY: 203, maxX: 714, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 360, maxX: 626, maxY: 482 },
    right: { minX: 683, minY: 358, maxX: 807, maxY: 480 },
    top: { minX: 592, minY: 201, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 359, maxX: 627, maxY: 481 },
    right: { minX: 684, minY: 357, maxX: 808, maxY: 480 },
    top: { minX: 593, minY: 200, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 503, minY: 359, maxX: 626, maxY: 481 },
    right: { minX: 682, minY: 357, maxX: 807, maxY: 480 },
    top: { minX: 592, minY: 201, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 501, minY: 358, maxX: 624, maxY: 480 },
    right: { minX: 681, minY: 357, maxX: 806, maxY: 479 },
    top: { minX: 590, minY: 199, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 501, minY: 358, maxX: 624, maxY: 480 },
    right: { minX: 681, minY: 356, maxX: 806, maxY: 479 },
    top: { minX: 590, minY: 199, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 359, maxX: 626, maxY: 481 },
    right: { minX: 683, minY: 357, maxX: 807, maxY: 480 },
    top: { minX: 592, minY: 200, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 361, maxX: 626, maxY: 483 },
    right: { minX: 683, minY: 359, maxX: 808, maxY: 482 },
    top: { minX: 593, minY: 203, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 506, minY: 364, maxX: 628, maxY: 485 },
    right: { minX: 685, minY: 362, maxX: 809, maxY: 485 },
    top: { minX: 595, minY: 206, maxX: 718, maxY: 330 },
  },
  {
    left: { minX: 507, minY: 366, maxX: 629, maxY: 487 },
    right: { minX: 686, minY: 364, maxX: 810, maxY: 487 },
    top: { minX: 595, minY: 209, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 507, minY: 367, maxX: 629, maxY: 488 },
    right: { minX: 685, minY: 365, maxX: 809, maxY: 487 },
    top: { minX: 595, minY: 210, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 507, minY: 369, maxX: 629, maxY: 490 },
    right: { minX: 685, minY: 367, maxX: 809, maxY: 489 },
    top: { minX: 595, minY: 212, maxX: 717, maxY: 335 },
  },
  {
    left: { minX: 506, minY: 371, maxX: 627, maxY: 492 },
    right: { minX: 684, minY: 368, maxX: 807, maxY: 490 },
    top: { minX: 593, minY: 214, maxX: 715, maxY: 336 },
  },
  {
    left: { minX: 505, minY: 371, maxX: 626, maxY: 492 },
    right: { minX: 683, minY: 368, maxX: 806, maxY: 490 },
    top: { minX: 592, minY: 214, maxX: 714, maxY: 336 },
  },
  {
    left: { minX: 504, minY: 370, maxX: 626, maxY: 491 },
    right: { minX: 681, minY: 367, maxX: 805, maxY: 489 },
    top: { minX: 591, minY: 213, maxX: 712, maxY: 336 },
  },
  {
    left: { minX: 502, minY: 371, maxX: 624, maxY: 492 },
    right: { minX: 680, minY: 367, maxX: 804, maxY: 489 },
    top: { minX: 589, minY: 213, maxX: 711, maxY: 336 },
  },
  {
    left: { minX: 503, minY: 370, maxX: 625, maxY: 491 },
    right: { minX: 681, minY: 367, maxX: 804, maxY: 489 },
    top: { minX: 590, minY: 213, maxX: 712, maxY: 335 },
  },
  {
    left: { minX: 503, minY: 369, maxX: 624, maxY: 490 },
    right: { minX: 681, minY: 366, maxX: 804, maxY: 488 },
    top: { minX: 590, minY: 212, maxX: 712, maxY: 335 },
  },
  {
    left: { minX: 502, minY: 368, maxX: 624, maxY: 489 },
    right: { minX: 680, minY: 365, maxX: 804, maxY: 487 },
    top: { minX: 589, minY: 211, maxX: 711, maxY: 334 },
  },
  {
    left: { minX: 503, minY: 367, maxX: 625, maxY: 489 },
    right: { minX: 681, minY: 365, maxX: 805, maxY: 487 },
    top: { minX: 590, minY: 210, maxX: 712, maxY: 333 },
  },
  {
    left: { minX: 502, minY: 367, maxX: 624, maxY: 488 },
    right: { minX: 681, minY: 364, maxX: 804, maxY: 486 },
    top: { minX: 590, minY: 209, maxX: 712, maxY: 332 },
  },
  {
    left: { minX: 503, minY: 366, maxX: 625, maxY: 488 },
    right: { minX: 681, minY: 363, maxX: 805, maxY: 485 },
    top: { minX: 590, minY: 209, maxX: 712, maxY: 332 },
  },
  {
    left: { minX: 503, minY: 366, maxX: 625, maxY: 487 },
    right: { minX: 681, minY: 363, maxX: 805, maxY: 485 },
    top: { minX: 590, minY: 209, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 501, minY: 365, maxX: 624, maxY: 486 },
    right: { minX: 680, minY: 362, maxX: 804, maxY: 484 },
    top: { minX: 589, minY: 207, maxX: 712, maxY: 330 },
  },
  {
    left: { minX: 498, minY: 356, maxX: 621, maxY: 478 },
    right: { minX: 677, minY: 353, maxX: 802, maxY: 476 },
    top: { minX: 586, minY: 197, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 624, maxY: 475 },
    right: { minX: 680, minY: 351, maxX: 804, maxY: 473 },
    top: { minX: 588, minY: 194, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 500, minY: 354, maxX: 623, maxY: 476 },
    right: { minX: 679, minY: 352, maxX: 803, maxY: 474 },
    top: { minX: 589, minY: 195, maxX: 711, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 358, maxX: 623, maxY: 479 },
    right: { minX: 680, minY: 356, maxX: 803, maxY: 478 },
    top: { minX: 589, minY: 200, maxX: 711, maxY: 324 },
  },
  {
    left: { minX: 501, minY: 359, maxX: 623, maxY: 480 },
    right: { minX: 679, minY: 357, maxX: 803, maxY: 479 },
    top: { minX: 589, minY: 201, maxX: 711, maxY: 325 },
  },
  {
    left: { minX: 500, minY: 359, maxX: 623, maxY: 480 },
    right: { minX: 679, minY: 357, maxX: 802, maxY: 478 },
    top: { minX: 588, minY: 201, maxX: 710, maxY: 325 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 621, maxY: 478 },
    right: { minX: 678, minY: 354, maxX: 801, maxY: 476 },
    top: { minX: 587, minY: 199, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 477 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 475 },
    top: { minX: 587, minY: 197, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 500, minY: 357, maxX: 622, maxY: 478 },
    right: { minX: 678, minY: 355, maxX: 801, maxY: 477 },
    top: { minX: 587, minY: 200, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 500, minY: 358, maxX: 621, maxY: 479 },
    right: { minX: 677, minY: 355, maxX: 800, maxY: 477 },
    top: { minX: 587, minY: 201, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 500, minY: 355, maxX: 622, maxY: 476 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 474 },
    top: { minX: 588, minY: 198, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 622, maxY: 475 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 474 },
    top: { minX: 589, minY: 197, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 357, maxX: 622, maxY: 477 },
    right: { minX: 678, minY: 355, maxX: 801, maxY: 476 },
    top: { minX: 589, minY: 200, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 501, minY: 357, maxX: 622, maxY: 477 },
    right: { minX: 678, minY: 355, maxX: 801, maxY: 476 },
    top: { minX: 589, minY: 201, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 502, minY: 356, maxX: 623, maxY: 475 },
    right: { minX: 678, minY: 354, maxX: 800, maxY: 474 },
    top: { minX: 589, minY: 199, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 356, maxX: 623, maxY: 476 },
    right: { minX: 678, minY: 354, maxX: 800, maxY: 475 },
    top: { minX: 589, minY: 200, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 358, maxX: 623, maxY: 477 },
    right: { minX: 678, minY: 355, maxX: 800, maxY: 476 },
    top: { minX: 589, minY: 202, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 501, minY: 357, maxX: 622, maxY: 476 },
    right: { minX: 677, minY: 355, maxX: 799, maxY: 475 },
    top: { minX: 588, minY: 201, maxX: 709, maxY: 323 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 622, maxY: 474 },
    right: { minX: 678, minY: 353, maxX: 799, maxY: 473 },
    top: { minX: 589, minY: 199, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 622, maxY: 475 },
    right: { minX: 677, minY: 353, maxX: 798, maxY: 473 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 621, maxY: 474 },
    right: { minX: 676, minY: 353, maxX: 798, maxY: 472 },
    top: { minX: 587, minY: 199, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 621, maxY: 473 },
    right: { minX: 677, minY: 352, maxX: 798, maxY: 471 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 622, maxY: 473 },
    right: { minX: 677, minY: 352, maxX: 798, maxY: 471 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 621, maxY: 472 },
    right: { minX: 677, minY: 352, maxX: 798, maxY: 471 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 621, maxY: 472 },
    right: { minX: 676, minY: 351, maxX: 797, maxY: 470 },
    top: { minX: 587, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 353, maxX: 621, maxY: 471 },
    right: { minX: 676, minY: 351, maxX: 796, maxY: 469 },
    top: { minX: 587, minY: 199, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 351, maxX: 797, maxY: 470 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 354, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 352, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 354, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 351, maxX: 797, maxY: 469 },
    top: { minX: 589, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 354, maxX: 622, maxY: 472 },
    right: { minX: 677, minY: 352, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 201, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 354, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 352, maxX: 796, maxY: 469 },
    top: { minX: 588, minY: 200, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 504, minY: 354, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 351, maxX: 797, maxY: 469 },
    top: { minX: 589, minY: 201, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 623, maxY: 472 },
    right: { minX: 677, minY: 352, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 201, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 623, maxY: 472 },
    right: { minX: 677, minY: 352, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 201, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 678, minY: 351, maxX: 798, maxY: 469 },
    top: { minX: 590, minY: 200, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 506, minY: 353, maxX: 624, maxY: 470 },
    right: { minX: 678, minY: 350, maxX: 798, maxY: 468 },
    top: { minX: 591, minY: 199, maxX: 709, maxY: 319 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 625, maxY: 470 },
    right: { minX: 679, minY: 351, maxX: 799, maxY: 468 },
    top: { minX: 591, minY: 200, maxX: 710, maxY: 320 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 625, maxY: 469 },
    right: { minX: 679, minY: 350, maxX: 798, maxY: 467 },
    top: { minX: 591, minY: 200, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 508, minY: 352, maxX: 626, maxY: 469 },
    right: { minX: 680, minY: 350, maxX: 799, maxY: 467 },
    top: { minX: 592, minY: 199, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 509, minY: 353, maxX: 626, maxY: 469 },
    right: { minX: 680, minY: 350, maxX: 799, maxY: 467 },
    top: { minX: 593, minY: 201, maxX: 711, maxY: 320 },
  },
  {
    left: { minX: 509, minY: 355, maxX: 626, maxY: 471 },
    right: { minX: 680, minY: 352, maxX: 799, maxY: 469 },
    top: { minX: 593, minY: 203, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 510, minY: 354, maxX: 626, maxY: 470 },
    right: { minX: 680, minY: 352, maxX: 799, maxY: 468 },
    top: { minX: 593, minY: 203, maxX: 711, maxY: 321 },
  },
  {
    left: { minX: 511, minY: 354, maxX: 628, maxY: 470 },
    right: { minX: 681, minY: 352, maxX: 800, maxY: 468 },
    top: { minX: 595, minY: 203, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 511, minY: 356, maxX: 627, maxY: 472 },
    right: { minX: 681, minY: 354, maxX: 799, maxY: 470 },
    top: { minX: 594, minY: 205, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 511, minY: 356, maxX: 627, maxY: 471 },
    right: { minX: 681, minY: 353, maxX: 799, maxY: 470 },
    top: { minX: 594, minY: 205, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 512, minY: 356, maxX: 628, maxY: 471 },
    right: { minX: 682, minY: 353, maxX: 800, maxY: 469 },
    top: { minX: 595, minY: 205, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 513, minY: 356, maxX: 629, maxY: 471 },
    right: { minX: 682, minY: 353, maxX: 800, maxY: 469 },
    top: { minX: 595, minY: 205, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 513, minY: 356, maxX: 628, maxY: 471 },
    right: { minX: 682, minY: 353, maxX: 800, maxY: 469 },
    top: { minX: 595, minY: 205, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 514, minY: 356, maxX: 630, maxY: 471 },
    right: { minX: 684, minY: 353, maxX: 802, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 515, minY: 356, maxX: 630, maxY: 470 },
    right: { minX: 684, minY: 353, maxX: 802, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 515, minY: 356, maxX: 630, maxY: 471 },
    right: { minX: 684, minY: 353, maxX: 802, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 515, minY: 356, maxX: 630, maxY: 471 },
    right: { minX: 684, minY: 353, maxX: 801, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 516, minY: 355, maxX: 632, maxY: 470 },
    right: { minX: 685, minY: 352, maxX: 803, maxY: 468 },
    top: { minX: 598, minY: 205, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 517, minY: 354, maxX: 632, maxY: 468 },
    right: { minX: 686, minY: 351, maxX: 803, maxY: 467 },
    top: { minX: 599, minY: 204, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 518, minY: 356, maxX: 633, maxY: 470 },
    right: { minX: 686, minY: 353, maxX: 803, maxY: 468 },
    top: { minX: 599, minY: 206, maxX: 715, maxY: 323 },
  },
  {
    left: { minX: 520, minY: 356, maxX: 634, maxY: 470 },
    right: { minX: 688, minY: 353, maxX: 805, maxY: 468 },
    top: { minX: 601, minY: 205, maxX: 717, maxY: 323 },
  },
  {
    left: { minX: 520, minY: 355, maxX: 635, maxY: 469 },
    right: { minX: 688, minY: 352, maxX: 806, maxY: 467 },
    top: { minX: 602, minY: 205, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 521, minY: 356, maxX: 635, maxY: 470 },
    right: { minX: 689, minY: 353, maxX: 806, maxY: 468 },
    top: { minX: 602, minY: 206, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 522, minY: 357, maxX: 637, maxY: 471 },
    right: { minX: 690, minY: 354, maxX: 807, maxY: 469 },
    top: { minX: 603, minY: 207, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 524, minY: 355, maxX: 638, maxY: 469 },
    right: { minX: 691, minY: 352, maxX: 809, maxY: 467 },
    top: { minX: 605, minY: 205, maxX: 720, maxY: 322 },
  },
  {
    left: { minX: 524, minY: 356, maxX: 638, maxY: 469 },
    right: { minX: 691, minY: 352, maxX: 808, maxY: 467 },
    top: { minX: 605, minY: 206, maxX: 721, maxY: 323 },
  },
  {
    left: { minX: 525, minY: 356, maxX: 639, maxY: 469 },
    right: { minX: 692, minY: 353, maxX: 809, maxY: 467 },
    top: { minX: 606, minY: 207, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 526, minY: 356, maxX: 640, maxY: 469 },
    right: { minX: 693, minY: 353, maxX: 810, maxY: 467 },
    top: { minX: 607, minY: 207, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 527, minY: 355, maxX: 641, maxY: 468 },
    right: { minX: 693, minY: 352, maxX: 810, maxY: 467 },
    top: { minX: 608, minY: 206, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 354, maxX: 641, maxY: 467 },
    right: { minX: 694, minY: 352, maxX: 810, maxY: 466 },
    top: { minX: 608, minY: 205, maxX: 723, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 355, maxX: 640, maxY: 467 },
    right: { minX: 693, minY: 352, maxX: 810, maxY: 467 },
    top: { minX: 608, minY: 206, maxX: 723, maxY: 322 },
  },
  {
    left: { minX: 526, minY: 355, maxX: 640, maxY: 468 },
    right: { minX: 692, minY: 352, maxX: 809, maxY: 467 },
    top: { minX: 607, minY: 207, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 527, minY: 354, maxX: 640, maxY: 467 },
    right: { minX: 693, minY: 351, maxX: 809, maxY: 466 },
    top: { minX: 607, minY: 206, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 354, maxX: 640, maxY: 467 },
    right: { minX: 693, minY: 351, maxX: 809, maxY: 466 },
    top: { minX: 607, minY: 206, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 355, maxX: 640, maxY: 467 },
    right: { minX: 692, minY: 352, maxX: 808, maxY: 466 },
    top: { minX: 607, minY: 207, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 353, maxX: 641, maxY: 465 },
    right: { minX: 693, minY: 351, maxX: 810, maxY: 465 },
    top: { minX: 608, minY: 205, maxX: 723, maxY: 321 },
  },
  {
    left: { minX: 528, minY: 354, maxX: 641, maxY: 466 },
    right: { minX: 694, minY: 351, maxX: 810, maxY: 465 },
    top: { minX: 609, minY: 206, maxX: 723, maxY: 322 },
  },
  {
    left: { minX: 530, minY: 355, maxX: 643, maxY: 467 },
    right: { minX: 695, minY: 352, maxX: 812, maxY: 466 },
    top: { minX: 610, minY: 207, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 531, minY: 356, maxX: 643, maxY: 468 },
    right: { minX: 696, minY: 353, maxX: 812, maxY: 467 },
    top: { minX: 611, minY: 208, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 533, minY: 356, maxX: 645, maxY: 468 },
    right: { minX: 698, minY: 353, maxX: 814, maxY: 467 },
    top: { minX: 613, minY: 208, maxX: 727, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 355, maxX: 647, maxY: 467 },
    right: { minX: 700, minY: 352, maxX: 816, maxY: 467 },
    top: { minX: 615, minY: 207, maxX: 730, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 207, maxX: 730, maxY: 323 },
  },
  {
    left: { minX: 534, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 699, minY: 353, maxX: 816, maxY: 467 },
    top: { minX: 615, minY: 209, maxX: 729, maxY: 324 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 208, maxX: 730, maxY: 324 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 816, maxY: 467 },
    top: { minX: 615, minY: 209, maxX: 729, maxY: 324 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 816, maxY: 467 },
    top: { minX: 615, minY: 208, maxX: 729, maxY: 323 },
  },
  {
    left: { minX: 534, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 699, minY: 352, maxX: 816, maxY: 467 },
    top: { minX: 614, minY: 207, maxX: 729, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 816, maxY: 467 },
    top: { minX: 614, minY: 208, maxX: 729, maxY: 324 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 208, maxX: 730, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 352, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 207, maxX: 730, maxY: 323 },
  },
  {
    left: { minX: 534, minY: 355, maxX: 647, maxY: 467 },
    right: { minX: 700, minY: 352, maxX: 816, maxY: 466 },
    top: { minX: 614, minY: 207, maxX: 728, maxY: 322 },
  },
  {
    left: { minX: 533, minY: 355, maxX: 646, maxY: 467 },
    right: { minX: 699, minY: 351, maxX: 815, maxY: 466 },
    top: { minX: 613, minY: 207, maxX: 728, maxY: 322 },
  },
  {
    left: { minX: 532, minY: 355, maxX: 645, maxY: 467 },
    right: { minX: 698, minY: 352, maxX: 814, maxY: 466 },
    top: { minX: 612, minY: 207, maxX: 726, maxY: 322 },
  },
  {
    left: { minX: 530, minY: 356, maxX: 643, maxY: 468 },
    right: { minX: 695, minY: 353, maxX: 812, maxY: 467 },
    top: { minX: 610, minY: 208, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 530, minY: 356, maxX: 642, maxY: 468 },
    right: { minX: 695, minY: 353, maxX: 811, maxY: 467 },
    top: { minX: 609, minY: 208, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 528, minY: 356, maxX: 641, maxY: 468 },
    right: { minX: 694, minY: 353, maxX: 810, maxY: 467 },
    top: { minX: 609, minY: 209, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 528, minY: 357, maxX: 640, maxY: 469 },
    right: { minX: 693, minY: 354, maxX: 809, maxY: 468 },
    top: { minX: 608, minY: 209, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 527, minY: 357, maxX: 640, maxY: 469 },
    right: { minX: 692, minY: 355, maxX: 808, maxY: 469 },
    top: { minX: 607, minY: 210, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 526, minY: 358, maxX: 638, maxY: 470 },
    right: { minX: 691, minY: 355, maxX: 807, maxY: 469 },
    top: { minX: 606, minY: 211, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 525, minY: 358, maxX: 637, maxY: 470 },
    right: { minX: 690, minY: 355, maxX: 806, maxY: 469 },
    top: { minX: 605, minY: 211, maxX: 719, maxY: 326 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 469 },
    right: { minX: 689, minY: 354, maxX: 804, maxY: 468 },
    top: { minX: 603, minY: 209, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 469 },
    right: { minX: 689, minY: 354, maxX: 805, maxY: 467 },
    top: { minX: 603, minY: 209, maxX: 718, maxY: 324 },
  },
  {
    left: { minX: 522, minY: 357, maxX: 635, maxY: 469 },
    right: { minX: 687, minY: 353, maxX: 803, maxY: 467 },
    top: { minX: 602, minY: 209, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 522, minY: 356, maxX: 635, maxY: 469 },
    right: { minX: 688, minY: 353, maxX: 803, maxY: 467 },
    top: { minX: 602, minY: 209, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 469 },
    right: { minX: 688, minY: 354, maxX: 804, maxY: 468 },
    top: { minX: 603, minY: 209, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 469 },
    right: { minX: 688, minY: 354, maxX: 804, maxY: 468 },
    top: { minX: 603, minY: 210, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 522, minY: 358, maxX: 635, maxY: 470 },
    right: { minX: 687, minY: 355, maxX: 803, maxY: 469 },
    top: { minX: 603, minY: 211, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 522, minY: 358, maxX: 635, maxY: 471 },
    right: { minX: 688, minY: 355, maxX: 803, maxY: 470 },
    top: { minX: 603, minY: 211, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 520, minY: 365, maxX: 633, maxY: 478 },
    right: { minX: 685, minY: 363, maxX: 801, maxY: 477 },
    top: { minX: 601, minY: 218, maxX: 715, maxY: 334 },
  },
  {
    left: { minX: 518, minY: 374, maxX: 630, maxY: 487 },
    right: { minX: 683, minY: 371, maxX: 798, maxY: 486 },
    top: { minX: 598, minY: 227, maxX: 712, maxY: 343 },
  },
  {
    left: { minX: 517, minY: 377, maxX: 630, maxY: 491 },
    right: { minX: 682, minY: 375, maxX: 798, maxY: 489 },
    top: { minX: 597, minY: 231, maxX: 711, maxY: 346 },
  },
  {
    left: { minX: 515, minY: 388, maxX: 628, maxY: 501 },
    right: { minX: 681, minY: 386, maxX: 796, maxY: 500 },
    top: { minX: 596, minY: 241, maxX: 710, maxY: 357 },
  },
  {
    left: { minX: 514, minY: 391, maxX: 627, maxY: 505 },
    right: { minX: 679, minY: 389, maxX: 794, maxY: 503 },
    top: { minX: 595, minY: 245, maxX: 708, maxY: 359 },
  },
  {
    left: { minX: 515, minY: 397, maxX: 628, maxY: 510 },
    right: { minX: 680, minY: 394, maxX: 795, maxY: 508 },
    top: { minX: 595, minY: 251, maxX: 708, maxY: 365 },
  },
  {
    left: { minX: 515, minY: 399, maxX: 628, maxY: 512 },
    right: { minX: 680, minY: 396, maxX: 794, maxY: 510 },
    top: { minX: 595, minY: 253, maxX: 708, maxY: 367 },
  },
  {
    left: { minX: 517, minY: 398, maxX: 629, maxY: 510 },
    right: { minX: 681, minY: 395, maxX: 795, maxY: 509 },
    top: { minX: 596, minY: 253, maxX: 709, maxY: 366 },
  },
  {
    left: { minX: 518, minY: 396, maxX: 630, maxY: 508 },
    right: { minX: 681, minY: 393, maxX: 795, maxY: 506 },
    top: { minX: 597, minY: 251, maxX: 710, maxY: 364 },
  },
  {
    left: { minX: 520, minY: 396, maxX: 631, maxY: 507 },
    right: { minX: 683, minY: 393, maxX: 796, maxY: 506 },
    top: { minX: 599, minY: 251, maxX: 711, maxY: 364 },
  },
  {
    left: { minX: 520, minY: 396, maxX: 631, maxY: 507 },
    right: { minX: 683, minY: 393, maxX: 796, maxY: 506 },
    top: { minX: 599, minY: 251, maxX: 711, maxY: 364 },
  },
];
