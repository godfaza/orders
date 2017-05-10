use orders;
CREATE TABLE IF NOT EXISTS `orders`.`User` (
`id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR(100) NOT NULL ,
`userName` VARCHAR(20) NOT NULL ,
`password` VARCHAR(100) NOT NULL ,
`email` VARCHAR(100) NOT NULL ,
`picture` VARCHAR(100) NULL ,
`Group_id` INT NOT NULL ,
PRIMARY KEY (`id`, `Group_id`) ,
UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) ,
INDEX `fk_User_Group1_idx` (`Group_id` ASC) ,
CONSTRAINT `fk_User_Group1`
FOREIGN KEY (`Group_id` )
REFERENCES `orders`.`Groups` (`id` )
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
