const houseVideoData = [
  {
    left: { minX: 357, minY: 353, maxX: 577, maxY: 567 },
    right: { minX: 673, minY: 351, maxX: 887, maxY: 561 },
    top: { minX: 519, minY: 78, maxX: 730, maxY: 296 },
  },
  {
    left: { minX: 357, minY: 353, maxX: 577, maxY: 567 },
    right: { minX: 673, minY: 351, maxX: 887, maxY: 561 },
    top: { minX: 519, minY: 78, maxX: 730, maxY: 296 },
  },
  {
    left: { minX: 355, minY: 353, maxX: 575, maxY: 568 },
    right: { minX: 672, minY: 352, maxX: 884, maxY: 561 },
    top: { minX: 518, minY: 79, maxX: 728, maxY: 296 },
  },
  {
    left: { minX: 357, minY: 354, maxX: 576, maxY: 567 },
    right: { minX: 673, minY: 354, maxX: 885, maxY: 563 },
    top: { minX: 521, minY: 81, maxX: 731, maxY: 297 },
  },
  {
    left: { minX: 354, minY: 356, maxX: 574, maxY: 569 },
    right: { minX: 670, minY: 356, maxX: 881, maxY: 565 },
    top: { minX: 518, minY: 85, maxX: 727, maxY: 300 },
  },
  {
    left: { minX: 354, minY: 356, maxX: 573, maxY: 570 },
    right: { minX: 669, minY: 357, maxX: 880, maxY: 565 },
    top: { minX: 519, minY: 85, maxX: 727, maxY: 301 },
  },
  {
    left: { minX: 353, minY: 357, maxX: 572, maxY: 570 },
    right: { minX: 668, minY: 358, maxX: 878, maxY: 565 },
    top: { minX: 517, minY: 87, maxX: 726, maxY: 301 },
  },
  {
    left: { minX: 352, minY: 359, maxX: 571, maxY: 572 },
    right: { minX: 667, minY: 359, maxX: 876, maxY: 567 },
    top: { minX: 517, minY: 89, maxX: 724, maxY: 303 },
  },
  {
    left: { minX: 352, minY: 360, maxX: 570, maxY: 573 },
    right: { minX: 666, minY: 361, maxX: 875, maxY: 568 },
    top: { minX: 516, minY: 92, maxX: 723, maxY: 305 },
  },
  {
    left: { minX: 352, minY: 360, maxX: 570, maxY: 573 },
    right: { minX: 666, minY: 361, maxX: 875, maxY: 568 },
    top: { minX: 517, minY: 92, maxX: 724, maxY: 305 },
  },
  {
    left: { minX: 353, minY: 361, maxX: 571, maxY: 573 },
    right: { minX: 667, minY: 361, maxX: 876, maxY: 568 },
    top: { minX: 517, minY: 93, maxX: 724, maxY: 306 },
  },
  {
    left: { minX: 354, minY: 361, maxX: 572, maxY: 573 },
    right: { minX: 668, minY: 363, maxX: 876, maxY: 569 },
    top: { minX: 519, minY: 94, maxX: 726, maxY: 307 },
  },
  {
    left: { minX: 355, minY: 363, maxX: 573, maxY: 574 },
    right: { minX: 668, minY: 365, maxX: 876, maxY: 571 },
    top: { minX: 520, minY: 97, maxX: 726, maxY: 308 },
  },
  {
    left: { minX: 355, minY: 364, maxX: 572, maxY: 576 },
    right: { minX: 667, minY: 366, maxX: 875, maxY: 572 },
    top: { minX: 520, minY: 99, maxX: 725, maxY: 310 },
  },
  {
    left: { minX: 355, minY: 364, maxX: 572, maxY: 576 },
    right: { minX: 667, minY: 367, maxX: 875, maxY: 572 },
    top: { minX: 521, minY: 100, maxX: 726, maxY: 311 },
  },
  {
    left: { minX: 356, minY: 364, maxX: 573, maxY: 576 },
    right: { minX: 668, minY: 367, maxX: 876, maxY: 573 },
    top: { minX: 521, minY: 100, maxX: 726, maxY: 310 },
  },
  {
    left: { minX: 356, minY: 363, maxX: 573, maxY: 574 },
    right: { minX: 668, minY: 364, maxX: 876, maxY: 569 },
    top: { minX: 520, minY: 97, maxX: 725, maxY: 308 },
  },
  {
    left: { minX: 358, minY: 361, maxX: 575, maxY: 573 },
    right: { minX: 670, minY: 363, maxX: 878, maxY: 569 },
    top: { minX: 523, minY: 96, maxX: 728, maxY: 307 },
  },
  {
    left: { minX: 357, minY: 359, maxX: 574, maxY: 571 },
    right: { minX: 669, minY: 361, maxX: 876, maxY: 567 },
    top: { minX: 521, minY: 94, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 357, minY: 359, maxX: 574, maxY: 571 },
    right: { minX: 669, minY: 361, maxX: 876, maxY: 566 },
    top: { minX: 522, minY: 94, maxX: 728, maxY: 305 },
  },
  {
    left: { minX: 358, minY: 359, maxX: 574, maxY: 570 },
    right: { minX: 669, minY: 361, maxX: 877, maxY: 566 },
    top: { minX: 522, minY: 93, maxX: 728, maxY: 305 },
  },
  {
    left: { minX: 357, minY: 359, maxX: 574, maxY: 570 },
    right: { minX: 669, minY: 361, maxX: 876, maxY: 566 },
    top: { minX: 522, minY: 93, maxX: 727, maxY: 305 },
  },
  {
    left: { minX: 357, minY: 359, maxX: 573, maxY: 570 },
    right: { minX: 668, minY: 361, maxX: 875, maxY: 565 },
    top: { minX: 521, minY: 94, maxX: 726, maxY: 305 },
  },
  {
    left: { minX: 357, minY: 359, maxX: 574, maxY: 570 },
    right: { minX: 668, minY: 362, maxX: 874, maxY: 566 },
    top: { minX: 521, minY: 95, maxX: 726, maxY: 305 },
  },
  {
    left: { minX: 359, minY: 356, maxX: 574, maxY: 566 },
    right: { minX: 669, minY: 359, maxX: 874, maxY: 561 },
    top: { minX: 523, minY: 91, maxX: 727, maxY: 302 },
  },
  {
    left: { minX: 359, minY: 356, maxX: 574, maxY: 566 },
    right: { minX: 669, minY: 359, maxX: 874, maxY: 561 },
    top: { minX: 523, minY: 92, maxX: 727, maxY: 302 },
  },
  {
    left: { minX: 358, minY: 357, maxX: 574, maxY: 567 },
    right: { minX: 668, minY: 359, maxX: 872, maxY: 561 },
    top: { minX: 522, minY: 93, maxX: 726, maxY: 303 },
  },
  {
    left: { minX: 359, minY: 358, maxX: 574, maxY: 567 },
    right: { minX: 668, minY: 360, maxX: 871, maxY: 561 },
    top: { minX: 523, minY: 96, maxX: 726, maxY: 305 },
  },
  {
    left: { minX: 364, minY: 359, maxX: 577, maxY: 567 },
    right: { minX: 670, minY: 361, maxX: 874, maxY: 562 },
    top: { minX: 526, minY: 98, maxX: 728, maxY: 306 },
  },
  {
    left: { minX: 367, minY: 360, maxX: 580, maxY: 568 },
    right: { minX: 673, minY: 363, maxX: 876, maxY: 563 },
    top: { minX: 529, minY: 100, maxX: 730, maxY: 307 },
  },
  {
    left: { minX: 369, minY: 360, maxX: 581, maxY: 567 },
    right: { minX: 674, minY: 362, maxX: 876, maxY: 562 },
    top: { minX: 531, minY: 100, maxX: 732, maxY: 307 },
  },
  {
    left: { minX: 371, minY: 361, maxX: 582, maxY: 568 },
    right: { minX: 674, minY: 363, maxX: 876, maxY: 563 },
    top: { minX: 531, minY: 102, maxX: 732, maxY: 308 },
  },
  {
    left: { minX: 372, minY: 362, maxX: 582, maxY: 569 },
    right: { minX: 675, minY: 365, maxX: 876, maxY: 563 },
    top: { minX: 532, minY: 105, maxX: 732, maxY: 310 },
  },
  {
    left: { minX: 372, minY: 363, maxX: 583, maxY: 569 },
    right: { minX: 675, minY: 365, maxX: 876, maxY: 564 },
    top: { minX: 533, minY: 106, maxX: 732, maxY: 310 },
  },
  {
    left: { minX: 373, minY: 363, maxX: 583, maxY: 568 },
    right: { minX: 675, minY: 365, maxX: 875, maxY: 563 },
    top: { minX: 532, minY: 106, maxX: 731, maxY: 310 },
  },
  {
    left: { minX: 374, minY: 363, maxX: 584, maxY: 568 },
    right: { minX: 675, minY: 366, maxX: 875, maxY: 563 },
    top: { minX: 533, minY: 108, maxX: 732, maxY: 311 },
  },
  {
    left: { minX: 377, minY: 363, maxX: 585, maxY: 567 },
    right: { minX: 677, minY: 365, maxX: 876, maxY: 562 },
    top: { minX: 535, minY: 108, maxX: 733, maxY: 311 },
  },
  {
    left: { minX: 376, minY: 364, maxX: 584, maxY: 568 },
    right: { minX: 675, minY: 367, maxX: 874, maxY: 563 },
    top: { minX: 535, minY: 109, maxX: 732, maxY: 312 },
  },
  {
    left: { minX: 374, minY: 364, maxX: 583, maxY: 568 },
    right: { minX: 674, minY: 367, maxX: 873, maxY: 563 },
    top: { minX: 534, minY: 110, maxX: 731, maxY: 312 },
  },
  {
    left: { minX: 372, minY: 365, maxX: 581, maxY: 570 },
    right: { minX: 672, minY: 367, maxX: 870, maxY: 564 },
    top: { minX: 531, minY: 112, maxX: 728, maxY: 313 },
  },
  {
    left: { minX: 372, minY: 367, maxX: 581, maxY: 571 },
    right: { minX: 672, minY: 369, maxX: 869, maxY: 565 },
    top: { minX: 531, minY: 114, maxX: 728, maxY: 315 },
  },
  {
    left: { minX: 372, minY: 367, maxX: 580, maxY: 571 },
    right: { minX: 671, minY: 370, maxX: 868, maxY: 565 },
    top: { minX: 531, minY: 115, maxX: 727, maxY: 316 },
  },
  {
    left: { minX: 373, minY: 368, maxX: 580, maxY: 572 },
    right: { minX: 671, minY: 370, maxX: 868, maxY: 565 },
    top: { minX: 531, minY: 117, maxX: 727, maxY: 316 },
  },
  {
    left: { minX: 375, minY: 369, maxX: 582, maxY: 572 },
    right: { minX: 672, minY: 371, maxX: 869, maxY: 565 },
    top: { minX: 533, minY: 118, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 382, minY: 367, maxX: 588, maxY: 569 },
    right: { minX: 677, minY: 371, maxX: 873, maxY: 564 },
    top: { minX: 539, minY: 118, maxX: 734, maxY: 316 },
  },
  {
    left: { minX: 385, minY: 366, maxX: 590, maxY: 567 },
    right: { minX: 679, minY: 369, maxX: 875, maxY: 563 },
    top: { minX: 542, minY: 117, maxX: 736, maxY: 315 },
  },
  {
    left: { minX: 386, minY: 367, maxX: 590, maxY: 568 },
    right: { minX: 678, minY: 370, maxX: 873, maxY: 562 },
    top: { minX: 542, minY: 120, maxX: 734, maxY: 317 },
  },
  {
    left: { minX: 387, minY: 368, maxX: 590, maxY: 568 },
    right: { minX: 679, minY: 371, maxX: 872, maxY: 563 },
    top: { minX: 543, minY: 121, maxX: 735, maxY: 318 },
  },
  {
    left: { minX: 389, minY: 369, maxX: 592, maxY: 568 },
    right: { minX: 680, minY: 373, maxX: 873, maxY: 563 },
    top: { minX: 545, minY: 123, maxX: 736, maxY: 319 },
  },
  {
    left: { minX: 392, minY: 369, maxX: 594, maxY: 568 },
    right: { minX: 682, minY: 373, maxX: 874, maxY: 563 },
    top: { minX: 547, minY: 125, maxX: 738, maxY: 320 },
  },
  {
    left: { minX: 394, minY: 368, maxX: 595, maxY: 566 },
    right: { minX: 683, minY: 373, maxX: 875, maxY: 562 },
    top: { minX: 549, minY: 125, maxX: 740, maxY: 319 },
  },
  {
    left: { minX: 399, minY: 365, maxX: 600, maxY: 563 },
    right: { minX: 687, minY: 370, maxX: 879, maxY: 559 },
    top: { minX: 553, minY: 121, maxX: 744, maxY: 316 },
  },
  {
    left: { minX: 404, minY: 363, maxX: 603, maxY: 560 },
    right: { minX: 690, minY: 367, maxX: 882, maxY: 556 },
    top: { minX: 557, minY: 119, maxX: 748, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 364, maxX: 605, maxY: 560 },
    right: { minX: 692, minY: 367, maxX: 884, maxY: 555 },
    top: { minX: 558, minY: 121, maxX: 748, maxY: 314 },
  },
  {
    left: { minX: 407, minY: 366, maxX: 605, maxY: 562 },
    right: { minX: 691, minY: 369, maxX: 882, maxY: 557 },
    top: { minX: 559, minY: 125, maxX: 747, maxY: 317 },
  },
  {
    left: { minX: 411, minY: 365, maxX: 608, maxY: 560 },
    right: { minX: 694, minY: 369, maxX: 884, maxY: 556 },
    top: { minX: 562, minY: 125, maxX: 750, maxY: 317 },
  },
  {
    left: { minX: 414, minY: 363, maxX: 610, maxY: 558 },
    right: { minX: 696, minY: 368, maxX: 886, maxY: 554 },
    top: { minX: 565, minY: 123, maxX: 753, maxY: 315 },
  },
  {
    left: { minX: 417, minY: 364, maxX: 612, maxY: 557 },
    right: { minX: 698, minY: 369, maxX: 886, maxY: 553 },
    top: { minX: 567, minY: 125, maxX: 754, maxY: 316 },
  },
  {
    left: { minX: 416, minY: 364, maxX: 610, maxY: 557 },
    right: { minX: 695, minY: 369, maxX: 882, maxY: 553 },
    top: { minX: 565, minY: 127, maxX: 752, maxY: 317 },
  },
  {
    left: { minX: 410, minY: 366, maxX: 605, maxY: 559 },
    right: { minX: 689, minY: 369, maxX: 875, maxY: 552 },
    top: { minX: 559, minY: 129, maxX: 744, maxY: 318 },
  },
  {
    left: { minX: 407, minY: 368, maxX: 601, maxY: 560 },
    right: { minX: 685, minY: 371, maxX: 870, maxY: 553 },
    top: { minX: 555, minY: 132, maxX: 739, maxY: 320 },
  },
  {
    left: { minX: 408, minY: 368, maxX: 602, maxY: 560 },
    right: { minX: 685, minY: 371, maxX: 869, maxY: 552 },
    top: { minX: 555, minY: 133, maxX: 739, maxY: 320 },
  },
  {
    left: { minX: 410, minY: 369, maxX: 603, maxY: 560 },
    right: { minX: 686, minY: 372, maxX: 869, maxY: 552 },
    top: { minX: 557, minY: 135, maxX: 740, maxY: 321 },
  },
  {
    left: { minX: 412, minY: 371, maxX: 604, maxY: 561 },
    right: { minX: 687, minY: 374, maxX: 869, maxY: 553 },
    top: { minX: 558, minY: 138, maxX: 740, maxY: 323 },
  },
  {
    left: { minX: 415, minY: 374, maxX: 605, maxY: 563 },
    right: { minX: 687, minY: 377, maxX: 868, maxY: 555 },
    top: { minX: 560, minY: 143, maxX: 741, maxY: 327 },
  },
  {
    left: { minX: 416, minY: 373, maxX: 606, maxY: 562 },
    right: { minX: 688, minY: 377, maxX: 868, maxY: 555 },
    top: { minX: 561, minY: 145, maxX: 741, maxY: 327 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 604, maxY: 560 },
    right: { minX: 686, minY: 375, maxX: 866, maxY: 553 },
    top: { minX: 559, minY: 143, maxX: 739, maxY: 325 },
  },
  {
    left: { minX: 414, minY: 373, maxX: 603, maxY: 561 },
    right: { minX: 684, minY: 377, maxX: 864, maxY: 553 },
    top: { minX: 559, minY: 145, maxX: 738, maxY: 326 },
  },
  {
    left: { minX: 412, minY: 373, maxX: 602, maxY: 560 },
    right: { minX: 683, minY: 377, maxX: 861, maxY: 553 },
    top: { minX: 558, minY: 145, maxX: 737, maxY: 327 },
  },
  {
    left: { minX: 414, minY: 372, maxX: 603, maxY: 559 },
    right: { minX: 684, minY: 376, maxX: 862, maxY: 552 },
    top: { minX: 560, minY: 145, maxX: 738, maxY: 326 },
  },
  {
    left: { minX: 418, minY: 371, maxX: 606, maxY: 557 },
    right: { minX: 686, minY: 376, maxX: 863, maxY: 551 },
    top: { minX: 563, minY: 145, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 418, minY: 371, maxX: 606, maxY: 557 },
    right: { minX: 685, minY: 376, maxX: 861, maxY: 549 },
    top: { minX: 563, minY: 146, maxX: 739, maxY: 325 },
  },
  {
    left: { minX: 421, minY: 371, maxX: 608, maxY: 556 },
    right: { minX: 687, minY: 375, maxX: 862, maxY: 548 },
    top: { minX: 564, minY: 147, maxX: 740, maxY: 326 },
  },
  {
    left: { minX: 423, minY: 371, maxX: 608, maxY: 555 },
    right: { minX: 687, minY: 375, maxX: 862, maxY: 547 },
    top: { minX: 565, minY: 148, maxX: 740, maxY: 326 },
  },
  {
    left: { minX: 424, minY: 371, maxX: 609, maxY: 555 },
    right: { minX: 687, minY: 375, maxX: 861, maxY: 546 },
    top: { minX: 565, minY: 149, maxX: 740, maxY: 326 },
  },
  {
    left: { minX: 425, minY: 372, maxX: 608, maxY: 555 },
    right: { minX: 686, minY: 375, maxX: 859, maxY: 546 },
    top: { minX: 565, minY: 151, maxX: 738, maxY: 327 },
  },
  {
    left: { minX: 427, minY: 372, maxX: 610, maxY: 554 },
    right: { minX: 688, minY: 376, maxX: 860, maxY: 546 },
    top: { minX: 567, minY: 152, maxX: 741, maxY: 327 },
  },
  {
    left: { minX: 428, minY: 373, maxX: 611, maxY: 554 },
    right: { minX: 688, minY: 377, maxX: 860, maxY: 547 },
    top: { minX: 568, minY: 153, maxX: 741, maxY: 329 },
  },
  {
    left: { minX: 428, minY: 374, maxX: 610, maxY: 555 },
    right: { minX: 688, minY: 379, maxX: 858, maxY: 547 },
    top: { minX: 568, minY: 156, maxX: 740, maxY: 330 },
  },
  {
    left: { minX: 429, minY: 375, maxX: 610, maxY: 556 },
    right: { minX: 687, minY: 379, maxX: 858, maxY: 547 },
    top: { minX: 568, minY: 157, maxX: 740, maxY: 330 },
  },
  {
    left: { minX: 428, minY: 377, maxX: 610, maxY: 557 },
    right: { minX: 686, minY: 381, maxX: 856, maxY: 549 },
    top: { minX: 568, minY: 160, maxX: 738, maxY: 333 },
  },
  {
    left: { minX: 429, minY: 376, maxX: 610, maxY: 556 },
    right: { minX: 686, minY: 380, maxX: 856, maxY: 548 },
    top: { minX: 567, minY: 159, maxX: 738, maxY: 332 },
  },
  {
    left: { minX: 429, minY: 376, maxX: 610, maxY: 556 },
    right: { minX: 686, minY: 380, maxX: 855, maxY: 548 },
    top: { minX: 568, minY: 160, maxX: 738, maxY: 332 },
  },
  {
    left: { minX: 430, minY: 375, maxX: 610, maxY: 555 },
    right: { minX: 687, minY: 379, maxX: 856, maxY: 546 },
    top: { minX: 568, minY: 159, maxX: 738, maxY: 331 },
  },
  {
    left: { minX: 432, minY: 376, maxX: 612, maxY: 555 },
    right: { minX: 687, minY: 379, maxX: 856, maxY: 546 },
    top: { minX: 569, minY: 160, maxX: 739, maxY: 332 },
  },
  {
    left: { minX: 433, minY: 377, maxX: 612, maxY: 556 },
    right: { minX: 688, minY: 381, maxX: 855, maxY: 547 },
    top: { minX: 571, minY: 163, maxX: 739, maxY: 334 },
  },
  {
    left: { minX: 433, minY: 378, maxX: 612, maxY: 555 },
    right: { minX: 687, minY: 381, maxX: 854, maxY: 546 },
    top: { minX: 569, minY: 163, maxX: 738, maxY: 334 },
  },
  {
    left: { minX: 435, minY: 376, maxX: 613, maxY: 553 },
    right: { minX: 688, minY: 379, maxX: 854, maxY: 544 },
    top: { minX: 570, minY: 162, maxX: 738, maxY: 332 },
  },
  {
    left: { minX: 433, minY: 375, maxX: 611, maxY: 552 },
    right: { minX: 685, minY: 378, maxX: 851, maxY: 541 },
    top: { minX: 568, minY: 161, maxX: 736, maxY: 331 },
  },
  {
    left: { minX: 434, minY: 374, maxX: 611, maxY: 550 },
    right: { minX: 685, minY: 377, maxX: 850, maxY: 540 },
    top: { minX: 568, minY: 161, maxX: 735, maxY: 331 },
  },
  {
    left: { minX: 436, minY: 374, maxX: 612, maxY: 550 },
    right: { minX: 686, minY: 378, maxX: 850, maxY: 540 },
    top: { minX: 570, minY: 163, maxX: 736, maxY: 331 },
  },
  {
    left: { minX: 433, minY: 375, maxX: 609, maxY: 550 },
    right: { minX: 682, minY: 379, maxX: 845, maxY: 541 },
    top: { minX: 568, minY: 165, maxX: 733, maxY: 332 },
  },
  {
    left: { minX: 432, minY: 375, maxX: 608, maxY: 549 },
    right: { minX: 680, minY: 379, maxX: 843, maxY: 539 },
    top: { minX: 567, minY: 165, maxX: 732, maxY: 332 },
  },
  {
    left: { minX: 427, minY: 375, maxX: 604, maxY: 549 },
    right: { minX: 675, minY: 379, maxX: 836, maxY: 538 },
    top: { minX: 562, minY: 166, maxX: 726, maxY: 332 },
  },
  {
    left: { minX: 425, minY: 374, maxX: 600, maxY: 548 },
    right: { minX: 672, minY: 378, maxX: 832, maxY: 537 },
    top: { minX: 559, minY: 166, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 429, minY: 373, maxX: 603, maxY: 546 },
    right: { minX: 674, minY: 378, maxX: 832, maxY: 536 },
    top: { minX: 562, minY: 167, maxX: 725, maxY: 332 },
  },
  {
    left: { minX: 426, minY: 373, maxX: 600, maxY: 545 },
    right: { minX: 670, minY: 378, maxX: 828, maxY: 535 },
    top: { minX: 559, minY: 168, maxX: 722, maxY: 332 },
  },
  {
    left: { minX: 423, minY: 373, maxX: 596, maxY: 545 },
    right: { minX: 666, minY: 377, maxX: 823, maxY: 533 },
    top: { minX: 555, minY: 168, maxX: 717, maxY: 331 },
  },
  {
    left: { minX: 418, minY: 374, maxX: 592, maxY: 546 },
    right: { minX: 662, minY: 377, maxX: 818, maxY: 533 },
    top: { minX: 551, minY: 169, maxX: 712, maxY: 332 },
  },
  {
    left: { minX: 415, minY: 377, maxX: 588, maxY: 548 },
    right: { minX: 657, minY: 380, maxX: 812, maxY: 534 },
    top: { minX: 546, minY: 174, maxX: 706, maxY: 335 },
  },
  {
    left: { minX: 415, minY: 376, maxX: 588, maxY: 546 },
    right: { minX: 657, minY: 379, maxX: 812, maxY: 533 },
    top: { minX: 547, minY: 173, maxX: 706, maxY: 334 },
  },
  {
    left: { minX: 418, minY: 375, maxX: 590, maxY: 545 },
    right: { minX: 659, minY: 379, maxX: 813, maxY: 532 },
    top: { minX: 549, minY: 173, maxX: 709, maxY: 333 },
  },
  {
    left: { minX: 421, minY: 372, maxX: 593, maxY: 541 },
    right: { minX: 662, minY: 376, maxX: 815, maxY: 529 },
    top: { minX: 552, minY: 170, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 424, minY: 373, maxX: 595, maxY: 542 },
    right: { minX: 663, minY: 377, maxX: 816, maxY: 530 },
    top: { minX: 555, minY: 173, maxX: 712, maxY: 333 },
  },
  {
    left: { minX: 424, minY: 374, maxX: 594, maxY: 542 },
    right: { minX: 662, minY: 377, maxX: 814, maxY: 529 },
    top: { minX: 553, minY: 174, maxX: 711, maxY: 333 },
  },
  {
    left: { minX: 424, minY: 373, maxX: 593, maxY: 541 },
    right: { minX: 661, minY: 377, maxX: 812, maxY: 528 },
    top: { minX: 553, minY: 174, maxX: 709, maxY: 332 },
  },
  {
    left: { minX: 424, minY: 373, maxX: 593, maxY: 540 },
    right: { minX: 660, minY: 376, maxX: 812, maxY: 526 },
    top: { minX: 552, minY: 174, maxX: 709, maxY: 332 },
  },
  {
    left: { minX: 427, minY: 370, maxX: 596, maxY: 537 },
    right: { minX: 662, minY: 374, maxX: 813, maxY: 524 },
    top: { minX: 554, minY: 171, maxX: 711, maxY: 330 },
  },
  {
    left: { minX: 431, minY: 370, maxX: 598, maxY: 536 },
    right: { minX: 664, minY: 374, maxX: 814, maxY: 523 },
    top: { minX: 557, minY: 173, maxX: 713, maxY: 330 },
  },
  {
    left: { minX: 432, minY: 371, maxX: 598, maxY: 536 },
    right: { minX: 664, minY: 374, maxX: 814, maxY: 523 },
    top: { minX: 557, minY: 174, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 432, minY: 371, maxX: 598, maxY: 536 },
    right: { minX: 664, minY: 375, maxX: 813, maxY: 523 },
    top: { minX: 557, minY: 175, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 434, minY: 370, maxX: 599, maxY: 534 },
    right: { minX: 665, minY: 374, maxX: 813, maxY: 521 },
    top: { minX: 559, minY: 175, maxX: 713, maxY: 331 },
  },
  {
    left: { minX: 434, minY: 370, maxX: 600, maxY: 534 },
    right: { minX: 665, minY: 374, maxX: 813, maxY: 521 },
    top: { minX: 559, minY: 175, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 433, minY: 368, maxX: 598, maxY: 531 },
    right: { minX: 663, minY: 371, maxX: 811, maxY: 518 },
    top: { minX: 557, minY: 173, maxX: 712, maxY: 328 },
  },
  {
    left: { minX: 433, minY: 368, maxX: 598, maxY: 531 },
    right: { minX: 662, minY: 371, maxX: 810, maxY: 518 },
    top: { minX: 557, minY: 173, maxX: 710, maxY: 328 },
  },
  {
    left: { minX: 434, minY: 367, maxX: 598, maxY: 530 },
    right: { minX: 663, minY: 370, maxX: 810, maxY: 516 },
    top: { minX: 557, minY: 173, maxX: 710, maxY: 327 },
  },
  {
    left: { minX: 436, minY: 367, maxX: 600, maxY: 529 },
    right: { minX: 664, minY: 371, maxX: 810, maxY: 516 },
    top: { minX: 559, minY: 173, maxX: 712, maxY: 328 },
  },
  {
    left: { minX: 436, minY: 367, maxX: 599, maxY: 529 },
    right: { minX: 663, minY: 371, maxX: 808, maxY: 516 },
    top: { minX: 559, minY: 175, maxX: 711, maxY: 328 },
  },
  {
    left: { minX: 435, minY: 365, maxX: 598, maxY: 526 },
    right: { minX: 661, minY: 368, maxX: 807, maxY: 513 },
    top: { minX: 557, minY: 171, maxX: 709, maxY: 326 },
  },
  {
    left: { minX: 436, minY: 366, maxX: 598, maxY: 527 },
    right: { minX: 662, minY: 369, maxX: 806, maxY: 514 },
    top: { minX: 558, minY: 174, maxX: 710, maxY: 327 },
  },
  {
    left: { minX: 435, minY: 367, maxX: 598, maxY: 527 },
    right: { minX: 661, minY: 370, maxX: 805, maxY: 514 },
    top: { minX: 558, minY: 175, maxX: 708, maxY: 328 },
  },
  {
    left: { minX: 435, minY: 367, maxX: 598, maxY: 528 },
    right: { minX: 660, minY: 371, maxX: 804, maxY: 514 },
    top: { minX: 557, minY: 177, maxX: 708, maxY: 329 },
  },
  {
    left: { minX: 436, minY: 369, maxX: 597, maxY: 529 },
    right: { minX: 660, minY: 372, maxX: 804, maxY: 515 },
    top: { minX: 557, minY: 179, maxX: 707, maxY: 330 },
  },
  {
    left: { minX: 437, minY: 368, maxX: 598, maxY: 527 },
    right: { minX: 661, minY: 371, maxX: 804, maxY: 514 },
    top: { minX: 558, minY: 178, maxX: 708, maxY: 329 },
  },
  {
    left: { minX: 439, minY: 366, maxX: 600, maxY: 525 },
    right: { minX: 662, minY: 369, maxX: 805, maxY: 511 },
    top: { minX: 559, minY: 175, maxX: 709, maxY: 327 },
  },
  {
    left: { minX: 441, minY: 366, maxX: 601, maxY: 525 },
    right: { minX: 662, minY: 369, maxX: 805, maxY: 511 },
    top: { minX: 560, minY: 177, maxX: 709, maxY: 327 },
  },
  {
    left: { minX: 444, minY: 367, maxX: 603, maxY: 525 },
    right: { minX: 664, minY: 370, maxX: 806, maxY: 512 },
    top: { minX: 563, minY: 179, maxX: 711, maxY: 329 },
  },
  {
    left: { minX: 444, minY: 367, maxX: 603, maxY: 525 },
    right: { minX: 664, minY: 371, maxX: 806, maxY: 512 },
    top: { minX: 563, minY: 180, maxX: 711, maxY: 329 },
  },
  {
    left: { minX: 446, minY: 367, maxX: 605, maxY: 525 },
    right: { minX: 665, minY: 371, maxX: 807, maxY: 512 },
    top: { minX: 565, minY: 181, maxX: 713, maxY: 330 },
  },
  {
    left: { minX: 447, minY: 366, maxX: 606, maxY: 523 },
    right: { minX: 666, minY: 369, maxX: 807, maxY: 510 },
    top: { minX: 566, minY: 179, maxX: 713, maxY: 328 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 607, maxY: 521 },
    right: { minX: 667, minY: 369, maxX: 808, maxY: 509 },
    top: { minX: 567, minY: 179, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 608, maxY: 521 },
    right: { minX: 668, minY: 370, maxX: 808, maxY: 509 },
    top: { minX: 569, minY: 181, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 452, minY: 365, maxX: 608, maxY: 521 },
    right: { minX: 668, minY: 369, maxX: 808, maxY: 508 },
    top: { minX: 569, minY: 180, maxX: 716, maxY: 328 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 608, maxY: 521 },
    right: { minX: 667, minY: 370, maxX: 807, maxY: 509 },
    top: { minX: 569, minY: 181, maxX: 715, maxY: 329 },
  },
  {
    left: { minX: 453, minY: 364, maxX: 609, maxY: 519 },
    right: { minX: 668, minY: 368, maxX: 807, maxY: 507 },
    top: { minX: 569, minY: 179, maxX: 716, maxY: 327 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 610, maxY: 517 },
    right: { minX: 669, minY: 367, maxX: 808, maxY: 505 },
    top: { minX: 571, minY: 179, maxX: 717, maxY: 326 },
  },
  {
    left: { minX: 458, minY: 363, maxX: 613, maxY: 517 },
    right: { minX: 671, minY: 367, maxX: 810, maxY: 505 },
    top: { minX: 574, minY: 179, maxX: 719, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 365, maxX: 615, maxY: 518 },
    right: { minX: 672, minY: 369, maxX: 811, maxY: 506 },
    top: { minX: 576, minY: 181, maxX: 721, maxY: 328 },
  },
  {
    left: { minX: 462, minY: 362, maxX: 616, maxY: 515 },
    right: { minX: 674, minY: 366, maxX: 812, maxY: 503 },
    top: { minX: 577, minY: 179, maxX: 722, maxY: 325 },
  },
  {
    left: { minX: 464, minY: 363, maxX: 618, maxY: 515 },
    right: { minX: 676, minY: 367, maxX: 814, maxY: 504 },
    top: { minX: 579, minY: 180, maxX: 724, maxY: 326 },
  },
  {
    left: { minX: 465, minY: 364, maxX: 619, maxY: 516 },
    right: { minX: 676, minY: 368, maxX: 814, maxY: 504 },
    top: { minX: 580, minY: 182, maxX: 724, maxY: 327 },
  },
  {
    left: { minX: 467, minY: 365, maxX: 620, maxY: 517 },
    right: { minX: 677, minY: 369, maxX: 816, maxY: 505 },
    top: { minX: 580, minY: 183, maxX: 724, maxY: 328 },
  },
  {
    left: { minX: 471, minY: 367, maxX: 624, maxY: 519 },
    right: { minX: 681, minY: 370, maxX: 819, maxY: 507 },
    top: { minX: 583, minY: 185, maxX: 728, maxY: 330 },
  },
  {
    left: { minX: 477, minY: 367, maxX: 629, maxY: 519 },
    right: { minX: 686, minY: 370, maxX: 825, maxY: 507 },
    top: { minX: 590, minY: 185, maxX: 733, maxY: 330 },
  },
  {
    left: { minX: 477, minY: 368, maxX: 629, maxY: 520 },
    right: { minX: 687, minY: 371, maxX: 825, maxY: 508 },
    top: { minX: 589, minY: 187, maxX: 733, maxY: 331 },
  },
  {
    left: { minX: 477, minY: 368, maxX: 629, maxY: 519 },
    right: { minX: 687, minY: 371, maxX: 825, maxY: 507 },
    top: { minX: 589, minY: 186, maxX: 733, maxY: 331 },
  },
  {
    left: { minX: 475, minY: 369, maxX: 627, maxY: 520 },
    right: { minX: 685, minY: 370, maxX: 824, maxY: 507 },
    top: { minX: 587, minY: 186, maxX: 731, maxY: 331 },
  },
  {
    left: { minX: 475, minY: 370, maxX: 627, maxY: 522 },
    right: { minX: 685, minY: 373, maxX: 824, maxY: 509 },
    top: { minX: 587, minY: 189, maxX: 730, maxY: 333 },
  },
  {
    left: { minX: 473, minY: 372, maxX: 625, maxY: 523 },
    right: { minX: 683, minY: 374, maxX: 822, maxY: 511 },
    top: { minX: 585, minY: 190, maxX: 728, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 371, maxX: 624, maxY: 523 },
    right: { minX: 683, minY: 373, maxX: 822, maxY: 510 },
    top: { minX: 585, minY: 189, maxX: 728, maxY: 334 },
  },
  {
    left: { minX: 472, minY: 370, maxX: 624, maxY: 522 },
    right: { minX: 683, minY: 373, maxX: 822, maxY: 510 },
    top: { minX: 585, minY: 188, maxX: 728, maxY: 333 },
  },
  {
    left: { minX: 471, minY: 371, maxX: 624, maxY: 523 },
    right: { minX: 682, minY: 373, maxX: 822, maxY: 511 },
    top: { minX: 585, minY: 189, maxX: 728, maxY: 333 },
  },
  {
    left: { minX: 471, minY: 371, maxX: 624, maxY: 523 },
    right: { minX: 682, minY: 373, maxX: 822, maxY: 511 },
    top: { minX: 584, minY: 189, maxX: 728, maxY: 334 },
  },
  {
    left: { minX: 468, minY: 371, maxX: 621, maxY: 523 },
    right: { minX: 680, minY: 373, maxX: 820, maxY: 511 },
    top: { minX: 581, minY: 189, maxX: 726, maxY: 334 },
  },
  {
    left: { minX: 466, minY: 372, maxX: 619, maxY: 524 },
    right: { minX: 679, minY: 374, maxX: 818, maxY: 512 },
    top: { minX: 580, minY: 189, maxX: 724, maxY: 334 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 616, maxY: 525 },
    right: { minX: 676, minY: 374, maxX: 815, maxY: 513 },
    top: { minX: 576, minY: 189, maxX: 720, maxY: 335 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 613, maxY: 524 },
    right: { minX: 674, minY: 374, maxX: 813, maxY: 512 },
    top: { minX: 573, minY: 189, maxX: 718, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 612, maxY: 525 },
    right: { minX: 672, minY: 374, maxX: 812, maxY: 513 },
    top: { minX: 573, minY: 189, maxX: 718, maxY: 334 },
  },
  {
    left: { minX: 455, minY: 373, maxX: 609, maxY: 526 },
    right: { minX: 670, minY: 375, maxX: 810, maxY: 514 },
    top: { minX: 569, minY: 190, maxX: 714, maxY: 335 },
  },
  {
    left: { minX: 453, minY: 373, maxX: 607, maxY: 526 },
    right: { minX: 668, minY: 375, maxX: 808, maxY: 514 },
    top: { minX: 568, minY: 190, maxX: 712, maxY: 335 },
  },
  {
    left: { minX: 454, minY: 373, maxX: 608, maxY: 526 },
    right: { minX: 669, minY: 376, maxX: 808, maxY: 514 },
    top: { minX: 569, minY: 190, maxX: 713, maxY: 335 },
  },
  {
    left: { minX: 455, minY: 374, maxX: 608, maxY: 527 },
    right: { minX: 669, minY: 377, maxX: 809, maxY: 516 },
    top: { minX: 570, minY: 191, maxX: 714, maxY: 337 },
  },
  {
    left: { minX: 457, minY: 375, maxX: 610, maxY: 527 },
    right: { minX: 671, minY: 378, maxX: 811, maxY: 517 },
    top: { minX: 572, minY: 192, maxX: 716, maxY: 338 },
  },
  {
    left: { minX: 459, minY: 377, maxX: 612, maxY: 529 },
    right: { minX: 674, minY: 379, maxX: 814, maxY: 519 },
    top: { minX: 573, minY: 195, maxX: 718, maxY: 340 },
  },
  {
    left: { minX: 459, minY: 378, maxX: 612, maxY: 530 },
    right: { minX: 674, minY: 381, maxX: 814, maxY: 520 },
    top: { minX: 574, minY: 196, maxX: 718, maxY: 341 },
  },
  {
    left: { minX: 460, minY: 379, maxX: 612, maxY: 530 },
    right: { minX: 674, minY: 381, maxX: 815, maxY: 521 },
    top: { minX: 575, minY: 196, maxX: 718, maxY: 341 },
  },
  {
    left: { minX: 461, minY: 377, maxX: 614, maxY: 529 },
    right: { minX: 676, minY: 380, maxX: 818, maxY: 520 },
    top: { minX: 576, minY: 195, maxX: 721, maxY: 340 },
  },
  {
    left: { minX: 462, minY: 379, maxX: 614, maxY: 530 },
    right: { minX: 677, minY: 381, maxX: 818, maxY: 521 },
    top: { minX: 577, minY: 196, maxX: 721, maxY: 341 },
  },
  {
    left: { minX: 462, minY: 379, maxX: 614, maxY: 531 },
    right: { minX: 677, minY: 381, maxX: 818, maxY: 521 },
    top: { minX: 577, minY: 196, maxX: 721, maxY: 341 },
  },
  {
    left: { minX: 462, minY: 379, maxX: 614, maxY: 531 },
    right: { minX: 677, minY: 382, maxX: 818, maxY: 522 },
    top: { minX: 577, minY: 197, maxX: 721, maxY: 342 },
  },
  {
    left: { minX: 463, minY: 379, maxX: 616, maxY: 531 },
    right: { minX: 678, minY: 382, maxX: 820, maxY: 523 },
    top: { minX: 579, minY: 197, maxX: 722, maxY: 342 },
  },
  {
    left: { minX: 464, minY: 380, maxX: 616, maxY: 532 },
    right: { minX: 680, minY: 383, maxX: 822, maxY: 524 },
    top: { minX: 579, minY: 197, maxX: 724, maxY: 342 },
  },
  {
    left: { minX: 467, minY: 381, maxX: 619, maxY: 532 },
    right: { minX: 682, minY: 383, maxX: 825, maxY: 525 },
    top: { minX: 582, minY: 198, maxX: 726, maxY: 343 },
  },
  {
    left: { minX: 468, minY: 381, maxX: 619, maxY: 532 },
    right: { minX: 683, minY: 383, maxX: 826, maxY: 525 },
    top: { minX: 582, minY: 197, maxX: 726, maxY: 343 },
  },
  {
    left: { minX: 469, minY: 381, maxX: 620, maxY: 532 },
    right: { minX: 684, minY: 384, maxX: 827, maxY: 525 },
    top: { minX: 583, minY: 198, maxX: 728, maxY: 343 },
  },
  {
    left: { minX: 467, minY: 381, maxX: 618, maxY: 532 },
    right: { minX: 683, minY: 384, maxX: 826, maxY: 526 },
    top: { minX: 582, minY: 197, maxX: 727, maxY: 343 },
  },
  {
    left: { minX: 463, minY: 380, maxX: 616, maxY: 532 },
    right: { minX: 680, minY: 383, maxX: 823, maxY: 525 },
    top: { minX: 579, minY: 196, maxX: 724, maxY: 342 },
  },
  {
    left: { minX: 459, minY: 381, maxX: 611, maxY: 532 },
    right: { minX: 676, minY: 383, maxX: 820, maxY: 525 },
    top: { minX: 574, minY: 196, maxX: 720, maxY: 343 },
  },
  {
    left: { minX: 458, minY: 382, maxX: 611, maxY: 533 },
    right: { minX: 676, minY: 385, maxX: 819, maxY: 527 },
    top: { minX: 575, minY: 198, maxX: 720, maxY: 344 },
  },
  {
    left: { minX: 458, minY: 383, maxX: 610, maxY: 534 },
    right: { minX: 676, minY: 385, maxX: 820, maxY: 528 },
    top: { minX: 573, minY: 199, maxX: 718, maxY: 344 },
  },
  {
    left: { minX: 465, minY: 383, maxX: 616, maxY: 535 },
    right: { minX: 682, minY: 384, maxX: 826, maxY: 527 },
    top: { minX: 578, minY: 199, maxX: 724, maxY: 345 },
  },
  {
    left: { minX: 483, minY: 385, maxX: 633, maxY: 535 },
    right: { minX: 698, minY: 386, maxX: 844, maxY: 530 },
    top: { minX: 595, minY: 201, maxX: 741, maxY: 346 },
  },
  {
    left: { minX: 490, minY: 385, maxX: 640, maxY: 535 },
    right: { minX: 705, minY: 386, maxX: 852, maxY: 530 },
    top: { minX: 602, minY: 201, maxX: 748, maxY: 346 },
  },
  {
    left: { minX: 491, minY: 384, maxX: 640, maxY: 534 },
    right: { minX: 706, minY: 385, maxX: 852, maxY: 529 },
    top: { minX: 603, minY: 199, maxX: 748, maxY: 345 },
  },
  {
    left: { minX: 491, minY: 381, maxX: 641, maxY: 532 },
    right: { minX: 707, minY: 383, maxX: 854, maxY: 528 },
    top: { minX: 605, minY: 197, maxX: 750, maxY: 343 },
  },
  {
    left: { minX: 488, minY: 379, maxX: 638, maxY: 530 },
    right: { minX: 705, minY: 381, maxX: 852, maxY: 526 },
    top: { minX: 601, minY: 194, maxX: 748, maxY: 341 },
  },
  {
    left: { minX: 486, minY: 379, maxX: 636, maxY: 530 },
    right: { minX: 703, minY: 381, maxX: 850, maxY: 526 },
    top: { minX: 599, minY: 193, maxX: 746, maxY: 341 },
  },
  {
    left: { minX: 482, minY: 379, maxX: 632, maxY: 530 },
    right: { minX: 699, minY: 381, maxX: 846, maxY: 525 },
    top: { minX: 596, minY: 193, maxX: 742, maxY: 340 },
  },
  {
    left: { minX: 477, minY: 378, maxX: 628, maxY: 529 },
    right: { minX: 695, minY: 381, maxX: 842, maxY: 526 },
    top: { minX: 592, minY: 193, maxX: 738, maxY: 340 },
  },
  {
    left: { minX: 475, minY: 378, maxX: 626, maxY: 529 },
    right: { minX: 693, minY: 380, maxX: 840, maxY: 525 },
    top: { minX: 589, minY: 192, maxX: 736, maxY: 339 },
  },
  {
    left: { minX: 474, minY: 377, maxX: 625, maxY: 528 },
    right: { minX: 692, minY: 379, maxX: 839, maxY: 525 },
    top: { minX: 589, minY: 191, maxX: 736, maxY: 338 },
  },
  {
    left: { minX: 475, minY: 377, maxX: 626, maxY: 528 },
    right: { minX: 693, minY: 380, maxX: 840, maxY: 526 },
    top: { minX: 590, minY: 191, maxX: 737, maxY: 339 },
  },
  {
    left: { minX: 471, minY: 377, maxX: 623, maxY: 528 },
    right: { minX: 690, minY: 380, maxX: 838, maxY: 526 },
    top: { minX: 587, minY: 191, maxX: 734, maxY: 339 },
  },
  {
    left: { minX: 469, minY: 378, maxX: 620, maxY: 529 },
    right: { minX: 687, minY: 381, maxX: 835, maxY: 527 },
    top: { minX: 584, minY: 192, maxX: 731, maxY: 340 },
  },
  {
    left: { minX: 470, minY: 378, maxX: 621, maxY: 529 },
    right: { minX: 689, minY: 381, maxX: 836, maxY: 527 },
    top: { minX: 585, minY: 192, maxX: 732, maxY: 340 },
  },
  {
    left: { minX: 470, minY: 377, maxX: 621, maxY: 528 },
    right: { minX: 689, minY: 380, maxX: 837, maxY: 526 },
    top: { minX: 585, minY: 191, maxX: 732, maxY: 339 },
  },
  {
    left: { minX: 469, minY: 375, maxX: 621, maxY: 527 },
    right: { minX: 689, minY: 379, maxX: 837, maxY: 525 },
    top: { minX: 585, minY: 189, maxX: 732, maxY: 337 },
  },
  {
    left: { minX: 467, minY: 375, maxX: 619, maxY: 527 },
    right: { minX: 687, minY: 378, maxX: 836, maxY: 525 },
    top: { minX: 583, minY: 189, maxX: 730, maxY: 337 },
  },
  {
    left: { minX: 465, minY: 376, maxX: 617, maxY: 527 },
    right: { minX: 685, minY: 379, maxX: 834, maxY: 526 },
    top: { minX: 581, minY: 189, maxX: 729, maxY: 338 },
  },
  {
    left: { minX: 460, minY: 374, maxX: 613, maxY: 526 },
    right: { minX: 681, minY: 378, maxX: 830, maxY: 525 },
    top: { minX: 577, minY: 187, maxX: 725, maxY: 336 },
  },
  {
    left: { minX: 457, minY: 372, maxX: 610, maxY: 524 },
    right: { minX: 679, minY: 376, maxX: 828, maxY: 523 },
    top: { minX: 575, minY: 184, maxX: 724, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 612, maxY: 523 },
    right: { minX: 680, minY: 377, maxX: 829, maxY: 524 },
    top: { minX: 577, minY: 184, maxX: 725, maxY: 334 },
  },
  {
    left: { minX: 459, minY: 372, maxX: 611, maxY: 523 },
    right: { minX: 679, minY: 377, maxX: 829, maxY: 525 },
    top: { minX: 577, minY: 184, maxX: 726, maxY: 334 },
  },
  {
    left: { minX: 457, minY: 373, maxX: 609, maxY: 524 },
    right: { minX: 678, minY: 377, maxX: 827, maxY: 526 },
    top: { minX: 575, minY: 185, maxX: 724, maxY: 335 },
  },
  {
    left: { minX: 455, minY: 373, maxX: 608, maxY: 524 },
    right: { minX: 677, minY: 378, maxX: 826, maxY: 526 },
    top: { minX: 573, minY: 185, maxX: 722, maxY: 335 },
  },
  {
    left: { minX: 456, minY: 375, maxX: 608, maxY: 526 },
    right: { minX: 677, minY: 379, maxX: 826, maxY: 527 },
    top: { minX: 573, minY: 187, maxX: 721, maxY: 337 },
  },
  {
    left: { minX: 456, minY: 375, maxX: 608, maxY: 527 },
    right: { minX: 677, minY: 379, maxX: 826, maxY: 527 },
    top: { minX: 573, minY: 188, maxX: 721, maxY: 337 },
  },
  {
    left: { minX: 458, minY: 377, maxX: 610, maxY: 528 },
    right: { minX: 678, minY: 380, maxX: 827, maxY: 528 },
    top: { minX: 573, minY: 189, maxX: 722, maxY: 339 },
  },
  {
    left: { minX: 463, minY: 376, maxX: 614, maxY: 527 },
    right: { minX: 683, minY: 379, maxX: 832, maxY: 527 },
    top: { minX: 577, minY: 188, maxX: 726, maxY: 337 },
  },
  {
    left: { minX: 468, minY: 375, maxX: 619, maxY: 526 },
    right: { minX: 688, minY: 378, maxX: 838, maxY: 527 },
    top: { minX: 583, minY: 187, maxX: 730, maxY: 337 },
  },
  {
    left: { minX: 474, minY: 374, maxX: 625, maxY: 524 },
    right: { minX: 694, minY: 375, maxX: 845, maxY: 525 },
    top: { minX: 587, minY: 185, maxX: 736, maxY: 334 },
  },
  {
    left: { minX: 476, minY: 372, maxX: 627, maxY: 523 },
    right: { minX: 696, minY: 373, maxX: 848, maxY: 523 },
    top: { minX: 589, minY: 182, maxX: 738, maxY: 332 },
  },
  {
    left: { minX: 479, minY: 372, maxX: 630, maxY: 522 },
    right: { minX: 699, minY: 372, maxX: 851, maxY: 522 },
    top: { minX: 591, minY: 181, maxX: 741, maxY: 332 },
  },
  {
    left: { minX: 481, minY: 371, maxX: 632, maxY: 522 },
    right: { minX: 701, minY: 371, maxX: 854, maxY: 522 },
    top: { minX: 593, minY: 181, maxX: 743, maxY: 331 },
  },
  {
    left: { minX: 480, minY: 371, maxX: 631, maxY: 521 },
    right: { minX: 700, minY: 371, maxX: 852, maxY: 521 },
    top: { minX: 592, minY: 180, maxX: 742, maxY: 331 },
  },
  {
    left: { minX: 470, minY: 369, maxX: 622, maxY: 520 },
    right: { minX: 691, minY: 371, maxX: 843, maxY: 521 },
    top: { minX: 584, minY: 179, maxX: 733, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 369, maxX: 619, maxY: 519 },
    right: { minX: 688, minY: 370, maxX: 840, maxY: 520 },
    top: { minX: 581, minY: 178, maxX: 731, maxY: 329 },
  },
  {
    left: { minX: 465, minY: 369, maxX: 616, maxY: 519 },
    right: { minX: 685, minY: 370, maxX: 838, maxY: 519 },
    top: { minX: 579, minY: 178, maxX: 728, maxY: 329 },
  },
  {
    left: { minX: 465, minY: 370, maxX: 616, maxY: 520 },
    right: { minX: 685, minY: 371, maxX: 837, maxY: 521 },
    top: { minX: 578, minY: 179, maxX: 727, maxY: 330 },
  },
  {
    left: { minX: 466, minY: 371, maxX: 616, maxY: 521 },
    right: { minX: 685, minY: 372, maxX: 837, maxY: 522 },
    top: { minX: 578, minY: 181, maxX: 727, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 370, maxX: 616, maxY: 520 },
    right: { minX: 684, minY: 371, maxX: 836, maxY: 521 },
    top: { minX: 577, minY: 180, maxX: 726, maxY: 330 },
  },
  {
    left: { minX: 464, minY: 369, maxX: 615, maxY: 519 },
    right: { minX: 684, minY: 369, maxX: 836, maxY: 519 },
    top: { minX: 577, minY: 177, maxX: 726, maxY: 329 },
  },
  {
    left: { minX: 465, minY: 369, maxX: 616, maxY: 519 },
    right: { minX: 685, minY: 370, maxX: 837, maxY: 520 },
    top: { minX: 577, minY: 179, maxX: 727, maxY: 329 },
  },
  {
    left: { minX: 463, minY: 371, maxX: 614, maxY: 520 },
    right: { minX: 683, minY: 371, maxX: 835, maxY: 521 },
    top: { minX: 575, minY: 180, maxX: 724, maxY: 331 },
  },
  {
    left: { minX: 461, minY: 372, maxX: 611, maxY: 521 },
    right: { minX: 680, minY: 372, maxX: 832, maxY: 522 },
    top: { minX: 572, minY: 181, maxX: 721, maxY: 332 },
  },
  {
    left: { minX: 459, minY: 373, maxX: 609, maxY: 522 },
    right: { minX: 678, minY: 373, maxX: 830, maxY: 523 },
    top: { minX: 570, minY: 183, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 459, minY: 373, maxX: 609, maxY: 522 },
    right: { minX: 677, minY: 373, maxX: 829, maxY: 523 },
    top: { minX: 569, minY: 183, maxX: 718, maxY: 333 },
  },
  {
    left: { minX: 459, minY: 373, maxX: 609, maxY: 522 },
    right: { minX: 677, minY: 372, maxX: 830, maxY: 523 },
    top: { minX: 570, minY: 182, maxX: 718, maxY: 332 },
  },
  {
    left: { minX: 456, minY: 373, maxX: 606, maxY: 522 },
    right: { minX: 675, minY: 373, maxX: 826, maxY: 523 },
    top: { minX: 567, minY: 183, maxX: 715, maxY: 333 },
  },
  {
    left: { minX: 452, minY: 371, maxX: 602, maxY: 520 },
    right: { minX: 671, minY: 371, maxX: 823, maxY: 521 },
    top: { minX: 563, minY: 181, maxX: 712, maxY: 331 },
  },
  {
    left: { minX: 447, minY: 371, maxX: 598, maxY: 520 },
    right: { minX: 666, minY: 371, maxX: 818, maxY: 521 },
    top: { minX: 558, minY: 180, maxX: 706, maxY: 330 },
  },
  {
    left: { minX: 443, minY: 370, maxX: 594, maxY: 519 },
    right: { minX: 663, minY: 369, maxX: 814, maxY: 520 },
    top: { minX: 555, minY: 179, maxX: 704, maxY: 329 },
  },
  {
    left: { minX: 445, minY: 369, maxX: 596, maxY: 518 },
    right: { minX: 664, minY: 370, maxX: 816, maxY: 521 },
    top: { minX: 557, minY: 179, maxX: 706, maxY: 329 },
  },
  {
    left: { minX: 446, minY: 371, maxX: 596, maxY: 520 },
    right: { minX: 664, minY: 373, maxX: 816, maxY: 523 },
    top: { minX: 557, minY: 181, maxX: 706, maxY: 332 },
  },
  {
    left: { minX: 445, minY: 372, maxX: 595, maxY: 520 },
    right: { minX: 663, minY: 374, maxX: 814, maxY: 524 },
    top: { minX: 557, minY: 183, maxX: 705, maxY: 333 },
  },
  {
    left: { minX: 445, minY: 372, maxX: 595, maxY: 520 },
    right: { minX: 663, minY: 373, maxX: 814, maxY: 523 },
    top: { minX: 556, minY: 183, maxX: 704, maxY: 332 },
  },
  {
    left: { minX: 444, minY: 371, maxX: 594, maxY: 519 },
    right: { minX: 661, minY: 373, maxX: 813, maxY: 524 },
    top: { minX: 555, minY: 182, maxX: 704, maxY: 332 },
  },
  {
    left: { minX: 439, minY: 370, maxX: 590, maxY: 518 },
    right: { minX: 657, minY: 371, maxX: 809, maxY: 522 },
    top: { minX: 551, minY: 180, maxX: 700, maxY: 330 },
  },
  {
    left: { minX: 436, minY: 369, maxX: 586, maxY: 517 },
    right: { minX: 654, minY: 370, maxX: 806, maxY: 521 },
    top: { minX: 547, minY: 179, maxX: 696, maxY: 329 },
  },
  {
    left: { minX: 435, minY: 368, maxX: 585, maxY: 516 },
    right: { minX: 653, minY: 369, maxX: 804, maxY: 519 },
    top: { minX: 545, minY: 177, maxX: 695, maxY: 328 },
  },
  {
    left: { minX: 436, minY: 368, maxX: 586, maxY: 515 },
    right: { minX: 653, minY: 368, maxX: 805, maxY: 519 },
    top: { minX: 546, minY: 177, maxX: 694, maxY: 328 },
  },
  {
    left: { minX: 440, minY: 371, maxX: 589, maxY: 518 },
    right: { minX: 656, minY: 371, maxX: 807, maxY: 521 },
    top: { minX: 549, minY: 181, maxX: 696, maxY: 331 },
  },
  {
    left: { minX: 446, minY: 369, maxX: 594, maxY: 516 },
    right: { minX: 661, minY: 369, maxX: 814, maxY: 520 },
    top: { minX: 553, minY: 179, maxX: 702, maxY: 329 },
  },
  {
    left: { minX: 455, minY: 367, maxX: 603, maxY: 513 },
    right: { minX: 669, minY: 367, maxX: 823, maxY: 519 },
    top: { minX: 562, minY: 177, maxX: 711, maxY: 327 },
  },
  {
    left: { minX: 462, minY: 367, maxX: 609, maxY: 513 },
    right: { minX: 676, minY: 367, maxX: 830, maxY: 519 },
    top: { minX: 569, minY: 177, maxX: 717, maxY: 327 },
  },
  {
    left: { minX: 465, minY: 366, maxX: 612, maxY: 511 },
    right: { minX: 679, minY: 365, maxX: 833, maxY: 517 },
    top: { minX: 571, minY: 175, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 466, minY: 365, maxX: 613, maxY: 511 },
    right: { minX: 680, minY: 364, maxX: 834, maxY: 517 },
    top: { minX: 572, minY: 173, maxX: 721, maxY: 324 },
  },
  {
    left: { minX: 467, minY: 363, maxX: 614, maxY: 509 },
    right: { minX: 681, minY: 363, maxX: 836, maxY: 516 },
    top: { minX: 573, minY: 172, maxX: 723, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 363, maxX: 616, maxY: 508 },
    right: { minX: 683, minY: 363, maxX: 838, maxY: 515 },
    top: { minX: 575, minY: 171, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 616, maxY: 508 },
    right: { minX: 683, minY: 362, maxX: 838, maxY: 515 },
    top: { minX: 576, minY: 171, maxX: 725, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 616, maxY: 508 },
    right: { minX: 682, minY: 363, maxX: 838, maxY: 516 },
    top: { minX: 575, minY: 171, maxX: 725, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 616, maxY: 507 },
    right: { minX: 682, minY: 362, maxX: 837, maxY: 515 },
    top: { minX: 575, minY: 171, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 472, minY: 364, maxX: 618, maxY: 509 },
    right: { minX: 683, minY: 363, maxX: 839, maxY: 516 },
    top: { minX: 576, minY: 173, maxX: 726, maxY: 324 },
  },
  {
    left: { minX: 472, minY: 364, maxX: 617, maxY: 508 },
    right: { minX: 683, minY: 363, maxX: 838, maxY: 516 },
    top: { minX: 576, minY: 173, maxX: 724, maxY: 323 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 615, maxY: 506 },
    right: { minX: 680, minY: 361, maxX: 835, maxY: 515 },
    top: { minX: 573, minY: 171, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 362, maxX: 614, maxY: 506 },
    right: { minX: 679, minY: 361, maxX: 834, maxY: 514 },
    top: { minX: 573, minY: 171, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 467, minY: 363, maxX: 612, maxY: 507 },
    right: { minX: 677, minY: 362, maxX: 832, maxY: 515 },
    top: { minX: 571, minY: 172, maxX: 719, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 362, maxX: 611, maxY: 506 },
    right: { minX: 676, minY: 362, maxX: 830, maxY: 515 },
    top: { minX: 571, minY: 172, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 364, maxX: 611, maxY: 507 },
    right: { minX: 675, minY: 363, maxX: 829, maxY: 516 },
    top: { minX: 569, minY: 174, maxX: 717, maxY: 324 },
  },
  {
    left: { minX: 465, minY: 364, maxX: 610, maxY: 507 },
    right: { minX: 673, minY: 364, maxX: 828, maxY: 516 },
    top: { minX: 568, minY: 175, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 464, minY: 364, maxX: 608, maxY: 507 },
    right: { minX: 672, minY: 364, maxX: 826, maxY: 517 },
    top: { minX: 567, minY: 175, maxX: 714, maxY: 324 },
  },
  {
    left: { minX: 464, minY: 366, maxX: 608, maxY: 509 },
    right: { minX: 671, minY: 365, maxX: 825, maxY: 517 },
    top: { minX: 566, minY: 178, maxX: 713, maxY: 326 },
  },
  {
    left: { minX: 460, minY: 366, maxX: 604, maxY: 508 },
    right: { minX: 667, minY: 365, maxX: 820, maxY: 516 },
    top: { minX: 561, minY: 177, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 460, minY: 364, maxX: 604, maxY: 506 },
    right: { minX: 667, minY: 363, maxX: 820, maxY: 515 },
    top: { minX: 561, minY: 175, maxX: 709, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 365, maxX: 602, maxY: 507 },
    right: { minX: 665, minY: 364, maxX: 818, maxY: 516 },
    top: { minX: 560, minY: 176, maxX: 706, maxY: 324 },
  },
  {
    left: { minX: 459, minY: 364, maxX: 603, maxY: 506 },
    right: { minX: 665, minY: 364, maxX: 818, maxY: 516 },
    top: { minX: 561, minY: 176, maxX: 707, maxY: 325 },
  },
  {
    left: { minX: 461, minY: 365, maxX: 604, maxY: 506 },
    right: { minX: 666, minY: 364, maxX: 820, maxY: 516 },
    top: { minX: 562, minY: 177, maxX: 708, maxY: 325 },
  },
  {
    left: { minX: 465, minY: 365, maxX: 607, maxY: 506 },
    right: { minX: 669, minY: 363, maxX: 823, maxY: 516 },
    top: { minX: 565, minY: 177, maxX: 711, maxY: 325 },
  },
  {
    left: { minX: 466, minY: 365, maxX: 609, maxY: 506 },
    right: { minX: 671, minY: 363, maxX: 824, maxY: 515 },
    top: { minX: 566, minY: 177, maxX: 712, maxY: 325 },
  },
  {
    left: { minX: 469, minY: 363, maxX: 612, maxY: 504 },
    right: { minX: 674, minY: 361, maxX: 828, maxY: 513 },
    top: { minX: 568, minY: 173, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 472, minY: 360, maxX: 615, maxY: 501 },
    right: { minX: 677, minY: 358, maxX: 832, maxY: 511 },
    top: { minX: 571, minY: 170, maxX: 718, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 614, maxY: 501 },
    right: { minX: 675, minY: 357, maxX: 830, maxY: 510 },
    top: { minX: 569, minY: 170, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 360, maxX: 614, maxY: 501 },
    right: { minX: 675, minY: 357, maxX: 829, maxY: 510 },
    top: { minX: 569, minY: 171, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 360, maxX: 613, maxY: 500 },
    right: { minX: 674, minY: 357, maxX: 828, maxY: 510 },
    top: { minX: 569, minY: 170, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 360, maxX: 613, maxY: 500 },
    right: { minX: 673, minY: 357, maxX: 828, maxY: 509 },
    top: { minX: 569, minY: 170, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 470, minY: 359, maxX: 612, maxY: 499 },
    right: { minX: 672, minY: 355, maxX: 826, maxY: 508 },
    top: { minX: 566, minY: 169, maxX: 713, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 613, maxY: 499 },
    right: { minX: 673, minY: 357, maxX: 827, maxY: 509 },
    top: { minX: 568, minY: 171, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 475, minY: 358, maxX: 615, maxY: 498 },
    right: { minX: 675, minY: 357, maxX: 829, maxY: 509 },
    top: { minX: 571, minY: 170, maxX: 717, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 359, maxX: 613, maxY: 497 },
    right: { minX: 673, minY: 357, maxX: 827, maxY: 509 },
    top: { minX: 569, minY: 171, maxX: 716, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 611, maxY: 498 },
    right: { minX: 670, minY: 359, maxX: 823, maxY: 510 },
    top: { minX: 567, minY: 173, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 467, minY: 361, maxX: 607, maxY: 499 },
    right: { minX: 665, minY: 359, maxX: 818, maxY: 511 },
    top: { minX: 563, minY: 175, maxX: 708, maxY: 321 },
  },
  {
    left: { minX: 460, minY: 363, maxX: 600, maxY: 501 },
    right: { minX: 657, minY: 362, maxX: 808, maxY: 512 },
    top: { minX: 555, minY: 178, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 454, minY: 363, maxX: 594, maxY: 500 },
    right: { minX: 651, minY: 362, maxX: 802, maxY: 512 },
    top: { minX: 550, minY: 178, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 592, maxY: 501 },
    right: { minX: 650, minY: 363, maxX: 800, maxY: 512 },
    top: { minX: 549, minY: 179, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 591, maxY: 501 },
    right: { minX: 648, minY: 363, maxX: 798, maxY: 512 },
    top: { minX: 547, minY: 179, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 452, minY: 364, maxX: 591, maxY: 501 },
    right: { minX: 648, minY: 364, maxX: 798, maxY: 513 },
    top: { minX: 548, minY: 179, maxX: 691, maxY: 325 },
  },
  {
    left: { minX: 451, minY: 365, maxX: 590, maxY: 503 },
    right: { minX: 647, minY: 365, maxX: 797, maxY: 515 },
    top: { minX: 547, minY: 183, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 449, minY: 365, maxX: 589, maxY: 502 },
    right: { minX: 646, minY: 365, maxX: 796, maxY: 515 },
    top: { minX: 545, minY: 181, maxX: 689, maxY: 326 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 586, maxY: 502 },
    right: { minX: 643, minY: 365, maxX: 794, maxY: 514 },
    top: { minX: 543, minY: 181, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 446, minY: 365, maxX: 586, maxY: 503 },
    right: { minX: 643, minY: 365, maxX: 794, maxY: 515 },
    top: { minX: 543, minY: 181, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 444, minY: 366, maxX: 585, maxY: 505 },
    right: { minX: 643, minY: 367, maxX: 794, maxY: 517 },
    top: { minX: 542, minY: 181, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 445, minY: 365, maxX: 586, maxY: 504 },
    right: { minX: 644, minY: 365, maxX: 796, maxY: 517 },
    top: { minX: 543, minY: 180, maxX: 688, maxY: 326 },
  },
  {
    left: { minX: 445, minY: 365, maxX: 586, maxY: 504 },
    right: { minX: 645, minY: 365, maxX: 797, maxY: 517 },
    top: { minX: 544, minY: 179, maxX: 690, maxY: 326 },
  },
  {
    left: { minX: 445, minY: 366, maxX: 588, maxY: 506 },
    right: { minX: 647, minY: 367, maxX: 799, maxY: 519 },
    top: { minX: 545, minY: 180, maxX: 690, maxY: 327 },
  },
  {
    left: { minX: 447, minY: 366, maxX: 590, maxY: 506 },
    right: { minX: 649, minY: 367, maxX: 802, maxY: 519 },
    top: { minX: 547, minY: 179, maxX: 693, maxY: 327 },
  },
  {
    left: { minX: 449, minY: 366, maxX: 592, maxY: 507 },
    right: { minX: 652, minY: 368, maxX: 806, maxY: 521 },
    top: { minX: 551, minY: 179, maxX: 697, maxY: 327 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 594, maxY: 508 },
    right: { minX: 654, minY: 367, maxX: 809, maxY: 521 },
    top: { minX: 552, minY: 178, maxX: 700, maxY: 327 },
  },
  {
    left: { minX: 450, minY: 365, maxX: 594, maxY: 508 },
    right: { minX: 655, minY: 367, maxX: 811, maxY: 521 },
    top: { minX: 551, minY: 175, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 593, maxY: 508 },
    right: { minX: 654, minY: 365, maxX: 811, maxY: 521 },
    top: { minX: 549, minY: 173, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 363, maxX: 596, maxY: 508 },
    right: { minX: 657, minY: 363, maxX: 816, maxY: 520 },
    top: { minX: 551, minY: 170, maxX: 702, maxY: 323 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 597, maxY: 509 },
    right: { minX: 660, minY: 363, maxX: 820, maxY: 522 },
    top: { minX: 553, minY: 169, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 601, maxY: 510 },
    right: { minX: 665, minY: 363, maxX: 826, maxY: 523 },
    top: { minX: 556, minY: 167, maxX: 709, maxY: 322 },
  },
  {
    left: { minX: 455, minY: 362, maxX: 605, maxY: 510 },
    right: { minX: 669, minY: 362, maxX: 831, maxY: 523 },
    top: { minX: 559, minY: 165, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 604, maxY: 512 },
    right: { minX: 669, minY: 362, maxX: 832, maxY: 524 },
    top: { minX: 557, minY: 163, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 604, maxY: 512 },
    right: { minX: 669, minY: 361, maxX: 834, maxY: 524 },
    top: { minX: 557, minY: 161, maxX: 713, maxY: 320 },
  },
  {
    left: { minX: 453, minY: 365, maxX: 606, maxY: 516 },
    right: { minX: 671, minY: 363, maxX: 837, maxY: 528 },
    top: { minX: 559, minY: 163, maxX: 716, maxY: 322 },
  },
  {
    left: { minX: 452, minY: 369, maxX: 605, maxY: 520 },
    right: { minX: 671, minY: 367, maxX: 837, maxY: 531 },
    top: { minX: 558, minY: 166, maxX: 715, maxY: 325 },
  },
  {
    left: { minX: 453, minY: 366, maxX: 606, maxY: 518 },
    right: { minX: 673, minY: 365, maxX: 840, maxY: 530 },
    top: { minX: 559, minY: 162, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 452, minY: 365, maxX: 606, maxY: 518 },
    right: { minX: 674, minY: 364, maxX: 842, maxY: 530 },
    top: { minX: 560, minY: 160, maxX: 719, maxY: 322 },
  },
  {
    left: { minX: 451, minY: 366, maxX: 606, maxY: 519 },
    right: { minX: 673, minY: 365, maxX: 842, maxY: 532 },
    top: { minX: 559, minY: 161, maxX: 719, maxY: 322 },
  },
  {
    left: { minX: 451, minY: 367, maxX: 606, maxY: 521 },
    right: { minX: 674, minY: 365, maxX: 843, maxY: 532 },
    top: { minX: 559, minY: 161, maxX: 719, maxY: 322 },
  },
  {
    left: { minX: 450, minY: 365, maxX: 606, maxY: 520 },
    right: { minX: 675, minY: 363, maxX: 845, maxY: 531 },
    top: { minX: 559, minY: 157, maxX: 719, maxY: 321 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 607, maxY: 519 },
    right: { minX: 676, minY: 361, maxX: 848, maxY: 531 },
    top: { minX: 559, minY: 154, maxX: 721, maxY: 319 },
  },
  {
    left: { minX: 450, minY: 362, maxX: 608, maxY: 519 },
    right: { minX: 677, minY: 360, maxX: 850, maxY: 530 },
    top: { minX: 560, minY: 151, maxX: 722, maxY: 317 },
  },
  {
    left: { minX: 451, minY: 364, maxX: 611, maxY: 521 },
    right: { minX: 681, minY: 361, maxX: 855, maxY: 533 },
    top: { minX: 562, minY: 152, maxX: 726, maxY: 318 },
  },
  {
    left: { minX: 456, minY: 366, maxX: 615, maxY: 524 },
    right: { minX: 686, minY: 364, maxX: 862, maxY: 537 },
    top: { minX: 567, minY: 153, maxX: 732, maxY: 321 },
  },
  {
    left: { minX: 457, minY: 367, maxX: 618, maxY: 527 },
    right: { minX: 691, minY: 365, maxX: 868, maxY: 540 },
    top: { minX: 571, minY: 153, maxX: 736, maxY: 322 },
  },
  {
    left: { minX: 458, minY: 367, maxX: 620, maxY: 528 },
    right: { minX: 693, minY: 365, maxX: 872, maxY: 540 },
    top: { minX: 572, minY: 151, maxX: 739, maxY: 321 },
  },
  {
    left: { minX: 456, minY: 367, maxX: 620, maxY: 530 },
    right: { minX: 693, minY: 365, maxX: 874, maxY: 542 },
    top: { minX: 571, minY: 150, maxX: 740, maxY: 321 },
  },
  {
    left: { minX: 456, minY: 368, maxX: 621, maxY: 531 },
    right: { minX: 695, minY: 366, maxX: 876, maxY: 543 },
    top: { minX: 572, minY: 149, maxX: 742, maxY: 321 },
  },
  {
    left: { minX: 455, minY: 369, maxX: 620, maxY: 533 },
    right: { minX: 695, minY: 367, maxX: 876, maxY: 545 },
    top: { minX: 571, minY: 149, maxX: 741, maxY: 322 },
  },
  {
    left: { minX: 453, minY: 369, maxX: 619, maxY: 534 },
    right: { minX: 694, minY: 367, maxX: 876, maxY: 546 },
    top: { minX: 571, minY: 149, maxX: 741, maxY: 322 },
  },
  {
    left: { minX: 450, minY: 370, maxX: 617, maxY: 535 },
    right: { minX: 693, minY: 367, maxX: 875, maxY: 546 },
    top: { minX: 568, minY: 149, maxX: 738, maxY: 322 },
  },
  {
    left: { minX: 450, minY: 368, maxX: 618, maxY: 535 },
    right: { minX: 693, minY: 365, maxX: 876, maxY: 545 },
    top: { minX: 568, minY: 146, maxX: 740, maxY: 321 },
  },
  {
    left: { minX: 450, minY: 369, maxX: 618, maxY: 536 },
    right: { minX: 695, minY: 366, maxX: 878, maxY: 546 },
    top: { minX: 569, minY: 146, maxX: 741, maxY: 321 },
  },
  {
    left: { minX: 450, minY: 369, maxX: 619, maxY: 537 },
    right: { minX: 696, minY: 367, maxX: 881, maxY: 548 },
    top: { minX: 569, minY: 145, maxX: 742, maxY: 321 },
  },
  {
    left: { minX: 444, minY: 369, maxX: 615, maxY: 539 },
    right: { minX: 692, minY: 366, maxX: 878, maxY: 548 },
    top: { minX: 565, minY: 143, maxX: 739, maxY: 320 },
  },
  {
    left: { minX: 439, minY: 366, maxX: 611, maxY: 537 },
    right: { minX: 689, minY: 363, maxX: 875, maxY: 546 },
    top: { minX: 560, minY: 139, maxX: 735, maxY: 317 },
  },
  {
    left: { minX: 434, minY: 368, maxX: 608, maxY: 540 },
    right: { minX: 686, minY: 364, maxX: 873, maxY: 547 },
    top: { minX: 556, minY: 139, maxX: 732, maxY: 318 },
  },
  {
    left: { minX: 431, minY: 369, maxX: 606, maxY: 542 },
    right: { minX: 685, minY: 365, maxX: 873, maxY: 550 },
    top: { minX: 555, minY: 139, maxX: 731, maxY: 320 },
  },
  {
    left: { minX: 431, minY: 371, maxX: 607, maxY: 545 },
    right: { minX: 686, minY: 367, maxX: 874, maxY: 552 },
    top: { minX: 555, minY: 141, maxX: 732, maxY: 321 },
  },
  {
    left: { minX: 430, minY: 373, maxX: 607, maxY: 548 },
    right: { minX: 687, minY: 368, maxX: 876, maxY: 554 },
    top: { minX: 554, minY: 141, maxX: 732, maxY: 322 },
  },
  {
    left: { minX: 430, minY: 372, maxX: 608, maxY: 549 },
    right: { minX: 689, minY: 368, maxX: 880, maxY: 555 },
    top: { minX: 556, minY: 139, maxX: 736, maxY: 322 },
  },
  {
    left: { minX: 430, minY: 371, maxX: 608, maxY: 549 },
    right: { minX: 689, minY: 368, maxX: 881, maxY: 555 },
    top: { minX: 556, minY: 138, maxX: 736, maxY: 321 },
  },
  {
    left: { minX: 425, minY: 371, maxX: 606, maxY: 550 },
    right: { minX: 687, minY: 368, maxX: 879, maxY: 557 },
    top: { minX: 554, minY: 137, maxX: 734, maxY: 321 },
  },
  {
    left: { minX: 423, minY: 370, maxX: 605, maxY: 550 },
    right: { minX: 687, minY: 367, maxX: 880, maxY: 557 },
    top: { minX: 553, minY: 134, maxX: 736, maxY: 320 },
  },
  {
    left: { minX: 422, minY: 371, maxX: 604, maxY: 551 },
    right: { minX: 687, minY: 367, maxX: 880, maxY: 557 },
    top: { minX: 552, minY: 134, maxX: 734, maxY: 320 },
  },
  {
    left: { minX: 421, minY: 370, maxX: 604, maxY: 551 },
    right: { minX: 687, minY: 367, maxX: 880, maxY: 557 },
    top: { minX: 552, minY: 132, maxX: 736, maxY: 319 },
  },
  {
    left: { minX: 418, minY: 371, maxX: 602, maxY: 553 },
    right: { minX: 685, minY: 368, maxX: 879, maxY: 559 },
    top: { minX: 550, minY: 133, maxX: 734, maxY: 320 },
  },
  {
    left: { minX: 417, minY: 371, maxX: 602, maxY: 554 },
    right: { minX: 686, minY: 367, maxX: 882, maxY: 559 },
    top: { minX: 549, minY: 131, maxX: 734, maxY: 319 },
  },
  {
    left: { minX: 417, minY: 371, maxX: 604, maxY: 555 },
    right: { minX: 688, minY: 367, maxX: 884, maxY: 560 },
    top: { minX: 551, minY: 129, maxX: 737, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 371, maxX: 602, maxY: 557 },
    right: { minX: 687, minY: 367, maxX: 885, maxY: 562 },
    top: { minX: 549, minY: 128, maxX: 736, maxY: 318 },
  },
  {
    left: { minX: 415, minY: 371, maxX: 603, maxY: 558 },
    right: { minX: 689, minY: 368, maxX: 886, maxY: 562 },
    top: { minX: 550, minY: 128, maxX: 738, maxY: 319 },
  },
  {
    left: { minX: 414, minY: 370, maxX: 603, maxY: 558 },
    right: { minX: 689, minY: 368, maxX: 888, maxY: 563 },
    top: { minX: 551, minY: 127, maxX: 739, maxY: 318 },
  },
  {
    left: { minX: 413, minY: 371, maxX: 603, maxY: 559 },
    right: { minX: 690, minY: 368, maxX: 889, maxY: 563 },
    top: { minX: 550, minY: 126, maxX: 739, maxY: 318 },
  },
  {
    left: { minX: 410, minY: 369, maxX: 602, maxY: 559 },
    right: { minX: 689, minY: 366, maxX: 889, maxY: 562 },
    top: { minX: 548, minY: 122, maxX: 739, maxY: 316 },
  },
  {
    left: { minX: 409, minY: 369, maxX: 602, maxY: 560 },
    right: { minX: 689, minY: 366, maxX: 890, maxY: 563 },
    top: { minX: 549, minY: 121, maxX: 740, maxY: 316 },
  },
  {
    left: { minX: 410, minY: 369, maxX: 603, maxY: 560 },
    right: { minX: 691, minY: 367, maxX: 892, maxY: 565 },
    top: { minX: 550, minY: 121, maxX: 742, maxY: 316 },
  },
  {
    left: { minX: 405, minY: 368, maxX: 600, maxY: 561 },
    right: { minX: 688, minY: 367, maxX: 890, maxY: 565 },
    top: { minX: 547, minY: 119, maxX: 739, maxY: 316 },
  },
  {
    left: { minX: 404, minY: 368, maxX: 599, maxY: 560 },
    right: { minX: 688, minY: 366, maxX: 890, maxY: 564 },
    top: { minX: 547, minY: 117, maxX: 740, maxY: 314 },
  },
  {
    left: { minX: 404, minY: 367, maxX: 600, maxY: 561 },
    right: { minX: 689, minY: 365, maxX: 892, maxY: 565 },
    top: { minX: 547, minY: 116, maxX: 741, maxY: 314 },
  },
  {
    left: { minX: 402, minY: 368, maxX: 599, maxY: 563 },
    right: { minX: 689, minY: 365, maxX: 892, maxY: 565 },
    top: { minX: 545, minY: 115, maxX: 740, maxY: 314 },
  },
  {
    left: { minX: 398, minY: 369, maxX: 596, maxY: 565 },
    right: { minX: 686, minY: 366, maxX: 890, maxY: 566 },
    top: { minX: 542, minY: 116, maxX: 737, maxY: 315 },
  },
  {
    left: { minX: 396, minY: 369, maxX: 596, maxY: 566 },
    right: { minX: 686, minY: 366, maxX: 890, maxY: 567 },
    top: { minX: 541, minY: 115, maxX: 736, maxY: 315 },
  },
  {
    left: { minX: 394, minY: 369, maxX: 595, maxY: 567 },
    right: { minX: 685, minY: 366, maxX: 890, maxY: 567 },
    top: { minX: 540, minY: 114, maxX: 736, maxY: 315 },
  },
  {
    left: { minX: 389, minY: 369, maxX: 591, maxY: 567 },
    right: { minX: 682, minY: 366, maxX: 887, maxY: 568 },
    top: { minX: 537, minY: 112, maxX: 734, maxY: 314 },
  },
  {
    left: { minX: 385, minY: 368, maxX: 588, maxY: 568 },
    right: { minX: 680, minY: 366, maxX: 884, maxY: 568 },
    top: { minX: 535, minY: 112, maxX: 732, maxY: 314 },
  },
  {
    left: { minX: 383, minY: 370, maxX: 587, maxY: 570 },
    right: { minX: 679, minY: 367, maxX: 883, maxY: 569 },
    top: { minX: 533, minY: 113, maxX: 731, maxY: 315 },
  },
  {
    left: { minX: 382, minY: 371, maxX: 587, maxY: 572 },
    right: { minX: 678, minY: 369, maxX: 883, maxY: 571 },
    top: { minX: 532, minY: 114, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 380, minY: 372, maxX: 585, maxY: 574 },
    right: { minX: 678, minY: 369, maxX: 883, maxY: 572 },
    top: { minX: 531, minY: 114, maxX: 730, maxY: 317 },
  },
  {
    left: { minX: 377, minY: 370, maxX: 584, maxY: 574 },
    right: { minX: 677, minY: 368, maxX: 884, maxY: 572 },
    top: { minX: 531, minY: 111, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 371, minY: 369, maxX: 581, maxY: 575 },
    right: { minX: 674, minY: 367, maxX: 880, maxY: 571 },
    top: { minX: 525, minY: 109, maxX: 727, maxY: 314 },
  },
  {
    left: { minX: 369, minY: 370, maxX: 579, maxY: 576 },
    right: { minX: 672, minY: 369, maxX: 878, maxY: 572 },
    top: { minX: 524, minY: 109, maxX: 725, maxY: 315 },
  },
  {
    left: { minX: 365, minY: 372, maxX: 576, maxY: 578 },
    right: { minX: 669, minY: 370, maxX: 874, maxY: 574 },
    top: { minX: 521, minY: 112, maxX: 722, maxY: 317 },
  },
  {
    left: { minX: 364, minY: 374, maxX: 575, maxY: 581 },
    right: { minX: 668, minY: 371, maxX: 874, maxY: 575 },
    top: { minX: 520, minY: 113, maxX: 721, maxY: 319 },
  },
  {
    left: { minX: 362, minY: 374, maxX: 574, maxY: 581 },
    right: { minX: 668, minY: 371, maxX: 874, maxY: 575 },
    top: { minX: 519, minY: 111, maxX: 720, maxY: 318 },
  },
  {
    left: { minX: 360, minY: 373, maxX: 573, maxY: 582 },
    right: { minX: 667, minY: 371, maxX: 873, maxY: 575 },
    top: { minX: 518, minY: 111, maxX: 720, maxY: 318 },
  },
  {
    left: { minX: 356, minY: 373, maxX: 570, maxY: 582 },
    right: { minX: 664, minY: 371, maxX: 871, maxY: 576 },
    top: { minX: 515, minY: 111, maxX: 718, maxY: 317 },
  },
  {
    left: { minX: 352, minY: 375, maxX: 567, maxY: 585 },
    right: { minX: 661, minY: 372, maxX: 868, maxY: 577 },
    top: { minX: 511, minY: 112, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 351, minY: 373, maxX: 567, maxY: 584 },
    right: { minX: 662, minY: 370, maxX: 868, maxY: 575 },
    top: { minX: 511, minY: 109, maxX: 714, maxY: 317 },
  },
  {
    left: { minX: 353, minY: 371, maxX: 568, maxY: 582 },
    right: { minX: 663, minY: 369, maxX: 870, maxY: 574 },
    top: { minX: 513, minY: 107, maxX: 717, maxY: 315 },
  },
  {
    left: { minX: 354, minY: 370, maxX: 569, maxY: 581 },
    right: { minX: 664, minY: 369, maxX: 871, maxY: 574 },
    top: { minX: 515, minY: 106, maxX: 718, maxY: 314 },
  },
  {
    left: { minX: 354, minY: 372, maxX: 569, maxY: 582 },
    right: { minX: 664, minY: 370, maxX: 870, maxY: 575 },
    top: { minX: 515, minY: 107, maxX: 718, maxY: 316 },
  },
  {
    left: { minX: 353, minY: 371, maxX: 569, maxY: 581 },
    right: { minX: 664, minY: 369, maxX: 871, maxY: 574 },
    top: { minX: 514, minY: 106, maxX: 718, maxY: 315 },
  },
  {
    left: { minX: 352, minY: 369, maxX: 568, maxY: 580 },
    right: { minX: 663, minY: 367, maxX: 870, maxY: 573 },
    top: { minX: 513, minY: 104, maxX: 717, maxY: 313 },
  },
  {
    left: { minX: 355, minY: 368, maxX: 571, maxY: 579 },
    right: { minX: 666, minY: 367, maxX: 874, maxY: 573 },
    top: { minX: 517, minY: 103, maxX: 720, maxY: 313 },
  },
  {
    left: { minX: 362, minY: 369, maxX: 577, maxY: 579 },
    right: { minX: 672, minY: 368, maxX: 880, maxY: 574 },
    top: { minX: 522, minY: 104, maxX: 726, maxY: 313 },
  },
  {
    left: { minX: 365, minY: 368, maxX: 580, maxY: 578 },
    right: { minX: 674, minY: 368, maxX: 883, maxY: 574 },
    top: { minX: 526, minY: 104, maxX: 730, maxY: 313 },
  },
  {
    left: { minX: 365, minY: 367, maxX: 580, maxY: 577 },
    right: { minX: 675, minY: 367, maxX: 884, maxY: 574 },
    top: { minX: 527, minY: 103, maxX: 732, maxY: 312 },
  },
  {
    left: { minX: 361, minY: 363, maxX: 577, maxY: 574 },
    right: { minX: 672, minY: 364, maxX: 882, maxY: 571 },
    top: { minX: 524, minY: 96, maxX: 730, maxY: 308 },
  },
  {
    left: { minX: 362, minY: 360, maxX: 579, maxY: 572 },
    right: { minX: 674, minY: 361, maxX: 885, maxY: 568 },
    top: { minX: 524, minY: 91, maxX: 732, maxY: 304 },
  },
  {
    left: { minX: 362, minY: 359, maxX: 579, maxY: 571 },
    right: { minX: 675, minY: 359, maxX: 886, maxY: 567 },
    top: { minX: 525, minY: 89, maxX: 732, maxY: 303 },
  },
  {
    left: { minX: 363, minY: 356, maxX: 580, maxY: 568 },
    right: { minX: 677, minY: 357, maxX: 888, maxY: 566 },
    top: { minX: 526, minY: 86, maxX: 734, maxY: 301 },
  },
  {
    left: { minX: 365, minY: 352, maxX: 582, maxY: 564 },
    right: { minX: 678, minY: 353, maxX: 890, maxY: 561 },
    top: { minX: 527, minY: 81, maxX: 736, maxY: 296 },
  },
  {
    left: { minX: 371, minY: 353, maxX: 587, maxY: 564 },
    right: { minX: 682, minY: 353, maxX: 894, maxY: 561 },
    top: { minX: 532, minY: 82, maxX: 740, maxY: 297 },
  },
  {
    left: { minX: 370, minY: 357, maxX: 585, maxY: 568 },
    right: { minX: 681, minY: 357, maxX: 892, maxY: 565 },
    top: { minX: 531, minY: 86, maxX: 738, maxY: 301 },
  },
  {
    left: { minX: 371, minY: 363, maxX: 586, maxY: 574 },
    right: { minX: 682, minY: 363, maxX: 893, maxY: 572 },
    top: { minX: 533, minY: 93, maxX: 740, maxY: 307 },
  },
  {
    left: { minX: 369, minY: 370, maxX: 584, maxY: 581 },
    right: { minX: 679, minY: 371, maxX: 889, maxY: 579 },
    top: { minX: 531, minY: 102, maxX: 738, maxY: 315 },
  },
  {
    left: { minX: 368, minY: 372, maxX: 582, maxY: 583 },
    right: { minX: 677, minY: 373, maxX: 887, maxY: 580 },
    top: { minX: 529, minY: 105, maxX: 736, maxY: 317 },
  },
  {
    left: { minX: 373, minY: 379, maxX: 585, maxY: 588 },
    right: { minX: 679, minY: 378, maxX: 888, maxY: 585 },
    top: { minX: 531, minY: 112, maxX: 736, maxY: 323 },
  },
  {
    left: { minX: 377, minY: 381, maxX: 588, maxY: 589 },
    right: { minX: 681, minY: 380, maxX: 888, maxY: 585 },
    top: { minX: 533, minY: 115, maxX: 738, maxY: 325 },
  },
  {
    left: { minX: 381, minY: 382, maxX: 590, maxY: 589 },
    right: { minX: 683, minY: 381, maxX: 889, maxY: 585 },
    top: { minX: 535, minY: 118, maxX: 740, maxY: 327 },
  },
  {
    left: { minX: 385, minY: 386, maxX: 592, maxY: 591 },
    right: { minX: 684, minY: 385, maxX: 889, maxY: 588 },
    top: { minX: 538, minY: 124, maxX: 740, maxY: 331 },
  },
  {
    left: { minX: 386, minY: 385, maxX: 592, maxY: 589 },
    right: { minX: 683, minY: 385, maxX: 886, maxY: 585 },
    top: { minX: 537, minY: 124, maxX: 739, maxY: 331 },
  },
  {
    left: { minX: 388, minY: 383, maxX: 592, maxY: 584 },
    right: { minX: 682, minY: 382, maxX: 882, maxY: 580 },
    top: { minX: 537, minY: 123, maxX: 738, maxY: 329 },
  },
  {
    left: { minX: 392, minY: 388, maxX: 593, maxY: 587 },
    right: { minX: 683, minY: 386, maxX: 882, maxY: 583 },
    top: { minX: 539, minY: 130, maxX: 738, maxY: 334 },
  },
  {
    left: { minX: 395, minY: 393, maxX: 594, maxY: 591 },
    right: { minX: 683, minY: 391, maxX: 879, maxY: 585 },
    top: { minX: 539, minY: 138, maxX: 738, maxY: 339 },
  },
  {
    left: { minX: 395, minY: 390, maxX: 592, maxY: 585 },
    right: { minX: 680, minY: 387, maxX: 874, maxY: 579 },
    top: { minX: 539, minY: 137, maxX: 735, maxY: 337 },
  },
  {
    left: { minX: 398, minY: 387, maxX: 593, maxY: 580 },
    right: { minX: 680, minY: 385, maxX: 871, maxY: 575 },
    top: { minX: 540, minY: 136, maxX: 735, maxY: 334 },
  },
  {
    left: { minX: 398, minY: 383, maxX: 591, maxY: 575 },
    right: { minX: 677, minY: 381, maxX: 865, maxY: 568 },
    top: { minX: 539, minY: 135, maxX: 731, maxY: 332 },
  },
  {
    left: { minX: 398, minY: 384, maxX: 589, maxY: 573 },
    right: { minX: 673, minY: 382, maxX: 858, maxY: 565 },
    top: { minX: 537, minY: 139, maxX: 727, maxY: 333 },
  },
  {
    left: { minX: 397, minY: 386, maxX: 587, maxY: 573 },
    right: { minX: 671, minY: 383, maxX: 852, maxY: 565 },
    top: { minX: 535, minY: 143, maxX: 723, maxY: 335 },
  },
  {
    left: { minX: 398, minY: 390, maxX: 585, maxY: 574 },
    right: { minX: 667, minY: 387, maxX: 846, maxY: 565 },
    top: { minX: 533, minY: 151, maxX: 719, maxY: 339 },
  },
  {
    left: { minX: 403, minY: 391, maxX: 588, maxY: 573 },
    right: { minX: 669, minY: 388, maxX: 844, maxY: 563 },
    top: { minX: 537, minY: 157, maxX: 720, maxY: 341 },
  },
  {
    left: { minX: 407, minY: 390, maxX: 589, maxY: 571 },
    right: { minX: 669, minY: 387, maxX: 843, maxY: 561 },
    top: { minX: 539, minY: 158, maxX: 720, maxY: 341 },
  },
  {
    left: { minX: 412, minY: 392, maxX: 591, maxY: 570 },
    right: { minX: 670, minY: 388, maxX: 841, maxY: 558 },
    top: { minX: 542, minY: 163, maxX: 720, maxY: 343 },
  },
  {
    left: { minX: 416, minY: 392, maxX: 594, maxY: 569 },
    right: { minX: 672, minY: 388, maxX: 842, maxY: 557 },
    top: { minX: 545, minY: 165, maxX: 722, maxY: 344 },
  },
  {
    left: { minX: 422, minY: 394, maxX: 598, maxY: 568 },
    right: { minX: 674, minY: 390, maxX: 841, maxY: 556 },
    top: { minX: 550, minY: 171, maxX: 724, maxY: 346 },
  },
  {
    left: { minX: 427, minY: 392, maxX: 600, maxY: 565 },
    right: { minX: 675, minY: 388, maxX: 839, maxY: 552 },
    top: { minX: 552, minY: 173, maxX: 724, maxY: 345 },
  },
  {
    left: { minX: 432, minY: 390, maxX: 602, maxY: 560 },
    right: { minX: 677, minY: 385, maxX: 838, maxY: 546 },
    top: { minX: 555, minY: 172, maxX: 724, maxY: 343 },
  },
  {
    left: { minX: 435, minY: 389, maxX: 604, maxY: 557 },
    right: { minX: 677, minY: 384, maxX: 837, maxY: 543 },
    top: { minX: 557, minY: 173, maxX: 724, maxY: 342 },
  },
  {
    left: { minX: 442, minY: 387, maxX: 610, maxY: 554 },
    right: { minX: 682, minY: 383, maxX: 841, maxY: 540 },
    top: { minX: 563, minY: 174, maxX: 729, maxY: 341 },
  },
  {
    left: { minX: 448, minY: 386, maxX: 614, maxY: 552 },
    right: { minX: 686, minY: 382, maxX: 844, maxY: 539 },
    top: { minX: 569, minY: 175, maxX: 734, maxY: 341 },
  },
  {
    left: { minX: 454, minY: 385, maxX: 619, maxY: 550 },
    right: { minX: 689, minY: 381, maxX: 846, maxY: 536 },
    top: { minX: 574, minY: 175, maxX: 737, maxY: 340 },
  },
  {
    left: { minX: 458, minY: 384, maxX: 622, maxY: 548 },
    right: { minX: 692, minY: 380, maxX: 848, maxY: 534 },
    top: { minX: 577, minY: 175, maxX: 739, maxY: 339 },
  },
  {
    left: { minX: 460, minY: 383, maxX: 624, maxY: 547 },
    right: { minX: 693, minY: 379, maxX: 849, maxY: 533 },
    top: { minX: 579, minY: 175, maxX: 740, maxY: 338 },
  },
  {
    left: { minX: 463, minY: 381, maxX: 626, maxY: 545 },
    right: { minX: 696, minY: 377, maxX: 851, maxY: 531 },
    top: { minX: 582, minY: 173, maxX: 743, maxY: 337 },
  },
  {
    left: { minX: 467, minY: 380, maxX: 630, maxY: 543 },
    right: { minX: 698, minY: 376, maxX: 853, maxY: 529 },
    top: { minX: 585, minY: 173, maxX: 746, maxY: 336 },
  },
  {
    left: { minX: 470, minY: 379, maxX: 632, maxY: 541 },
    right: { minX: 700, minY: 375, maxX: 854, maxY: 527 },
    top: { minX: 587, minY: 173, maxX: 748, maxY: 334 },
  },
  {
    left: { minX: 473, minY: 378, maxX: 635, maxY: 540 },
    right: { minX: 702, minY: 374, maxX: 856, maxY: 525 },
    top: { minX: 591, minY: 173, maxX: 750, maxY: 334 },
  },
  {
    left: { minX: 475, minY: 377, maxX: 636, maxY: 539 },
    right: { minX: 703, minY: 373, maxX: 856, maxY: 523 },
    top: { minX: 591, minY: 173, maxX: 750, maxY: 333 },
  },
  {
    left: { minX: 480, minY: 375, maxX: 641, maxY: 536 },
    right: { minX: 708, minY: 371, maxX: 860, maxY: 521 },
    top: { minX: 597, minY: 171, maxX: 755, maxY: 331 },
  },
  {
    left: { minX: 483, minY: 374, maxX: 643, maxY: 534 },
    right: { minX: 709, minY: 371, maxX: 862, maxY: 520 },
    top: { minX: 599, minY: 171, maxX: 757, maxY: 330 },
  },
  {
    left: { minX: 483, minY: 371, maxX: 642, maxY: 531 },
    right: { minX: 708, minY: 368, maxX: 860, maxY: 517 },
    top: { minX: 599, minY: 168, maxX: 756, maxY: 327 },
  },
  {
    left: { minX: 481, minY: 368, maxX: 640, maxY: 528 },
    right: { minX: 705, minY: 366, maxX: 856, maxY: 514 },
    top: { minX: 597, minY: 167, maxX: 754, maxY: 326 },
  },
  {
    left: { minX: 480, minY: 369, maxX: 640, maxY: 528 },
    right: { minX: 704, minY: 368, maxX: 855, maxY: 515 },
    top: { minX: 597, minY: 169, maxX: 754, maxY: 327 },
  },
  {
    left: { minX: 475, minY: 370, maxX: 634, maxY: 529 },
    right: { minX: 698, minY: 369, maxX: 848, maxY: 516 },
    top: { minX: 592, minY: 171, maxX: 747, maxY: 328 },
  },
  {
    left: { minX: 476, minY: 374, maxX: 634, maxY: 532 },
    right: { minX: 698, minY: 373, maxX: 846, maxY: 518 },
    top: { minX: 593, minY: 177, maxX: 747, maxY: 332 },
  },
  {
    left: { minX: 478, minY: 372, maxX: 636, maxY: 529 },
    right: { minX: 699, minY: 371, maxX: 847, maxY: 516 },
    top: { minX: 595, minY: 175, maxX: 748, maxY: 330 },
  },
  {
    left: { minX: 477, minY: 372, maxX: 634, maxY: 529 },
    right: { minX: 698, minY: 371, maxX: 844, maxY: 516 },
    top: { minX: 593, minY: 177, maxX: 746, maxY: 331 },
  },
  {
    left: { minX: 473, minY: 371, maxX: 630, maxY: 528 },
    right: { minX: 694, minY: 370, maxX: 840, maxY: 514 },
    top: { minX: 589, minY: 176, maxX: 741, maxY: 330 },
  },
  {
    left: { minX: 473, minY: 368, maxX: 630, maxY: 525 },
    right: { minX: 693, minY: 367, maxX: 839, maxY: 511 },
    top: { minX: 588, minY: 173, maxX: 740, maxY: 327 },
  },
  {
    left: { minX: 473, minY: 366, maxX: 630, maxY: 523 },
    right: { minX: 693, minY: 365, maxX: 838, maxY: 509 },
    top: { minX: 588, minY: 171, maxX: 740, maxY: 325 },
  },
  {
    left: { minX: 474, minY: 363, maxX: 631, maxY: 520 },
    right: { minX: 693, minY: 363, maxX: 839, maxY: 506 },
    top: { minX: 589, minY: 169, maxX: 740, maxY: 323 },
  },
  {
    left: { minX: 475, minY: 362, maxX: 631, maxY: 518 },
    right: { minX: 694, minY: 361, maxX: 839, maxY: 504 },
    top: { minX: 589, minY: 168, maxX: 740, maxY: 321 },
  },
  {
    left: { minX: 475, minY: 362, maxX: 631, maxY: 518 },
    right: { minX: 693, minY: 362, maxX: 838, maxY: 505 },
    top: { minX: 590, minY: 169, maxX: 741, maxY: 321 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 632, maxY: 518 },
    right: { minX: 694, minY: 363, maxX: 838, maxY: 505 },
    top: { minX: 591, minY: 170, maxX: 741, maxY: 322 },
  },
  {
    left: { minX: 475, minY: 362, maxX: 630, maxY: 517 },
    right: { minX: 692, minY: 363, maxX: 837, maxY: 505 },
    top: { minX: 590, minY: 170, maxX: 740, maxY: 322 },
  },
  {
    left: { minX: 474, minY: 360, maxX: 630, maxY: 515 },
    right: { minX: 692, minY: 361, maxX: 836, maxY: 503 },
    top: { minX: 589, minY: 169, maxX: 739, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 357, maxX: 629, maxY: 511 },
    right: { minX: 691, minY: 357, maxX: 834, maxY: 499 },
    top: { minX: 589, minY: 166, maxX: 738, maxY: 317 },
  },
  {
    left: { minX: 477, minY: 352, maxX: 633, maxY: 506 },
    right: { minX: 694, minY: 353, maxX: 838, maxY: 495 },
    top: { minX: 592, minY: 161, maxX: 742, maxY: 313 },
  },
  {
    left: { minX: 479, minY: 350, maxX: 634, maxY: 504 },
    right: { minX: 695, minY: 353, maxX: 840, maxY: 494 },
    top: { minX: 594, minY: 160, maxX: 744, maxY: 312 },
  },
  {
    left: { minX: 479, minY: 351, maxX: 634, maxY: 506 },
    right: { minX: 695, minY: 355, maxX: 839, maxY: 496 },
    top: { minX: 594, minY: 162, maxX: 744, maxY: 313 },
  },
  {
    left: { minX: 477, minY: 349, maxX: 632, maxY: 503 },
    right: { minX: 693, minY: 352, maxX: 838, maxY: 493 },
    top: { minX: 592, minY: 159, maxX: 742, maxY: 311 },
  },
  {
    left: { minX: 475, minY: 342, maxX: 630, maxY: 497 },
    right: { minX: 692, minY: 344, maxX: 836, maxY: 485 },
    top: { minX: 589, minY: 151, maxX: 740, maxY: 303 },
  },
  {
    left: { minX: 474, minY: 343, maxX: 629, maxY: 498 },
    right: { minX: 691, minY: 345, maxX: 835, maxY: 487 },
    top: { minX: 589, minY: 153, maxX: 738, maxY: 305 },
  },
  {
    left: { minX: 475, minY: 344, maxX: 631, maxY: 498 },
    right: { minX: 692, minY: 346, maxX: 836, maxY: 487 },
    top: { minX: 590, minY: 153, maxX: 740, maxY: 305 },
  },
  {
    left: { minX: 475, minY: 346, maxX: 630, maxY: 500 },
    right: { minX: 692, minY: 348, maxX: 835, maxY: 489 },
    top: { minX: 590, minY: 155, maxX: 738, maxY: 307 },
  },
  {
    left: { minX: 473, minY: 347, maxX: 628, maxY: 501 },
    right: { minX: 689, minY: 349, maxX: 833, maxY: 489 },
    top: { minX: 587, minY: 157, maxX: 736, maxY: 308 },
  },
  {
    left: { minX: 472, minY: 347, maxX: 627, maxY: 501 },
    right: { minX: 688, minY: 348, maxX: 832, maxY: 489 },
    top: { minX: 585, minY: 157, maxX: 735, maxY: 308 },
  },
  {
    left: { minX: 470, minY: 349, maxX: 625, maxY: 502 },
    right: { minX: 686, minY: 349, maxX: 829, maxY: 490 },
    top: { minX: 583, minY: 159, maxX: 732, maxY: 309 },
  },
  {
    left: { minX: 469, minY: 350, maxX: 624, maxY: 504 },
    right: { minX: 686, minY: 351, maxX: 828, maxY: 491 },
    top: { minX: 583, minY: 160, maxX: 732, maxY: 311 },
  },
  {
    left: { minX: 468, minY: 352, maxX: 622, maxY: 506 },
    right: { minX: 684, minY: 353, maxX: 826, maxY: 493 },
    top: { minX: 581, minY: 163, maxX: 728, maxY: 313 },
  },
  {
    left: { minX: 469, minY: 352, maxX: 624, maxY: 505 },
    right: { minX: 685, minY: 353, maxX: 827, maxY: 493 },
    top: { minX: 581, minY: 163, maxX: 730, maxY: 313 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 623, maxY: 507 },
    right: { minX: 684, minY: 354, maxX: 826, maxY: 494 },
    top: { minX: 582, minY: 165, maxX: 730, maxY: 314 },
  },
  {
    left: { minX: 469, minY: 354, maxX: 624, maxY: 507 },
    right: { minX: 685, minY: 355, maxX: 827, maxY: 495 },
    top: { minX: 583, minY: 165, maxX: 730, maxY: 315 },
  },
  {
    left: { minX: 470, minY: 355, maxX: 624, maxY: 508 },
    right: { minX: 685, minY: 357, maxX: 827, maxY: 496 },
    top: { minX: 583, minY: 167, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 471, minY: 356, maxX: 624, maxY: 509 },
    right: { minX: 685, minY: 358, maxX: 826, maxY: 497 },
    top: { minX: 584, minY: 169, maxX: 731, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 356, maxX: 624, maxY: 508 },
    right: { minX: 684, minY: 358, maxX: 826, maxY: 497 },
    top: { minX: 584, minY: 170, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 469, minY: 356, maxX: 622, maxY: 508 },
    right: { minX: 682, minY: 358, maxX: 823, maxY: 497 },
    top: { minX: 582, minY: 171, maxX: 728, maxY: 318 },
  },
  {
    left: { minX: 468, minY: 358, maxX: 620, maxY: 509 },
    right: { minX: 680, minY: 359, maxX: 820, maxY: 497 },
    top: { minX: 581, minY: 173, maxX: 726, maxY: 320 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 620, maxY: 509 },
    right: { minX: 680, minY: 360, maxX: 818, maxY: 497 },
    top: { minX: 580, minY: 175, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 358, maxX: 619, maxY: 507 },
    right: { minX: 679, minY: 360, maxX: 816, maxY: 497 },
    top: { minX: 581, minY: 176, maxX: 724, maxY: 321 },
  },
  {
    left: { minX: 469, minY: 358, maxX: 619, maxY: 506 },
    right: { minX: 678, minY: 361, maxX: 815, maxY: 497 },
    top: { minX: 581, minY: 178, maxX: 724, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 618, maxY: 507 },
    right: { minX: 677, minY: 362, maxX: 814, maxY: 497 },
    top: { minX: 580, minY: 180, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 359, maxX: 616, maxY: 506 },
    right: { minX: 674, minY: 362, maxX: 810, maxY: 496 },
    top: { minX: 577, minY: 181, maxX: 718, maxY: 323 },
  },
  {
    left: { minX: 467, minY: 357, maxX: 614, maxY: 503 },
    right: { minX: 673, minY: 360, maxX: 808, maxY: 494 },
    top: { minX: 577, minY: 179, maxX: 717, maxY: 321 },
  },
  {
    left: { minX: 466, minY: 357, maxX: 612, maxY: 503 },
    right: { minX: 671, minY: 360, maxX: 804, maxY: 493 },
    top: { minX: 575, minY: 181, maxX: 715, maxY: 322 },
  },
  {
    left: { minX: 466, minY: 356, maxX: 612, maxY: 500 },
    right: { minX: 670, minY: 359, maxX: 804, maxY: 491 },
    top: { minX: 575, minY: 180, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 355, maxX: 610, maxY: 498 },
    right: { minX: 668, minY: 357, maxX: 801, maxY: 489 },
    top: { minX: 574, minY: 179, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 610, maxY: 498 },
    right: { minX: 668, minY: 357, maxX: 800, maxY: 488 },
    top: { minX: 574, minY: 181, maxX: 711, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 612, maxY: 496 },
    right: { minX: 669, minY: 357, maxX: 800, maxY: 487 },
    top: { minX: 575, minY: 181, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 613, maxY: 495 },
    right: { minX: 670, minY: 357, maxX: 800, maxY: 487 },
    top: { minX: 577, minY: 183, maxX: 712, maxY: 320 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 613, maxY: 494 },
    right: { minX: 670, minY: 357, maxX: 800, maxY: 486 },
    top: { minX: 577, minY: 183, maxX: 712, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 355, maxX: 612, maxY: 494 },
    right: { minX: 668, minY: 357, maxX: 797, maxY: 485 },
    top: { minX: 576, minY: 184, maxX: 710, maxY: 320 },
  },
  {
    left: { minX: 471, minY: 353, maxX: 611, maxY: 492 },
    right: { minX: 668, minY: 356, maxX: 796, maxY: 483 },
    top: { minX: 575, minY: 183, maxX: 710, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 351, maxX: 610, maxY: 489 },
    right: { minX: 666, minY: 354, maxX: 795, maxY: 481 },
    top: { minX: 575, minY: 183, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 472, minY: 353, maxX: 610, maxY: 489 },
    right: { minX: 666, minY: 355, maxX: 794, maxY: 481 },
    top: { minX: 575, minY: 184, maxX: 708, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 489 },
    right: { minX: 666, minY: 356, maxX: 792, maxY: 481 },
    top: { minX: 576, minY: 187, maxX: 707, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 610, maxY: 488 },
    right: { minX: 666, minY: 355, maxX: 791, maxY: 480 },
    top: { minX: 576, minY: 187, maxX: 707, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 352, maxX: 610, maxY: 487 },
    right: { minX: 665, minY: 355, maxX: 790, maxY: 480 },
    top: { minX: 575, minY: 187, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 609, maxY: 484 },
    right: { minX: 663, minY: 354, maxX: 788, maxY: 477 },
    top: { minX: 575, minY: 186, maxX: 705, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 608, maxY: 484 },
    right: { minX: 663, minY: 354, maxX: 787, maxY: 477 },
    top: { minX: 574, minY: 187, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 607, maxY: 484 },
    right: { minX: 662, minY: 354, maxX: 785, maxY: 477 },
    top: { minX: 573, minY: 188, maxX: 702, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 351, maxX: 605, maxY: 484 },
    right: { minX: 660, minY: 355, maxX: 783, maxY: 476 },
    top: { minX: 571, minY: 189, maxX: 700, maxY: 318 },
  },
  {
    left: { minX: 469, minY: 350, maxX: 602, maxY: 482 },
    right: { minX: 657, minY: 353, maxX: 780, maxY: 475 },
    top: { minX: 569, minY: 188, maxX: 696, maxY: 318 },
  },
  {
    left: { minX: 470, minY: 351, maxX: 603, maxY: 482 },
    right: { minX: 658, minY: 353, maxX: 780, maxY: 475 },
    top: { minX: 570, minY: 189, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 471, minY: 350, maxX: 603, maxY: 481 },
    right: { minX: 657, minY: 353, maxX: 778, maxY: 474 },
    top: { minX: 570, minY: 189, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 472, minY: 352, maxX: 604, maxY: 482 },
    right: { minX: 657, minY: 355, maxX: 778, maxY: 475 },
    top: { minX: 571, minY: 193, maxX: 697, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 605, maxY: 480 },
    right: { minX: 658, minY: 355, maxX: 778, maxY: 474 },
    top: { minX: 572, minY: 193, maxX: 698, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 604, maxY: 479 },
    right: { minX: 657, minY: 354, maxX: 776, maxY: 473 },
    top: { minX: 571, minY: 193, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 351, maxX: 603, maxY: 479 },
    right: { minX: 656, minY: 355, maxX: 776, maxY: 473 },
    top: { minX: 571, minY: 194, maxX: 695, maxY: 320 },
  },
  {
    left: { minX: 474, minY: 351, maxX: 604, maxY: 479 },
    right: { minX: 656, minY: 355, maxX: 774, maxY: 473 },
    top: { minX: 571, minY: 195, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 476, minY: 350, maxX: 604, maxY: 477 },
    right: { minX: 657, minY: 353, maxX: 775, maxY: 471 },
    top: { minX: 572, minY: 195, maxX: 696, maxY: 319 },
  },
  {
    left: { minX: 476, minY: 350, maxX: 604, maxY: 476 },
    right: { minX: 656, minY: 353, maxX: 774, maxY: 470 },
    top: { minX: 572, minY: 195, maxX: 695, maxY: 319 },
  },
  {
    left: { minX: 476, minY: 349, maxX: 603, maxY: 475 },
    right: { minX: 656, minY: 353, maxX: 773, maxY: 469 },
    top: { minX: 571, minY: 195, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 475, minY: 348, maxX: 602, maxY: 473 },
    right: { minX: 654, minY: 351, maxX: 771, maxY: 467 },
    top: { minX: 571, minY: 194, maxX: 693, maxY: 317 },
  },
  {
    left: { minX: 476, minY: 347, maxX: 603, maxY: 472 },
    right: { minX: 655, minY: 351, maxX: 771, maxY: 466 },
    top: { minX: 571, minY: 194, maxX: 693, maxY: 317 },
  },
  {
    left: { minX: 477, minY: 347, maxX: 603, maxY: 471 },
    right: { minX: 655, minY: 350, maxX: 770, maxY: 465 },
    top: { minX: 572, minY: 194, maxX: 693, maxY: 316 },
  },
  {
    left: { minX: 478, minY: 345, maxX: 604, maxY: 469 },
    right: { minX: 655, minY: 349, maxX: 770, maxY: 464 },
    top: { minX: 573, minY: 193, maxX: 694, maxY: 315 },
  },
  {
    left: { minX: 479, minY: 348, maxX: 603, maxY: 471 },
    right: { minX: 654, minY: 352, maxX: 769, maxY: 466 },
    top: { minX: 573, minY: 197, maxX: 692, maxY: 318 },
  },
  {
    left: { minX: 478, minY: 349, maxX: 602, maxY: 471 },
    right: { minX: 653, minY: 353, maxX: 767, maxY: 466 },
    top: { minX: 571, minY: 199, maxX: 691, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 347, maxX: 600, maxY: 468 },
    right: { minX: 651, minY: 350, maxX: 764, maxY: 463 },
    top: { minX: 569, minY: 197, maxX: 688, maxY: 317 },
  },
  {
    left: { minX: 477, minY: 347, maxX: 600, maxY: 467 },
    right: { minX: 650, minY: 350, maxX: 764, maxY: 462 },
    top: { minX: 569, minY: 197, maxX: 688, maxY: 317 },
  },
  {
    left: { minX: 479, minY: 346, maxX: 602, maxY: 466 },
    right: { minX: 652, minY: 350, maxX: 764, maxY: 461 },
    top: { minX: 571, minY: 197, maxX: 689, maxY: 317 },
  },
  {
    left: { minX: 481, minY: 346, maxX: 602, maxY: 466 },
    right: { minX: 652, minY: 350, maxX: 764, maxY: 461 },
    top: { minX: 573, minY: 199, maxX: 690, maxY: 317 },
  },
  {
    left: { minX: 481, minY: 346, maxX: 602, maxY: 465 },
    right: { minX: 652, minY: 350, maxX: 764, maxY: 461 },
    top: { minX: 573, minY: 199, maxX: 690, maxY: 317 },
  },
  {
    left: { minX: 484, minY: 347, maxX: 604, maxY: 465 },
    right: { minX: 653, minY: 351, maxX: 764, maxY: 462 },
    top: { minX: 575, minY: 201, maxX: 691, maxY: 319 },
  },
  {
    left: { minX: 485, minY: 347, maxX: 605, maxY: 465 },
    right: { minX: 654, minY: 352, maxX: 764, maxY: 462 },
    top: { minX: 576, minY: 203, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 486, minY: 347, maxX: 605, maxY: 465 },
    right: { minX: 654, minY: 352, maxX: 764, maxY: 461 },
    top: { minX: 576, minY: 203, maxX: 691, maxY: 319 },
  },
  {
    left: { minX: 485, minY: 347, maxX: 604, maxY: 464 },
    right: { minX: 653, minY: 351, maxX: 763, maxY: 460 },
    top: { minX: 575, minY: 203, maxX: 690, maxY: 318 },
  },
  {
    left: { minX: 487, minY: 346, maxX: 605, maxY: 462 },
    right: { minX: 654, minY: 351, maxX: 763, maxY: 459 },
    top: { minX: 577, minY: 203, maxX: 690, maxY: 318 },
  },
  {
    left: { minX: 488, minY: 345, maxX: 606, maxY: 461 },
    right: { minX: 654, minY: 350, maxX: 764, maxY: 458 },
    top: { minX: 577, minY: 203, maxX: 692, maxY: 317 },
  },
  {
    left: { minX: 490, minY: 345, maxX: 608, maxY: 461 },
    right: { minX: 656, minY: 351, maxX: 764, maxY: 458 },
    top: { minX: 579, minY: 203, maxX: 692, maxY: 318 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 608, maxY: 462 },
    right: { minX: 656, minY: 351, maxX: 764, maxY: 459 },
    top: { minX: 579, minY: 205, maxX: 692, maxY: 319 },
  },
  {
    left: { minX: 491, minY: 347, maxX: 608, maxY: 463 },
    right: { minX: 656, minY: 352, maxX: 765, maxY: 460 },
    top: { minX: 581, minY: 206, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 348, maxX: 608, maxY: 463 },
    right: { minX: 656, minY: 352, maxX: 765, maxY: 460 },
    top: { minX: 580, minY: 207, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 348, maxX: 608, maxY: 463 },
    right: { minX: 656, minY: 352, maxX: 764, maxY: 459 },
    top: { minX: 579, minY: 207, maxX: 692, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 348, maxX: 608, maxY: 463 },
    right: { minX: 656, minY: 352, maxX: 764, maxY: 460 },
    top: { minX: 579, minY: 207, maxX: 692, maxY: 320 },
  },
  {
    left: { minX: 491, minY: 350, maxX: 607, maxY: 465 },
    right: { minX: 656, minY: 353, maxX: 764, maxY: 461 },
    top: { minX: 579, minY: 209, maxX: 691, maxY: 322 },
  },
  {
    left: { minX: 491, minY: 351, maxX: 608, maxY: 465 },
    right: { minX: 656, minY: 354, maxX: 764, maxY: 461 },
    top: { minX: 579, minY: 209, maxX: 692, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 609, maxY: 467 },
    right: { minX: 658, minY: 355, maxX: 766, maxY: 463 },
    top: { minX: 581, minY: 211, maxX: 693, maxY: 324 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 610, maxY: 467 },
    right: { minX: 659, minY: 356, maxX: 768, maxY: 463 },
    top: { minX: 582, minY: 211, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 497, minY: 353, maxX: 612, maxY: 468 },
    right: { minX: 660, minY: 357, maxX: 769, maxY: 464 },
    top: { minX: 583, minY: 212, maxX: 696, maxY: 325 },
  },
  {
    left: { minX: 499, minY: 356, maxX: 615, maxY: 470 },
    right: { minX: 663, minY: 359, maxX: 772, maxY: 466 },
    top: { minX: 586, minY: 215, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 496, minY: 355, maxX: 612, maxY: 470 },
    right: { minX: 660, minY: 358, maxX: 769, maxY: 466 },
    top: { minX: 583, minY: 214, maxX: 695, maxY: 327 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 611, maxY: 468 },
    right: { minX: 660, minY: 357, maxX: 768, maxY: 465 },
    top: { minX: 582, minY: 212, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 492, minY: 354, maxX: 608, maxY: 468 },
    right: { minX: 657, minY: 357, maxX: 766, maxY: 465 },
    top: { minX: 579, minY: 213, maxX: 692, maxY: 325 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 606, maxY: 468 },
    right: { minX: 654, minY: 356, maxX: 764, maxY: 464 },
    top: { minX: 577, minY: 211, maxX: 690, maxY: 324 },
  },
  {
    left: { minX: 486, minY: 352, maxX: 602, maxY: 467 },
    right: { minX: 652, minY: 355, maxX: 761, maxY: 464 },
    top: { minX: 573, minY: 210, maxX: 686, maxY: 324 },
  },
  {
    left: { minX: 484, minY: 352, maxX: 601, maxY: 467 },
    right: { minX: 650, minY: 355, maxX: 760, maxY: 463 },
    top: { minX: 571, minY: 209, maxX: 685, maxY: 324 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 605, maxY: 467 },
    right: { minX: 655, minY: 355, maxX: 765, maxY: 463 },
    top: { minX: 576, minY: 209, maxX: 690, maxY: 323 },
  },
  {
    left: { minX: 493, minY: 353, maxX: 608, maxY: 468 },
    right: { minX: 658, minY: 355, maxX: 768, maxY: 464 },
    top: { minX: 579, minY: 211, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 353, maxX: 610, maxY: 468 },
    right: { minX: 660, minY: 356, maxX: 770, maxY: 465 },
    top: { minX: 581, minY: 211, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 496, minY: 353, maxX: 612, maxY: 467 },
    right: { minX: 661, minY: 355, maxX: 772, maxY: 464 },
    top: { minX: 583, minY: 210, maxX: 696, maxY: 324 },
  },
  {
    left: { minX: 499, minY: 353, maxX: 614, maxY: 467 },
    right: { minX: 664, minY: 355, maxX: 775, maxY: 464 },
    top: { minX: 585, minY: 210, maxX: 699, maxY: 324 },
  },
  {
    left: { minX: 500, minY: 353, maxX: 616, maxY: 467 },
    right: { minX: 665, minY: 355, maxX: 776, maxY: 465 },
    top: { minX: 587, minY: 210, maxX: 700, maxY: 324 },
  },
  {
    left: { minX: 500, minY: 354, maxX: 615, maxY: 468 },
    right: { minX: 665, minY: 357, maxX: 776, maxY: 467 },
    top: { minX: 587, minY: 211, maxX: 700, maxY: 326 },
  },
  {
    left: { minX: 499, minY: 354, maxX: 614, maxY: 468 },
    right: { minX: 665, minY: 357, maxX: 776, maxY: 467 },
    top: { minX: 586, minY: 211, maxX: 699, maxY: 326 },
  },
  {
    left: { minX: 498, minY: 355, maxX: 614, maxY: 470 },
    right: { minX: 664, minY: 358, maxX: 775, maxY: 467 },
    top: { minX: 585, minY: 213, maxX: 698, maxY: 327 },
  },
  {
    left: { minX: 498, minY: 358, maxX: 613, maxY: 472 },
    right: { minX: 664, minY: 360, maxX: 774, maxY: 469 },
    top: { minX: 584, minY: 215, maxX: 697, maxY: 329 },
  },
  {
    left: { minX: 498, minY: 358, maxX: 613, maxY: 472 },
    right: { minX: 664, minY: 360, maxX: 775, maxY: 470 },
    top: { minX: 584, minY: 215, maxX: 697, maxY: 329 },
  },
  {
    left: { minX: 494, minY: 359, maxX: 610, maxY: 472 },
    right: { minX: 661, minY: 360, maxX: 772, maxY: 470 },
    top: { minX: 581, minY: 215, maxX: 694, maxY: 329 },
  },
  {
    left: { minX: 492, minY: 358, maxX: 607, maxY: 472 },
    right: { minX: 658, minY: 359, maxX: 770, maxY: 469 },
    top: { minX: 578, minY: 215, maxX: 691, maxY: 328 },
  },
  {
    left: { minX: 489, minY: 357, maxX: 605, maxY: 471 },
    right: { minX: 656, minY: 359, maxX: 768, maxY: 469 },
    top: { minX: 576, minY: 213, maxX: 689, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 602, maxY: 472 },
    right: { minX: 654, minY: 359, maxX: 765, maxY: 469 },
    top: { minX: 573, minY: 214, maxX: 687, maxY: 328 },
  },
  {
    left: { minX: 486, minY: 357, maxX: 602, maxY: 471 },
    right: { minX: 653, minY: 359, maxX: 765, maxY: 469 },
    top: { minX: 573, minY: 213, maxX: 686, maxY: 328 },
  },
  {
    left: { minX: 487, minY: 357, maxX: 602, maxY: 472 },
    right: { minX: 654, minY: 359, maxX: 766, maxY: 470 },
    top: { minX: 573, minY: 214, maxX: 687, maxY: 328 },
  },
  {
    left: { minX: 491, minY: 356, maxX: 607, maxY: 470 },
    right: { minX: 659, minY: 358, maxX: 771, maxY: 469 },
    top: { minX: 578, minY: 213, maxX: 692, maxY: 327 },
  },
  {
    left: { minX: 494, minY: 355, maxX: 610, maxY: 469 },
    right: { minX: 661, minY: 357, maxX: 774, maxY: 468 },
    top: { minX: 581, minY: 211, maxX: 694, maxY: 326 },
  },
  {
    left: { minX: 493, minY: 354, maxX: 609, maxY: 468 },
    right: { minX: 661, minY: 355, maxX: 774, maxY: 466 },
    top: { minX: 579, minY: 209, maxX: 694, maxY: 324 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 606, maxY: 466 },
    right: { minX: 659, minY: 353, maxX: 771, maxY: 465 },
    top: { minX: 577, minY: 207, maxX: 692, maxY: 322 },
  },
  {
    left: { minX: 491, minY: 352, maxX: 606, maxY: 466 },
    right: { minX: 658, minY: 353, maxX: 771, maxY: 465 },
    top: { minX: 577, minY: 207, maxX: 691, maxY: 322 },
  },
  {
    left: { minX: 492, minY: 353, maxX: 607, maxY: 467 },
    right: { minX: 659, minY: 355, maxX: 772, maxY: 467 },
    top: { minX: 579, minY: 208, maxX: 693, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 351, maxX: 610, maxY: 465 },
    right: { minX: 661, minY: 353, maxX: 775, maxY: 465 },
    top: { minX: 581, minY: 207, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 610, maxY: 466 },
    right: { minX: 662, minY: 353, maxX: 775, maxY: 465 },
    top: { minX: 581, minY: 207, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 610, maxY: 467 },
    right: { minX: 663, minY: 354, maxX: 776, maxY: 466 },
    top: { minX: 581, minY: 208, maxX: 695, maxY: 323 },
  },
  {
    left: { minX: 497, minY: 352, maxX: 612, maxY: 466 },
    right: { minX: 664, minY: 353, maxX: 778, maxY: 466 },
    top: { minX: 583, minY: 207, maxX: 697, maxY: 322 },
  },
  {
    left: { minX: 497, minY: 352, maxX: 612, maxY: 466 },
    right: { minX: 663, minY: 353, maxX: 777, maxY: 466 },
    top: { minX: 582, minY: 207, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 498, minY: 351, maxX: 612, maxY: 465 },
    right: { minX: 665, minY: 353, maxX: 778, maxY: 466 },
    top: { minX: 584, minY: 207, maxX: 698, maxY: 322 },
  },
  {
    left: { minX: 497, minY: 352, maxX: 612, maxY: 466 },
    right: { minX: 664, minY: 354, maxX: 777, maxY: 467 },
    top: { minX: 583, minY: 207, maxX: 698, maxY: 323 },
  },
  {
    left: { minX: 497, minY: 352, maxX: 611, maxY: 465 },
    right: { minX: 663, minY: 354, maxX: 777, maxY: 466 },
    top: { minX: 583, minY: 207, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 496, minY: 351, maxX: 611, maxY: 465 },
    right: { minX: 663, minY: 353, maxX: 777, maxY: 465 },
    top: { minX: 582, minY: 206, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 497, minY: 351, maxX: 612, maxY: 464 },
    right: { minX: 664, minY: 352, maxX: 778, maxY: 465 },
    top: { minX: 583, minY: 205, maxX: 697, maxY: 321 },
  },
  {
    left: { minX: 497, minY: 351, maxX: 612, maxY: 464 },
    right: { minX: 664, minY: 352, maxX: 778, maxY: 465 },
    top: { minX: 583, minY: 205, maxX: 697, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 610, maxY: 465 },
    right: { minX: 662, minY: 353, maxX: 776, maxY: 466 },
    top: { minX: 581, minY: 207, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 354, maxX: 608, maxY: 467 },
    right: { minX: 660, minY: 355, maxX: 774, maxY: 467 },
    top: { minX: 577, minY: 209, maxX: 692, maxY: 324 },
  },
  {
    left: { minX: 493, minY: 354, maxX: 608, maxY: 467 },
    right: { minX: 659, minY: 355, maxX: 773, maxY: 467 },
    top: { minX: 577, minY: 209, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 491, minY: 355, maxX: 606, maxY: 468 },
    right: { minX: 658, minY: 355, maxX: 772, maxY: 468 },
    top: { minX: 576, minY: 209, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 489, minY: 354, maxX: 604, maxY: 467 },
    right: { minX: 655, minY: 354, maxX: 769, maxY: 467 },
    top: { minX: 573, minY: 209, maxX: 688, maxY: 323 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 603, maxY: 466 },
    right: { minX: 655, minY: 353, maxX: 769, maxY: 467 },
    top: { minX: 573, minY: 207, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 487, minY: 353, maxX: 601, maxY: 466 },
    right: { minX: 653, minY: 353, maxX: 767, maxY: 466 },
    top: { minX: 570, minY: 207, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 600, maxY: 467 },
    right: { minX: 651, minY: 353, maxX: 765, maxY: 467 },
    top: { minX: 568, minY: 208, maxX: 682, maxY: 323 },
  },
  {
    left: { minX: 485, minY: 354, maxX: 600, maxY: 467 },
    right: { minX: 651, minY: 354, maxX: 765, maxY: 466 },
    top: { minX: 569, minY: 209, maxX: 682, maxY: 324 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 600, maxY: 467 },
    right: { minX: 651, minY: 355, maxX: 765, maxY: 467 },
    top: { minX: 569, minY: 209, maxX: 682, maxY: 325 },
  },
  {
    left: { minX: 485, minY: 355, maxX: 599, maxY: 468 },
    right: { minX: 650, minY: 355, maxX: 764, maxY: 468 },
    top: { minX: 568, minY: 210, maxX: 682, maxY: 325 },
  },
  {
    left: { minX: 483, minY: 354, maxX: 597, maxY: 467 },
    right: { minX: 649, minY: 354, maxX: 762, maxY: 467 },
    top: { minX: 566, minY: 209, maxX: 680, maxY: 324 },
  },
  {
    left: { minX: 483, minY: 352, maxX: 598, maxY: 465 },
    right: { minX: 649, minY: 353, maxX: 763, maxY: 466 },
    top: { minX: 567, minY: 207, maxX: 681, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 351, maxX: 599, maxY: 464 },
    right: { minX: 651, minY: 353, maxX: 764, maxY: 466 },
    top: { minX: 569, minY: 207, maxX: 683, maxY: 322 },
  },
  {
    left: { minX: 486, minY: 352, maxX: 600, maxY: 464 },
    right: { minX: 651, minY: 353, maxX: 765, maxY: 466 },
    top: { minX: 569, minY: 207, maxX: 684, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 353, maxX: 602, maxY: 464 },
    right: { minX: 653, minY: 353, maxX: 768, maxY: 466 },
    top: { minX: 571, minY: 207, maxX: 685, maxY: 322 },
  },
  {
    left: { minX: 491, minY: 354, maxX: 604, maxY: 465 },
    right: { minX: 655, minY: 354, maxX: 769, maxY: 467 },
    top: { minX: 573, minY: 209, maxX: 687, maxY: 323 },
  },
  {
    left: { minX: 493, minY: 353, maxX: 606, maxY: 465 },
    right: { minX: 656, minY: 353, maxX: 771, maxY: 466 },
    top: { minX: 575, minY: 207, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 608, maxY: 463 },
    right: { minX: 659, minY: 352, maxX: 774, maxY: 465 },
    top: { minX: 577, minY: 207, maxX: 691, maxY: 322 },
  },
  {
    left: { minX: 494, minY: 352, maxX: 607, maxY: 463 },
    right: { minX: 657, minY: 352, maxX: 772, maxY: 465 },
    top: { minX: 575, minY: 207, maxX: 690, maxY: 321 },
  },
  {
    left: { minX: 492, minY: 350, maxX: 605, maxY: 461 },
    right: { minX: 656, minY: 351, maxX: 770, maxY: 464 },
    top: { minX: 574, minY: 205, maxX: 688, maxY: 320 },
  },
  {
    left: { minX: 493, minY: 351, maxX: 605, maxY: 462 },
    right: { minX: 656, minY: 352, maxX: 770, maxY: 465 },
    top: { minX: 574, minY: 207, maxX: 688, maxY: 321 },
  },
  {
    left: { minX: 491, minY: 351, maxX: 604, maxY: 462 },
    right: { minX: 654, minY: 352, maxX: 769, maxY: 465 },
    top: { minX: 573, minY: 207, maxX: 686, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 602, maxY: 463 },
    right: { minX: 652, minY: 352, maxX: 766, maxY: 465 },
    top: { minX: 571, minY: 207, maxX: 684, maxY: 322 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 602, maxY: 463 },
    right: { minX: 652, minY: 353, maxX: 766, maxY: 466 },
    top: { minX: 571, minY: 208, maxX: 684, maxY: 322 },
  },
  {
    left: { minX: 491, minY: 354, maxX: 603, maxY: 464 },
    right: { minX: 653, minY: 354, maxX: 767, maxY: 467 },
    top: { minX: 571, minY: 209, maxX: 684, maxY: 324 },
  },
  {
    left: { minX: 494, minY: 354, maxX: 605, maxY: 464 },
    right: { minX: 655, minY: 354, maxX: 769, maxY: 467 },
    top: { minX: 574, minY: 209, maxX: 687, maxY: 324 },
  },
  {
    left: { minX: 496, minY: 353, maxX: 608, maxY: 463 },
    right: { minX: 657, minY: 353, maxX: 772, maxY: 466 },
    top: { minX: 576, minY: 208, maxX: 689, maxY: 322 },
  },
  {
    left: { minX: 494, minY: 352, maxX: 606, maxY: 462 },
    right: { minX: 655, minY: 352, maxX: 770, maxY: 465 },
    top: { minX: 574, minY: 208, maxX: 687, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 353, maxX: 607, maxY: 463 },
    right: { minX: 656, minY: 352, maxX: 771, maxY: 466 },
    top: { minX: 575, minY: 208, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 497, minY: 351, maxX: 608, maxY: 461 },
    right: { minX: 658, minY: 351, maxX: 772, maxY: 464 },
    top: { minX: 577, minY: 206, maxX: 690, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 351, maxX: 608, maxY: 461 },
    right: { minX: 657, minY: 351, maxX: 772, maxY: 465 },
    top: { minX: 576, minY: 207, maxX: 690, maxY: 321 },
  },
  {
    left: { minX: 497, minY: 351, maxX: 609, maxY: 460 },
    right: { minX: 658, minY: 351, maxX: 773, maxY: 464 },
    top: { minX: 577, minY: 206, maxX: 690, maxY: 320 },
  },
  {
    left: { minX: 500, minY: 350, maxX: 612, maxY: 460 },
    right: { minX: 661, minY: 351, maxX: 776, maxY: 464 },
    top: { minX: 580, minY: 206, maxX: 693, maxY: 320 },
  },
  {
    left: { minX: 500, minY: 351, maxX: 612, maxY: 461 },
    right: { minX: 661, minY: 351, maxX: 776, maxY: 465 },
    top: { minX: 580, minY: 207, maxX: 693, maxY: 321 },
  },
  {
    left: { minX: 502, minY: 351, maxX: 613, maxY: 461 },
    right: { minX: 662, minY: 352, maxX: 777, maxY: 465 },
    top: { minX: 582, minY: 208, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 503, minY: 351, maxX: 614, maxY: 460 },
    right: { minX: 663, minY: 351, maxX: 777, maxY: 465 },
    top: { minX: 582, minY: 207, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 506, minY: 349, maxX: 617, maxY: 458 },
    right: { minX: 666, minY: 350, maxX: 781, maxY: 464 },
    top: { minX: 587, minY: 205, maxX: 700, maxY: 319 },
  },
  {
    left: { minX: 511, minY: 349, maxX: 622, maxY: 459 },
    right: { minX: 670, minY: 351, maxX: 786, maxY: 464 },
    top: { minX: 591, minY: 206, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 516, minY: 350, maxX: 626, maxY: 459 },
    right: { minX: 675, minY: 350, maxX: 791, maxY: 464 },
    top: { minX: 595, minY: 206, maxX: 708, maxY: 320 },
  },
  {
    left: { minX: 518, minY: 351, maxX: 628, maxY: 459 },
    right: { minX: 677, minY: 351, maxX: 792, maxY: 465 },
    top: { minX: 597, minY: 207, maxX: 710, maxY: 321 },
  },
  {
    left: { minX: 522, minY: 349, maxX: 632, maxY: 458 },
    right: { minX: 681, minY: 351, maxX: 796, maxY: 465 },
    top: { minX: 601, minY: 206, maxX: 714, maxY: 320 },
  },
  {
    left: { minX: 523, minY: 350, maxX: 632, maxY: 459 },
    right: { minX: 681, minY: 351, maxX: 797, maxY: 465 },
    top: { minX: 602, minY: 207, maxX: 715, maxY: 321 },
  },
  {
    left: { minX: 522, minY: 351, maxX: 631, maxY: 459 },
    right: { minX: 680, minY: 352, maxX: 796, maxY: 466 },
    top: { minX: 601, minY: 207, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 521, minY: 351, maxX: 630, maxY: 459 },
    right: { minX: 679, minY: 352, maxX: 794, maxY: 466 },
    top: { minX: 600, minY: 208, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 521, minY: 351, maxX: 630, maxY: 459 },
    right: { minX: 678, minY: 351, maxX: 794, maxY: 465 },
    top: { minX: 599, minY: 207, maxX: 712, maxY: 321 },
  },
  {
    left: { minX: 522, minY: 351, maxX: 632, maxY: 459 },
    right: { minX: 679, minY: 352, maxX: 795, maxY: 465 },
    top: { minX: 601, minY: 207, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 522, minY: 351, maxX: 631, maxY: 458 },
    right: { minX: 680, minY: 352, maxX: 795, maxY: 465 },
    top: { minX: 601, minY: 207, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 523, minY: 348, maxX: 632, maxY: 456 },
    right: { minX: 681, minY: 349, maxX: 797, maxY: 463 },
    top: { minX: 602, minY: 205, maxX: 715, maxY: 319 },
  },
  {
    left: { minX: 523, minY: 347, maxX: 633, maxY: 455 },
    right: { minX: 681, minY: 348, maxX: 798, maxY: 463 },
    top: { minX: 603, minY: 203, maxX: 716, maxY: 318 },
  },
  {
    left: { minX: 524, minY: 349, maxX: 633, maxY: 457 },
    right: { minX: 681, minY: 350, maxX: 797, maxY: 464 },
    top: { minX: 603, minY: 205, maxX: 716, maxY: 319 },
  },
  {
    left: { minX: 520, minY: 352, maxX: 630, maxY: 460 },
    right: { minX: 678, minY: 353, maxX: 794, maxY: 467 },
    top: { minX: 599, minY: 209, maxX: 712, maxY: 322 },
  },
  {
    left: { minX: 518, minY: 352, maxX: 627, maxY: 460 },
    right: { minX: 675, minY: 353, maxX: 791, maxY: 467 },
    top: { minX: 597, minY: 208, maxX: 709, maxY: 322 },
  },
  {
    left: { minX: 515, minY: 353, maxX: 625, maxY: 462 },
    right: { minX: 673, minY: 355, maxX: 789, maxY: 469 },
    top: { minX: 595, minY: 210, maxX: 707, maxY: 324 },
  },
  {
    left: { minX: 514, minY: 352, maxX: 624, maxY: 461 },
    right: { minX: 672, minY: 353, maxX: 788, maxY: 467 },
    top: { minX: 593, minY: 208, maxX: 706, maxY: 322 },
  },
  {
    left: { minX: 511, minY: 353, maxX: 622, maxY: 462 },
    right: { minX: 670, minY: 354, maxX: 786, maxY: 468 },
    top: { minX: 591, minY: 209, maxX: 704, maxY: 323 },
  },
  {
    left: { minX: 506, minY: 351, maxX: 616, maxY: 461 },
    right: { minX: 665, minY: 352, maxX: 781, maxY: 467 },
    top: { minX: 585, minY: 207, maxX: 698, maxY: 322 },
  },
  {
    left: { minX: 504, minY: 352, maxX: 615, maxY: 462 },
    right: { minX: 663, minY: 353, maxX: 779, maxY: 467 },
    top: { minX: 583, minY: 208, maxX: 696, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 352, maxX: 613, maxY: 462 },
    right: { minX: 662, minY: 353, maxX: 778, maxY: 468 },
    top: { minX: 581, minY: 207, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 351, maxX: 614, maxY: 461 },
    right: { minX: 662, minY: 351, maxX: 779, maxY: 467 },
    top: { minX: 582, minY: 205, maxX: 696, maxY: 321 },
  },
  {
    left: { minX: 501, minY: 353, maxX: 613, maxY: 463 },
    right: { minX: 661, minY: 353, maxX: 778, maxY: 469 },
    top: { minX: 581, minY: 207, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 499, minY: 351, maxX: 612, maxY: 462 },
    right: { minX: 660, minY: 353, maxX: 778, maxY: 469 },
    top: { minX: 579, minY: 206, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 352, maxX: 612, maxY: 462 },
    right: { minX: 661, minY: 353, maxX: 778, maxY: 469 },
    top: { minX: 580, minY: 205, maxX: 695, maxY: 322 },
  },
  {
    left: { minX: 499, minY: 351, maxX: 612, maxY: 463 },
    right: { minX: 661, minY: 352, maxX: 779, maxY: 469 },
    top: { minX: 580, minY: 205, maxX: 695, maxY: 321 },
  },
  {
    left: { minX: 498, minY: 350, maxX: 611, maxY: 461 },
    right: { minX: 660, minY: 351, maxX: 778, maxY: 467 },
    top: { minX: 579, minY: 203, maxX: 694, maxY: 320 },
  },
  {
    left: { minX: 495, minY: 352, maxX: 609, maxY: 464 },
    right: { minX: 658, minY: 353, maxX: 776, maxY: 470 },
    top: { minX: 576, minY: 205, maxX: 693, maxY: 322 },
  },
  {
    left: { minX: 495, minY: 351, maxX: 609, maxY: 464 },
    right: { minX: 658, minY: 352, maxX: 777, maxY: 469 },
    top: { minX: 576, minY: 203, maxX: 692, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 352, maxX: 607, maxY: 465 },
    right: { minX: 657, minY: 352, maxX: 776, maxY: 470 },
    top: { minX: 574, minY: 203, maxX: 690, maxY: 321 },
  },
  {
    left: { minX: 490, minY: 353, maxX: 605, maxY: 466 },
    right: { minX: 655, minY: 353, maxX: 774, maxY: 471 },
    top: { minX: 571, minY: 203, maxX: 688, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 352, maxX: 604, maxY: 465 },
    right: { minX: 654, minY: 351, maxX: 774, maxY: 470 },
    top: { minX: 570, minY: 201, maxX: 687, maxY: 320 },
  },
  {
    left: { minX: 487, minY: 356, maxX: 602, maxY: 470 },
    right: { minX: 652, minY: 355, maxX: 772, maxY: 474 },
    top: { minX: 567, minY: 205, maxX: 685, maxY: 324 },
  },
  {
    left: { minX: 487, minY: 358, maxX: 602, maxY: 473 },
    right: { minX: 653, minY: 357, maxX: 774, maxY: 477 },
    top: { minX: 567, minY: 207, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 487, minY: 359, maxX: 603, maxY: 473 },
    right: { minX: 653, minY: 357, maxX: 775, maxY: 478 },
    top: { minX: 568, minY: 207, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 487, minY: 360, maxX: 603, maxY: 475 },
    right: { minX: 654, minY: 359, maxX: 776, maxY: 479 },
    top: { minX: 568, minY: 208, maxX: 686, maxY: 328 },
  },
  {
    left: { minX: 485, minY: 360, maxX: 602, maxY: 475 },
    right: { minX: 653, minY: 359, maxX: 775, maxY: 479 },
    top: { minX: 567, minY: 207, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 484, minY: 360, maxX: 601, maxY: 476 },
    right: { minX: 651, minY: 359, maxX: 775, maxY: 480 },
    top: { minX: 565, minY: 207, maxX: 685, maxY: 328 },
  },
  {
    left: { minX: 481, minY: 360, maxX: 600, maxY: 477 },
    right: { minX: 651, minY: 359, maxX: 774, maxY: 481 },
    top: { minX: 563, minY: 206, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 479, minY: 360, maxX: 598, maxY: 477 },
    right: { minX: 649, minY: 359, maxX: 774, maxY: 482 },
    top: { minX: 563, minY: 205, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 478, minY: 359, maxX: 598, maxY: 477 },
    right: { minX: 649, minY: 359, maxX: 774, maxY: 483 },
    top: { minX: 562, minY: 203, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 477, minY: 361, maxX: 596, maxY: 479 },
    right: { minX: 648, minY: 361, maxX: 773, maxY: 485 },
    top: { minX: 561, minY: 205, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 475, minY: 360, maxX: 596, maxY: 478 },
    right: { minX: 647, minY: 359, maxX: 773, maxY: 484 },
    top: { minX: 560, minY: 203, maxX: 683, maxY: 327 },
  },
  {
    left: { minX: 475, minY: 360, maxX: 596, maxY: 479 },
    right: { minX: 648, minY: 360, maxX: 775, maxY: 486 },
    top: { minX: 561, minY: 203, maxX: 684, maxY: 327 },
  },
  {
    left: { minX: 474, minY: 359, maxX: 596, maxY: 478 },
    right: { minX: 648, minY: 359, maxX: 776, maxY: 485 },
    top: { minX: 561, minY: 200, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 474, minY: 359, maxX: 596, maxY: 479 },
    right: { minX: 649, minY: 359, maxX: 776, maxY: 486 },
    top: { minX: 561, minY: 200, maxX: 685, maxY: 326 },
  },
  {
    left: { minX: 473, minY: 358, maxX: 596, maxY: 479 },
    right: { minX: 648, minY: 359, maxX: 776, maxY: 486 },
    top: { minX: 559, minY: 199, maxX: 684, maxY: 325 },
  },
  {
    left: { minX: 472, minY: 358, maxX: 595, maxY: 479 },
    right: { minX: 649, minY: 358, maxX: 778, maxY: 485 },
    top: { minX: 559, minY: 197, maxX: 685, maxY: 324 },
  },
  {
    left: { minX: 473, minY: 360, maxX: 597, maxY: 482 },
    right: { minX: 651, minY: 361, maxX: 780, maxY: 489 },
    top: { minX: 561, minY: 199, maxX: 687, maxY: 327 },
  },
  {
    left: { minX: 473, minY: 362, maxX: 597, maxY: 484 },
    right: { minX: 651, minY: 362, maxX: 781, maxY: 491 },
    top: { minX: 561, minY: 200, maxX: 688, maxY: 328 },
  },
  {
    left: { minX: 471, minY: 361, maxX: 596, maxY: 484 },
    right: { minX: 649, minY: 361, maxX: 780, maxY: 491 },
    top: { minX: 559, minY: 199, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 469, minY: 363, maxX: 594, maxY: 486 },
    right: { minX: 648, minY: 363, maxX: 780, maxY: 493 },
    top: { minX: 557, minY: 199, maxX: 685, maxY: 328 },
  },
  {
    left: { minX: 467, minY: 363, maxX: 593, maxY: 487 },
    right: { minX: 647, minY: 363, maxX: 779, maxY: 494 },
    top: { minX: 557, minY: 199, maxX: 685, maxY: 329 },
  },
  {
    left: { minX: 467, minY: 362, maxX: 593, maxY: 486 },
    right: { minX: 647, minY: 363, maxX: 780, maxY: 494 },
    top: { minX: 557, minY: 198, maxX: 686, maxY: 328 },
  },
  {
    left: { minX: 466, minY: 361, maxX: 593, maxY: 486 },
    right: { minX: 647, minY: 362, maxX: 780, maxY: 494 },
    top: { minX: 557, minY: 197, maxX: 686, maxY: 327 },
  },
  {
    left: { minX: 465, minY: 361, maxX: 592, maxY: 486 },
    right: { minX: 647, minY: 362, maxX: 780, maxY: 495 },
    top: { minX: 555, minY: 196, maxX: 685, maxY: 327 },
  },
  {
    left: { minX: 462, minY: 362, maxX: 590, maxY: 488 },
    right: { minX: 645, minY: 363, maxX: 778, maxY: 496 },
    top: { minX: 553, minY: 196, maxX: 683, maxY: 328 },
  },
  {
    left: { minX: 460, minY: 362, maxX: 588, maxY: 488 },
    right: { minX: 643, minY: 363, maxX: 777, maxY: 496 },
    top: { minX: 551, minY: 195, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 460, minY: 362, maxX: 589, maxY: 489 },
    right: { minX: 644, minY: 363, maxX: 778, maxY: 497 },
    top: { minX: 552, minY: 195, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 457, minY: 362, maxX: 587, maxY: 489 },
    right: { minX: 643, minY: 363, maxX: 778, maxY: 498 },
    top: { minX: 551, minY: 194, maxX: 682, maxY: 327 },
  },
  {
    left: { minX: 458, minY: 357, maxX: 588, maxY: 486 },
    right: { minX: 645, minY: 359, maxX: 780, maxY: 494 },
    top: { minX: 551, minY: 188, maxX: 684, maxY: 323 },
  },
  {
    left: { minX: 457, minY: 359, maxX: 587, maxY: 488 },
    right: { minX: 644, minY: 360, maxX: 780, maxY: 496 },
    top: { minX: 551, minY: 189, maxX: 683, maxY: 324 },
  },
  {
    left: { minX: 456, minY: 357, maxX: 587, maxY: 486 },
    right: { minX: 643, minY: 358, maxX: 780, maxY: 495 },
    top: { minX: 549, minY: 187, maxX: 684, maxY: 322 },
  },
  {
    left: { minX: 453, minY: 355, maxX: 585, maxY: 484 },
    right: { minX: 641, minY: 356, maxX: 779, maxY: 493 },
    top: { minX: 547, minY: 183, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 451, minY: 358, maxX: 584, maxY: 488 },
    right: { minX: 640, minY: 359, maxX: 778, maxY: 496 },
    top: { minX: 545, minY: 187, maxX: 680, maxY: 322 },
  },
  {
    left: { minX: 451, minY: 355, maxX: 583, maxY: 485 },
    right: { minX: 640, minY: 355, maxX: 778, maxY: 493 },
    top: { minX: 545, minY: 182, maxX: 680, maxY: 319 },
  },
  {
    left: { minX: 451, minY: 354, maxX: 583, maxY: 485 },
    right: { minX: 640, minY: 355, maxX: 779, maxY: 493 },
    top: { minX: 545, minY: 181, maxX: 680, maxY: 318 },
  },
  {
    left: { minX: 448, minY: 352, maxX: 581, maxY: 483 },
    right: { minX: 638, minY: 353, maxX: 777, maxY: 492 },
    top: { minX: 542, minY: 179, maxX: 679, maxY: 317 },
  },
  {
    left: { minX: 446, minY: 351, maxX: 580, maxY: 482 },
    right: { minX: 637, minY: 352, maxX: 777, maxY: 491 },
    top: { minX: 541, minY: 177, maxX: 678, maxY: 315 },
  },
  {
    left: { minX: 445, minY: 351, maxX: 580, maxY: 483 },
    right: { minX: 637, minY: 353, maxX: 776, maxY: 492 },
    top: { minX: 541, minY: 177, maxX: 678, maxY: 316 },
  },
  {
    left: { minX: 443, minY: 353, maxX: 578, maxY: 485 },
    right: { minX: 635, minY: 354, maxX: 776, maxY: 494 },
    top: { minX: 539, minY: 177, maxX: 676, maxY: 317 },
  },
  {
    left: { minX: 440, minY: 354, maxX: 576, maxY: 487 },
    right: { minX: 633, minY: 355, maxX: 774, maxY: 495 },
    top: { minX: 536, minY: 179, maxX: 674, maxY: 318 },
  },
  {
    left: { minX: 438, minY: 353, maxX: 574, maxY: 487 },
    right: { minX: 633, minY: 354, maxX: 774, maxY: 495 },
    top: { minX: 535, minY: 176, maxX: 673, maxY: 316 },
  },
  {
    left: { minX: 436, minY: 354, maxX: 573, maxY: 488 },
    right: { minX: 631, minY: 355, maxX: 773, maxY: 496 },
    top: { minX: 533, minY: 177, maxX: 672, maxY: 317 },
  },
  {
    left: { minX: 435, minY: 354, maxX: 573, maxY: 488 },
    right: { minX: 631, minY: 355, maxX: 774, maxY: 496 },
    top: { minX: 533, minY: 176, maxX: 672, maxY: 317 },
  },
  {
    left: { minX: 433, minY: 354, maxX: 571, maxY: 489 },
    right: { minX: 630, minY: 355, maxX: 773, maxY: 497 },
    top: { minX: 531, minY: 176, maxX: 670, maxY: 317 },
  },
  {
    left: { minX: 433, minY: 355, maxX: 571, maxY: 490 },
    right: { minX: 630, minY: 355, maxX: 773, maxY: 498 },
    top: { minX: 531, minY: 175, maxX: 671, maxY: 317 },
  },
  {
    left: { minX: 433, minY: 355, maxX: 571, maxY: 490 },
    right: { minX: 630, minY: 355, maxX: 774, maxY: 498 },
    top: { minX: 531, minY: 175, maxX: 672, maxY: 317 },
  },
  {
    left: { minX: 431, minY: 355, maxX: 570, maxY: 491 },
    right: { minX: 629, minY: 355, maxX: 773, maxY: 499 },
    top: { minX: 529, minY: 175, maxX: 670, maxY: 317 },
  },
  {
    left: { minX: 429, minY: 355, maxX: 568, maxY: 492 },
    right: { minX: 627, minY: 355, maxX: 772, maxY: 499 },
    top: { minX: 527, minY: 174, maxX: 668, maxY: 317 },
  },
  {
    left: { minX: 426, minY: 356, maxX: 566, maxY: 493 },
    right: { minX: 626, minY: 355, maxX: 771, maxY: 500 },
    top: { minX: 525, minY: 174, maxX: 667, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 356, maxX: 566, maxY: 494 },
    right: { minX: 625, minY: 356, maxX: 771, maxY: 501 },
    top: { minX: 524, minY: 174, maxX: 666, maxY: 318 },
  },
  {
    left: { minX: 425, minY: 356, maxX: 566, maxY: 494 },
    right: { minX: 626, minY: 355, maxX: 772, maxY: 501 },
    top: { minX: 524, minY: 173, maxX: 667, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 355, maxX: 567, maxY: 493 },
    right: { minX: 627, minY: 355, maxX: 774, maxY: 501 },
    top: { minX: 525, minY: 171, maxX: 668, maxY: 316 },
  },
  {
    left: { minX: 425, minY: 355, maxX: 567, maxY: 493 },
    right: { minX: 627, minY: 354, maxX: 774, maxY: 501 },
    top: { minX: 525, minY: 170, maxX: 668, maxY: 316 },
  },
  {
    left: { minX: 425, minY: 356, maxX: 567, maxY: 495 },
    right: { minX: 627, minY: 355, maxX: 775, maxY: 503 },
    top: { minX: 525, minY: 171, maxX: 668, maxY: 317 },
  },
  {
    left: { minX: 424, minY: 355, maxX: 567, maxY: 495 },
    right: { minX: 627, minY: 355, maxX: 775, maxY: 503 },
    top: { minX: 523, minY: 169, maxX: 668, maxY: 316 },
  },
  {
    left: { minX: 423, minY: 356, maxX: 566, maxY: 496 },
    right: { minX: 627, minY: 355, maxX: 775, maxY: 503 },
    top: { minX: 523, minY: 170, maxX: 668, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 356, maxX: 568, maxY: 496 },
    right: { minX: 628, minY: 355, maxX: 777, maxY: 504 },
    top: { minX: 525, minY: 169, maxX: 670, maxY: 316 },
  },
  {
    left: { minX: 426, minY: 355, maxX: 569, maxY: 495 },
    right: { minX: 629, minY: 354, maxX: 779, maxY: 503 },
    top: { minX: 525, minY: 168, maxX: 671, maxY: 315 },
  },
  {
    left: { minX: 426, minY: 357, maxX: 570, maxY: 497 },
    right: { minX: 631, minY: 356, maxX: 779, maxY: 505 },
    top: { minX: 527, minY: 170, maxX: 672, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 357, maxX: 569, maxY: 497 },
    right: { minX: 629, minY: 356, maxX: 779, maxY: 506 },
    top: { minX: 525, minY: 169, maxX: 672, maxY: 317 },
  },
  {
    left: { minX: 425, minY: 357, maxX: 569, maxY: 498 },
    right: { minX: 629, minY: 357, maxX: 779, maxY: 507 },
    top: { minX: 525, minY: 170, maxX: 672, maxY: 318 },
  },
  {
    left: { minX: 425, minY: 357, maxX: 569, maxY: 498 },
    right: { minX: 630, minY: 357, maxX: 780, maxY: 507 },
    top: { minX: 526, minY: 169, maxX: 672, maxY: 318 },
  },
  {
    left: { minX: 426, minY: 355, maxX: 570, maxY: 496 },
    right: { minX: 631, minY: 355, maxX: 782, maxY: 505 },
    top: { minX: 527, minY: 166, maxX: 674, maxY: 315 },
  },
  {
    left: { minX: 425, minY: 357, maxX: 570, maxY: 498 },
    right: { minX: 631, minY: 357, maxX: 782, maxY: 507 },
    top: { minX: 527, minY: 168, maxX: 674, maxY: 318 },
  },
  {
    left: { minX: 423, minY: 357, maxX: 568, maxY: 499 },
    right: { minX: 629, minY: 357, maxX: 780, maxY: 507 },
    top: { minX: 523, minY: 169, maxX: 671, maxY: 317 },
  },
  {
    left: { minX: 423, minY: 359, maxX: 568, maxY: 500 },
    right: { minX: 629, minY: 359, maxX: 780, maxY: 509 },
    top: { minX: 525, minY: 171, maxX: 672, maxY: 319 },
  },
  {
    left: { minX: 425, minY: 359, maxX: 569, maxY: 500 },
    right: { minX: 630, minY: 359, maxX: 781, maxY: 509 },
    top: { minX: 526, minY: 171, maxX: 673, maxY: 319 },
  },
  {
    left: { minX: 424, minY: 358, maxX: 569, maxY: 500 },
    right: { minX: 630, minY: 358, maxX: 781, maxY: 509 },
    top: { minX: 526, minY: 171, maxX: 673, maxY: 318 },
  },
  {
    left: { minX: 425, minY: 361, maxX: 569, maxY: 502 },
    right: { minX: 630, minY: 361, maxX: 780, maxY: 511 },
    top: { minX: 526, minY: 173, maxX: 672, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 361, maxX: 569, maxY: 502 },
    right: { minX: 630, minY: 361, maxX: 780, maxY: 511 },
    top: { minX: 526, minY: 173, maxX: 673, maxY: 322 },
  },
  {
    left: { minX: 425, minY: 359, maxX: 570, maxY: 501 },
    right: { minX: 630, minY: 359, maxX: 781, maxY: 509 },
    top: { minX: 526, minY: 172, maxX: 673, maxY: 320 },
  },
  {
    left: { minX: 427, minY: 358, maxX: 572, maxY: 499 },
    right: { minX: 633, minY: 357, maxX: 784, maxY: 508 },
    top: { minX: 528, minY: 169, maxX: 675, maxY: 318 },
  },
  {
    left: { minX: 428, minY: 357, maxX: 573, maxY: 499 },
    right: { minX: 633, minY: 357, maxX: 784, maxY: 508 },
    top: { minX: 529, minY: 169, maxX: 676, maxY: 318 },
  },
  {
    left: { minX: 430, minY: 357, maxX: 574, maxY: 498 },
    right: { minX: 635, minY: 357, maxX: 786, maxY: 507 },
    top: { minX: 531, minY: 168, maxX: 678, maxY: 317 },
  },
  {
    left: { minX: 431, minY: 357, maxX: 576, maxY: 498 },
    right: { minX: 637, minY: 358, maxX: 788, maxY: 508 },
    top: { minX: 533, minY: 169, maxX: 680, maxY: 318 },
  },
  {
    left: { minX: 432, minY: 357, maxX: 576, maxY: 498 },
    right: { minX: 637, minY: 357, maxX: 788, maxY: 508 },
    top: { minX: 533, minY: 169, maxX: 680, maxY: 318 },
  },
  {
    left: { minX: 431, minY: 356, maxX: 576, maxY: 498 },
    right: { minX: 636, minY: 356, maxX: 788, maxY: 507 },
    top: { minX: 532, minY: 168, maxX: 679, maxY: 317 },
  },
  {
    left: { minX: 431, minY: 356, maxX: 575, maxY: 497 },
    right: { minX: 636, minY: 356, maxX: 788, maxY: 507 },
    top: { minX: 531, minY: 167, maxX: 678, maxY: 316 },
  },
  {
    left: { minX: 433, minY: 354, maxX: 577, maxY: 495 },
    right: { minX: 638, minY: 353, maxX: 790, maxY: 505 },
    top: { minX: 533, minY: 165, maxX: 681, maxY: 314 },
  },
  {
    left: { minX: 435, minY: 353, maxX: 580, maxY: 494 },
    right: { minX: 640, minY: 353, maxX: 792, maxY: 504 },
    top: { minX: 536, minY: 163, maxX: 684, maxY: 313 },
  },
  {
    left: { minX: 434, minY: 350, maxX: 579, maxY: 492 },
    right: { minX: 640, minY: 350, maxX: 792, maxY: 502 },
    top: { minX: 535, minY: 159, maxX: 683, maxY: 311 },
  },
  {
    left: { minX: 431, minY: 349, maxX: 576, maxY: 491 },
    right: { minX: 638, minY: 349, maxX: 790, maxY: 501 },
    top: { minX: 533, minY: 158, maxX: 681, maxY: 309 },
  },
  {
    left: { minX: 431, minY: 349, maxX: 576, maxY: 491 },
    right: { minX: 637, minY: 349, maxX: 790, maxY: 501 },
    top: { minX: 533, minY: 158, maxX: 681, maxY: 309 },
  },
  {
    left: { minX: 430, minY: 348, maxX: 576, maxY: 490 },
    right: { minX: 637, minY: 348, maxX: 790, maxY: 500 },
    top: { minX: 532, minY: 157, maxX: 680, maxY: 308 },
  },
  {
    left: { minX: 433, minY: 356, maxX: 578, maxY: 499 },
    right: { minX: 639, minY: 357, maxX: 792, maxY: 509 },
    top: { minX: 535, minY: 166, maxX: 683, maxY: 317 },
  },
  {
    left: { minX: 436, minY: 365, maxX: 581, maxY: 508 },
    right: { minX: 642, minY: 367, maxX: 795, maxY: 519 },
    top: { minX: 538, minY: 176, maxX: 686, maxY: 326 },
  },
  {
    left: { minX: 441, minY: 364, maxX: 585, maxY: 507 },
    right: { minX: 647, minY: 366, maxX: 800, maxY: 519 },
    top: { minX: 542, minY: 175, maxX: 690, maxY: 325 },
  },
  {
    left: { minX: 444, minY: 367, maxX: 588, maxY: 509 },
    right: { minX: 649, minY: 369, maxX: 802, maxY: 521 },
    top: { minX: 545, minY: 177, maxX: 694, maxY: 328 },
  },
  {
    left: { minX: 447, minY: 365, maxX: 591, maxY: 507 },
    right: { minX: 652, minY: 369, maxX: 805, maxY: 521 },
    top: { minX: 549, minY: 176, maxX: 696, maxY: 327 },
  },
  {
    left: { minX: 447, minY: 364, maxX: 590, maxY: 505 },
    right: { minX: 652, minY: 367, maxX: 804, maxY: 519 },
    top: { minX: 548, minY: 175, maxX: 696, maxY: 326 },
  },
  {
    left: { minX: 450, minY: 363, maxX: 593, maxY: 504 },
    right: { minX: 655, minY: 367, maxX: 806, maxY: 518 },
    top: { minX: 551, minY: 175, maxX: 699, maxY: 325 },
  },
  {
    left: { minX: 455, minY: 363, maxX: 597, maxY: 504 },
    right: { minX: 658, minY: 367, maxX: 810, maxY: 518 },
    top: { minX: 555, minY: 176, maxX: 703, maxY: 326 },
  },
  {
    left: { minX: 461, minY: 368, maxX: 602, maxY: 508 },
    right: { minX: 663, minY: 373, maxX: 814, maxY: 522 },
    top: { minX: 561, minY: 183, maxX: 708, maxY: 331 },
  },
  {
    left: { minX: 465, minY: 374, maxX: 605, maxY: 513 },
    right: { minX: 666, minY: 379, maxX: 815, maxY: 528 },
    top: { minX: 565, minY: 191, maxX: 710, maxY: 338 },
  },
  {
    left: { minX: 469, minY: 379, maxX: 608, maxY: 516 },
    right: { minX: 669, minY: 384, maxX: 816, maxY: 531 },
    top: { minX: 568, minY: 197, maxX: 712, maxY: 343 },
  },
  {
    left: { minX: 470, minY: 383, maxX: 608, maxY: 520 },
    right: { minX: 668, minY: 388, maxX: 815, maxY: 534 },
    top: { minX: 569, minY: 203, maxX: 712, maxY: 347 },
  },
  {
    left: { minX: 468, minY: 385, maxX: 605, maxY: 521 },
    right: { minX: 665, minY: 391, maxX: 810, maxY: 535 },
    top: { minX: 565, minY: 207, maxX: 708, maxY: 350 },
  },
  {
    left: { minX: 468, minY: 386, maxX: 604, maxY: 522 },
    right: { minX: 665, minY: 391, maxX: 808, maxY: 534 },
    top: { minX: 566, minY: 209, maxX: 707, maxY: 352 },
  },
  {
    left: { minX: 471, minY: 388, maxX: 606, maxY: 522 },
    right: { minX: 666, minY: 393, maxX: 808, maxY: 535 },
    top: { minX: 568, minY: 213, maxX: 708, maxY: 353 },
  },
  {
    left: { minX: 472, minY: 386, maxX: 606, maxY: 520 },
    right: { minX: 667, minY: 391, maxX: 807, maxY: 531 },
    top: { minX: 569, minY: 212, maxX: 708, maxY: 352 },
  },
  {
    left: { minX: 475, minY: 388, maxX: 609, maxY: 521 },
    right: { minX: 669, minY: 393, maxX: 808, maxY: 532 },
    top: { minX: 571, minY: 215, maxX: 710, maxY: 354 },
  },
  {
    left: { minX: 475, minY: 391, maxX: 608, maxY: 523 },
    right: { minX: 668, minY: 395, maxX: 806, maxY: 533 },
    top: { minX: 571, minY: 219, maxX: 708, maxY: 357 },
  },
  {
    left: { minX: 475, minY: 389, maxX: 608, maxY: 520 },
    right: { minX: 667, minY: 392, maxX: 804, maxY: 528 },
    top: { minX: 569, minY: 217, maxX: 706, maxY: 354 },
  },
  {
    left: { minX: 477, minY: 387, maxX: 608, maxY: 518 },
    right: { minX: 667, minY: 390, maxX: 804, maxY: 526 },
    top: { minX: 571, minY: 216, maxX: 707, maxY: 353 },
  },
  {
    left: { minX: 479, minY: 383, maxX: 610, maxY: 514 },
    right: { minX: 670, minY: 387, maxX: 805, maxY: 521 },
    top: { minX: 573, minY: 213, maxX: 709, maxY: 350 },
  },
  {
    left: { minX: 477, minY: 382, maxX: 608, maxY: 512 },
    right: { minX: 667, minY: 385, maxX: 800, maxY: 518 },
    top: { minX: 571, minY: 213, maxX: 706, maxY: 348 },
  },
  {
    left: { minX: 477, minY: 382, maxX: 608, maxY: 511 },
    right: { minX: 667, minY: 384, maxX: 799, maxY: 516 },
    top: { minX: 571, minY: 213, maxX: 705, maxY: 348 },
  },
  {
    left: { minX: 479, minY: 384, maxX: 609, maxY: 512 },
    right: { minX: 668, minY: 386, maxX: 800, maxY: 517 },
    top: { minX: 572, minY: 216, maxX: 706, maxY: 350 },
  },
  {
    left: { minX: 484, minY: 383, maxX: 613, maxY: 511 },
    right: { minX: 671, minY: 386, maxX: 802, maxY: 516 },
    top: { minX: 577, minY: 217, maxX: 710, maxY: 350 },
  },
  {
    left: { minX: 485, minY: 384, maxX: 613, maxY: 512 },
    right: { minX: 672, minY: 387, maxX: 802, maxY: 517 },
    top: { minX: 578, minY: 218, maxX: 710, maxY: 351 },
  },
  {
    left: { minX: 487, minY: 387, maxX: 615, maxY: 515 },
    right: { minX: 674, minY: 389, maxX: 804, maxY: 519 },
    top: { minX: 581, minY: 222, maxX: 713, maxY: 354 },
  },
  {
    left: { minX: 485, minY: 390, maxX: 613, maxY: 518 },
    right: { minX: 672, minY: 393, maxX: 801, maxY: 521 },
    top: { minX: 579, minY: 225, maxX: 710, maxY: 357 },
  },
  {
    left: { minX: 486, minY: 390, maxX: 615, maxY: 518 },
    right: { minX: 673, minY: 393, maxX: 803, maxY: 521 },
    top: { minX: 581, minY: 225, maxX: 712, maxY: 357 },
  },
  {
    left: { minX: 483, minY: 391, maxX: 612, maxY: 520 },
    right: { minX: 671, minY: 394, maxX: 800, maxY: 523 },
    top: { minX: 579, minY: 227, maxX: 710, maxY: 359 },
  },
  {
    left: { minX: 483, minY: 391, maxX: 612, maxY: 520 },
    right: { minX: 671, minY: 393, maxX: 800, maxY: 521 },
    top: { minX: 578, minY: 225, maxX: 709, maxY: 358 },
  },
  {
    left: { minX: 485, minY: 389, maxX: 614, maxY: 519 },
    right: { minX: 674, minY: 391, maxX: 803, maxY: 520 },
    top: { minX: 581, minY: 223, maxX: 712, maxY: 356 },
  },
  {
    left: { minX: 485, minY: 386, maxX: 616, maxY: 516 },
    right: { minX: 675, minY: 388, maxX: 806, maxY: 517 },
    top: { minX: 583, minY: 219, maxX: 715, maxY: 352 },
  },
  {
    left: { minX: 484, minY: 384, maxX: 616, maxY: 515 },
    right: { minX: 675, minY: 386, maxX: 805, maxY: 515 },
    top: { minX: 582, minY: 217, maxX: 715, maxY: 350 },
  },
  {
    left: { minX: 485, minY: 383, maxX: 618, maxY: 514 },
    right: { minX: 677, minY: 385, maxX: 808, maxY: 515 },
    top: { minX: 584, minY: 215, maxX: 718, maxY: 349 },
  },
  {
    left: { minX: 488, minY: 384, maxX: 621, maxY: 516 },
    right: { minX: 681, minY: 387, maxX: 812, maxY: 517 },
    top: { minX: 587, minY: 216, maxX: 722, maxY: 350 },
  },
  {
    left: { minX: 490, minY: 386, maxX: 623, maxY: 519 },
    right: { minX: 683, minY: 388, maxX: 814, maxY: 519 },
    top: { minX: 589, minY: 217, maxX: 724, maxY: 352 },
  },
  {
    left: { minX: 489, minY: 389, maxX: 622, maxY: 522 },
    right: { minX: 683, minY: 390, maxX: 814, maxY: 521 },
    top: { minX: 589, minY: 219, maxX: 722, maxY: 354 },
  },
  {
    left: { minX: 488, minY: 390, maxX: 622, maxY: 524 },
    right: { minX: 683, minY: 391, maxX: 815, maxY: 523 },
    top: { minX: 588, minY: 220, maxX: 723, maxY: 355 },
  },
  {
    left: { minX: 489, minY: 393, maxX: 624, maxY: 527 },
    right: { minX: 684, minY: 393, maxX: 817, maxY: 525 },
    top: { minX: 589, minY: 222, maxX: 724, maxY: 358 },
  },
  {
    left: { minX: 489, minY: 394, maxX: 624, maxY: 529 },
    right: { minX: 685, minY: 395, maxX: 818, maxY: 527 },
    top: { minX: 589, minY: 223, maxX: 725, maxY: 359 },
  },
  {
    left: { minX: 491, minY: 395, maxX: 626, maxY: 530 },
    right: { minX: 687, minY: 395, maxX: 820, maxY: 527 },
    top: { minX: 591, minY: 224, maxX: 727, maxY: 360 },
  },
  {
    left: { minX: 494, minY: 391, maxX: 630, maxY: 527 },
    right: { minX: 691, minY: 391, maxX: 824, maxY: 524 },
    top: { minX: 595, minY: 219, maxX: 731, maxY: 356 },
  },
  {
    left: { minX: 493, minY: 391, maxX: 630, maxY: 528 },
    right: { minX: 690, minY: 391, maxX: 824, maxY: 524 },
    top: { minX: 594, minY: 219, maxX: 730, maxY: 355 },
  },
  {
    left: { minX: 498, minY: 391, maxX: 634, maxY: 527 },
    right: { minX: 695, minY: 391, maxX: 829, maxY: 524 },
    top: { minX: 599, minY: 219, maxX: 735, maxY: 354 },
  },
  {
    left: { minX: 499, minY: 393, maxX: 635, maxY: 529 },
    right: { minX: 696, minY: 392, maxX: 830, maxY: 525 },
    top: { minX: 599, minY: 220, maxX: 736, maxY: 356 },
  },
  {
    left: { minX: 499, minY: 397, maxX: 636, maxY: 534 },
    right: { minX: 698, minY: 397, maxX: 832, maxY: 531 },
    top: { minX: 601, minY: 225, maxX: 738, maxY: 361 },
  },
  {
    left: { minX: 498, minY: 398, maxX: 635, maxY: 535 },
    right: { minX: 696, minY: 398, maxX: 830, maxY: 531 },
    top: { minX: 600, minY: 225, maxX: 736, maxY: 362 },
  },
  {
    left: { minX: 494, minY: 399, maxX: 632, maxY: 537 },
    right: { minX: 692, minY: 400, maxX: 826, maxY: 533 },
    top: { minX: 597, minY: 227, maxX: 734, maxY: 364 },
  },
  {
    left: { minX: 491, minY: 400, maxX: 629, maxY: 539 },
    right: { minX: 689, minY: 401, maxX: 824, maxY: 534 },
    top: { minX: 594, minY: 227, maxX: 731, maxY: 364 },
  },
  {
    left: { minX: 489, minY: 401, maxX: 627, maxY: 540 },
    right: { minX: 687, minY: 401, maxX: 821, maxY: 534 },
    top: { minX: 592, minY: 229, maxX: 728, maxY: 365 },
  },
  {
    left: { minX: 479, minY: 408, maxX: 618, maxY: 548 },
    right: { minX: 679, minY: 407, maxX: 812, maxY: 540 },
    top: { minX: 583, minY: 235, maxX: 719, maxY: 371 },
  },
  {
    left: { minX: 475, minY: 403, maxX: 616, maxY: 544 },
    right: { minX: 676, minY: 403, maxX: 810, maxY: 537 },
    top: { minX: 580, minY: 229, maxX: 717, maxY: 367 },
  },
  {
    left: { minX: 472, minY: 402, maxX: 614, maxY: 544 },
    right: { minX: 674, minY: 402, maxX: 809, maxY: 537 },
    top: { minX: 578, minY: 227, maxX: 716, maxY: 365 },
  },
  {
    left: { minX: 468, minY: 401, maxX: 610, maxY: 543 },
    right: { minX: 672, minY: 401, maxX: 806, maxY: 536 },
    top: { minX: 575, minY: 226, maxX: 714, maxY: 364 },
  },
  {
    left: { minX: 470, minY: 399, maxX: 612, maxY: 542 },
    right: { minX: 674, minY: 400, maxX: 808, maxY: 535 },
    top: { minX: 577, minY: 224, maxX: 716, maxY: 363 },
  },
  {
    left: { minX: 471, minY: 398, maxX: 614, maxY: 541 },
    right: { minX: 675, minY: 399, maxX: 810, maxY: 534 },
    top: { minX: 579, minY: 223, maxX: 718, maxY: 362 },
  },
  {
    left: { minX: 474, minY: 396, maxX: 617, maxY: 539 },
    right: { minX: 678, minY: 397, maxX: 814, maxY: 532 },
    top: { minX: 582, minY: 219, maxX: 722, maxY: 359 },
  },
  {
    left: { minX: 475, minY: 393, maxX: 619, maxY: 537 },
    right: { minX: 680, minY: 395, maxX: 816, maxY: 530 },
    top: { minX: 583, minY: 217, maxX: 723, maxY: 357 },
  },
  {
    left: { minX: 475, minY: 391, maxX: 618, maxY: 535 },
    right: { minX: 680, minY: 393, maxX: 816, maxY: 528 },
    top: { minX: 583, minY: 214, maxX: 724, maxY: 354 },
  },
  {
    left: { minX: 474, minY: 391, maxX: 618, maxY: 535 },
    right: { minX: 680, minY: 393, maxX: 816, maxY: 528 },
    top: { minX: 583, minY: 213, maxX: 724, maxY: 354 },
  },
  {
    left: { minX: 473, minY: 391, maxX: 617, maxY: 535 },
    right: { minX: 679, minY: 392, maxX: 815, maxY: 528 },
    top: { minX: 583, minY: 213, maxX: 722, maxY: 354 },
  },
  {
    left: { minX: 469, minY: 390, maxX: 614, maxY: 534 },
    right: { minX: 675, minY: 391, maxX: 812, maxY: 527 },
    top: { minX: 579, minY: 212, maxX: 719, maxY: 353 },
  },
  {
    left: { minX: 465, minY: 389, maxX: 610, maxY: 534 },
    right: { minX: 672, minY: 390, maxX: 808, maxY: 526 },
    top: { minX: 575, minY: 211, maxX: 715, maxY: 352 },
  },
  {
    left: { minX: 463, minY: 387, maxX: 609, maxY: 532 },
    right: { minX: 670, minY: 388, maxX: 806, maxY: 523 },
    top: { minX: 573, minY: 209, maxX: 714, maxY: 349 },
  },
  {
    left: { minX: 464, minY: 384, maxX: 610, maxY: 529 },
    right: { minX: 671, minY: 385, maxX: 807, maxY: 521 },
    top: { minX: 573, minY: 205, maxX: 714, maxY: 347 },
  },
  {
    left: { minX: 465, minY: 379, maxX: 610, maxY: 525 },
    right: { minX: 672, minY: 381, maxX: 808, maxY: 516 },
    top: { minX: 574, minY: 201, maxX: 715, maxY: 342 },
  },
  {
    left: { minX: 463, minY: 376, maxX: 609, maxY: 521 },
    right: { minX: 670, minY: 377, maxX: 806, maxY: 513 },
    top: { minX: 573, minY: 197, maxX: 714, maxY: 339 },
  },
  {
    left: { minX: 461, minY: 374, maxX: 608, maxY: 519 },
    right: { minX: 668, minY: 375, maxX: 804, maxY: 511 },
    top: { minX: 571, minY: 195, maxX: 712, maxY: 337 },
  },
  {
    left: { minX: 462, minY: 373, maxX: 609, maxY: 519 },
    right: { minX: 670, minY: 375, maxX: 806, maxY: 511 },
    top: { minX: 573, minY: 194, maxX: 714, maxY: 337 },
  },
  {
    left: { minX: 463, minY: 373, maxX: 610, maxY: 518 },
    right: { minX: 671, minY: 375, maxX: 807, maxY: 511 },
    top: { minX: 575, minY: 194, maxX: 716, maxY: 336 },
  },
  {
    left: { minX: 461, minY: 371, maxX: 608, maxY: 517 },
    right: { minX: 670, minY: 374, maxX: 806, maxY: 510 },
    top: { minX: 573, minY: 193, maxX: 714, maxY: 335 },
  },
  {
    left: { minX: 461, minY: 369, maxX: 608, maxY: 514 },
    right: { minX: 670, minY: 372, maxX: 806, maxY: 507 },
    top: { minX: 573, minY: 190, maxX: 714, maxY: 332 },
  },
  {
    left: { minX: 461, minY: 367, maxX: 608, maxY: 513 },
    right: { minX: 670, minY: 371, maxX: 806, maxY: 507 },
    top: { minX: 573, minY: 189, maxX: 715, maxY: 331 },
  },
  {
    left: { minX: 460, minY: 367, maxX: 608, maxY: 513 },
    right: { minX: 669, minY: 371, maxX: 806, maxY: 507 },
    top: { minX: 573, minY: 188, maxX: 714, maxY: 331 },
  },
  {
    left: { minX: 461, minY: 365, maxX: 608, maxY: 511 },
    right: { minX: 670, minY: 368, maxX: 807, maxY: 504 },
    top: { minX: 573, minY: 185, maxX: 715, maxY: 328 },
  },
  {
    left: { minX: 459, minY: 362, maxX: 607, maxY: 508 },
    right: { minX: 669, minY: 366, maxX: 806, maxY: 502 },
    top: { minX: 571, minY: 182, maxX: 714, maxY: 326 },
  },
  {
    left: { minX: 459, minY: 360, maxX: 606, maxY: 507 },
    right: { minX: 668, minY: 364, maxX: 806, maxY: 500 },
    top: { minX: 571, minY: 180, maxX: 713, maxY: 324 },
  },
  {
    left: { minX: 458, minY: 357, maxX: 606, maxY: 503 },
    right: { minX: 668, minY: 361, maxX: 805, maxY: 497 },
    top: { minX: 570, minY: 177, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 607, maxY: 501 },
    right: { minX: 669, minY: 359, maxX: 806, maxY: 495 },
    top: { minX: 571, minY: 175, maxX: 714, maxY: 319 },
  },
  {
    left: { minX: 459, minY: 354, maxX: 607, maxY: 501 },
    right: { minX: 669, minY: 359, maxX: 806, maxY: 495 },
    top: { minX: 571, minY: 175, maxX: 714, maxY: 318 },
  },
  {
    left: { minX: 461, minY: 352, maxX: 609, maxY: 498 },
    right: { minX: 670, minY: 356, maxX: 808, maxY: 492 },
    top: { minX: 573, minY: 171, maxX: 716, maxY: 316 },
  },
  {
    left: { minX: 461, minY: 352, maxX: 610, maxY: 498 },
    right: { minX: 671, minY: 356, maxX: 808, maxY: 492 },
    top: { minX: 573, minY: 172, maxX: 716, maxY: 316 },
  },
  {
    left: { minX: 460, minY: 348, maxX: 608, maxY: 494 },
    right: { minX: 670, minY: 352, maxX: 808, maxY: 488 },
    top: { minX: 572, minY: 167, maxX: 715, maxY: 312 },
  },
  {
    left: { minX: 457, minY: 347, maxX: 606, maxY: 493 },
    right: { minX: 668, minY: 351, maxX: 806, maxY: 487 },
    top: { minX: 569, minY: 166, maxX: 712, maxY: 311 },
  },
  {
    left: { minX: 458, minY: 345, maxX: 606, maxY: 492 },
    right: { minX: 669, minY: 349, maxX: 806, maxY: 485 },
    top: { minX: 570, minY: 164, maxX: 713, maxY: 309 },
  },
  {
    left: { minX: 458, minY: 345, maxX: 606, maxY: 492 },
    right: { minX: 669, minY: 349, maxX: 806, maxY: 486 },
    top: { minX: 570, minY: 164, maxX: 714, maxY: 309 },
  },
  {
    left: { minX: 457, minY: 346, maxX: 606, maxY: 493 },
    right: { minX: 668, minY: 349, maxX: 806, maxY: 486 },
    top: { minX: 569, minY: 164, maxX: 712, maxY: 309 },
  },
  {
    left: { minX: 457, minY: 346, maxX: 606, maxY: 493 },
    right: { minX: 668, minY: 350, maxX: 806, maxY: 486 },
    top: { minX: 569, minY: 165, maxX: 712, maxY: 310 },
  },
  {
    left: { minX: 457, minY: 347, maxX: 605, maxY: 493 },
    right: { minX: 667, minY: 350, maxX: 805, maxY: 487 },
    top: { minX: 569, minY: 165, maxX: 712, maxY: 310 },
  },
  {
    left: { minX: 455, minY: 347, maxX: 604, maxY: 494 },
    right: { minX: 666, minY: 351, maxX: 804, maxY: 487 },
    top: { minX: 567, minY: 166, maxX: 710, maxY: 311 },
  },
  {
    left: { minX: 456, minY: 347, maxX: 604, maxY: 494 },
    right: { minX: 666, minY: 351, maxX: 804, maxY: 487 },
    top: { minX: 568, minY: 167, maxX: 710, maxY: 311 },
  },
  {
    left: { minX: 456, minY: 348, maxX: 604, maxY: 494 },
    right: { minX: 666, minY: 352, maxX: 804, maxY: 488 },
    top: { minX: 568, minY: 167, maxX: 711, maxY: 312 },
  },
  {
    left: { minX: 455, minY: 349, maxX: 603, maxY: 495 },
    right: { minX: 665, minY: 353, maxX: 802, maxY: 488 },
    top: { minX: 567, minY: 168, maxX: 710, maxY: 313 },
  },
  {
    left: { minX: 454, minY: 349, maxX: 602, maxY: 496 },
    right: { minX: 664, minY: 353, maxX: 801, maxY: 489 },
    top: { minX: 566, minY: 169, maxX: 708, maxY: 313 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 603, maxY: 497 },
    right: { minX: 665, minY: 355, maxX: 802, maxY: 490 },
    top: { minX: 567, minY: 171, maxX: 709, maxY: 315 },
  },
  {
    left: { minX: 457, minY: 353, maxX: 605, maxY: 498 },
    right: { minX: 667, minY: 357, maxX: 804, maxY: 492 },
    top: { minX: 569, minY: 173, maxX: 711, maxY: 316 },
  },
  {
    left: { minX: 460, minY: 354, maxX: 607, maxY: 500 },
    right: { minX: 668, minY: 358, maxX: 805, maxY: 493 },
    top: { minX: 571, minY: 175, maxX: 712, maxY: 318 },
  },
  {
    left: { minX: 459, minY: 349, maxX: 606, maxY: 495 },
    right: { minX: 668, minY: 353, maxX: 804, maxY: 489 },
    top: { minX: 570, minY: 170, maxX: 712, maxY: 313 },
  },
  {
    left: { minX: 461, minY: 349, maxX: 608, maxY: 494 },
    right: { minX: 669, minY: 353, maxX: 805, maxY: 488 },
    top: { minX: 572, minY: 170, maxX: 713, maxY: 313 },
  },
  {
    left: { minX: 462, minY: 348, maxX: 608, maxY: 493 },
    right: { minX: 670, minY: 353, maxX: 806, maxY: 487 },
    top: { minX: 573, minY: 169, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 347, maxX: 609, maxY: 492 },
    right: { minX: 670, minY: 352, maxX: 806, maxY: 487 },
    top: { minX: 574, minY: 169, maxX: 715, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 347, maxX: 609, maxY: 491 },
    right: { minX: 670, minY: 352, maxX: 805, maxY: 486 },
    top: { minX: 575, minY: 169, maxX: 714, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 347, maxX: 608, maxY: 490 },
    right: { minX: 668, minY: 351, maxX: 804, maxY: 485 },
    top: { minX: 573, minY: 170, maxX: 713, maxY: 312 },
  },
  {
    left: { minX: 462, minY: 347, maxX: 607, maxY: 490 },
    right: { minX: 668, minY: 351, maxX: 802, maxY: 485 },
    top: { minX: 573, minY: 171, maxX: 712, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 346, maxX: 607, maxY: 488 },
    right: { minX: 668, minY: 351, maxX: 802, maxY: 483 },
    top: { minX: 573, minY: 170, maxX: 712, maxY: 311 },
  },
  {
    left: { minX: 464, minY: 345, maxX: 608, maxY: 487 },
    right: { minX: 668, minY: 350, maxX: 802, maxY: 482 },
    top: { minX: 574, minY: 169, maxX: 712, maxY: 310 },
  },
  {
    left: { minX: 466, minY: 347, maxX: 609, maxY: 488 },
    right: { minX: 669, minY: 353, maxX: 802, maxY: 484 },
    top: { minX: 575, minY: 173, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 467, minY: 347, maxX: 610, maxY: 488 },
    right: { minX: 670, minY: 353, maxX: 803, maxY: 484 },
    top: { minX: 577, minY: 173, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 467, minY: 347, maxX: 610, maxY: 488 },
    right: { minX: 670, minY: 353, maxX: 802, maxY: 484 },
    top: { minX: 577, minY: 174, maxX: 714, maxY: 313 },
  },
  {
    left: { minX: 465, minY: 347, maxX: 608, maxY: 487 },
    right: { minX: 667, minY: 353, maxX: 800, maxY: 483 },
    top: { minX: 575, minY: 174, maxX: 712, maxY: 313 },
  },
  {
    left: { minX: 464, minY: 345, maxX: 606, maxY: 485 },
    right: { minX: 666, minY: 351, maxX: 798, maxY: 481 },
    top: { minX: 573, minY: 172, maxX: 710, maxY: 311 },
  },
  {
    left: { minX: 463, minY: 345, maxX: 604, maxY: 485 },
    right: { minX: 664, minY: 351, maxX: 796, maxY: 481 },
    top: { minX: 571, minY: 173, maxX: 708, maxY: 311 },
  },
  {
    left: { minX: 463, minY: 346, maxX: 605, maxY: 485 },
    right: { minX: 664, minY: 351, maxX: 795, maxY: 481 },
    top: { minX: 571, minY: 174, maxX: 708, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 346, maxX: 604, maxY: 485 },
    right: { minX: 663, minY: 352, maxX: 794, maxY: 481 },
    top: { minX: 571, minY: 175, maxX: 706, maxY: 313 },
  },
  {
    left: { minX: 464, minY: 345, maxX: 605, maxY: 484 },
    right: { minX: 664, minY: 351, maxX: 794, maxY: 480 },
    top: { minX: 572, minY: 175, maxX: 707, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 345, maxX: 604, maxY: 484 },
    right: { minX: 662, minY: 351, maxX: 792, maxY: 479 },
    top: { minX: 571, minY: 175, maxX: 706, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 346, maxX: 602, maxY: 483 },
    right: { minX: 660, minY: 351, maxX: 790, maxY: 479 },
    top: { minX: 570, minY: 177, maxX: 704, maxY: 313 },
  },
  {
    left: { minX: 462, minY: 345, maxX: 601, maxY: 482 },
    right: { minX: 659, minY: 350, maxX: 788, maxY: 478 },
    top: { minX: 568, minY: 177, maxX: 702, maxY: 312 },
  },
  {
    left: { minX: 461, minY: 347, maxX: 600, maxY: 484 },
    right: { minX: 657, minY: 352, maxX: 785, maxY: 479 },
    top: { minX: 566, minY: 180, maxX: 699, maxY: 314 },
  },
  {
    left: { minX: 461, minY: 346, maxX: 598, maxY: 481 },
    right: { minX: 656, minY: 350, maxX: 784, maxY: 477 },
    top: { minX: 565, minY: 179, maxX: 698, maxY: 313 },
  },
  {
    left: { minX: 460, minY: 347, maxX: 597, maxY: 482 },
    right: { minX: 654, minY: 351, maxX: 781, maxY: 477 },
    top: { minX: 564, minY: 181, maxX: 696, maxY: 314 },
  },
  {
    left: { minX: 460, minY: 349, maxX: 597, maxY: 483 },
    right: { minX: 654, minY: 353, maxX: 780, maxY: 478 },
    top: { minX: 565, minY: 183, maxX: 696, maxY: 316 },
  },
  {
    left: { minX: 461, minY: 347, maxX: 597, maxY: 481 },
    right: { minX: 654, minY: 351, maxX: 780, maxY: 477 },
    top: { minX: 565, minY: 182, maxX: 696, maxY: 314 },
  },
  {
    left: { minX: 462, minY: 346, maxX: 598, maxY: 479 },
    right: { minX: 655, minY: 350, maxX: 780, maxY: 475 },
    top: { minX: 565, minY: 181, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 346, maxX: 598, maxY: 479 },
    right: { minX: 655, minY: 351, maxX: 781, maxY: 475 },
    top: { minX: 566, minY: 181, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 345, maxX: 598, maxY: 478 },
    right: { minX: 655, minY: 350, maxX: 780, maxY: 474 },
    top: { minX: 566, minY: 181, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 347, maxX: 598, maxY: 479 },
    right: { minX: 655, minY: 351, maxX: 779, maxY: 475 },
    top: { minX: 566, minY: 183, maxX: 695, maxY: 314 },
  },
  {
    left: { minX: 464, minY: 345, maxX: 598, maxY: 477 },
    right: { minX: 655, minY: 350, maxX: 779, maxY: 473 },
    top: { minX: 566, minY: 182, maxX: 696, maxY: 313 },
  },
  {
    left: { minX: 465, minY: 344, maxX: 598, maxY: 476 },
    right: { minX: 654, minY: 349, maxX: 778, maxY: 472 },
    top: { minX: 566, minY: 182, maxX: 696, maxY: 312 },
  },
  {
    left: { minX: 465, minY: 344, maxX: 598, maxY: 475 },
    right: { minX: 653, minY: 349, maxX: 777, maxY: 471 },
    top: { minX: 566, minY: 183, maxX: 694, maxY: 312 },
  },
  {
    left: { minX: 465, minY: 344, maxX: 598, maxY: 474 },
    right: { minX: 653, minY: 349, maxX: 776, maxY: 471 },
    top: { minX: 566, minY: 183, maxX: 694, maxY: 312 },
  },
  {
    left: { minX: 466, minY: 343, maxX: 598, maxY: 473 },
    right: { minX: 654, minY: 349, maxX: 776, maxY: 470 },
    top: { minX: 567, minY: 183, maxX: 694, maxY: 312 },
  },
  {
    left: { minX: 467, minY: 343, maxX: 598, maxY: 473 },
    right: { minX: 654, minY: 349, maxX: 776, maxY: 470 },
    top: { minX: 568, minY: 184, maxX: 695, maxY: 312 },
  },
  {
    left: { minX: 467, minY: 343, maxX: 598, maxY: 473 },
    right: { minX: 653, minY: 349, maxX: 775, maxY: 470 },
    top: { minX: 567, minY: 185, maxX: 694, maxY: 312 },
  },
  {
    left: { minX: 466, minY: 343, maxX: 597, maxY: 472 },
    right: { minX: 652, minY: 349, maxX: 774, maxY: 469 },
    top: { minX: 567, minY: 184, maxX: 693, maxY: 312 },
  },
  {
    left: { minX: 465, minY: 345, maxX: 596, maxY: 473 },
    right: { minX: 651, minY: 349, maxX: 772, maxY: 470 },
    top: { minX: 565, minY: 186, maxX: 691, maxY: 313 },
  },
  {
    left: { minX: 466, minY: 345, maxX: 597, maxY: 473 },
    right: { minX: 652, minY: 350, maxX: 773, maxY: 470 },
    top: { minX: 566, minY: 187, maxX: 692, maxY: 314 },
  },
  {
    left: { minX: 465, minY: 345, maxX: 596, maxY: 474 },
    right: { minX: 651, minY: 349, maxX: 772, maxY: 470 },
    top: { minX: 565, minY: 187, maxX: 690, maxY: 314 },
  },
  {
    left: { minX: 465, minY: 346, maxX: 596, maxY: 475 },
    right: { minX: 651, minY: 351, maxX: 772, maxY: 471 },
    top: { minX: 565, minY: 187, maxX: 690, maxY: 315 },
  },
  {
    left: { minX: 467, minY: 348, maxX: 597, maxY: 476 },
    right: { minX: 652, minY: 352, maxX: 773, maxY: 472 },
    top: { minX: 565, minY: 190, maxX: 692, maxY: 317 },
  },
  {
    left: { minX: 467, minY: 348, maxX: 597, maxY: 476 },
    right: { minX: 652, minY: 352, maxX: 774, maxY: 472 },
    top: { minX: 565, minY: 189, maxX: 691, maxY: 317 },
  },
  {
    left: { minX: 467, minY: 347, maxX: 596, maxY: 475 },
    right: { minX: 652, minY: 351, maxX: 773, maxY: 471 },
    top: { minX: 565, minY: 188, maxX: 690, maxY: 315 },
  },
  {
    left: { minX: 465, minY: 348, maxX: 596, maxY: 476 },
    right: { minX: 651, minY: 351, maxX: 772, maxY: 472 },
    top: { minX: 564, minY: 189, maxX: 690, maxY: 316 },
  },
  {
    left: { minX: 465, minY: 349, maxX: 595, maxY: 477 },
    right: { minX: 650, minY: 352, maxX: 772, maxY: 473 },
    top: { minX: 563, minY: 190, maxX: 688, maxY: 317 },
  },
  {
    left: { minX: 463, minY: 349, maxX: 594, maxY: 477 },
    right: { minX: 649, minY: 353, maxX: 770, maxY: 473 },
    top: { minX: 562, minY: 190, maxX: 688, maxY: 317 },
  },
  {
    left: { minX: 461, minY: 349, maxX: 591, maxY: 477 },
    right: { minX: 647, minY: 352, maxX: 768, maxY: 473 },
    top: { minX: 559, minY: 190, maxX: 685, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 350, maxX: 590, maxY: 478 },
    right: { minX: 646, minY: 353, maxX: 767, maxY: 473 },
    top: { minX: 557, minY: 191, maxX: 684, maxY: 318 },
  },
  {
    left: { minX: 458, minY: 350, maxX: 588, maxY: 478 },
    right: { minX: 644, minY: 353, maxX: 766, maxY: 474 },
    top: { minX: 556, minY: 191, maxX: 682, maxY: 318 },
  },
  {
    left: { minX: 455, minY: 350, maxX: 585, maxY: 478 },
    right: { minX: 642, minY: 353, maxX: 764, maxY: 474 },
    top: { minX: 553, minY: 191, maxX: 679, maxY: 318 },
  },
  {
    left: { minX: 451, minY: 351, maxX: 582, maxY: 480 },
    right: { minX: 639, minY: 354, maxX: 761, maxY: 475 },
    top: { minX: 550, minY: 192, maxX: 676, maxY: 319 },
  },
  {
    left: { minX: 445, minY: 350, maxX: 577, maxY: 479 },
    right: { minX: 634, minY: 353, maxX: 756, maxY: 474 },
    top: { minX: 545, minY: 191, maxX: 671, maxY: 318 },
  },
  {
    left: { minX: 441, minY: 351, maxX: 572, maxY: 479 },
    right: { minX: 630, minY: 353, maxX: 752, maxY: 475 },
    top: { minX: 539, minY: 190, maxX: 666, maxY: 318 },
  },
  {
    left: { minX: 439, minY: 350, maxX: 570, maxY: 479 },
    right: { minX: 628, minY: 352, maxX: 750, maxY: 474 },
    top: { minX: 537, minY: 189, maxX: 665, maxY: 317 },
  },
  {
    left: { minX: 439, minY: 350, maxX: 571, maxY: 479 },
    right: { minX: 629, minY: 353, maxX: 751, maxY: 475 },
    top: { minX: 539, minY: 189, maxX: 666, maxY: 318 },
  },
  {
    left: { minX: 439, minY: 349, maxX: 570, maxY: 479 },
    right: { minX: 628, minY: 352, maxX: 751, maxY: 474 },
    top: { minX: 538, minY: 189, maxX: 665, maxY: 317 },
  },
  {
    left: { minX: 439, minY: 349, maxX: 571, maxY: 478 },
    right: { minX: 629, minY: 352, maxX: 752, maxY: 474 },
    top: { minX: 539, minY: 188, maxX: 666, maxY: 316 },
  },
  {
    left: { minX: 441, minY: 349, maxX: 572, maxY: 478 },
    right: { minX: 630, minY: 352, maxX: 753, maxY: 474 },
    top: { minX: 539, minY: 187, maxX: 668, maxY: 316 },
  },
  {
    left: { minX: 440, minY: 349, maxX: 572, maxY: 478 },
    right: { minX: 630, minY: 351, maxX: 753, maxY: 474 },
    top: { minX: 539, minY: 187, maxX: 667, maxY: 316 },
  },
  {
    left: { minX: 438, minY: 349, maxX: 570, maxY: 478 },
    right: { minX: 628, minY: 351, maxX: 752, maxY: 474 },
    top: { minX: 537, minY: 187, maxX: 665, maxY: 316 },
  },
  {
    left: { minX: 437, minY: 350, maxX: 568, maxY: 479 },
    right: { minX: 627, minY: 353, maxX: 750, maxY: 475 },
    top: { minX: 536, minY: 189, maxX: 664, maxY: 317 },
  },
  {
    left: { minX: 435, minY: 351, maxX: 567, maxY: 480 },
    right: { minX: 625, minY: 353, maxX: 748, maxY: 476 },
    top: { minX: 535, minY: 190, maxX: 662, maxY: 318 },
  },
  {
    left: { minX: 435, minY: 352, maxX: 566, maxY: 481 },
    right: { minX: 625, minY: 354, maxX: 748, maxY: 477 },
    top: { minX: 534, minY: 191, maxX: 661, maxY: 319 },
  },
  {
    left: { minX: 439, minY: 353, maxX: 570, maxY: 481 },
    right: { minX: 628, minY: 355, maxX: 752, maxY: 478 },
    top: { minX: 537, minY: 192, maxX: 664, maxY: 320 },
  },
  {
    left: { minX: 445, minY: 354, maxX: 575, maxY: 482 },
    right: { minX: 633, minY: 355, maxX: 757, maxY: 478 },
    top: { minX: 542, minY: 193, maxX: 670, maxY: 321 },
  },
  {
    left: { minX: 454, minY: 354, maxX: 584, maxY: 482 },
    right: { minX: 641, minY: 355, maxX: 766, maxY: 478 },
    top: { minX: 551, minY: 193, maxX: 678, maxY: 321 },
  },
  {
    left: { minX: 459, minY: 353, maxX: 588, maxY: 481 },
    right: { minX: 647, minY: 355, maxX: 770, maxY: 478 },
    top: { minX: 556, minY: 192, maxX: 682, maxY: 321 },
  },
  {
    left: { minX: 461, minY: 353, maxX: 590, maxY: 480 },
    right: { minX: 648, minY: 355, maxX: 772, maxY: 478 },
    top: { minX: 557, minY: 192, maxX: 684, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 351, maxX: 594, maxY: 478 },
    right: { minX: 652, minY: 353, maxX: 777, maxY: 477 },
    top: { minX: 561, minY: 189, maxX: 688, maxY: 318 },
  },
  {
    left: { minX: 470, minY: 350, maxX: 599, maxY: 477 },
    right: { minX: 657, minY: 352, maxX: 782, maxY: 476 },
    top: { minX: 566, minY: 189, maxX: 693, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 350, maxX: 601, maxY: 477 },
    right: { minX: 659, minY: 352, maxX: 785, maxY: 476 },
    top: { minX: 569, minY: 189, maxX: 696, maxY: 317 },
  },
  {
    left: { minX: 475, minY: 350, maxX: 604, maxY: 477 },
    right: { minX: 662, minY: 352, maxX: 788, maxY: 477 },
    top: { minX: 571, minY: 189, maxX: 698, maxY: 317 },
  },
  {
    left: { minX: 479, minY: 348, maxX: 608, maxY: 475 },
    right: { minX: 665, minY: 350, maxX: 792, maxY: 475 },
    top: { minX: 575, minY: 186, maxX: 702, maxY: 315 },
  },
  {
    left: { minX: 481, minY: 349, maxX: 609, maxY: 475 },
    right: { minX: 667, minY: 350, maxX: 794, maxY: 475 },
    top: { minX: 577, minY: 186, maxX: 704, maxY: 315 },
  },
  {
    left: { minX: 481, minY: 349, maxX: 610, maxY: 476 },
    right: { minX: 668, minY: 350, maxX: 794, maxY: 475 },
    top: { minX: 577, minY: 187, maxX: 704, maxY: 316 },
  },
  {
    left: { minX: 483, minY: 349, maxX: 612, maxY: 475 },
    right: { minX: 670, minY: 349, maxX: 796, maxY: 475 },
    top: { minX: 579, minY: 186, maxX: 706, maxY: 315 },
  },
  {
    left: { minX: 486, minY: 348, maxX: 614, maxY: 475 },
    right: { minX: 672, minY: 349, maxX: 799, maxY: 474 },
    top: { minX: 581, minY: 185, maxX: 708, maxY: 315 },
  },
  {
    left: { minX: 493, minY: 350, maxX: 620, maxY: 476 },
    right: { minX: 679, minY: 351, maxX: 806, maxY: 476 },
    top: { minX: 587, minY: 187, maxX: 715, maxY: 316 },
  },
  {
    left: { minX: 494, minY: 351, maxX: 621, maxY: 477 },
    right: { minX: 679, minY: 353, maxX: 807, maxY: 478 },
    top: { minX: 589, minY: 189, maxX: 716, maxY: 318 },
  },
  {
    left: { minX: 497, minY: 350, maxX: 625, maxY: 477 },
    right: { minX: 683, minY: 352, maxX: 811, maxY: 477 },
    top: { minX: 592, minY: 188, maxX: 720, maxY: 317 },
  },
  {
    left: { minX: 502, minY: 350, maxX: 629, maxY: 477 },
    right: { minX: 688, minY: 352, maxX: 816, maxY: 478 },
    top: { minX: 597, minY: 187, maxX: 725, maxY: 317 },
  },
  {
    left: { minX: 504, minY: 350, maxX: 632, maxY: 476 },
    right: { minX: 690, minY: 351, maxX: 819, maxY: 477 },
    top: { minX: 600, minY: 187, maxX: 728, maxY: 316 },
  },
  {
    left: { minX: 506, minY: 351, maxX: 634, maxY: 478 },
    right: { minX: 692, minY: 353, maxX: 821, maxY: 479 },
    top: { minX: 601, minY: 189, maxX: 729, maxY: 318 },
  },
  {
    left: { minX: 507, minY: 351, maxX: 635, maxY: 478 },
    right: { minX: 693, minY: 353, maxX: 823, maxY: 479 },
    top: { minX: 603, minY: 187, maxX: 731, maxY: 317 },
  },
  {
    left: { minX: 507, minY: 351, maxX: 636, maxY: 479 },
    right: { minX: 694, minY: 353, maxX: 824, maxY: 480 },
    top: { minX: 603, minY: 187, maxX: 732, maxY: 318 },
  },
  {
    left: { minX: 505, minY: 353, maxX: 634, maxY: 481 },
    right: { minX: 693, minY: 353, maxX: 824, maxY: 481 },
    top: { minX: 601, minY: 187, maxX: 731, maxY: 318 },
  },
  {
    left: { minX: 507, minY: 353, maxX: 636, maxY: 481 },
    right: { minX: 696, minY: 353, maxX: 828, maxY: 482 },
    top: { minX: 603, minY: 187, maxX: 733, maxY: 318 },
  },
  {
    left: { minX: 509, minY: 351, maxX: 639, maxY: 481 },
    right: { minX: 699, minY: 352, maxX: 832, maxY: 482 },
    top: { minX: 605, minY: 184, maxX: 737, maxY: 317 },
  },
  {
    left: { minX: 510, minY: 353, maxX: 640, maxY: 483 },
    right: { minX: 700, minY: 354, maxX: 834, maxY: 484 },
    top: { minX: 607, minY: 185, maxX: 738, maxY: 319 },
  },
  {
    left: { minX: 511, minY: 352, maxX: 642, maxY: 482 },
    right: { minX: 702, minY: 353, maxX: 836, maxY: 484 },
    top: { minX: 608, minY: 183, maxX: 740, maxY: 317 },
  },
  {
    left: { minX: 511, minY: 353, maxX: 642, maxY: 484 },
    right: { minX: 703, minY: 353, maxX: 837, maxY: 485 },
    top: { minX: 608, minY: 184, maxX: 741, maxY: 318 },
  },
  {
    left: { minX: 511, minY: 351, maxX: 643, maxY: 482 },
    right: { minX: 704, minY: 352, maxX: 838, maxY: 484 },
    top: { minX: 609, minY: 181, maxX: 742, maxY: 316 },
  },
  {
    left: { minX: 512, minY: 353, maxX: 644, maxY: 485 },
    right: { minX: 706, minY: 354, maxX: 841, maxY: 486 },
    top: { minX: 611, minY: 183, maxX: 744, maxY: 318 },
  },
  {
    left: { minX: 515, minY: 352, maxX: 648, maxY: 484 },
    right: { minX: 709, minY: 353, maxX: 846, maxY: 486 },
    top: { minX: 614, minY: 181, maxX: 748, maxY: 317 },
  },
  {
    left: { minX: 516, minY: 352, maxX: 649, maxY: 484 },
    right: { minX: 711, minY: 353, maxX: 848, maxY: 486 },
    top: { minX: 615, minY: 181, maxX: 750, maxY: 316 },
  },
  {
    left: { minX: 516, minY: 353, maxX: 650, maxY: 486 },
    right: { minX: 712, minY: 354, maxX: 849, maxY: 488 },
    top: { minX: 615, minY: 181, maxX: 750, maxY: 318 },
  },
  {
    left: { minX: 516, minY: 353, maxX: 650, maxY: 486 },
    right: { minX: 712, minY: 353, maxX: 850, maxY: 488 },
    top: { minX: 615, minY: 180, maxX: 751, maxY: 317 },
  },
  {
    left: { minX: 517, minY: 353, maxX: 650, maxY: 486 },
    right: { minX: 713, minY: 353, maxX: 851, maxY: 488 },
    top: { minX: 616, minY: 179, maxX: 752, maxY: 317 },
  },
  {
    left: { minX: 515, minY: 353, maxX: 649, maxY: 487 },
    right: { minX: 712, minY: 354, maxX: 851, maxY: 489 },
    top: { minX: 615, minY: 179, maxX: 751, maxY: 317 },
  },
  {
    left: { minX: 511, minY: 354, maxX: 646, maxY: 489 },
    right: { minX: 709, minY: 355, maxX: 848, maxY: 491 },
    top: { minX: 611, minY: 180, maxX: 748, maxY: 318 },
  },
  {
    left: { minX: 507, minY: 355, maxX: 643, maxY: 491 },
    right: { minX: 707, minY: 355, maxX: 846, maxY: 492 },
    top: { minX: 608, minY: 180, maxX: 746, maxY: 319 },
  },
  {
    left: { minX: 507, minY: 357, maxX: 643, maxY: 493 },
    right: { minX: 706, minY: 357, maxX: 846, maxY: 494 },
    top: { minX: 607, minY: 181, maxX: 745, maxY: 320 },
  },
  {
    left: { minX: 505, minY: 357, maxX: 642, maxY: 493 },
    right: { minX: 706, minY: 357, maxX: 846, maxY: 494 },
    top: { minX: 607, minY: 181, maxX: 744, maxY: 320 },
  },
  {
    left: { minX: 504, minY: 359, maxX: 642, maxY: 496 },
    right: { minX: 705, minY: 359, maxX: 846, maxY: 497 },
    top: { minX: 606, minY: 181, maxX: 744, maxY: 321 },
  },
  {
    left: { minX: 503, minY: 359, maxX: 641, maxY: 497 },
    right: { minX: 705, minY: 360, maxX: 846, maxY: 498 },
    top: { minX: 605, minY: 182, maxX: 744, maxY: 322 },
  },
  {
    left: { minX: 502, minY: 359, maxX: 641, maxY: 497 },
    right: { minX: 705, minY: 360, maxX: 848, maxY: 499 },
    top: { minX: 605, minY: 181, maxX: 745, maxY: 322 },
  },
  {
    left: { minX: 500, minY: 357, maxX: 639, maxY: 497 },
    right: { minX: 703, minY: 359, maxX: 846, maxY: 498 },
    top: { minX: 603, minY: 179, maxX: 744, maxY: 321 },
  },
  {
    left: { minX: 497, minY: 357, maxX: 638, maxY: 497 },
    right: { minX: 702, minY: 359, maxX: 845, maxY: 499 },
    top: { minX: 602, minY: 178, maxX: 742, maxY: 321 },
  },
  {
    left: { minX: 497, minY: 358, maxX: 637, maxY: 497 },
    right: { minX: 702, minY: 359, maxX: 845, maxY: 499 },
    top: { minX: 601, minY: 178, maxX: 742, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 358, maxX: 636, maxY: 498 },
    right: { minX: 701, minY: 359, maxX: 844, maxY: 499 },
    top: { minX: 601, minY: 178, maxX: 742, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 361, maxX: 637, maxY: 501 },
    right: { minX: 702, minY: 362, maxX: 845, maxY: 503 },
    top: { minX: 601, minY: 181, maxX: 742, maxY: 323 },
  },
  {
    left: { minX: 494, minY: 360, maxX: 635, maxY: 501 },
    right: { minX: 700, minY: 362, maxX: 844, maxY: 502 },
    top: { minX: 600, minY: 180, maxX: 741, maxY: 323 },
  },
  {
    left: { minX: 493, minY: 361, maxX: 634, maxY: 502 },
    right: { minX: 700, minY: 363, maxX: 843, maxY: 504 },
    top: { minX: 599, minY: 181, maxX: 740, maxY: 324 },
  },
  {
    left: { minX: 490, minY: 361, maxX: 633, maxY: 503 },
    right: { minX: 699, minY: 362, maxX: 843, maxY: 504 },
    top: { minX: 597, minY: 179, maxX: 739, maxY: 323 },
  },
  {
    left: { minX: 490, minY: 360, maxX: 633, maxY: 502 },
    right: { minX: 699, minY: 362, maxX: 843, maxY: 504 },
    top: { minX: 597, minY: 179, maxX: 740, maxY: 323 },
  },
  {
    left: { minX: 489, minY: 359, maxX: 632, maxY: 502 },
    right: { minX: 698, minY: 361, maxX: 843, maxY: 504 },
    top: { minX: 597, minY: 178, maxX: 740, maxY: 322 },
  },
  {
    left: { minX: 488, minY: 357, maxX: 631, maxY: 500 },
    right: { minX: 697, minY: 360, maxX: 842, maxY: 502 },
    top: { minX: 596, minY: 175, maxX: 740, maxY: 320 },
  },
  {
    left: { minX: 484, minY: 358, maxX: 627, maxY: 500 },
    right: { minX: 693, minY: 361, maxX: 838, maxY: 503 },
    top: { minX: 592, minY: 176, maxX: 736, maxY: 321 },
  },
  {
    left: { minX: 481, minY: 357, maxX: 625, maxY: 499 },
    right: { minX: 691, minY: 360, maxX: 835, maxY: 502 },
    top: { minX: 590, minY: 175, maxX: 733, maxY: 320 },
  },
  {
    left: { minX: 478, minY: 359, maxX: 622, maxY: 502 },
    right: { minX: 688, minY: 362, maxX: 832, maxY: 503 },
    top: { minX: 587, minY: 177, maxX: 730, maxY: 322 },
  },
  {
    left: { minX: 476, minY: 360, maxX: 620, maxY: 502 },
    right: { minX: 685, minY: 363, maxX: 829, maxY: 504 },
    top: { minX: 585, minY: 179, maxX: 728, maxY: 323 },
  },
  {
    left: { minX: 473, minY: 361, maxX: 617, maxY: 503 },
    right: { minX: 682, minY: 363, maxX: 826, maxY: 505 },
    top: { minX: 582, minY: 180, maxX: 724, maxY: 324 },
  },
  {
    left: { minX: 471, minY: 361, maxX: 615, maxY: 504 },
    right: { minX: 680, minY: 363, maxX: 823, maxY: 505 },
    top: { minX: 580, minY: 180, maxX: 722, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 360, maxX: 614, maxY: 503 },
    right: { minX: 679, minY: 362, maxX: 822, maxY: 503 },
    top: { minX: 578, minY: 179, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 468, minY: 357, maxX: 613, maxY: 501 },
    right: { minX: 679, minY: 359, maxX: 822, maxY: 500 },
    top: { minX: 577, minY: 175, maxX: 720, maxY: 320 },
  },
  {
    left: { minX: 468, minY: 357, maxX: 613, maxY: 501 },
    right: { minX: 678, minY: 359, maxX: 821, maxY: 500 },
    top: { minX: 576, minY: 175, maxX: 719, maxY: 319 },
  },
  {
    left: { minX: 465, minY: 358, maxX: 610, maxY: 502 },
    right: { minX: 676, minY: 359, maxX: 819, maxY: 500 },
    top: { minX: 574, minY: 175, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 357, maxX: 611, maxY: 501 },
    right: { minX: 676, minY: 359, maxX: 819, maxY: 499 },
    top: { minX: 575, minY: 174, maxX: 718, maxY: 319 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 613, maxY: 500 },
    right: { minX: 678, minY: 357, maxX: 821, maxY: 498 },
    top: { minX: 577, minY: 173, maxX: 720, maxY: 318 },
  },
  {
    left: { minX: 467, minY: 356, maxX: 613, maxY: 500 },
    right: { minX: 678, minY: 359, maxX: 820, maxY: 499 },
    top: { minX: 577, minY: 174, maxX: 720, maxY: 319 },
  },
  {
    left: { minX: 466, minY: 356, maxX: 612, maxY: 501 },
    right: { minX: 677, minY: 359, maxX: 819, maxY: 499 },
    top: { minX: 576, minY: 174, maxX: 720, maxY: 319 },
  },
  {
    left: { minX: 468, minY: 357, maxX: 614, maxY: 501 },
    right: { minX: 679, minY: 359, maxX: 820, maxY: 499 },
    top: { minX: 578, minY: 175, maxX: 721, maxY: 320 },
  },
  {
    left: { minX: 473, minY: 356, maxX: 618, maxY: 500 },
    right: { minX: 683, minY: 359, maxX: 825, maxY: 498 },
    top: { minX: 583, minY: 174, maxX: 726, maxY: 319 },
  },
  {
    left: { minX: 473, minY: 355, maxX: 618, maxY: 499 },
    right: { minX: 684, minY: 357, maxX: 826, maxY: 497 },
    top: { minX: 583, minY: 173, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 617, maxY: 499 },
    right: { minX: 681, minY: 358, maxX: 823, maxY: 497 },
    top: { minX: 581, minY: 173, maxX: 724, maxY: 318 },
  },
  {
    left: { minX: 467, minY: 354, maxX: 614, maxY: 499 },
    right: { minX: 679, minY: 357, maxX: 820, maxY: 496 },
    top: { minX: 578, minY: 172, maxX: 722, maxY: 317 },
  },
  {
    left: { minX: 465, minY: 354, maxX: 612, maxY: 499 },
    right: { minX: 676, minY: 356, maxX: 817, maxY: 495 },
    top: { minX: 575, minY: 171, maxX: 718, maxY: 317 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 613, maxY: 499 },
    right: { minX: 678, minY: 357, maxX: 818, maxY: 495 },
    top: { minX: 577, minY: 173, maxX: 720, maxY: 317 },
  },
  {
    left: { minX: 467, minY: 354, maxX: 614, maxY: 499 },
    right: { minX: 678, minY: 356, maxX: 819, maxY: 495 },
    top: { minX: 577, minY: 172, maxX: 720, maxY: 317 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 615, maxY: 498 },
    right: { minX: 679, minY: 356, maxX: 820, maxY: 495 },
    top: { minX: 579, minY: 171, maxX: 722, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 616, maxY: 498 },
    right: { minX: 680, minY: 356, maxX: 821, maxY: 494 },
    top: { minX: 581, minY: 172, maxX: 723, maxY: 316 },
  },
  {
    left: { minX: 473, minY: 354, maxX: 619, maxY: 499 },
    right: { minX: 682, minY: 357, maxX: 823, maxY: 495 },
    top: { minX: 583, minY: 173, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 477, minY: 353, maxX: 623, maxY: 498 },
    right: { minX: 687, minY: 356, maxX: 828, maxY: 495 },
    top: { minX: 587, minY: 173, maxX: 730, maxY: 316 },
  },
  {
    left: { minX: 478, minY: 355, maxX: 624, maxY: 500 },
    right: { minX: 687, minY: 358, maxX: 828, maxY: 496 },
    top: { minX: 588, minY: 175, maxX: 730, maxY: 318 },
  },
  {
    left: { minX: 477, minY: 356, maxX: 623, maxY: 500 },
    right: { minX: 686, minY: 358, maxX: 826, maxY: 496 },
    top: { minX: 587, minY: 175, maxX: 728, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 356, maxX: 622, maxY: 500 },
    right: { minX: 686, minY: 358, maxX: 826, maxY: 495 },
    top: { minX: 586, minY: 175, maxX: 728, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 355, maxX: 623, maxY: 499 },
    right: { minX: 686, minY: 358, maxX: 826, maxY: 495 },
    top: { minX: 587, minY: 175, maxX: 729, maxY: 318 },
  },
  {
    left: { minX: 475, minY: 354, maxX: 622, maxY: 499 },
    right: { minX: 685, minY: 357, maxX: 824, maxY: 495 },
    top: { minX: 586, minY: 173, maxX: 728, maxY: 317 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 619, maxY: 498 },
    right: { minX: 682, minY: 357, maxX: 821, maxY: 494 },
    top: { minX: 583, minY: 173, maxX: 726, maxY: 317 },
  },
  {
    left: { minX: 472, minY: 354, maxX: 618, maxY: 498 },
    right: { minX: 681, minY: 357, maxX: 820, maxY: 494 },
    top: { minX: 583, minY: 173, maxX: 724, maxY: 317 },
  },
  {
    left: { minX: 468, minY: 352, maxX: 614, maxY: 497 },
    right: { minX: 677, minY: 355, maxX: 816, maxY: 492 },
    top: { minX: 579, minY: 171, maxX: 720, maxY: 315 },
  },
  {
    left: { minX: 469, minY: 352, maxX: 615, maxY: 497 },
    right: { minX: 678, minY: 355, maxX: 816, maxY: 491 },
    top: { minX: 579, minY: 171, maxX: 722, maxY: 315 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 616, maxY: 498 },
    right: { minX: 679, minY: 356, maxX: 818, maxY: 493 },
    top: { minX: 580, minY: 173, maxX: 722, maxY: 316 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 617, maxY: 498 },
    right: { minX: 679, minY: 357, maxX: 818, maxY: 494 },
    top: { minX: 581, minY: 173, maxX: 723, maxY: 317 },
  },
  {
    left: { minX: 469, minY: 353, maxX: 616, maxY: 499 },
    right: { minX: 678, minY: 357, maxX: 816, maxY: 494 },
    top: { minX: 581, minY: 175, maxX: 722, maxY: 318 },
  },
  {
    left: { minX: 466, minY: 356, maxX: 612, maxY: 500 },
    right: { minX: 675, minY: 359, maxX: 812, maxY: 496 },
    top: { minX: 577, minY: 177, maxX: 719, maxY: 320 },
  },
  {
    left: { minX: 463, minY: 357, maxX: 610, maxY: 502 },
    right: { minX: 672, minY: 360, maxX: 810, maxY: 496 },
    top: { minX: 575, minY: 178, maxX: 716, maxY: 321 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 611, maxY: 501 },
    right: { minX: 673, minY: 359, maxX: 810, maxY: 495 },
    top: { minX: 575, minY: 177, maxX: 716, maxY: 320 },
  },
  {
    left: { minX: 467, minY: 355, maxX: 613, maxY: 500 },
    right: { minX: 675, minY: 359, maxX: 812, maxY: 494 },
    top: { minX: 577, minY: 176, maxX: 719, maxY: 319 },
  },
  {
    left: { minX: 470, minY: 353, maxX: 616, maxY: 499 },
    right: { minX: 678, minY: 358, maxX: 816, maxY: 493 },
    top: { minX: 581, minY: 175, maxX: 722, maxY: 318 },
  },
  {
    left: { minX: 473, minY: 353, maxX: 620, maxY: 498 },
    right: { minX: 680, minY: 359, maxX: 818, maxY: 495 },
    top: { minX: 586, minY: 176, maxX: 727, maxY: 319 },
  },
  {
    left: { minX: 471, minY: 354, maxX: 617, maxY: 499 },
    right: { minX: 678, minY: 360, maxX: 816, maxY: 495 },
    top: { minX: 583, minY: 177, maxX: 724, maxY: 319 },
  },
  {
    left: { minX: 469, minY: 355, maxX: 616, maxY: 500 },
    right: { minX: 677, minY: 360, maxX: 814, maxY: 495 },
    top: { minX: 582, minY: 177, maxX: 723, maxY: 320 },
  },
  {
    left: { minX: 472, minY: 355, maxX: 618, maxY: 500 },
    right: { minX: 679, minY: 361, maxX: 816, maxY: 497 },
    top: { minX: 585, minY: 179, maxX: 725, maxY: 321 },
  },
  {
    left: { minX: 472, minY: 357, maxX: 618, maxY: 502 },
    right: { minX: 679, minY: 363, maxX: 816, maxY: 498 },
    top: { minX: 584, minY: 181, maxX: 725, maxY: 323 },
  },
  {
    left: { minX: 470, minY: 359, maxX: 616, maxY: 503 },
    right: { minX: 677, minY: 363, maxX: 814, maxY: 498 },
    top: { minX: 582, minY: 182, maxX: 722, maxY: 323 },
  },
  {
    left: { minX: 468, minY: 357, maxX: 614, maxY: 502 },
    right: { minX: 675, minY: 362, maxX: 812, maxY: 497 },
    top: { minX: 579, minY: 181, maxX: 720, maxY: 322 },
  },
  {
    left: { minX: 465, minY: 356, maxX: 612, maxY: 501 },
    right: { minX: 673, minY: 360, maxX: 810, maxY: 495 },
    top: { minX: 577, minY: 178, maxX: 717, maxY: 320 },
  },
  {
    left: { minX: 465, minY: 355, maxX: 612, maxY: 500 },
    right: { minX: 673, minY: 359, maxX: 810, maxY: 494 },
    top: { minX: 577, minY: 177, maxX: 717, maxY: 319 },
  },
  {
    left: { minX: 466, minY: 355, maxX: 613, maxY: 500 },
    right: { minX: 674, minY: 359, maxX: 811, maxY: 494 },
    top: { minX: 578, minY: 177, maxX: 719, maxY: 319 },
  },
  {
    left: { minX: 466, minY: 354, maxX: 612, maxY: 499 },
    right: { minX: 674, minY: 359, maxX: 810, maxY: 494 },
    top: { minX: 577, minY: 176, maxX: 719, maxY: 319 },
  },
  {
    left: { minX: 462, minY: 352, maxX: 609, maxY: 498 },
    right: { minX: 671, minY: 357, maxX: 808, maxY: 492 },
    top: { minX: 574, minY: 173, maxX: 715, maxY: 317 },
  },
  {
    left: { minX: 465, minY: 352, maxX: 612, maxY: 498 },
    right: { minX: 674, minY: 356, maxX: 811, maxY: 492 },
    top: { minX: 577, minY: 173, maxX: 718, maxY: 316 },
  },
  {
    left: { minX: 467, minY: 351, maxX: 614, maxY: 497 },
    right: { minX: 675, minY: 355, maxX: 813, maxY: 491 },
    top: { minX: 579, minY: 172, maxX: 721, maxY: 315 },
  },
  {
    left: { minX: 469, minY: 348, maxX: 616, maxY: 494 },
    right: { minX: 678, minY: 353, maxX: 816, maxY: 489 },
    top: { minX: 582, minY: 168, maxX: 724, maxY: 313 },
  },
  {
    left: { minX: 470, minY: 357, maxX: 618, maxY: 504 },
    right: { minX: 679, minY: 362, maxX: 817, maxY: 499 },
    top: { minX: 583, minY: 177, maxX: 725, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 358, maxX: 619, maxY: 505 },
    right: { minX: 681, minY: 363, maxX: 820, maxY: 500 },
    top: { minX: 584, minY: 177, maxX: 727, maxY: 322 },
  },
  {
    left: { minX: 469, minY: 367, maxX: 617, maxY: 513 },
    right: { minX: 678, minY: 369, maxX: 817, maxY: 507 },
    top: { minX: 581, minY: 185, maxX: 724, maxY: 330 },
  },
  {
    left: { minX: 468, minY: 371, maxX: 616, maxY: 517 },
    right: { minX: 677, minY: 373, maxX: 815, maxY: 510 },
    top: { minX: 580, minY: 189, maxX: 722, maxY: 334 },
  },
  {
    left: { minX: 467, minY: 368, maxX: 614, maxY: 514 },
    right: { minX: 676, minY: 369, maxX: 813, maxY: 506 },
    top: { minX: 577, minY: 186, maxX: 720, maxY: 331 },
  },
  {
    left: { minX: 467, minY: 367, maxX: 613, maxY: 512 },
    right: { minX: 674, minY: 368, maxX: 811, maxY: 504 },
    top: { minX: 577, minY: 185, maxX: 719, maxY: 330 },
  },
  {
    left: { minX: 472, minY: 367, maxX: 616, maxY: 509 },
    right: { minX: 676, minY: 368, maxX: 812, maxY: 502 },
    top: { minX: 579, minY: 187, maxX: 721, maxY: 330 },
  },
  {
    left: { minX: 476, minY: 363, maxX: 618, maxY: 505 },
    right: { minX: 679, minY: 364, maxX: 814, maxY: 497 },
    top: { minX: 582, minY: 184, maxX: 723, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 367, maxX: 622, maxY: 506 },
    right: { minX: 682, minY: 367, maxX: 815, maxY: 499 },
    top: { minX: 587, minY: 190, maxX: 726, maxY: 330 },
  },
  {
    left: { minX: 485, minY: 367, maxX: 625, maxY: 505 },
    right: { minX: 684, minY: 368, maxX: 817, maxY: 499 },
    top: { minX: 590, minY: 191, maxX: 728, maxY: 330 },
  },
  {
    left: { minX: 495, minY: 367, maxX: 633, maxY: 504 },
    right: { minX: 692, minY: 368, maxX: 824, maxY: 498 },
    top: { minX: 598, minY: 192, maxX: 736, maxY: 331 },
  },
  {
    left: { minX: 499, minY: 367, maxX: 636, maxY: 503 },
    right: { minX: 694, minY: 368, maxX: 826, maxY: 498 },
    top: { minX: 601, minY: 194, maxX: 738, maxY: 332 },
  },
  {
    left: { minX: 507, minY: 365, maxX: 641, maxY: 499 },
    right: { minX: 700, minY: 366, maxX: 831, maxY: 495 },
    top: { minX: 607, minY: 193, maxX: 742, maxY: 330 },
  },
  {
    left: { minX: 512, minY: 364, maxX: 644, maxY: 497 },
    right: { minX: 703, minY: 365, maxX: 833, maxY: 492 },
    top: { minX: 611, minY: 194, maxX: 745, maxY: 329 },
  },
  {
    left: { minX: 517, minY: 365, maxX: 648, maxY: 496 },
    right: { minX: 706, minY: 366, maxX: 834, maxY: 493 },
    top: { minX: 615, minY: 197, maxX: 748, maxY: 331 },
  },
  {
    left: { minX: 518, minY: 367, maxX: 648, maxY: 496 },
    right: { minX: 706, minY: 367, maxX: 834, maxY: 493 },
    top: { minX: 614, minY: 200, maxX: 746, maxY: 332 },
  },
  {
    left: { minX: 520, minY: 369, maxX: 648, maxY: 497 },
    right: { minX: 705, minY: 369, maxX: 832, maxY: 494 },
    top: { minX: 615, minY: 204, maxX: 746, maxY: 335 },
  },
  {
    left: { minX: 518, minY: 373, maxX: 645, maxY: 499 },
    right: { minX: 701, minY: 372, maxX: 827, maxY: 496 },
    top: { minX: 611, minY: 209, maxX: 741, maxY: 339 },
  },
  {
    left: { minX: 518, minY: 379, maxX: 643, maxY: 503 },
    right: { minX: 700, minY: 377, maxX: 824, maxY: 500 },
    top: { minX: 609, minY: 217, maxX: 737, maxY: 345 },
  },
  {
    left: { minX: 518, minY: 383, maxX: 642, maxY: 507 },
    right: { minX: 698, minY: 382, maxX: 822, maxY: 504 },
    top: { minX: 608, minY: 223, maxX: 736, maxY: 350 },
  },
  {
    left: { minX: 514, minY: 387, maxX: 637, maxY: 510 },
    right: { minX: 693, minY: 385, maxX: 816, maxY: 507 },
    top: { minX: 604, minY: 228, maxX: 730, maxY: 354 },
  },
  {
    left: { minX: 513, minY: 391, maxX: 635, maxY: 513 },
    right: { minX: 690, minY: 390, maxX: 812, maxY: 511 },
    top: { minX: 603, minY: 233, maxX: 727, maxY: 358 },
  },
  {
    left: { minX: 512, minY: 393, maxX: 634, maxY: 515 },
    right: { minX: 689, minY: 393, maxX: 810, maxY: 513 },
    top: { minX: 601, minY: 238, maxX: 724, maxY: 361 },
  },
  {
    left: { minX: 513, minY: 396, maxX: 634, maxY: 516 },
    right: { minX: 689, minY: 396, maxX: 810, maxY: 516 },
    top: { minX: 602, minY: 241, maxX: 724, maxY: 364 },
  },
  {
    left: { minX: 508, minY: 394, maxX: 628, maxY: 514 },
    right: { minX: 683, minY: 395, maxX: 803, maxY: 514 },
    top: { minX: 597, minY: 241, maxX: 718, maxY: 362 },
  },
  {
    left: { minX: 505, minY: 391, maxX: 625, maxY: 511 },
    right: { minX: 680, minY: 391, maxX: 800, maxY: 511 },
    top: { minX: 593, minY: 237, maxX: 715, maxY: 360 },
  },
  {
    left: { minX: 502, minY: 387, maxX: 622, maxY: 507 },
    right: { minX: 677, minY: 387, maxX: 797, maxY: 507 },
    top: { minX: 591, minY: 233, maxX: 712, maxY: 355 },
  },
  {
    left: { minX: 502, minY: 383, maxX: 622, maxY: 503 },
    right: { minX: 677, minY: 384, maxX: 797, maxY: 503 },
    top: { minX: 591, minY: 229, maxX: 712, maxY: 352 },
  },
  {
    left: { minX: 498, minY: 382, maxX: 618, maxY: 502 },
    right: { minX: 673, minY: 383, maxX: 793, maxY: 503 },
    top: { minX: 586, minY: 229, maxX: 708, maxY: 351 },
  },
  {
    left: { minX: 492, minY: 381, maxX: 612, maxY: 500 },
    right: { minX: 667, minY: 381, maxX: 787, maxY: 501 },
    top: { minX: 580, minY: 227, maxX: 702, maxY: 349 },
  },
  {
    left: { minX: 489, minY: 377, maxX: 609, maxY: 497 },
    right: { minX: 663, minY: 379, maxX: 783, maxY: 498 },
    top: { minX: 577, minY: 225, maxX: 698, maxY: 346 },
  },
  {
    left: { minX: 487, minY: 376, maxX: 607, maxY: 495 },
    right: { minX: 661, minY: 377, maxX: 780, maxY: 496 },
    top: { minX: 575, minY: 223, maxX: 696, maxY: 345 },
  },
  {
    left: { minX: 487, minY: 374, maxX: 606, maxY: 492 },
    right: { minX: 661, minY: 375, maxX: 780, maxY: 493 },
    top: { minX: 575, minY: 221, maxX: 695, maxY: 342 },
  },
  {
    left: { minX: 487, minY: 374, maxX: 606, maxY: 492 },
    right: { minX: 661, minY: 375, maxX: 780, maxY: 493 },
    top: { minX: 575, minY: 221, maxX: 694, maxY: 342 },
  },
  {
    left: { minX: 487, minY: 373, maxX: 606, maxY: 491 },
    right: { minX: 660, minY: 373, maxX: 779, maxY: 492 },
    top: { minX: 574, minY: 221, maxX: 694, maxY: 342 },
  },
  {
    left: { minX: 484, minY: 372, maxX: 603, maxY: 489 },
    right: { minX: 657, minY: 373, maxX: 776, maxY: 490 },
    top: { minX: 571, minY: 220, maxX: 691, maxY: 341 },
  },
  {
    left: { minX: 483, minY: 372, maxX: 602, maxY: 489 },
    right: { minX: 656, minY: 372, maxX: 773, maxY: 489 },
    top: { minX: 569, minY: 221, maxX: 689, maxY: 340 },
  },
  {
    left: { minX: 483, minY: 373, maxX: 602, maxY: 489 },
    right: { minX: 655, minY: 373, maxX: 772, maxY: 490 },
    top: { minX: 569, minY: 222, maxX: 688, maxY: 341 },
  },
  {
    left: { minX: 484, minY: 371, maxX: 602, maxY: 488 },
    right: { minX: 655, minY: 373, maxX: 772, maxY: 489 },
    top: { minX: 570, minY: 221, maxX: 688, maxY: 341 },
  },
  {
    left: { minX: 484, minY: 369, maxX: 602, maxY: 485 },
    right: { minX: 655, minY: 369, maxX: 772, maxY: 486 },
    top: { minX: 571, minY: 219, maxX: 688, maxY: 338 },
  },
  {
    left: { minX: 485, minY: 365, maxX: 603, maxY: 481 },
    right: { minX: 656, minY: 366, maxX: 773, maxY: 482 },
    top: { minX: 571, minY: 215, maxX: 689, maxY: 334 },
  },
  {
    left: { minX: 486, minY: 363, maxX: 603, maxY: 478 },
    right: { minX: 657, minY: 363, maxX: 773, maxY: 479 },
    top: { minX: 571, minY: 213, maxX: 690, maxY: 332 },
  },
  {
    left: { minX: 485, minY: 360, maxX: 602, maxY: 475 },
    right: { minX: 656, minY: 361, maxX: 772, maxY: 477 },
    top: { minX: 571, minY: 210, maxX: 689, maxY: 329 },
  },
  {
    left: { minX: 484, minY: 358, maxX: 602, maxY: 474 },
    right: { minX: 655, minY: 359, maxX: 772, maxY: 475 },
    top: { minX: 571, minY: 208, maxX: 688, maxY: 327 },
  },
  {
    left: { minX: 482, minY: 356, maxX: 600, maxY: 471 },
    right: { minX: 653, minY: 357, maxX: 770, maxY: 473 },
    top: { minX: 569, minY: 206, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 480, minY: 353, maxX: 598, maxY: 469 },
    right: { minX: 651, minY: 354, maxX: 768, maxY: 470 },
    top: { minX: 567, minY: 203, maxX: 684, maxY: 322 },
  },
  {
    left: { minX: 478, minY: 351, maxX: 596, maxY: 467 },
    right: { minX: 649, minY: 353, maxX: 766, maxY: 468 },
    top: { minX: 565, minY: 201, maxX: 682, maxY: 320 },
  },
  {
    left: { minX: 478, minY: 350, maxX: 596, maxY: 466 },
    right: { minX: 649, minY: 351, maxX: 766, maxY: 467 },
    top: { minX: 565, minY: 200, maxX: 682, maxY: 319 },
  },
  {
    left: { minX: 477, minY: 346, maxX: 595, maxY: 462 },
    right: { minX: 648, minY: 347, maxX: 765, maxY: 463 },
    top: { minX: 564, minY: 195, maxX: 682, maxY: 316 },
  },
  {
    left: { minX: 477, minY: 342, maxX: 595, maxY: 458 },
    right: { minX: 648, minY: 344, maxX: 764, maxY: 459 },
    top: { minX: 564, minY: 192, maxX: 682, maxY: 312 },
  },
  {
    left: { minX: 477, minY: 340, maxX: 594, maxY: 455 },
    right: { minX: 647, minY: 341, maxX: 763, maxY: 456 },
    top: { minX: 563, minY: 190, maxX: 680, maxY: 309 },
  },
  {
    left: { minX: 476, minY: 337, maxX: 594, maxY: 452 },
    right: { minX: 647, minY: 338, maxX: 763, maxY: 453 },
    top: { minX: 563, minY: 187, maxX: 680, maxY: 306 },
  },
  {
    left: { minX: 477, minY: 337, maxX: 594, maxY: 452 },
    right: { minX: 647, minY: 337, maxX: 763, maxY: 453 },
    top: { minX: 563, minY: 186, maxX: 680, maxY: 306 },
  },
  {
    left: { minX: 475, minY: 333, maxX: 592, maxY: 448 },
    right: { minX: 646, minY: 334, maxX: 762, maxY: 449 },
    top: { minX: 561, minY: 183, maxX: 679, maxY: 303 },
  },
  {
    left: { minX: 473, minY: 330, maxX: 590, maxY: 446 },
    right: { minX: 643, minY: 331, maxX: 760, maxY: 446 },
    top: { minX: 559, minY: 180, maxX: 677, maxY: 300 },
  },
  {
    left: { minX: 472, minY: 328, maxX: 590, maxY: 444 },
    right: { minX: 643, minY: 330, maxX: 759, maxY: 445 },
    top: { minX: 559, minY: 178, maxX: 677, maxY: 298 },
  },
  {
    left: { minX: 471, minY: 329, maxX: 589, maxY: 445 },
    right: { minX: 642, minY: 331, maxX: 759, maxY: 446 },
    top: { minX: 558, minY: 179, maxX: 676, maxY: 299 },
  },
  {
    left: { minX: 471, minY: 330, maxX: 589, maxY: 446 },
    right: { minX: 642, minY: 332, maxX: 758, maxY: 447 },
    top: { minX: 558, minY: 180, maxX: 676, maxY: 300 },
  },
  {
    left: { minX: 471, minY: 331, maxX: 588, maxY: 447 },
    right: { minX: 641, minY: 333, maxX: 757, maxY: 447 },
    top: { minX: 557, minY: 181, maxX: 675, maxY: 301 },
  },
  {
    left: { minX: 468, minY: 334, maxX: 586, maxY: 450 },
    right: { minX: 639, minY: 335, maxX: 754, maxY: 450 },
    top: { minX: 554, minY: 185, maxX: 672, maxY: 304 },
  },
  {
    left: { minX: 466, minY: 332, maxX: 584, maxY: 447 },
    right: { minX: 637, minY: 334, maxX: 752, maxY: 448 },
    top: { minX: 553, minY: 183, maxX: 670, maxY: 302 },
  },
  {
    left: { minX: 464, minY: 333, maxX: 582, maxY: 448 },
    right: { minX: 635, minY: 334, maxX: 750, maxY: 448 },
    top: { minX: 551, minY: 183, maxX: 668, maxY: 302 },
  },
  {
    left: { minX: 464, minY: 332, maxX: 582, maxY: 448 },
    right: { minX: 635, minY: 334, maxX: 750, maxY: 448 },
    top: { minX: 551, minY: 183, maxX: 668, maxY: 302 },
  },
  {
    left: { minX: 464, minY: 333, maxX: 582, maxY: 448 },
    right: { minX: 635, minY: 335, maxX: 750, maxY: 449 },
    top: { minX: 551, minY: 183, maxX: 668, maxY: 302 },
  },
  {
    left: { minX: 465, minY: 333, maxX: 583, maxY: 448 },
    right: { minX: 636, minY: 335, maxX: 752, maxY: 449 },
    top: { minX: 552, minY: 183, maxX: 670, maxY: 302 },
  },
  {
    left: { minX: 465, minY: 333, maxX: 583, maxY: 448 },
    right: { minX: 637, minY: 335, maxX: 752, maxY: 449 },
    top: { minX: 552, minY: 183, maxX: 670, maxY: 303 },
  },
  {
    left: { minX: 463, minY: 333, maxX: 581, maxY: 449 },
    right: { minX: 634, minY: 335, maxX: 750, maxY: 449 },
    top: { minX: 550, minY: 183, maxX: 668, maxY: 303 },
  },
  {
    left: { minX: 462, minY: 334, maxX: 580, maxY: 450 },
    right: { minX: 634, minY: 335, maxX: 749, maxY: 450 },
    top: { minX: 549, minY: 184, maxX: 666, maxY: 303 },
  },
  {
    left: { minX: 461, minY: 334, maxX: 580, maxY: 450 },
    right: { minX: 633, minY: 335, maxX: 748, maxY: 449 },
    top: { minX: 547, minY: 183, maxX: 666, maxY: 303 },
  },
  {
    left: { minX: 461, minY: 334, maxX: 579, maxY: 450 },
    right: { minX: 633, minY: 335, maxX: 748, maxY: 450 },
    top: { minX: 547, minY: 183, maxX: 666, maxY: 303 },
  },
  {
    left: { minX: 463, minY: 333, maxX: 581, maxY: 449 },
    right: { minX: 635, minY: 334, maxX: 751, maxY: 449 },
    top: { minX: 549, minY: 182, maxX: 668, maxY: 302 },
  },
  {
    left: { minX: 461, minY: 333, maxX: 580, maxY: 449 },
    right: { minX: 634, minY: 333, maxX: 750, maxY: 449 },
    top: { minX: 549, minY: 181, maxX: 667, maxY: 302 },
  },
  {
    left: { minX: 461, minY: 335, maxX: 580, maxY: 451 },
    right: { minX: 633, minY: 335, maxX: 750, maxY: 451 },
    top: { minX: 548, minY: 183, maxX: 667, maxY: 304 },
  },
  {
    left: { minX: 461, minY: 333, maxX: 580, maxY: 450 },
    right: { minX: 634, minY: 335, maxX: 750, maxY: 450 },
    top: { minX: 549, minY: 182, maxX: 668, maxY: 302 },
  },
  {
    left: { minX: 462, minY: 338, maxX: 581, maxY: 455 },
    right: { minX: 635, minY: 339, maxX: 752, maxY: 455 },
    top: { minX: 549, minY: 187, maxX: 668, maxY: 307 },
  },
  {
    left: { minX: 461, minY: 338, maxX: 581, maxY: 456 },
    right: { minX: 635, minY: 339, maxX: 752, maxY: 456 },
    top: { minX: 549, minY: 187, maxX: 668, maxY: 307 },
  },
  {
    left: { minX: 461, minY: 338, maxX: 581, maxY: 456 },
    right: { minX: 635, minY: 339, maxX: 753, maxY: 455 },
    top: { minX: 549, minY: 185, maxX: 669, maxY: 306 },
  },
  {
    left: { minX: 462, minY: 337, maxX: 582, maxY: 455 },
    right: { minX: 637, minY: 338, maxX: 755, maxY: 455 },
    top: { minX: 551, minY: 184, maxX: 671, maxY: 305 },
  },
  {
    left: { minX: 461, minY: 337, maxX: 581, maxY: 455 },
    right: { minX: 636, minY: 338, maxX: 754, maxY: 455 },
    top: { minX: 549, minY: 183, maxX: 670, maxY: 305 },
  },
  {
    left: { minX: 462, minY: 339, maxX: 583, maxY: 457 },
    right: { minX: 638, minY: 340, maxX: 756, maxY: 457 },
    top: { minX: 551, minY: 185, maxX: 672, maxY: 307 },
  },
  {
    left: { minX: 465, minY: 339, maxX: 586, maxY: 458 },
    right: { minX: 641, minY: 341, maxX: 759, maxY: 459 },
    top: { minX: 555, minY: 186, maxX: 675, maxY: 308 },
  },
  {
    left: { minX: 465, minY: 339, maxX: 587, maxY: 458 },
    right: { minX: 642, minY: 341, maxX: 762, maxY: 459 },
    top: { minX: 556, minY: 185, maxX: 677, maxY: 308 },
  },
  {
    left: { minX: 465, minY: 339, maxX: 587, maxY: 459 },
    right: { minX: 642, minY: 341, maxX: 762, maxY: 460 },
    top: { minX: 555, minY: 185, maxX: 677, maxY: 308 },
  },
  {
    left: { minX: 465, minY: 341, maxX: 588, maxY: 460 },
    right: { minX: 643, minY: 342, maxX: 763, maxY: 462 },
    top: { minX: 556, minY: 185, maxX: 678, maxY: 309 },
  },
  {
    left: { minX: 463, minY: 340, maxX: 585, maxY: 460 },
    right: { minX: 641, minY: 341, maxX: 761, maxY: 461 },
    top: { minX: 553, minY: 184, maxX: 676, maxY: 308 },
  },
  {
    left: { minX: 463, minY: 342, maxX: 586, maxY: 463 },
    right: { minX: 642, minY: 344, maxX: 764, maxY: 465 },
    top: { minX: 555, minY: 187, maxX: 678, maxY: 311 },
  },
  {
    left: { minX: 463, minY: 343, maxX: 587, maxY: 464 },
    right: { minX: 643, minY: 345, maxX: 764, maxY: 465 },
    top: { minX: 555, minY: 186, maxX: 678, maxY: 311 },
  },
  {
    left: { minX: 465, minY: 343, maxX: 589, maxY: 465 },
    right: { minX: 645, minY: 345, maxX: 768, maxY: 466 },
    top: { minX: 557, minY: 186, maxX: 681, maxY: 311 },
  },
  {
    left: { minX: 467, minY: 343, maxX: 591, maxY: 465 },
    right: { minX: 647, minY: 345, maxX: 770, maxY: 467 },
    top: { minX: 560, minY: 185, maxX: 684, maxY: 311 },
  },
  {
    left: { minX: 467, minY: 345, maxX: 591, maxY: 467 },
    right: { minX: 647, minY: 347, maxX: 770, maxY: 469 },
    top: { minX: 559, minY: 187, maxX: 683, maxY: 312 },
  },
  {
    left: { minX: 467, minY: 343, maxX: 592, maxY: 466 },
    right: { minX: 649, minY: 345, maxX: 773, maxY: 468 },
    top: { minX: 561, minY: 185, maxX: 685, maxY: 311 },
  },
  {
    left: { minX: 466, minY: 344, maxX: 592, maxY: 467 },
    right: { minX: 648, minY: 346, maxX: 772, maxY: 469 },
    top: { minX: 559, minY: 185, maxX: 685, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 343, maxX: 589, maxY: 467 },
    right: { minX: 647, minY: 345, maxX: 772, maxY: 469 },
    top: { minX: 557, minY: 182, maxX: 684, maxY: 310 },
  },
  {
    left: { minX: 461, minY: 345, maxX: 588, maxY: 470 },
    right: { minX: 646, minY: 347, maxX: 771, maxY: 471 },
    top: { minX: 556, minY: 183, maxX: 682, maxY: 312 },
  },
  {
    left: { minX: 463, minY: 345, maxX: 591, maxY: 472 },
    right: { minX: 650, minY: 348, maxX: 776, maxY: 474 },
    top: { minX: 559, minY: 184, maxX: 686, maxY: 313 },
  },
  {
    left: { minX: 463, minY: 345, maxX: 592, maxY: 472 },
    right: { minX: 650, minY: 348, maxX: 777, maxY: 474 },
    top: { minX: 559, minY: 183, maxX: 688, maxY: 312 },
  },
  {
    left: { minX: 461, minY: 346, maxX: 590, maxY: 473 },
    right: { minX: 649, minY: 349, maxX: 777, maxY: 475 },
    top: { minX: 557, minY: 183, maxX: 686, maxY: 313 },
  },
  {
    left: { minX: 459, minY: 346, maxX: 589, maxY: 474 },
    right: { minX: 648, minY: 349, maxX: 777, maxY: 476 },
    top: { minX: 556, minY: 181, maxX: 686, maxY: 313 },
  },
  {
    left: { minX: 457, minY: 347, maxX: 588, maxY: 475 },
    right: { minX: 647, minY: 349, maxX: 776, maxY: 477 },
    top: { minX: 554, minY: 181, maxX: 684, maxY: 313 },
  },
  {
    left: { minX: 456, minY: 347, maxX: 588, maxY: 476 },
    right: { minX: 647, minY: 349, maxX: 777, maxY: 478 },
    top: { minX: 554, minY: 181, maxX: 684, maxY: 313 },
  },
  {
    left: { minX: 457, minY: 347, maxX: 589, maxY: 477 },
    right: { minX: 649, minY: 349, maxX: 779, maxY: 479 },
    top: { minX: 555, minY: 181, maxX: 686, maxY: 313 },
  },
  {
    left: { minX: 458, minY: 347, maxX: 590, maxY: 477 },
    right: { minX: 650, minY: 349, maxX: 781, maxY: 479 },
    top: { minX: 557, minY: 181, maxX: 688, maxY: 313 },
  },
  {
    left: { minX: 457, minY: 345, maxX: 590, maxY: 476 },
    right: { minX: 651, minY: 347, maxX: 782, maxY: 478 },
    top: { minX: 557, minY: 177, maxX: 689, maxY: 311 },
  },
  {
    left: { minX: 455, minY: 346, maxX: 588, maxY: 478 },
    right: { minX: 649, minY: 349, maxX: 781, maxY: 479 },
    top: { minX: 555, minY: 177, maxX: 687, maxY: 312 },
  },
  {
    left: { minX: 454, minY: 348, maxX: 588, maxY: 480 },
    right: { minX: 649, minY: 350, maxX: 781, maxY: 481 },
    top: { minX: 554, minY: 179, maxX: 687, maxY: 314 },
  },
  {
    left: { minX: 457, minY: 348, maxX: 592, maxY: 480 },
    right: { minX: 653, minY: 351, maxX: 786, maxY: 482 },
    top: { minX: 557, minY: 178, maxX: 691, maxY: 314 },
  },
  {
    left: { minX: 462, minY: 349, maxX: 597, maxY: 482 },
    right: { minX: 657, minY: 352, maxX: 792, maxY: 484 },
    top: { minX: 563, minY: 179, maxX: 697, maxY: 315 },
  },
  {
    left: { minX: 463, minY: 350, maxX: 598, maxY: 483 },
    right: { minX: 659, minY: 353, maxX: 794, maxY: 486 },
    top: { minX: 565, minY: 179, maxX: 699, maxY: 316 },
  },
  {
    left: { minX: 462, minY: 351, maxX: 598, maxY: 484 },
    right: { minX: 659, minY: 353, maxX: 794, maxY: 487 },
    top: { minX: 563, minY: 179, maxX: 698, maxY: 315 },
  },
  {
    left: { minX: 461, minY: 351, maxX: 597, maxY: 485 },
    right: { minX: 659, minY: 353, maxX: 795, maxY: 487 },
    top: { minX: 563, minY: 177, maxX: 698, maxY: 315 },
  },
  {
    left: { minX: 461, minY: 350, maxX: 598, maxY: 485 },
    right: { minX: 660, minY: 352, maxX: 796, maxY: 487 },
    top: { minX: 563, minY: 176, maxX: 700, maxY: 314 },
  },
  {
    left: { minX: 460, minY: 351, maxX: 598, maxY: 487 },
    right: { minX: 660, minY: 353, maxX: 797, maxY: 490 },
    top: { minX: 563, minY: 177, maxX: 700, maxY: 316 },
  },
  {
    left: { minX: 456, minY: 351, maxX: 595, maxY: 487 },
    right: { minX: 657, minY: 352, maxX: 796, maxY: 489 },
    top: { minX: 559, minY: 175, maxX: 697, maxY: 314 },
  },
  {
    left: { minX: 452, minY: 352, maxX: 592, maxY: 489 },
    right: { minX: 655, minY: 353, maxX: 794, maxY: 491 },
    top: { minX: 555, minY: 175, maxX: 694, maxY: 315 },
  },
  {
    left: { minX: 452, minY: 351, maxX: 592, maxY: 489 },
    right: { minX: 655, minY: 353, maxX: 795, maxY: 491 },
    top: { minX: 555, minY: 173, maxX: 694, maxY: 315 },
  },
  {
    left: { minX: 453, minY: 350, maxX: 594, maxY: 488 },
    right: { minX: 657, minY: 351, maxX: 798, maxY: 490 },
    top: { minX: 557, minY: 171, maxX: 697, maxY: 313 },
  },
  {
    left: { minX: 454, minY: 350, maxX: 595, maxY: 488 },
    right: { minX: 658, minY: 351, maxX: 799, maxY: 491 },
    top: { minX: 559, minY: 171, maxX: 699, maxY: 313 },
  },
  {
    left: { minX: 454, minY: 350, maxX: 596, maxY: 489 },
    right: { minX: 659, minY: 352, maxX: 800, maxY: 491 },
    top: { minX: 559, minY: 171, maxX: 700, maxY: 313 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 596, maxY: 491 },
    right: { minX: 661, minY: 353, maxX: 802, maxY: 493 },
    top: { minX: 561, minY: 173, maxX: 701, maxY: 315 },
  },
  {
    left: { minX: 454, minY: 352, maxX: 595, maxY: 492 },
    right: { minX: 659, minY: 354, maxX: 801, maxY: 494 },
    top: { minX: 559, minY: 173, maxX: 700, maxY: 315 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 597, maxY: 491 },
    right: { minX: 661, minY: 353, maxX: 804, maxY: 494 },
    top: { minX: 561, minY: 171, maxX: 702, maxY: 314 },
  },
  {
    left: { minX: 458, minY: 352, maxX: 601, maxY: 492 },
    right: { minX: 665, minY: 355, maxX: 808, maxY: 495 },
    top: { minX: 565, minY: 171, maxX: 706, maxY: 315 },
  },
  {
    left: { minX: 459, minY: 352, maxX: 602, maxY: 492 },
    right: { minX: 667, minY: 354, maxX: 809, maxY: 495 },
    top: { minX: 566, minY: 171, maxX: 708, maxY: 315 },
  },
  {
    left: { minX: 459, minY: 351, maxX: 602, maxY: 492 },
    right: { minX: 667, minY: 353, maxX: 810, maxY: 495 },
    top: { minX: 565, minY: 169, maxX: 708, maxY: 314 },
  },
  {
    left: { minX: 458, minY: 353, maxX: 602, maxY: 495 },
    right: { minX: 667, minY: 355, maxX: 812, maxY: 498 },
    top: { minX: 565, minY: 171, maxX: 709, maxY: 316 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 600, maxY: 493 },
    right: { minX: 665, minY: 353, maxX: 810, maxY: 496 },
    top: { minX: 563, minY: 167, maxX: 707, maxY: 313 },
  },
  {
    left: { minX: 454, minY: 351, maxX: 598, maxY: 494 },
    right: { minX: 664, minY: 353, maxX: 809, maxY: 496 },
    top: { minX: 561, minY: 167, maxX: 706, maxY: 313 },
  },
  {
    left: { minX: 454, minY: 350, maxX: 598, maxY: 493 },
    right: { minX: 664, minY: 352, maxX: 810, maxY: 495 },
    top: { minX: 561, minY: 165, maxX: 706, maxY: 312 },
  },
  {
    left: { minX: 455, minY: 351, maxX: 600, maxY: 494 },
    right: { minX: 665, minY: 353, maxX: 810, maxY: 497 },
    top: { minX: 563, minY: 166, maxX: 707, maxY: 313 },
  },
  {
    left: { minX: 457, minY: 353, maxX: 602, maxY: 495 },
    right: { minX: 667, minY: 355, maxX: 812, maxY: 499 },
    top: { minX: 565, minY: 169, maxX: 708, maxY: 315 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 602, maxY: 497 },
    right: { minX: 668, minY: 356, maxX: 813, maxY: 499 },
    top: { minX: 565, minY: 171, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 354, maxX: 603, maxY: 496 },
    right: { minX: 668, minY: 355, maxX: 813, maxY: 499 },
    top: { minX: 565, minY: 171, maxX: 709, maxY: 316 },
  },
  {
    left: { minX: 459, minY: 355, maxX: 603, maxY: 497 },
    right: { minX: 668, minY: 356, maxX: 813, maxY: 499 },
    top: { minX: 565, minY: 172, maxX: 708, maxY: 317 },
  },
  {
    left: { minX: 459, minY: 358, maxX: 602, maxY: 499 },
    right: { minX: 667, minY: 359, maxX: 812, maxY: 501 },
    top: { minX: 564, minY: 175, maxX: 707, maxY: 320 },
  },
  {
    left: { minX: 457, minY: 357, maxX: 600, maxY: 499 },
    right: { minX: 666, minY: 358, maxX: 810, maxY: 501 },
    top: { minX: 563, minY: 174, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 454, minY: 356, maxX: 598, maxY: 498 },
    right: { minX: 663, minY: 357, maxX: 808, maxY: 501 },
    top: { minX: 561, minY: 173, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 451, minY: 354, maxX: 595, maxY: 496 },
    right: { minX: 660, minY: 354, maxX: 806, maxY: 498 },
    top: { minX: 557, minY: 169, maxX: 700, maxY: 315 },
  },
  {
    left: { minX: 449, minY: 354, maxX: 593, maxY: 495 },
    right: { minX: 659, minY: 353, maxX: 804, maxY: 497 },
    top: { minX: 554, minY: 169, maxX: 698, maxY: 315 },
  },
  {
    left: { minX: 450, minY: 355, maxX: 594, maxY: 496 },
    right: { minX: 659, minY: 355, maxX: 804, maxY: 498 },
    top: { minX: 555, minY: 170, maxX: 698, maxY: 316 },
  },
  {
    left: { minX: 449, minY: 355, maxX: 593, maxY: 497 },
    right: { minX: 658, minY: 355, maxX: 802, maxY: 498 },
    top: { minX: 553, minY: 171, maxX: 697, maxY: 317 },
  },
  {
    left: { minX: 450, minY: 357, maxX: 593, maxY: 497 },
    right: { minX: 658, minY: 356, maxX: 802, maxY: 499 },
    top: { minX: 553, minY: 173, maxX: 697, maxY: 318 },
  },
  {
    left: { minX: 450, minY: 358, maxX: 593, maxY: 499 },
    right: { minX: 657, minY: 357, maxX: 802, maxY: 501 },
    top: { minX: 553, minY: 175, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 451, minY: 361, maxX: 593, maxY: 501 },
    right: { minX: 657, minY: 360, maxX: 801, maxY: 503 },
    top: { minX: 553, minY: 179, maxX: 695, maxY: 323 },
  },
  {
    left: { minX: 453, minY: 360, maxX: 595, maxY: 500 },
    right: { minX: 659, minY: 359, maxX: 804, maxY: 501 },
    top: { minX: 555, minY: 177, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 453, minY: 360, maxX: 595, maxY: 500 },
    right: { minX: 659, minY: 359, maxX: 803, maxY: 501 },
    top: { minX: 555, minY: 177, maxX: 697, maxY: 321 },
  },
  {
    left: { minX: 454, minY: 359, maxX: 596, maxY: 499 },
    right: { minX: 660, minY: 357, maxX: 804, maxY: 501 },
    top: { minX: 555, minY: 177, maxX: 698, maxY: 320 },
  },
  {
    left: { minX: 456, minY: 355, maxX: 598, maxY: 494 },
    right: { minX: 661, minY: 353, maxX: 807, maxY: 497 },
    top: { minX: 557, minY: 171, maxX: 701, maxY: 316 },
  },
  {
    left: { minX: 457, minY: 355, maxX: 599, maxY: 494 },
    right: { minX: 663, minY: 354, maxX: 808, maxY: 498 },
    top: { minX: 559, minY: 171, maxX: 702, maxY: 316 },
  },
  {
    left: { minX: 457, minY: 356, maxX: 598, maxY: 495 },
    right: { minX: 662, minY: 355, maxX: 807, maxY: 499 },
    top: { minX: 559, minY: 173, maxX: 702, maxY: 317 },
  },
  {
    left: { minX: 456, minY: 356, maxX: 597, maxY: 495 },
    right: { minX: 660, minY: 355, maxX: 806, maxY: 499 },
    top: { minX: 557, minY: 173, maxX: 700, maxY: 317 },
  },
  {
    left: { minX: 458, minY: 358, maxX: 599, maxY: 497 },
    right: { minX: 662, minY: 357, maxX: 807, maxY: 501 },
    top: { minX: 559, minY: 176, maxX: 701, maxY: 320 },
  },
  {
    left: { minX: 459, minY: 360, maxX: 599, maxY: 498 },
    right: { minX: 662, minY: 359, maxX: 807, maxY: 503 },
    top: { minX: 560, minY: 178, maxX: 702, maxY: 321 },
  },
  {
    left: { minX: 457, minY: 360, maxX: 597, maxY: 499 },
    right: { minX: 659, minY: 359, maxX: 804, maxY: 503 },
    top: { minX: 557, minY: 179, maxX: 699, maxY: 322 },
  },
  {
    left: { minX: 453, minY: 359, maxX: 594, maxY: 497 },
    right: { minX: 656, minY: 359, maxX: 801, maxY: 502 },
    top: { minX: 554, minY: 177, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 453, minY: 358, maxX: 593, maxY: 496 },
    right: { minX: 656, minY: 357, maxX: 801, maxY: 501 },
    top: { minX: 554, minY: 176, maxX: 696, maxY: 320 },
  },
  {
    left: { minX: 452, minY: 357, maxX: 592, maxY: 495 },
    right: { minX: 655, minY: 356, maxX: 800, maxY: 500 },
    top: { minX: 553, minY: 174, maxX: 694, maxY: 318 },
  },
  {
    left: { minX: 449, minY: 357, maxX: 590, maxY: 495 },
    right: { minX: 652, minY: 356, maxX: 797, maxY: 500 },
    top: { minX: 549, minY: 175, maxX: 692, maxY: 318 },
  },
  {
    left: { minX: 448, minY: 358, maxX: 588, maxY: 496 },
    right: { minX: 651, minY: 357, maxX: 795, maxY: 501 },
    top: { minX: 548, minY: 176, maxX: 690, maxY: 319 },
  },
  {
    left: { minX: 448, minY: 359, maxX: 588, maxY: 497 },
    right: { minX: 651, minY: 358, maxX: 795, maxY: 501 },
    top: { minX: 548, minY: 177, maxX: 690, maxY: 320 },
  },
  {
    left: { minX: 447, minY: 359, maxX: 587, maxY: 497 },
    right: { minX: 649, minY: 358, maxX: 794, maxY: 502 },
    top: { minX: 547, minY: 177, maxX: 688, maxY: 321 },
  },
  {
    left: { minX: 444, minY: 359, maxX: 584, maxY: 496 },
    right: { minX: 646, minY: 358, maxX: 790, maxY: 501 },
    top: { minX: 544, minY: 177, maxX: 685, maxY: 320 },
  },
  {
    left: { minX: 441, minY: 361, maxX: 581, maxY: 498 },
    right: { minX: 643, minY: 359, maxX: 787, maxY: 502 },
    top: { minX: 540, minY: 180, maxX: 681, maxY: 322 },
  },
  {
    left: { minX: 443, minY: 363, maxX: 583, maxY: 501 },
    right: { minX: 644, minY: 362, maxX: 788, maxY: 504 },
    top: { minX: 542, minY: 183, maxX: 682, maxY: 325 },
  },
  {
    left: { minX: 444, minY: 364, maxX: 583, maxY: 501 },
    right: { minX: 644, minY: 361, maxX: 788, maxY: 505 },
    top: { minX: 542, minY: 183, maxX: 682, maxY: 325 },
  },
  {
    left: { minX: 443, minY: 362, maxX: 583, maxY: 499 },
    right: { minX: 644, minY: 361, maxX: 787, maxY: 503 },
    top: { minX: 542, minY: 181, maxX: 682, maxY: 324 },
  },
  {
    left: { minX: 443, minY: 363, maxX: 582, maxY: 500 },
    right: { minX: 643, minY: 361, maxX: 786, maxY: 503 },
    top: { minX: 541, minY: 183, maxX: 681, maxY: 324 },
  },
  {
    left: { minX: 444, minY: 362, maxX: 583, maxY: 498 },
    right: { minX: 643, minY: 361, maxX: 786, maxY: 503 },
    top: { minX: 542, minY: 183, maxX: 682, maxY: 324 },
  },
  {
    left: { minX: 446, minY: 363, maxX: 584, maxY: 498 },
    right: { minX: 645, minY: 361, maxX: 787, maxY: 503 },
    top: { minX: 543, minY: 184, maxX: 683, maxY: 325 },
  },
  {
    left: { minX: 445, minY: 362, maxX: 583, maxY: 497 },
    right: { minX: 644, minY: 360, maxX: 786, maxY: 501 },
    top: { minX: 543, minY: 183, maxX: 682, maxY: 324 },
  },
  {
    left: { minX: 447, minY: 363, maxX: 585, maxY: 498 },
    right: { minX: 645, minY: 361, maxX: 786, maxY: 502 },
    top: { minX: 545, minY: 185, maxX: 683, maxY: 325 },
  },
  {
    left: { minX: 449, minY: 362, maxX: 586, maxY: 496 },
    right: { minX: 646, minY: 361, maxX: 787, maxY: 501 },
    top: { minX: 546, minY: 185, maxX: 684, maxY: 324 },
  },
  {
    left: { minX: 449, minY: 362, maxX: 585, maxY: 496 },
    right: { minX: 645, minY: 360, maxX: 785, maxY: 499 },
    top: { minX: 545, minY: 185, maxX: 682, maxY: 324 },
  },
  {
    left: { minX: 453, minY: 363, maxX: 588, maxY: 497 },
    right: { minX: 647, minY: 361, maxX: 787, maxY: 499 },
    top: { minX: 547, minY: 187, maxX: 684, maxY: 326 },
  },
  {
    left: { minX: 456, minY: 362, maxX: 590, maxY: 495 },
    right: { minX: 649, minY: 360, maxX: 788, maxY: 498 },
    top: { minX: 549, minY: 187, maxX: 686, maxY: 325 },
  },
  {
    left: { minX: 459, minY: 362, maxX: 593, maxY: 494 },
    right: { minX: 652, minY: 359, maxX: 791, maxY: 497 },
    top: { minX: 553, minY: 187, maxX: 688, maxY: 325 },
  },
  {
    left: { minX: 463, minY: 361, maxX: 596, maxY: 492 },
    right: { minX: 655, minY: 359, maxX: 794, maxY: 496 },
    top: { minX: 556, minY: 187, maxX: 691, maxY: 324 },
  },
  {
    left: { minX: 466, minY: 359, maxX: 599, maxY: 490 },
    right: { minX: 657, minY: 357, maxX: 796, maxY: 493 },
    top: { minX: 559, minY: 185, maxX: 693, maxY: 322 },
  },
  {
    left: { minX: 467, minY: 361, maxX: 599, maxY: 491 },
    right: { minX: 657, minY: 358, maxX: 795, maxY: 494 },
    top: { minX: 559, minY: 189, maxX: 693, maxY: 324 },
  },
  {
    left: { minX: 469, minY: 359, maxX: 600, maxY: 489 },
    right: { minX: 658, minY: 357, maxX: 795, maxY: 492 },
    top: { minX: 561, minY: 187, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 471, minY: 359, maxX: 601, maxY: 487 },
    right: { minX: 659, minY: 356, maxX: 795, maxY: 491 },
    top: { minX: 561, minY: 187, maxX: 694, maxY: 322 },
  },
  {
    left: { minX: 474, minY: 360, maxX: 604, maxY: 488 },
    right: { minX: 661, minY: 357, maxX: 797, maxY: 491 },
    top: { minX: 565, minY: 190, maxX: 696, maxY: 323 },
  },
  {
    left: { minX: 477, minY: 357, maxX: 606, maxY: 485 },
    right: { minX: 663, minY: 355, maxX: 797, maxY: 488 },
    top: { minX: 567, minY: 189, maxX: 698, maxY: 321 },
  },
  {
    left: { minX: 479, minY: 359, maxX: 607, maxY: 486 },
    right: { minX: 663, minY: 357, maxX: 797, maxY: 489 },
    top: { minX: 568, minY: 191, maxX: 699, maxY: 323 },
  },
  {
    left: { minX: 483, minY: 357, maxX: 610, maxY: 483 },
    right: { minX: 667, minY: 355, maxX: 800, maxY: 487 },
    top: { minX: 573, minY: 190, maxX: 702, maxY: 322 },
  },
  {
    left: { minX: 485, minY: 357, maxX: 612, maxY: 481 },
    right: { minX: 668, minY: 355, maxX: 800, maxY: 486 },
    top: { minX: 575, minY: 191, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 487, minY: 356, maxX: 613, maxY: 481 },
    right: { minX: 669, minY: 355, maxX: 801, maxY: 485 },
    top: { minX: 577, minY: 192, maxX: 705, maxY: 321 },
  },
  {
    left: { minX: 488, minY: 357, maxX: 613, maxY: 480 },
    right: { minX: 669, minY: 355, maxX: 800, maxY: 485 },
    top: { minX: 577, minY: 193, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 489, minY: 357, maxX: 614, maxY: 480 },
    right: { minX: 669, minY: 356, maxX: 799, maxY: 485 },
    top: { minX: 577, minY: 195, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 490, minY: 358, maxX: 614, maxY: 481 },
    right: { minX: 669, minY: 357, maxX: 798, maxY: 485 },
    top: { minX: 578, minY: 196, maxX: 704, maxY: 324 },
  },
  {
    left: { minX: 490, minY: 356, maxX: 614, maxY: 478 },
    right: { minX: 669, minY: 355, maxX: 798, maxY: 483 },
    top: { minX: 578, minY: 194, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 492, minY: 355, maxX: 615, maxY: 476 },
    right: { minX: 669, minY: 353, maxX: 798, maxY: 481 },
    top: { minX: 579, minY: 194, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 493, minY: 356, maxX: 615, maxY: 477 },
    right: { minX: 669, minY: 355, maxX: 798, maxY: 481 },
    top: { minX: 579, minY: 195, maxX: 704, maxY: 322 },
  },
  {
    left: { minX: 493, minY: 355, maxX: 616, maxY: 476 },
    right: { minX: 670, minY: 354, maxX: 797, maxY: 480 },
    top: { minX: 580, minY: 195, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 495, minY: 354, maxX: 616, maxY: 474 },
    right: { minX: 671, minY: 353, maxX: 798, maxY: 478 },
    top: { minX: 581, minY: 194, maxX: 705, maxY: 320 },
  },
  {
    left: { minX: 497, minY: 353, maxX: 618, maxY: 473 },
    right: { minX: 672, minY: 353, maxX: 798, maxY: 477 },
    top: { minX: 583, minY: 195, maxX: 706, maxY: 320 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 617, maxY: 471 },
    right: { minX: 671, minY: 351, maxX: 796, maxY: 475 },
    top: { minX: 582, minY: 194, maxX: 705, maxY: 319 },
  },
  {
    left: { minX: 495, minY: 355, maxX: 616, maxY: 473 },
    right: { minX: 669, minY: 353, maxX: 795, maxY: 477 },
    top: { minX: 581, minY: 197, maxX: 704, maxY: 321 },
  },
  {
    left: { minX: 496, minY: 352, maxX: 616, maxY: 470 },
    right: { minX: 670, minY: 351, maxX: 795, maxY: 474 },
    top: { minX: 581, minY: 195, maxX: 704, maxY: 318 },
  },
  {
    left: { minX: 497, minY: 352, maxX: 616, maxY: 470 },
    right: { minX: 669, minY: 351, maxX: 794, maxY: 474 },
    top: { minX: 581, minY: 195, maxX: 703, maxY: 319 },
  },
  {
    left: { minX: 498, minY: 353, maxX: 617, maxY: 470 },
    right: { minX: 670, minY: 351, maxX: 794, maxY: 474 },
    top: { minX: 583, minY: 197, maxX: 704, maxY: 320 },
  },
  {
    left: { minX: 501, minY: 351, maxX: 619, maxY: 468 },
    right: { minX: 672, minY: 351, maxX: 796, maxY: 472 },
    top: { minX: 585, minY: 197, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 502, minY: 352, maxX: 620, maxY: 468 },
    right: { minX: 673, minY: 351, maxX: 796, maxY: 472 },
    top: { minX: 586, minY: 197, maxX: 706, maxY: 319 },
  },
  {
    left: { minX: 503, minY: 351, maxX: 621, maxY: 467 },
    right: { minX: 673, minY: 350, maxX: 796, maxY: 471 },
    top: { minX: 587, minY: 197, maxX: 707, maxY: 319 },
  },
  {
    left: { minX: 505, minY: 352, maxX: 622, maxY: 468 },
    right: { minX: 675, minY: 352, maxX: 797, maxY: 472 },
    top: { minX: 589, minY: 199, maxX: 709, maxY: 320 },
  },
  {
    left: { minX: 508, minY: 353, maxX: 624, maxY: 469 },
    right: { minX: 676, minY: 353, maxX: 798, maxY: 473 },
    top: { minX: 591, minY: 201, maxX: 710, maxY: 322 },
  },
  {
    left: { minX: 508, minY: 353, maxX: 624, maxY: 468 },
    right: { minX: 676, minY: 352, maxX: 797, maxY: 472 },
    top: { minX: 591, minY: 201, maxX: 709, maxY: 321 },
  },
  {
    left: { minX: 509, minY: 353, maxX: 625, maxY: 467 },
    right: { minX: 677, minY: 351, maxX: 798, maxY: 471 },
    top: { minX: 591, minY: 201, maxX: 710, maxY: 320 },
  },
  {
    left: { minX: 513, minY: 353, maxX: 628, maxY: 467 },
    right: { minX: 680, minY: 352, maxX: 801, maxY: 471 },
    top: { minX: 595, minY: 202, maxX: 713, maxY: 321 },
  },
  {
    left: { minX: 515, minY: 353, maxX: 629, maxY: 466 },
    right: { minX: 681, minY: 352, maxX: 802, maxY: 471 },
    top: { minX: 597, minY: 202, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 516, minY: 352, maxX: 630, maxY: 465 },
    right: { minX: 681, minY: 352, maxX: 802, maxY: 470 },
    top: { minX: 597, minY: 203, maxX: 714, maxY: 321 },
  },
  {
    left: { minX: 516, minY: 356, maxX: 630, maxY: 469 },
    right: { minX: 681, minY: 355, maxX: 800, maxY: 473 },
    top: { minX: 597, minY: 207, maxX: 714, maxY: 325 },
  },
  {
    left: { minX: 518, minY: 355, maxX: 631, maxY: 467 },
    right: { minX: 682, minY: 354, maxX: 801, maxY: 471 },
    top: { minX: 599, minY: 206, maxX: 715, maxY: 323 },
  },
  {
    left: { minX: 519, minY: 356, maxX: 632, maxY: 467 },
    right: { minX: 683, minY: 355, maxX: 802, maxY: 471 },
    top: { minX: 600, minY: 208, maxX: 715, maxY: 324 },
  },
  {
    left: { minX: 520, minY: 358, maxX: 632, maxY: 469 },
    right: { minX: 683, minY: 357, maxX: 801, maxY: 473 },
    top: { minX: 600, minY: 211, maxX: 715, maxY: 326 },
  },
  {
    left: { minX: 522, minY: 357, maxX: 634, maxY: 468 },
    right: { minX: 685, minY: 355, maxX: 802, maxY: 472 },
    top: { minX: 602, minY: 209, maxX: 717, maxY: 325 },
  },
  {
    left: { minX: 522, minY: 355, maxX: 634, maxY: 466 },
    right: { minX: 684, minY: 355, maxX: 802, maxY: 470 },
    top: { minX: 601, minY: 209, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 521, minY: 358, maxX: 633, maxY: 469 },
    right: { minX: 683, minY: 357, maxX: 800, maxY: 473 },
    top: { minX: 601, minY: 212, maxX: 715, maxY: 327 },
  },
  {
    left: { minX: 522, minY: 355, maxX: 634, maxY: 466 },
    right: { minX: 684, minY: 355, maxX: 802, maxY: 470 },
    top: { minX: 602, minY: 209, maxX: 716, maxY: 324 },
  },
  {
    left: { minX: 524, minY: 355, maxX: 636, maxY: 465 },
    right: { minX: 686, minY: 355, maxX: 803, maxY: 469 },
    top: { minX: 604, minY: 209, maxX: 718, maxY: 324 },
  },
  {
    left: { minX: 526, minY: 355, maxX: 637, maxY: 465 },
    right: { minX: 687, minY: 355, maxX: 804, maxY: 470 },
    top: { minX: 605, minY: 209, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 526, minY: 355, maxX: 637, maxY: 464 },
    right: { minX: 687, minY: 354, maxX: 804, maxY: 469 },
    top: { minX: 606, minY: 209, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 528, minY: 353, maxX: 638, maxY: 463 },
    right: { minX: 689, minY: 353, maxX: 805, maxY: 468 },
    top: { minX: 607, minY: 208, maxX: 721, maxY: 323 },
  },
  {
    left: { minX: 527, minY: 355, maxX: 638, maxY: 465 },
    right: { minX: 687, minY: 356, maxX: 804, maxY: 470 },
    top: { minX: 607, minY: 211, maxX: 720, maxY: 325 },
  },
  {
    left: { minX: 529, minY: 351, maxX: 639, maxY: 461 },
    right: { minX: 689, minY: 351, maxX: 806, maxY: 465 },
    top: { minX: 608, minY: 207, maxX: 722, maxY: 321 },
  },
  {
    left: { minX: 528, minY: 355, maxX: 638, maxY: 464 },
    right: { minX: 688, minY: 355, maxX: 804, maxY: 469 },
    top: { minX: 607, minY: 211, maxX: 720, maxY: 324 },
  },
  {
    left: { minX: 526, minY: 353, maxX: 637, maxY: 463 },
    right: { minX: 687, minY: 353, maxX: 803, maxY: 467 },
    top: { minX: 606, minY: 209, maxX: 720, maxY: 323 },
  },
  {
    left: { minX: 525, minY: 353, maxX: 635, maxY: 462 },
    right: { minX: 685, minY: 353, maxX: 802, maxY: 467 },
    top: { minX: 604, minY: 208, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 525, minY: 353, maxX: 635, maxY: 463 },
    right: { minX: 685, minY: 352, maxX: 801, maxY: 467 },
    top: { minX: 603, minY: 208, maxX: 717, maxY: 322 },
  },
  {
    left: { minX: 525, minY: 353, maxX: 635, maxY: 462 },
    right: { minX: 685, minY: 352, maxX: 801, maxY: 466 },
    top: { minX: 603, minY: 208, maxX: 717, maxY: 322 },
  },
  {
    left: { minX: 526, minY: 352, maxX: 636, maxY: 462 },
    right: { minX: 687, minY: 352, maxX: 802, maxY: 466 },
    top: { minX: 605, minY: 207, maxX: 718, maxY: 322 },
  },
  {
    left: { minX: 527, minY: 351, maxX: 638, maxY: 461 },
    right: { minX: 687, minY: 351, maxX: 804, maxY: 465 },
    top: { minX: 606, minY: 206, maxX: 720, maxY: 320 },
  },
  {
    left: { minX: 527, minY: 352, maxX: 638, maxY: 461 },
    right: { minX: 688, minY: 351, maxX: 804, maxY: 465 },
    top: { minX: 607, minY: 207, maxX: 720, maxY: 321 },
  },
  {
    left: { minX: 527, minY: 351, maxX: 638, maxY: 461 },
    right: { minX: 688, minY: 351, maxX: 804, maxY: 465 },
    top: { minX: 607, minY: 207, maxX: 720, maxY: 321 },
  },
  {
    left: { minX: 529, minY: 351, maxX: 639, maxY: 461 },
    right: { minX: 689, minY: 352, maxX: 806, maxY: 466 },
    top: { minX: 608, minY: 207, maxX: 722, maxY: 322 },
  },
  {
    left: { minX: 530, minY: 350, maxX: 640, maxY: 460 },
    right: { minX: 691, minY: 351, maxX: 807, maxY: 465 },
    top: { minX: 610, minY: 205, maxX: 724, maxY: 320 },
  },
  {
    left: { minX: 530, minY: 349, maxX: 641, maxY: 459 },
    right: { minX: 691, minY: 349, maxX: 808, maxY: 464 },
    top: { minX: 611, minY: 204, maxX: 725, maxY: 319 },
  },
  {
    left: { minX: 530, minY: 349, maxX: 641, maxY: 459 },
    right: { minX: 691, minY: 349, maxX: 808, maxY: 464 },
    top: { minX: 611, minY: 204, maxX: 725, maxY: 319 },
  },
];
