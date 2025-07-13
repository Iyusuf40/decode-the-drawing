const treeVideoData = [
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 528, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 346, maxX: 584, maxY: 558 },
    right: { minX: 680, minY: 346, maxX: 894, maxY: 555 },
    top: { minX: 528, minY: 71, maxX: 739, maxY: 289 },
  },
  {
    left: { minX: 366, minY: 347, maxX: 584, maxY: 559 },
    right: { minX: 680, minY: 347, maxX: 893, maxY: 556 },
    top: { minX: 528, minY: 73, maxX: 738, maxY: 290 },
  },
  {
    left: { minX: 366, minY: 348, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 349, maxX: 892, maxY: 557 },
    top: { minX: 528, minY: 75, maxX: 738, maxY: 292 },
  },
  {
    left: { minX: 366, minY: 349, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 349, maxX: 891, maxY: 557 },
    top: { minX: 528, minY: 77, maxX: 737, maxY: 293 },
  },
  {
    left: { minX: 370, minY: 352, maxX: 585, maxY: 562 },
    right: { minX: 680, minY: 353, maxX: 891, maxY: 560 },
    top: { minX: 531, minY: 82, maxX: 738, maxY: 296 },
  },
  {
    left: { minX: 371, minY: 352, maxX: 586, maxY: 562 },
    right: { minX: 681, minY: 354, maxX: 892, maxY: 560 },
    top: { minX: 533, minY: 83, maxX: 740, maxY: 297 },
  },
  {
    left: { minX: 368, minY: 350, maxX: 583, maxY: 560 },
    right: { minX: 679, minY: 351, maxX: 889, maxY: 558 },
    top: { minX: 529, minY: 81, maxX: 737, maxY: 295 },
  },
  {
    left: { minX: 367, minY: 350, maxX: 582, maxY: 560 },
    right: { minX: 677, minY: 351, maxX: 887, maxY: 557 },
    top: { minX: 528, minY: 81, maxX: 735, maxY: 295 },
  },
  {
    left: { minX: 367, minY: 349, maxX: 582, maxY: 559 },
    right: { minX: 677, minY: 351, maxX: 887, maxY: 557 },
    top: { minX: 528, minY: 80, maxX: 736, maxY: 294 },
  },
  {
    left: { minX: 367, minY: 351, maxX: 582, maxY: 560 },
    right: { minX: 677, minY: 353, maxX: 886, maxY: 558 },
    top: { minX: 529, minY: 83, maxX: 735, maxY: 296 },
  },
  {
    left: { minX: 366, minY: 353, maxX: 581, maxY: 562 },
    right: { minX: 675, minY: 354, maxX: 884, maxY: 559 },
    top: { minX: 527, minY: 85, maxX: 733, maxY: 298 },
  },
  {
    left: { minX: 363, minY: 353, maxX: 578, maxY: 562 },
    right: { minX: 673, minY: 353, maxX: 881, maxY: 558 },
    top: { minX: 525, minY: 85, maxX: 730, maxY: 298 },
  },
  {
    left: { minX: 364, minY: 354, maxX: 578, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 880, maxY: 559 },
    top: { minX: 525, minY: 87, maxX: 730, maxY: 299 },
  },
  {
    left: { minX: 363, minY: 354, maxX: 578, maxY: 564 },
    right: { minX: 672, minY: 356, maxX: 879, maxY: 560 },
    top: { minX: 525, minY: 88, maxX: 729, maxY: 300 },
  },
  {
    left: { minX: 359, minY: 354, maxX: 574, maxY: 563 },
    right: { minX: 669, minY: 354, maxX: 876, maxY: 558 },
    top: { minX: 520, minY: 87, maxX: 726, maxY: 298 },
  },
  {
    left: { minX: 360, minY: 354, maxX: 576, maxY: 564 },
    right: { minX: 670, minY: 355, maxX: 877, maxY: 559 },
    top: { minX: 521, minY: 87, maxX: 726, maxY: 299 },
  },
  {
    left: { minX: 362, minY: 355, maxX: 577, maxY: 564 },
    right: { minX: 671, minY: 355, maxX: 878, maxY: 559 },
    top: { minX: 523, minY: 88, maxX: 728, maxY: 300 },
  },
  {
    left: { minX: 362, minY: 354, maxX: 577, maxY: 563 },
    right: { minX: 671, minY: 355, maxX: 878, maxY: 559 },
    top: { minX: 523, minY: 88, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 363, minY: 353, maxX: 577, maxY: 562 },
    right: { minX: 672, minY: 353, maxX: 879, maxY: 557 },
    top: { minX: 523, minY: 85, maxX: 730, maxY: 297 },
  },
  {
    left: { minX: 364, minY: 354, maxX: 578, maxY: 563 },
    right: { minX: 673, minY: 355, maxX: 880, maxY: 559 },
    top: { minX: 525, minY: 88, maxX: 730, maxY: 299 },
  },
  {
    left: { minX: 366, minY: 355, maxX: 579, maxY: 563 },
    right: { minX: 673, minY: 356, maxX: 880, maxY: 559 },
    top: { minX: 526, minY: 90, maxX: 730, maxY: 300 },
  },
  {
    left: { minX: 367, minY: 355, maxX: 580, maxY: 563 },
    right: { minX: 674, minY: 357, maxX: 880, maxY: 560 },
    top: { minX: 527, minY: 91, maxX: 731, maxY: 301 },
  },
  {
    left: { minX: 367, minY: 353, maxX: 580, maxY: 561 },
    right: { minX: 674, minY: 355, maxX: 881, maxY: 558 },
    top: { minX: 527, minY: 89, maxX: 732, maxY: 299 },
  },
  {
    left: { minX: 368, minY: 349, maxX: 581, maxY: 556 },
    right: { minX: 675, minY: 350, maxX: 882, maxY: 553 },
    top: { minX: 528, minY: 82, maxX: 733, maxY: 294 },
  },
  {
    left: { minX: 370, minY: 349, maxX: 582, maxY: 556 },
    right: { minX: 676, minY: 350, maxX: 883, maxY: 553 },
    top: { minX: 529, minY: 83, maxX: 734, maxY: 295 },
  },
  {
    left: { minX: 370, minY: 351, maxX: 582, maxY: 558 },
    right: { minX: 676, minY: 352, maxX: 882, maxY: 555 },
    top: { minX: 529, minY: 86, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 373, minY: 353, maxX: 584, maxY: 559 },
    right: { minX: 678, minY: 354, maxX: 883, maxY: 556 },
    top: { minX: 532, minY: 89, maxX: 735, maxY: 299 },
  },
  {
    left: { minX: 375, minY: 354, maxX: 586, maxY: 560 },
    right: { minX: 678, minY: 356, maxX: 883, maxY: 557 },
    top: { minX: 535, minY: 93, maxX: 736, maxY: 301 },
  },
  {
    left: { minX: 376, minY: 350, maxX: 586, maxY: 555 },
    right: { minX: 679, minY: 352, maxX: 883, maxY: 553 },
    top: { minX: 534, minY: 87, maxX: 736, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 586, maxY: 557 },
    right: { minX: 679, minY: 355, maxX: 882, maxY: 555 },
    top: { minX: 535, minY: 93, maxX: 736, maxY: 300 },
  },
  {
    left: { minX: 376, minY: 352, maxX: 585, maxY: 557 },
    right: { minX: 678, minY: 355, maxX: 881, maxY: 555 },
    top: { minX: 534, minY: 92, maxX: 735, maxY: 300 },
  },
  {
    left: { minX: 374, minY: 352, maxX: 584, maxY: 556 },
    right: { minX: 676, minY: 354, maxX: 879, maxY: 553 },
    top: { minX: 532, minY: 92, maxX: 733, maxY: 299 },
  },
  {
    left: { minX: 375, minY: 348, maxX: 585, maxY: 553 },
    right: { minX: 677, minY: 349, maxX: 880, maxY: 549 },
    top: { minX: 532, minY: 86, maxX: 734, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 350, maxX: 587, maxY: 553 },
    right: { minX: 679, minY: 352, maxX: 881, maxY: 550 },
    top: { minX: 535, minY: 90, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 379, minY: 348, maxX: 587, maxY: 551 },
    right: { minX: 679, minY: 349, maxX: 880, maxY: 547 },
    top: { minX: 535, minY: 88, maxX: 735, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 350, maxX: 587, maxY: 552 },
    right: { minX: 678, minY: 351, maxX: 879, maxY: 548 },
    top: { minX: 535, minY: 91, maxX: 734, maxY: 297 },
  },
  {
    left: { minX: 381, minY: 351, maxX: 587, maxY: 553 },
    right: { minX: 678, minY: 353, maxX: 879, maxY: 549 },
    top: { minX: 536, minY: 94, maxX: 734, maxY: 299 },
  },
  {
    left: { minX: 382, minY: 351, maxX: 588, maxY: 552 },
    right: { minX: 679, minY: 352, maxX: 880, maxY: 549 },
    top: { minX: 537, minY: 93, maxX: 736, maxY: 298 },
  },
  {
    left: { minX: 383, minY: 349, maxX: 589, maxY: 551 },
    right: { minX: 679, minY: 351, maxX: 880, maxY: 547 },
    top: { minX: 537, minY: 91, maxX: 736, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 350, maxX: 590, maxY: 551 },
    right: { minX: 681, minY: 351, maxX: 880, maxY: 547 },
    top: { minX: 539, minY: 93, maxX: 737, maxY: 297 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 592, maxY: 550 },
    right: { minX: 682, minY: 352, maxX: 880, maxY: 547 },
    top: { minX: 541, minY: 95, maxX: 738, maxY: 298 },
  },
  {
    left: { minX: 389, minY: 351, maxX: 593, maxY: 550 },
    right: { minX: 683, minY: 353, maxX: 881, maxY: 547 },
    top: { minX: 543, minY: 97, maxX: 739, maxY: 299 },
  },
  {
    left: { minX: 391, minY: 351, maxX: 594, maxY: 550 },
    right: { minX: 684, minY: 353, maxX: 882, maxY: 547 },
    top: { minX: 544, minY: 98, maxX: 740, maxY: 299 },
  },
  {
    left: { minX: 393, minY: 350, maxX: 595, maxY: 549 },
    right: { minX: 685, minY: 352, maxX: 883, maxY: 546 },
    top: { minX: 546, minY: 97, maxX: 742, maxY: 298 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 595, maxY: 548 },
    right: { minX: 685, minY: 352, maxX: 883, maxY: 546 },
    top: { minX: 546, minY: 96, maxX: 742, maxY: 298 },
  },
  {
    left: { minX: 393, minY: 349, maxX: 596, maxY: 547 },
    right: { minX: 686, minY: 351, maxX: 883, maxY: 545 },
    top: { minX: 546, minY: 95, maxX: 742, maxY: 297 },
  },
  {
    left: { minX: 395, minY: 348, maxX: 597, maxY: 546 },
    right: { minX: 686, minY: 350, maxX: 883, maxY: 543 },
    top: { minX: 547, minY: 95, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 397, minY: 347, maxX: 599, maxY: 545 },
    right: { minX: 688, minY: 349, maxX: 885, maxY: 542 },
    top: { minX: 549, minY: 95, maxX: 744, maxY: 296 },
  },
  {
    left: { minX: 401, minY: 345, maxX: 602, maxY: 542 },
    right: { minX: 691, minY: 347, maxX: 888, maxY: 540 },
    top: { minX: 553, minY: 92, maxX: 748, maxY: 294 },
  },
  {
    left: { minX: 403, minY: 344, maxX: 603, maxY: 541 },
    right: { minX: 692, minY: 347, maxX: 889, maxY: 539 },
    top: { minX: 555, minY: 91, maxX: 750, maxY: 293 },
  },
  {
    left: { minX: 404, minY: 343, maxX: 604, maxY: 540 },
    right: { minX: 693, minY: 347, maxX: 890, maxY: 539 },
    top: { minX: 556, minY: 91, maxX: 751, maxY: 292 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 606, maxY: 540 },
    right: { minX: 695, minY: 347, maxX: 891, maxY: 539 },
    top: { minX: 558, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 606, maxY: 541 },
    right: { minX: 694, minY: 349, maxX: 890, maxY: 540 },
    top: { minX: 558, minY: 95, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 406, minY: 343, maxX: 605, maxY: 540 },
    right: { minX: 694, minY: 347, maxX: 890, maxY: 539 },
    top: { minX: 557, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 343, maxX: 605, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 890, maxY: 538 },
    top: { minX: 557, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 889, maxY: 538 },
    top: { minX: 557, minY: 93, maxX: 752, maxY: 293 },
  },
  {
    left: { minX: 406, minY: 345, maxX: 605, maxY: 540 },
    right: { minX: 693, minY: 348, maxX: 888, maxY: 539 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 406, minY: 344, maxX: 605, maxY: 539 },
    right: { minX: 693, minY: 347, maxX: 888, maxY: 537 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 408, minY: 344, maxX: 606, maxY: 539 },
    right: { minX: 694, minY: 347, maxX: 888, maxY: 537 },
    top: { minX: 557, minY: 95, maxX: 750, maxY: 294 },
  },
  {
    left: { minX: 411, minY: 344, maxX: 608, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 95, maxX: 753, maxY: 294 },
  },
  {
    left: { minX: 413, minY: 344, maxX: 610, maxY: 537 },
    right: { minX: 698, minY: 347, maxX: 892, maxY: 535 },
    top: { minX: 562, minY: 95, maxX: 754, maxY: 293 },
  },
  {
    left: { minX: 415, minY: 345, maxX: 611, maxY: 538 },
    right: { minX: 699, minY: 348, maxX: 892, maxY: 537 },
    top: { minX: 564, minY: 98, maxX: 756, maxY: 295 },
  },
  {
    left: { minX: 415, minY: 345, maxX: 611, maxY: 538 },
    right: { minX: 698, minY: 348, maxX: 892, maxY: 537 },
    top: { minX: 563, minY: 98, maxX: 755, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 538 },
    right: { minX: 698, minY: 347, maxX: 891, maxY: 536 },
    top: { minX: 563, minY: 97, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 610, maxY: 538 },
    right: { minX: 697, minY: 347, maxX: 891, maxY: 536 },
    top: { minX: 562, minY: 97, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 349, maxX: 891, maxY: 537 },
    top: { minX: 562, minY: 99, maxX: 754, maxY: 296 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 349, maxX: 890, maxY: 537 },
    top: { minX: 562, minY: 99, maxX: 754, maxY: 296 },
  },
  {
    left: { minX: 414, minY: 346, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 348, maxX: 891, maxY: 537 },
    top: { minX: 561, minY: 98, maxX: 754, maxY: 295 },
  },
  {
    left: { minX: 414, minY: 345, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 891, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 753, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 610, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 412, minY: 345, maxX: 609, maxY: 538 },
    right: { minX: 696, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 560, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 345, maxX: 609, maxY: 539 },
    right: { minX: 697, minY: 347, maxX: 890, maxY: 536 },
    top: { minX: 561, minY: 97, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 413, minY: 346, maxX: 609, maxY: 539 },
    right: { minX: 696, minY: 348, maxX: 890, maxY: 537 },
    top: { minX: 561, minY: 98, maxX: 752, maxY: 295 },
  },
  {
    left: { minX: 411, minY: 347, maxX: 607, maxY: 541 },
    right: { minX: 694, minY: 349, maxX: 888, maxY: 539 },
    top: { minX: 559, minY: 100, maxX: 750, maxY: 297 },
  },
  {
    left: { minX: 408, minY: 347, maxX: 605, maxY: 541 },
    right: { minX: 692, minY: 349, maxX: 886, maxY: 539 },
    top: { minX: 556, minY: 100, maxX: 748, maxY: 297 },
  },
  {
    left: { minX: 404, minY: 348, maxX: 602, maxY: 542 },
    right: { minX: 689, minY: 350, maxX: 883, maxY: 539 },
    top: { minX: 553, minY: 99, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 402, minY: 347, maxX: 600, maxY: 541 },
    right: { minX: 688, minY: 349, maxX: 882, maxY: 539 },
    top: { minX: 550, minY: 98, maxX: 743, maxY: 296 },
  },
  {
    left: { minX: 399, minY: 347, maxX: 597, maxY: 542 },
    right: { minX: 686, minY: 349, maxX: 880, maxY: 539 },
    top: { minX: 547, minY: 98, maxX: 740, maxY: 296 },
  },
  {
    left: { minX: 396, minY: 349, maxX: 595, maxY: 544 },
    right: { minX: 683, minY: 351, maxX: 878, maxY: 541 },
    top: { minX: 546, minY: 100, maxX: 738, maxY: 298 },
  },
  {
    left: { minX: 392, minY: 349, maxX: 592, maxY: 544 },
    right: { minX: 680, minY: 351, maxX: 874, maxY: 541 },
    top: { minX: 542, minY: 99, maxX: 735, maxY: 298 },
  },
  {
    left: { minX: 388, minY: 348, maxX: 588, maxY: 544 },
    right: { minX: 677, minY: 349, maxX: 872, maxY: 541 },
    top: { minX: 539, minY: 97, maxX: 732, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 348, maxX: 586, maxY: 544 },
    right: { minX: 675, minY: 350, maxX: 870, maxY: 542 },
    top: { minX: 537, minY: 97, maxX: 731, maxY: 297 },
  },
  {
    left: { minX: 381, minY: 346, maxX: 583, maxY: 543 },
    right: { minX: 672, minY: 349, maxX: 867, maxY: 541 },
    top: { minX: 534, minY: 95, maxX: 728, maxY: 295 },
  },
  {
    left: { minX: 378, minY: 346, maxX: 580, maxY: 543 },
    right: { minX: 669, minY: 348, maxX: 864, maxY: 540 },
    top: { minX: 530, minY: 93, maxX: 725, maxY: 294 },
  },
  {
    left: { minX: 379, minY: 347, maxX: 580, maxY: 544 },
    right: { minX: 669, minY: 349, maxX: 864, maxY: 542 },
    top: { minX: 531, minY: 96, maxX: 724, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 349, maxX: 582, maxY: 546 },
    right: { minX: 671, minY: 352, maxX: 866, maxY: 544 },
    top: { minX: 533, minY: 99, maxX: 727, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 351, maxX: 583, maxY: 547 },
    right: { minX: 672, minY: 354, maxX: 866, maxY: 545 },
    top: { minX: 534, minY: 102, maxX: 727, maxY: 301 },
  },
  {
    left: { minX: 384, minY: 352, maxX: 584, maxY: 547 },
    right: { minX: 673, minY: 354, maxX: 867, maxY: 546 },
    top: { minX: 535, minY: 103, maxX: 728, maxY: 301 },
  },
  {
    left: { minX: 383, minY: 351, maxX: 584, maxY: 547 },
    right: { minX: 672, minY: 353, maxX: 867, maxY: 545 },
    top: { minX: 535, minY: 101, maxX: 728, maxY: 300 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 583, maxY: 546 },
    right: { minX: 672, minY: 352, maxX: 867, maxY: 544 },
    top: { minX: 534, minY: 99, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 584, maxY: 546 },
    right: { minX: 673, minY: 352, maxX: 868, maxY: 544 },
    top: { minX: 535, minY: 99, maxX: 728, maxY: 298 },
  },
  {
    left: { minX: 383, minY: 350, maxX: 584, maxY: 546 },
    right: { minX: 673, minY: 353, maxX: 868, maxY: 544 },
    top: { minX: 535, minY: 101, maxX: 728, maxY: 299 },
  },
  {
    left: { minX: 383, minY: 351, maxX: 583, maxY: 547 },
    right: { minX: 672, minY: 354, maxX: 866, maxY: 545 },
    top: { minX: 534, minY: 103, maxX: 727, maxY: 301 },
  },
  {
    left: { minX: 385, minY: 355, maxX: 584, maxY: 549 },
    right: { minX: 673, minY: 357, maxX: 866, maxY: 548 },
    top: { minX: 535, minY: 107, maxX: 728, maxY: 304 },
  },
  {
    left: { minX: 386, minY: 356, maxX: 585, maxY: 550 },
    right: { minX: 673, minY: 359, maxX: 866, maxY: 549 },
    top: { minX: 537, minY: 109, maxX: 728, maxY: 306 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 549 },
    top: { minX: 536, minY: 111, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 536, minY: 111, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 584, maxY: 551 },
    right: { minX: 672, minY: 360, maxX: 864, maxY: 550 },
    top: { minX: 536, minY: 111, maxX: 727, maxY: 307 },
  },
  {
    left: { minX: 385, minY: 358, maxX: 584, maxY: 552 },
    right: { minX: 671, minY: 361, maxX: 863, maxY: 551 },
    top: { minX: 537, minY: 114, maxX: 727, maxY: 309 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 583, maxY: 551 },
    right: { minX: 671, minY: 360, maxX: 862, maxY: 549 },
    top: { minX: 536, minY: 112, maxX: 726, maxY: 307 },
  },
  {
    left: { minX: 388, minY: 357, maxX: 586, maxY: 550 },
    right: { minX: 673, minY: 361, maxX: 864, maxY: 550 },
    top: { minX: 539, minY: 114, maxX: 728, maxY: 308 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 586, maxY: 549 },
    right: { minX: 674, minY: 359, maxX: 865, maxY: 548 },
    top: { minX: 539, minY: 112, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 390, minY: 355, maxX: 587, maxY: 548 },
    right: { minX: 674, minY: 359, maxX: 865, maxY: 548 },
    top: { minX: 541, minY: 112, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 588, maxY: 548 },
    right: { minX: 675, minY: 359, maxX: 866, maxY: 547 },
    top: { minX: 542, minY: 113, maxX: 731, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 588, maxY: 547 },
    right: { minX: 674, minY: 359, maxX: 865, maxY: 547 },
    top: { minX: 541, minY: 112, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 359, maxX: 864, maxY: 547 },
    top: { minX: 541, minY: 113, maxX: 730, maxY: 306 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 586, maxY: 548 },
    right: { minX: 673, minY: 361, maxX: 862, maxY: 547 },
    top: { minX: 539, minY: 115, maxX: 728, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 674, minY: 359, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 730, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 587, maxY: 547 },
    right: { minX: 673, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 390, minY: 355, maxX: 586, maxY: 547 },
    right: { minX: 673, minY: 360, maxX: 862, maxY: 546 },
    top: { minX: 541, minY: 114, maxX: 729, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 586, maxY: 547 },
    right: { minX: 673, minY: 361, maxX: 861, maxY: 546 },
    top: { minX: 541, minY: 116, maxX: 728, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 353, maxX: 586, maxY: 544 },
    right: { minX: 672, minY: 358, maxX: 859, maxY: 543 },
    top: { minX: 539, minY: 113, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 392, minY: 354, maxX: 587, maxY: 544 },
    right: { minX: 672, minY: 359, maxX: 859, maxY: 543 },
    top: { minX: 542, minY: 115, maxX: 728, maxY: 306 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 585, maxY: 545 },
    right: { minX: 670, minY: 360, maxX: 856, maxY: 544 },
    top: { minX: 541, minY: 118, maxX: 726, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 584, maxY: 545 },
    right: { minX: 669, minY: 360, maxX: 854, maxY: 543 },
    top: { minX: 539, minY: 119, maxX: 724, maxY: 308 },
  },
  {
    left: { minX: 391, minY: 356, maxX: 584, maxY: 545 },
    right: { minX: 669, minY: 361, maxX: 854, maxY: 543 },
    top: { minX: 539, minY: 120, maxX: 724, maxY: 309 },
  },
  {
    left: { minX: 391, minY: 354, maxX: 584, maxY: 543 },
    right: { minX: 669, minY: 360, maxX: 853, maxY: 542 },
    top: { minX: 539, minY: 118, maxX: 724, maxY: 307 },
  },
  {
    left: { minX: 391, minY: 355, maxX: 584, maxY: 543 },
    right: { minX: 668, minY: 360, maxX: 851, maxY: 541 },
    top: { minX: 539, minY: 120, maxX: 723, maxY: 308 },
  },
  {
    left: { minX: 390, minY: 354, maxX: 582, maxY: 542 },
    right: { minX: 667, minY: 359, maxX: 850, maxY: 540 },
    top: { minX: 539, minY: 119, maxX: 722, maxY: 307 },
  },
  {
    left: { minX: 390, minY: 354, maxX: 582, maxY: 541 },
    right: { minX: 666, minY: 359, maxX: 848, maxY: 540 },
    top: { minX: 537, minY: 120, maxX: 721, maxY: 307 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 580, maxY: 542 },
    right: { minX: 664, minY: 360, maxX: 846, maxY: 540 },
    top: { minX: 536, minY: 121, maxX: 719, maxY: 308 },
  },
  {
    left: { minX: 389, minY: 355, maxX: 580, maxY: 542 },
    right: { minX: 664, minY: 360, maxX: 844, maxY: 539 },
    top: { minX: 536, minY: 122, maxX: 718, maxY: 308 },
  },
  {
    left: { minX: 388, minY: 355, maxX: 578, maxY: 542 },
    right: { minX: 662, minY: 360, maxX: 842, maxY: 539 },
    top: { minX: 534, minY: 123, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 389, minY: 356, maxX: 579, maxY: 542 },
    right: { minX: 662, minY: 360, maxX: 842, maxY: 538 },
    top: { minX: 534, minY: 125, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 579, maxY: 541 },
    right: { minX: 662, minY: 360, maxX: 841, maxY: 537 },
    top: { minX: 535, minY: 125, maxX: 715, maxY: 310 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 580, maxY: 541 },
    right: { minX: 663, minY: 361, maxX: 842, maxY: 538 },
    top: { minX: 536, minY: 127, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 580, maxY: 542 },
    right: { minX: 663, minY: 362, maxX: 841, maxY: 539 },
    top: { minX: 536, minY: 128, maxX: 716, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 542 },
    right: { minX: 662, minY: 362, maxX: 840, maxY: 538 },
    top: { minX: 535, minY: 129, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 579, maxY: 542 },
    right: { minX: 661, minY: 362, maxX: 838, maxY: 538 },
    top: { minX: 535, minY: 130, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 357, maxX: 579, maxY: 541 },
    right: { minX: 661, minY: 361, maxX: 838, maxY: 537 },
    top: { minX: 535, minY: 129, maxX: 714, maxY: 311 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 578, maxY: 541 },
    right: { minX: 660, minY: 361, maxX: 836, maxY: 537 },
    top: { minX: 535, minY: 131, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 393, minY: 358, maxX: 579, maxY: 540 },
    right: { minX: 661, minY: 362, maxX: 836, maxY: 536 },
    top: { minX: 535, minY: 131, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 395, minY: 359, maxX: 580, maxY: 541 },
    right: { minX: 661, minY: 363, maxX: 836, maxY: 537 },
    top: { minX: 537, minY: 133, maxX: 713, maxY: 313 },
  },
  {
    left: { minX: 396, minY: 358, maxX: 581, maxY: 539 },
    right: { minX: 662, minY: 362, maxX: 837, maxY: 535 },
    top: { minX: 538, minY: 133, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 399, minY: 358, maxX: 584, maxY: 538 },
    right: { minX: 664, minY: 361, maxX: 839, maxY: 534 },
    top: { minX: 540, minY: 133, maxX: 716, maxY: 312 },
  },
  {
    left: { minX: 403, minY: 357, maxX: 587, maxY: 536 },
    right: { minX: 667, minY: 361, maxX: 841, maxY: 533 },
    top: { minX: 543, minY: 133, maxX: 719, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 357, maxX: 589, maxY: 536 },
    right: { minX: 669, minY: 361, maxX: 842, maxY: 532 },
    top: { minX: 546, minY: 134, maxX: 720, maxY: 312 },
  },
  {
    left: { minX: 409, minY: 357, maxX: 590, maxY: 536 },
    right: { minX: 669, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 547, minY: 135, maxX: 721, maxY: 313 },
  },
  {
    left: { minX: 409, minY: 357, maxX: 590, maxY: 535 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 531 },
    top: { minX: 547, minY: 135, maxX: 721, maxY: 312 },
  },
  {
    left: { minX: 411, minY: 357, maxX: 592, maxY: 534 },
    right: { minX: 671, minY: 361, maxX: 842, maxY: 530 },
    top: { minX: 549, minY: 135, maxX: 722, maxY: 312 },
  },
  {
    left: { minX: 411, minY: 356, maxX: 591, maxY: 533 },
    right: { minX: 670, minY: 361, maxX: 842, maxY: 530 },
    top: { minX: 549, minY: 136, maxX: 722, maxY: 312 },
  },
  {
    left: { minX: 409, minY: 355, maxX: 590, maxY: 533 },
    right: { minX: 669, minY: 360, maxX: 840, maxY: 529 },
    top: { minX: 548, minY: 135, maxX: 720, maxY: 311 },
  },
  {
    left: { minX: 409, minY: 355, maxX: 589, maxY: 532 },
    right: { minX: 668, minY: 359, maxX: 838, maxY: 528 },
    top: { minX: 547, minY: 135, maxX: 720, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 587, maxY: 533 },
    right: { minX: 666, minY: 360, maxX: 836, maxY: 528 },
    top: { minX: 545, minY: 136, maxX: 717, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 588, maxY: 532 },
    right: { minX: 666, minY: 359, maxX: 836, maxY: 527 },
    top: { minX: 545, minY: 136, maxX: 717, maxY: 311 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 587, maxY: 531 },
    right: { minX: 666, minY: 358, maxX: 836, maxY: 526 },
    top: { minX: 545, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 588, maxY: 531 },
    right: { minX: 666, minY: 358, maxX: 834, maxY: 525 },
    top: { minX: 544, minY: 135, maxX: 716, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 586, maxY: 532 },
    right: { minX: 664, minY: 359, maxX: 833, maxY: 526 },
    top: { minX: 543, minY: 137, maxX: 715, maxY: 312 },
  },
  {
    left: { minX: 406, minY: 357, maxX: 586, maxY: 532 },
    right: { minX: 664, minY: 360, maxX: 832, maxY: 527 },
    top: { minX: 543, minY: 139, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 356, maxX: 586, maxY: 532 },
    right: { minX: 663, minY: 359, maxX: 832, maxY: 526 },
    top: { minX: 543, minY: 137, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 586, maxY: 531 },
    right: { minX: 664, minY: 358, maxX: 832, maxY: 524 },
    top: { minX: 544, minY: 136, maxX: 714, maxY: 310 },
  },
  {
    left: { minX: 407, minY: 353, maxX: 586, maxY: 529 },
    right: { minX: 664, minY: 356, maxX: 832, maxY: 523 },
    top: { minX: 543, minY: 134, maxX: 714, maxY: 309 },
  },
  {
    left: { minX: 408, minY: 351, maxX: 587, maxY: 526 },
    right: { minX: 665, minY: 353, maxX: 833, maxY: 519 },
    top: { minX: 543, minY: 131, maxX: 715, maxY: 306 },
  },
  {
    left: { minX: 409, minY: 351, maxX: 588, maxY: 526 },
    right: { minX: 665, minY: 353, maxX: 833, maxY: 519 },
    top: { minX: 544, minY: 131, maxX: 715, maxY: 306 },
  },
  {
    left: { minX: 410, minY: 353, maxX: 588, maxY: 527 },
    right: { minX: 666, minY: 355, maxX: 832, maxY: 520 },
    top: { minX: 544, minY: 134, maxX: 714, maxY: 308 },
  },
  {
    left: { minX: 412, minY: 354, maxX: 589, maxY: 528 },
    right: { minX: 666, minY: 356, maxX: 832, maxY: 521 },
    top: { minX: 546, minY: 137, maxX: 715, maxY: 309 },
  },
  {
    left: { minX: 415, minY: 354, maxX: 591, maxY: 527 },
    right: { minX: 667, minY: 356, maxX: 834, maxY: 520 },
    top: { minX: 547, minY: 137, maxX: 716, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 352, maxX: 594, maxY: 526 },
    right: { minX: 671, minY: 355, maxX: 836, maxY: 519 },
    top: { minX: 551, minY: 136, maxX: 720, maxY: 308 },
  },
  {
    left: { minX: 421, minY: 353, maxX: 597, maxY: 525 },
    right: { minX: 674, minY: 356, maxX: 839, maxY: 520 },
    top: { minX: 555, minY: 137, maxX: 724, maxY: 309 },
  },
  {
    left: { minX: 421, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 673, minY: 357, maxX: 838, maxY: 521 },
    top: { minX: 554, minY: 139, maxX: 723, maxY: 311 },
  },
  {
    left: { minX: 420, minY: 356, maxX: 595, maxY: 528 },
    right: { minX: 671, minY: 359, maxX: 837, maxY: 522 },
    top: { minX: 553, minY: 141, maxX: 721, maxY: 312 },
  },
  {
    left: { minX: 420, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 672, minY: 358, maxX: 838, maxY: 521 },
    top: { minX: 554, minY: 139, maxX: 722, maxY: 311 },
  },
  {
    left: { minX: 422, minY: 353, maxX: 598, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 840, maxY: 521 },
    top: { minX: 555, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 422, minY: 354, maxX: 598, maxY: 526 },
    right: { minX: 674, minY: 357, maxX: 840, maxY: 521 },
    top: { minX: 555, minY: 139, maxX: 724, maxY: 310 },
  },
  {
    left: { minX: 420, minY: 354, maxX: 596, maxY: 527 },
    right: { minX: 672, minY: 356, maxX: 838, maxY: 520 },
    top: { minX: 553, minY: 138, maxX: 721, maxY: 310 },
  },
  {
    left: { minX: 419, minY: 353, maxX: 594, maxY: 526 },
    right: { minX: 671, minY: 356, maxX: 837, maxY: 520 },
    top: { minX: 552, minY: 137, maxX: 720, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 353, maxX: 594, maxY: 526 },
    right: { minX: 670, minY: 355, maxX: 836, maxY: 519 },
    top: { minX: 551, minY: 136, maxX: 720, maxY: 309 },
  },
  {
    left: { minX: 415, minY: 353, maxX: 592, maxY: 526 },
    right: { minX: 668, minY: 355, maxX: 834, maxY: 520 },
    top: { minX: 549, minY: 137, maxX: 718, maxY: 309 },
  },
  {
    left: { minX: 412, minY: 352, maxX: 589, maxY: 526 },
    right: { minX: 666, minY: 355, maxX: 832, maxY: 519 },
    top: { minX: 546, minY: 135, maxX: 715, maxY: 308 },
  },
  {
    left: { minX: 410, minY: 353, maxX: 587, maxY: 526 },
    right: { minX: 664, minY: 355, maxX: 830, maxY: 520 },
    top: { minX: 544, minY: 135, maxX: 714, maxY: 308 },
  },
  {
    left: { minX: 407, minY: 353, maxX: 584, maxY: 527 },
    right: { minX: 661, minY: 356, maxX: 828, maxY: 521 },
    top: { minX: 541, minY: 137, maxX: 710, maxY: 309 },
  },
  {
    left: { minX: 403, minY: 354, maxX: 580, maxY: 529 },
    right: { minX: 658, minY: 357, maxX: 824, maxY: 522 },
    top: { minX: 537, minY: 137, maxX: 707, maxY: 310 },
  },
  {
    left: { minX: 401, minY: 355, maxX: 578, maxY: 530 },
    right: { minX: 656, minY: 358, maxX: 822, maxY: 523 },
    top: { minX: 535, minY: 139, maxX: 705, maxY: 311 },
  },
  {
    left: { minX: 396, minY: 357, maxX: 575, maxY: 532 },
    right: { minX: 653, minY: 359, maxX: 820, maxY: 525 },
    top: { minX: 531, minY: 139, maxX: 701, maxY: 312 },
  },
  {
    left: { minX: 390, minY: 356, maxX: 570, maxY: 532 },
    right: { minX: 649, minY: 357, maxX: 816, maxY: 524 },
    top: { minX: 525, minY: 137, maxX: 696, maxY: 311 },
  },
  {
    left: { minX: 388, minY: 357, maxX: 568, maxY: 533 },
    right: { minX: 647, minY: 358, maxX: 814, maxY: 525 },
    top: { minX: 524, minY: 137, maxX: 695, maxY: 311 },
  },
  {
    left: { minX: 385, minY: 357, maxX: 566, maxY: 534 },
    right: { minX: 645, minY: 359, maxX: 812, maxY: 526 },
    top: { minX: 521, minY: 138, maxX: 692, maxY: 312 },
  },
  {
    left: { minX: 383, minY: 359, maxX: 564, maxY: 536 },
    right: { minX: 643, minY: 361, maxX: 811, maxY: 528 },
    top: { minX: 520, minY: 139, maxX: 691, maxY: 313 },
  },
  {
    left: { minX: 381, minY: 359, maxX: 563, maxY: 537 },
    right: { minX: 642, minY: 361, maxX: 810, maxY: 529 },
    top: { minX: 518, minY: 139, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 380, minY: 360, maxX: 562, maxY: 537 },
    right: { minX: 642, minY: 361, maxX: 810, maxY: 529 },
    top: { minX: 517, minY: 139, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 381, minY: 360, maxX: 563, maxY: 538 },
    right: { minX: 643, minY: 361, maxX: 812, maxY: 530 },
    top: { minX: 519, minY: 139, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 385, minY: 362, maxX: 567, maxY: 540 },
    right: { minX: 647, minY: 364, maxX: 816, maxY: 533 },
    top: { minX: 523, minY: 142, maxX: 695, maxY: 317 },
  },
  {
    left: { minX: 385, minY: 362, maxX: 567, maxY: 540 },
    right: { minX: 647, minY: 364, maxX: 816, maxY: 533 },
    top: { minX: 523, minY: 142, maxX: 695, maxY: 317 },
  },
  {
    left: { minX: 386, minY: 362, maxX: 568, maxY: 540 },
    right: { minX: 648, minY: 364, maxX: 818, maxY: 534 },
    top: { minX: 524, minY: 141, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 385, minY: 361, maxX: 567, maxY: 539 },
    right: { minX: 647, minY: 363, maxX: 818, maxY: 533 },
    top: { minX: 523, minY: 139, maxX: 696, maxY: 315 },
  },
  {
    left: { minX: 385, minY: 359, maxX: 568, maxY: 537 },
    right: { minX: 648, minY: 361, maxX: 820, maxY: 532 },
    top: { minX: 523, minY: 136, maxX: 697, maxY: 313 },
  },
  {
    left: { minX: 387, minY: 357, maxX: 571, maxY: 536 },
    right: { minX: 651, minY: 360, maxX: 823, maxY: 531 },
    top: { minX: 527, minY: 134, maxX: 700, maxY: 311 },
  },
  {
    left: { minX: 390, minY: 357, maxX: 573, maxY: 535 },
    right: { minX: 653, minY: 360, maxX: 826, maxY: 531 },
    top: { minX: 530, minY: 134, maxX: 704, maxY: 312 },
  },
  {
    left: { minX: 391, minY: 358, maxX: 574, maxY: 536 },
    right: { minX: 654, minY: 361, maxX: 826, maxY: 532 },
    top: { minX: 530, minY: 135, maxX: 704, maxY: 312 },
  },
  {
    left: { minX: 394, minY: 359, maxX: 576, maxY: 537 },
    right: { minX: 656, minY: 362, maxX: 828, maxY: 533 },
    top: { minX: 533, minY: 137, maxX: 706, maxY: 314 },
  },
  {
    left: { minX: 398, minY: 361, maxX: 579, maxY: 538 },
    right: { minX: 658, minY: 364, maxX: 830, maxY: 534 },
    top: { minX: 535, minY: 140, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 401, minY: 361, maxX: 582, maxY: 537 },
    right: { minX: 661, minY: 363, maxX: 833, maxY: 534 },
    top: { minX: 539, minY: 139, maxX: 712, maxY: 315 },
  },
  {
    left: { minX: 402, minY: 359, maxX: 582, maxY: 536 },
    right: { minX: 662, minY: 362, maxX: 834, maxY: 532 },
    top: { minX: 539, minY: 138, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 401, minY: 358, maxX: 582, maxY: 534 },
    right: { minX: 661, minY: 361, maxX: 832, maxY: 531 },
    top: { minX: 539, minY: 137, maxX: 711, maxY: 313 },
  },
  {
    left: { minX: 402, minY: 359, maxX: 581, maxY: 535 },
    right: { minX: 660, minY: 362, maxX: 830, maxY: 531 },
    top: { minX: 538, minY: 139, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 361, maxX: 580, maxY: 536 },
    right: { minX: 659, minY: 363, maxX: 829, maxY: 532 },
    top: { minX: 538, minY: 142, maxX: 708, maxY: 316 },
  },
  {
    left: { minX: 404, minY: 359, maxX: 581, maxY: 533 },
    right: { minX: 660, minY: 362, maxX: 829, maxY: 530 },
    top: { minX: 539, minY: 141, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 359, maxX: 584, maxY: 533 },
    right: { minX: 662, minY: 362, maxX: 830, maxY: 529 },
    top: { minX: 541, minY: 143, maxX: 710, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 358, maxX: 586, maxY: 531 },
    right: { minX: 664, minY: 361, maxX: 831, maxY: 527 },
    top: { minX: 543, minY: 143, maxX: 712, maxY: 314 },
  },
  {
    left: { minX: 411, minY: 359, maxX: 586, maxY: 531 },
    right: { minX: 663, minY: 361, maxX: 830, maxY: 527 },
    top: { minX: 544, minY: 143, maxX: 712, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 361, maxX: 584, maxY: 532 },
    right: { minX: 661, minY: 364, maxX: 827, maxY: 528 },
    top: { minX: 543, minY: 147, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 362, maxX: 585, maxY: 533 },
    right: { minX: 661, minY: 365, maxX: 826, maxY: 529 },
    top: { minX: 543, minY: 149, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 585, maxY: 532 },
    right: { minX: 662, minY: 365, maxX: 826, maxY: 528 },
    top: { minX: 544, minY: 150, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 413, minY: 361, maxX: 586, maxY: 531 },
    right: { minX: 662, minY: 364, maxX: 826, maxY: 527 },
    top: { minX: 545, minY: 149, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 360, maxX: 588, maxY: 529 },
    right: { minX: 663, minY: 363, maxX: 827, maxY: 525 },
    top: { minX: 546, minY: 149, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 361, maxX: 589, maxY: 529 },
    right: { minX: 665, minY: 363, maxX: 828, maxY: 525 },
    top: { minX: 548, minY: 151, maxX: 712, maxY: 318 },
  },
  {
    left: { minX: 418, minY: 361, maxX: 589, maxY: 529 },
    right: { minX: 664, minY: 364, maxX: 826, maxY: 525 },
    top: { minX: 548, minY: 152, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 419, minY: 363, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 366, maxX: 826, maxY: 526 },
    top: { minX: 549, minY: 155, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 420, minY: 363, maxX: 589, maxY: 530 },
    right: { minX: 664, minY: 366, maxX: 824, maxY: 525 },
    top: { minX: 549, minY: 156, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 420, minY: 363, maxX: 589, maxY: 530 },
    right: { minX: 663, minY: 366, maxX: 824, maxY: 525 },
    top: { minX: 549, minY: 157, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 417, minY: 364, maxX: 586, maxY: 530 },
    right: { minX: 660, minY: 366, maxX: 820, maxY: 525 },
    top: { minX: 545, minY: 157, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 416, minY: 365, maxX: 585, maxY: 531 },
    right: { minX: 659, minY: 367, maxX: 819, maxY: 525 },
    top: { minX: 544, minY: 159, maxX: 705, maxY: 322 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 369, maxX: 816, maxY: 527 },
    top: { minX: 543, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 367, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 369, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 416, minY: 367, maxX: 584, maxY: 533 },
    right: { minX: 658, minY: 370, maxX: 816, maxY: 527 },
    top: { minX: 544, minY: 163, maxX: 704, maxY: 326 },
  },
  {
    left: { minX: 417, minY: 367, maxX: 584, maxY: 532 },
    right: { minX: 658, minY: 369, maxX: 815, maxY: 526 },
    top: { minX: 544, minY: 163, maxX: 703, maxY: 325 },
  },
  {
    left: { minX: 419, minY: 367, maxX: 586, maxY: 531 },
    right: { minX: 659, minY: 369, maxX: 816, maxY: 525 },
    top: { minX: 545, minY: 163, maxX: 704, maxY: 325 },
  },
  {
    left: { minX: 422, minY: 366, maxX: 588, maxY: 530 },
    right: { minX: 661, minY: 368, maxX: 818, maxY: 524 },
    top: { minX: 547, minY: 163, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 424, minY: 366, maxX: 590, maxY: 530 },
    right: { minX: 662, minY: 369, maxX: 818, maxY: 524 },
    top: { minX: 549, minY: 164, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 592, maxY: 530 },
    right: { minX: 664, minY: 369, maxX: 820, maxY: 524 },
    top: { minX: 551, minY: 167, maxX: 709, maxY: 326 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 592, maxY: 529 },
    right: { minX: 665, minY: 369, maxX: 820, maxY: 522 },
    top: { minX: 552, minY: 166, maxX: 710, maxY: 325 },
  },
  {
    left: { minX: 430, minY: 365, maxX: 594, maxY: 527 },
    right: { minX: 666, minY: 367, maxX: 820, maxY: 521 },
    top: { minX: 553, minY: 165, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 433, minY: 364, maxX: 597, maxY: 525 },
    right: { minX: 668, minY: 365, maxX: 823, maxY: 519 },
    top: { minX: 557, minY: 163, maxX: 714, maxY: 322 },
  },
  {
    left: { minX: 436, minY: 365, maxX: 599, maxY: 526 },
    right: { minX: 670, minY: 367, maxX: 824, maxY: 520 },
    top: { minX: 559, minY: 166, maxX: 715, maxY: 324 },
  },
  {
    left: { minX: 439, minY: 364, maxX: 601, maxY: 524 },
    right: { minX: 672, minY: 366, maxX: 826, maxY: 518 },
    top: { minX: 562, minY: 165, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 441, minY: 363, maxX: 603, maxY: 523 },
    right: { minX: 673, minY: 366, maxX: 826, maxY: 518 },
    top: { minX: 563, minY: 166, maxX: 719, maxY: 323 },
  },
  {
    left: { minX: 443, minY: 365, maxX: 604, maxY: 524 },
    right: { minX: 674, minY: 367, maxX: 826, maxY: 519 },
    top: { minX: 565, minY: 168, maxX: 719, maxY: 324 },
  },
  {
    left: { minX: 444, minY: 364, maxX: 604, maxY: 523 },
    right: { minX: 674, minY: 367, maxX: 827, maxY: 518 },
    top: { minX: 566, minY: 168, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 607, maxY: 523 },
    right: { minX: 676, minY: 368, maxX: 828, maxY: 518 },
    top: { minX: 568, minY: 170, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 364, maxX: 608, maxY: 522 },
    right: { minX: 677, minY: 367, maxX: 829, maxY: 517 },
    top: { minX: 570, minY: 170, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 452, minY: 363, maxX: 610, maxY: 521 },
    right: { minX: 679, minY: 367, maxX: 830, maxY: 516 },
    top: { minX: 572, minY: 169, maxX: 725, maxY: 324 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 611, maxY: 519 },
    right: { minX: 680, minY: 366, maxX: 830, maxY: 515 },
    top: { minX: 573, minY: 169, maxX: 726, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 612, maxY: 519 },
    right: { minX: 680, minY: 366, maxX: 830, maxY: 514 },
    top: { minX: 575, minY: 169, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 454, minY: 362, maxX: 611, maxY: 518 },
    right: { minX: 679, minY: 366, maxX: 829, maxY: 514 },
    top: { minX: 574, minY: 170, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 360, maxX: 610, maxY: 516 },
    right: { minX: 678, minY: 363, maxX: 828, maxY: 511 },
    top: { minX: 573, minY: 167, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 611, maxY: 516 },
    right: { minX: 679, minY: 364, maxX: 828, maxY: 511 },
    top: { minX: 573, minY: 169, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 455, minY: 359, maxX: 612, maxY: 515 },
    right: { minX: 679, minY: 363, maxX: 828, maxY: 510 },
    top: { minX: 574, minY: 168, maxX: 725, maxY: 320 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 365, maxX: 828, maxY: 511 },
    top: { minX: 575, minY: 171, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 612, maxY: 516 },
    right: { minX: 680, minY: 365, maxX: 827, maxY: 511 },
    top: { minX: 575, minY: 172, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 828, maxY: 513 },
    top: { minX: 576, minY: 175, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 615, maxY: 515 },
    right: { minX: 682, minY: 365, maxX: 829, maxY: 510 },
    top: { minX: 577, minY: 172, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 616, maxY: 514 },
    right: { minX: 683, minY: 365, maxX: 830, maxY: 509 },
    top: { minX: 579, minY: 172, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 463, minY: 360, maxX: 617, maxY: 513 },
    right: { minX: 683, minY: 363, maxX: 830, maxY: 509 },
    top: { minX: 580, minY: 171, maxX: 729, maxY: 322 },
  },
  {
    left: { minX: 462, minY: 361, maxX: 616, maxY: 514 },
    right: { minX: 682, minY: 365, maxX: 828, maxY: 509 },
    top: { minX: 579, minY: 173, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 460, minY: 362, maxX: 614, maxY: 515 },
    right: { minX: 681, minY: 365, maxX: 827, maxY: 510 },
    top: { minX: 577, minY: 173, maxX: 726, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 679, minY: 367, maxX: 825, maxY: 511 },
    top: { minX: 576, minY: 176, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 458, minY: 365, maxX: 612, maxY: 517 },
    right: { minX: 678, minY: 368, maxX: 824, maxY: 512 },
    top: { minX: 575, minY: 177, maxX: 723, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 364, maxX: 613, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 826, maxY: 511 },
    top: { minX: 576, minY: 176, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 364, maxX: 614, maxY: 517 },
    right: { minX: 680, minY: 367, maxX: 826, maxY: 511 },
    top: { minX: 577, minY: 176, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 461, minY: 364, maxX: 615, maxY: 516 },
    right: { minX: 681, minY: 367, maxX: 827, maxY: 511 },
    top: { minX: 577, minY: 175, maxX: 725, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 361, maxX: 615, maxY: 513 },
    right: { minX: 681, minY: 364, maxX: 828, maxY: 508 },
    top: { minX: 578, minY: 173, maxX: 726, maxY: 322 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 515 },
    right: { minX: 680, minY: 365, maxX: 826, maxY: 509 },
    top: { minX: 577, minY: 174, maxX: 725, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 612, maxY: 516 },
    right: { minX: 679, minY: 366, maxX: 825, maxY: 510 },
    top: { minX: 575, minY: 175, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 612, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 575, minY: 176, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 364, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 824, maxY: 511 },
    top: { minX: 573, minY: 175, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 612, maxY: 516 },
    right: { minX: 678, minY: 366, maxX: 825, maxY: 511 },
    top: { minX: 575, minY: 175, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 612, maxY: 516 },
    right: { minX: 678, minY: 366, maxX: 825, maxY: 511 },
    top: { minX: 575, minY: 174, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 611, maxY: 516 },
    right: { minX: 678, minY: 367, maxX: 825, maxY: 512 },
    top: { minX: 575, minY: 174, maxX: 723, maxY: 325 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 609, maxY: 516 },
    right: { minX: 677, minY: 367, maxX: 824, maxY: 512 },
    top: { minX: 573, minY: 173, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 364, maxX: 608, maxY: 517 },
    right: { minX: 675, minY: 368, maxX: 823, maxY: 514 },
    top: { minX: 571, minY: 175, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 606, maxY: 517 },
    right: { minX: 674, minY: 367, maxX: 822, maxY: 514 },
    top: { minX: 569, minY: 174, maxX: 719, maxY: 325 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 606, maxY: 516 },
    right: { minX: 674, minY: 366, maxX: 823, maxY: 513 },
    top: { minX: 570, minY: 172, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 606, maxY: 518 },
    right: { minX: 674, minY: 367, maxX: 823, maxY: 514 },
    top: { minX: 569, minY: 173, maxX: 719, maxY: 325 },
  },
  {
    left: { minX: 450, minY: 364, maxX: 606, maxY: 518 },
    right: { minX: 674, minY: 367, maxX: 823, maxY: 514 },
    top: { minX: 569, minY: 173, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 603, maxY: 519 },
    right: { minX: 672, minY: 368, maxX: 820, maxY: 515 },
    top: { minX: 565, minY: 173, maxX: 716, maxY: 326 },
  },
  {
    left: { minX: 445, minY: 364, maxX: 601, maxY: 519 },
    right: { minX: 670, minY: 367, maxX: 819, maxY: 515 },
    top: { minX: 564, minY: 173, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 520 },
    right: { minX: 669, minY: 368, maxX: 818, maxY: 517 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 365, maxX: 600, maxY: 520 },
    right: { minX: 669, minY: 368, maxX: 819, maxY: 517 },
    top: { minX: 563, minY: 173, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 364, maxX: 601, maxY: 519 },
    right: { minX: 670, minY: 367, maxX: 820, maxY: 516 },
    top: { minX: 563, minY: 172, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 447, minY: 364, maxX: 603, maxY: 519 },
    right: { minX: 672, minY: 367, maxX: 822, maxY: 516 },
    top: { minX: 565, minY: 172, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 450, minY: 365, maxX: 606, maxY: 520 },
    right: { minX: 675, minY: 369, maxX: 825, maxY: 517 },
    top: { minX: 568, minY: 173, maxX: 719, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 606, maxY: 521 },
    right: { minX: 676, minY: 369, maxX: 826, maxY: 518 },
    top: { minX: 569, minY: 174, maxX: 720, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 365, maxX: 608, maxY: 520 },
    right: { minX: 677, minY: 368, maxX: 828, maxY: 517 },
    top: { minX: 570, minY: 173, maxX: 722, maxY: 326 },
  },
  {
    left: { minX: 452, minY: 366, maxX: 608, maxY: 520 },
    right: { minX: 677, minY: 368, maxX: 828, maxY: 517 },
    top: { minX: 570, minY: 173, maxX: 721, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 364, maxX: 612, maxY: 519 },
    right: { minX: 681, minY: 368, maxX: 833, maxY: 517 },
    top: { minX: 575, minY: 171, maxX: 726, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 365, maxX: 616, maxY: 519 },
    right: { minX: 686, minY: 368, maxX: 838, maxY: 518 },
    top: { minX: 580, minY: 172, maxX: 732, maxY: 326 },
  },
  {
    left: { minX: 465, minY: 364, maxX: 620, maxY: 519 },
    right: { minX: 689, minY: 368, maxX: 841, maxY: 518 },
    top: { minX: 583, minY: 173, maxX: 734, maxY: 326 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 620, maxY: 518 },
    right: { minX: 690, minY: 367, maxX: 842, maxY: 517 },
    top: { minX: 584, minY: 171, maxX: 736, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 364, maxX: 624, maxY: 518 },
    right: { minX: 693, minY: 367, maxX: 845, maxY: 517 },
    top: { minX: 587, minY: 171, maxX: 738, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 365, maxX: 626, maxY: 519 },
    right: { minX: 696, minY: 367, maxX: 849, maxY: 518 },
    top: { minX: 589, minY: 172, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 473, minY: 365, maxX: 627, maxY: 519 },
    right: { minX: 696, minY: 367, maxX: 849, maxY: 518 },
    top: { minX: 589, minY: 173, maxX: 741, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 365, maxX: 624, maxY: 519 },
    right: { minX: 693, minY: 368, maxX: 845, maxY: 517 },
    top: { minX: 586, minY: 173, maxX: 737, maxY: 325 },
  },
  {
    left: { minX: 464, minY: 363, maxX: 619, maxY: 517 },
    right: { minX: 688, minY: 365, maxX: 840, maxY: 514 },
    top: { minX: 581, minY: 170, maxX: 732, maxY: 323 },
  },
  {
    left: { minX: 461, minY: 365, maxX: 616, maxY: 519 },
    right: { minX: 685, minY: 367, maxX: 836, maxY: 516 },
    top: { minX: 577, minY: 173, maxX: 728, maxY: 325 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 616, maxY: 517 },
    right: { minX: 685, minY: 365, maxX: 836, maxY: 514 },
    top: { minX: 578, minY: 171, maxX: 729, maxY: 324 },
  },
  {
    left: { minX: 462, minY: 362, maxX: 616, maxY: 515 },
    right: { minX: 685, minY: 363, maxX: 835, maxY: 511 },
    top: { minX: 577, minY: 169, maxX: 728, maxY: 322 },
  },
  {
    left: { minX: 462, minY: 364, maxX: 615, maxY: 516 },
    right: { minX: 684, minY: 365, maxX: 834, maxY: 514 },
    top: { minX: 577, minY: 173, maxX: 727, maxY: 324 },
  },
  {
    left: { minX: 461, minY: 362, maxX: 614, maxY: 514 },
    right: { minX: 683, minY: 363, maxX: 832, maxY: 511 },
    top: { minX: 577, minY: 171, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 460, minY: 363, maxX: 612, maxY: 514 },
    right: { minX: 681, minY: 364, maxX: 829, maxY: 511 },
    top: { minX: 575, minY: 173, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 363, maxX: 611, maxY: 514 },
    right: { minX: 679, minY: 365, maxX: 826, maxY: 511 },
    top: { minX: 573, minY: 174, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 609, maxY: 513 },
    right: { minX: 677, minY: 364, maxX: 824, maxY: 509 },
    top: { minX: 571, minY: 173, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 609, maxY: 512 },
    right: { minX: 677, minY: 363, maxX: 824, maxY: 509 },
    top: { minX: 572, minY: 173, maxX: 720, maxY: 322 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 610, maxY: 512 },
    right: { minX: 677, minY: 364, maxX: 824, maxY: 509 },
    top: { minX: 573, minY: 174, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 609, maxY: 511 },
    right: { minX: 676, minY: 364, maxX: 822, maxY: 509 },
    top: { minX: 572, minY: 175, maxX: 719, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 608, maxY: 512 },
    right: { minX: 674, minY: 365, maxX: 820, maxY: 509 },
    top: { minX: 571, minY: 176, maxX: 718, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 363, maxX: 608, maxY: 512 },
    right: { minX: 674, minY: 365, maxX: 819, maxY: 509 },
    top: { minX: 571, minY: 177, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 607, maxY: 511 },
    right: { minX: 674, minY: 365, maxX: 818, maxY: 507 },
    top: { minX: 571, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 361, maxX: 608, maxY: 509 },
    right: { minX: 674, minY: 364, maxX: 818, maxY: 507 },
    top: { minX: 572, minY: 176, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 607, maxY: 510 },
    right: { minX: 673, minY: 365, maxX: 816, maxY: 507 },
    top: { minX: 571, minY: 177, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 456, minY: 363, maxX: 605, maxY: 510 },
    right: { minX: 671, minY: 366, maxX: 814, maxY: 507 },
    top: { minX: 569, minY: 179, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 602, maxY: 511 },
    right: { minX: 668, minY: 365, maxX: 809, maxY: 507 },
    top: { minX: 566, minY: 180, maxX: 710, maxY: 326 },
  },
  {
    left: { minX: 453, minY: 361, maxX: 602, maxY: 508 },
    right: { minX: 667, minY: 363, maxX: 809, maxY: 504 },
    top: { minX: 566, minY: 179, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 602, maxY: 508 },
    right: { minX: 667, minY: 364, maxX: 808, maxY: 503 },
    top: { minX: 566, minY: 179, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 602, maxY: 507 },
    right: { minX: 667, minY: 364, maxX: 807, maxY: 503 },
    top: { minX: 566, minY: 179, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 602, maxY: 507 },
    right: { minX: 666, minY: 364, maxX: 806, maxY: 503 },
    top: { minX: 567, minY: 180, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 363, maxX: 599, maxY: 509 },
    right: { minX: 663, minY: 366, maxX: 802, maxY: 505 },
    top: { minX: 563, minY: 183, maxX: 706, maxY: 326 },
  },
  {
    left: { minX: 450, minY: 364, maxX: 597, maxY: 509 },
    right: { minX: 661, minY: 366, maxX: 800, maxY: 504 },
    top: { minX: 561, minY: 183, maxX: 703, maxY: 327 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 597, maxY: 508 },
    right: { minX: 662, minY: 365, maxX: 800, maxY: 503 },
    top: { minX: 561, minY: 183, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 451, minY: 362, maxX: 598, maxY: 507 },
    right: { minX: 662, minY: 365, maxX: 800, maxY: 502 },
    top: { minX: 561, minY: 183, maxX: 702, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 361, maxX: 598, maxY: 505 },
    right: { minX: 662, minY: 363, maxX: 800, maxY: 500 },
    top: { minX: 563, minY: 183, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 361, maxX: 600, maxY: 504 },
    right: { minX: 662, minY: 363, maxX: 800, maxY: 499 },
    top: { minX: 563, minY: 182, maxX: 704, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 600, maxY: 504 },
    right: { minX: 663, minY: 363, maxX: 799, maxY: 498 },
    top: { minX: 564, minY: 183, maxX: 703, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 361, maxX: 599, maxY: 504 },
    right: { minX: 662, minY: 363, maxX: 798, maxY: 498 },
    top: { minX: 563, minY: 183, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 455, minY: 362, maxX: 599, maxY: 505 },
    right: { minX: 662, minY: 364, maxX: 797, maxY: 499 },
    top: { minX: 563, minY: 186, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 599, maxY: 505 },
    right: { minX: 661, minY: 365, maxX: 796, maxY: 499 },
    top: { minX: 563, minY: 187, maxX: 701, maxY: 327 },
  },
  {
    left: { minX: 455, minY: 362, maxX: 598, maxY: 504 },
    right: { minX: 660, minY: 364, maxX: 795, maxY: 498 },
    top: { minX: 563, minY: 187, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 599, maxY: 503 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 563, minY: 187, maxX: 701, maxY: 326 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 600, maxY: 503 },
    right: { minX: 661, minY: 364, maxX: 795, maxY: 497 },
    top: { minX: 564, minY: 188, maxX: 701, maxY: 326 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 599, maxY: 501 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 564, minY: 187, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 361, maxX: 599, maxY: 501 },
    right: { minX: 660, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 564, minY: 187, maxX: 700, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 361, maxX: 601, maxY: 501 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 495 },
    top: { minX: 565, minY: 188, maxX: 702, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 360, maxX: 601, maxY: 500 },
    right: { minX: 661, minY: 363, maxX: 794, maxY: 494 },
    top: { minX: 565, minY: 188, maxX: 701, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 359, maxX: 602, maxY: 498 },
    right: { minX: 662, minY: 361, maxX: 794, maxY: 493 },
    top: { minX: 567, minY: 187, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 461, minY: 359, maxX: 602, maxY: 498 },
    right: { minX: 662, minY: 362, maxX: 793, maxY: 492 },
    top: { minX: 567, minY: 188, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 463, minY: 359, maxX: 603, maxY: 497 },
    right: { minX: 662, minY: 361, maxX: 794, maxY: 491 },
    top: { minX: 568, minY: 187, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 463, minY: 358, maxX: 602, maxY: 496 },
    right: { minX: 662, minY: 360, maxX: 792, maxY: 490 },
    top: { minX: 568, minY: 187, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 357, maxX: 602, maxY: 495 },
    right: { minX: 661, minY: 360, maxX: 792, maxY: 489 },
    top: { minX: 567, minY: 187, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 461, minY: 359, maxX: 601, maxY: 497 },
    right: { minX: 660, minY: 362, maxX: 790, maxY: 491 },
    top: { minX: 567, minY: 189, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 460, minY: 359, maxX: 600, maxY: 497 },
    right: { minX: 659, minY: 362, maxX: 788, maxY: 491 },
    top: { minX: 565, minY: 191, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 357, maxX: 599, maxY: 495 },
    right: { minX: 658, minY: 360, maxX: 788, maxY: 489 },
    top: { minX: 565, minY: 187, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 598, maxY: 493 },
    right: { minX: 658, minY: 357, maxX: 787, maxY: 486 },
    top: { minX: 563, minY: 185, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 599, maxY: 492 },
    right: { minX: 657, minY: 357, maxX: 787, maxY: 486 },
    top: { minX: 564, minY: 185, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 353, maxX: 599, maxY: 490 },
    right: { minX: 658, minY: 356, maxX: 787, maxY: 484 },
    top: { minX: 565, minY: 184, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 465, minY: 351, maxX: 603, maxY: 488 },
    right: { minX: 662, minY: 355, maxX: 790, maxY: 483 },
    top: { minX: 569, minY: 183, maxX: 702, maxY: 318 },
  },
  {
    left: { minX: 468, minY: 351, maxX: 606, maxY: 487 },
    right: { minX: 664, minY: 355, maxX: 792, maxY: 482 },
    top: { minX: 572, minY: 183, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 469, minY: 350, maxX: 607, maxY: 486 },
    right: { minX: 665, minY: 353, maxX: 793, maxY: 481 },
    top: { minX: 573, minY: 183, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 469, minY: 350, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 353, maxX: 792, maxY: 480 },
    top: { minX: 573, minY: 182, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 354, maxX: 792, maxY: 481 },
    top: { minX: 573, minY: 184, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 606, maxY: 486 },
    right: { minX: 664, minY: 355, maxX: 792, maxY: 481 },
    top: { minX: 573, minY: 185, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 471, minY: 348, maxX: 608, maxY: 483 },
    right: { minX: 665, minY: 351, maxX: 792, maxY: 478 },
    top: { minX: 574, minY: 181, maxX: 706, maxY: 315 },
  },
  {
    left: { minX: 475, minY: 348, maxX: 610, maxY: 482 },
    right: { minX: 667, minY: 352, maxX: 794, maxY: 477 },
    top: { minX: 577, minY: 182, maxX: 709, maxY: 315 },
  },
  {
    left: { minX: 474, minY: 347, maxX: 610, maxY: 481 },
    right: { minX: 667, minY: 351, maxX: 794, maxY: 477 },
    top: { minX: 577, minY: 181, maxX: 709, maxY: 314 },
  },
  {
    left: { minX: 473, minY: 348, maxX: 610, maxY: 482 },
    right: { minX: 666, minY: 351, maxX: 792, maxY: 477 },
    top: { minX: 576, minY: 182, maxX: 708, maxY: 314 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 609, maxY: 484 },
    right: { minX: 665, minY: 355, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 185, maxX: 706, maxY: 318 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 608, maxY: 486 },
    right: { minX: 664, minY: 356, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 188, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 353, maxX: 609, maxY: 487 },
    right: { minX: 665, minY: 357, maxX: 791, maxY: 482 },
    top: { minX: 575, minY: 189, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 608, maxY: 487 },
    right: { minX: 665, minY: 356, maxX: 791, maxY: 481 },
    top: { minX: 575, minY: 189, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 351, maxX: 608, maxY: 485 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 479 },
    top: { minX: 574, minY: 187, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 607, maxY: 484 },
    right: { minX: 664, minY: 353, maxX: 790, maxY: 478 },
    top: { minX: 574, minY: 185, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 606, maxY: 484 },
    right: { minX: 663, minY: 353, maxX: 790, maxY: 479 },
    top: { minX: 573, minY: 185, maxX: 704, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 349, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 478 },
    top: { minX: 573, minY: 184, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 349, maxX: 606, maxY: 483 },
    right: { minX: 663, minY: 352, maxX: 790, maxY: 478 },
    top: { minX: 573, minY: 183, maxX: 704, maxY: 315 },
  },
  {
    left: { minX: 473, minY: 349, maxX: 608, maxY: 483 },
    right: { minX: 665, minY: 353, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 184, maxX: 706, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 609, maxY: 484 },
    right: { minX: 666, minY: 353, maxX: 793, maxY: 479 },
    top: { minX: 577, minY: 184, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 611, maxY: 484 },
    right: { minX: 668, minY: 353, maxX: 795, maxY: 479 },
    top: { minX: 578, minY: 184, maxX: 709, maxY: 317 },
  },
  {
    left: { minX: 476, minY: 351, maxX: 612, maxY: 485 },
    right: { minX: 668, minY: 355, maxX: 796, maxY: 481 },
    top: { minX: 579, minY: 186, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 352, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 355, maxX: 794, maxY: 481 },
    top: { minX: 577, minY: 187, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 608, maxY: 487 },
    right: { minX: 665, minY: 356, maxX: 792, maxY: 482 },
    top: { minX: 575, minY: 187, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 606, maxY: 487 },
    right: { minX: 663, minY: 356, maxX: 790, maxY: 482 },
    top: { minX: 572, minY: 187, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 355, maxX: 790, maxY: 481 },
    top: { minX: 571, minY: 186, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 468, minY: 353, maxX: 604, maxY: 487 },
    right: { minX: 662, minY: 355, maxX: 790, maxY: 482 },
    top: { minX: 570, minY: 186, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 605, maxY: 488 },
    right: { minX: 663, minY: 356, maxX: 791, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 606, maxY: 489 },
    right: { minX: 664, minY: 357, maxX: 792, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 606, maxY: 489 },
    right: { minX: 664, minY: 357, maxX: 792, maxY: 483 },
    top: { minX: 571, minY: 187, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 606, maxY: 491 },
    right: { minX: 664, minY: 358, maxX: 793, maxY: 485 },
    top: { minX: 572, minY: 187, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 608, maxY: 490 },
    right: { minX: 666, minY: 357, maxX: 796, maxY: 485 },
    top: { minX: 573, minY: 187, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 609, maxY: 490 },
    right: { minX: 668, minY: 357, maxX: 798, maxY: 485 },
    top: { minX: 576, minY: 186, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 488 },
    right: { minX: 669, minY: 355, maxX: 800, maxY: 484 },
    top: { minX: 577, minY: 184, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 611, maxY: 488 },
    right: { minX: 670, minY: 355, maxX: 800, maxY: 484 },
    top: { minX: 577, minY: 183, maxX: 710, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 612, maxY: 488 },
    right: { minX: 671, minY: 354, maxX: 802, maxY: 483 },
    top: { minX: 578, minY: 182, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 612, maxY: 487 },
    right: { minX: 672, minY: 354, maxX: 803, maxY: 483 },
    top: { minX: 578, minY: 181, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 610, maxY: 488 },
    right: { minX: 671, minY: 354, maxX: 802, maxY: 484 },
    top: { minX: 577, minY: 181, maxX: 710, maxY: 317 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 609, maxY: 490 },
    right: { minX: 669, minY: 356, maxX: 801, maxY: 486 },
    top: { minX: 575, minY: 183, maxX: 709, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 610, maxY: 491 },
    right: { minX: 670, minY: 356, maxX: 802, maxY: 486 },
    top: { minX: 575, minY: 183, maxX: 709, maxY: 319 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 610, maxY: 491 },
    right: { minX: 671, minY: 357, maxX: 803, maxY: 487 },
    top: { minX: 576, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 610, maxY: 491 },
    right: { minX: 671, minY: 356, maxX: 803, maxY: 487 },
    top: { minX: 575, minY: 182, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 609, maxY: 492 },
    right: { minX: 670, minY: 357, maxX: 803, maxY: 487 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 608, maxY: 491 },
    right: { minX: 669, minY: 355, maxX: 802, maxY: 487 },
    top: { minX: 573, minY: 181, maxX: 708, maxY: 318 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 354, maxX: 804, maxY: 485 },
    top: { minX: 573, minY: 179, maxX: 709, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 612, maxY: 491 },
    right: { minX: 673, minY: 354, maxX: 807, maxY: 486 },
    top: { minX: 577, minY: 179, maxX: 712, maxY: 317 },
  },
  {
    left: { minX: 478, minY: 355, maxX: 616, maxY: 492 },
    right: { minX: 677, minY: 357, maxX: 811, maxY: 488 },
    top: { minX: 581, minY: 182, maxX: 717, maxY: 319 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 617, maxY: 494 },
    right: { minX: 677, minY: 359, maxX: 811, maxY: 490 },
    top: { minX: 582, minY: 185, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 359, maxX: 618, maxY: 496 },
    right: { minX: 679, minY: 359, maxX: 812, maxY: 491 },
    top: { minX: 583, minY: 187, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 620, maxY: 495 },
    right: { minX: 680, minY: 359, maxX: 814, maxY: 491 },
    top: { minX: 585, minY: 187, maxX: 719, maxY: 323 },
  },
  {
    left: { minX: 480, minY: 359, maxX: 618, maxY: 497 },
    right: { minX: 679, minY: 361, maxX: 812, maxY: 492 },
    top: { minX: 583, minY: 188, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 618, maxY: 498 },
    right: { minX: 678, minY: 363, maxX: 811, maxY: 494 },
    top: { minX: 582, minY: 191, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 617, maxY: 500 },
    right: { minX: 678, minY: 365, maxX: 810, maxY: 496 },
    top: { minX: 582, minY: 193, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 480, minY: 365, maxX: 617, maxY: 501 },
    right: { minX: 678, minY: 367, maxX: 810, maxY: 497 },
    top: { minX: 583, minY: 195, maxX: 716, maxY: 330 },
  },
  {
    left: { minX: 480, minY: 364, maxX: 617, maxY: 500 },
    right: { minX: 677, minY: 365, maxX: 809, maxY: 496 },
    top: { minX: 583, minY: 195, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 364, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 808, maxY: 496 },
    top: { minX: 581, minY: 194, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 479, minY: 365, maxX: 616, maxY: 500 },
    right: { minX: 676, minY: 366, maxX: 808, maxY: 496 },
    top: { minX: 581, minY: 195, maxX: 714, maxY: 329 },
  },
  {
    left: { minX: 480, minY: 363, maxX: 616, maxY: 499 },
    right: { minX: 677, minY: 365, maxX: 808, maxY: 495 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 617, maxY: 497 },
    right: { minX: 677, minY: 363, maxX: 808, maxY: 494 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 618, maxY: 496 },
    right: { minX: 677, minY: 363, maxX: 808, maxY: 493 },
    top: { minX: 584, minY: 193, maxX: 716, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 617, maxY: 496 },
    right: { minX: 676, minY: 363, maxX: 808, maxY: 493 },
    top: { minX: 583, minY: 193, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 361, maxX: 616, maxY: 496 },
    right: { minX: 676, minY: 363, maxX: 806, maxY: 492 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 361, maxX: 616, maxY: 495 },
    right: { minX: 675, minY: 363, maxX: 805, maxY: 491 },
    top: { minX: 581, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 615, maxY: 494 },
    right: { minX: 674, minY: 361, maxX: 804, maxY: 490 },
    top: { minX: 581, minY: 192, maxX: 713, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 616, maxY: 494 },
    right: { minX: 674, minY: 362, maxX: 804, maxY: 490 },
    top: { minX: 581, minY: 193, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 616, maxY: 493 },
    right: { minX: 675, minY: 362, maxX: 804, maxY: 489 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 675, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 583, minY: 193, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 616, maxY: 492 },
    right: { minX: 675, minY: 361, maxX: 804, maxY: 489 },
    top: { minX: 584, minY: 193, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 482, minY: 357, maxX: 616, maxY: 490 },
    right: { minX: 675, minY: 360, maxX: 803, maxY: 487 },
    top: { minX: 583, minY: 192, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 673, minY: 359, maxX: 800, maxY: 486 },
    top: { minX: 581, minY: 191, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 673, minY: 360, maxX: 800, maxY: 486 },
    top: { minX: 582, minY: 192, maxX: 712, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 614, maxY: 489 },
    right: { minX: 672, minY: 360, maxX: 798, maxY: 486 },
    top: { minX: 581, minY: 194, maxX: 711, maxY: 325 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 613, maxY: 488 },
    right: { minX: 670, minY: 360, maxX: 796, maxY: 485 },
    top: { minX: 581, minY: 194, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 355, maxX: 612, maxY: 486 },
    right: { minX: 669, minY: 358, maxX: 796, maxY: 482 },
    top: { minX: 580, minY: 192, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 612, maxY: 488 },
    right: { minX: 669, minY: 360, maxX: 794, maxY: 485 },
    top: { minX: 579, minY: 195, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 478, minY: 357, maxX: 610, maxY: 487 },
    right: { minX: 667, minY: 359, maxX: 792, maxY: 484 },
    top: { minX: 578, minY: 195, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 478, minY: 355, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 359, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 193, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 357, maxX: 790, maxY: 480 },
    top: { minX: 577, minY: 192, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 609, maxY: 483 },
    right: { minX: 666, minY: 357, maxX: 790, maxY: 479 },
    top: { minX: 577, minY: 192, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 478, minY: 353, maxX: 608, maxY: 483 },
    right: { minX: 665, minY: 356, maxX: 789, maxY: 479 },
    top: { minX: 577, minY: 193, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 608, maxY: 482 },
    right: { minX: 664, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 575, minY: 192, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 608, maxY: 482 },
    right: { minX: 665, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 576, minY: 193, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 353, maxX: 609, maxY: 481 },
    right: { minX: 665, minY: 355, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 610, maxY: 481 },
    right: { minX: 665, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 577, minY: 193, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 355, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 358, maxX: 787, maxY: 479 },
    top: { minX: 577, minY: 196, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 480, minY: 356, maxX: 609, maxY: 483 },
    right: { minX: 665, minY: 358, maxX: 787, maxY: 479 },
    top: { minX: 577, minY: 197, maxX: 702, maxY: 324 },
  },
  {
    left: { minX: 482, minY: 353, maxX: 611, maxY: 481 },
    right: { minX: 666, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 579, minY: 193, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 612, maxY: 480 },
    right: { minX: 668, minY: 356, maxX: 789, maxY: 476 },
    top: { minX: 581, minY: 194, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 613, maxY: 480 },
    right: { minX: 668, minY: 357, maxX: 789, maxY: 477 },
    top: { minX: 581, minY: 196, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 614, maxY: 479 },
    right: { minX: 669, minY: 356, maxX: 790, maxY: 475 },
    top: { minX: 583, minY: 195, maxX: 707, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 614, maxY: 480 },
    right: { minX: 669, minY: 357, maxX: 790, maxY: 477 },
    top: { minX: 583, minY: 198, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 613, maxY: 481 },
    right: { minX: 668, minY: 358, maxX: 788, maxY: 477 },
    top: { minX: 582, minY: 199, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 612, maxY: 480 },
    right: { minX: 666, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 580, minY: 197, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 356, maxX: 786, maxY: 475 },
    top: { minX: 580, minY: 198, maxX: 703, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 612, maxY: 478 },
    right: { minX: 666, minY: 355, maxX: 786, maxY: 474 },
    top: { minX: 580, minY: 197, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 612, maxY: 479 },
    right: { minX: 666, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 581, minY: 199, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 613, maxY: 479 },
    right: { minX: 667, minY: 357, maxX: 786, maxY: 475 },
    top: { minX: 582, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 613, maxY: 479 },
    right: { minX: 666, minY: 357, maxX: 785, maxY: 475 },
    top: { minX: 582, minY: 200, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 667, minY: 356, maxX: 785, maxY: 473 },
    top: { minX: 582, minY: 199, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 477 },
    right: { minX: 667, minY: 356, maxX: 785, maxY: 473 },
    top: { minX: 583, minY: 199, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 614, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 786, maxY: 474 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 786, maxY: 474 },
    top: { minX: 585, minY: 201, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 668, minY: 357, maxX: 786, maxY: 473 },
    top: { minX: 585, minY: 201, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 490, minY: 350, maxX: 615, maxY: 473 },
    right: { minX: 668, minY: 353, maxX: 785, maxY: 470 },
    top: { minX: 585, minY: 197, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 349, maxX: 616, maxY: 472 },
    right: { minX: 668, minY: 353, maxX: 786, maxY: 469 },
    top: { minX: 585, minY: 197, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 354, maxX: 785, maxY: 470 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 354, maxX: 785, maxY: 470 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 351, maxX: 616, maxY: 474 },
    right: { minX: 669, minY: 355, maxX: 785, maxY: 471 },
    top: { minX: 587, minY: 201, maxX: 706, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 353, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 357, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 357, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 617, maxY: 475 },
    right: { minX: 669, minY: 357, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 204, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 618, maxY: 474 },
    right: { minX: 669, minY: 357, maxX: 785, maxY: 471 },
    top: { minX: 589, minY: 203, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 618, maxY: 475 },
    right: { minX: 669, minY: 359, maxX: 784, maxY: 473 },
    top: { minX: 589, minY: 205, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 668, minY: 359, maxX: 783, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 706, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 668, minY: 359, maxX: 782, maxY: 473 },
    top: { minX: 587, minY: 207, maxX: 705, maxY: 326 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 616, maxY: 475 },
    right: { minX: 667, minY: 359, maxX: 782, maxY: 472 },
    top: { minX: 587, minY: 205, maxX: 705, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 617, maxY: 473 },
    right: { minX: 668, minY: 355, maxX: 783, maxY: 469 },
    top: { minX: 587, minY: 203, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 618, maxY: 473 },
    right: { minX: 669, minY: 356, maxX: 784, maxY: 469 },
    top: { minX: 588, minY: 203, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 498, minY: 353, maxX: 619, maxY: 474 },
    right: { minX: 670, minY: 358, maxX: 785, maxY: 471 },
    top: { minX: 590, minY: 205, maxX: 708, maxY: 324 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 620, maxY: 476 },
    right: { minX: 671, minY: 360, maxX: 785, maxY: 473 },
    top: { minX: 591, minY: 209, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 620, maxY: 476 },
    right: { minX: 671, minY: 360, maxX: 786, maxY: 473 },
    top: { minX: 591, minY: 209, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 501, minY: 356, maxX: 622, maxY: 476 },
    right: { minX: 673, minY: 361, maxX: 787, maxY: 474 },
    top: { minX: 593, minY: 209, maxX: 710, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 624, maxY: 476 },
    right: { minX: 674, minY: 361, maxX: 789, maxY: 474 },
    top: { minX: 595, minY: 209, maxX: 712, maxY: 328 },
  },
  {
    left: { minX: 505, minY: 356, maxX: 626, maxY: 476 },
    right: { minX: 676, minY: 361, maxX: 791, maxY: 474 },
    top: { minX: 597, minY: 209, maxX: 714, maxY: 327 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 679, minY: 359, maxX: 794, maxY: 473 },
    top: { minX: 599, minY: 207, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 509, minY: 355, maxX: 630, maxY: 474 },
    right: { minX: 681, minY: 359, maxX: 796, maxY: 473 },
    top: { minX: 602, minY: 207, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 509, minY: 354, maxX: 630, maxY: 474 },
    right: { minX: 681, minY: 359, maxX: 796, maxY: 472 },
    top: { minX: 601, minY: 206, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 508, minY: 354, maxX: 629, maxY: 474 },
    right: { minX: 680, minY: 359, maxX: 795, maxY: 472 },
    top: { minX: 600, minY: 206, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 628, maxY: 474 },
    right: { minX: 679, minY: 359, maxX: 794, maxY: 472 },
    top: { minX: 600, minY: 207, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 626, maxY: 473 },
    right: { minX: 678, minY: 358, maxX: 792, maxY: 472 },
    top: { minX: 598, minY: 205, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 352, maxX: 625, maxY: 472 },
    right: { minX: 676, minY: 357, maxX: 791, maxY: 470 },
    top: { minX: 597, minY: 203, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 624, maxY: 473 },
    right: { minX: 675, minY: 357, maxX: 790, maxY: 470 },
    top: { minX: 595, minY: 204, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 354, maxX: 625, maxY: 474 },
    right: { minX: 676, minY: 358, maxX: 791, maxY: 471 },
    top: { minX: 595, minY: 206, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 626, maxY: 475 },
    right: { minX: 677, minY: 359, maxX: 792, maxY: 472 },
    top: { minX: 597, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 355, maxX: 625, maxY: 475 },
    right: { minX: 676, minY: 359, maxX: 791, maxY: 472 },
    top: { minX: 595, minY: 207, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 503, minY: 355, maxX: 624, maxY: 475 },
    right: { minX: 675, minY: 359, maxX: 790, maxY: 472 },
    top: { minX: 594, minY: 207, maxX: 712, maxY: 326 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 622, maxY: 475 },
    right: { minX: 673, minY: 359, maxX: 788, maxY: 472 },
    top: { minX: 592, minY: 207, maxX: 710, maxY: 325 },
  },
  {
    left: { minX: 497, minY: 355, maxX: 618, maxY: 475 },
    right: { minX: 670, minY: 359, maxX: 786, maxY: 472 },
    top: { minX: 589, minY: 206, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 475 },
    right: { minX: 668, minY: 358, maxX: 784, maxY: 472 },
    top: { minX: 587, minY: 205, maxX: 706, maxY: 325 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 616, maxY: 474 },
    right: { minX: 668, minY: 357, maxX: 784, maxY: 471 },
    top: { minX: 586, minY: 203, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 616, maxY: 473 },
    right: { minX: 668, minY: 355, maxX: 784, maxY: 470 },
    top: { minX: 585, minY: 202, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 350, maxX: 616, maxY: 472 },
    right: { minX: 668, minY: 353, maxX: 784, maxY: 468 },
    top: { minX: 585, minY: 199, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 614, maxY: 472 },
    right: { minX: 667, minY: 354, maxX: 784, maxY: 469 },
    top: { minX: 584, minY: 200, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 615, maxY: 473 },
    right: { minX: 667, minY: 354, maxX: 784, maxY: 469 },
    top: { minX: 584, minY: 200, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 614, maxY: 473 },
    right: { minX: 666, minY: 355, maxX: 783, maxY: 470 },
    top: { minX: 583, minY: 201, maxX: 703, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 612, maxY: 474 },
    right: { minX: 665, minY: 355, maxX: 782, maxY: 470 },
    top: { minX: 582, minY: 201, maxX: 702, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 475 },
    right: { minX: 663, minY: 356, maxX: 780, maxY: 471 },
    top: { minX: 580, minY: 201, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 608, maxY: 475 },
    right: { minX: 662, minY: 355, maxX: 779, maxY: 471 },
    top: { minX: 578, minY: 201, maxX: 698, maxY: 322 },
  },
  {
    left: { minX: 483, minY: 351, maxX: 606, maxY: 473 },
    right: { minX: 660, minY: 353, maxX: 778, maxY: 470 },
    top: { minX: 576, minY: 198, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 481, minY: 351, maxX: 606, maxY: 474 },
    right: { minX: 660, minY: 354, maxX: 778, maxY: 471 },
    top: { minX: 575, minY: 198, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 481, minY: 351, maxX: 606, maxY: 474 },
    right: { minX: 660, minY: 354, maxX: 778, maxY: 471 },
    top: { minX: 575, minY: 198, maxX: 696, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 351, maxX: 604, maxY: 474 },
    right: { minX: 659, minY: 354, maxX: 777, maxY: 471 },
    top: { minX: 574, minY: 197, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 604, maxY: 474 },
    right: { minX: 658, minY: 353, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 352, maxX: 603, maxY: 475 },
    right: { minX: 657, minY: 354, maxX: 776, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 352, maxX: 605, maxY: 475 },
    right: { minX: 659, minY: 355, maxX: 777, maxY: 472 },
    top: { minX: 574, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 481, minY: 353, maxX: 606, maxY: 476 },
    right: { minX: 660, minY: 355, maxX: 778, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 354, maxX: 603, maxY: 477 },
    right: { minX: 658, minY: 356, maxX: 776, maxY: 473 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 354, maxX: 603, maxY: 477 },
    right: { minX: 658, minY: 357, maxX: 776, maxY: 474 },
    top: { minX: 572, minY: 200, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 475, minY: 355, maxX: 600, maxY: 478 },
    right: { minX: 655, minY: 357, maxX: 774, maxY: 475 },
    top: { minX: 569, minY: 201, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 598, maxY: 478 },
    right: { minX: 653, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 568, minY: 200, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 598, maxY: 478 },
    right: { minX: 653, minY: 357, maxX: 772, maxY: 475 },
    top: { minX: 567, minY: 200, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 597, maxY: 479 },
    right: { minX: 652, minY: 358, maxX: 771, maxY: 476 },
    top: { minX: 566, minY: 201, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 651, minY: 358, maxX: 771, maxY: 477 },
    top: { minX: 565, minY: 200, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 596, maxY: 479 },
    right: { minX: 651, minY: 358, maxX: 771, maxY: 477 },
    top: { minX: 565, minY: 200, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 651, minY: 360, maxX: 771, maxY: 479 },
    top: { minX: 565, minY: 202, maxX: 688, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 772, maxY: 480 },
    top: { minX: 566, minY: 202, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 596, maxY: 482 },
    right: { minX: 652, minY: 361, maxX: 772, maxY: 480 },
    top: { minX: 566, minY: 202, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 470, minY: 356, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 359, maxX: 773, maxY: 479 },
    top: { minX: 567, minY: 201, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 596, maxY: 481 },
    right: { minX: 652, minY: 360, maxX: 773, maxY: 480 },
    top: { minX: 567, minY: 201, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 356, maxX: 595, maxY: 481 },
    right: { minX: 652, minY: 359, maxX: 772, maxY: 479 },
    top: { minX: 565, minY: 199, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 467, minY: 354, maxX: 594, maxY: 480 },
    right: { minX: 650, minY: 357, maxX: 771, maxY: 477 },
    top: { minX: 563, minY: 198, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 468, minY: 354, maxX: 596, maxY: 479 },
    right: { minX: 652, minY: 357, maxX: 773, maxY: 477 },
    top: { minX: 565, minY: 197, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 596, maxY: 479 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 478 },
    top: { minX: 566, minY: 197, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 470, minY: 354, maxX: 597, maxY: 480 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 478 },
    top: { minX: 567, minY: 198, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 598, maxY: 479 },
    right: { minX: 654, minY: 357, maxX: 776, maxY: 477 },
    top: { minX: 568, minY: 197, maxX: 692, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 599, maxY: 480 },
    right: { minX: 655, minY: 358, maxX: 776, maxY: 478 },
    top: { minX: 569, minY: 198, maxX: 692, maxY: 323 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 481 },
    right: { minX: 655, minY: 359, maxX: 776, maxY: 479 },
    top: { minX: 568, minY: 199, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 472, minY: 356, maxX: 599, maxY: 481 },
    right: { minX: 655, minY: 360, maxX: 776, maxY: 479 },
    top: { minX: 569, minY: 200, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 357, maxX: 598, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 776, maxY: 481 },
    top: { minX: 568, minY: 202, maxX: 691, maxY: 326 },
  },
  {
    left: { minX: 472, minY: 358, maxX: 599, maxY: 483 },
    right: { minX: 655, minY: 361, maxX: 776, maxY: 481 },
    top: { minX: 568, minY: 203, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 472, minY: 359, maxX: 598, maxY: 484 },
    right: { minX: 654, minY: 361, maxX: 775, maxY: 481 },
    top: { minX: 567, minY: 203, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 652, minY: 363, maxX: 772, maxY: 482 },
    top: { minX: 565, minY: 205, maxX: 688, maxY: 329 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 595, maxY: 487 },
    right: { minX: 651, minY: 363, maxX: 772, maxY: 483 },
    top: { minX: 563, minY: 206, maxX: 686, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 486 },
    right: { minX: 650, minY: 363, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 206, maxX: 685, maxY: 329 },
  },
  {
    left: { minX: 468, minY: 362, maxX: 594, maxY: 487 },
    right: { minX: 650, minY: 364, maxX: 770, maxY: 483 },
    top: { minX: 563, minY: 207, maxX: 685, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 363, maxX: 594, maxY: 488 },
    right: { minX: 649, minY: 365, maxX: 770, maxY: 484 },
    top: { minX: 563, minY: 208, maxX: 685, maxY: 331 },
  },
  {
    left: { minX: 467, minY: 363, maxX: 594, maxY: 488 },
    right: { minX: 649, minY: 366, maxX: 769, maxY: 485 },
    top: { minX: 562, minY: 209, maxX: 684, maxY: 332 },
  },
  {
    left: { minX: 466, minY: 363, maxX: 592, maxY: 487 },
    right: { minX: 648, minY: 365, maxX: 768, maxY: 484 },
    top: { minX: 561, minY: 208, maxX: 684, maxY: 331 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 592, maxY: 485 },
    right: { minX: 647, minY: 363, maxX: 767, maxY: 481 },
    top: { minX: 561, minY: 206, maxX: 683, maxY: 329 },
  },
  {
    left: { minX: 466, minY: 360, maxX: 592, maxY: 484 },
    right: { minX: 647, minY: 363, maxX: 766, maxY: 481 },
    top: { minX: 561, minY: 206, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 467, minY: 360, maxX: 592, maxY: 484 },
    right: { minX: 647, minY: 363, maxX: 766, maxY: 481 },
    top: { minX: 561, minY: 206, maxX: 683, maxY: 329 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 593, maxY: 483 },
    right: { minX: 648, minY: 363, maxX: 767, maxY: 481 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 329 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 361, maxX: 768, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 594, maxY: 482 },
    right: { minX: 649, minY: 361, maxX: 768, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 685, maxY: 328 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 593, maxY: 483 },
    right: { minX: 648, minY: 363, maxX: 766, maxY: 480 },
    top: { minX: 563, minY: 207, maxX: 684, maxY: 329 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 593, maxY: 481 },
    right: { minX: 648, minY: 361, maxX: 766, maxY: 479 },
    top: { minX: 563, minY: 205, maxX: 684, maxY: 328 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 647, minY: 362, maxX: 765, maxY: 479 },
    top: { minX: 562, minY: 206, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 358, maxX: 592, maxY: 481 },
    right: { minX: 647, minY: 361, maxX: 765, maxY: 478 },
    top: { minX: 562, minY: 205, maxX: 683, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 593, maxY: 481 },
    right: { minX: 648, minY: 361, maxX: 765, maxY: 479 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 328 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 594, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 564, minY: 205, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 595, maxY: 479 },
    right: { minX: 649, minY: 360, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 471, minY: 357, maxX: 595, maxY: 479 },
    right: { minX: 649, minY: 361, maxX: 766, maxY: 477 },
    top: { minX: 565, minY: 205, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 473, minY: 356, maxX: 596, maxY: 478 },
    right: { minX: 651, minY: 359, maxX: 768, maxY: 475 },
    top: { minX: 567, minY: 204, maxX: 687, maxY: 325 },
  },
  {
    left: { minX: 474, minY: 354, maxX: 598, maxY: 476 },
    right: { minX: 652, minY: 358, maxX: 768, maxY: 474 },
    top: { minX: 568, minY: 203, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 476, minY: 353, maxX: 599, maxY: 474 },
    right: { minX: 653, minY: 357, maxX: 770, maxY: 473 },
    top: { minX: 569, minY: 201, maxX: 690, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 352, maxX: 601, maxY: 473 },
    right: { minX: 655, minY: 356, maxX: 771, maxY: 471 },
    top: { minX: 571, minY: 201, maxX: 691, maxY: 322 },
  },
  {
    left: { minX: 479, minY: 355, maxX: 601, maxY: 475 },
    right: { minX: 654, minY: 358, maxX: 770, maxY: 473 },
    top: { minX: 571, minY: 204, maxX: 690, maxY: 324 },
  },
  {
    left: { minX: 479, minY: 356, maxX: 600, maxY: 477 },
    right: { minX: 654, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 571, minY: 206, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 478, minY: 355, maxX: 600, maxY: 476 },
    right: { minX: 653, minY: 359, maxX: 769, maxY: 474 },
    top: { minX: 571, minY: 205, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 474 },
    top: { minX: 573, minY: 207, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 603, maxY: 475 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 473 },
    top: { minX: 574, minY: 205, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 207, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 479, minY: 357, maxX: 601, maxY: 478 },
    right: { minX: 655, minY: 361, maxX: 770, maxY: 475 },
    top: { minX: 571, minY: 208, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 480, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 655, minY: 360, maxX: 770, maxY: 475 },
    top: { minX: 572, minY: 207, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 361, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 603, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 772, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 478 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 602, maxY: 477 },
    right: { minX: 656, minY: 360, maxX: 771, maxY: 475 },
    top: { minX: 573, minY: 208, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 356, maxX: 602, maxY: 476 },
    right: { minX: 656, minY: 359, maxX: 772, maxY: 474 },
    top: { minX: 573, minY: 207, maxX: 692, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 354, maxX: 602, maxY: 474 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 603, maxY: 475 },
    right: { minX: 657, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 204, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 604, maxY: 475 },
    right: { minX: 657, minY: 357, maxX: 774, maxY: 472 },
    top: { minX: 575, minY: 205, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 604, maxY: 474 },
    right: { minX: 658, minY: 356, maxX: 774, maxY: 471 },
    top: { minX: 575, minY: 203, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 604, maxY: 473 },
    right: { minX: 658, minY: 356, maxX: 774, maxY: 471 },
    top: { minX: 575, minY: 203, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 353, maxX: 602, maxY: 474 },
    right: { minX: 656, minY: 357, maxX: 772, maxY: 472 },
    top: { minX: 573, minY: 203, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 599, maxY: 474 },
    right: { minX: 653, minY: 357, maxX: 769, maxY: 472 },
    top: { minX: 569, minY: 203, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 595, maxY: 474 },
    right: { minX: 649, minY: 356, maxX: 766, maxY: 472 },
    top: { minX: 566, minY: 203, maxX: 685, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 594, maxY: 475 },
    right: { minX: 648, minY: 357, maxX: 764, maxY: 473 },
    top: { minX: 564, minY: 203, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 353, maxX: 590, maxY: 475 },
    right: { minX: 645, minY: 357, maxX: 762, maxY: 473 },
    top: { minX: 561, minY: 201, maxX: 681, maxY: 323 },
  },
  {
    left: { minX: 465, minY: 353, maxX: 589, maxY: 474 },
    right: { minX: 644, minY: 356, maxX: 761, maxY: 473 },
    top: { minX: 559, minY: 201, maxX: 680, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 353, maxX: 589, maxY: 475 },
    right: { minX: 643, minY: 356, maxX: 761, maxY: 473 },
    top: { minX: 559, minY: 201, maxX: 680, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 592, maxY: 475 },
    right: { minX: 647, minY: 357, maxX: 765, maxY: 474 },
    top: { minX: 563, minY: 202, maxX: 684, maxY: 324 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 596, maxY: 475 },
    right: { minX: 651, minY: 357, maxX: 768, maxY: 474 },
    top: { minX: 567, minY: 201, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 597, maxY: 475 },
    right: { minX: 652, minY: 357, maxX: 770, maxY: 474 },
    top: { minX: 568, minY: 201, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 596, maxY: 476 },
    right: { minX: 651, minY: 359, maxX: 770, maxY: 476 },
    top: { minX: 568, minY: 203, maxX: 688, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 594, maxY: 477 },
    right: { minX: 650, minY: 359, maxX: 768, maxY: 477 },
    top: { minX: 566, minY: 203, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 593, maxY: 478 },
    right: { minX: 648, minY: 359, maxX: 767, maxY: 477 },
    top: { minX: 564, minY: 203, maxX: 685, maxY: 325 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 592, maxY: 478 },
    right: { minX: 648, minY: 359, maxX: 767, maxY: 477 },
    top: { minX: 563, minY: 202, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 593, maxY: 476 },
    right: { minX: 649, minY: 357, maxX: 768, maxY: 475 },
    top: { minX: 563, minY: 199, maxX: 685, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 594, maxY: 476 },
    right: { minX: 649, minY: 356, maxX: 769, maxY: 474 },
    top: { minX: 563, minY: 199, maxX: 686, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 596, maxY: 476 },
    right: { minX: 651, minY: 356, maxX: 771, maxY: 475 },
    top: { minX: 565, minY: 199, maxX: 687, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 358, maxX: 596, maxY: 481 },
    right: { minX: 651, minY: 360, maxX: 771, maxY: 479 },
    top: { minX: 565, minY: 204, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 563, minY: 203, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 594, maxY: 481 },
    right: { minX: 650, minY: 360, maxX: 770, maxY: 479 },
    top: { minX: 563, minY: 203, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 592, maxY: 482 },
    right: { minX: 648, minY: 360, maxX: 768, maxY: 479 },
    top: { minX: 561, minY: 203, maxX: 683, maxY: 326 },
  },
  {
    left: { minX: 466, minY: 358, maxX: 592, maxY: 481 },
    right: { minX: 648, minY: 359, maxX: 768, maxY: 478 },
    top: { minX: 560, minY: 203, maxX: 682, maxY: 326 },
  },
  {
    left: { minX: 463, minY: 357, maxX: 589, maxY: 481 },
    right: { minX: 645, minY: 358, maxX: 766, maxY: 478 },
    top: { minX: 557, minY: 201, maxX: 680, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 358, maxX: 588, maxY: 482 },
    right: { minX: 644, minY: 359, maxX: 765, maxY: 479 },
    top: { minX: 556, minY: 201, maxX: 679, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 357, maxX: 586, maxY: 481 },
    right: { minX: 643, minY: 358, maxX: 764, maxY: 479 },
    top: { minX: 555, minY: 200, maxX: 678, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 357, maxX: 585, maxY: 481 },
    right: { minX: 642, minY: 358, maxX: 763, maxY: 479 },
    top: { minX: 553, minY: 200, maxX: 677, maxY: 325 },
  },
  {
    left: { minX: 457, minY: 356, maxX: 584, maxY: 481 },
    right: { minX: 641, minY: 357, maxX: 763, maxY: 478 },
    top: { minX: 552, minY: 198, maxX: 676, maxY: 323 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 585, maxY: 480 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 477 },
    top: { minX: 553, minY: 197, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 586, maxY: 480 },
    right: { minX: 643, minY: 357, maxX: 765, maxY: 478 },
    top: { minX: 555, minY: 197, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 586, maxY: 481 },
    right: { minX: 643, minY: 358, maxX: 765, maxY: 479 },
    top: { minX: 554, minY: 198, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 355, maxX: 585, maxY: 481 },
    right: { minX: 642, minY: 357, maxX: 765, maxY: 478 },
    top: { minX: 553, minY: 197, maxX: 678, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 355, maxX: 585, maxY: 480 },
    right: { minX: 642, minY: 356, maxX: 764, maxY: 478 },
    top: { minX: 553, minY: 196, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 456, minY: 353, maxX: 584, maxY: 479 },
    right: { minX: 642, minY: 355, maxX: 764, maxY: 477 },
    top: { minX: 552, minY: 194, maxX: 677, maxY: 321 },
  },
  {
    left: { minX: 456, minY: 352, maxX: 584, maxY: 478 },
    right: { minX: 642, minY: 354, maxX: 765, maxY: 477 },
    top: { minX: 552, minY: 193, maxX: 678, maxY: 319 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 584, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 765, maxY: 476 },
    top: { minX: 551, minY: 191, maxX: 677, maxY: 318 },
  },
  {
    left: { minX: 454, minY: 351, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 476 },
    top: { minX: 551, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 583, maxY: 478 },
    right: { minX: 641, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 192, maxX: 677, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 352, maxX: 582, maxY: 479 },
    right: { minX: 640, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 550, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 351, maxX: 581, maxY: 478 },
    right: { minX: 639, minY: 353, maxX: 763, maxY: 477 },
    top: { minX: 549, minY: 191, maxX: 675, maxY: 319 },
  },
  {
    left: { minX: 453, minY: 351, maxX: 582, maxY: 478 },
    right: { minX: 640, minY: 354, maxX: 764, maxY: 477 },
    top: { minX: 551, minY: 191, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 350, maxX: 583, maxY: 477 },
    right: { minX: 641, minY: 352, maxX: 765, maxY: 475 },
    top: { minX: 551, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 453, minY: 351, maxX: 582, maxY: 477 },
    right: { minX: 641, minY: 353, maxX: 764, maxY: 476 },
    top: { minX: 550, minY: 190, maxX: 677, maxY: 318 },
  },
  {
    left: { minX: 452, minY: 353, maxX: 581, maxY: 480 },
    right: { minX: 639, minY: 355, maxX: 763, maxY: 478 },
    top: { minX: 549, minY: 193, maxX: 675, maxY: 320 },
  },
  {
    left: { minX: 450, minY: 354, maxX: 579, maxY: 481 },
    right: { minX: 637, minY: 355, maxX: 761, maxY: 479 },
    top: { minX: 547, minY: 193, maxX: 673, maxY: 321 },
  },
  {
    left: { minX: 449, minY: 354, maxX: 579, maxY: 481 },
    right: { minX: 637, minY: 355, maxX: 761, maxY: 479 },
    top: { minX: 546, minY: 193, maxX: 673, maxY: 321 },
  },
  {
    left: { minX: 447, minY: 355, maxX: 577, maxY: 482 },
    right: { minX: 635, minY: 356, maxX: 760, maxY: 480 },
    top: { minX: 544, minY: 193, maxX: 671, maxY: 321 },
  },
  {
    left: { minX: 446, minY: 354, maxX: 576, maxY: 482 },
    right: { minX: 635, minY: 355, maxX: 760, maxY: 479 },
    top: { minX: 543, minY: 193, maxX: 671, maxY: 320 },
  },
  {
    left: { minX: 446, minY: 354, maxX: 576, maxY: 482 },
    right: { minX: 634, minY: 355, maxX: 759, maxY: 480 },
    top: { minX: 543, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 445, minY: 354, maxX: 576, maxY: 482 },
    right: { minX: 634, minY: 355, maxX: 759, maxY: 480 },
    top: { minX: 543, minY: 192, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 446, minY: 352, maxX: 577, maxY: 480 },
    right: { minX: 635, minY: 353, maxX: 760, maxY: 478 },
    top: { minX: 543, minY: 189, maxX: 671, maxY: 319 },
  },
  {
    left: { minX: 449, minY: 353, maxX: 579, maxY: 481 },
    right: { minX: 638, minY: 354, maxX: 763, maxY: 479 },
    top: { minX: 545, minY: 191, maxX: 674, maxY: 319 },
  },
  {
    left: { minX: 455, minY: 355, maxX: 585, maxY: 482 },
    right: { minX: 643, minY: 356, maxX: 768, maxY: 481 },
    top: { minX: 551, minY: 193, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 590, maxY: 482 },
    right: { minX: 648, minY: 356, maxX: 774, maxY: 481 },
    top: { minX: 557, minY: 193, maxX: 684, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 354, maxX: 590, maxY: 482 },
    right: { minX: 648, minY: 355, maxX: 774, maxY: 480 },
    top: { minX: 556, minY: 192, maxX: 683, maxY: 320 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 647, minY: 355, maxX: 772, maxY: 480 },
    top: { minX: 555, minY: 193, maxX: 681, maxY: 322 },
  },
  {
    left: { minX: 459, minY: 356, maxX: 588, maxY: 483 },
    right: { minX: 646, minY: 355, maxX: 772, maxY: 480 },
    top: { minX: 553, minY: 193, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 458, minY: 355, maxX: 587, maxY: 482 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 192, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 354, maxX: 589, maxY: 481 },
    right: { minX: 647, minY: 353, maxX: 773, maxY: 479 },
    top: { minX: 555, minY: 191, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 460, minY: 352, maxX: 590, maxY: 480 },
    right: { minX: 648, minY: 352, maxX: 774, maxY: 477 },
    top: { minX: 555, minY: 189, maxX: 683, maxY: 318 },
  },
  {
    left: { minX: 460, minY: 347, maxX: 590, maxY: 475 },
    right: { minX: 648, minY: 347, maxX: 775, maxY: 472 },
    top: { minX: 555, minY: 182, maxX: 684, maxY: 312 },
  },
  {
    left: { minX: 460, minY: 346, maxX: 590, maxY: 474 },
    right: { minX: 649, minY: 345, maxX: 775, maxY: 471 },
    top: { minX: 555, minY: 181, maxX: 684, maxY: 311 },
  },
  {
    left: { minX: 458, minY: 347, maxX: 588, maxY: 475 },
    right: { minX: 647, minY: 346, maxX: 774, maxY: 471 },
    top: { minX: 553, minY: 182, maxX: 682, maxY: 312 },
  },
  {
    left: { minX: 459, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 555, minY: 177, maxX: 684, maxY: 308 },
  },
  {
    left: { minX: 460, minY: 343, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 776, maxY: 468 },
    top: { minX: 555, minY: 177, maxX: 684, maxY: 308 },
  },
  {
    left: { minX: 461, minY: 343, maxX: 591, maxY: 471 },
    right: { minX: 649, minY: 343, maxX: 776, maxY: 469 },
    top: { minX: 555, minY: 178, maxX: 684, maxY: 309 },
  },
  {
    left: { minX: 460, minY: 339, maxX: 590, maxY: 467 },
    right: { minX: 649, minY: 338, maxX: 776, maxY: 464 },
    top: { minX: 555, minY: 172, maxX: 684, maxY: 304 },
  },
  {
    left: { minX: 459, minY: 336, maxX: 590, maxY: 464 },
    right: { minX: 649, minY: 335, maxX: 776, maxY: 462 },
    top: { minX: 555, minY: 169, maxX: 684, maxY: 301 },
  },
  {
    left: { minX: 459, minY: 339, maxX: 590, maxY: 467 },
    right: { minX: 649, minY: 338, maxX: 776, maxY: 464 },
    top: { minX: 555, minY: 172, maxX: 684, maxY: 304 },
  },
  {
    left: { minX: 459, minY: 342, maxX: 590, maxY: 471 },
    right: { minX: 649, minY: 341, maxX: 776, maxY: 467 },
    top: { minX: 553, minY: 175, maxX: 682, maxY: 307 },
  },
  {
    left: { minX: 458, minY: 353, maxX: 588, maxY: 481 },
    right: { minX: 647, minY: 351, maxX: 774, maxY: 477 },
    top: { minX: 553, minY: 187, maxX: 682, maxY: 317 },
  },
  {
    left: { minX: 458, minY: 350, maxX: 589, maxY: 478 },
    right: { minX: 648, minY: 347, maxX: 775, maxY: 473 },
    top: { minX: 551, minY: 183, maxX: 681, maxY: 314 },
  },
  {
    left: { minX: 459, minY: 349, maxX: 590, maxY: 477 },
    right: { minX: 649, minY: 346, maxX: 776, maxY: 472 },
    top: { minX: 553, minY: 181, maxX: 682, maxY: 313 },
  },
  {
    left: { minX: 462, minY: 348, maxX: 592, maxY: 476 },
    right: { minX: 651, minY: 347, maxX: 778, maxY: 472 },
    top: { minX: 555, minY: 181, maxX: 685, maxY: 313 },
  },
  {
    left: { minX: 466, minY: 345, maxX: 596, maxY: 473 },
    right: { minX: 655, minY: 343, maxX: 782, maxY: 470 },
    top: { minX: 559, minY: 178, maxX: 688, maxY: 310 },
  },
  {
    left: { minX: 470, minY: 343, maxX: 600, maxY: 471 },
    right: { minX: 659, minY: 341, maxX: 787, maxY: 468 },
    top: { minX: 563, minY: 175, maxX: 694, maxY: 307 },
  },
  {
    left: { minX: 474, minY: 345, maxX: 604, maxY: 474 },
    right: { minX: 663, minY: 343, maxX: 792, maxY: 471 },
    top: { minX: 567, minY: 176, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 475, minY: 345, maxX: 606, maxY: 475 },
    right: { minX: 666, minY: 343, maxX: 796, maxY: 471 },
    top: { minX: 569, minY: 175, maxX: 701, maxY: 309 },
  },
  {
    left: { minX: 477, minY: 348, maxX: 608, maxY: 478 },
    right: { minX: 668, minY: 345, maxX: 798, maxY: 474 },
    top: { minX: 571, minY: 176, maxX: 703, maxY: 311 },
  },
  {
    left: { minX: 477, minY: 351, maxX: 609, maxY: 482 },
    right: { minX: 670, minY: 349, maxX: 800, maxY: 478 },
    top: { minX: 571, minY: 178, maxX: 704, maxY: 314 },
  },
  {
    left: { minX: 478, minY: 357, maxX: 611, maxY: 489 },
    right: { minX: 672, minY: 355, maxX: 804, maxY: 485 },
    top: { minX: 573, minY: 183, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 480, minY: 360, maxX: 614, maxY: 493 },
    right: { minX: 674, minY: 358, maxX: 808, maxY: 490 },
    top: { minX: 575, minY: 185, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 481, minY: 359, maxX: 616, maxY: 493 },
    right: { minX: 678, minY: 357, maxX: 812, maxY: 491 },
    top: { minX: 578, minY: 183, maxX: 715, maxY: 321 },
  },
  {
    left: { minX: 480, minY: 359, maxX: 616, maxY: 494 },
    right: { minX: 677, minY: 358, maxX: 814, maxY: 493 },
    top: { minX: 578, minY: 182, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 475, minY: 360, maxX: 612, maxY: 496 },
    right: { minX: 675, minY: 359, maxX: 812, maxY: 495 },
    top: { minX: 574, minY: 182, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 470, minY: 360, maxX: 608, maxY: 497 },
    right: { minX: 672, minY: 359, maxX: 810, maxY: 496 },
    top: { minX: 570, minY: 180, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 608, maxY: 498 },
    right: { minX: 671, minY: 359, maxX: 812, maxY: 499 },
    top: { minX: 569, minY: 177, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 361, maxX: 607, maxY: 500 },
    right: { minX: 671, minY: 361, maxX: 812, maxY: 501 },
    top: { minX: 568, minY: 178, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 464, minY: 361, maxX: 606, maxY: 502 },
    right: { minX: 671, minY: 361, maxX: 813, maxY: 502 },
    top: { minX: 567, minY: 177, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 464, minY: 362, maxX: 608, maxY: 504 },
    right: { minX: 673, minY: 362, maxX: 817, maxY: 504 },
    top: { minX: 567, minY: 175, maxX: 713, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 365, maxX: 608, maxY: 509 },
    right: { minX: 674, minY: 365, maxX: 820, maxY: 509 },
    top: { minX: 567, minY: 176, maxX: 715, maxY: 326 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 605, maxY: 518 },
    right: { minX: 672, minY: 371, maxX: 820, maxY: 518 },
    top: { minX: 563, minY: 181, maxX: 713, maxY: 332 },
  },
  {
    left: { minX: 453, minY: 377, maxX: 602, maxY: 525 },
    right: { minX: 670, minY: 377, maxX: 819, maxY: 525 },
    top: { minX: 560, minY: 185, maxX: 711, maxY: 337 },
  },
  {
    left: { minX: 451, minY: 381, maxX: 601, maxY: 529 },
    right: { minX: 669, minY: 380, maxX: 820, maxY: 530 },
    top: { minX: 559, minY: 187, maxX: 710, maxY: 340 },
  },
  {
    left: { minX: 452, minY: 380, maxX: 604, maxY: 531 },
    right: { minX: 673, minY: 381, maxX: 826, maxY: 532 },
    top: { minX: 561, minY: 185, maxX: 715, maxY: 340 },
  },
  {
    left: { minX: 454, minY: 381, maxX: 607, maxY: 533 },
    right: { minX: 676, minY: 381, maxX: 831, maxY: 535 },
    top: { minX: 565, minY: 184, maxX: 719, maxY: 340 },
  },
  {
    left: { minX: 459, minY: 381, maxX: 614, maxY: 534 },
    right: { minX: 684, minY: 381, maxX: 842, maxY: 537 },
    top: { minX: 571, minY: 181, maxX: 728, maxY: 339 },
  },
  {
    left: { minX: 462, minY: 382, maxX: 617, maxY: 536 },
    right: { minX: 688, minY: 383, maxX: 847, maxY: 539 },
    top: { minX: 574, minY: 181, maxX: 732, maxY: 340 },
  },
  {
    left: { minX: 467, minY: 384, maxX: 624, maxY: 541 },
    right: { minX: 697, minY: 385, maxX: 858, maxY: 545 },
    top: { minX: 581, minY: 180, maxX: 742, maxY: 342 },
  },
  {
    left: { minX: 465, minY: 387, maxX: 624, maxY: 546 },
    right: { minX: 697, minY: 387, maxX: 861, maxY: 549 },
    top: { minX: 581, minY: 181, maxX: 743, maxY: 343 },
  },
  {
    left: { minX: 455, minY: 388, maxX: 618, maxY: 551 },
    right: { minX: 692, minY: 389, maxX: 859, maxY: 554 },
    top: { minX: 573, minY: 178, maxX: 739, maxY: 344 },
  },
  {
    left: { minX: 442, minY: 391, maxX: 608, maxY: 556 },
    right: { minX: 684, minY: 391, maxX: 852, maxY: 558 },
    top: { minX: 563, minY: 177, maxX: 730, maxY: 346 },
  },
  {
    left: { minX: 437, minY: 393, maxX: 606, maxY: 560 },
    right: { minX: 682, minY: 393, maxX: 852, maxY: 562 },
    top: { minX: 560, minY: 177, maxX: 728, maxY: 348 },
  },
  {
    left: { minX: 432, minY: 394, maxX: 602, maxY: 563 },
    right: { minX: 679, minY: 395, maxX: 851, maxY: 565 },
    top: { minX: 557, minY: 176, maxX: 727, maxY: 348 },
  },
  {
    left: { minX: 428, minY: 398, maxX: 600, maxY: 570 },
    right: { minX: 678, minY: 399, maxX: 852, maxY: 571 },
    top: { minX: 553, minY: 179, maxX: 726, maxY: 352 },
  },
  {
    left: { minX: 423, minY: 400, maxX: 597, maxY: 574 },
    right: { minX: 675, minY: 401, maxX: 851, maxY: 575 },
    top: { minX: 550, minY: 179, maxX: 724, maxY: 354 },
  },
  {
    left: { minX: 421, minY: 398, maxX: 597, maxY: 573 },
    right: { minX: 676, minY: 398, maxX: 853, maxY: 574 },
    top: { minX: 549, minY: 174, maxX: 724, maxY: 351 },
  },
  {
    left: { minX: 418, minY: 396, maxX: 596, maxY: 572 },
    right: { minX: 676, minY: 395, maxX: 854, maxY: 573 },
    top: { minX: 547, minY: 169, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 416, minY: 396, maxX: 595, maxY: 575 },
    right: { minX: 676, minY: 396, maxX: 856, maxY: 575 },
    top: { minX: 546, minY: 168, maxX: 725, maxY: 348 },
  },
  {
    left: { minX: 413, minY: 397, maxX: 594, maxY: 576 },
    right: { minX: 675, minY: 396, maxX: 856, maxY: 577 },
    top: { minX: 544, minY: 167, maxX: 724, maxY: 348 },
  },
  {
    left: { minX: 413, minY: 396, maxX: 594, maxY: 577 },
    right: { minX: 677, minY: 395, maxX: 858, maxY: 577 },
    top: { minX: 544, minY: 165, maxX: 725, maxY: 347 },
  },
  {
    left: { minX: 413, minY: 397, maxX: 596, maxY: 578 },
    right: { minX: 678, minY: 396, maxX: 862, maxY: 579 },
    top: { minX: 545, minY: 163, maxX: 727, maxY: 347 },
  },
  {
    left: { minX: 412, minY: 397, maxX: 596, maxY: 580 },
    right: { minX: 679, minY: 397, maxX: 864, maxY: 581 },
    top: { minX: 545, minY: 162, maxX: 729, maxY: 348 },
  },
  {
    left: { minX: 410, minY: 397, maxX: 596, maxY: 581 },
    right: { minX: 679, minY: 397, maxX: 865, maxY: 582 },
    top: { minX: 545, minY: 161, maxX: 729, maxY: 348 },
  },
  {
    left: { minX: 411, minY: 394, maxX: 596, maxY: 579 },
    right: { minX: 680, minY: 394, maxX: 868, maxY: 580 },
    top: { minX: 545, minY: 157, maxX: 731, maxY: 344 },
  },
  {
    left: { minX: 410, minY: 392, maxX: 597, maxY: 578 },
    right: { minX: 681, minY: 392, maxX: 869, maxY: 579 },
    top: { minX: 546, minY: 153, maxX: 732, maxY: 342 },
  },
  {
    left: { minX: 410, minY: 387, maxX: 598, maxY: 574 },
    right: { minX: 683, minY: 387, maxX: 872, maxY: 575 },
    top: { minX: 547, minY: 147, maxX: 734, maxY: 337 },
  },
  {
    left: { minX: 409, minY: 383, maxX: 599, maxY: 571 },
    right: { minX: 685, minY: 383, maxX: 876, maxY: 572 },
    top: { minX: 547, minY: 139, maxX: 737, maxY: 332 },
  },
  {
    left: { minX: 406, minY: 381, maxX: 598, maxY: 571 },
    right: { minX: 685, minY: 381, maxX: 878, maxY: 573 },
    top: { minX: 547, minY: 135, maxX: 738, maxY: 330 },
  },
  {
    left: { minX: 403, minY: 384, maxX: 596, maxY: 576 },
    right: { minX: 683, minY: 384, maxX: 878, maxY: 576 },
    top: { minX: 544, minY: 136, maxX: 737, maxY: 332 },
  },
  {
    left: { minX: 400, minY: 387, maxX: 595, maxY: 580 },
    right: { minX: 683, minY: 386, maxX: 879, maxY: 580 },
    top: { minX: 542, minY: 137, maxX: 736, maxY: 334 },
  },
  {
    left: { minX: 397, minY: 388, maxX: 594, maxY: 583 },
    right: { minX: 682, minY: 387, maxX: 879, maxY: 582 },
    top: { minX: 540, minY: 137, maxX: 735, maxY: 335 },
  },
  {
    left: { minX: 395, minY: 386, maxX: 593, maxY: 582 },
    right: { minX: 682, minY: 384, maxX: 881, maxY: 581 },
    top: { minX: 539, minY: 133, maxX: 735, maxY: 332 },
  },
  {
    left: { minX: 394, minY: 387, maxX: 593, maxY: 584 },
    right: { minX: 682, minY: 385, maxX: 882, maxY: 582 },
    top: { minX: 539, minY: 133, maxX: 735, maxY: 333 },
  },
  {
    left: { minX: 393, minY: 389, maxX: 593, maxY: 588 },
    right: { minX: 684, minY: 388, maxX: 884, maxY: 587 },
    top: { minX: 539, minY: 135, maxX: 736, maxY: 335 },
  },
  {
    left: { minX: 392, minY: 390, maxX: 594, maxY: 590 },
    right: { minX: 685, minY: 388, maxX: 888, maxY: 589 },
    top: { minX: 540, minY: 133, maxX: 739, maxY: 335 },
  },
  {
    left: { minX: 391, minY: 392, maxX: 594, maxY: 595 },
    right: { minX: 686, minY: 391, maxX: 890, maxY: 593 },
    top: { minX: 540, minY: 135, maxX: 740, maxY: 337 },
  },
  {
    left: { minX: 388, minY: 395, maxX: 593, maxY: 599 },
    right: { minX: 685, minY: 394, maxX: 890, maxY: 597 },
    top: { minX: 539, minY: 137, maxX: 739, maxY: 341 },
  },
  {
    left: { minX: 386, minY: 395, maxX: 593, maxY: 600 },
    right: { minX: 685, minY: 394, maxX: 891, maxY: 598 },
    top: { minX: 538, minY: 136, maxX: 739, maxY: 340 },
  },
  {
    left: { minX: 383, minY: 389, maxX: 592, maxY: 596 },
    right: { minX: 685, minY: 387, maxX: 893, maxY: 593 },
    top: { minX: 536, minY: 127, maxX: 739, maxY: 333 },
  },
  {
    left: { minX: 378, minY: 384, maxX: 588, maxY: 592 },
    right: { minX: 683, minY: 381, maxX: 892, maxY: 589 },
    top: { minX: 532, minY: 118, maxX: 737, maxY: 327 },
  },
  {
    left: { minX: 375, minY: 382, maxX: 586, maxY: 591 },
    right: { minX: 681, minY: 380, maxX: 892, maxY: 589 },
    top: { minX: 529, minY: 115, maxX: 736, maxY: 325 },
  },
  {
    left: { minX: 372, minY: 379, maxX: 585, maxY: 590 },
    right: { minX: 680, minY: 377, maxX: 892, maxY: 587 },
    top: { minX: 528, minY: 111, maxX: 736, maxY: 323 },
  },
  {
    left: { minX: 369, minY: 378, maxX: 584, maxY: 590 },
    right: { minX: 679, minY: 376, maxX: 892, maxY: 587 },
    top: { minX: 527, minY: 108, maxX: 734, maxY: 321 },
  },
  {
    left: { minX: 369, minY: 380, maxX: 584, maxY: 592 },
    right: { minX: 679, minY: 378, maxX: 892, maxY: 589 },
    top: { minX: 526, minY: 110, maxX: 734, maxY: 323 },
  },
  {
    left: { minX: 368, minY: 381, maxX: 584, maxY: 593 },
    right: { minX: 679, minY: 378, maxX: 893, maxY: 589 },
    top: { minX: 525, minY: 110, maxX: 734, maxY: 323 },
  },
  {
    left: { minX: 370, minY: 377, maxX: 586, maxY: 589 },
    right: { minX: 681, minY: 374, maxX: 895, maxY: 585 },
    top: { minX: 528, minY: 106, maxX: 736, maxY: 319 },
  },
  {
    left: { minX: 374, minY: 375, maxX: 588, maxY: 586 },
    right: { minX: 683, minY: 372, maxX: 898, maxY: 583 },
    top: { minX: 531, minY: 104, maxX: 738, maxY: 317 },
  },
  {
    left: { minX: 374, minY: 374, maxX: 589, maxY: 585 },
    right: { minX: 684, minY: 371, maxX: 898, maxY: 582 },
    top: { minX: 531, minY: 103, maxX: 739, maxY: 316 },
  },
  {
    left: { minX: 375, minY: 373, maxX: 590, maxY: 584 },
    right: { minX: 685, minY: 369, maxX: 899, maxY: 580 },
    top: { minX: 532, minY: 101, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 378, minY: 370, maxX: 593, maxY: 581 },
    right: { minX: 689, minY: 366, maxX: 903, maxY: 577 },
    top: { minX: 535, minY: 98, maxX: 743, maxY: 312 },
  },
  {
    left: { minX: 379, minY: 366, maxX: 594, maxY: 578 },
    right: { minX: 690, minY: 363, maxX: 905, maxY: 574 },
    top: { minX: 536, minY: 93, maxX: 745, maxY: 308 },
  },
  {
    left: { minX: 379, minY: 365, maxX: 594, maxY: 576 },
    right: { minX: 690, minY: 361, maxX: 906, maxY: 573 },
    top: { minX: 536, minY: 91, maxX: 745, maxY: 307 },
  },
  {
    left: { minX: 377, minY: 363, maxX: 593, maxY: 575 },
    right: { minX: 689, minY: 360, maxX: 904, maxY: 571 },
    top: { minX: 535, minY: 89, maxX: 744, maxY: 305 },
  },
  {
    left: { minX: 378, minY: 360, maxX: 594, maxY: 571 },
    right: { minX: 689, minY: 357, maxX: 905, maxY: 568 },
    top: { minX: 535, minY: 87, maxX: 744, maxY: 303 },
  },
  {
    left: { minX: 379, minY: 358, maxX: 594, maxY: 569 },
    right: { minX: 690, minY: 355, maxX: 906, maxY: 566 },
    top: { minX: 536, minY: 84, maxX: 746, maxY: 300 },
  },
  {
    left: { minX: 379, minY: 357, maxX: 594, maxY: 568 },
    right: { minX: 690, minY: 354, maxX: 906, maxY: 565 },
    top: { minX: 536, minY: 83, maxX: 746, maxY: 299 },
  },
  {
    left: { minX: 380, minY: 356, maxX: 595, maxY: 567 },
    right: { minX: 692, minY: 353, maxX: 908, maxY: 564 },
    top: { minX: 537, minY: 82, maxX: 747, maxY: 298 },
  },
  {
    left: { minX: 381, minY: 354, maxX: 596, maxY: 565 },
    right: { minX: 693, minY: 351, maxX: 909, maxY: 562 },
    top: { minX: 538, minY: 79, maxX: 748, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 354, maxX: 597, maxY: 566 },
    right: { minX: 693, minY: 351, maxX: 909, maxY: 562 },
    top: { minX: 539, minY: 79, maxX: 748, maxY: 296 },
  },
  {
    left: { minX: 380, minY: 355, maxX: 596, maxY: 566 },
    right: { minX: 692, minY: 351, maxX: 908, maxY: 562 },
    top: { minX: 537, minY: 79, maxX: 747, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 691, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 535, minY: 78, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 691, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 536, minY: 78, maxX: 746, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 354, maxX: 595, maxY: 565 },
    right: { minX: 692, minY: 350, maxX: 908, maxY: 561 },
    top: { minX: 536, minY: 77, maxX: 747, maxY: 295 },
  },
  {
    left: { minX: 379, minY: 355, maxX: 594, maxY: 566 },
    right: { minX: 691, minY: 350, maxX: 907, maxY: 561 },
    top: { minX: 535, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 379, minY: 356, maxX: 594, maxY: 567 },
    right: { minX: 690, minY: 351, maxX: 905, maxY: 562 },
    top: { minX: 535, minY: 81, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 380, minY: 354, maxX: 594, maxY: 564 },
    right: { minX: 691, minY: 350, maxX: 906, maxY: 561 },
    top: { minX: 536, minY: 79, maxX: 746, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 592, maxY: 563 },
    right: { minX: 688, minY: 349, maxX: 903, maxY: 560 },
    top: { minX: 534, minY: 78, maxX: 743, maxY: 295 },
  },
  {
    left: { minX: 375, minY: 353, maxX: 590, maxY: 563 },
    right: { minX: 686, minY: 349, maxX: 900, maxY: 559 },
    top: { minX: 531, minY: 79, maxX: 740, maxY: 295 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 351, maxX: 901, maxY: 560 },
    top: { minX: 534, minY: 80, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 377, minY: 353, maxX: 591, maxY: 563 },
    right: { minX: 687, minY: 351, maxX: 900, maxY: 560 },
    top: { minX: 534, minY: 81, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 378, minY: 353, maxX: 592, maxY: 562 },
    right: { minX: 687, minY: 350, maxX: 900, maxY: 559 },
    top: { minX: 534, minY: 80, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 352, maxX: 593, maxY: 561 },
    right: { minX: 688, minY: 350, maxX: 902, maxY: 559 },
    top: { minX: 536, minY: 81, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 380, minY: 353, maxX: 593, maxY: 561 },
    right: { minX: 688, minY: 351, maxX: 900, maxY: 558 },
    top: { minX: 536, minY: 82, maxX: 744, maxY: 296 },
  },
  {
    left: { minX: 380, minY: 351, maxX: 592, maxY: 559 },
    right: { minX: 687, minY: 349, maxX: 900, maxY: 557 },
    top: { minX: 535, minY: 80, maxX: 743, maxY: 294 },
  },
  {
    left: { minX: 379, minY: 351, maxX: 592, maxY: 559 },
    right: { minX: 686, minY: 349, maxX: 898, maxY: 557 },
    top: { minX: 535, minY: 81, maxX: 742, maxY: 295 },
  },
  {
    left: { minX: 381, minY: 352, maxX: 592, maxY: 559 },
    right: { minX: 687, minY: 350, maxX: 898, maxY: 557 },
    top: { minX: 536, minY: 83, maxX: 742, maxY: 296 },
  },
  {
    left: { minX: 381, minY: 353, maxX: 592, maxY: 559 },
    right: { minX: 686, minY: 351, maxX: 896, maxY: 557 },
    top: { minX: 536, minY: 85, maxX: 741, maxY: 297 },
  },
  {
    left: { minX: 384, minY: 353, maxX: 594, maxY: 559 },
    right: { minX: 688, minY: 351, maxX: 898, maxY: 557 },
    top: { minX: 539, minY: 85, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 385, minY: 351, maxX: 595, maxY: 557 },
    right: { minX: 689, minY: 351, maxX: 900, maxY: 556 },
    top: { minX: 540, minY: 84, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 386, minY: 351, maxX: 595, maxY: 556 },
    right: { minX: 688, minY: 350, maxX: 898, maxY: 556 },
    top: { minX: 540, minY: 84, maxX: 745, maxY: 295 },
  },
  {
    left: { minX: 386, minY: 351, maxX: 595, maxY: 555 },
    right: { minX: 688, minY: 350, maxX: 898, maxY: 555 },
    top: { minX: 540, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 387, minY: 350, maxX: 595, maxY: 554 },
    right: { minX: 688, minY: 350, maxX: 897, maxY: 554 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 595, maxY: 553 },
    right: { minX: 688, minY: 349, maxX: 897, maxY: 553 },
    top: { minX: 541, minY: 85, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 388, minY: 350, maxX: 595, maxY: 553 },
    right: { minX: 687, minY: 349, maxX: 896, maxY: 553 },
    top: { minX: 541, minY: 86, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 390, minY: 351, maxX: 596, maxY: 553 },
    right: { minX: 688, minY: 351, maxX: 896, maxY: 553 },
    top: { minX: 542, minY: 88, maxX: 744, maxY: 296 },
  },
  {
    left: { minX: 391, minY: 350, maxX: 596, maxY: 551 },
    right: { minX: 689, minY: 349, maxX: 895, maxY: 552 },
    top: { minX: 543, minY: 88, maxX: 744, maxY: 295 },
  },
  {
    left: { minX: 393, minY: 351, maxX: 597, maxY: 551 },
    right: { minX: 689, minY: 351, maxX: 895, maxY: 552 },
    top: { minX: 544, minY: 90, maxX: 744, maxY: 297 },
  },
  {
    left: { minX: 394, minY: 351, maxX: 597, maxY: 551 },
    right: { minX: 689, minY: 351, maxX: 894, maxY: 552 },
    top: { minX: 544, minY: 91, maxX: 744, maxY: 298 },
  },
  {
    left: { minX: 394, minY: 353, maxX: 597, maxY: 551 },
    right: { minX: 688, minY: 353, maxX: 892, maxY: 553 },
    top: { minX: 545, minY: 95, maxX: 743, maxY: 299 },
  },
  {
    left: { minX: 396, minY: 353, maxX: 598, maxY: 551 },
    right: { minX: 689, minY: 353, maxX: 892, maxY: 553 },
    top: { minX: 545, minY: 96, maxX: 743, maxY: 300 },
  },
  {
    left: { minX: 400, minY: 351, maxX: 601, maxY: 548 },
    right: { minX: 691, minY: 352, maxX: 895, maxY: 551 },
    top: { minX: 549, minY: 95, maxX: 747, maxY: 298 },
  },
  {
    left: { minX: 404, minY: 352, maxX: 603, maxY: 548 },
    right: { minX: 693, minY: 353, maxX: 897, maxY: 551 },
    top: { minX: 552, minY: 97, maxX: 749, maxY: 299 },
  },
  {
    left: { minX: 405, minY: 355, maxX: 603, maxY: 550 },
    right: { minX: 693, minY: 355, maxX: 895, maxY: 553 },
    top: { minX: 552, minY: 101, maxX: 748, maxY: 302 },
  },
  {
    left: { minX: 407, minY: 355, maxX: 605, maxY: 549 },
    right: { minX: 694, minY: 356, maxX: 896, maxY: 552 },
    top: { minX: 553, minY: 103, maxX: 749, maxY: 302 },
  },
  {
    left: { minX: 410, minY: 354, maxX: 606, maxY: 548 },
    right: { minX: 695, minY: 355, maxX: 896, maxY: 551 },
    top: { minX: 555, minY: 103, maxX: 750, maxY: 302 },
  },
  {
    left: { minX: 410, minY: 355, maxX: 606, maxY: 548 },
    right: { minX: 694, minY: 355, maxX: 895, maxY: 551 },
    top: { minX: 555, minY: 105, maxX: 748, maxY: 303 },
  },
  {
    left: { minX: 413, minY: 354, maxX: 608, maxY: 546 },
    right: { minX: 696, minY: 355, maxX: 896, maxY: 550 },
    top: { minX: 557, minY: 104, maxX: 750, maxY: 302 },
  },
  {
    left: { minX: 417, minY: 356, maxX: 610, maxY: 547 },
    right: { minX: 698, minY: 357, maxX: 897, maxY: 552 },
    top: { minX: 561, minY: 108, maxX: 752, maxY: 305 },
  },
  {
    left: { minX: 418, minY: 358, maxX: 611, maxY: 548 },
    right: { minX: 699, minY: 360, maxX: 897, maxY: 553 },
    top: { minX: 562, minY: 112, maxX: 752, maxY: 308 },
  },
  {
    left: { minX: 419, minY: 360, maxX: 611, maxY: 549 },
    right: { minX: 698, minY: 361, maxX: 896, maxY: 555 },
    top: { minX: 562, minY: 115, maxX: 752, maxY: 309 },
  },
  {
    left: { minX: 419, minY: 360, maxX: 610, maxY: 549 },
    right: { minX: 697, minY: 361, maxX: 896, maxY: 554 },
    top: { minX: 561, minY: 115, maxX: 751, maxY: 309 },
  },
  {
    left: { minX: 418, minY: 358, maxX: 609, maxY: 547 },
    right: { minX: 696, minY: 359, maxX: 894, maxY: 552 },
    top: { minX: 560, minY: 113, maxX: 750, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 358, maxX: 608, maxY: 547 },
    right: { minX: 695, minY: 359, maxX: 893, maxY: 552 },
    top: { minX: 559, minY: 113, maxX: 748, maxY: 307 },
  },
  {
    left: { minX: 417, minY: 359, maxX: 608, maxY: 547 },
    right: { minX: 695, minY: 359, maxX: 892, maxY: 552 },
    top: { minX: 558, minY: 114, maxX: 748, maxY: 308 },
  },
  {
    left: { minX: 417, minY: 361, maxX: 608, maxY: 549 },
    right: { minX: 695, minY: 361, maxX: 891, maxY: 553 },
    top: { minX: 558, minY: 117, maxX: 747, maxY: 310 },
  },
  {
    left: { minX: 417, minY: 357, maxX: 608, maxY: 545 },
    right: { minX: 694, minY: 359, maxX: 890, maxY: 550 },
    top: { minX: 558, minY: 113, maxX: 748, maxY: 307 },
  },
  {
    left: { minX: 416, minY: 355, maxX: 606, maxY: 542 },
    right: { minX: 693, minY: 355, maxX: 890, maxY: 547 },
    top: { minX: 557, minY: 110, maxX: 746, maxY: 304 },
  },
  {
    left: { minX: 417, minY: 354, maxX: 607, maxY: 541 },
    right: { minX: 693, minY: 355, maxX: 889, maxY: 547 },
    top: { minX: 558, minY: 110, maxX: 746, maxY: 304 },
  },
  {
    left: { minX: 419, minY: 358, maxX: 607, maxY: 544 },
    right: { minX: 693, minY: 359, maxX: 888, maxY: 550 },
    top: { minX: 559, minY: 116, maxX: 746, maxY: 308 },
  },
  {
    left: { minX: 421, minY: 361, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 561, minY: 122, maxX: 747, maxY: 312 },
  },
  {
    left: { minX: 422, minY: 363, maxX: 609, maxY: 548 },
    right: { minX: 694, minY: 365, maxX: 888, maxY: 554 },
    top: { minX: 561, minY: 124, maxX: 747, maxY: 314 },
  },
  {
    left: { minX: 422, minY: 363, maxX: 609, maxY: 548 },
    right: { minX: 695, minY: 364, maxX: 888, maxY: 554 },
    top: { minX: 561, minY: 123, maxX: 747, maxY: 313 },
  },
  {
    left: { minX: 420, minY: 362, maxX: 607, maxY: 548 },
    right: { minX: 693, minY: 363, maxX: 886, maxY: 553 },
    top: { minX: 559, minY: 123, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 419, minY: 362, maxX: 607, maxY: 547 },
    right: { minX: 692, minY: 362, maxX: 886, maxY: 552 },
    top: { minX: 559, minY: 121, maxX: 744, maxY: 312 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 608, maxY: 547 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 560, minY: 123, maxX: 746, maxY: 312 },
  },
  {
    left: { minX: 422, minY: 362, maxX: 610, maxY: 547 },
    right: { minX: 695, minY: 363, maxX: 889, maxY: 553 },
    top: { minX: 562, minY: 123, maxX: 748, maxY: 313 },
  },
  {
    left: { minX: 422, minY: 361, maxX: 609, maxY: 547 },
    right: { minX: 695, minY: 364, maxX: 888, maxY: 554 },
    top: { minX: 562, minY: 123, maxX: 748, maxY: 312 },
  },
  {
    left: { minX: 421, minY: 360, maxX: 609, maxY: 546 },
    right: { minX: 694, minY: 363, maxX: 888, maxY: 553 },
    top: { minX: 562, minY: 120, maxX: 749, maxY: 311 },
  },
  {
    left: { minX: 417, minY: 360, maxX: 605, maxY: 546 },
    right: { minX: 691, minY: 363, maxX: 884, maxY: 553 },
    top: { minX: 558, minY: 121, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 416, minY: 361, maxX: 604, maxY: 548 },
    right: { minX: 690, minY: 363, maxX: 883, maxY: 553 },
    top: { minX: 557, minY: 123, maxX: 743, maxY: 312 },
  },
  {
    left: { minX: 415, minY: 362, maxX: 604, maxY: 548 },
    right: { minX: 689, minY: 365, maxX: 882, maxY: 554 },
    top: { minX: 557, minY: 123, maxX: 743, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 604, maxY: 549 },
    right: { minX: 689, minY: 365, maxX: 882, maxY: 554 },
    top: { minX: 556, minY: 123, maxX: 742, maxY: 313 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 603, maxY: 548 },
    right: { minX: 689, minY: 364, maxX: 882, maxY: 553 },
    top: { minX: 556, minY: 122, maxX: 742, maxY: 313 },
  },
  {
    left: { minX: 413, minY: 362, maxX: 602, maxY: 549 },
    right: { minX: 688, minY: 363, maxX: 880, maxY: 553 },
    top: { minX: 554, minY: 122, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 601, maxY: 548 },
    right: { minX: 687, minY: 363, maxX: 880, maxY: 553 },
    top: { minX: 554, minY: 121, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 412, minY: 362, maxX: 602, maxY: 549 },
    right: { minX: 688, minY: 363, maxX: 881, maxY: 553 },
    top: { minX: 553, minY: 121, maxX: 740, maxY: 312 },
  },
  {
    left: { minX: 413, minY: 362, maxX: 604, maxY: 549 },
    right: { minX: 690, minY: 362, maxX: 884, maxY: 553 },
    top: { minX: 555, minY: 120, maxX: 742, maxY: 311 },
  },
  {
    left: { minX: 414, minY: 362, maxX: 604, maxY: 550 },
    right: { minX: 691, minY: 362, maxX: 886, maxY: 553 },
    top: { minX: 555, minY: 119, maxX: 743, maxY: 311 },
  },
  {
    left: { minX: 415, minY: 362, maxX: 605, maxY: 550 },
    right: { minX: 692, minY: 362, maxX: 887, maxY: 553 },
    top: { minX: 557, minY: 119, maxX: 744, maxY: 311 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 606, maxY: 552 },
    right: { minX: 692, minY: 364, maxX: 886, maxY: 554 },
    top: { minX: 557, minY: 121, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 363, maxX: 606, maxY: 552 },
    right: { minX: 693, minY: 364, maxX: 887, maxY: 555 },
    top: { minX: 557, minY: 121, maxX: 745, maxY: 313 },
  },
  {
    left: { minX: 415, minY: 364, maxX: 606, maxY: 553 },
    right: { minX: 693, minY: 365, maxX: 888, maxY: 556 },
    top: { minX: 557, minY: 122, maxX: 744, maxY: 314 },
  },
  {
    left: { minX: 417, minY: 366, maxX: 608, maxY: 555 },
    right: { minX: 695, minY: 365, maxX: 891, maxY: 557 },
    top: { minX: 559, minY: 123, maxX: 746, maxY: 315 },
  },
  {
    left: { minX: 418, minY: 367, maxX: 610, maxY: 556 },
    right: { minX: 697, minY: 366, maxX: 893, maxY: 558 },
    top: { minX: 560, minY: 123, maxX: 748, maxY: 316 },
  },
  {
    left: { minX: 419, minY: 369, maxX: 611, maxY: 559 },
    right: { minX: 698, minY: 368, maxX: 894, maxY: 560 },
    top: { minX: 561, minY: 125, maxX: 749, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 368, maxX: 611, maxY: 558 },
    right: { minX: 698, minY: 367, maxX: 895, maxY: 560 },
    top: { minX: 561, minY: 123, maxX: 750, maxY: 316 },
  },
  {
    left: { minX: 417, minY: 367, maxX: 610, maxY: 558 },
    right: { minX: 697, minY: 366, maxX: 894, maxY: 559 },
    top: { minX: 559, minY: 122, maxX: 748, maxY: 315 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 608, maxY: 558 },
    right: { minX: 696, minY: 365, maxX: 893, maxY: 559 },
    top: { minX: 557, minY: 121, maxX: 746, maxY: 315 },
  },
  {
    left: { minX: 414, minY: 371, maxX: 607, maxY: 563 },
    right: { minX: 694, minY: 369, maxX: 891, maxY: 561 },
    top: { minX: 555, minY: 126, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 608, maxY: 562 },
    right: { minX: 695, minY: 369, maxX: 892, maxY: 562 },
    top: { minX: 557, minY: 126, maxX: 745, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 608, maxY: 562 },
    right: { minX: 695, minY: 369, maxX: 892, maxY: 561 },
    top: { minX: 557, minY: 126, maxX: 746, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 607, maxY: 563 },
    right: { minX: 694, minY: 370, maxX: 890, maxY: 562 },
    top: { minX: 555, minY: 128, maxX: 744, maxY: 320 },
  },
  {
    left: { minX: 414, minY: 371, maxX: 607, maxY: 563 },
    right: { minX: 695, minY: 369, maxX: 891, maxY: 562 },
    top: { minX: 555, minY: 127, maxX: 744, maxY: 319 },
  },
  {
    left: { minX: 413, minY: 369, maxX: 606, maxY: 561 },
    right: { minX: 694, minY: 367, maxX: 891, maxY: 560 },
    top: { minX: 555, minY: 123, maxX: 744, maxY: 317 },
  },
  {
    left: { minX: 413, minY: 369, maxX: 607, maxY: 561 },
    right: { minX: 694, minY: 368, maxX: 892, maxY: 561 },
    top: { minX: 556, minY: 124, maxX: 745, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 371, maxX: 606, maxY: 562 },
    right: { minX: 693, minY: 369, maxX: 889, maxY: 561 },
    top: { minX: 555, minY: 126, maxX: 743, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 371, maxX: 604, maxY: 562 },
    right: { minX: 692, minY: 369, maxX: 887, maxY: 562 },
    top: { minX: 553, minY: 127, maxX: 742, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 371, maxX: 604, maxY: 562 },
    right: { minX: 691, minY: 369, maxX: 887, maxY: 561 },
    top: { minX: 553, minY: 126, maxX: 742, maxY: 319 },
  },
  {
    left: { minX: 411, minY: 368, maxX: 604, maxY: 560 },
    right: { minX: 691, minY: 368, maxX: 887, maxY: 560 },
    top: { minX: 554, minY: 125, maxX: 743, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 365, maxX: 604, maxY: 556 },
    right: { minX: 692, minY: 365, maxX: 888, maxY: 557 },
    top: { minX: 555, minY: 120, maxX: 744, maxY: 314 },
  },
  {
    left: { minX: 412, minY: 366, maxX: 604, maxY: 557 },
    right: { minX: 692, minY: 366, maxX: 887, maxY: 558 },
    top: { minX: 555, minY: 122, maxX: 744, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 368, maxX: 603, maxY: 558 },
    right: { minX: 690, minY: 368, maxX: 884, maxY: 559 },
    top: { minX: 554, minY: 125, maxX: 742, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 602, maxY: 556 },
    right: { minX: 689, minY: 366, maxX: 884, maxY: 556 },
    top: { minX: 553, minY: 123, maxX: 741, maxY: 315 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 602, maxY: 555 },
    right: { minX: 688, minY: 366, maxX: 882, maxY: 556 },
    top: { minX: 552, minY: 124, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 411, minY: 365, maxX: 602, maxY: 554 },
    right: { minX: 688, minY: 365, maxX: 881, maxY: 555 },
    top: { minX: 553, minY: 123, maxX: 740, maxY: 315 },
  },
  {
    left: { minX: 409, minY: 366, maxX: 600, maxY: 554 },
    right: { minX: 686, minY: 365, maxX: 878, maxY: 554 },
    top: { minX: 551, minY: 125, maxX: 737, maxY: 315 },
  },
  {
    left: { minX: 407, minY: 365, maxX: 597, maxY: 552 },
    right: { minX: 683, minY: 364, maxX: 874, maxY: 553 },
    top: { minX: 547, minY: 125, maxX: 734, maxY: 315 },
  },
  {
    left: { minX: 406, minY: 366, maxX: 596, maxY: 552 },
    right: { minX: 681, minY: 365, maxX: 872, maxY: 552 },
    top: { minX: 546, minY: 127, maxX: 731, maxY: 315 },
  },
  {
    left: { minX: 406, minY: 366, maxX: 595, maxY: 552 },
    right: { minX: 680, minY: 365, maxX: 870, maxY: 552 },
    top: { minX: 545, minY: 127, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 409, minY: 367, maxX: 597, maxY: 552 },
    right: { minX: 682, minY: 365, maxX: 872, maxY: 553 },
    top: { minX: 547, minY: 129, maxX: 732, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 598, maxY: 552 },
    right: { minX: 683, minY: 366, maxX: 873, maxY: 553 },
    top: { minX: 549, minY: 129, maxX: 733, maxY: 317 },
  },
  {
    left: { minX: 412, minY: 365, maxX: 599, maxY: 550 },
    right: { minX: 684, minY: 365, maxX: 874, maxY: 552 },
    top: { minX: 551, minY: 129, maxX: 734, maxY: 315 },
  },
  {
    left: { minX: 409, minY: 365, maxX: 596, maxY: 549 },
    right: { minX: 681, minY: 365, maxX: 869, maxY: 551 },
    top: { minX: 547, minY: 129, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 365, maxX: 596, maxY: 549 },
    right: { minX: 680, minY: 365, maxX: 868, maxY: 550 },
    top: { minX: 547, minY: 129, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 596, maxY: 549 },
    right: { minX: 679, minY: 365, maxX: 867, maxY: 550 },
    top: { minX: 547, minY: 131, maxX: 729, maxY: 317 },
  },
  {
    left: { minX: 413, minY: 366, maxX: 597, maxY: 548 },
    right: { minX: 681, minY: 366, maxX: 867, maxY: 550 },
    top: { minX: 549, minY: 133, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 414, minY: 367, maxX: 598, maxY: 549 },
    right: { minX: 681, minY: 367, maxX: 868, maxY: 551 },
    top: { minX: 551, minY: 135, maxX: 731, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 599, maxY: 548 },
    right: { minX: 681, minY: 367, maxX: 867, maxY: 551 },
    top: { minX: 551, minY: 136, maxX: 731, maxY: 319 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 598, maxY: 547 },
    right: { minX: 681, minY: 367, maxX: 866, maxY: 549 },
    top: { minX: 550, minY: 135, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 597, maxY: 546 },
    right: { minX: 679, minY: 365, maxX: 865, maxY: 548 },
    top: { minX: 549, minY: 135, maxX: 728, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 366, maxX: 597, maxY: 545 },
    right: { minX: 679, minY: 365, maxX: 864, maxY: 547 },
    top: { minX: 548, minY: 135, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 416, minY: 365, maxX: 597, maxY: 544 },
    right: { minX: 679, minY: 365, maxX: 863, maxY: 546 },
    top: { minX: 549, minY: 135, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 417, minY: 366, maxX: 598, maxY: 544 },
    right: { minX: 679, minY: 365, maxX: 862, maxY: 546 },
    top: { minX: 549, minY: 136, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 418, minY: 365, maxX: 598, maxY: 542 },
    right: { minX: 679, minY: 365, maxX: 862, maxY: 545 },
    top: { minX: 551, minY: 136, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 419, minY: 365, maxX: 598, maxY: 542 },
    right: { minX: 679, minY: 365, maxX: 861, maxY: 544 },
    top: { minX: 551, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 420, minY: 365, maxX: 598, maxY: 541 },
    right: { minX: 679, minY: 364, maxX: 861, maxY: 544 },
    top: { minX: 551, minY: 137, maxX: 727, maxY: 317 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 599, maxY: 541 },
    right: { minX: 679, minY: 365, maxX: 860, maxY: 544 },
    top: { minX: 551, minY: 139, maxX: 727, maxY: 318 },
  },
  {
    left: { minX: 422, minY: 367, maxX: 599, maxY: 541 },
    right: { minX: 679, minY: 365, maxX: 860, maxY: 544 },
    top: { minX: 551, minY: 141, maxX: 727, maxY: 319 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 598, maxY: 540 },
    right: { minX: 679, minY: 365, maxX: 859, maxY: 543 },
    top: { minX: 551, minY: 140, maxX: 726, maxY: 318 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 597, maxY: 540 },
    right: { minX: 677, minY: 364, maxX: 857, maxY: 542 },
    top: { minX: 549, minY: 140, maxX: 723, maxY: 318 },
  },
  {
    left: { minX: 421, minY: 365, maxX: 597, maxY: 538 },
    right: { minX: 677, minY: 363, maxX: 857, maxY: 541 },
    top: { minX: 549, minY: 139, maxX: 724, maxY: 317 },
  },
  {
    left: { minX: 422, minY: 365, maxX: 598, maxY: 538 },
    right: { minX: 677, minY: 363, maxX: 858, maxY: 540 },
    top: { minX: 549, minY: 139, maxX: 724, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 364, maxX: 600, maxY: 536 },
    right: { minX: 679, minY: 363, maxX: 858, maxY: 540 },
    top: { minX: 553, minY: 140, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 364, maxX: 599, maxY: 536 },
    right: { minX: 678, minY: 363, maxX: 857, maxY: 539 },
    top: { minX: 553, minY: 141, maxX: 725, maxY: 317 },
  },
  {
    left: { minX: 423, minY: 363, maxX: 597, maxY: 534 },
    right: { minX: 676, minY: 361, maxX: 854, maxY: 537 },
    top: { minX: 550, minY: 139, maxX: 723, maxY: 315 },
  },
  {
    left: { minX: 421, minY: 362, maxX: 595, maxY: 533 },
    right: { minX: 673, minY: 361, maxX: 850, maxY: 536 },
    top: { minX: 547, minY: 139, maxX: 720, maxY: 315 },
  },
  {
    left: { minX: 420, minY: 361, maxX: 593, maxY: 531 },
    right: { minX: 671, minY: 360, maxX: 847, maxY: 534 },
    top: { minX: 545, minY: 139, maxX: 718, maxY: 314 },
  },
  {
    left: { minX: 418, minY: 361, maxX: 590, maxY: 530 },
    right: { minX: 668, minY: 359, maxX: 844, maxY: 533 },
    top: { minX: 543, minY: 139, maxX: 714, maxY: 314 },
  },
  {
    left: { minX: 418, minY: 363, maxX: 590, maxY: 531 },
    right: { minX: 667, minY: 361, maxX: 842, maxY: 534 },
    top: { minX: 543, minY: 142, maxX: 712, maxY: 316 },
  },
  {
    left: { minX: 421, minY: 366, maxX: 592, maxY: 534 },
    right: { minX: 668, minY: 363, maxX: 843, maxY: 537 },
    top: { minX: 544, minY: 147, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 424, minY: 366, maxX: 594, maxY: 534 },
    right: { minX: 671, minY: 364, maxX: 846, maxY: 537 },
    top: { minX: 547, minY: 147, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 425, minY: 366, maxX: 595, maxY: 534 },
    right: { minX: 672, minY: 364, maxX: 846, maxY: 537 },
    top: { minX: 547, minY: 148, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 596, maxY: 534 },
    right: { minX: 672, minY: 365, maxX: 846, maxY: 537 },
    top: { minX: 549, minY: 149, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 597, maxY: 535 },
    right: { minX: 673, minY: 365, maxX: 848, maxY: 538 },
    top: { minX: 549, minY: 150, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 368, maxX: 597, maxY: 535 },
    right: { minX: 673, minY: 365, maxX: 848, maxY: 538 },
    top: { minX: 549, minY: 151, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 597, maxY: 534 },
    right: { minX: 673, minY: 365, maxX: 847, maxY: 537 },
    top: { minX: 549, minY: 150, maxX: 718, maxY: 321 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 596, maxY: 533 },
    right: { minX: 673, minY: 365, maxX: 846, maxY: 537 },
    top: { minX: 549, minY: 150, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 427, minY: 365, maxX: 595, maxY: 531 },
    right: { minX: 671, minY: 363, maxX: 844, maxY: 535 },
    top: { minX: 547, minY: 149, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 425, minY: 367, maxX: 594, maxY: 532 },
    right: { minX: 669, minY: 363, maxX: 842, maxY: 535 },
    top: { minX: 545, minY: 150, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 425, minY: 367, maxX: 593, maxY: 532 },
    right: { minX: 668, minY: 364, maxX: 840, maxY: 535 },
    top: { minX: 545, minY: 151, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 592, maxY: 533 },
    right: { minX: 667, minY: 365, maxX: 840, maxY: 535 },
    top: { minX: 544, minY: 152, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 367, maxX: 592, maxY: 532 },
    right: { minX: 667, minY: 364, maxX: 840, maxY: 535 },
    top: { minX: 544, minY: 151, maxX: 711, maxY: 321 },
  },
  {
    left: { minX: 427, minY: 367, maxX: 594, maxY: 532 },
    right: { minX: 670, minY: 365, maxX: 842, maxY: 535 },
    top: { minX: 546, minY: 151, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 426, minY: 368, maxX: 593, maxY: 533 },
    right: { minX: 668, minY: 365, maxX: 841, maxY: 535 },
    top: { minX: 545, minY: 153, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 424, minY: 369, maxX: 591, maxY: 533 },
    right: { minX: 665, minY: 365, maxX: 838, maxY: 535 },
    top: { minX: 543, minY: 153, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 367, maxX: 591, maxY: 532 },
    right: { minX: 665, minY: 364, maxX: 837, maxY: 535 },
    top: { minX: 543, minY: 153, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 591, maxY: 532 },
    right: { minX: 665, minY: 365, maxX: 836, maxY: 535 },
    top: { minX: 543, minY: 154, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 424, minY: 369, maxX: 590, maxY: 533 },
    right: { minX: 664, minY: 365, maxX: 834, maxY: 535 },
    top: { minX: 542, minY: 156, maxX: 707, maxY: 323 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 590, maxY: 534 },
    right: { minX: 665, minY: 367, maxX: 835, maxY: 536 },
    top: { minX: 543, minY: 159, maxX: 706, maxY: 325 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 590, maxY: 534 },
    right: { minX: 665, minY: 368, maxX: 834, maxY: 537 },
    top: { minX: 543, minY: 159, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 425, minY: 369, maxX: 590, maxY: 532 },
    right: { minX: 665, minY: 367, maxX: 835, maxY: 535 },
    top: { minX: 543, minY: 157, maxX: 708, maxY: 324 },
  },
  {
    left: { minX: 424, minY: 368, maxX: 590, maxY: 531 },
    right: { minX: 664, minY: 366, maxX: 835, maxY: 535 },
    top: { minX: 543, minY: 155, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 423, minY: 367, maxX: 589, maxY: 530 },
    right: { minX: 663, minY: 365, maxX: 834, maxY: 535 },
    top: { minX: 543, minY: 154, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 421, minY: 365, maxX: 587, maxY: 529 },
    right: { minX: 662, minY: 364, maxX: 832, maxY: 533 },
    top: { minX: 541, minY: 152, maxX: 707, maxY: 320 },
  },
  {
    left: { minX: 417, minY: 365, maxX: 584, maxY: 529 },
    right: { minX: 659, minY: 365, maxX: 829, maxY: 533 },
    top: { minX: 539, minY: 152, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 414, minY: 366, maxX: 582, maxY: 530 },
    right: { minX: 657, minY: 365, maxX: 826, maxY: 534 },
    top: { minX: 536, minY: 153, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 367, maxX: 580, maxY: 531 },
    right: { minX: 655, minY: 366, maxX: 824, maxY: 535 },
    top: { minX: 535, minY: 155, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 579, maxY: 531 },
    right: { minX: 653, minY: 365, maxX: 823, maxY: 534 },
    top: { minX: 533, minY: 153, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 578, maxY: 531 },
    right: { minX: 654, minY: 365, maxX: 822, maxY: 534 },
    top: { minX: 533, minY: 153, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 579, maxY: 530 },
    right: { minX: 654, minY: 365, maxX: 824, maxY: 534 },
    top: { minX: 534, minY: 153, maxX: 699, maxY: 321 },
  },
  {
    left: { minX: 409, minY: 363, maxX: 578, maxY: 529 },
    right: { minX: 653, minY: 363, maxX: 822, maxY: 532 },
    top: { minX: 533, minY: 150, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 406, minY: 361, maxX: 576, maxY: 527 },
    right: { minX: 651, minY: 361, maxX: 821, maxY: 530 },
    top: { minX: 530, minY: 147, maxX: 697, maxY: 316 },
  },
  {
    left: { minX: 406, minY: 362, maxX: 576, maxY: 528 },
    right: { minX: 651, minY: 363, maxX: 820, maxY: 531 },
    top: { minX: 531, minY: 149, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 408, minY: 364, maxX: 577, maxY: 529 },
    right: { minX: 652, minY: 364, maxX: 822, maxY: 533 },
    top: { minX: 532, minY: 150, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 408, minY: 365, maxX: 577, maxY: 530 },
    right: { minX: 653, minY: 365, maxX: 822, maxY: 534 },
    top: { minX: 531, minY: 151, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 411, minY: 366, maxX: 580, maxY: 532 },
    right: { minX: 655, minY: 366, maxX: 825, maxY: 535 },
    top: { minX: 535, minY: 152, maxX: 701, maxY: 321 },
  },
  {
    left: { minX: 413, minY: 366, maxX: 582, maxY: 532 },
    right: { minX: 658, minY: 366, maxX: 828, maxY: 535 },
    top: { minX: 537, minY: 153, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 412, minY: 364, maxX: 582, maxY: 530 },
    right: { minX: 658, minY: 364, maxX: 828, maxY: 534 },
    top: { minX: 537, minY: 149, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 410, minY: 364, maxX: 580, maxY: 531 },
    right: { minX: 657, minY: 364, maxX: 827, maxY: 533 },
    top: { minX: 535, minY: 149, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 409, minY: 364, maxX: 579, maxY: 532 },
    right: { minX: 656, minY: 365, maxX: 826, maxY: 534 },
    top: { minX: 534, minY: 149, maxX: 702, maxY: 319 },
  },
  {
    left: { minX: 407, minY: 363, maxX: 578, maxY: 531 },
    right: { minX: 655, minY: 363, maxX: 826, maxY: 533 },
    top: { minX: 533, minY: 147, maxX: 702, maxY: 318 },
  },
  {
    left: { minX: 409, minY: 364, maxX: 580, maxY: 533 },
    right: { minX: 657, minY: 364, maxX: 828, maxY: 534 },
    top: { minX: 535, minY: 148, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 409, minY: 366, maxX: 581, maxY: 534 },
    right: { minX: 658, minY: 365, maxX: 829, maxY: 536 },
    top: { minX: 536, minY: 150, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 410, minY: 367, maxX: 582, maxY: 536 },
    right: { minX: 659, minY: 367, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 151, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 581, maxY: 538 },
    right: { minX: 658, minY: 368, maxX: 829, maxY: 538 },
    top: { minX: 535, minY: 153, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 579, maxY: 539 },
    right: { minX: 657, minY: 368, maxX: 828, maxY: 539 },
    top: { minX: 533, minY: 152, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 405, minY: 369, maxX: 578, maxY: 539 },
    right: { minX: 656, minY: 367, maxX: 828, maxY: 538 },
    top: { minX: 532, minY: 151, maxX: 701, maxY: 322 },
  },
  {
    left: { minX: 404, minY: 369, maxX: 578, maxY: 540 },
    right: { minX: 656, minY: 367, maxX: 827, maxY: 538 },
    top: { minX: 531, minY: 150, maxX: 700, maxY: 322 },
  },
  {
    left: { minX: 404, minY: 371, maxX: 578, maxY: 542 },
    right: { minX: 656, minY: 369, maxX: 828, maxY: 540 },
    top: { minX: 531, minY: 152, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 401, minY: 370, maxX: 576, maxY: 542 },
    right: { minX: 655, minY: 368, maxX: 827, maxY: 540 },
    top: { minX: 529, minY: 151, maxX: 699, maxY: 323 },
  },
  {
    left: { minX: 395, minY: 369, maxX: 572, maxY: 542 },
    right: { minX: 651, minY: 367, maxX: 823, maxY: 539 },
    top: { minX: 525, minY: 149, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 395, minY: 368, maxX: 572, maxY: 542 },
    right: { minX: 651, minY: 366, maxX: 824, maxY: 537 },
    top: { minX: 524, minY: 147, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 823, maxY: 537 },
    top: { minX: 523, minY: 146, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 367, maxX: 571, maxY: 541 },
    right: { minX: 650, minY: 365, maxX: 823, maxY: 537 },
    top: { minX: 523, minY: 146, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 393, minY: 369, maxX: 570, maxY: 543 },
    right: { minX: 650, minY: 367, maxX: 822, maxY: 539 },
    top: { minX: 523, minY: 147, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 394, minY: 371, maxX: 572, maxY: 545 },
    right: { minX: 651, minY: 368, maxX: 823, maxY: 539 },
    top: { minX: 523, minY: 149, maxX: 694, maxY: 323 },
  },
  {
    left: { minX: 396, minY: 369, maxX: 574, maxY: 543 },
    right: { minX: 653, minY: 367, maxX: 826, maxY: 539 },
    top: { minX: 525, minY: 148, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 397, minY: 367, maxX: 575, maxY: 542 },
    right: { minX: 655, minY: 365, maxX: 828, maxY: 538 },
    top: { minX: 527, minY: 145, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 397, minY: 366, maxX: 575, maxY: 541 },
    right: { minX: 655, minY: 365, maxX: 828, maxY: 538 },
    top: { minX: 528, minY: 143, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 394, minY: 366, maxX: 573, maxY: 540 },
    right: { minX: 653, minY: 364, maxX: 826, maxY: 537 },
    top: { minX: 525, minY: 143, maxX: 698, maxY: 318 },
  },
  {
    left: { minX: 394, minY: 367, maxX: 572, maxY: 541 },
    right: { minX: 652, minY: 365, maxX: 826, maxY: 538 },
    top: { minX: 526, minY: 145, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 395, minY: 367, maxX: 574, maxY: 542 },
    right: { minX: 653, minY: 366, maxX: 826, maxY: 539 },
    top: { minX: 527, minY: 145, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 393, minY: 367, maxX: 572, maxY: 542 },
    right: { minX: 652, minY: 365, maxX: 824, maxY: 538 },
    top: { minX: 525, minY: 145, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 392, minY: 369, maxX: 571, maxY: 543 },
    right: { minX: 650, minY: 367, maxX: 823, maxY: 539 },
    top: { minX: 523, minY: 147, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 391, minY: 371, maxX: 570, maxY: 545 },
    right: { minX: 649, minY: 368, maxX: 821, maxY: 540 },
    top: { minX: 522, minY: 149, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 391, minY: 371, maxX: 569, maxY: 545 },
    right: { minX: 648, minY: 369, maxX: 820, maxY: 540 },
    top: { minX: 521, minY: 150, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 390, minY: 371, maxX: 568, maxY: 545 },
    right: { minX: 647, minY: 369, maxX: 819, maxY: 540 },
    top: { minX: 520, minY: 150, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 391, minY: 371, maxX: 569, maxY: 545 },
    right: { minX: 648, minY: 369, maxX: 820, maxY: 541 },
    top: { minX: 521, minY: 151, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 394, minY: 371, maxX: 571, maxY: 545 },
    right: { minX: 651, minY: 369, maxX: 822, maxY: 541 },
    top: { minX: 525, minY: 151, maxX: 695, maxY: 324 },
  },
  {
    left: { minX: 397, minY: 369, maxX: 574, maxY: 542 },
    right: { minX: 653, minY: 367, maxX: 825, maxY: 539 },
    top: { minX: 527, minY: 149, maxX: 697, maxY: 322 },
  },
  {
    left: { minX: 401, minY: 371, maxX: 576, maxY: 543 },
    right: { minX: 655, minY: 369, maxX: 826, maxY: 540 },
    top: { minX: 530, minY: 152, maxX: 699, maxY: 324 },
  },
  {
    left: { minX: 403, minY: 370, maxX: 578, maxY: 542 },
    right: { minX: 656, minY: 368, maxX: 828, maxY: 539 },
    top: { minX: 531, minY: 151, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 405, minY: 370, maxX: 580, maxY: 541 },
    right: { minX: 658, minY: 369, maxX: 830, maxY: 539 },
    top: { minX: 534, minY: 151, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 409, minY: 370, maxX: 583, maxY: 540 },
    right: { minX: 661, minY: 369, maxX: 831, maxY: 539 },
    top: { minX: 537, minY: 153, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 582, maxY: 539 },
    right: { minX: 659, minY: 368, maxX: 830, maxY: 537 },
    top: { minX: 537, minY: 153, maxX: 705, maxY: 323 },
  },
  {
    left: { minX: 406, minY: 369, maxX: 578, maxY: 538 },
    right: { minX: 656, minY: 367, maxX: 825, maxY: 535 },
    top: { minX: 532, minY: 153, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 409, minY: 370, maxX: 580, maxY: 538 },
    right: { minX: 657, minY: 367, maxX: 826, maxY: 535 },
    top: { minX: 534, minY: 155, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 411, minY: 369, maxX: 582, maxY: 537 },
    right: { minX: 658, minY: 367, maxX: 827, maxY: 534 },
    top: { minX: 535, minY: 154, maxX: 701, maxY: 323 },
  },
  {
    left: { minX: 415, minY: 367, maxX: 584, maxY: 534 },
    right: { minX: 661, minY: 365, maxX: 829, maxY: 532 },
    top: { minX: 539, minY: 153, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 417, minY: 368, maxX: 585, maxY: 534 },
    right: { minX: 661, minY: 366, maxX: 829, maxY: 532 },
    top: { minX: 539, minY: 155, maxX: 705, maxY: 323 },
  },
  {
    left: { minX: 416, minY: 368, maxX: 584, maxY: 534 },
    right: { minX: 660, minY: 366, maxX: 827, maxY: 531 },
    top: { minX: 539, minY: 155, maxX: 703, maxY: 323 },
  },
  {
    left: { minX: 417, minY: 365, maxX: 585, maxY: 530 },
    right: { minX: 661, minY: 363, maxX: 828, maxY: 529 },
    top: { minX: 539, minY: 153, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 420, minY: 365, maxX: 587, maxY: 529 },
    right: { minX: 662, minY: 363, maxX: 828, maxY: 528 },
    top: { minX: 542, minY: 154, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 423, minY: 367, maxX: 588, maxY: 530 },
    right: { minX: 663, minY: 365, maxX: 828, maxY: 529 },
    top: { minX: 543, minY: 157, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 368, maxX: 590, maxY: 530 },
    right: { minX: 664, minY: 367, maxX: 828, maxY: 530 },
    top: { minX: 545, minY: 160, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 425, minY: 367, maxX: 590, maxY: 529 },
    right: { minX: 664, minY: 365, maxX: 828, maxY: 528 },
    top: { minX: 545, minY: 159, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 426, minY: 367, maxX: 590, maxY: 528 },
    right: { minX: 663, minY: 365, maxX: 827, maxY: 527 },
    top: { minX: 545, minY: 159, maxX: 706, maxY: 323 },
  },
  {
    left: { minX: 428, minY: 367, maxX: 591, maxY: 527 },
    right: { minX: 664, minY: 365, maxX: 828, maxY: 527 },
    top: { minX: 546, minY: 159, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 430, minY: 367, maxX: 593, maxY: 527 },
    right: { minX: 666, minY: 365, maxX: 830, maxY: 527 },
    top: { minX: 548, minY: 161, maxX: 708, maxY: 323 },
  },
  {
    left: { minX: 435, minY: 366, maxX: 596, maxY: 525 },
    right: { minX: 669, minY: 364, maxX: 832, maxY: 526 },
    top: { minX: 552, minY: 160, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 435, minY: 367, maxX: 596, maxY: 526 },
    right: { minX: 669, minY: 365, maxX: 832, maxY: 526 },
    top: { minX: 553, minY: 162, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 436, minY: 367, maxX: 596, maxY: 525 },
    right: { minX: 669, minY: 365, maxX: 830, maxY: 525 },
    top: { minX: 552, minY: 162, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 439, minY: 370, maxX: 598, maxY: 527 },
    right: { minX: 671, minY: 367, maxX: 832, maxY: 527 },
    top: { minX: 554, minY: 167, maxX: 712, maxY: 326 },
  },
  {
    left: { minX: 444, minY: 370, maxX: 602, maxY: 526 },
    right: { minX: 674, minY: 369, maxX: 835, maxY: 528 },
    top: { minX: 559, minY: 168, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 447, minY: 371, maxX: 604, maxY: 527 },
    right: { minX: 676, minY: 370, maxX: 837, maxY: 529 },
    top: { minX: 562, minY: 170, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 604, maxY: 526 },
    right: { minX: 676, minY: 369, maxX: 836, maxY: 528 },
    top: { minX: 562, minY: 170, maxX: 718, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 371, maxX: 605, maxY: 526 },
    right: { minX: 676, minY: 369, maxX: 836, maxY: 528 },
    top: { minX: 561, minY: 171, maxX: 717, maxY: 328 },
  },
  {
    left: { minX: 448, minY: 372, maxX: 604, maxY: 526 },
    right: { minX: 675, minY: 370, maxX: 835, maxY: 528 },
    top: { minX: 561, minY: 172, maxX: 716, maxY: 329 },
  },
  {
    left: { minX: 451, minY: 373, maxX: 606, maxY: 527 },
    right: { minX: 676, minY: 371, maxX: 836, maxY: 529 },
    top: { minX: 563, minY: 175, maxX: 717, maxY: 330 },
  },
  {
    left: { minX: 450, minY: 373, maxX: 604, maxY: 526 },
    right: { minX: 675, minY: 370, maxX: 834, maxY: 527 },
    top: { minX: 561, minY: 174, maxX: 715, maxY: 330 },
  },
  {
    left: { minX: 449, minY: 371, maxX: 604, maxY: 524 },
    right: { minX: 673, minY: 368, maxX: 832, maxY: 525 },
    top: { minX: 559, minY: 173, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 449, minY: 369, maxX: 603, maxY: 522 },
    right: { minX: 673, minY: 367, maxX: 831, maxY: 523 },
    top: { minX: 559, minY: 171, maxX: 713, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 371, maxX: 604, maxY: 523 },
    right: { minX: 674, minY: 368, maxX: 832, maxY: 525 },
    top: { minX: 561, minY: 173, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 453, minY: 373, maxX: 605, maxY: 523 },
    right: { minX: 674, minY: 370, maxX: 831, maxY: 526 },
    top: { minX: 562, minY: 177, maxX: 714, maxY: 330 },
  },
  {
    left: { minX: 454, minY: 374, maxX: 606, maxY: 524 },
    right: { minX: 674, minY: 371, maxX: 831, maxY: 526 },
    top: { minX: 563, minY: 178, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 609, maxY: 522 },
    right: { minX: 677, minY: 370, maxX: 834, maxY: 525 },
    top: { minX: 565, minY: 177, maxX: 716, maxY: 331 },
  },
  {
    left: { minX: 463, minY: 374, maxX: 613, maxY: 523 },
    right: { minX: 681, minY: 371, maxX: 838, maxY: 525 },
    top: { minX: 569, minY: 179, maxX: 720, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 374, maxX: 614, maxY: 522 },
    right: { minX: 682, minY: 371, maxX: 839, maxY: 525 },
    top: { minX: 571, minY: 179, maxX: 722, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 615, maxY: 521 },
    right: { minX: 683, minY: 369, maxX: 840, maxY: 524 },
    top: { minX: 571, minY: 178, maxX: 722, maxY: 330 },
  },
  {
    left: { minX: 467, minY: 375, maxX: 616, maxY: 522 },
    right: { minX: 683, minY: 371, maxX: 840, maxY: 525 },
    top: { minX: 573, minY: 181, maxX: 723, maxY: 332 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 619, maxY: 521 },
    right: { minX: 686, minY: 371, maxX: 843, maxY: 525 },
    top: { minX: 575, minY: 181, maxX: 726, maxY: 332 },
  },
  {
    left: { minX: 472, minY: 373, maxX: 620, maxY: 520 },
    right: { minX: 687, minY: 371, maxX: 843, maxY: 525 },
    top: { minX: 577, minY: 181, maxX: 727, maxY: 331 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 620, maxY: 519 },
    right: { minX: 688, minY: 369, maxX: 844, maxY: 523 },
    top: { minX: 578, minY: 180, maxX: 727, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 617, maxY: 519 },
    right: { minX: 684, minY: 370, maxX: 839, maxY: 523 },
    top: { minX: 575, minY: 181, maxX: 723, maxY: 331 },
  },
  {
    left: { minX: 468, minY: 372, maxX: 615, maxY: 517 },
    right: { minX: 682, minY: 369, maxX: 836, maxY: 521 },
    top: { minX: 572, minY: 181, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 467, minY: 370, maxX: 614, maxY: 516 },
    right: { minX: 680, minY: 367, maxX: 834, maxY: 519 },
    top: { minX: 571, minY: 179, maxX: 719, maxY: 329 },
  },
  {
    left: { minX: 467, minY: 371, maxX: 614, maxY: 516 },
    right: { minX: 679, minY: 368, maxX: 833, maxY: 520 },
    top: { minX: 571, minY: 181, maxX: 718, maxY: 330 },
  },
  {
    left: { minX: 470, minY: 373, maxX: 615, maxY: 517 },
    right: { minX: 681, minY: 369, maxX: 834, maxY: 521 },
    top: { minX: 573, minY: 183, maxX: 720, maxY: 332 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 682, minY: 371, maxX: 836, maxY: 523 },
    top: { minX: 574, minY: 185, maxX: 721, maxY: 333 },
  },
  {
    left: { minX: 472, minY: 376, maxX: 617, maxY: 520 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 523 },
    top: { minX: 575, minY: 187, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 371, maxX: 836, maxY: 523 },
    top: { minX: 574, minY: 186, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 473, minY: 376, maxX: 617, maxY: 519 },
    right: { minX: 683, minY: 372, maxX: 835, maxY: 523 },
    top: { minX: 574, minY: 187, maxX: 720, maxY: 334 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 618, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 836, maxY: 524 },
    top: { minX: 577, minY: 188, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 618, maxY: 519 },
    right: { minX: 683, minY: 373, maxX: 835, maxY: 524 },
    top: { minX: 576, minY: 189, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 473, minY: 375, maxX: 617, maxY: 519 },
    right: { minX: 681, minY: 373, maxX: 834, maxY: 523 },
    top: { minX: 575, minY: 188, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 615, maxY: 517 },
    right: { minX: 679, minY: 371, maxX: 831, maxY: 521 },
    top: { minX: 573, minY: 187, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 470, minY: 372, maxX: 614, maxY: 514 },
    right: { minX: 678, minY: 370, maxX: 830, maxY: 520 },
    top: { minX: 572, minY: 185, maxX: 717, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 375, maxX: 614, maxY: 517 },
    right: { minX: 677, minY: 373, maxX: 829, maxY: 522 },
    top: { minX: 571, minY: 189, maxX: 716, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 614, maxY: 518 },
    right: { minX: 678, minY: 373, maxX: 829, maxY: 522 },
    top: { minX: 572, minY: 190, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 376, maxX: 614, maxY: 518 },
    right: { minX: 677, minY: 373, maxX: 828, maxY: 523 },
    top: { minX: 571, minY: 190, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 614, maxY: 518 },
    right: { minX: 679, minY: 373, maxX: 830, maxY: 523 },
    top: { minX: 573, minY: 191, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 375, maxX: 617, maxY: 517 },
    right: { minX: 681, minY: 373, maxX: 832, maxY: 522 },
    top: { minX: 575, minY: 189, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 375, maxX: 618, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 189, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 374, maxX: 619, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 835, maxY: 522 },
    top: { minX: 578, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 374, maxX: 618, maxY: 516 },
    right: { minX: 683, minY: 372, maxX: 834, maxY: 522 },
    top: { minX: 578, minY: 188, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 373, maxX: 618, maxY: 515 },
    right: { minX: 683, minY: 372, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 617, maxY: 515 },
    right: { minX: 682, minY: 371, maxX: 834, maxY: 521 },
    top: { minX: 577, minY: 187, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 616, maxY: 514 },
    right: { minX: 681, minY: 371, maxX: 832, maxY: 520 },
    top: { minX: 575, minY: 186, maxX: 720, maxY: 332 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 617, maxY: 514 },
    right: { minX: 681, minY: 371, maxX: 833, maxY: 520 },
    top: { minX: 576, minY: 185, maxX: 721, maxY: 332 },
  },
  {
    left: { minX: 474, minY: 371, maxX: 618, maxY: 514 },
    right: { minX: 683, minY: 371, maxX: 834, maxY: 520 },
    top: { minX: 577, minY: 185, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 618, maxY: 516 },
    right: { minX: 683, minY: 373, maxX: 834, maxY: 522 },
    top: { minX: 577, minY: 187, maxX: 723, maxY: 334 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 616, maxY: 516 },
    right: { minX: 681, minY: 372, maxX: 833, maxY: 522 },
    top: { minX: 577, minY: 186, maxX: 722, maxY: 333 },
  },
  {
    left: { minX: 471, minY: 370, maxX: 615, maxY: 513 },
    right: { minX: 681, minY: 370, maxX: 832, maxY: 519 },
    top: { minX: 575, minY: 183, maxX: 722, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 369, maxX: 613, maxY: 514 },
    right: { minX: 679, minY: 369, maxX: 830, maxY: 520 },
    top: { minX: 573, minY: 182, maxX: 720, maxY: 330 },
  },
  {
    left: { minX: 463, minY: 369, maxX: 609, maxY: 513 },
    right: { minX: 675, minY: 368, maxX: 826, maxY: 518 },
    top: { minX: 569, minY: 181, maxX: 715, maxY: 329 },
  },
  {
    left: { minX: 462, minY: 369, maxX: 608, maxY: 515 },
    right: { minX: 674, minY: 369, maxX: 826, maxY: 519 },
    top: { minX: 567, minY: 181, maxX: 714, maxY: 330 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 608, maxY: 516 },
    right: { minX: 674, minY: 370, maxX: 826, maxY: 520 },
    top: { minX: 567, minY: 182, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 606, maxY: 517 },
    right: { minX: 672, minY: 370, maxX: 824, maxY: 521 },
    top: { minX: 565, minY: 183, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 456, minY: 372, maxX: 604, maxY: 518 },
    right: { minX: 670, minY: 370, maxX: 822, maxY: 521 },
    top: { minX: 562, minY: 182, maxX: 710, maxY: 331 },
  },
  {
    left: { minX: 453, minY: 371, maxX: 601, maxY: 517 },
    right: { minX: 668, minY: 369, maxX: 820, maxY: 520 },
    top: { minX: 559, minY: 181, maxX: 707, maxY: 330 },
  },
  {
    left: { minX: 450, minY: 368, maxX: 599, maxY: 515 },
    right: { minX: 667, minY: 367, maxX: 818, maxY: 518 },
    top: { minX: 558, minY: 177, maxX: 706, maxY: 328 },
  },
  {
    left: { minX: 447, minY: 367, maxX: 596, maxY: 515 },
    right: { minX: 663, minY: 366, maxX: 816, maxY: 517 },
    top: { minX: 555, minY: 177, maxX: 703, maxY: 327 },
  },
  {
    left: { minX: 443, minY: 369, maxX: 593, maxY: 517 },
    right: { minX: 660, minY: 367, maxX: 812, maxY: 518 },
    top: { minX: 551, minY: 177, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 442, minY: 369, maxX: 592, maxY: 517 },
    right: { minX: 660, minY: 367, maxX: 812, maxY: 518 },
    top: { minX: 550, minY: 177, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 442, minY: 371, maxX: 592, maxY: 519 },
    right: { minX: 660, minY: 368, maxX: 812, maxY: 519 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 440, minY: 371, maxX: 591, maxY: 519 },
    right: { minX: 659, minY: 369, maxX: 812, maxY: 520 },
    top: { minX: 549, minY: 179, maxX: 698, maxY: 329 },
  },
  {
    left: { minX: 440, minY: 372, maxX: 591, maxY: 521 },
    right: { minX: 659, minY: 370, maxX: 812, maxY: 522 },
    top: { minX: 549, minY: 180, maxX: 698, maxY: 331 },
  },
  {
    left: { minX: 439, minY: 371, maxX: 591, maxY: 521 },
    right: { minX: 659, minY: 369, maxX: 812, maxY: 521 },
    top: { minX: 549, minY: 178, maxX: 699, maxY: 330 },
  },
  {
    left: { minX: 441, minY: 373, maxX: 592, maxY: 523 },
    right: { minX: 661, minY: 370, maxX: 814, maxY: 522 },
    top: { minX: 550, minY: 179, maxX: 700, maxY: 331 },
  },
  {
    left: { minX: 441, minY: 373, maxX: 593, maxY: 523 },
    right: { minX: 662, minY: 371, maxX: 815, maxY: 523 },
    top: { minX: 551, minY: 179, maxX: 701, maxY: 331 },
  },
  {
    left: { minX: 439, minY: 372, maxX: 592, maxY: 523 },
    right: { minX: 661, minY: 370, maxX: 814, maxY: 523 },
    top: { minX: 550, minY: 178, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 437, minY: 372, maxX: 591, maxY: 523 },
    right: { minX: 660, minY: 369, maxX: 814, maxY: 522 },
    top: { minX: 549, minY: 177, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 436, minY: 369, maxX: 590, maxY: 521 },
    right: { minX: 660, minY: 367, maxX: 814, maxY: 520 },
    top: { minX: 549, minY: 173, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 435, minY: 368, maxX: 589, maxY: 520 },
    right: { minX: 659, minY: 367, maxX: 813, maxY: 520 },
    top: { minX: 547, minY: 173, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 430, minY: 367, maxX: 585, maxY: 520 },
    right: { minX: 655, minY: 365, maxX: 809, maxY: 519 },
    top: { minX: 543, minY: 171, maxX: 695, maxY: 325 },
  },
  {
    left: { minX: 427, minY: 369, maxX: 582, maxY: 522 },
    right: { minX: 651, minY: 367, maxX: 805, maxY: 520 },
    top: { minX: 539, minY: 173, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 428, minY: 370, maxX: 583, maxY: 522 },
    right: { minX: 653, minY: 368, maxX: 806, maxY: 520 },
    top: { minX: 540, minY: 175, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 429, minY: 370, maxX: 584, maxY: 523 },
    right: { minX: 653, minY: 369, maxX: 806, maxY: 521 },
    top: { minX: 541, minY: 175, maxX: 693, maxY: 329 },
  },
  {
    left: { minX: 431, minY: 373, maxX: 585, maxY: 524 },
    right: { minX: 654, minY: 371, maxX: 808, maxY: 524 },
    top: { minX: 543, minY: 179, maxX: 694, maxY: 331 },
  },
  {
    left: { minX: 432, minY: 373, maxX: 586, maxY: 524 },
    right: { minX: 656, minY: 372, maxX: 808, maxY: 525 },
    top: { minX: 545, minY: 179, maxX: 696, maxY: 332 },
  },
  {
    left: { minX: 434, minY: 374, maxX: 588, maxY: 525 },
    right: { minX: 657, minY: 373, maxX: 810, maxY: 526 },
    top: { minX: 547, minY: 181, maxX: 698, maxY: 333 },
  },
  {
    left: { minX: 437, minY: 376, maxX: 590, maxY: 526 },
    right: { minX: 659, minY: 375, maxX: 811, maxY: 527 },
    top: { minX: 549, minY: 183, maxX: 700, maxY: 335 },
  },
  {
    left: { minX: 438, minY: 376, maxX: 591, maxY: 527 },
    right: { minX: 660, minY: 376, maxX: 813, maxY: 528 },
    top: { minX: 551, minY: 185, maxX: 701, maxY: 336 },
  },
  {
    left: { minX: 438, minY: 373, maxX: 591, maxY: 524 },
    right: { minX: 660, minY: 373, maxX: 813, maxY: 525 },
    top: { minX: 552, minY: 181, maxX: 702, maxY: 332 },
  },
  {
    left: { minX: 442, minY: 375, maxX: 594, maxY: 525 },
    right: { minX: 663, minY: 375, maxX: 815, maxY: 527 },
    top: { minX: 555, minY: 184, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 443, minY: 373, maxX: 595, maxY: 523 },
    right: { minX: 664, minY: 373, maxX: 816, maxY: 525 },
    top: { minX: 555, minY: 182, maxX: 706, maxY: 333 },
  },
  {
    left: { minX: 445, minY: 375, maxX: 596, maxY: 525 },
    right: { minX: 665, minY: 377, maxX: 817, maxY: 527 },
    top: { minX: 557, minY: 185, maxX: 706, maxY: 336 },
  },
  {
    left: { minX: 447, minY: 376, maxX: 598, maxY: 525 },
    right: { minX: 666, minY: 377, maxX: 817, maxY: 528 },
    top: { minX: 560, minY: 187, maxX: 708, maxY: 337 },
  },
  {
    left: { minX: 447, minY: 377, maxX: 598, maxY: 525 },
    right: { minX: 666, minY: 378, maxX: 817, maxY: 528 },
    top: { minX: 560, minY: 188, maxX: 708, maxY: 337 },
  },
  {
    left: { minX: 446, minY: 376, maxX: 596, maxY: 525 },
    right: { minX: 664, minY: 378, maxX: 815, maxY: 527 },
    top: { minX: 559, minY: 188, maxX: 706, maxY: 337 },
  },
  {
    left: { minX: 444, minY: 377, maxX: 594, maxY: 525 },
    right: { minX: 661, minY: 377, maxX: 811, maxY: 527 },
    top: { minX: 555, minY: 189, maxX: 702, maxY: 338 },
  },
  {
    left: { minX: 445, minY: 375, maxX: 594, maxY: 523 },
    right: { minX: 662, minY: 377, maxX: 812, maxY: 526 },
    top: { minX: 557, minY: 189, maxX: 703, maxY: 337 },
  },
  {
    left: { minX: 448, minY: 376, maxX: 596, maxY: 522 },
    right: { minX: 663, minY: 377, maxX: 812, maxY: 525 },
    top: { minX: 559, minY: 189, maxX: 705, maxY: 337 },
  },
  {
    left: { minX: 448, minY: 375, maxX: 596, maxY: 522 },
    right: { minX: 663, minY: 377, maxX: 811, maxY: 525 },
    top: { minX: 557, minY: 189, maxX: 703, maxY: 337 },
  },
  {
    left: { minX: 449, minY: 374, maxX: 596, maxY: 520 },
    right: { minX: 663, minY: 375, maxX: 811, maxY: 523 },
    top: { minX: 559, minY: 189, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 449, minY: 375, maxX: 596, maxY: 519 },
    right: { minX: 662, minY: 374, maxX: 810, maxY: 521 },
    top: { minX: 557, minY: 189, maxX: 702, maxY: 335 },
  },
  {
    left: { minX: 451, minY: 375, maxX: 597, maxY: 519 },
    right: { minX: 663, minY: 374, maxX: 810, maxY: 520 },
    top: { minX: 557, minY: 190, maxX: 702, maxY: 335 },
  },
  {
    left: { minX: 453, minY: 375, maxX: 598, maxY: 519 },
    right: { minX: 663, minY: 375, maxX: 810, maxY: 521 },
    top: { minX: 559, minY: 192, maxX: 702, maxY: 336 },
  },
  {
    left: { minX: 455, minY: 376, maxX: 598, maxY: 519 },
    right: { minX: 664, minY: 375, maxX: 810, maxY: 521 },
    top: { minX: 559, minY: 193, maxX: 702, maxY: 337 },
  },
  {
    left: { minX: 457, minY: 377, maxX: 600, maxY: 519 },
    right: { minX: 665, minY: 375, maxX: 812, maxY: 520 },
    top: { minX: 561, minY: 194, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 458, minY: 378, maxX: 601, maxY: 519 },
    right: { minX: 665, minY: 376, maxX: 811, maxY: 521 },
    top: { minX: 561, minY: 195, maxX: 703, maxY: 338 },
  },
  {
    left: { minX: 459, minY: 374, maxX: 602, maxY: 515 },
    right: { minX: 666, minY: 373, maxX: 812, maxY: 517 },
    top: { minX: 562, minY: 192, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 604, maxY: 514 },
    right: { minX: 668, minY: 372, maxX: 814, maxY: 516 },
    top: { minX: 565, minY: 191, maxX: 706, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 372, maxX: 604, maxY: 512 },
    right: { minX: 668, minY: 371, maxX: 813, maxY: 515 },
    top: { minX: 565, minY: 191, maxX: 706, maxY: 333 },
  },
  {
    left: { minX: 462, minY: 372, maxX: 603, maxY: 512 },
    right: { minX: 667, minY: 371, maxX: 811, maxY: 515 },
    top: { minX: 564, minY: 192, maxX: 705, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 374, maxX: 603, maxY: 513 },
    right: { minX: 666, minY: 373, maxX: 810, maxY: 515 },
    top: { minX: 563, minY: 194, maxX: 704, maxY: 335 },
  },
  {
    left: { minX: 464, minY: 376, maxX: 604, maxY: 515 },
    right: { minX: 667, minY: 374, maxX: 811, maxY: 517 },
    top: { minX: 565, minY: 197, maxX: 704, maxY: 337 },
  },
  {
    left: { minX: 469, minY: 379, maxX: 608, maxY: 517 },
    right: { minX: 671, minY: 377, maxX: 815, maxY: 519 },
    top: { minX: 569, minY: 201, maxX: 708, maxY: 341 },
  },
  {
    left: { minX: 471, minY: 379, maxX: 610, maxY: 517 },
    right: { minX: 673, minY: 378, maxX: 816, maxY: 520 },
    top: { minX: 571, minY: 201, maxX: 710, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 610, maxY: 516 },
    right: { minX: 673, minY: 377, maxX: 817, maxY: 519 },
    top: { minX: 571, minY: 200, maxX: 710, maxY: 340 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 608, maxY: 511 },
    right: { minX: 671, minY: 372, maxX: 814, maxY: 514 },
    top: { minX: 569, minY: 195, maxX: 708, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 608, maxY: 512 },
    right: { minX: 670, minY: 373, maxX: 813, maxY: 515 },
    top: { minX: 569, minY: 197, maxX: 707, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 375, maxX: 608, maxY: 512 },
    right: { minX: 671, minY: 373, maxX: 813, maxY: 514 },
    top: { minX: 569, minY: 198, maxX: 708, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 609, maxY: 513 },
    right: { minX: 671, minY: 375, maxX: 813, maxY: 515 },
    top: { minX: 570, minY: 200, maxX: 708, maxY: 339 },
  },
  {
    left: { minX: 473, minY: 380, maxX: 609, maxY: 515 },
    right: { minX: 671, minY: 377, maxX: 812, maxY: 518 },
    top: { minX: 571, minY: 204, maxX: 707, maxY: 342 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 609, maxY: 514 },
    right: { minX: 670, minY: 377, maxX: 812, maxY: 517 },
    top: { minX: 571, minY: 203, maxX: 706, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 379, maxX: 608, maxY: 514 },
    right: { minX: 669, minY: 377, maxX: 810, maxY: 517 },
    top: { minX: 569, minY: 204, maxX: 705, maxY: 341 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 607, maxY: 512 },
    right: { minX: 669, minY: 376, maxX: 809, maxY: 515 },
    top: { minX: 569, minY: 203, maxX: 705, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 378, maxX: 607, maxY: 512 },
    right: { minX: 668, minY: 375, maxX: 808, maxY: 514 },
    top: { minX: 568, minY: 203, maxX: 704, maxY: 340 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 606, maxY: 511 },
    right: { minX: 667, minY: 375, maxX: 807, maxY: 514 },
    top: { minX: 567, minY: 203, maxX: 703, maxY: 340 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 605, maxY: 510 },
    right: { minX: 665, minY: 374, maxX: 805, maxY: 512 },
    top: { minX: 565, minY: 203, maxX: 701, maxY: 339 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 604, maxY: 508 },
    right: { minX: 665, minY: 371, maxX: 804, maxY: 510 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 337 },
  },
  {
    left: { minX: 470, minY: 374, maxX: 604, maxY: 507 },
    right: { minX: 664, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 604, maxY: 506 },
    right: { minX: 664, minY: 371, maxX: 803, maxY: 509 },
    top: { minX: 565, minY: 201, maxX: 700, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 374, maxX: 604, maxY: 506 },
    right: { minX: 663, minY: 371, maxX: 802, maxY: 508 },
    top: { minX: 565, minY: 201, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 375, maxX: 603, maxY: 506 },
    right: { minX: 663, minY: 371, maxX: 800, maxY: 509 },
    top: { minX: 563, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 373, maxX: 604, maxY: 504 },
    right: { minX: 663, minY: 371, maxX: 801, maxY: 507 },
    top: { minX: 565, minY: 201, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 472, minY: 375, maxX: 604, maxY: 506 },
    right: { minX: 664, minY: 372, maxX: 801, maxY: 509 },
    top: { minX: 565, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 472, minY: 374, maxX: 604, maxY: 505 },
    right: { minX: 663, minY: 371, maxX: 801, maxY: 507 },
    top: { minX: 565, minY: 202, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 605, maxY: 503 },
    right: { minX: 664, minY: 369, maxX: 802, maxY: 506 },
    top: { minX: 566, minY: 201, maxX: 699, maxY: 336 },
  },
  {
    left: { minX: 473, minY: 373, maxX: 605, maxY: 504 },
    right: { minX: 664, minY: 370, maxX: 801, maxY: 506 },
    top: { minX: 566, minY: 202, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 474, minY: 374, maxX: 606, maxY: 504 },
    right: { minX: 664, minY: 371, maxX: 800, maxY: 506 },
    top: { minX: 566, minY: 203, maxX: 698, maxY: 337 },
  },
  {
    left: { minX: 474, minY: 373, maxX: 606, maxY: 502 },
    right: { minX: 664, minY: 369, maxX: 801, maxY: 505 },
    top: { minX: 566, minY: 201, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 606, maxY: 501 },
    right: { minX: 665, minY: 368, maxX: 801, maxY: 503 },
    top: { minX: 567, minY: 200, maxX: 700, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 606, maxY: 500 },
    right: { minX: 664, minY: 368, maxX: 800, maxY: 503 },
    top: { minX: 567, minY: 200, maxX: 699, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 371, maxX: 605, maxY: 500 },
    right: { minX: 663, minY: 369, maxX: 798, maxY: 503 },
    top: { minX: 566, minY: 202, maxX: 698, maxY: 335 },
  },
  {
    left: { minX: 476, minY: 373, maxX: 606, maxY: 501 },
    right: { minX: 663, minY: 370, maxX: 799, maxY: 505 },
    top: { minX: 567, minY: 204, maxX: 698, maxY: 336 },
  },
  {
    left: { minX: 479, minY: 375, maxX: 608, maxY: 503 },
    right: { minX: 665, minY: 372, maxX: 801, maxY: 507 },
    top: { minX: 569, minY: 207, maxX: 701, maxY: 338 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 373, maxX: 804, maxY: 508 },
    top: { minX: 575, minY: 207, maxX: 705, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 374, maxX: 613, maxY: 502 },
    right: { minX: 670, minY: 373, maxX: 805, maxY: 507 },
    top: { minX: 577, minY: 208, maxX: 706, maxY: 339 },
  },
  {
    left: { minX: 483, minY: 374, maxX: 612, maxY: 501 },
    right: { minX: 669, minY: 373, maxX: 804, maxY: 507 },
    top: { minX: 576, minY: 208, maxX: 706, maxY: 339 },
  },
  {
    left: { minX: 483, minY: 375, maxX: 611, maxY: 502 },
    right: { minX: 668, minY: 374, maxX: 802, maxY: 507 },
    top: { minX: 575, minY: 209, maxX: 704, maxY: 340 },
  },
  {
    left: { minX: 484, minY: 375, maxX: 612, maxY: 502 },
    right: { minX: 668, minY: 374, maxX: 803, maxY: 508 },
    top: { minX: 575, minY: 209, maxX: 705, maxY: 339 },
  },
  {
    left: { minX: 484, minY: 377, maxX: 612, maxY: 503 },
    right: { minX: 668, minY: 376, maxX: 803, maxY: 509 },
    top: { minX: 575, minY: 211, maxX: 704, maxY: 341 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 613, maxY: 504 },
    right: { minX: 669, minY: 377, maxX: 803, maxY: 510 },
    top: { minX: 577, minY: 213, maxX: 706, maxY: 343 },
  },
  {
    left: { minX: 486, minY: 381, maxX: 613, maxY: 507 },
    right: { minX: 669, minY: 380, maxX: 804, maxY: 513 },
    top: { minX: 577, minY: 217, maxX: 706, maxY: 346 },
  },
  {
    left: { minX: 487, minY: 382, maxX: 614, maxY: 508 },
    right: { minX: 669, minY: 381, maxX: 803, maxY: 514 },
    top: { minX: 577, minY: 218, maxX: 706, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 614, maxY: 507 },
    right: { minX: 670, minY: 381, maxX: 804, maxY: 513 },
    top: { minX: 578, minY: 218, maxX: 706, maxY: 347 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 613, maxY: 506 },
    right: { minX: 669, minY: 380, maxX: 802, maxY: 512 },
    top: { minX: 577, minY: 217, maxX: 705, maxY: 346 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 612, maxY: 505 },
    right: { minX: 667, minY: 379, maxX: 800, maxY: 511 },
    top: { minX: 575, minY: 217, maxX: 703, maxY: 345 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 610, maxY: 506 },
    right: { minX: 665, minY: 380, maxX: 798, maxY: 512 },
    top: { minX: 574, minY: 217, maxX: 701, maxY: 346 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 609, maxY: 506 },
    right: { minX: 665, minY: 381, maxX: 797, maxY: 512 },
    top: { minX: 573, minY: 219, maxX: 700, maxY: 347 },
  },
  {
    left: { minX: 484, minY: 382, maxX: 610, maxY: 507 },
    right: { minX: 665, minY: 381, maxX: 798, maxY: 513 },
    top: { minX: 573, minY: 219, maxX: 701, maxY: 347 },
  },
  {
    left: { minX: 486, minY: 381, maxX: 612, maxY: 506 },
    right: { minX: 667, minY: 381, maxX: 799, maxY: 513 },
    top: { minX: 576, minY: 219, maxX: 703, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 613, maxY: 506 },
    right: { minX: 667, minY: 381, maxX: 800, maxY: 513 },
    top: { minX: 577, minY: 219, maxX: 705, maxY: 347 },
  },
  {
    left: { minX: 486, minY: 378, maxX: 612, maxY: 503 },
    right: { minX: 667, minY: 379, maxX: 799, maxY: 511 },
    top: { minX: 577, minY: 217, maxX: 704, maxY: 344 },
  },
  {
    left: { minX: 483, minY: 382, maxX: 608, maxY: 506 },
    right: { minX: 663, minY: 381, maxX: 794, maxY: 512 },
    top: { minX: 573, minY: 221, maxX: 699, maxY: 347 },
  },
  {
    left: { minX: 483, minY: 383, maxX: 608, maxY: 507 },
    right: { minX: 663, minY: 383, maxX: 795, maxY: 513 },
    top: { minX: 573, minY: 221, maxX: 699, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 383, maxX: 610, maxY: 507 },
    right: { minX: 665, minY: 383, maxX: 797, maxY: 513 },
    top: { minX: 575, minY: 221, maxX: 701, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 380, maxX: 610, maxY: 504 },
    right: { minX: 665, minY: 380, maxX: 797, maxY: 511 },
    top: { minX: 575, minY: 219, maxX: 702, maxY: 346 },
  },
  {
    left: { minX: 484, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 664, minY: 379, maxX: 796, maxY: 510 },
    top: { minX: 575, minY: 217, maxX: 701, maxY: 345 },
  },
  {
    left: { minX: 483, minY: 379, maxX: 609, maxY: 503 },
    right: { minX: 664, minY: 379, maxX: 796, maxY: 510 },
    top: { minX: 574, minY: 217, maxX: 701, maxY: 344 },
  },
  {
    left: { minX: 483, minY: 379, maxX: 609, maxY: 504 },
    right: { minX: 664, minY: 380, maxX: 796, maxY: 511 },
    top: { minX: 575, minY: 219, maxX: 701, maxY: 346 },
  },
  {
    left: { minX: 486, minY: 380, maxX: 611, maxY: 504 },
    right: { minX: 667, minY: 381, maxX: 798, maxY: 512 },
    top: { minX: 577, minY: 219, maxX: 704, maxY: 347 },
  },
  {
    left: { minX: 487, minY: 381, maxX: 612, maxY: 505 },
    right: { minX: 667, minY: 383, maxX: 798, maxY: 514 },
    top: { minX: 578, minY: 221, maxX: 704, maxY: 348 },
  },
  {
    left: { minX: 483, minY: 381, maxX: 608, maxY: 505 },
    right: { minX: 664, minY: 383, maxX: 795, maxY: 513 },
    top: { minX: 575, minY: 220, maxX: 701, maxY: 348 },
  },
  {
    left: { minX: 485, minY: 379, maxX: 610, maxY: 504 },
    right: { minX: 666, minY: 380, maxX: 798, maxY: 511 },
    top: { minX: 577, minY: 217, maxX: 704, maxY: 345 },
  },
  {
    left: { minX: 485, minY: 379, maxX: 610, maxY: 504 },
    right: { minX: 666, minY: 380, maxX: 798, maxY: 511 },
    top: { minX: 576, minY: 217, maxX: 704, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 378, maxX: 613, maxY: 503 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 217, maxX: 706, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 377, maxX: 614, maxY: 503 },
    right: { minX: 670, minY: 379, maxX: 802, maxY: 511 },
    top: { minX: 581, minY: 216, maxX: 708, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 216, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 377, maxX: 612, maxY: 503 },
    right: { minX: 669, minY: 379, maxX: 801, maxY: 511 },
    top: { minX: 579, minY: 215, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 485, minY: 378, maxX: 612, maxY: 504 },
    right: { minX: 669, minY: 379, maxX: 802, maxY: 511 },
    top: { minX: 578, minY: 215, maxX: 706, maxY: 344 },
  },
  {
    left: { minX: 483, minY: 378, maxX: 610, maxY: 505 },
    right: { minX: 667, minY: 379, maxX: 800, maxY: 511 },
    top: { minX: 576, minY: 215, maxX: 704, maxY: 344 },
  },
  {
    left: { minX: 478, minY: 374, maxX: 607, maxY: 502 },
    right: { minX: 664, minY: 375, maxX: 797, maxY: 508 },
    top: { minX: 572, minY: 210, maxX: 701, maxY: 340 },
  },
  {
    left: { minX: 476, minY: 376, maxX: 605, maxY: 503 },
    right: { minX: 662, minY: 377, maxX: 796, maxY: 509 },
    top: { minX: 570, minY: 211, maxX: 699, maxY: 342 },
  },
  {
    left: { minX: 473, minY: 377, maxX: 602, maxY: 504 },
    right: { minX: 660, minY: 377, maxX: 793, maxY: 509 },
    top: { minX: 567, minY: 212, maxX: 697, maxY: 342 },
  },
  {
    left: { minX: 472, minY: 377, maxX: 601, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 509 },
    top: { minX: 566, minY: 212, maxX: 695, maxY: 342 },
  },
  {
    left: { minX: 470, minY: 378, maxX: 600, maxY: 506 },
    right: { minX: 657, minY: 378, maxX: 790, maxY: 511 },
    top: { minX: 564, minY: 213, maxX: 694, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 506 },
    right: { minX: 658, minY: 378, maxX: 791, maxY: 511 },
    top: { minX: 565, minY: 213, maxX: 694, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 600, maxY: 506 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 211, maxX: 696, maxY: 342 },
  },
  {
    left: { minX: 469, minY: 376, maxX: 600, maxY: 505 },
    right: { minX: 659, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 565, minY: 211, maxX: 696, maxY: 342 },
  },
  {
    left: { minX: 468, minY: 376, maxX: 599, maxY: 506 },
    right: { minX: 658, minY: 377, maxX: 792, maxY: 510 },
    top: { minX: 564, minY: 209, maxX: 694, maxY: 341 },
  },
  {
    left: { minX: 467, minY: 376, maxX: 598, maxY: 506 },
    right: { minX: 657, minY: 376, maxX: 792, maxY: 509 },
    top: { minX: 563, minY: 209, maxX: 694, maxY: 340 },
  },
  {
    left: { minX: 465, minY: 376, maxX: 597, maxY: 507 },
    right: { minX: 656, minY: 376, maxX: 791, maxY: 510 },
    top: { minX: 561, minY: 208, maxX: 692, maxY: 340 },
  },
  {
    left: { minX: 466, minY: 377, maxX: 599, maxY: 508 },
    right: { minX: 659, minY: 377, maxX: 793, maxY: 511 },
    top: { minX: 563, minY: 209, maxX: 695, maxY: 341 },
  },
  {
    left: { minX: 467, minY: 375, maxX: 599, maxY: 507 },
    right: { minX: 659, minY: 375, maxX: 795, maxY: 510 },
    top: { minX: 564, minY: 207, maxX: 696, maxY: 340 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 599, maxY: 505 },
    right: { minX: 659, minY: 373, maxX: 794, maxY: 509 },
    top: { minX: 563, minY: 204, maxX: 696, maxY: 338 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 596, maxY: 504 },
    right: { minX: 657, minY: 371, maxX: 792, maxY: 507 },
    top: { minX: 560, minY: 201, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 595, maxY: 504 },
    right: { minX: 656, minY: 371, maxX: 792, maxY: 506 },
    top: { minX: 559, minY: 200, maxX: 692, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 369, maxX: 595, maxY: 502 },
    right: { minX: 655, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 559, minY: 198, maxX: 693, maxY: 333 },
  },
  {
    left: { minX: 461, minY: 369, maxX: 595, maxY: 502 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 560, minY: 198, maxX: 694, maxY: 333 },
  },
  {
    left: { minX: 460, minY: 368, maxX: 595, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 505 },
    top: { minX: 560, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 459, minY: 367, maxX: 594, maxY: 501 },
    right: { minX: 655, minY: 368, maxX: 792, maxY: 503 },
    top: { minX: 559, minY: 197, maxX: 693, maxY: 332 },
  },
  {
    left: { minX: 461, minY: 368, maxX: 596, maxY: 501 },
    right: { minX: 656, minY: 369, maxX: 792, maxY: 504 },
    top: { minX: 560, minY: 197, maxX: 694, maxY: 332 },
  },
  {
    left: { minX: 459, minY: 368, maxX: 594, maxY: 502 },
    right: { minX: 655, minY: 369, maxX: 791, maxY: 505 },
    top: { minX: 559, minY: 198, maxX: 693, maxY: 333 },
  },
  {
    left: { minX: 458, minY: 369, maxX: 593, maxY: 502 },
    right: { minX: 653, minY: 370, maxX: 790, maxY: 505 },
    top: { minX: 557, minY: 198, maxX: 692, maxY: 333 },
  },
  {
    left: { minX: 457, minY: 368, maxX: 592, maxY: 501 },
    right: { minX: 653, minY: 369, maxX: 789, maxY: 505 },
    top: { minX: 557, minY: 197, maxX: 692, maxY: 332 },
  },
  {
    left: { minX: 456, minY: 369, maxX: 591, maxY: 502 },
    right: { minX: 652, minY: 370, maxX: 788, maxY: 505 },
    top: { minX: 555, minY: 198, maxX: 690, maxY: 333 },
  },
  {
    left: { minX: 454, minY: 371, maxX: 589, maxY: 504 },
    right: { minX: 650, minY: 372, maxX: 785, maxY: 507 },
    top: { minX: 554, minY: 201, maxX: 688, maxY: 335 },
  },
  {
    left: { minX: 454, minY: 371, maxX: 589, maxY: 504 },
    right: { minX: 650, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 554, minY: 201, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 455, minY: 372, maxX: 590, maxY: 505 },
    right: { minX: 651, minY: 373, maxX: 786, maxY: 507 },
    top: { minX: 555, minY: 201, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 455, minY: 374, maxX: 590, maxY: 507 },
    right: { minX: 650, minY: 374, maxX: 785, maxY: 509 },
    top: { minX: 554, minY: 204, maxX: 687, maxY: 338 },
  },
  {
    left: { minX: 457, minY: 380, maxX: 590, maxY: 512 },
    right: { minX: 651, minY: 379, maxX: 785, maxY: 513 },
    top: { minX: 553, minY: 211, maxX: 686, maxY: 344 },
  },
  {
    left: { minX: 456, minY: 381, maxX: 590, maxY: 513 },
    right: { minX: 650, minY: 380, maxX: 784, maxY: 514 },
    top: { minX: 553, minY: 213, maxX: 686, maxY: 345 },
  },
  {
    left: { minX: 456, minY: 383, maxX: 590, maxY: 515 },
    right: { minX: 650, minY: 381, maxX: 784, maxY: 515 },
    top: { minX: 553, minY: 214, maxX: 684, maxY: 347 },
  },
  {
    left: { minX: 458, minY: 385, maxX: 591, maxY: 517 },
    right: { minX: 651, minY: 383, maxX: 785, maxY: 517 },
    top: { minX: 554, minY: 216, maxX: 686, maxY: 348 },
  },
  {
    left: { minX: 459, minY: 385, maxX: 592, maxY: 516 },
    right: { minX: 651, minY: 383, maxX: 786, maxY: 517 },
    top: { minX: 555, minY: 216, maxX: 686, maxY: 348 },
  },
  {
    left: { minX: 460, minY: 382, maxX: 593, maxY: 514 },
    right: { minX: 653, minY: 381, maxX: 787, maxY: 515 },
    top: { minX: 556, minY: 214, maxX: 688, maxY: 346 },
  },
  {
    left: { minX: 460, minY: 381, maxX: 593, maxY: 513 },
    right: { minX: 653, minY: 379, maxX: 787, maxY: 513 },
    top: { minX: 556, minY: 213, maxX: 688, maxY: 345 },
  },
  {
    left: { minX: 459, minY: 382, maxX: 592, maxY: 514 },
    right: { minX: 652, minY: 380, maxX: 786, maxY: 514 },
    top: { minX: 555, minY: 213, maxX: 686, maxY: 346 },
  },
  {
    left: { minX: 459, minY: 379, maxX: 592, maxY: 511 },
    right: { minX: 651, minY: 378, maxX: 786, maxY: 511 },
    top: { minX: 555, minY: 211, maxX: 686, maxY: 343 },
  },
  {
    left: { minX: 459, minY: 377, maxX: 592, maxY: 508 },
    right: { minX: 651, minY: 375, maxX: 785, maxY: 509 },
    top: { minX: 555, minY: 209, maxX: 686, maxY: 341 },
  },
  {
    left: { minX: 459, minY: 376, maxX: 591, maxY: 507 },
    right: { minX: 651, minY: 375, maxX: 784, maxY: 508 },
    top: { minX: 554, minY: 208, maxX: 685, maxY: 340 },
  },
  {
    left: { minX: 458, minY: 373, maxX: 590, maxY: 502 },
    right: { minX: 649, minY: 371, maxX: 782, maxY: 503 },
    top: { minX: 552, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 371, maxX: 590, maxY: 501 },
    right: { minX: 649, minY: 370, maxX: 782, maxY: 503 },
    top: { minX: 553, minY: 205, maxX: 684, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 591, maxY: 499 },
    right: { minX: 649, minY: 369, maxX: 781, maxY: 501 },
    top: { minX: 555, minY: 204, maxX: 684, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 590, maxY: 498 },
    right: { minX: 648, minY: 369, maxX: 779, maxY: 500 },
    top: { minX: 553, minY: 205, maxX: 683, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 370, maxX: 589, maxY: 498 },
    right: { minX: 647, minY: 369, maxX: 778, maxY: 499 },
    top: { minX: 553, minY: 205, maxX: 682, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 588, maxY: 497 },
    right: { minX: 645, minY: 368, maxX: 776, maxY: 497 },
    top: { minX: 551, minY: 205, maxX: 680, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 369, maxX: 588, maxY: 496 },
    right: { minX: 645, minY: 367, maxX: 775, maxY: 497 },
    top: { minX: 551, minY: 204, maxX: 679, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 587, maxY: 496 },
    right: { minX: 645, minY: 369, maxX: 774, maxY: 497 },
    top: { minX: 551, minY: 206, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 588, maxY: 497 },
    right: { minX: 645, minY: 369, maxX: 774, maxY: 498 },
    top: { minX: 551, minY: 208, maxX: 678, maxY: 336 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 587, maxY: 496 },
    right: { minX: 643, minY: 369, maxX: 772, maxY: 497 },
    top: { minX: 551, minY: 209, maxX: 677, maxY: 336 },
  },
  {
    left: { minX: 459, minY: 371, maxX: 586, maxY: 496 },
    right: { minX: 642, minY: 369, maxX: 770, maxY: 497 },
    top: { minX: 549, minY: 209, maxX: 676, maxY: 336 },
  },
  {
    left: { minX: 463, minY: 369, maxX: 588, maxY: 494 },
    right: { minX: 645, minY: 367, maxX: 772, maxY: 495 },
    top: { minX: 552, minY: 208, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 590, maxY: 496 },
    right: { minX: 645, minY: 370, maxX: 773, maxY: 497 },
    top: { minX: 553, minY: 212, maxX: 678, maxY: 338 },
  },
  {
    left: { minX: 468, minY: 372, maxX: 593, maxY: 495 },
    right: { minX: 649, minY: 370, maxX: 776, maxY: 496 },
    top: { minX: 557, minY: 212, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 469, minY: 373, maxX: 594, maxY: 495 },
    right: { minX: 649, minY: 371, maxX: 776, maxY: 497 },
    top: { minX: 557, minY: 213, maxX: 682, maxY: 338 },
  },
  {
    left: { minX: 470, minY: 372, maxX: 593, maxY: 494 },
    right: { minX: 649, minY: 370, maxX: 774, maxY: 496 },
    top: { minX: 557, minY: 213, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 469, minY: 371, maxX: 593, maxY: 492 },
    right: { minX: 647, minY: 368, maxX: 774, maxY: 493 },
    top: { minX: 556, minY: 212, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 469, minY: 370, maxX: 592, maxY: 491 },
    right: { minX: 647, minY: 367, maxX: 772, maxY: 493 },
    top: { minX: 555, minY: 211, maxX: 679, maxY: 336 },
  },
  {
    left: { minX: 471, minY: 369, maxX: 594, maxY: 490 },
    right: { minX: 648, minY: 367, maxX: 773, maxY: 491 },
    top: { minX: 558, minY: 211, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 472, minY: 371, maxX: 594, maxY: 491 },
    right: { minX: 648, minY: 369, maxX: 772, maxY: 493 },
    top: { minX: 558, minY: 214, maxX: 680, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 370, maxX: 592, maxY: 490 },
    right: { minX: 646, minY: 368, maxX: 770, maxY: 492 },
    top: { minX: 557, minY: 214, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 471, minY: 369, maxX: 592, maxY: 488 },
    right: { minX: 645, minY: 367, maxX: 769, maxY: 490 },
    top: { minX: 556, minY: 213, maxX: 677, maxY: 335 },
  },
  {
    left: { minX: 471, minY: 366, maxX: 592, maxY: 485 },
    right: { minX: 645, minY: 363, maxX: 768, maxY: 486 },
    top: { minX: 555, minY: 209, maxX: 677, maxY: 332 },
  },
  {
    left: { minX: 469, minY: 366, maxX: 590, maxY: 484 },
    right: { minX: 643, minY: 363, maxX: 766, maxY: 485 },
    top: { minX: 553, minY: 209, maxX: 675, maxY: 332 },
  },
  {
    left: { minX: 469, minY: 366, maxX: 589, maxY: 485 },
    right: { minX: 642, minY: 363, maxX: 765, maxY: 485 },
    top: { minX: 553, minY: 211, maxX: 674, maxY: 332 },
  },
  {
    left: { minX: 471, minY: 367, maxX: 590, maxY: 485 },
    right: { minX: 643, minY: 363, maxX: 766, maxY: 486 },
    top: { minX: 553, minY: 211, maxX: 674, maxY: 333 },
  },
  {
    left: { minX: 474, minY: 367, maxX: 594, maxY: 485 },
    right: { minX: 646, minY: 364, maxX: 768, maxY: 486 },
    top: { minX: 557, minY: 213, maxX: 678, maxY: 333 },
  },
  {
    left: { minX: 478, minY: 366, maxX: 597, maxY: 484 },
    right: { minX: 649, minY: 363, maxX: 772, maxY: 485 },
    top: { minX: 561, minY: 212, maxX: 681, maxY: 333 },
  },
  {
    left: { minX: 480, minY: 363, maxX: 599, maxY: 480 },
    right: { minX: 651, minY: 361, maxX: 774, maxY: 483 },
    top: { minX: 563, minY: 209, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 483, minY: 365, maxX: 601, maxY: 482 },
    right: { minX: 653, minY: 363, maxX: 776, maxY: 485 },
    top: { minX: 565, minY: 211, maxX: 685, maxY: 332 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 606, maxY: 484 },
    right: { minX: 658, minY: 364, maxX: 780, maxY: 486 },
    top: { minX: 570, minY: 213, maxX: 690, maxY: 334 },
  },
  {
    left: { minX: 490, minY: 367, maxX: 608, maxY: 483 },
    right: { minX: 659, minY: 365, maxX: 782, maxY: 486 },
    top: { minX: 571, minY: 214, maxX: 691, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 369, maxX: 607, maxY: 485 },
    right: { minX: 658, minY: 367, maxX: 780, maxY: 487 },
    top: { minX: 571, minY: 216, maxX: 690, maxY: 336 },
  },
  {
    left: { minX: 489, minY: 368, maxX: 606, maxY: 484 },
    right: { minX: 657, minY: 366, maxX: 779, maxY: 487 },
    top: { minX: 571, minY: 216, maxX: 689, maxY: 335 },
  },
  {
    left: { minX: 488, minY: 369, maxX: 605, maxY: 485 },
    right: { minX: 656, minY: 367, maxX: 778, maxY: 487 },
    top: { minX: 570, minY: 217, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 488, minY: 368, maxX: 605, maxY: 484 },
    right: { minX: 656, minY: 365, maxX: 777, maxY: 486 },
    top: { minX: 569, minY: 217, maxX: 688, maxY: 336 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 604, maxY: 483 },
    right: { minX: 655, minY: 365, maxX: 777, maxY: 485 },
    top: { minX: 569, minY: 215, maxX: 687, maxY: 335 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 603, maxY: 482 },
    right: { minX: 654, minY: 364, maxX: 775, maxY: 484 },
    top: { minX: 567, minY: 215, maxX: 686, maxY: 334 },
  },
  {
    left: { minX: 487, minY: 367, maxX: 603, maxY: 481 },
    right: { minX: 654, minY: 364, maxX: 775, maxY: 484 },
    top: { minX: 567, minY: 215, maxX: 686, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 364, maxX: 605, maxY: 479 },
    right: { minX: 655, minY: 362, maxX: 776, maxY: 482 },
    top: { minX: 570, minY: 213, maxX: 688, maxY: 332 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 655, minY: 364, maxX: 775, maxY: 483 },
    top: { minX: 569, minY: 215, maxX: 687, maxY: 333 },
  },
  {
    left: { minX: 488, minY: 366, maxX: 604, maxY: 480 },
    right: { minX: 654, minY: 363, maxX: 774, maxY: 483 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 488, minY: 367, maxX: 604, maxY: 481 },
    right: { minX: 654, minY: 364, maxX: 774, maxY: 483 },
    top: { minX: 568, minY: 216, maxX: 685, maxY: 334 },
  },
  {
    left: { minX: 489, minY: 365, maxX: 604, maxY: 479 },
    right: { minX: 655, minY: 363, maxX: 774, maxY: 482 },
    top: { minX: 569, minY: 215, maxX: 686, maxY: 333 },
  },
  {
    left: { minX: 491, minY: 364, maxX: 606, maxY: 478 },
    right: { minX: 656, minY: 363, maxX: 776, maxY: 481 },
    top: { minX: 571, minY: 215, maxX: 688, maxY: 332 },
  },
  {
    left: { minX: 491, minY: 366, maxX: 606, maxY: 479 },
    right: { minX: 655, minY: 365, maxX: 775, maxY: 483 },
    top: { minX: 572, minY: 217, maxX: 688, maxY: 334 },
  },
  {
    left: { minX: 488, minY: 365, maxX: 603, maxY: 479 },
    right: { minX: 653, minY: 363, maxX: 772, maxY: 482 },
    top: { minX: 568, minY: 215, maxX: 684, maxY: 333 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 602, maxY: 476 },
    right: { minX: 652, minY: 361, maxX: 771, maxY: 479 },
    top: { minX: 567, minY: 213, maxX: 684, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 600, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 213, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 600, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 600, maxY: 476 },
    right: { minX: 650, minY: 361, maxX: 770, maxY: 479 },
    top: { minX: 565, minY: 212, maxX: 682, maxY: 330 },
  },
  {
    left: { minX: 483, minY: 360, maxX: 599, maxY: 474 },
    right: { minX: 649, minY: 359, maxX: 768, maxY: 478 },
    top: { minX: 565, minY: 210, maxX: 682, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 358, maxX: 600, maxY: 472 },
    right: { minX: 651, minY: 357, maxX: 771, maxY: 476 },
    top: { minX: 566, minY: 207, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 489, minY: 357, maxX: 604, maxY: 471 },
    right: { minX: 655, minY: 357, maxX: 776, maxY: 475 },
    top: { minX: 571, minY: 207, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 491, minY: 359, maxX: 607, maxY: 473 },
    right: { minX: 657, minY: 357, maxX: 778, maxY: 477 },
    top: { minX: 573, minY: 207, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 493, minY: 360, maxX: 609, maxY: 474 },
    right: { minX: 660, minY: 359, maxX: 781, maxY: 479 },
    top: { minX: 576, minY: 209, maxX: 693, maxY: 328 },
  },
  {
    left: { minX: 495, minY: 359, maxX: 611, maxY: 473 },
    right: { minX: 662, minY: 359, maxX: 782, maxY: 478 },
    top: { minX: 577, minY: 208, maxX: 695, maxY: 327 },
  },
  {
    left: { minX: 493, minY: 358, maxX: 610, maxY: 473 },
    right: { minX: 661, minY: 358, maxX: 782, maxY: 477 },
    top: { minX: 576, minY: 207, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 491, minY: 356, maxX: 608, maxY: 471 },
    right: { minX: 660, minY: 356, maxX: 781, maxY: 476 },
    top: { minX: 575, minY: 205, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 606, maxY: 470 },
    right: { minX: 659, minY: 354, maxX: 780, maxY: 474 },
    top: { minX: 573, minY: 202, maxX: 692, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 352, maxX: 606, maxY: 468 },
    right: { minX: 658, minY: 352, maxX: 780, maxY: 472 },
    top: { minX: 572, minY: 199, maxX: 692, maxY: 320 },
  },
  {
    left: { minX: 492, minY: 351, maxX: 610, maxY: 468 },
    right: { minX: 662, minY: 351, maxX: 784, maxY: 471 },
    top: { minX: 576, minY: 197, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 495, minY: 357, maxX: 613, maxY: 473 },
    right: { minX: 665, minY: 356, maxX: 788, maxY: 477 },
    top: { minX: 579, minY: 203, maxX: 698, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 359, maxX: 612, maxY: 475 },
    right: { minX: 665, minY: 358, maxX: 788, maxY: 479 },
    top: { minX: 579, minY: 205, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 492, minY: 357, maxX: 611, maxY: 474 },
    right: { minX: 664, minY: 356, maxX: 786, maxY: 477 },
    top: { minX: 577, minY: 202, maxX: 697, maxY: 324 },
  },
  {
    left: { minX: 489, minY: 355, maxX: 608, maxY: 472 },
    right: { minX: 661, minY: 353, maxX: 784, maxY: 475 },
    top: { minX: 573, minY: 200, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 606, maxY: 472 },
    right: { minX: 660, minY: 353, maxX: 783, maxY: 475 },
    top: { minX: 573, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 484, minY: 352, maxX: 604, maxY: 470 },
    right: { minX: 658, minY: 351, maxX: 781, maxY: 473 },
    top: { minX: 570, minY: 196, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 478, minY: 351, maxX: 598, maxY: 470 },
    right: { minX: 653, minY: 351, maxX: 776, maxY: 472 },
    top: { minX: 564, minY: 195, maxX: 686, maxY: 318 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 595, maxY: 470 },
    right: { minX: 649, minY: 350, maxX: 772, maxY: 472 },
    top: { minX: 561, minY: 194, maxX: 683, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 349, maxX: 593, maxY: 468 },
    right: { minX: 647, minY: 348, maxX: 771, maxY: 470 },
    top: { minX: 558, minY: 191, maxX: 681, maxY: 315 },
  },
  {
    left: { minX: 471, minY: 349, maxX: 593, maxY: 468 },
    right: { minX: 647, minY: 347, maxX: 771, maxY: 470 },
    top: { minX: 557, minY: 191, maxX: 680, maxY: 315 },
  },
  {
    left: { minX: 474, minY: 350, maxX: 596, maxY: 470 },
    right: { minX: 651, minY: 349, maxX: 774, maxY: 472 },
    top: { minX: 561, minY: 193, maxX: 684, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 598, maxY: 470 },
    right: { minX: 653, minY: 349, maxX: 776, maxY: 472 },
    top: { minX: 563, minY: 192, maxX: 686, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 596, maxY: 471 },
    right: { minX: 651, minY: 349, maxX: 775, maxY: 472 },
    top: { minX: 561, minY: 192, maxX: 684, maxY: 317 },
  },
  {
    left: { minX: 470, minY: 352, maxX: 593, maxY: 473 },
    right: { minX: 648, minY: 350, maxX: 772, maxY: 473 },
    top: { minX: 557, minY: 193, maxX: 681, maxY: 318 },
  },
  {
    left: { minX: 468, minY: 355, maxX: 592, maxY: 476 },
    right: { minX: 647, minY: 352, maxX: 770, maxY: 475 },
    top: { minX: 555, minY: 196, maxX: 678, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 592, maxY: 476 },
    right: { minX: 648, minY: 353, maxX: 772, maxY: 476 },
    top: { minX: 556, minY: 196, maxX: 680, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 593, maxY: 476 },
    right: { minX: 649, minY: 353, maxX: 773, maxY: 476 },
    top: { minX: 557, minY: 195, maxX: 681, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 354, maxX: 589, maxY: 477 },
    right: { minX: 645, minY: 352, maxX: 770, maxY: 476 },
    top: { minX: 553, minY: 194, maxX: 678, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 355, maxX: 589, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 771, maxY: 477 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 321 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 590, maxY: 479 },
    right: { minX: 646, minY: 354, maxX: 771, maxY: 478 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 357, maxX: 591, maxY: 481 },
    right: { minX: 647, minY: 355, maxX: 772, maxY: 480 },
    top: { minX: 555, minY: 197, maxX: 679, maxY: 323 },
  },
  {
    left: { minX: 462, minY: 356, maxX: 588, maxY: 480 },
    right: { minX: 645, minY: 355, maxX: 770, maxY: 479 },
    top: { minX: 553, minY: 195, maxX: 678, maxY: 322 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 586, maxY: 479 },
    right: { minX: 643, minY: 354, maxX: 768, maxY: 479 },
    top: { minX: 550, minY: 193, maxX: 676, maxY: 321 },
  },
  {
    left: { minX: 458, minY: 353, maxX: 586, maxY: 477 },
    right: { minX: 643, minY: 352, maxX: 769, maxY: 477 },
    top: { minX: 550, minY: 191, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 459, minY: 351, maxX: 586, maxY: 477 },
    right: { minX: 644, minY: 351, maxX: 770, maxY: 476 },
    top: { minX: 551, minY: 189, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 587, maxY: 476 },
    right: { minX: 645, minY: 350, maxX: 771, maxY: 476 },
    top: { minX: 552, minY: 189, maxX: 679, maxY: 317 },
  },
  {
    left: { minX: 461, minY: 352, maxX: 588, maxY: 477 },
    right: { minX: 645, minY: 352, maxX: 772, maxY: 477 },
    top: { minX: 553, minY: 190, maxX: 680, maxY: 318 },
  },
  {
    left: { minX: 462, minY: 353, maxX: 588, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 772, maxY: 478 },
    top: { minX: 554, minY: 191, maxX: 680, maxY: 319 },
  },
  {
    left: { minX: 462, minY: 354, maxX: 588, maxY: 479 },
    right: { minX: 645, minY: 354, maxX: 772, maxY: 479 },
    top: { minX: 554, minY: 193, maxX: 680, maxY: 320 },
  },
  {
    left: { minX: 461, minY: 355, maxX: 588, maxY: 479 },
    right: { minX: 645, minY: 355, maxX: 771, maxY: 479 },
    top: { minX: 553, minY: 194, maxX: 679, maxY: 321 },
  },
  {
    left: { minX: 463, minY: 356, maxX: 590, maxY: 481 },
    right: { minX: 647, minY: 355, maxX: 773, maxY: 480 },
    top: { minX: 555, minY: 195, maxX: 681, maxY: 322 },
  },
  {
    left: { minX: 467, minY: 358, maxX: 593, maxY: 482 },
    right: { minX: 649, minY: 358, maxX: 775, maxY: 483 },
    top: { minX: 558, minY: 197, maxX: 683, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 361, maxX: 595, maxY: 485 },
    right: { minX: 651, minY: 360, maxX: 777, maxY: 484 },
    top: { minX: 560, minY: 201, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 476, minY: 364, maxX: 601, maxY: 487 },
    right: { minX: 657, minY: 361, maxX: 783, maxY: 486 },
    top: { minX: 565, minY: 204, maxX: 690, maxY: 329 },
  },
  {
    left: { minX: 478, minY: 363, maxX: 602, maxY: 486 },
    right: { minX: 659, minY: 361, maxX: 784, maxY: 486 },
    top: { minX: 567, minY: 204, maxX: 692, maxY: 329 },
  },
  {
    left: { minX: 481, minY: 363, maxX: 605, maxY: 485 },
    right: { minX: 661, minY: 360, maxX: 786, maxY: 485 },
    top: { minX: 569, minY: 203, maxX: 694, maxY: 328 },
  },
  {
    left: { minX: 483, minY: 362, maxX: 607, maxY: 484 },
    right: { minX: 663, minY: 360, maxX: 788, maxY: 484 },
    top: { minX: 571, minY: 203, maxX: 696, maxY: 328 },
  },
  {
    left: { minX: 483, minY: 361, maxX: 606, maxY: 483 },
    right: { minX: 662, minY: 359, maxX: 787, maxY: 483 },
    top: { minX: 571, minY: 202, maxX: 694, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 358, maxX: 606, maxY: 480 },
    right: { minX: 661, minY: 357, maxX: 786, maxY: 480 },
    top: { minX: 571, minY: 199, maxX: 694, maxY: 325 },
  },
  {
    left: { minX: 481, minY: 355, maxX: 605, maxY: 477 },
    right: { minX: 660, minY: 354, maxX: 785, maxY: 477 },
    top: { minX: 569, minY: 197, maxX: 693, maxY: 322 },
  },
  {
    left: { minX: 481, minY: 353, maxX: 604, maxY: 474 },
    right: { minX: 660, minY: 351, maxX: 784, maxY: 474 },
    top: { minX: 569, minY: 194, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 483, minY: 351, maxX: 605, maxY: 473 },
    right: { minX: 661, minY: 350, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 193, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 483, minY: 353, maxX: 605, maxY: 473 },
    right: { minX: 661, minY: 351, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 195, maxX: 693, maxY: 319 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 606, maxY: 473 },
    right: { minX: 661, minY: 351, maxX: 784, maxY: 473 },
    top: { minX: 571, minY: 195, maxX: 694, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 607, maxY: 473 },
    right: { minX: 662, minY: 352, maxX: 785, maxY: 473 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 608, maxY: 472 },
    right: { minX: 663, minY: 351, maxX: 786, maxY: 473 },
    top: { minX: 575, minY: 196, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 351, maxX: 784, maxY: 472 },
    top: { minX: 574, minY: 196, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 352, maxX: 784, maxY: 473 },
    top: { minX: 574, minY: 197, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 472 },
    right: { minX: 662, minY: 353, maxX: 784, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 471 },
    right: { minX: 662, minY: 353, maxX: 783, maxY: 473 },
    top: { minX: 575, minY: 199, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 608, maxY: 470 },
    right: { minX: 663, minY: 352, maxX: 784, maxY: 472 },
    top: { minX: 575, minY: 199, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 353, maxX: 610, maxY: 470 },
    right: { minX: 664, minY: 353, maxX: 785, maxY: 472 },
    top: { minX: 577, minY: 199, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 612, maxY: 469 },
    right: { minX: 666, minY: 351, maxX: 788, maxY: 471 },
    top: { minX: 579, minY: 198, maxX: 699, maxY: 319 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 614, maxY: 471 },
    right: { minX: 667, minY: 353, maxX: 789, maxY: 473 },
    top: { minX: 581, minY: 201, maxX: 701, maxY: 322 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 613, maxY: 471 },
    right: { minX: 667, minY: 353, maxX: 788, maxY: 473 },
    top: { minX: 580, minY: 200, maxX: 700, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 615, maxY: 470 },
    right: { minX: 669, minY: 352, maxX: 790, maxY: 472 },
    top: { minX: 582, minY: 199, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 618, maxY: 469 },
    right: { minX: 671, minY: 353, maxX: 793, maxY: 473 },
    top: { minX: 585, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 498, minY: 351, maxX: 617, maxY: 469 },
    right: { minX: 671, minY: 352, maxX: 793, maxY: 472 },
    top: { minX: 585, minY: 198, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 353, maxX: 794, maxY: 473 },
    top: { minX: 586, minY: 199, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 351, maxX: 618, maxY: 469 },
    right: { minX: 672, minY: 352, maxX: 794, maxY: 472 },
    top: { minX: 587, minY: 198, maxX: 707, maxY: 319 },
  },
  {
    left: { minX: 500, minY: 351, maxX: 619, maxY: 468 },
    right: { minX: 673, minY: 352, maxX: 795, maxY: 472 },
    top: { minX: 587, minY: 197, maxX: 708, maxY: 319 },
  },
  {
    left: { minX: 501, minY: 352, maxX: 620, maxY: 469 },
    right: { minX: 674, minY: 353, maxX: 796, maxY: 473 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 353, maxX: 623, maxY: 470 },
    right: { minX: 677, minY: 354, maxX: 800, maxY: 474 },
    top: { minX: 591, minY: 199, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 354, maxX: 802, maxY: 475 },
    top: { minX: 593, minY: 199, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 352, maxX: 624, maxY: 470 },
    right: { minX: 679, minY: 353, maxX: 802, maxY: 474 },
    top: { minX: 593, minY: 198, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 350, maxX: 624, maxY: 469 },
    right: { minX: 679, minY: 352, maxX: 802, maxY: 473 },
    top: { minX: 593, minY: 196, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 503, minY: 352, maxX: 624, maxY: 471 },
    right: { minX: 679, minY: 353, maxX: 802, maxY: 475 },
    top: { minX: 592, minY: 197, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 626, maxY: 472 },
    right: { minX: 681, minY: 353, maxX: 804, maxY: 475 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 321 },
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
    left: { minX: 507, minY: 353, maxX: 628, maxY: 473 },
    right: { minX: 684, minY: 354, maxX: 808, maxY: 476 },
    top: { minX: 597, minY: 197, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 627, maxY: 473 },
    right: { minX: 683, minY: 353, maxX: 806, maxY: 475 },
    top: { minX: 595, minY: 197, maxX: 717, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 354, maxX: 626, maxY: 474 },
    right: { minX: 682, minY: 353, maxX: 806, maxY: 476 },
    top: { minX: 594, minY: 197, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 629, maxY: 476 },
    right: { minX: 685, minY: 355, maxX: 809, maxY: 477 },
    top: { minX: 596, minY: 198, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 629, maxY: 475 },
    right: { minX: 685, minY: 353, maxX: 810, maxY: 476 },
    top: { minX: 596, minY: 196, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 354, maxX: 630, maxY: 476 },
    right: { minX: 686, minY: 353, maxX: 810, maxY: 475 },
    top: { minX: 596, minY: 195, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 507, minY: 356, maxX: 629, maxY: 478 },
    right: { minX: 685, minY: 354, maxX: 810, maxY: 477 },
    top: { minX: 595, minY: 197, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 506, minY: 356, maxX: 629, maxY: 478 },
    right: { minX: 685, minY: 353, maxX: 810, maxY: 477 },
    top: { minX: 594, minY: 197, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 625, maxY: 478 },
    right: { minX: 681, minY: 353, maxX: 807, maxY: 477 },
    top: { minX: 591, minY: 196, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 500, minY: 355, maxX: 624, maxY: 477 },
    right: { minX: 680, minY: 353, maxX: 805, maxY: 476 },
    top: { minX: 589, minY: 195, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 499, minY: 354, maxX: 623, maxY: 477 },
    right: { minX: 679, minY: 352, maxX: 804, maxY: 475 },
    top: { minX: 588, minY: 195, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 499, minY: 355, maxX: 622, maxY: 478 },
    right: { minX: 679, minY: 353, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 196, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 478 },
    right: { minX: 679, minY: 354, maxX: 804, maxY: 477 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 622, maxY: 479 },
    right: { minX: 679, minY: 355, maxX: 804, maxY: 478 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 358, maxX: 623, maxY: 480 },
    right: { minX: 679, minY: 356, maxX: 804, maxY: 479 },
    top: { minX: 589, minY: 198, maxX: 712, maxY: 324 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 480 },
    right: { minX: 679, minY: 355, maxX: 805, maxY: 478 },
    top: { minX: 588, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 623, maxY: 480 },
    right: { minX: 679, minY: 356, maxX: 804, maxY: 479 },
    top: { minX: 589, minY: 197, maxX: 712, maxY: 323 },
  },
  {
    left: { minX: 496, minY: 357, maxX: 620, maxY: 480 },
    right: { minX: 677, minY: 355, maxX: 802, maxY: 479 },
    top: { minX: 585, minY: 197, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 495, minY: 356, maxX: 620, maxY: 479 },
    right: { minX: 677, minY: 354, maxX: 802, maxY: 477 },
    top: { minX: 585, minY: 196, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 619, maxY: 478 },
    right: { minX: 676, minY: 353, maxX: 801, maxY: 477 },
    top: { minX: 585, minY: 195, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 496, minY: 358, maxX: 620, maxY: 482 },
    right: { minX: 677, minY: 356, maxX: 802, maxY: 480 },
    top: { minX: 586, minY: 198, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 498, minY: 360, maxX: 622, maxY: 483 },
    right: { minX: 679, minY: 357, maxX: 805, maxY: 481 },
    top: { minX: 587, minY: 200, maxX: 712, maxY: 325 },
  },
  {
    left: { minX: 500, minY: 361, maxX: 625, maxY: 485 },
    right: { minX: 681, minY: 359, maxX: 808, maxY: 483 },
    top: { minX: 590, minY: 201, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 503, minY: 362, maxX: 627, maxY: 486 },
    right: { minX: 684, minY: 361, maxX: 810, maxY: 485 },
    top: { minX: 593, minY: 202, maxX: 717, maxY: 328 },
  },
  {
    left: { minX: 501, minY: 362, maxX: 626, maxY: 486 },
    right: { minX: 683, minY: 360, maxX: 809, maxY: 484 },
    top: { minX: 591, minY: 201, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 499, minY: 363, maxX: 624, maxY: 487 },
    right: { minX: 681, minY: 361, maxX: 806, maxY: 485 },
    top: { minX: 589, minY: 203, maxX: 714, maxY: 328 },
  },
  {
    left: { minX: 497, minY: 365, maxX: 622, maxY: 489 },
    right: { minX: 679, minY: 363, maxX: 805, maxY: 487 },
    top: { minX: 587, minY: 204, maxX: 712, maxY: 330 },
  },
  {
    left: { minX: 497, minY: 364, maxX: 622, maxY: 488 },
    right: { minX: 679, minY: 362, maxX: 805, maxY: 486 },
    top: { minX: 587, minY: 203, maxX: 712, maxY: 329 },
  },
  {
    left: { minX: 491, minY: 361, maxX: 617, maxY: 486 },
    right: { minX: 675, minY: 360, maxX: 801, maxY: 484 },
    top: { minX: 583, minY: 201, maxX: 708, maxY: 327 },
  },
  {
    left: { minX: 487, minY: 361, maxX: 613, maxY: 486 },
    right: { minX: 670, minY: 358, maxX: 796, maxY: 483 },
    top: { minX: 577, minY: 199, maxX: 703, maxY: 325 },
  },
  {
    left: { minX: 479, minY: 358, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 355, maxX: 790, maxY: 480 },
    top: { minX: 571, minY: 195, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 478, minY: 358, maxX: 605, maxY: 484 },
    right: { minX: 663, minY: 355, maxX: 788, maxY: 480 },
    top: { minX: 569, minY: 195, maxX: 695, maxY: 323 },
  },
  {
    left: { minX: 477, minY: 361, maxX: 604, maxY: 487 },
    right: { minX: 661, minY: 359, maxX: 786, maxY: 483 },
    top: { minX: 567, minY: 200, maxX: 693, maxY: 327 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 603, maxY: 488 },
    right: { minX: 660, minY: 360, maxX: 786, maxY: 484 },
    top: { minX: 567, minY: 201, maxX: 692, maxY: 328 },
  },
  {
    left: { minX: 477, minY: 362, maxX: 604, maxY: 487 },
    right: { minX: 661, minY: 359, maxX: 786, maxY: 483 },
    top: { minX: 567, minY: 200, maxX: 693, maxY: 326 },
  },
  {
    left: { minX: 475, minY: 362, maxX: 602, maxY: 487 },
    right: { minX: 660, minY: 359, maxX: 785, maxY: 483 },
    top: { minX: 566, minY: 200, maxX: 691, maxY: 327 },
  },
  {
    left: { minX: 478, minY: 365, maxX: 605, maxY: 489 },
    right: { minX: 662, minY: 362, maxX: 787, maxY: 485 },
    top: { minX: 569, minY: 203, maxX: 694, maxY: 329 },
  },
  {
    left: { minX: 481, minY: 362, maxX: 608, maxY: 487 },
    right: { minX: 665, minY: 360, maxX: 791, maxY: 484 },
    top: { minX: 573, minY: 201, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 359, maxX: 609, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 792, maxY: 481 },
    top: { minX: 575, minY: 197, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 480, minY: 358, maxX: 606, maxY: 483 },
    right: { minX: 664, minY: 356, maxX: 789, maxY: 480 },
    top: { minX: 571, minY: 196, maxX: 697, maxY: 323 },
  },
  {
    left: { minX: 478, minY: 355, maxX: 606, maxY: 480 },
    right: { minX: 663, minY: 353, maxX: 789, maxY: 477 },
    top: { minX: 571, minY: 193, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 606, maxY: 477 },
    right: { minX: 664, minY: 351, maxX: 790, maxY: 475 },
    top: { minX: 571, minY: 189, maxX: 698, maxY: 317 },
  },
  {
    left: { minX: 480, minY: 358, maxX: 607, maxY: 484 },
    right: { minX: 665, minY: 356, maxX: 791, maxY: 481 },
    top: { minX: 572, minY: 196, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 483, minY: 365, maxX: 610, maxY: 491 },
    right: { minX: 667, minY: 363, maxX: 793, maxY: 488 },
    top: { minX: 574, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 482, minY: 365, maxX: 609, maxY: 491 },
    right: { minX: 667, minY: 363, maxX: 793, maxY: 488 },
    top: { minX: 574, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 481, minY: 365, maxX: 608, maxY: 491 },
    right: { minX: 666, minY: 363, maxX: 792, maxY: 488 },
    top: { minX: 573, minY: 203, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 481, minY: 367, maxX: 608, maxY: 493 },
    right: { minX: 666, minY: 365, maxX: 792, maxY: 490 },
    top: { minX: 573, minY: 204, maxX: 699, maxY: 332 },
  },
  {
    left: { minX: 480, minY: 368, maxX: 607, maxY: 494 },
    right: { minX: 665, minY: 366, maxX: 791, maxY: 491 },
    top: { minX: 571, minY: 205, maxX: 698, maxY: 333 },
  },
  {
    left: { minX: 479, minY: 368, maxX: 606, maxY: 494 },
    right: { minX: 664, minY: 366, maxX: 790, maxY: 491 },
    top: { minX: 571, minY: 205, maxX: 697, maxY: 333 },
  },
  {
    left: { minX: 478, minY: 369, maxX: 605, maxY: 495 },
    right: { minX: 663, minY: 367, maxX: 788, maxY: 491 },
    top: { minX: 569, minY: 207, maxX: 695, maxY: 334 },
  },
  {
    left: { minX: 477, minY: 371, maxX: 604, maxY: 497 },
    right: { minX: 661, minY: 368, maxX: 787, maxY: 493 },
    top: { minX: 568, minY: 209, maxX: 694, maxY: 336 },
  },
  {
    left: { minX: 477, minY: 371, maxX: 604, maxY: 496 },
    right: { minX: 661, minY: 368, maxX: 786, maxY: 492 },
    top: { minX: 567, minY: 209, maxX: 694, maxY: 335 },
  },
  {
    left: { minX: 475, minY: 373, maxX: 602, maxY: 499 },
    right: { minX: 659, minY: 370, maxX: 784, maxY: 494 },
    top: { minX: 566, minY: 211, maxX: 692, maxY: 338 },
  },
  {
    left: { minX: 474, minY: 376, maxX: 601, maxY: 502 },
    right: { minX: 658, minY: 373, maxX: 783, maxY: 497 },
    top: { minX: 565, minY: 215, maxX: 691, maxY: 341 },
  },
  {
    left: { minX: 471, minY: 375, maxX: 598, maxY: 501 },
    right: { minX: 655, minY: 373, maxX: 780, maxY: 497 },
    top: { minX: 562, minY: 213, maxX: 688, maxY: 340 },
  },
  {
    left: { minX: 464, minY: 377, maxX: 592, maxY: 503 },
    right: { minX: 650, minY: 374, maxX: 774, maxY: 498 },
    top: { minX: 557, minY: 215, maxX: 682, maxY: 342 },
  },
  {
    left: { minX: 463, minY: 375, maxX: 592, maxY: 501 },
    right: { minX: 649, minY: 372, maxX: 774, maxY: 496 },
    top: { minX: 555, minY: 213, maxX: 682, maxY: 340 },
  },
  {
    left: { minX: 460, minY: 374, maxX: 588, maxY: 501 },
    right: { minX: 646, minY: 372, maxX: 771, maxY: 495 },
    top: { minX: 553, minY: 211, maxX: 679, maxY: 339 },
  },
  {
    left: { minX: 459, minY: 370, maxX: 587, maxY: 497 },
    right: { minX: 645, minY: 368, maxX: 770, maxY: 492 },
    top: { minX: 551, minY: 208, maxX: 678, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 587, maxY: 499 },
    right: { minX: 645, minY: 370, maxX: 769, maxY: 493 },
    top: { minX: 551, minY: 210, maxX: 678, maxY: 337 },
  },
  {
    left: { minX: 460, minY: 371, maxX: 588, maxY: 497 },
    right: { minX: 646, minY: 369, maxX: 770, maxY: 492 },
    top: { minX: 553, minY: 209, maxX: 679, maxY: 336 },
  },
  {
    left: { minX: 462, minY: 370, maxX: 590, maxY: 496 },
    right: { minX: 648, minY: 367, maxX: 772, maxY: 491 },
    top: { minX: 554, minY: 207, maxX: 680, maxY: 335 },
  },
  {
    left: { minX: 463, minY: 370, maxX: 590, maxY: 497 },
    right: { minX: 648, minY: 368, maxX: 772, maxY: 491 },
    top: { minX: 554, minY: 208, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 462, minY: 371, maxX: 590, maxY: 497 },
    right: { minX: 647, minY: 368, maxX: 771, maxY: 491 },
    top: { minX: 553, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 463, minY: 371, maxX: 591, maxY: 497 },
    right: { minX: 648, minY: 368, maxX: 772, maxY: 491 },
    top: { minX: 555, minY: 209, maxX: 680, maxY: 336 },
  },
  {
    left: { minX: 464, minY: 371, maxX: 591, maxY: 498 },
    right: { minX: 649, minY: 369, maxX: 773, maxY: 492 },
    top: { minX: 555, minY: 210, maxX: 681, maxY: 336 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 592, maxY: 499 },
    right: { minX: 650, minY: 370, maxX: 774, maxY: 493 },
    top: { minX: 555, minY: 211, maxX: 681, maxY: 338 },
  },
  {
    left: { minX: 465, minY: 373, maxX: 592, maxY: 499 },
    right: { minX: 649, minY: 369, maxX: 773, maxY: 493 },
    top: { minX: 556, minY: 211, maxX: 681, maxY: 337 },
  },
  {
    left: { minX: 465, minY: 371, maxX: 592, maxY: 497 },
    right: { minX: 650, minY: 368, maxX: 774, maxY: 492 },
    top: { minX: 556, minY: 210, maxX: 682, maxY: 336 },
  },
  {
    left: { minX: 466, minY: 369, maxX: 593, maxY: 495 },
    right: { minX: 651, minY: 366, maxX: 774, maxY: 489 },
    top: { minX: 557, minY: 208, maxX: 682, maxY: 334 },
  },
  {
    left: { minX: 466, minY: 367, maxX: 593, maxY: 492 },
    right: { minX: 651, minY: 364, maxX: 774, maxY: 487 },
    top: { minX: 557, minY: 205, maxX: 682, maxY: 332 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 593, maxY: 490 },
    right: { minX: 650, minY: 361, maxX: 774, maxY: 485 },
    top: { minX: 557, minY: 203, maxX: 682, maxY: 329 },
  },
  {
    left: { minX: 466, minY: 363, maxX: 593, maxY: 488 },
    right: { minX: 651, minY: 360, maxX: 774, maxY: 483 },
    top: { minX: 557, minY: 201, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 468, minY: 359, maxX: 595, maxY: 485 },
    right: { minX: 652, minY: 357, maxX: 776, maxY: 480 },
    top: { minX: 559, minY: 198, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 361, maxX: 596, maxY: 486 },
    right: { minX: 653, minY: 359, maxX: 777, maxY: 481 },
    top: { minX: 561, minY: 199, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 469, minY: 360, maxX: 596, maxY: 485 },
    right: { minX: 654, minY: 358, maxX: 778, maxY: 481 },
    top: { minX: 561, minY: 199, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 596, maxY: 485 },
    right: { minX: 654, minY: 357, maxX: 778, maxY: 480 },
    top: { minX: 561, minY: 198, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 470, minY: 358, maxX: 597, maxY: 483 },
    right: { minX: 655, minY: 355, maxX: 778, maxY: 478 },
    top: { minX: 561, minY: 196, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 598, maxY: 481 },
    right: { minX: 655, minY: 353, maxX: 780, maxY: 476 },
    top: { minX: 562, minY: 193, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 599, maxY: 480 },
    right: { minX: 656, minY: 353, maxX: 780, maxY: 476 },
    top: { minX: 563, minY: 193, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 600, maxY: 478 },
    right: { minX: 657, minY: 351, maxX: 781, maxY: 473 },
    top: { minX: 564, minY: 191, maxX: 690, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 600, maxY: 477 },
    right: { minX: 658, minY: 350, maxX: 782, maxY: 473 },
    top: { minX: 565, minY: 190, maxX: 690, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 602, maxY: 476 },
    right: { minX: 659, minY: 348, maxX: 783, maxY: 471 },
    top: { minX: 566, minY: 189, maxX: 692, maxY: 316 },
  },
  {
    left: { minX: 475, minY: 351, maxX: 602, maxY: 476 },
    right: { minX: 660, minY: 349, maxX: 784, maxY: 472 },
    top: { minX: 567, minY: 189, maxX: 692, maxY: 317 },
  },
  {
    left: { minX: 477, minY: 351, maxX: 604, maxY: 476 },
    right: { minX: 661, minY: 349, maxX: 786, maxY: 472 },
    top: { minX: 569, minY: 189, maxX: 694, maxY: 316 },
  },
  {
    left: { minX: 479, minY: 352, maxX: 606, maxY: 477 },
    right: { minX: 663, minY: 351, maxX: 787, maxY: 474 },
    top: { minX: 571, minY: 191, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 609, maxY: 479 },
    right: { minX: 666, minY: 353, maxX: 791, maxY: 475 },
    top: { minX: 575, minY: 193, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 354, maxX: 610, maxY: 479 },
    right: { minX: 667, minY: 352, maxX: 792, maxY: 475 },
    top: { minX: 575, minY: 193, maxX: 701, maxY: 319 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 611, maxY: 479 },
    right: { minX: 668, minY: 353, maxX: 793, maxY: 476 },
    top: { minX: 577, minY: 194, maxX: 702, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 478 },
    right: { minX: 670, minY: 352, maxX: 794, maxY: 475 },
    top: { minX: 578, minY: 193, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 613, maxY: 478 },
    right: { minX: 670, minY: 352, maxX: 794, maxY: 475 },
    top: { minX: 578, minY: 193, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 614, maxY: 478 },
    right: { minX: 671, minY: 351, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 192, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 615, maxY: 477 },
    right: { minX: 672, minY: 351, maxX: 797, maxY: 474 },
    top: { minX: 581, minY: 192, maxX: 706, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 615, maxY: 477 },
    right: { minX: 672, minY: 350, maxX: 797, maxY: 473 },
    top: { minX: 580, minY: 191, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 488, minY: 353, maxX: 614, maxY: 477 },
    right: { minX: 671, minY: 351, maxX: 796, maxY: 474 },
    top: { minX: 579, minY: 191, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 614, maxY: 478 },
    right: { minX: 672, minY: 352, maxX: 796, maxY: 475 },
    top: { minX: 580, minY: 193, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 614, maxY: 479 },
    right: { minX: 671, minY: 353, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 193, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 614, maxY: 480 },
    right: { minX: 671, minY: 353, maxX: 796, maxY: 476 },
    top: { minX: 579, minY: 195, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 613, maxY: 481 },
    right: { minX: 670, minY: 355, maxX: 794, maxY: 478 },
    top: { minX: 578, minY: 197, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 359, maxX: 610, maxY: 484 },
    right: { minX: 667, minY: 357, maxX: 791, maxY: 480 },
    top: { minX: 575, minY: 199, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 484, minY: 361, maxX: 609, maxY: 485 },
    right: { minX: 666, minY: 358, maxX: 790, maxY: 480 },
    top: { minX: 574, minY: 201, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 485, minY: 361, maxX: 610, maxY: 485 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 201, maxX: 698, maxY: 326 },
  },
  {
    left: { minX: 485, minY: 363, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 791, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 481 },
    top: { minX: 575, minY: 202, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 485, minY: 362, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 359, maxX: 790, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 698, maxY: 328 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 610, maxY: 486 },
    right: { minX: 667, minY: 360, maxX: 791, maxY: 482 },
    top: { minX: 575, minY: 203, maxX: 699, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 612, maxY: 487 },
    right: { minX: 668, minY: 360, maxX: 792, maxY: 483 },
    top: { minX: 576, minY: 204, maxX: 700, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 363, maxX: 612, maxY: 487 },
    right: { minX: 668, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 205, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 487, minY: 364, maxX: 612, maxY: 487 },
    right: { minX: 669, minY: 361, maxX: 792, maxY: 483 },
    top: { minX: 577, minY: 205, maxX: 700, maxY: 329 },
  },
  {
    left: { minX: 488, minY: 363, maxX: 613, maxY: 486 },
    right: { minX: 669, minY: 360, maxX: 793, maxY: 482 },
    top: { minX: 577, minY: 204, maxX: 701, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 362, maxX: 612, maxY: 485 },
    right: { minX: 669, minY: 359, maxX: 792, maxY: 481 },
    top: { minX: 577, minY: 203, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 487, minY: 360, maxX: 612, maxY: 484 },
    right: { minX: 668, minY: 357, maxX: 792, maxY: 479 },
    top: { minX: 576, minY: 201, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 487, minY: 359, maxX: 612, maxY: 482 },
    right: { minX: 669, minY: 355, maxX: 793, maxY: 477 },
    top: { minX: 576, minY: 198, maxX: 700, maxY: 323 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 611, maxY: 480 },
    right: { minX: 668, minY: 352, maxX: 792, maxY: 474 },
    top: { minX: 574, minY: 195, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 485, minY: 356, maxX: 610, maxY: 480 },
    right: { minX: 667, minY: 351, maxX: 791, maxY: 473 },
    top: { minX: 573, minY: 194, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 611, maxY: 480 },
    right: { minX: 667, minY: 351, maxX: 792, maxY: 474 },
    top: { minX: 574, minY: 195, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 355, maxX: 611, maxY: 478 },
    right: { minX: 668, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 575, minY: 194, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 668, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 575, minY: 194, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 700, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 668, minY: 351, maxX: 792, maxY: 473 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 668, minY: 351, maxX: 791, maxY: 472 },
    top: { minX: 575, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 612, maxY: 478 },
    right: { minX: 669, minY: 351, maxX: 792, maxY: 472 },
    top: { minX: 576, minY: 195, maxX: 699, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 612, maxY: 477 },
    right: { minX: 668, minY: 350, maxX: 791, maxY: 471 },
    top: { minX: 575, minY: 194, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 611, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 790, maxY: 471 },
    top: { minX: 575, minY: 193, maxX: 698, maxY: 318 },
  },
  {
    left: { minX: 486, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 486, minY: 353, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 354, maxX: 610, maxY: 476 },
    right: { minX: 667, minY: 349, maxX: 789, maxY: 470 },
    top: { minX: 573, minY: 195, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 352, maxX: 610, maxY: 474 },
    right: { minX: 667, minY: 347, maxX: 789, maxY: 468 },
    top: { minX: 573, minY: 192, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 610, maxY: 474 },
    right: { minX: 666, minY: 347, maxX: 788, maxY: 468 },
    top: { minX: 573, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 485, minY: 353, maxX: 609, maxY: 475 },
    right: { minX: 665, minY: 348, maxX: 787, maxY: 469 },
    top: { minX: 571, minY: 193, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 609, maxY: 477 },
    right: { minX: 665, minY: 350, maxX: 786, maxY: 471 },
    top: { minX: 572, minY: 196, maxX: 694, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 610, maxY: 478 },
    right: { minX: 665, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 486, minY: 356, maxX: 609, maxY: 478 },
    right: { minX: 665, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 694, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 665, minY: 351, maxX: 787, maxY: 472 },
    top: { minX: 573, minY: 198, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 610, maxY: 478 },
    right: { minX: 666, minY: 351, maxX: 788, maxY: 471 },
    top: { minX: 573, minY: 199, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 787, maxY: 471 },
    top: { minX: 573, minY: 197, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 356, maxX: 610, maxY: 477 },
    right: { minX: 666, minY: 351, maxX: 788, maxY: 471 },
    top: { minX: 573, minY: 198, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 355, maxX: 611, maxY: 476 },
    right: { minX: 666, minY: 349, maxX: 788, maxY: 469 },
    top: { minX: 573, minY: 196, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 612, maxY: 474 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 467 },
    top: { minX: 575, minY: 194, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 489, minY: 351, maxX: 611, maxY: 473 },
    right: { minX: 667, minY: 347, maxX: 788, maxY: 466 },
    top: { minX: 575, minY: 193, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 489, minY: 351, maxX: 612, maxY: 472 },
    right: { minX: 667, minY: 346, maxX: 788, maxY: 465 },
    top: { minX: 575, minY: 192, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 489, minY: 349, maxX: 612, maxY: 470 },
    right: { minX: 667, minY: 344, maxX: 788, maxY: 463 },
    top: { minX: 575, minY: 191, maxX: 696, maxY: 314 },
  },
  {
    left: { minX: 490, minY: 349, maxX: 612, maxY: 469 },
    right: { minX: 667, minY: 344, maxX: 788, maxY: 463 },
    top: { minX: 575, minY: 191, maxX: 697, maxY: 313 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 613, maxY: 467 },
    right: { minX: 668, minY: 342, maxX: 788, maxY: 461 },
    top: { minX: 576, minY: 189, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 347, maxX: 613, maxY: 467 },
    right: { minX: 669, minY: 343, maxX: 789, maxY: 461 },
    top: { minX: 577, minY: 189, maxX: 699, maxY: 312 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 612, maxY: 467 },
    right: { minX: 667, minY: 343, maxX: 788, maxY: 461 },
    top: { minX: 577, minY: 189, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 488, minY: 347, maxX: 610, maxY: 467 },
    right: { minX: 665, minY: 343, maxX: 785, maxY: 461 },
    top: { minX: 574, minY: 190, maxX: 695, maxY: 313 },
  },
  {
    left: { minX: 487, minY: 346, maxX: 609, maxY: 467 },
    right: { minX: 664, minY: 343, maxX: 784, maxY: 461 },
    top: { minX: 573, minY: 189, maxX: 694, maxY: 312 },
  },
  {
    left: { minX: 489, minY: 345, maxX: 610, maxY: 465 },
    right: { minX: 665, minY: 341, maxX: 785, maxY: 460 },
    top: { minX: 575, minY: 189, maxX: 696, maxY: 311 },
  },
  {
    left: { minX: 491, minY: 345, maxX: 612, maxY: 465 },
    right: { minX: 667, minY: 342, maxX: 786, maxY: 460 },
    top: { minX: 577, minY: 189, maxX: 698, maxY: 311 },
  },
  {
    left: { minX: 491, minY: 346, maxX: 612, maxY: 465 },
    right: { minX: 667, minY: 343, maxX: 786, maxY: 461 },
    top: { minX: 578, minY: 191, maxX: 698, maxY: 312 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 613, maxY: 463 },
    right: { minX: 667, minY: 341, maxX: 787, maxY: 459 },
    top: { minX: 578, minY: 188, maxX: 698, maxY: 310 },
  },
  {
    left: { minX: 492, minY: 342, maxX: 613, maxY: 461 },
    right: { minX: 667, minY: 339, maxX: 787, maxY: 457 },
    top: { minX: 578, minY: 187, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 343, maxX: 612, maxY: 462 },
    right: { minX: 667, minY: 340, maxX: 786, maxY: 457 },
    top: { minX: 577, minY: 187, maxX: 698, maxY: 309 },
  },
  {
    left: { minX: 492, minY: 341, maxX: 613, maxY: 459 },
    right: { minX: 667, minY: 337, maxX: 786, maxY: 455 },
    top: { minX: 578, minY: 185, maxX: 698, maxY: 307 },
  },
  {
    left: { minX: 493, minY: 339, maxX: 614, maxY: 458 },
    right: { minX: 668, minY: 336, maxX: 787, maxY: 453 },
    top: { minX: 579, minY: 184, maxX: 699, maxY: 305 },
  },
  {
    left: { minX: 495, minY: 342, maxX: 614, maxY: 460 },
    right: { minX: 669, minY: 340, maxX: 787, maxY: 456 },
    top: { minX: 581, minY: 187, maxX: 700, maxY: 309 },
  },
  {
    left: { minX: 494, minY: 342, maxX: 614, maxY: 460 },
    right: { minX: 668, minY: 340, maxX: 786, maxY: 456 },
    top: { minX: 580, minY: 188, maxX: 700, maxY: 309 },
  },
  {
    left: { minX: 491, minY: 343, maxX: 611, maxY: 461 },
    right: { minX: 665, minY: 341, maxX: 783, maxY: 457 },
    top: { minX: 577, minY: 189, maxX: 697, maxY: 309 },
  },
  {
    left: { minX: 489, minY: 340, maxX: 609, maxY: 458 },
    right: { minX: 663, minY: 337, maxX: 781, maxY: 453 },
    top: { minX: 575, minY: 185, maxX: 694, maxY: 306 },
  },
  {
    left: { minX: 489, minY: 341, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 455 },
    top: { minX: 575, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 490, minY: 342, maxX: 609, maxY: 460 },
    right: { minX: 663, minY: 340, maxX: 780, maxY: 456 },
    top: { minX: 576, minY: 189, maxX: 694, maxY: 310 },
  },
  {
    left: { minX: 490, minY: 341, maxX: 609, maxY: 459 },
    right: { minX: 663, minY: 339, maxX: 780, maxY: 455 },
    top: { minX: 575, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 489, minY: 341, maxX: 608, maxY: 458 },
    right: { minX: 662, minY: 339, maxX: 779, maxY: 454 },
    top: { minX: 575, minY: 188, maxX: 692, maxY: 308 },
  },
  {
    left: { minX: 491, minY: 339, maxX: 609, maxY: 456 },
    right: { minX: 663, minY: 337, maxX: 780, maxY: 452 },
    top: { minX: 576, minY: 186, maxX: 694, maxY: 306 },
  },
  {
    left: { minX: 492, minY: 340, maxX: 610, maxY: 457 },
    right: { minX: 663, minY: 338, maxX: 780, maxY: 453 },
    top: { minX: 577, minY: 188, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 491, minY: 340, maxX: 610, maxY: 457 },
    right: { minX: 663, minY: 338, maxX: 779, maxY: 453 },
    top: { minX: 576, minY: 189, maxX: 694, maxY: 308 },
  },
  {
    left: { minX: 493, minY: 339, maxX: 611, maxY: 455 },
    right: { minX: 664, minY: 337, maxX: 780, maxY: 451 },
    top: { minX: 578, minY: 188, maxX: 695, maxY: 307 },
  },
  {
    left: { minX: 495, minY: 341, maxX: 612, maxY: 456 },
    right: { minX: 665, minY: 339, maxX: 781, maxY: 453 },
    top: { minX: 579, minY: 190, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 495, minY: 338, maxX: 612, maxY: 454 },
    right: { minX: 665, minY: 337, maxX: 781, maxY: 451 },
    top: { minX: 579, minY: 187, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 665, minY: 339, maxX: 780, maxY: 452 },
    top: { minX: 580, minY: 190, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 496, minY: 337, maxX: 613, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 187, maxX: 697, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 451 },
    top: { minX: 581, minY: 190, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 497, minY: 338, maxX: 614, maxY: 453 },
    right: { minX: 666, minY: 337, maxX: 781, maxY: 449 },
    top: { minX: 581, minY: 189, maxX: 698, maxY: 307 },
  },
  {
    left: { minX: 497, minY: 340, maxX: 613, maxY: 455 },
    right: { minX: 665, minY: 339, maxX: 780, maxY: 451 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 309 },
  },
  {
    left: { minX: 496, minY: 339, maxX: 613, maxY: 454 },
    right: { minX: 665, minY: 338, maxX: 780, maxY: 451 },
    top: { minX: 581, minY: 191, maxX: 696, maxY: 308 },
  },
  {
    left: { minX: 497, minY: 339, maxX: 613, maxY: 454 },
    right: { minX: 666, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 581, minY: 189, maxX: 697, maxY: 307 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 665, minY: 337, maxX: 780, maxY: 450 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 307 },
  },
  {
    left: { minX: 495, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 665, minY: 335, maxX: 779, maxY: 448 },
    top: { minX: 579, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 579, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 613, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 189, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 338, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 188, maxX: 696, maxY: 306 },
  },
  {
    left: { minX: 495, minY: 337, maxX: 612, maxY: 453 },
    right: { minX: 665, minY: 336, maxX: 779, maxY: 449 },
    top: { minX: 579, minY: 187, maxX: 695, maxY: 306 },
  },
  {
    left: { minX: 496, minY: 337, maxX: 612, maxY: 452 },
    right: { minX: 665, minY: 335, maxX: 780, maxY: 449 },
    top: { minX: 580, minY: 187, maxX: 696, maxY: 305 },
  },
  {
    left: { minX: 496, minY: 336, maxX: 613, maxY: 451 },
    right: { minX: 665, minY: 335, maxX: 780, maxY: 448 },
    top: { minX: 581, minY: 187, maxX: 697, maxY: 304 },
  },
  {
    left: { minX: 498, minY: 337, maxX: 615, maxY: 452 },
    right: { minX: 667, minY: 336, maxX: 782, maxY: 449 },
    top: { minX: 583, minY: 187, maxX: 699, maxY: 305 },
  },
  {
    left: { minX: 499, minY: 339, maxX: 616, maxY: 454 },
    right: { minX: 669, minY: 337, maxX: 784, maxY: 451 },
    top: { minX: 584, minY: 189, maxX: 700, maxY: 307 },
  },
  {
    left: { minX: 500, minY: 343, maxX: 616, maxY: 459 },
    right: { minX: 669, minY: 342, maxX: 784, maxY: 455 },
    top: { minX: 584, minY: 193, maxX: 700, maxY: 312 },
  },
  {
    left: { minX: 501, minY: 348, maxX: 617, maxY: 463 },
    right: { minX: 669, minY: 346, maxX: 784, maxY: 459 },
    top: { minX: 584, minY: 198, maxX: 700, maxY: 316 },
  },
  {
    left: { minX: 501, minY: 351, maxX: 618, maxY: 467 },
    right: { minX: 670, minY: 349, maxX: 785, maxY: 462 },
    top: { minX: 584, minY: 201, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 503, minY: 351, maxX: 620, maxY: 467 },
    right: { minX: 673, minY: 349, maxX: 788, maxY: 463 },
    top: { minX: 587, minY: 201, maxX: 704, maxY: 319 },
  },
  {
    left: { minX: 509, minY: 353, maxX: 625, maxY: 469 },
    right: { minX: 678, minY: 351, maxX: 794, maxY: 465 },
    top: { minX: 592, minY: 203, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 516, minY: 355, maxX: 632, maxY: 470 },
    right: { minX: 685, minY: 353, maxX: 801, maxY: 466 },
    top: { minX: 599, minY: 205, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 521, minY: 354, maxX: 637, maxY: 470 },
    right: { minX: 690, minY: 352, maxX: 807, maxY: 467 },
    top: { minX: 604, minY: 203, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 525, minY: 358, maxX: 642, maxY: 474 },
    right: { minX: 695, minY: 356, maxX: 812, maxY: 471 },
    top: { minX: 609, minY: 207, maxX: 726, maxY: 326 },
  },
  {
    left: { minX: 529, minY: 362, maxX: 645, maxY: 477 },
    right: { minX: 699, minY: 359, maxX: 816, maxY: 475 },
    top: { minX: 612, minY: 211, maxX: 731, maxY: 329 },
  },
  {
    left: { minX: 530, minY: 363, maxX: 646, maxY: 479 },
    right: { minX: 700, minY: 361, maxX: 818, maxY: 477 },
    top: { minX: 614, minY: 211, maxX: 732, maxY: 331 },
  },
  {
    left: { minX: 529, minY: 365, maxX: 646, maxY: 481 },
    right: { minX: 699, minY: 363, maxX: 818, maxY: 479 },
    top: { minX: 613, minY: 213, maxX: 732, maxY: 332 },
  },
  {
    left: { minX: 527, minY: 367, maxX: 643, maxY: 484 },
    right: { minX: 697, minY: 366, maxX: 816, maxY: 482 },
    top: { minX: 611, minY: 215, maxX: 730, maxY: 335 },
  },
  {
    left: { minX: 527, minY: 371, maxX: 644, maxY: 488 },
    right: { minX: 699, minY: 369, maxX: 818, maxY: 487 },
    top: { minX: 612, minY: 219, maxX: 731, maxY: 338 },
  },
  {
    left: { minX: 527, minY: 375, maxX: 645, maxY: 492 },
    right: { minX: 699, minY: 373, maxX: 819, maxY: 491 },
    top: { minX: 612, minY: 222, maxX: 732, maxY: 342 },
  },
  {
    left: { minX: 527, minY: 375, maxX: 645, maxY: 494 },
    right: { minX: 699, minY: 375, maxX: 820, maxY: 493 },
    top: { minX: 612, minY: 223, maxX: 732, maxY: 343 },
  },
  {
    left: { minX: 527, minY: 375, maxX: 646, maxY: 493 },
    right: { minX: 700, minY: 374, maxX: 822, maxY: 493 },
    top: { minX: 613, minY: 221, maxX: 734, maxY: 342 },
  },
  {
    left: { minX: 526, minY: 375, maxX: 645, maxY: 494 },
    right: { minX: 700, minY: 374, maxX: 822, maxY: 494 },
    top: { minX: 613, minY: 221, maxX: 734, maxY: 342 },
  },
  {
    left: { minX: 531, minY: 373, maxX: 650, maxY: 492 },
    right: { minX: 706, minY: 373, maxX: 829, maxY: 493 },
    top: { minX: 618, minY: 218, maxX: 740, maxY: 341 },
  },
  {
    left: { minX: 531, minY: 376, maxX: 651, maxY: 496 },
    right: { minX: 707, minY: 375, maxX: 830, maxY: 497 },
    top: { minX: 619, minY: 221, maxX: 740, maxY: 343 },
  },
  {
    left: { minX: 528, minY: 379, maxX: 648, maxY: 499 },
    right: { minX: 705, minY: 379, maxX: 828, maxY: 500 },
    top: { minX: 616, minY: 223, maxX: 738, maxY: 346 },
  },
  {
    left: { minX: 528, minY: 381, maxX: 649, maxY: 502 },
    right: { minX: 705, minY: 381, maxX: 829, maxY: 503 },
    top: { minX: 616, minY: 226, maxX: 739, maxY: 349 },
  },
  {
    left: { minX: 527, minY: 382, maxX: 648, maxY: 503 },
    right: { minX: 704, minY: 381, maxX: 828, maxY: 504 },
    top: { minX: 615, minY: 227, maxX: 737, maxY: 349 },
  },
  {
    left: { minX: 528, minY: 383, maxX: 649, maxY: 504 },
    right: { minX: 705, minY: 382, maxX: 830, maxY: 505 },
    top: { minX: 616, minY: 227, maxX: 738, maxY: 350 },
  },
  {
    left: { minX: 525, minY: 381, maxX: 646, maxY: 502 },
    right: { minX: 703, minY: 381, maxX: 827, maxY: 503 },
    top: { minX: 613, minY: 225, maxX: 736, maxY: 348 },
  },
  {
    left: { minX: 523, minY: 380, maxX: 644, maxY: 501 },
    right: { minX: 701, minY: 379, maxX: 825, maxY: 502 },
    top: { minX: 611, minY: 224, maxX: 734, maxY: 347 },
  },
  {
    left: { minX: 519, minY: 381, maxX: 640, maxY: 502 },
    right: { minX: 696, minY: 380, maxX: 821, maxY: 503 },
    top: { minX: 607, minY: 225, maxX: 730, maxY: 348 },
  },
  {
    left: { minX: 515, minY: 381, maxX: 637, maxY: 503 },
    right: { minX: 693, minY: 379, maxX: 818, maxY: 503 },
    top: { minX: 603, minY: 224, maxX: 726, maxY: 348 },
  },
  {
    left: { minX: 513, minY: 379, maxX: 635, maxY: 501 },
    right: { minX: 691, minY: 378, maxX: 816, maxY: 501 },
    top: { minX: 601, minY: 222, maxX: 724, maxY: 346 },
  },
  {
    left: { minX: 512, minY: 378, maxX: 634, maxY: 500 },
    right: { minX: 691, minY: 376, maxX: 816, maxY: 500 },
    top: { minX: 601, minY: 220, maxX: 724, maxY: 344 },
  },
  {
    left: { minX: 510, minY: 378, maxX: 632, maxY: 501 },
    right: { minX: 689, minY: 377, maxX: 814, maxY: 500 },
    top: { minX: 599, minY: 220, maxX: 722, maxY: 344 },
  },
  {
    left: { minX: 508, minY: 377, maxX: 631, maxY: 500 },
    right: { minX: 687, minY: 375, maxX: 813, maxY: 499 },
    top: { minX: 597, minY: 219, maxX: 720, maxY: 343 },
  },
  {
    left: { minX: 507, minY: 374, maxX: 630, maxY: 497 },
    right: { minX: 687, minY: 372, maxX: 812, maxY: 496 },
    top: { minX: 595, minY: 216, maxX: 719, maxY: 340 },
  },
  {
    left: { minX: 506, minY: 371, maxX: 629, maxY: 494 },
    right: { minX: 686, minY: 369, maxX: 811, maxY: 493 },
    top: { minX: 595, minY: 213, maxX: 718, maxY: 337 },
  },
  {
    left: { minX: 505, minY: 369, maxX: 628, maxY: 492 },
    right: { minX: 685, minY: 367, maxX: 810, maxY: 491 },
    top: { minX: 594, minY: 211, maxX: 718, maxY: 335 },
  },
  {
    left: { minX: 506, minY: 366, maxX: 629, maxY: 489 },
    right: { minX: 685, minY: 365, maxX: 810, maxY: 488 },
    top: { minX: 595, minY: 207, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 507, minY: 363, maxX: 630, maxY: 485 },
    right: { minX: 687, minY: 361, maxX: 812, maxY: 485 },
    top: { minX: 595, minY: 203, maxX: 720, maxY: 329 },
  },
  {
    left: { minX: 506, minY: 361, maxX: 630, maxY: 484 },
    right: { minX: 687, minY: 359, maxX: 812, maxY: 483 },
    top: { minX: 595, minY: 202, maxX: 720, maxY: 327 },
  },
  {
    left: { minX: 504, minY: 359, maxX: 628, maxY: 482 },
    right: { minX: 684, minY: 358, maxX: 810, maxY: 481 },
    top: { minX: 593, minY: 200, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 359, maxX: 627, maxY: 482 },
    right: { minX: 684, minY: 357, maxX: 809, maxY: 481 },
    top: { minX: 593, minY: 200, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 504, minY: 357, maxX: 627, maxY: 479 },
    right: { minX: 684, minY: 355, maxX: 810, maxY: 479 },
    top: { minX: 593, minY: 197, maxX: 717, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 626, maxY: 479 },
    right: { minX: 683, minY: 355, maxX: 808, maxY: 478 },
    top: { minX: 592, minY: 197, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 478 },
    right: { minX: 683, minY: 353, maxX: 808, maxY: 477 },
    top: { minX: 591, minY: 195, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 627, maxY: 476 },
    right: { minX: 684, minY: 351, maxX: 810, maxY: 475 },
    top: { minX: 593, minY: 193, maxX: 717, maxY: 319 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 351, maxX: 807, maxY: 475 },
    top: { minX: 590, minY: 194, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 625, maxY: 477 },
    right: { minX: 682, minY: 352, maxX: 807, maxY: 475 },
    top: { minX: 590, minY: 194, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 356, maxX: 626, maxY: 478 },
    right: { minX: 683, minY: 354, maxX: 808, maxY: 477 },
    top: { minX: 592, minY: 196, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 357, maxX: 627, maxY: 480 },
    right: { minX: 683, minY: 355, maxX: 808, maxY: 478 },
    top: { minX: 592, minY: 198, maxX: 716, maxY: 323 },
  },
  {
    left: { minX: 503, minY: 360, maxX: 626, maxY: 482 },
    right: { minX: 682, minY: 357, maxX: 807, maxY: 481 },
    top: { minX: 591, minY: 201, maxX: 715, maxY: 326 },
  },
  {
    left: { minX: 503, minY: 361, maxX: 626, maxY: 483 },
    right: { minX: 683, minY: 359, maxX: 808, maxY: 482 },
    top: { minX: 592, minY: 203, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 503, minY: 359, maxX: 626, maxY: 481 },
    right: { minX: 683, minY: 357, maxX: 808, maxY: 480 },
    top: { minX: 592, minY: 200, maxX: 716, maxY: 325 },
  },
  {
    left: { minX: 501, minY: 358, maxX: 624, maxY: 480 },
    right: { minX: 681, minY: 356, maxX: 806, maxY: 479 },
    top: { minX: 590, minY: 199, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 504, minY: 361, maxX: 627, maxY: 483 },
    right: { minX: 683, minY: 359, maxX: 808, maxY: 482 },
    top: { minX: 593, minY: 203, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 507, minY: 366, maxX: 629, maxY: 487 },
    right: { minX: 685, minY: 364, maxX: 810, maxY: 487 },
    top: { minX: 595, minY: 209, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 505, minY: 371, maxX: 627, maxY: 492 },
    right: { minX: 683, minY: 368, maxX: 806, maxY: 490 },
    top: { minX: 592, minY: 214, maxX: 714, maxY: 337 },
  },
  {
    left: { minX: 503, minY: 370, maxX: 625, maxY: 492 },
    right: { minX: 681, minY: 367, maxX: 804, maxY: 489 },
    top: { minX: 590, minY: 213, maxX: 712, maxY: 336 },
  },
  {
    left: { minX: 502, minY: 369, maxX: 625, maxY: 490 },
    right: { minX: 681, minY: 366, maxX: 804, maxY: 488 },
    top: { minX: 590, minY: 212, maxX: 712, maxY: 335 },
  },
  {
    left: { minX: 502, minY: 367, maxX: 624, maxY: 488 },
    right: { minX: 681, minY: 364, maxX: 805, maxY: 486 },
    top: { minX: 590, minY: 209, maxX: 712, maxY: 332 },
  },
  {
    left: { minX: 503, minY: 366, maxX: 625, maxY: 487 },
    right: { minX: 681, minY: 363, maxX: 805, maxY: 485 },
    top: { minX: 590, minY: 208, maxX: 713, maxY: 332 },
  },
  {
    left: { minX: 498, minY: 356, maxX: 621, maxY: 479 },
    right: { minX: 677, minY: 353, maxX: 802, maxY: 476 },
    top: { minX: 586, minY: 197, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 622, maxY: 477 },
    right: { minX: 679, minY: 353, maxX: 803, maxY: 476 },
    top: { minX: 587, minY: 197, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 501, minY: 358, maxX: 623, maxY: 479 },
    right: { minX: 679, minY: 356, maxX: 804, maxY: 478 },
    top: { minX: 589, minY: 200, maxX: 712, maxY: 324 },
  },
  {
    left: { minX: 499, minY: 357, maxX: 622, maxY: 478 },
    right: { minX: 677, minY: 354, maxX: 801, maxY: 476 },
    top: { minX: 587, minY: 198, maxX: 710, maxY: 323 },
  },
  {
    left: { minX: 500, minY: 358, maxX: 622, maxY: 479 },
    right: { minX: 677, minY: 355, maxX: 801, maxY: 477 },
    top: { minX: 587, minY: 201, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 501, minY: 357, maxX: 622, maxY: 478 },
    right: { minX: 678, minY: 355, maxX: 800, maxY: 476 },
    top: { minX: 589, minY: 201, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 502, minY: 355, maxX: 623, maxY: 475 },
    right: { minX: 678, minY: 353, maxX: 801, maxY: 474 },
    top: { minX: 589, minY: 199, maxX: 711, maxY: 322 },
  },
  {
    left: { minX: 501, minY: 357, maxX: 622, maxY: 477 },
    right: { minX: 678, minY: 356, maxX: 800, maxY: 476 },
    top: { minX: 589, minY: 202, maxX: 710, maxY: 324 },
  },
  {
    left: { minX: 501, minY: 355, maxX: 622, maxY: 475 },
    right: { minX: 677, minY: 353, maxX: 798, maxY: 473 },
    top: { minX: 587, minY: 199, maxX: 708, maxY: 322 },
  },
  {
    left: { minX: 501, minY: 354, maxX: 622, maxY: 473 },
    right: { minX: 677, minY: 352, maxX: 798, maxY: 471 },
    top: { minX: 587, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 502, minY: 354, maxX: 622, maxY: 473 },
    right: { minX: 677, minY: 352, maxX: 798, maxY: 471 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 502, minY: 353, maxX: 622, maxY: 471 },
    right: { minX: 676, minY: 351, maxX: 797, maxY: 470 },
    top: { minX: 588, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 351, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 199, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 503, minY: 353, maxX: 622, maxY: 471 },
    right: { minX: 677, minY: 351, maxX: 797, maxY: 469 },
    top: { minX: 589, minY: 200, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 355, maxX: 623, maxY: 472 },
    right: { minX: 677, minY: 352, maxX: 797, maxY: 470 },
    top: { minX: 589, minY: 201, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 624, maxY: 471 },
    right: { minX: 678, minY: 351, maxX: 798, maxY: 469 },
    top: { minX: 590, minY: 200, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 625, maxY: 470 },
    right: { minX: 679, minY: 350, maxX: 798, maxY: 468 },
    top: { minX: 591, minY: 200, maxX: 710, maxY: 320 },
  },
  {
    left: { minX: 509, minY: 354, maxX: 626, maxY: 470 },
    right: { minX: 680, minY: 351, maxX: 799, maxY: 469 },
    top: { minX: 593, minY: 202, maxX: 711, maxY: 321 },
  },
  {
    left: { minX: 511, minY: 354, maxX: 628, maxY: 470 },
    right: { minX: 681, minY: 351, maxX: 800, maxY: 468 },
    top: { minX: 595, minY: 203, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 511, minY: 356, maxX: 627, maxY: 472 },
    right: { minX: 681, minY: 353, maxX: 799, maxY: 470 },
    top: { minX: 594, minY: 205, maxX: 711, maxY: 323 },
  },
  {
    left: { minX: 512, minY: 356, maxX: 629, maxY: 471 },
    right: { minX: 682, minY: 353, maxX: 800, maxY: 470 },
    top: { minX: 595, minY: 205, maxX: 712, maxY: 324 },
  },
  {
    left: { minX: 514, minY: 356, maxX: 630, maxY: 471 },
    right: { minX: 683, minY: 353, maxX: 802, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 515, minY: 356, maxX: 631, maxY: 471 },
    right: { minX: 684, minY: 353, maxX: 802, maxY: 469 },
    top: { minX: 597, minY: 205, maxX: 714, maxY: 323 },
  },
  {
    left: { minX: 517, minY: 355, maxX: 632, maxY: 469 },
    right: { minX: 685, minY: 352, maxX: 803, maxY: 467 },
    top: { minX: 599, minY: 205, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 521, minY: 355, maxX: 636, maxY: 469 },
    right: { minX: 688, minY: 352, maxX: 806, maxY: 467 },
    top: { minX: 602, minY: 205, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 523, minY: 356, maxX: 638, maxY: 470 },
    right: { minX: 690, minY: 353, maxX: 808, maxY: 468 },
    top: { minX: 604, minY: 206, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 525, minY: 356, maxX: 639, maxY: 469 },
    right: { minX: 692, minY: 353, maxX: 810, maxY: 468 },
    top: { minX: 606, minY: 206, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 527, minY: 354, maxX: 641, maxY: 468 },
    right: { minX: 693, minY: 351, maxX: 811, maxY: 466 },
    top: { minX: 608, minY: 205, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 355, maxX: 640, maxY: 468 },
    right: { minX: 693, minY: 352, maxX: 809, maxY: 467 },
    top: { minX: 607, minY: 207, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 526, minY: 355, maxX: 640, maxY: 467 },
    right: { minX: 692, minY: 352, maxX: 808, maxY: 466 },
    top: { minX: 607, minY: 207, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 528, minY: 354, maxX: 642, maxY: 467 },
    right: { minX: 694, minY: 351, maxX: 810, maxY: 465 },
    top: { minX: 609, minY: 206, maxX: 723, maxY: 322 },
  },
  {
    left: { minX: 531, minY: 355, maxX: 644, maxY: 468 },
    right: { minX: 697, minY: 353, maxX: 814, maxY: 467 },
    top: { minX: 611, minY: 207, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 355, maxX: 648, maxY: 467 },
    right: { minX: 700, minY: 352, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 207, maxX: 730, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 353, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 208, maxX: 730, maxY: 324 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 647, maxY: 468 },
    right: { minX: 700, minY: 352, maxX: 817, maxY: 467 },
    top: { minX: 614, minY: 207, maxX: 729, maxY: 323 },
  },
  {
    left: { minX: 535, minY: 356, maxX: 648, maxY: 468 },
    right: { minX: 700, minY: 352, maxX: 817, maxY: 467 },
    top: { minX: 615, minY: 207, maxX: 730, maxY: 324 },
  },
  {
    left: { minX: 533, minY: 355, maxX: 646, maxY: 467 },
    right: { minX: 699, minY: 351, maxX: 816, maxY: 466 },
    top: { minX: 613, minY: 207, maxX: 728, maxY: 322 },
  },
  {
    left: { minX: 531, minY: 355, maxX: 644, maxY: 467 },
    right: { minX: 696, minY: 352, maxX: 813, maxY: 466 },
    top: { minX: 611, minY: 207, maxX: 726, maxY: 323 },
  },
  {
    left: { minX: 528, minY: 356, maxX: 641, maxY: 468 },
    right: { minX: 693, minY: 353, maxX: 810, maxY: 467 },
    top: { minX: 608, minY: 209, maxX: 723, maxY: 324 },
  },
  {
    left: { minX: 525, minY: 358, maxX: 639, maxY: 470 },
    right: { minX: 691, minY: 355, maxX: 807, maxY: 469 },
    top: { minX: 605, minY: 211, maxX: 720, maxY: 326 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 470 },
    right: { minX: 689, minY: 354, maxX: 805, maxY: 468 },
    top: { minX: 603, minY: 209, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 522, minY: 357, maxX: 635, maxY: 469 },
    right: { minX: 687, minY: 353, maxX: 803, maxY: 467 },
    top: { minX: 602, minY: 209, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 523, minY: 357, maxX: 636, maxY: 470 },
    right: { minX: 688, minY: 354, maxX: 804, maxY: 468 },
    top: { minX: 603, minY: 210, maxX: 718, maxY: 325 },
  },
  {
    left: { minX: 522, minY: 358, maxX: 635, maxY: 471 },
    right: { minX: 687, minY: 355, maxX: 803, maxY: 470 },
    top: { minX: 603, minY: 211, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 517, minY: 374, maxX: 630, maxY: 487 },
    right: { minX: 683, minY: 371, maxX: 798, maxY: 486 },
    top: { minX: 598, minY: 227, maxX: 712, maxY: 343 },
  },
  {
    left: { minX: 515, minY: 388, maxX: 629, maxY: 502 },
    right: { minX: 681, minY: 385, maxX: 796, maxY: 500 },
    top: { minX: 595, minY: 241, maxX: 710, maxY: 357 },
  },
  {
    left: { minX: 515, minY: 397, maxX: 628, maxY: 510 },
    right: { minX: 680, minY: 393, maxX: 795, maxY: 508 },
    top: { minX: 595, minY: 250, maxX: 708, maxY: 365 },
  },
  {
    left: { minX: 517, minY: 397, maxX: 629, maxY: 509 },
    right: { minX: 680, minY: 394, maxX: 795, maxY: 507 },
    top: { minX: 596, minY: 251, maxX: 709, maxY: 365 },
  },
  {
    left: { minX: 517, minY: 397, maxX: 629, maxY: 509 },
    right: { minX: 680, minY: 394, maxX: 795, maxY: 507 },
    top: { minX: 596, minY: 251, maxX: 709, maxY: 365 },
  },
];
