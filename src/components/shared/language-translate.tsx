import React from 'react';
import Link from 'next/link';
import { Languages, LayoutGrid, LogOut, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const LanguageTranslate = () => {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild  className='relative h-8 w-8 rounded-full border flex items-center justify-center border-input'>
                <div className='relative h-8 w-8 rounded-full'>

                <Languages className='w-[1.2rem] h-[1.2rem] ' />
                </div>
            
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='bottom'>Change Language</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className='w-56' align='end' forceMount>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:cursor-pointer' >
            English
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:cursor-pointer' >
            French
          </DropdownMenuItem>
        </DropdownMenuGroup>
    
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageTranslate;
